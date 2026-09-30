---
title: "GloSamlSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-saml-settings"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloSamlSettings

### Member Of

[`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object

```graphql
type GloSamlSettings {
  config: String
  enabled: Boolean!
  scimEnabled: Boolean!
}
```

### Fields

#### `GloSamlSettings.config` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

SAML configuration.

#### `GloSamlSettings.enabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates if settings are enabled.

#### `GloSamlSettings.scimEnabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates if SCIM is enabled.
