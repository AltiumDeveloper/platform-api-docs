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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types.txt)

## Common Data Model

- [Platform](https://altiumdeveloper.github.io/cdm/subsets/platform/) — Models the platform-wide objects that other bounded contexts build on: organizations (Company Accounts) with their users and user groups, Workspaces with their members and groups, applications, event subscriptions, and Renesas 365 solutions with their releases. It also holds the lifecycle definitions (with their stages and states) and revision naming schemes that govern Workspace Items. Organization-level data is managed in the Company Dashboard; Workspace-level configuration, including these definitions and schemes, is managed from Altium Designer or the Workspace browser interface.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) | [Lifecycle Definition](https://w3id.org/altium/cdm/platform/LifecycleDefinition) [`https://w3id.org/altium/cdm/platform/LifecycleDefinition`](https://w3id.org/altium/cdm/platform/LifecycleDefinition) |
| [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) | [Lifecycle Stage](https://w3id.org/altium/cdm/platform/LifecycleStage) [`https://w3id.org/altium/cdm/platform/LifecycleStage`](https://w3id.org/altium/cdm/platform/LifecycleStage) |
| [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) | [Lifecycle State](https://w3id.org/altium/cdm/platform/LifecycleState) [`https://w3id.org/altium/cdm/platform/LifecycleState`](https://w3id.org/altium/cdm/platform/LifecycleState) |
| [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) | [Revision Naming Scheme](https://w3id.org/altium/cdm/platform/NamingScheme) [`https://w3id.org/altium/cdm/platform/NamingScheme`](https://w3id.org/altium/cdm/platform/NamingScheme) |
| [`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) | [Workspace](https://w3id.org/altium/cdm/platform/Workspace) [`https://w3id.org/altium/cdm/platform/Workspace`](https://w3id.org/altium/cdm/platform/Workspace) |
| [`DesWorkspaceGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-group.md) | [Workspace Group](https://w3id.org/altium/cdm/platform/WorkspaceGroup) [`https://w3id.org/altium/cdm/platform/WorkspaceGroup`](https://w3id.org/altium/cdm/platform/WorkspaceGroup) |
| [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) | [Workspace User](https://w3id.org/altium/cdm/platform/WorkspaceUser) [`https://w3id.org/altium/cdm/platform/WorkspaceUser`](https://w3id.org/altium/cdm/platform/WorkspaceUser) |
| [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) | [Application](https://w3id.org/altium/cdm/platform/Application) [`https://w3id.org/altium/cdm/platform/Application`](https://w3id.org/altium/cdm/platform/Application) |
| [`GloEvtSubscription`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-evt-subscription.md) | [Event Subscription](https://w3id.org/altium/cdm/platform/EventSubscription) [`https://w3id.org/altium/cdm/platform/EventSubscription`](https://w3id.org/altium/cdm/platform/EventSubscription) |
| [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) | [Organization](https://w3id.org/altium/cdm/platform/Organization) [`https://w3id.org/altium/cdm/platform/Organization`](https://w3id.org/altium/cdm/platform/Organization) |
| [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) | [User](https://w3id.org/altium/cdm/platform/User) [`https://w3id.org/altium/cdm/platform/User`](https://w3id.org/altium/cdm/platform/User) |
| [`GloUserGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group.md) | [User Group](https://w3id.org/altium/cdm/platform/UserGroup) [`https://w3id.org/altium/cdm/platform/UserGroup`](https://w3id.org/altium/cdm/platform/UserGroup) |
| [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) | [Solution](https://w3id.org/altium/cdm/platform/Solution) [`https://w3id.org/altium/cdm/platform/Solution`](https://w3id.org/altium/cdm/platform/Solution) |

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
