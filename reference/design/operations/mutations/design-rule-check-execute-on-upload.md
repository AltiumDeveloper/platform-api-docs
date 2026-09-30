---
title: "designRuleCheckExecuteOnUpload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-rule-check-execute-on-upload"
bounded_context: "Design"
kind: "mutations"
experimental: true
deprecated: false
---

# designRuleCheckExecuteOnUpload

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Executes rule checks for the specified upload and returns the resulting rule check execution.

```graphql
designRuleCheckExecuteOnUpload(
  input: DesignRuleCheckExecuteOnUploadInput!
): DesignRuleCheckExecuteOnUploadPayload!
```

### Arguments

#### `designRuleCheckExecuteOnUpload.input` · [`DesignRuleCheckExecuteOnUploadInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-rule-check-execute-on-upload-input.md) non-null input design

### Type

#### [`DesignRuleCheckExecuteOnUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-rule-check-execute-on-upload-payload.md) object design **EXPERIMENTAL**
