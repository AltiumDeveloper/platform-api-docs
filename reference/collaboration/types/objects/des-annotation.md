---
title: "DesAnnotation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesAnnotation

Annotation is like a sticky note you can place in the design, attaching it to design entities (e.g. schematic document, BOM line, design review, etc.). Annotation is a high-level concept that represents different facets of collaboration on the platform - comment threads, tasks to be completed, links or references to other related entities.

### Member Of

[`DesAnnotationsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-connection.md) object · [`DesAnnotationsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotations-edge.md) object

```graphql
type DesAnnotation {
  bindings: [DesAnnotationBinding!]!
  createdAt: DateTime
  createdBy: DesAnnotationUser
  id: String!
  requirements: DesAnnotationRequirements
  updatedAt: DateTime
  updatedBy: DesAnnotationUser
  url: String
}
```

### Fields

#### `bindings` · [`[DesAnnotationBinding!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/unions/des-annotation-binding.md) non-null union

Bindings define the 'location' of the annotation, its 'address' in context of the design.

#### `createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `createdBy` · [`DesAnnotationUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-user.md) object

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `requirements` · [`DesAnnotationRequirements`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-requirements.md) object

Requirements, associated with the annotation.

#### `updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `updatedBy` · [`DesAnnotationUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-user.md) object

#### `url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Deep link to the annotation - can be used to navigate to the annotation in the context of its placement.
