---
title: "GloEvtCreateWebhookSubscriptionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-evt-create-webhook-subscription-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloEvtCreateWebhookSubscriptionInput

Represents the information required to create a webhook-based subscription.

### Member Of

[`gloEvtCreateWebhookSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-create-webhook-subscription.md) mutation

```graphql
input GloEvtCreateWebhookSubscriptionInput {
  eventTypes: [String!]!
  filter: String
  name: String
  secretKey: String!
  webhookUrl: String!
}
```

### Fields

#### `GloEvtCreateWebhookSubscriptionInput.eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Events of interest.

#### `GloEvtCreateWebhookSubscriptionInput.filter` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional JSON path expression for filtering events based on the content.

#### `GloEvtCreateWebhookSubscriptionInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional subscription name.

#### `GloEvtCreateWebhookSubscriptionInput.secretKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Secret key used for event signing to ensure the delivery integrity.

#### `GloEvtCreateWebhookSubscriptionInput.webhookUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL of the webhook where events are delivered.
