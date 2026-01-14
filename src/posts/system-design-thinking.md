---
title: 复杂系统设计的取舍之道
date: 2025-10-24
tags: [Architecture, System Design]
---

在构建高可用分布式系统时，我们往往需要在 **一致性 (Consistency)** 与 **可用性 (Availability)** 之间做出艰难抉择。

> "There is no architecture, only trade-offs."

## CAP 理论的工程实践

在某金融核心系统重构过程中，我们面临着一个经典的挑战：如何在保证账户余额强一致性的同时，应对可能发生的网络分区？

### 1. 核心决策：CP 还是 AP？

对于账务系统，一致性是不可妥协的底线。我们选择了 **CP 模型**。

*   **写入路径**：采用 Raft 协议保证 Log Replication。
*   **读取路径**：支持 Leader Read 和 Follower Read（需配合 Read Index）。

```go
func (n *Node) Propose(ctx context.Context, cmd []byte) error {
    // 1. Propose to Raft group
    future := n.raftd.Propose(cmd)
    
    // 2. Wait for commit
    select {
    case <-future.Done():
        return future.Error()
    case <-ctx.Done():
        return ctx.Err()
    }
}
```

### 2. 降级策略

虽然选择了 CP，但我们不能完全放弃可用性。我们设计了多级降级策略：

1.  **同城双活**：低延迟，强一致。
2.  **异地灾备**：异步复制，RPO > 0。

## 性能优化

为了弥补 CP 模型带来的延迟（RTT），我们引入了以下优化：

*   **Batching**: 批量提交日志，减少磁盘 IOps。
*   **Pipelining**: 网络传输流水线化。

### 压测数据对比

| 策略 | TPS | P99 Latency |
| :--- | :--- | :--- |
| 原始方案 | 2,500 | 120ms |
| 批量提交 (Batch=10) | 18,000 | 150ms |
| 异步落盘 (Unsafe) | 45,000 | 10ms |

## 总结

系统设计没有银弹。每一次选择背后，都是对业务场景的深刻理解。对于金融级系统，**宁可拒绝服务，不可数据错乱**。
