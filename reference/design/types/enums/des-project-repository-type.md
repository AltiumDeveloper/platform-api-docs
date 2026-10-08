---
title: "DesProjectRepositoryType"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-repository-type"
bounded_context: "Design"
kind: "enums"
experimental: false
deprecated: false
---

# DesProjectRepositoryType

The hosting location of a project's VCS repository.

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
enum DesProjectRepositoryType {
  EXTERNAL
  INTERNAL
}
```

### Values

#### `EXTERNAL`

The repository is hosted outside Altium 365.

#### `INTERNAL`

The repository is hosted inside Altium 365.
