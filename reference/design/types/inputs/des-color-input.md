---
title: "DesColorInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-color-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesColorInput

Input for object color.

### Member Of

[`DesLifeCycleStateInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-input.md) input

```graphql
input DesColorInput {
  hexString: String
  rgbString: String
}
```

### Fields

#### `DesColorInput.hexString` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The color input in hex format, e.g. '#AABBCC'.

#### `DesColorInput.rgbString` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The color input in numerical format, e.g. 'RGB(255, 255, 0)'.
