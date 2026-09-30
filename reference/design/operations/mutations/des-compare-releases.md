---
title: "desCompareReleases"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-compare-releases"
bounded_context: "Design"
kind: "mutations"
experimental: false
deprecated: false
---

# desCompareReleases

Runs schematic, PCB, or BOM comparisons between two project releases. Provides URL of the comparison result for web-browser.

```graphql
desCompareReleases(
  input: DesComparisonRunInput!
): DesComparisonRunPayload!
```

### Arguments

#### `desCompareReleases.input` · [`DesComparisonRunInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-comparison-run-input.md) non-null input design

### Type

#### [`DesComparisonRunPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-comparison-run-payload.md) object design
