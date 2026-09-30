---
title: "gloScrScript"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloScrScript

Retrieves a script by its ID.

```graphql
gloScrScript(
  scriptId: String!
): GloScrScript
```

### Arguments

#### `gloScrScript.scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`GloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) object customization

Represents a script with details including its versions.
