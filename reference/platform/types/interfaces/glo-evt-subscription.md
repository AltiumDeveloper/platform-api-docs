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

- [Event Subscription](https://w3id.org/altium/cdm/platform/EventSubscription)

  - IRI: [`https://w3id.org/altium/cdm/platform/EventSubscription`](https://w3id.org/altium/cdm/platform/EventSubscription)
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

#### `eventTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Events of interest.

#### `state` · [`GloEvtSubscriptionState!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-evt-subscription-state.md) non-null enum

State of the subscription.

#### `subscriptionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Subscription identifier.
