---
title: "SchemaRegistryEntry"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/schema-registry-entry"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SchemaRegistryEntry

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`sysSdmSchemaVersionRegistry`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-schema-version-registry.md) query

```graphql
type SchemaRegistryEntry {
  cdmReleaseUrl: String!
  cdmVersion: String!
  description: String!
  isLatest: Boolean!
  isOnlySemantic: Boolean!
  isPullDeprecated: Boolean!
  isPushDeprecated: Boolean!
  migrationNotes: String!
  schemaVersion: String!
  status: String!
}
```

### Fields

#### `SchemaRegistryEntry.cdmReleaseUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SchemaRegistryEntry.cdmVersion` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SchemaRegistryEntry.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SchemaRegistryEntry.isLatest` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SchemaRegistryEntry.isOnlySemantic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SchemaRegistryEntry.isPullDeprecated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SchemaRegistryEntry.isPushDeprecated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

#### `SchemaRegistryEntry.migrationNotes` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SchemaRegistryEntry.schemaVersion` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SchemaRegistryEntry.status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
