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

#### `DesFolderFilterInput.folderType` · [`DesFolderType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-type.md) enum platform

Filters folders by their type. If null, this condition is ignored.

#### `DesFolderFilterInput.matchMode` · [`DesFolderFilterMatchMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-folder-filter-match-mode.md) enum platform

Specifies how multiple conditions should be combined. Use AND to match all conditions, OR to match any condition. If null, AND operator is used.

#### `DesFolderFilterInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Filters folders by their name. If null, this condition is ignored.

#### `DesFolderFilterInput.parentFolderGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Filters folders by the GUID of their parent folder. If null, this condition is ignored.
