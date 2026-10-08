---
title: "GloScrScript"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScript

Represents a script with details including its versions.

### Common Data Model

- [Script](https://w3id.org/altium/cdm/customization/Script)

  - IRI: [`https://w3id.org/altium/cdm/customization/Script`](https://w3id.org/altium/cdm/customization/Script)
  - GRID: `grid:workspace:{workspace-id}:scripts:script/{id}`

### Returned By

[`gloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script.md) query

### Member Of

[`GloScrCreateScriptPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-create-script-payload.md) object · [`GloScrRenameScriptPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-rename-script-payload.md) object · [`GloScrScriptConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-connection.md) object · [`GloScrScriptEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-edge.md) object

```graphql
type GloScrScript {
  createdAt: DateTime!
  description: String
  name: String!
  scriptId: String!
  versionById(
    scriptVersionId: String!
  ): GloScrScriptVersion
  versions(
    after: String
    before: String
    first: Int
    last: Int
    order: [GloScrScriptVersionSortInput!]
  ): GloScrScriptVersionConnection
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `versionById` · [`GloScrScriptVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) object

Retrieves a specific version of the script by its version ID.

##### `scriptVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `versions` · [`GloScrScriptVersionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-connection.md) object

Retrieves versions of the script with pagination options.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[GloScrScriptVersionSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-version-sort-input.md) list input
