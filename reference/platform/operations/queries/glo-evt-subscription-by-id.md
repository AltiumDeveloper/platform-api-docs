---
title: "gloEvtSubscriptionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-evt-subscription-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloEvtSubscriptionById

Retrieves the information about subscription with given identifier.

```graphql
gloEvtSubscriptionById(
  subscriptionId: String!
): GloEvtSubscription
```

### Arguments

#### `gloEvtSubscriptionById.subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) interface platform

Represents the application subscription to some events.
