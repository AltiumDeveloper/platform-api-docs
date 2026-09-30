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

#### `DesAnnotation.bindings` · [`[DesAnnotationBinding!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/unions/des-annotation-binding.md) non-null union collaboration

Bindings define the 'location' of the annotation, its 'address' in context of the design.

#### `DesAnnotation.createdAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `DesAnnotation.createdBy` · [`DesAnnotationUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-user.md) object collaboration

#### `DesAnnotation.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DesAnnotation.requirements` · [`DesAnnotationRequirements`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-requirements.md) object collaboration

Requirements, associated with the annotation.

#### `DesAnnotation.updatedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

#### `DesAnnotation.updatedBy` · [`DesAnnotationUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-user.md) object collaboration

#### `DesAnnotation.url` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Deep link to the annotation - can be used to navigate to the annotation in the context of its placement.
