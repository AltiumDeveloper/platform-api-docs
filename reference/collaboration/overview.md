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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types.txt)

## Common Data Model

- [Collaboration](https://altiumdeveloper.github.io/cdm/subsets/collaboration/) — Models collaboration on Workspace content: comment threads attached to a point, object or area of a document, the individual comments in each thread, and tasks that assign work to users or teams. In the product, comments are placed on documents of Workspace projects (e.g. through the Comments and Tasks panel in Altium Designer), and tasks are tracked on the Tasks page of a Workspace.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) | [Comment](https://w3id.org/altium/cdm/collaboration/Comment) [`https://w3id.org/altium/cdm/collaboration/Comment`](https://w3id.org/altium/cdm/collaboration/Comment) |
| [`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) | [Comment Thread](https://w3id.org/altium/cdm/collaboration/CommentThread) [`https://w3id.org/altium/cdm/collaboration/CommentThread`](https://w3id.org/altium/cdm/collaboration/CommentThread) |
| [`DesTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) | [Task](https://w3id.org/altium/cdm/collaboration/Task) [`https://w3id.org/altium/cdm/collaboration/Task`](https://w3id.org/altium/cdm/collaboration/Task) |

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
