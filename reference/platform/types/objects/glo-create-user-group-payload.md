---
title: "GloCreateUserGroupPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-user-group-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloCreateUserGroupPayload

Represents output value for creation of a new group.

### Returned By

[`gloCreateUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-user-group.md) mutation

```graphql
type GloCreateUserGroupPayload {
  userGroup: GloUserGroup
}
```

### Fields

#### `userGroup` · [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) object

User group.
