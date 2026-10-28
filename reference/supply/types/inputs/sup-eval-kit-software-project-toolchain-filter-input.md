---
title: "SupEvalKitSoftwareProjectToolchainFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-toolchain-filter-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectToolchainFilterInput

Represents the filter for searching project source toolchains.

### Member Of

[`supEvalKitSoftwareProjectToolchains`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-toolchains.md) query

```graphql
input SupEvalKitSoftwareProjectToolchainFilterInput {
  ids: [String!]
  q: String
}
```

### Fields

#### `ids` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by toolchain identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Searches by toolchain name.
