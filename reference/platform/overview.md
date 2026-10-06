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
- [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) — [Lifecycle Stage](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleStage/): A named stage that groups lifecycle states in a lifecycle definition using the Advanced management style (e.g. Design, Prototype, Production), indicating how far a revision has progressed in its development. Stages can be linked to the levels of the revision naming scheme. Definitions using the Simple style have states and transitions but no stages.
- [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) — [Lifecycle State](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleState/): A named point in an Item Revision's lifecycle (e.g. Planned, New From Design, In Production, Obsolete) that shows its status from a business perspective. Each state's properties include whether revisions in that state are shown in the Explorer panel and whether they may be used in designs; a revision moves to another state only through a transition defined in its lifecycle definition.
- [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) — [Revision Naming Scheme](https://altiumdeveloper.github.io/cdm/classes/plt_NamingScheme/): Defines the format of Revision IDs for the Items that use it: one to three levels (e.g. Model, Prototype and Revision), each with its own format, separator and minimum width. The scheme is chosen per Item when the Item is created and cannot be changed after its first release. It is distinct from the Item Naming Scheme, which determines the Item ID rather than the revision's ID.
  - GRID: `grid:workspace:{workspace-id}:platform:revision-naming-scheme/{id}`
- [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) — [Workspace](https://altiumdeveloper.github.io/cdm/classes/plt_Workspace/): The top-level entity that plays a role of a closed environment for other entities (members, projects, components, etc.).
  - GRID: `grid:global::platform:workspace/{id}`
- [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) — [Workspace Group](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceGroup/): Workspace Group represents a logical collection of users within a workspace, used to manage access control, permissions, and collaboration roles across projects and data assets.
  - GRID: `grid:workspace:{workspace-id}:team:group/{id}`
- [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) — [Workspace User](https://altiumdeveloper.github.io/cdm/classes/plt_WorkspaceUser/): A person's membership in a particular Workspace, connecting their Altium Account to that Workspace and to the Workspace groups they are assigned to. Members can come from the organization that owns the Workspace or from other organizations, and inviting an outside user does not add them to the owning organization. People who only have a project shared with them (External Share guests) are not members.
  - GRID: `grid:workspace:{workspace-id}:team:user/{id}`
- [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) — [Application](https://altiumdeveloper.github.io/cdm/classes/plt_Application/)
  - GRID: `grid:global::platform:application/{id}`
- [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) — [Event Subscription](https://altiumdeveloper.github.io/cdm/classes/plt_EventSubscription/)
  - GRID: `grid:global::events:subscription/{id}`
- [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) — [Organization](https://altiumdeveloper.github.io/cdm/classes/plt_Organization/): An Altium customer organization, represented by its Company Account. The Company Account brings together the organization's users and groups of users, its purchased licenses and the Altium 365 Workspaces created for it, along with a company profile (e.g. name, logo and website). Administrators manage it through the Company Dashboard.
  - GRID: `grid:global::platform:organization/{id}`
- [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) — [User](https://altiumdeveloper.github.io/cdm/classes/plt_User/): A person identified by a global Altium Account, the identity used for signing in to Altium services. A user can be registered in an organization's Company Account, either added by an administrator or admitted through an approved join request, and can then be given access to licenses through the Company Account's user groups. Access to a Workspace is granted separately, by making the user a member of that Workspace.
  - GRID: `grid:global::platform:user/{id}`
- [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) — [User Group](https://altiumdeveloper.github.io/cdm/classes/plt_UserGroup/): A named group of users within an organization's Company Account, managed in the Company Dashboard. Licenses can be allocated to a group so that its members can use them, and the Group Administrators system group gives its members Dashboard administration rights. A user can belong to any number of groups, groups can be provisioned from an identity provider via SCIM, and they are distinct from the groups defined inside a Workspace.
  - GRID: `grid:global::platform:group/{id}`
- [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) — [Solution](https://altiumdeveloper.github.io/cdm/classes/plt_Solution/): A Renesas 365 solution: the main, top-level object of a Renesas 365 Workspace, which brings together the system design (an ESD document), PCB projects and software projects of one system. System designs and software projects both push their changes to the solution's System Data Model (SDM) and pull from it; Altium Designer can open a solution's PCB projects and pull SDM changes into them.
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
