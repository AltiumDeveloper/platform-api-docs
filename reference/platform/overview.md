---
title: "Platform"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/overview"
bounded_context: "Platform"
kind: "overview"
experimental: false
deprecated: false
---

# Platform

Workspaces, users and organizations, apps and tokens, folders, generic revisions, permissions and settings, lifecycle definitions and revision naming schemes, domain events, notifications, solutions and the knowledge graph.

Concepts: see the **Platform** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/platform/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) — [Lifecycle Definition](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleDefinition/): Defines the set of states that an entity can transition through in its lifecycle. This definition clarifies what stage a revision of an entity has reached in its 'life' and what it can be safely used for. Different entities can have different lifecycle definitions assigned to them.
  - GRID: `grid:workspace:{workspace-id}:platform:lifecycle-definition/{id}`
- [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) — [Lifecycle Stage](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleStage/)
- [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) — [Lifecycle State](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleState/)
- [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) — [Revision Naming Scheme](https://altiumdeveloper.github.io/cdm/classes/plt_NamingScheme/)
  - GRID: `grid:workspace:{workspace-id}:platform:revision-naming-scheme/{id}`
- [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) — [Workspace](https://altiumdeveloper.github.io/cdm/classes/plt_Workspace/): The top-level entity that plays a role of a closed environment for other entities (members, projects, components, etc.).
  - GRID: `grid:global::platform:workspace/{id}`
- [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) — [Workspace Group](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceGroup/): Workspace Group represents a logical collection of users within a workspace, used to manage access control, permissions, and collaboration roles across projects and data assets.
  - GRID: `grid:workspace:{workspace-id}:team:group/{id}`
- [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) — [Workspace User](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceUser/)
  - GRID: `grid:workspace:{workspace-id}:team:user/{id}`
- [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) — [Application](https://altiumdeveloper.github.io/cdm/classes/plt_Application/)
  - GRID: `grid:global::platform:application/{id}`
- [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) — [Subscription](https://altiumdeveloper.github.io/cdm/classes/plt_EventSubscription/)
  - GRID: `grid:global::events:subscription/{id}`
- [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) — [Organization](https://altiumdeveloper.github.io/cdm/classes/plt_Organization/)
  - GRID: `grid:global::platform:organization/{id}`
- [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) — [User](https://altiumdeveloper.github.io/cdm/classes/plt_User/)
  - GRID: `grid:global::platform:user/{id}`
- [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) — [User Group](https://altiumdeveloper.github.io/cdm/classes/plt_UserGroup/): A way to group multiple users together (e.g. for the purposes of SCIM syncrhonization). User may be a member of multiple groups.
  - GRID: `grid:global::platform:group/{id}`
- [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) — [Solution](https://altiumdeveloper.github.io/cdm/classes/plt_Solution/)
  - GRID: `grid:workspace:{workspace-id}:platform:solution/{id}`

## Entry points

Look up entities by identifier:

- [`desLifeCycleDefinitionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definition-by-id.md)
- [`desPermissionsById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-permissions-by-id.md)
- [`desRevisionNamingSchemeById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-scheme-by-id.md)
- [`desWorkspaceById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-by-id.md)
- [`desWorkspaceGroupById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-group-by-id.md)
- [`desWorkspaceGroupsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-groups-by-ids.md)
- [`desWorkspaceUserById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-user-by-id.md)
- [`desWorkspaceUsersByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-users-by-ids.md)
- [`gloAppById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-id.md)
- [`gloEvtSubscriptionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-evt-subscription-by-id.md)
- [`gloOrganizationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-organization-by-id.md)
- [`gloUserById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-by-id.md)
- [`gloUsersByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-users-by-ids.md)
- [`solSolutionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/sol-solution-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 48 | 3 |
| Mutations | 75 | 2 |
| Objects | 182 | 7 |
| Inputs | 104 | 4 |
| Enums | 21 | 2 |
| Interfaces | 5 | 1 |
| Unions | 24 | 0 |
