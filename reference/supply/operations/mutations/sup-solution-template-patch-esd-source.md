---
title: "supSolutionTemplatePatchEsdSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-esd-source"
bounded_context: "Supply"
kind: "mutations"
experimental: false
deprecated: false
---

# supSolutionTemplatePatchEsdSource

Patch the ESD source of a solution template: upload, replace, or clear individual files.

```graphql
supSolutionTemplatePatchEsdSource(
  input: SupSolutionTemplateEsdSourcePatchInput!
): SupSolutionTemplatePatchEsdSourcePayload!
```

### Arguments

#### `supSolutionTemplatePatchEsdSource.input` · [`SupSolutionTemplateEsdSourcePatchInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-esd-source-patch-input.md) non-null input supply

### Type

#### [`SupSolutionTemplatePatchEsdSourcePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-esd-source-payload.md) object supply

Payload for patching the ESD source of a solution template.
