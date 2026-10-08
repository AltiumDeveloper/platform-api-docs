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

#### `components` · [`DesComponentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection.md) object

Gets library components.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesComponentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-filter-input.md) input

#### `componentTemplates` · [`DesComponentTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-connection.md) object

Gets library component templates.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `componentTypes` · [`DesComponentTypeConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-connection.md) object

Gets library component types.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesComponentTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) input

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date and time the library was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user that created the library.

#### `datasheets` · [`DesDatasheetConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet-connection.md) object

Gets library datasheets.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesDatasheetFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) input

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A description of the library.

#### `downloadUrlsByTokens` · [`[String]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

\*PROTOTYPE, SUBJECT TO CHANGE\*

##### `tokens` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of tokens to get download URLs for.

#### `eventChannel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The event channel of the library.

#### `folders` · [`[DesFolder!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) non-null object Platform

Gets library folders.

##### `where` · [`DesFolderFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-folder-filter-input.md) input Platform

#### `footprints` · [`DesFootprintConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint-connection.md) object

Gets library footprints.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesFootprintFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) input

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the library.

#### `reuseBlocks` · [`DesReuseBlockConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-connection.md) object

Gets library reuse blocks.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `symbols` · [`DesSymbolConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol-connection.md) object

Gets library symbols.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `where` · [`DesSymbolFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) input

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date and time the library was last updated.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user that updated the library.

#### `version` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The version of the library.
