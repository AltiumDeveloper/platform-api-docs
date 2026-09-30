---
title: "GloEvtDeleteSubscriptionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-delete-subscription-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloEvtDeleteSubscriptionPayload

Represents the result of subscription deletion operation.

### Returned By

[`gloEvtDeleteSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-delete-subscription.md) mutation

```graphql
type GloEvtDeleteSubscriptionPayload {
  errors: [GloEvtError!]!
}
```

### Fields

#### `GloEvtDeleteSubscriptionPayload.errors` · [`[GloEvtError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-error.md) non-null object platform

Errors that occurred during subscription deletion (if any).
