---
title: "DesUploadCollaborationSimulationPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-upload-collaboration-simulation-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUploadCollaborationSimulationPayload

Payload associated with uploading collaboration simulation.

### Returned By

[`desUploadCollaborationSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-collaboration-simulation.md) mutation

```graphql
type DesUploadCollaborationSimulationPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
