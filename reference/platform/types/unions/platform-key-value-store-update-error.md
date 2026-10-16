---
title: "PlatformKeyValueStoreUpdateError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-key-value-store-update-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformKeyValueStoreUpdateError

### Member Of

[`PlatformKeyValueStoreUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-update-payload.md) object

```graphql
union PlatformKeyValueStoreUpdateError = PlatformKeyValueStoreKeyInvalidError | PlatformKeyValueStoreValueTooLargeError | PlatformKeyValueStoreEntryNotFoundError | PlatformKeyValueStoreQuotaExceededError
```

### Possible types

#### [`PlatformKeyValueStoreKeyInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-key-invalid-error.md) object

#### [`PlatformKeyValueStoreValueTooLargeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-value-too-large-error.md) object

#### [`PlatformKeyValueStoreEntryNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-entry-not-found-error.md) object

#### [`PlatformKeyValueStoreQuotaExceededError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-key-value-store-quota-exceeded-error.md) object

Returned when adding the entry, or growing its value, would exceed the installation's quota.
