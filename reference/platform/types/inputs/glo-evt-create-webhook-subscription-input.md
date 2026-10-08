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

#### `eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Events of interest.

#### `filter` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional JSON path expression for filtering events based on the content.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional subscription name.

#### `secretKey` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Secret key used for event signing to ensure the delivery integrity.

#### `webhookUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL of the webhook where events are delivered.
