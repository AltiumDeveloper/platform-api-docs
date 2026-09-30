---
title: "DesMention"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-mention"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesMention

A reference to a user in a comment.

### Member Of

[`DesComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) object

```graphql
type DesMention {
  user: DesUser!
}
```

### Fields

#### `DesMention.user` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The mentioned user.
