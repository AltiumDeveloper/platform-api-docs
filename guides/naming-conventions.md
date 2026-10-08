---
title: "Naming conventions"
url: "https://altiumdeveloper.github.io/platform-api-docs/guides/naming-conventions"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Naming conventions

Names in the Altium 365 API tell you which bounded context an operation or type belongs to and how to call it.

## Legacy prefixes

Older operations and types carry a short prefix for their business area. They remain in use and are not being renamed.

| Prefix | Area | Examples |
| - | - | - |
| `des` | Design and most workspace data (projects, components, users, tasks) | `desProjectById`, `DesComponent` |
| `sup` | Supply | `supRefDesigns`, `SupEvalKit` |
| `glo` | Global / platform (`gloCus` customization, `gloUser` users) | `gloUsers`, `GloApp` |
| `bom` | Bills of materials (procurement) | `bomBoms`, `BomRelease` |
| `sol` | Solutions | `solSolutionById` |
| `sys` | System design | `sysEsdDocumentById` |
| `kg` | Knowledge graph | `kgNode` |
| `dm`, `sft`, `rsa` | Renesas-specific APIs | `dmDeviceFamilies` |

A prefix is a hint, not a rule: `des` operations are spread over several bounded contexts. The reference groups every name under its bounded context, so use the sidebar or a context's overview to be sure.

## Bounded-context queries

Newer queries are nested: first the bounded context, then the entity, then a short query name — `{boundedContext}.{entity}.{query}`:

```graphql
query RequirementsProjects($ids: [ID!]!) {
  requirements {
    project {
      byIds(ids: $ids) {
        id
        name
      }
    }
  }
}
```

Other examples: `platform.token.byWorkspace`, `design.ruleCheck.byId`. Legacy queries follow `{prefix}{Resource}{Qualifier}` instead, for example `desProjectById` or `desWorkspaceByUrl`. When both styles exist for the same data, prefer the bounded-context query.

## Mutations

Newer mutations are top-level fields named `{boundedContext}{Entity}{Action}` — for example `platformTokenDelete`, `platformWorkspaceTokenCreate`, `designRuleCheckExecute`. Each takes a single non-null `input` argument of type `<MutationName>Input!` and returns `<MutationName>Payload!`:

```graphql
mutation DeleteToken($input: PlatformTokenDeleteInput!) {
  platformTokenDelete(input: $input) {
    tokenId
    errors {
      ... on Error {
        message
      }
    }
  }
}
```

Legacy mutations use `{prefix}{Verb}{Resource}`, for example `bomChangeBomReleaseLifecycleState`. To change several resources at once, send several mutations (or aliases of one mutation) in one request; they run in order.

## Types

New types are named `{BoundedContext}{Entity}[{Suffix}]`, for example `PlatformWorkspaceRefreshToken` or `KgNode`; legacy types keep their short prefix (`DesComponent`, `GloOrganization`). Boolean fields of new types start with `is`, `has` or `can`.

## Preview names

Volatile APIs are published under a `preview` namespace (for example `design.preview`) or with a `_Preview` suffix on the type name (for example `DesignDataNet_Preview`), usually together with the `@experimental` directive. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).
