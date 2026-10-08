---
title: "Getting started"
url: "https://altiumdeveloper.github.io/platform-api-docs/guides/getting-started"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Getting started

The Altium 365 API is a GraphQL API for reading and writing Altium 365 workspace data. This page gets you from an access token to a first successful query. Registering an application and obtaining a token are covered by the [Altium Developer Center](https://www.altium.com/documentation/altium-developer-center/quick-starts/365-api).

## Endpoints

The API is served per region. Send requests to the endpoint of the region that hosts your workspace:

| Region | Endpoint |
| - | - |
| Europe | `https://eur.365.altium.com/api/graphql` |
| US West | `https://usw.365.altium.com/api/graphql` |
| US East | `https://use.365.altium.com/api/graphql` |
| Asia Pacific | `https://asp.365.altium.com/api/graphql` |
| GovCloud | `https://use.365-gov.altium.com/api/graphql` |

Each workspace also has its own endpoint, `https://{workspace-domain}/api/graphql`, where `{workspace-domain}` is the host name of your workspace.

## Authentication

Every request carries an access token in the `Authorization` header:

```text
Authorization: Bearer {access-token}
```

See [Using an Access Token](https://www.altium.com/documentation/altium-developer-center/altium-365/key-concepts/tokens/access) in the Developer Center for how access tokens are obtained, how long they last and how to renew them.

## A first query

List the workspaces the token's user can access, with the API endpoint that serves each of them:

```graphql
query MyWorkspaces {
  desWorkspaceInfos {
    name
    url
    location {
      name
      apiServiceUrl
    }
  }
}
```

With `curl`:

```bash
curl https://eur.365.altium.com/api/graphql \
  -H "Authorization: Bearer $ALTIUM_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query":"query MyWorkspaces { desWorkspaceInfos { name url location { name apiServiceUrl } } }"}'
```

The response is a JSON object with a `data` member (and an `errors` member if something went wrong, see [Errors](https://altiumdeveloper.github.io/platform-api-docs/guides/errors.md)). Reference: [`desWorkspaceInfos`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-infos.md).

## Tools

- **Nitro** — an in-browser GraphQL IDE with schema-aware completion: `https://{workspace-domain}/api/graphql/`.
- **Voyager** — an interactive graph of the schema: `https://{workspace-domain}/api/voyager/`.

## Next steps

- [Bounded contexts and the CDM](https://altiumdeveloper.github.io/platform-api-docs/guides/bounded-contexts.md) — find the part of the API that owns your data.
- [Naming conventions](https://altiumdeveloper.github.io/platform-api-docs/guides/naming-conventions.md), [Identifiers and lookups](https://altiumdeveloper.github.io/platform-api-docs/guides/identifiers.md), [Pagination](https://altiumdeveloper.github.io/platform-api-docs/guides/pagination.md), [Errors](https://altiumdeveloper.github.io/platform-api-docs/guides/errors.md) and [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).
- The [Developer Center examples](https://www.altium.com/documentation/altium-developer-center/altium-365/api/examples).

## For AI assistants

Point your coding assistant at [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt). It lists every bounded context with its own `llms.txt` index and a compact `schema.graphql` slice, and every page of this site is also available as Markdown (append `.md` to the page URL).
