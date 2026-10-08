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

#### `config` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

SAML configuration.

#### `enabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates if settings are enabled.

#### `scimEnabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates if SCIM is enabled.
