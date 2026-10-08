---
title: "DesFolderFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-folder-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesFolderFilterInput

Input type for filtering folders in the design library.

```graphql
input DesFolderFilterInput {
  folderType: DesFolderType
  matchMode: DesFolderFilterMatchMode
  name: String
  parentFolderGuid: String
}
```

### Fields

#### `folderType` · [`DesFolderType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) enum

Filters folders by their type. If null, this condition is ignored.

#### `matchMode` · [`DesFolderFilterMatchMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-filter-match-mode.md) enum

Specifies how multiple conditions should be combined. Use AND to match all conditions, OR to match any condition. If null, AND operator is used.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Filters folders by their name. If null, this condition is ignored.

#### `parentFolderGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Filters folders by the GUID of their parent folder. If null, this condition is ignored.
