---
title: "GloEvtSubscription"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription"
bounded_context: "Platform"
kind: "interfaces"
experimental: false
deprecated: false
---

# GloEvtSubscription

Represents the application subscription to some events.

### Common Data Model

- [Event Subscription](https://altiumdeveloper.github.io/cdm/classes/plt_EventSubscription/)
  - GRID: `grid:global::events:subscription/{id}`

### Returned By

[`gloEvtSubscriptionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-evt-subscription-by-id.md) query

### Member Of

[`GloEvtCreateSubscriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-create-subscription-payload.md) object

### Implemented By

[`GloEvtWebhookSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-webhook-subscription.md) object

```graphql
interface GloEvtSubscription {
  eventTypes: [String!]!
  state: GloEvtSubscriptionState!
  subscriptionId: String!
}
```

### Fields

#### `GloEvtSubscription.eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Events of interest.

#### `GloEvtSubscription.state` · [`GloEvtSubscriptionState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-evt-subscription-state.md) non-null enum platform

State of the subscription.

#### `GloEvtSubscription.subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Subscription identifier.
