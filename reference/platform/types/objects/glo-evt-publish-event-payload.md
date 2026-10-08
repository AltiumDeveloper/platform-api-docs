---
title: "GloEvtPublishEventPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-publish-event-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloEvtPublishEventPayload

Represents the result of event publishing operation.

### Returned By

[`gloEvtPublishEvent`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-publish-event.md) mutation

```graphql
type GloEvtPublishEventPayload {
  errors: [GloEvtError!]!
}
```

### Fields

#### `errors` · [`[GloEvtError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-error.md) non-null object

Errors that occurred during event publishing (if any).
