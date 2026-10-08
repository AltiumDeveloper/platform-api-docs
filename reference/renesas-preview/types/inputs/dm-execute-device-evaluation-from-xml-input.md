---
title: "DmExecuteDeviceEvaluationFromXmlInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/dm-execute-device-evaluation-from-xml-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# DmExecuteDeviceEvaluationFromXmlInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`dmExecuteDeviceEvaluationFromXml`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/dm-execute-device-evaluation-from-xml.md) mutation

```graphql
input DmExecuteDeviceEvaluationFromXmlInput {
  onlyFeasible: Boolean
  sessionId: String!
  xmlUpload: Upload!
}
```

### Fields

#### `onlyFeasible` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

#### `sessionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `xmlUpload` · [`Upload!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/upload.md) non-null scalar
