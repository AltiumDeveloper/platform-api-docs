---
title: "DesRevisionNamingPolicy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-revision-naming-policy"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesRevisionNamingPolicy

Describes the naming policy for design revisions.

### Member Of

[`DesCreateRevisionNamingSchemeLevelInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-revision-naming-scheme-level-input.md) input · [`DesRevisionNamingSchemeLevel`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level.md) object · [`DesUpdateRevisionNamingSchemeLevelInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-level-input.md) input

```graphql
enum DesRevisionNamingPolicy {
  ALPHA_LOWER
  ALPHA_UPPER
  ASME_Y14_35M
  NUMERIC_ONE
  NUMERIC_ZERO
}
```

### Values

#### `DesRevisionNamingPolicy.ALPHA_LOWER`

Lower case letters.

#### `DesRevisionNamingPolicy.ALPHA_UPPER`

Upper case letters.

#### `DesRevisionNamingPolicy.ASME_Y14_35M`

Revision letters per ASME Y14.35M standard: ABCDEFGHJKLMNPRTUVWY.

#### `DesRevisionNamingPolicy.NUMERIC_ONE`

Number whose sequence starts at 1.

#### `DesRevisionNamingPolicy.NUMERIC_ZERO`

Number whose sequence starts at 0.
