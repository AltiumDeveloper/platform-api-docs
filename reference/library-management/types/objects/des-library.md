---
title: "DesLibrary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesLibrary

Information about your library. All component data in A365 is stored in your library.

### Returned By

[`desLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-library.md) query

### Member Of

[`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
type DesLibrary {
  components(
    after: String
    before: String
    first: Int
    last: Int
    where: DesComponentFilterInput
  ): DesComponentConnection
  componentTemplates(
    after: String
    before: String
    first: Int
    last: Int
  ): DesComponentTemplateConnection
  componentTypes(
    after: String
    before: String
    first: Int
    last: Int
    where: DesComponentTypeFilterInput
  ): DesComponentTypeConnection
  createdAt: DateTime!
  createdBy: DesUser!
  datasheets(
    after: String
    before: String
    first: Int
    last: Int
    where: DesDatasheetFilterInput
  ): DesDatasheetConnection
  description: String!
  downloadUrlsByTokens(
    tokens: [String!]!
  ): [String]!
  eventChannel: String!
  folders(
    where: DesFolderFilterInput
  ): [DesFolder!]!
  footprints(
    after: String
    before: String
    first: Int
    last: Int
    where: DesFootprintFilterInput
  ): DesFootprintConnection
  name: String!
  reuseBlocks(
    after: String
    before: String
    first: Int
    last: Int
  ): DesReuseBlockConnection
  symbols(
    after: String
    before: String
    first: Int
    last: Int
    where: DesSymbolFilterInput
  ): DesSymbolConnection
  updatedAt: DateTime!
  updatedBy: DesUser!
  version: String!
}
```

### Fields

#### `DesLibrary.components` · [`DesComponentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection.md) object library-management

Gets library components.

##### `DesLibrary.components.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.components.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.components.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.components.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesLibrary.components.where` · [`DesComponentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-filter-input.md) input library-management

#### `DesLibrary.componentTemplates` · [`DesComponentTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-connection.md) object library-management

Gets library component templates.

##### `DesLibrary.componentTemplates.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.componentTemplates.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.componentTemplates.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.componentTemplates.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `DesLibrary.componentTypes` · [`DesComponentTypeConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-connection.md) object library-management

Gets library component types.

##### `DesLibrary.componentTypes.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.componentTypes.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.componentTypes.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.componentTypes.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesLibrary.componentTypes.where` · [`DesComponentTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) input library-management

#### `DesLibrary.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date and time the library was created.

#### `DesLibrary.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user that created the library.

#### `DesLibrary.datasheets` · [`DesDatasheetConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection.md) object library-management

Gets library datasheets.

##### `DesLibrary.datasheets.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.datasheets.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.datasheets.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.datasheets.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesLibrary.datasheets.where` · [`DesDatasheetFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) input library-management

#### `DesLibrary.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A description of the library.

#### `DesLibrary.downloadUrlsByTokens` · [`[String]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

\*PROTOTYPE, SUBJECT TO CHANGE\*

##### `DesLibrary.downloadUrlsByTokens.tokens` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of tokens to get download URLs for.

#### `DesLibrary.eventChannel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The event channel of the library.

#### `DesLibrary.folders` · [`[DesFolder!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) non-null object platform

Gets library folders.

##### `DesLibrary.folders.where` · [`DesFolderFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-folder-filter-input.md) input platform

#### `DesLibrary.footprints` · [`DesFootprintConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection.md) object library-management

Gets library footprints.

##### `DesLibrary.footprints.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.footprints.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.footprints.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.footprints.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesLibrary.footprints.where` · [`DesFootprintFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) input library-management

#### `DesLibrary.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the library.

#### `DesLibrary.reuseBlocks` · [`DesReuseBlockConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection.md) object library-management

Gets library reuse blocks.

##### `DesLibrary.reuseBlocks.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.reuseBlocks.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.reuseBlocks.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.reuseBlocks.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `DesLibrary.symbols` · [`DesSymbolConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection.md) object library-management

Gets library symbols.

##### `DesLibrary.symbols.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesLibrary.symbols.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesLibrary.symbols.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesLibrary.symbols.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesLibrary.symbols.where` · [`DesSymbolFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) input library-management

#### `DesLibrary.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date and time the library was last updated.

#### `DesLibrary.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user that updated the library.

#### `DesLibrary.version` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The version of the library.
