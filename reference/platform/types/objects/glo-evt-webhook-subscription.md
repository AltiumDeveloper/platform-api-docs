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

#### [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) interface platform

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

#### `GloEvtWebhookSubscription.eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Events of interest.

#### `GloEvtWebhookSubscription.state` · [`GloEvtSubscriptionState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-evt-subscription-state.md) non-null enum platform

State of the subscription.

#### `GloEvtWebhookSubscription.subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Subscription identifier.

#### `GloEvtWebhookSubscription.webHookUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL of the webhook where events are delivered.
