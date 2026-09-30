---
title: "DesWorkspaceInsProjectsSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-projects-settings"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsProjectsSettings

Project-level preferences affecting insight generation and visibility.

### Member Of

[`DesWorkspaceInsUserSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-user-settings.md) object

```graphql
type DesWorkspaceInsProjectsSettings {
  excludedAssemblyVariants: [ID!]!
  excludedBomReleases: [ID!]!
  excludedConsolidatedBomReleases: [ID!]!
  excludedConsolidatedBoms: [ID!]!
  excludedProjects: [ID!]!
  excludedWipBoms: [ID!]!
  excludeNonActiveProjects: Boolean!
  projectInactivityThresholdDays: Int!
}
```

### Fields

#### `DesWorkspaceInsProjectsSettings.excludedAssemblyVariants` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Assembly variants that should be excluded from insights.

#### `DesWorkspaceInsProjectsSettings.excludedBomReleases` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Released BOMs excluded from insight consideration.

#### `DesWorkspaceInsProjectsSettings.excludedConsolidatedBomReleases` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Consolidated BOM releases excluded from insight consideration.

#### `DesWorkspaceInsProjectsSettings.excludedConsolidatedBoms` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Consolidated BOMs excluded from insight consideration.

#### `DesWorkspaceInsProjectsSettings.excludedProjects` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Projects that should be excluded from insights.

#### `DesWorkspaceInsProjectsSettings.excludedWipBoms` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Work-in-progress BOMs excluded from insight consideration.

#### `DesWorkspaceInsProjectsSettings.excludeNonActiveProjects` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Exclude non-active projects from insight processing.

#### `DesWorkspaceInsProjectsSettings.projectInactivityThresholdDays` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Number of inactivity days before a project is excluded.
