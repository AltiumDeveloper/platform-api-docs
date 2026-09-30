---
title: "GloEvtDeleteSubscriptionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-evt-delete-subscription-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloEvtDeleteSubscriptionInput

Information required to delete a subscription.

### Member Of

[`gloEvtDeleteSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-delete-subscription.md) mutation

```graphql
input GloEvtDeleteSubscriptionInput {
  subscriptionId: String!
}
```

### Fields

#### `GloEvtDeleteSubscriptionInput.subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Subscription identifier.
