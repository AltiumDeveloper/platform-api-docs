---
title: "DesWorkspaceInsRelatedEntities"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-related-entities"
bounded_context: "Insights"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceInsRelatedEntities

Entities linked to an insight across the workspace.

### Member Of

[`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) object

```graphql
type DesWorkspaceInsRelatedEntities {
  assemblyVariants: [DesWorkspaceInsInsightAssemblyVariantLink!]!
  bomReleases: [DesWorkspaceInsInsightBomReleaseLink!]!
  boms: [DesWorkspaceInsInsightBomLink!]!
  componentRevisions: [DesWorkspaceInsInsightComponentRevisionLink!]!
  components: [DesWorkspaceInsInsightComponentLink!]!
  consolidatedBomReleases: [DesWorkspaceInsInsightConsolidatedBomReleaseLink!]!
  consolidatedBoms: [DesWorkspaceInsInsightConsolidatedBomLink!]!
  parts: [DesWorkspaceInsInsightPartLink!]!
  projects: [DesWorkspaceInsInsightProjectLink!]!
}
```

### Fields

#### `DesWorkspaceInsRelatedEntities.assemblyVariants` · [`[DesWorkspaceInsInsightAssemblyVariantLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-assembly-variant-link.md) non-null object insights

Assembly variants connected to the insight.

#### `DesWorkspaceInsRelatedEntities.bomReleases` · [`[DesWorkspaceInsInsightBomReleaseLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-release-link.md) non-null object insights

Released BOMs connected to the insight.

#### `DesWorkspaceInsRelatedEntities.boms` · [`[DesWorkspaceInsInsightBomLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-link.md) non-null object insights

Work-in-progress BOMs connected to the insight.

#### `DesWorkspaceInsRelatedEntities.componentRevisions` · [`[DesWorkspaceInsInsightComponentRevisionLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-revision-link.md) non-null object insights

Component revisions referenced by the insight.

#### `DesWorkspaceInsRelatedEntities.components` · [`[DesWorkspaceInsInsightComponentLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-link.md) non-null object insights

Components referenced by the insight.

#### `DesWorkspaceInsRelatedEntities.consolidatedBomReleases` · [`[DesWorkspaceInsInsightConsolidatedBomReleaseLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-release-link.md) non-null object insights

Consolidated BOM releases linked to the insight.

#### `DesWorkspaceInsRelatedEntities.consolidatedBoms` · [`[DesWorkspaceInsInsightConsolidatedBomLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-link.md) non-null object insights

Consolidated BOMs linked to the insight.

#### `DesWorkspaceInsRelatedEntities.parts` · [`[DesWorkspaceInsInsightPartLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-link.md) non-null object insights

Parts associated with the insight.

#### `DesWorkspaceInsRelatedEntities.projects` · [`[DesWorkspaceInsInsightProjectLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-project-link.md) non-null object insights

Projects associated with the insight.
