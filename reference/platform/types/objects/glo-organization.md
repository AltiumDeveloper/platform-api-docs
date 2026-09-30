---
title: "GloOrganization"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloOrganization

### Common Data Model

- [Organization](https://altiumdeveloper.github.io/cdm/classes/plt_Organization/)
  - GRID: `grid:global::platform:organization/{id}`

### Returned By

[`gloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-organization.md) query · [`gloOrganizationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-organization-by-id.md) query

### Member Of

[`DesOrganizationPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-organization-permission.md) object · [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object · [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) object

```graphql
type GloOrganization {
  accountType: GloAccountType!
  active: Boolean!
  allowDisplayUsers: Boolean!
  billingAddress: GloAddress
  currency: String
  customerNumber: String
  description: String
  fax: String
  groups: [GloUserGroup]
  id: ID!
  isPublic: Boolean!
  name: String
  organizationId: String
  organizationParameters: [GloParameter]
  phone: String
  picture: String
  samlSettings: GloSamlSettings
  shippingAddress: GloAddress
  users: [GloUser]
  webSite: String
}
```

### Fields

#### `GloOrganization.accountType` · [`GloAccountType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-account-type.md) non-null enum platform

Type of account (e.g., personal, business).

#### `GloOrganization.active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether this organization is active.

#### `GloOrganization.allowDisplayUsers` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether users associated with this organization can be displayed publicly.

#### `GloOrganization.billingAddress` · [`GloAddress`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-address.md) object platform

Address associated with billing purposes.

#### `GloOrganization.currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Preferred currency used by the organization.

#### `GloOrganization.customerNumber` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Customer-specific reference number for external systems.

#### `GloOrganization.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

General description or notes about the organization.

#### `GloOrganization.fax` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Fax number associated with the organization.

#### `GloOrganization.groups` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object platform

User groups associated with this organization.

#### `GloOrganization.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Organization global resource identifier.

#### `GloOrganization.isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether this organization is publicly visible.

#### `GloOrganization.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the organization.

#### `GloOrganization.organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Organization identifier.

#### `GloOrganization.organizationParameters` · [`[GloParameter]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-parameter.md) list object platform

List of parameters or configurations specific to the organization.

#### `GloOrganization.phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Primary contact phone number for the organization.

#### `GloOrganization.picture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Profile picture or logo URL for the organization.

#### `GloOrganization.samlSettings` · [`GloSamlSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-saml-settings.md) object platform

Configuration settings for SAML authentication.

#### `GloOrganization.shippingAddress` · [`GloAddress`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-address.md) object platform

Address used for shipping or delivery purposes.

#### `GloOrganization.users` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object platform

Users belonging to this organization.

#### `GloOrganization.webSite` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Official website URL of the organization.
