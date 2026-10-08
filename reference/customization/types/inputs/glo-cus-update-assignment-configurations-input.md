---
title: "GloCusUpdateAssignmentConfigurationsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-configurations-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusUpdateAssignmentConfigurationsInput

Represents input value for updating multiple eassignment configuration.

### Member Of

[`gloCusUpdateAssignmentConfigurations`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-cus-update-assignment-configurations.md) mutation

```graphql
input GloCusUpdateAssignmentConfigurationsInput {
  configurations: [GloCusUpdateAssignmentConfigurationInput!]!
}
```

### Fields

#### `configurations` · [`[GloCusUpdateAssignmentConfigurationInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-update-assignment-configuration-input.md) non-null input

Represents input value for updating assignment configuration.
