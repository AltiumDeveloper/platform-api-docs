---
title: "KgRelationSemantic"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/kg-relation-semantic"
bounded_context: "Platform"
kind: "enums"
experimental: true
deprecated: false
---

# KgRelationSemantic

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Defines the semantic meaning of the relation. See net/wiki/spaces/GE/pages/3358752783/Relation+types for details.

### Member Of

[`KgRelation`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/kg-relation.md) object

```graphql
enum KgRelationSemantic {
  DERIVES_FROM
  DERIVES_INTO
  HAS_INPUT
  HAS_OUTPUT
  HAS_PART
  INFORMED_BY
  INFORMS
  INPUT_OF
  OUTPUT_OF
  PART_OF
  UNKNOWN @deprecated
}
```

### Values

#### `DERIVES_FROM`

#### `DERIVES_INTO`

#### `HAS_INPUT`

#### `HAS_OUTPUT`

#### `HAS_PART`

#### `INFORMED_BY`

#### `INFORMS`

#### `INPUT_OF`

#### `OUTPUT_OF`

#### `PART_OF`

#### Deprecated

#### `UNKNOWN` **DEPRECATED**

> **Deprecated:** Primarily here for backward compatibility with Vault. Don't use in the new code.
