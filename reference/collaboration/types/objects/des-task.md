---
title: "DesTask"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesTask

Task activities in Altium 365 workspace for workspace members.

### Common Data Model

- [Task](https://w3id.org/altium/cdm/collaboration/Task) — Task represents a discrete unit of work assigned to a user or team within the design workflow, used to track progress, responsibility, and completion status for design, review, or management activities.

  - IRI: [`https://w3id.org/altium/cdm/collaboration/Task`](https://w3id.org/altium/cdm/collaboration/Task)
  - GRID: `grid:workspace:{workspace-id}:collaboration:task/{id}`

### Member Of

[`DesCreateTaskPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-create-task-payload.md) object · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesTaskConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-connection.md) object · [`DesTaskEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task-edge.md) object · [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface

The node interface is implemented by entities that have a global unique identifier.

```graphql
type DesTask implements Node {
  assignee: DesUser!
  comments: [DesComment!]!
  createdAt: DateTime!
  createdBy: DesUser!
  description: String!
  id: ID!
  modifiedAt: DateTime!
  modifiedBy: DesUser!
  name: String!
  priority: DesTaskPriority!
  refId: String!
  status: DesTaskStatus!
}
```

### Fields

#### `assignee` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The assigned user.

#### `comments` · [`[DesComment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) non-null object

The list of task comments.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user who created the task.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The task description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier.

#### `modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last modification date.

#### `modifiedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user who modified the task.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The task name.

#### `priority` · [`DesTaskPriority!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-priority.md) non-null enum

The task priority.

#### `refId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The task identifier shown in Altium 365.

#### `status` · [`DesTaskStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/enums/des-task-status.md) non-null enum

The task status.
