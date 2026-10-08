---
title: "GloScrScriptVersion"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloScrScriptVersion

Represents a version of a script.

### Common Data Model

- [Script Version](https://w3id.org/altium/cdm/customization/ScriptVersion)

  - IRI: [`https://w3id.org/altium/cdm/customization/ScriptVersion`](https://w3id.org/altium/cdm/customization/ScriptVersion)
  - GRID: `grid:workspace:{workspace-id}:scripts:script-version/{id}`

### Member Of

[`GloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) object · [`GloScrScriptVersionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-connection.md) object · [`GloScrScriptVersionEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version-edge.md) object · [`GloScrUpdateScriptPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-update-script-payload.md) object

```graphql
type GloScrScriptVersion {
  comment: String
  package: GloScrScriptPackage!
  scriptVersionId: String!
  timestamp: DateTime!
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `package` · [`GloScrScriptPackage!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-package.md) non-null object

#### `scriptVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `timestamp` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar
