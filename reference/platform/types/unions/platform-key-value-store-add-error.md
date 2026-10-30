---
title: "PlatformKeyValueStoreAddError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-add-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreAddError

### Member Of

[`PlatformKeyValueStoreAddPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-add-payload.md) object

```graphql
union PlatformKeyValueStoreAddError = PlatformKeyValueStoreKeyInvalidError | PlatformKeyValueStoreValueTooLargeError | PlatformKeyValueStoreEntryExistsError | PlatformKeyValueStoreQuotaExceededError
```

### Possible types

#### [`PlatformKeyValueStoreKeyInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-key-invalid-error.md) object

#### [`PlatformKeyValueStoreValueTooLargeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-value-too-large-error.md) object

#### [`PlatformKeyValueStoreEntryExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-exists-error.md) object

#### [`PlatformKeyValueStoreQuotaExceededError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-quota-exceeded-error.md) object

Returned when adding the entry, or growing its value, would exceed the installation's quota.
