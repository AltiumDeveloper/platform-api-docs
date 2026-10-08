---
title: "DesProjectGuestOrderBy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-guest-order-by"
bounded_context: "Design"
kind: "enums"
experimental: false
deprecated: false
---

# DesProjectGuestOrderBy

Specifies the sort order field for the result set of project guests.

```graphql
enum DesProjectGuestOrderBy {
  DISPLAY_NAME
  EMAIL
  GLOBAL_USER_ID
}
```

### Values

#### `DISPLAY_NAME`

Order by the user display name.

#### `EMAIL`

Order by user email.

#### `GLOBAL_USER_ID`

Order by global user identifier.
