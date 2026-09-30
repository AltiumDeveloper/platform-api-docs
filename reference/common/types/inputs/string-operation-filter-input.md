---
title: "StringOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input"
bounded_context: "Common"
kind: "inputs"
experimental: false
deprecated: false
---

# StringOperationFilterInput

### Member Of

[`DesComponentTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-type-filter-input.md) input · [`DesDatasheetFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) input · [`DesDesignItemFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-filter-input.md) input · [`DesDesignItemParameterFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-design-item-parameter-filter-input.md) input · [`DesFootprintFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) input · [`DesLayerFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) input · [`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input · [`DesReleaseFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) input · [`DesReleaseVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-variant-filter-input.md) input · [`DesSchematicFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) input · [`DesSharedWithMeProjectInfoFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input.md) input · [`DesSymbolFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) input · [`DesWipVariantFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-wip-variant-filter-input.md) input · [`DesWorkflowDefinitionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) input · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input · [`GloOAuthClientFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) input · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input · [`MotorStudioProjectGridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) input · [`PlatformTokenFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) input · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

```graphql
input StringOperationFilterInput {
  and: [StringOperationFilterInput!]
  contains: String
  endsWith: String
  eq: String
  in: [String]
  ncontains: String
  nendsWith: String
  neq: String
  nin: [String]
  nstartsWith: String
  or: [StringOperationFilterInput!]
  startsWith: String
}
```

### Fields

#### `StringOperationFilterInput.and` · [`[StringOperationFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) list input common

#### `StringOperationFilterInput.contains` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.endsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.eq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.in` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `StringOperationFilterInput.ncontains` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.nendsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.neq` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.nin` · [`[String]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

#### `StringOperationFilterInput.nstartsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `StringOperationFilterInput.or` · [`[StringOperationFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) list input common

#### `StringOperationFilterInput.startsWith` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common
