---
title: "desAddDatasheetToComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-datasheet-to-component"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desAddDatasheetToComponent

Adds the specified datasheet to a component (does not affect the revision).

```graphql
desAddDatasheetToComponent(
  input: DesAddDatasheetToComponentInput!
): DesAddDatasheetToComponentPayload!
```

### Arguments

#### `desAddDatasheetToComponent.input` · [`DesAddDatasheetToComponentInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-add-datasheet-to-component-input.md) non-null input library-management

### Type

#### [`DesAddDatasheetToComponentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-add-datasheet-to-component-payload.md) object library-management

Payload associated with adding a datasheet to a component.
