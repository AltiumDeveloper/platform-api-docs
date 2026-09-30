---
title: "GloEvtCreateSubscriptionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-create-subscription-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloEvtCreateSubscriptionPayload

Represents the result of subscription creation operation.

### Returned By

[`gloEvtCreateWebhookSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-create-webhook-subscription.md) mutation

```graphql
type GloEvtCreateSubscriptionPayload {
  errors: [GloEvtError!]!
  subscription: GloEvtSubscription
}
```

### Fields

#### `GloEvtCreateSubscriptionPayload.errors` · [`[GloEvtError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-error.md) non-null object platform

Errors that occurred during subscription creation (if any).

#### `GloEvtCreateSubscriptionPayload.subscription` · [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) interface platform

Information about created subscription.
