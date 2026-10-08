---
title: "sysLibUploadSoftwareLibrary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-lib-upload-software-library"
bounded_context: "System Design"
kind: "mutations"
experimental: true
deprecated: false
---

# sysLibUploadSoftwareLibrary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Upload a user software library archive, or replace one by libraryId

### Type

#### [`SysLibUploadSoftwareLibraryPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-lib-upload-software-library-payload.md) object **EXPERIMENTAL**

```graphql
sysLibUploadSoftwareLibrary(
  input: SysLibUploadSoftwareLibraryInput!
): SysLibUploadSoftwareLibraryPayload!
```

### Arguments

#### `input` · [`SysLibUploadSoftwareLibraryInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-lib-upload-software-library-input.md) non-null input
