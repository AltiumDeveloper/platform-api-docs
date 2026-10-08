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

#### `excludedAssemblyVariants` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Assembly variants that should be excluded from insights.

#### `excludedBomReleases` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Released BOMs excluded from insight consideration.

#### `excludedConsolidatedBomReleases` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Consolidated BOM releases excluded from insight consideration.

#### `excludedConsolidatedBoms` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Consolidated BOMs excluded from insight consideration.

#### `excludedProjects` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Projects that should be excluded from insights.

#### `excludedWipBoms` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Work-in-progress BOMs excluded from insight consideration.

#### `excludeNonActiveProjects` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Exclude non-active projects from insight processing.

#### `projectInactivityThresholdDays` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of inactivity days before a project is excluded.
