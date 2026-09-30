---
title: "gloEvtCreateWebhookSubscription"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-create-webhook-subscription"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# gloEvtCreateWebhookSubscription

Creates webhook-based subscription with given parameters.

```graphql
gloEvtCreateWebhookSubscription(
  input: GloEvtCreateWebhookSubscriptionInput!
): GloEvtCreateSubscriptionPayload!
```

### Arguments

#### `gloEvtCreateWebhookSubscription.input` · [`GloEvtCreateWebhookSubscriptionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-evt-create-webhook-subscription-input.md) non-null input platform

### Type

#### [`GloEvtCreateSubscriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-create-subscription-payload.md) object platform

Represents the result of subscription creation operation.
