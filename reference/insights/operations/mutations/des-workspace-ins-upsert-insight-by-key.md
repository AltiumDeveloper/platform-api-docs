---
title: "desWorkspaceInsUpsertInsightByKey"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/mutations/des-workspace-ins-upsert-insight-by-key"
bounded_context: "Insights"
kind: "mutations"
experimental: false
deprecated: false
---

# desWorkspaceInsUpsertInsightByKey

Creates or updates an insight by key.

### Type

#### [`DesWorkspaceInsUpsertInsightByKeyPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-upsert-insight-by-key-payload.md) object

Payload produced when upserting an insight using a deduplication key.

```graphql
desWorkspaceInsUpsertInsightByKey(
  input: DesWorkspaceInsUpsertInsightByKeyInput!
): DesWorkspaceInsUpsertInsightByKeyPayload!
```

### Arguments

#### `input` · [`DesWorkspaceInsUpsertInsightByKeyInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/inputs/des-workspace-ins-upsert-insight-by-key-input.md) non-null input
