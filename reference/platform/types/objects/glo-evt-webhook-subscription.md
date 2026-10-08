---
title: "GloEvtWebhookSubscription"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-webhook-subscription"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloEvtWebhookSubscription

Represents the webhook-based subscription.

### Interfaces

#### [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) interface

Represents the application subscription to some events.

```graphql
type GloEvtWebhookSubscription implements GloEvtSubscription {
  eventTypes: [String!]!
  state: GloEvtSubscriptionState!
  subscriptionId: String!
  webHookUrl: String!
}
```

### Fields

#### `eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Events of interest.

#### `state` · [`GloEvtSubscriptionState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-evt-subscription-state.md) non-null enum

State of the subscription.

#### `subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Subscription identifier.

#### `webHookUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL of the webhook where events are delivered.
