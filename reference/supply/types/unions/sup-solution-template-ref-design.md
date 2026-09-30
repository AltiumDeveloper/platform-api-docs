---
title: "SupSolutionTemplateRefDesign"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-ref-design"
bounded_context: "Supply"
kind: "unions"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesign

Union type for solution template and reference design types.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
union SupSolutionTemplateRefDesign = SupRefDesign | SupSolutionTemplate
```

### Possible types

#### [`SupSolutionTemplateRefDesign.SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object supply

A reference design model aggregates the relevant documents, files and parts.

#### [`SupSolutionTemplateRefDesign.SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object supply
