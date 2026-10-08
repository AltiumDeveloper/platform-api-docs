---
title: "GloEvtSubscriptionState"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-evt-subscription-state"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# GloEvtSubscriptionState

Represents the state of the subscription.

### Member Of

[`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) interface · [`GloEvtWebhookSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-webhook-subscription.md) object

```graphql
enum GloEvtSubscriptionState {
  ACTIVE
  INACTIVE
}
```

### Values

#### `ACTIVE`

Subscription is active and events of interest are dispatched to consumers.

#### `INACTIVE`

Subscription is not active and events are not dispatched to consumers.
