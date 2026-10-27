---
title: "Node"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node"
bounded_context: "Common"
kind: "interfaces"
experimental: false
deprecated: false
---

# Node

The node interface is implemented by entities that have a global unique identifier.

### Returned By

[`node`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/node.md) query

### Implemented By

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) object · [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) object · [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) object · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object · [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) object · [`DesProjectTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) object · [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) object · [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) object · [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object · [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object · [`DesTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) object · [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
interface Node {
  id: ID!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
