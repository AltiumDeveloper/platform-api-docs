---
title: "DmRequiresProvidesMapping"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-mapping"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmRequiresProvidesMapping

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Mapping of a single required interface to the interface that provides it.

### Member Of

[`DmRequiresProvidesResolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-resolution.md) object

```graphql
type DmRequiresProvidesMapping {
  provides: DmFspProvides
  requires: DmFspRequires!
}
```

### Fields

#### `DmRequiresProvidesMapping.provides` · [`DmFspProvides`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-provides.md) object renesas-preview

The provided interface that satisfies the requirement, if resolved.

#### `DmRequiresProvidesMapping.requires` · [`DmFspRequires!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-requires.md) non-null object renesas-preview

The specific requirement entry.
