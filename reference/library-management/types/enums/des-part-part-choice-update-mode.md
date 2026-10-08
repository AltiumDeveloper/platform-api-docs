---
title: "DesPartPartChoiceUpdateMode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-part-part-choice-update-mode"
bounded_context: "Library Management"
kind: "enums"
experimental: false
deprecated: false
---

# DesPartPartChoiceUpdateMode

Specifies how existing part choices are handled during upload.

### Member Of

[`DesPartUploadComponentsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-input.md) input

```graphql
enum DesPartPartChoiceUpdateMode {
  RECREATE
  UPDATE
}
```

### Values

#### `RECREATE`

Replaces all existing part choices.

#### `UPDATE`

Adds only new part choices.
