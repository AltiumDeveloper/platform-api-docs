---
title: "DesCadWorkflowState"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-cad-workflow-state"
bounded_context: "Design"
kind: "enums"
experimental: false
deprecated: false
---

# DesCadWorkflowState

The workflow state for proposed changes.

### Member Of

[`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object · [`DesCadDesignInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-cad-design-input.md) input

```graphql
enum DesCadWorkflowState {
  NONE
  READY_TO_SEND_OR_RECEIVE_CHANGES
  RECEIVED_PROPOSED_CHANGES
  SENT_PROPOSED_CHANGES
}
```

### Values

#### `DesCadWorkflowState.NONE`

#### `DesCadWorkflowState.READY_TO_SEND_OR_RECEIVE_CHANGES`

#### `DesCadWorkflowState.RECEIVED_PROPOSED_CHANGES`

#### `DesCadWorkflowState.SENT_PROPOSED_CHANGES`
