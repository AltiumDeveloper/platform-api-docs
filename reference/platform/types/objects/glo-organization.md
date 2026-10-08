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

- [Organization](https://w3id.org/altium/cdm/platform/Organization) — An Altium customer organization, represented by its Company Account. The Company Account brings together the organization's users and groups of users, its purchased licenses and the Altium 365 Workspaces created for it, along with a company profile (e.g. name, logo and website). Administrators manage it through the Company Dashboard.

  - IRI: [`https://w3id.org/altium/cdm/platform/Organization`](https://w3id.org/altium/cdm/platform/Organization)
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

#### `accountType` · [`GloAccountType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-account-type.md) non-null enum

Type of account (e.g., personal, business).

#### `active` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether this organization is active.

#### `allowDisplayUsers` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether users associated with this organization can be displayed publicly.

#### `billingAddress` · [`GloAddress`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-address.md) object

Address associated with billing purposes.

#### `currency` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Preferred currency used by the organization.

#### `customerNumber` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Customer-specific reference number for external systems.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

General description or notes about the organization.

#### `fax` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Fax number associated with the organization.

#### `groups` · [`[GloUserGroup]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) list object

User groups associated with this organization.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Organization global resource identifier.

#### `isPublic` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether this organization is publicly visible.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the organization.

#### `organizationId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Organization identifier.

#### `organizationParameters` · [`[GloParameter]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-parameter.md) list object

List of parameters or configurations specific to the organization.

#### `phone` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Primary contact phone number for the organization.

#### `picture` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Profile picture or logo URL for the organization.

#### `samlSettings` · [`GloSamlSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-saml-settings.md) object

Configuration settings for SAML authentication.

#### `shippingAddress` · [`GloAddress`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-address.md) object

Address used for shipping or delivery purposes.

#### `users` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object

Users belonging to this organization.

#### `webSite` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Official website URL of the organization.
