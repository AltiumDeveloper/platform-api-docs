---
title: "Lifecycle"
url: "https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Lifecycle

Every operation, type and field is at one lifecycle stage.

| Stage | What it means for you |
| - | - |
| **Experimental** | Not production-ready: it may change or be removed without notice. Do not build production integrations on it. |
| **Stable** | Evolves only in backward-compatible ways. |
| **Deprecated** | Still works, but should no longer be used. Migrate before it is removed. |
| **Removed** | No longer part of the schema. |

## Experimental

Experimental elements carry the `@experimental` directive in the schema:

```graphql
type Query {
  design: DesignQueries! @experimental
}
```

Everything reached through an experimental field — here every `design.*` query — is experimental too. Volatile APIs are often also published under a `preview` namespace (for example `design.preview`) or with a `_Preview` type suffix (for example `DesignDataNet_Preview`).

Calling an experimental query looks like any other query:

```graphql
query RuleCheck($id: ID!) {
  design {
    ruleCheck {
      byId(id: $id) {
        id
        name
        type
      }
    }
  }
}
```

## Deprecated

Deprecated elements use the standard `@deprecated` directive. The reason usually names the replacement:

```graphql
type Query {
  desFolderById(id: ID!): DesFolder @deprecated(reason: "Use `DesFolderByFolderId` instead.")
}
```

GraphQL tools such as Nitro can hide deprecated fields. The removal timeline of a deprecated element is not fixed.

## How the stages are shown

| Where | Experimental | Deprecated |
| - | - | - |
| SDL ([schema.graphql](https://altiumdeveloper.github.io/platform-api-docs/schema.graphql) and per-context slices) | `@experimental` | `@deprecated(reason: …)` |
| Reference pages | `EXPERIMENTAL` badge, a caution note, an `EXP` pill in the sidebar | fully deprecated operations are grouped under **Deprecated** in the sidebar, with a note giving the reason; deprecated fields are marked `DEPRECATED` and collapsed under "Show deprecated" |
| [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt) and per-context `llms.txt` | `[EXPERIMENTAL]` after the item | left out of the context lists; listed in `reference/deprecated/llms.txt` with the reason |
| Markdown pages (`.md`) | `**EXPERIMENTAL**`, front matter `experimental: true` | a `**Deprecated:**` note with the reason, `**DEPRECATED**` on deprecated fields, front matter `deprecated: true` |
