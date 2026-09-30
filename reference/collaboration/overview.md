---
title: "Collaboration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/overview"
bounded_context: "Collaboration"
kind: "overview"
experimental: false
deprecated: false
---

# Collaboration

Comments, comment threads, mentions, annotations and tasks.

Concepts: see the **Collaboration** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/collaboration/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) — [Comment](https://altiumdeveloper.github.io/cdm/classes/col_Comment/)
- [`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) — [Comment Thread](https://altiumdeveloper.github.io/cdm/classes/col_CommentThread/): Comment Thread represents a structured discussion linked to a specific design object, document, or workspace item, capturing feedback, decisions, and context directly within the collaborative design environment.
  - GRID: `grid:workspace:{workspace-id}:collaboration:comment-thread/{id}`
- [`DesTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) — [Task](https://altiumdeveloper.github.io/cdm/classes/col_Task/): Task represents a discrete unit of work assigned to a user or team within the design workflow, used to track progress, responsibility, and completion status for design, review, or management activities.
  - GRID: `grid:workspace:{workspace-id}:collaboration:task/{id}`

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 5 | 0 |
| Mutations | 13 | 0 |
| Subscriptions | 1 | 0 |
| Objects | 32 | 0 |
| Inputs | 15 | 0 |
| Enums | 5 | 0 |
| Unions | 1 | 0 |
