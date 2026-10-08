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

#### `assemblyVariants` · [`[DesWorkspaceInsInsightAssemblyVariantLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-assembly-variant-link.md) non-null object

Assembly variants connected to the insight.

#### `bomReleases` · [`[DesWorkspaceInsInsightBomReleaseLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-release-link.md) non-null object

Released BOMs connected to the insight.

#### `boms` · [`[DesWorkspaceInsInsightBomLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-bom-link.md) non-null object

Work-in-progress BOMs connected to the insight.

#### `componentRevisions` · [`[DesWorkspaceInsInsightComponentRevisionLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-revision-link.md) non-null object

Component revisions referenced by the insight.

#### `components` · [`[DesWorkspaceInsInsightComponentLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-component-link.md) non-null object

Components referenced by the insight.

#### `consolidatedBomReleases` · [`[DesWorkspaceInsInsightConsolidatedBomReleaseLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-release-link.md) non-null object

Consolidated BOM releases linked to the insight.

#### `consolidatedBoms` · [`[DesWorkspaceInsInsightConsolidatedBomLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-consolidated-bom-link.md) non-null object

Consolidated BOMs linked to the insight.

#### `parts` · [`[DesWorkspaceInsInsightPartLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-part-link.md) non-null object

Parts associated with the insight.

#### `projects` · [`[DesWorkspaceInsInsightProjectLink!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight-project-link.md) non-null object

Projects associated with the insight.
