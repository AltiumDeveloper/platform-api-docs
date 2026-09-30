---
title: "gloScrRenameScript"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/mutations/glo-scr-rename-script"
bounded_context: "Customization"
kind: "mutations"
experimental: false
deprecated: false
---

# gloScrRenameScript

Renames an existing script without creating a new version. Optionally, the rename applies only while the script is provisional, meaning it still carries a generated name, and is skipped once the name has been set deliberately. Returns the script's current name either way.

```graphql
gloScrRenameScript(
  input: GloScrRenameScriptInput!
): GloScrRenameScriptPayload!
```

### Arguments

#### `gloScrRenameScript.input` · [`GloScrRenameScriptInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-rename-script-input.md) non-null input customization

### Type

#### [`GloScrRenameScriptPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-rename-script-payload.md) object customization
