---
title: "listSize"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/directives/list-size"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# listSize

The purpose of the `@listSize` directive is to either inform the static analysis about the size of returned lists (if that information is statically available), or to point the analysis to where to find that information.

```graphql
directive @listSize(
  assumedSize: Int
  slicingArguments: [String!]
  slicingArgumentDefaultValue: Int
  sizedFields: [String!]
  requireOneSlicingArgument: Boolean! = true
) on FIELD_DEFINITION
```

### Arguments

#### `assumedSize` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The `assumedSize` argument can be used to statically define the maximum length of a list returned by a field.

#### `slicingArguments` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The `slicingArguments` argument can be used to define which of the field's arguments with numeric type are slicing arguments, so that their value determines the size of the list returned by that field. It may specify a list of multiple slicing arguments.

#### `slicingArgumentDefaultValue` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The `slicingArgumentDefaultValue` argument can be used to define a default value for a slicing argument, which is used if the argument is not present in a query.

#### `sizedFields` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The `sizedFields` argument can be used to define that the value of the `assumedSize` argument or of a slicing argument does not affect the size of a list returned by a field itself, but that of a list returned by one of its sub-fields.

#### `requireOneSlicingArgument` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

The `requireOneSlicingArgument` argument can be used to inform the static analysis that it should expect that exactly one of the defined slicing arguments is present in a query. If that is not the case (i.e., if none or multiple slicing arguments are present), the static analysis may throw an error.
