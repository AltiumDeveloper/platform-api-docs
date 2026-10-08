---
title: "GloScrScriptVersionSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-version-sort-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloScrScriptVersionSortInput

Represents a version of a script.

```graphql
input GloScrScriptVersionSortInput {
  comment: SortEnumType
  package: GloScrScriptPackageSortInput
  scriptVersionId: SortEnumType
  timestamp: SortEnumType
}
```

### Fields

#### `comment` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `package` · [`GloScrScriptPackageSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-package-sort-input.md) input

#### `scriptVersionId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

#### `timestamp` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum
