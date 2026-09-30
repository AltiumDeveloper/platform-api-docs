---
title: "Pagination"
url: "https://altiumdeveloper.github.io/platform-api-docs/guides/pagination"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Pagination

Most paged lists are **cursor-based connections** following the Relay convention. A few older search queries page by index instead. The Developer Center has a [pagination walkthrough](https://www.altium.com/documentation/altium-developer-center/altium-365/api/pagination).

## Connections

A connection field takes `first`/`after` (forward) or `last`/`before` (backward) and returns:

- `nodes` — the items of the page;
- `edges` — the same items wrapped with their `cursor`;
- `pageInfo` — `hasNextPage`, `endCursor`, `hasPreviousPage`, `startCursor`;
- `totalCount` — the total number of items, where the connection provides it.

Request the first page, then pass `pageInfo.endCursor` as `after` until `hasNextPage` is `false`:

```graphql
query Projects($workspaceUrl: String, $after: String) {
  desProjects(workspaceUrl: $workspaceUrl, first: 20, after: $after) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      name
    }
  }
}
```

Use `edges` when you need a cursor per item:

```graphql
query Tasks($workspaceUrl: String) {
  desWorkspaceTasks(workspaceUrl: $workspaceUrl, first: 10) {
    totalCount
    edges {
      cursor
      node {
        name
        createdAt
        status
      }
    }
  }
}
```

Connections in bounded-context namespaces work the same way:

```graphql
query Tokens($after: String) {
  platform {
    token {
      byWorkspace(first: 50, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          tokenId
          name
          expiresAt
        }
      }
    }
  }
}
```

Keep page sizes modest and treat cursors as opaque.

## Index-based lists

Some search queries take a zero-based `start` offset and a `limit`, and return a result set with the number of hits:

```graphql
query RefDesigns {
  supRefDesigns(q: "motor control", start: 0, limit: 10) {
    hits
    results {
      id
      title
    }
  }
}
```

Increase `start` by `limit` to fetch the next page.
