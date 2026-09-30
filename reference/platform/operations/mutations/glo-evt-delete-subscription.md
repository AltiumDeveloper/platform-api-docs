---
title: "gloEvtDeleteSubscription"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-delete-subscription"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# gloEvtDeleteSubscription

Deletes the subscription with given identifier.

```graphql
gloEvtDeleteSubscription(
  input: GloEvtDeleteSubscriptionInput!
): GloEvtDeleteSubscriptionPayload!
```

### Arguments

#### `gloEvtDeleteSubscription.input` · [`GloEvtDeleteSubscriptionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-evt-delete-subscription-input.md) non-null input platform

### Type

#### [`GloEvtDeleteSubscriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-delete-subscription-payload.md) object platform

Represents the result of subscription deletion operation.
