---
title: "SupSoftwareProjectCreateSoftwareProjectPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-create-software-project-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectCreateSoftwareProjectPayload

Payload associated with creating a software project.

### Returned By

[`supSoftwareProjectCreateSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-create-software-project.md) mutation

```graphql
type SupSoftwareProjectCreateSoftwareProjectPayload {
  errors: [SupSoftwareProjectCreateSoftwareProjectError!]
  id: ID
}
```

### Fields

#### `errors` · [`[SupSoftwareProjectCreateSoftwareProjectError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-software-project-create-software-project-error.md) list union

#### `id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

Software project identifier.
