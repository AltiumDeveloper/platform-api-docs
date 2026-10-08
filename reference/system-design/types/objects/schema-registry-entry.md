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

#### `cdmReleaseUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `cdmVersion` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `isLatest` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `isOnlySemantic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `isPullDeprecated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `isPushDeprecated` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `migrationNotes` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `schemaVersion` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `status` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
