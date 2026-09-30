---
title: "GloCusUpdateAssignmentInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateAssignmentInput

Represents input value for extension point assignment update.

### Member Of

[`gloCusUpdateAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-update-assignment.md) mutation

```graphql
input GloCusUpdateAssignmentInput {
  script: GloCusUpdateWithScriptAssignmentInput
  scriptFile: GloCusUpdateWithScriptFileAssignmentInput
  workflow: GloCusUpdateWorkflowAssignmentInput
}
```

### Fields

#### `GloCusUpdateAssignmentInput.script` · [`GloCusUpdateWithScriptAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-with-script-assignment-input.md) input customization

Represents input value for assignment update with script id.

#### `GloCusUpdateAssignmentInput.scriptFile` · [`GloCusUpdateWithScriptFileAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-with-script-file-assignment-input.md) input customization

Represents input value for assignment update with script file.

#### `GloCusUpdateAssignmentInput.workflow` · [`GloCusUpdateWorkflowAssignmentInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-workflow-assignment-input.md) input customization

Represents input value for assignment update with workflow.
