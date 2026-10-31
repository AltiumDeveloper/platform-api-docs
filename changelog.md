---
title: "Platform API"
url: "https://altiumdeveloper.github.io/platform-api-docs/changelog"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Platform API

GraphQL schema changelog

### 30-Oct-2026

#### 🔴 Breaking Changes (30)

##### Customization

###### Input / Payload

Δ Directive `oneOf` was added to input object `GloCusUpdateAssignmentInput`

##### Insights

###### 🔍 Query

Δ Type for argument `filter` on field `Query.desWorkspaceInsInsights` changed from `DesWorkspaceInsInsightFilterInput` to `DesWorkspaceInsInsightFilterInput!`

###### Input / Payload

Δ Input field `DesWorkspaceInsInsightFilterInput.type` changed type from `[String!]` to `[String!]!`

##### Library Management

###### Fields

− Field `errorMessage` was removed from object type `DesPartUploadComponentOperationResult`

− Field `status` was removed from object type `DesPartUploadComponentOperationResult`

− Field `errorMessage` was removed from object type `DesPartUploadLibraryPartOperationResult`

##### Procurement

###### Input / Payload

Δ Directive `oneOf` was added to input object `BomCreateBomItemElementAttributeValueInput`

Δ Directive `oneOf` was added to input object `BomCreateBomOfferReferenceInput`

Δ Directive `oneOf` was added to input object `BomCreateBomPartReferenceInput`

Δ Directive `oneOf` was added to input object `BomCreateBomSupplierReferenceInput`

##### System Design

###### 🔍 Query

Δ Field `Query.sysSdmSchemaVersionRegistry` changed type from `[SysSdmSchemaRegistryEntry!]!` to `[SchemaRegistryEntry!]!`

###### Types

− Type `SysSdmSchemaRegistryEntry` was removed

###### Fields

Δ Field `SysSdmConnection.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDeviceModel.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPeripheralConfiguration.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPeripheralInstance.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPort.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPortConfiguration.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPortConfigurationEnumValue.id` changed type from `ID!` to `String!`

Δ Field `SysSdmDmPortConnection.id` changed type from `ID!` to `String!`

Δ Field `SysSdmFunctionalBlock.id` changed type from `ID!` to `String!`

Δ Field `SysSdmFunctionalModel.id` changed type from `ID!` to `String!`

Δ Field `SysSdmHardwareComponent.id` changed type from `ID!` to `String!`

Δ Field `SysSdmHardwareModel.id` changed type from `ID!` to `String!`

Δ Field `SysSdmParameter.id` changed type from `ID!` to `String!`

Δ Field `SysSdmPeripheral.id` changed type from `ID!` to `String!`

Δ Field `SysSdmPort.id` changed type from `ID!` to `String!`

Δ Field `SysSdmSoftwareComponent.id` changed type from `ID!` to `String!`

Δ Field `SysSdmSoftwareModel.id` changed type from `ID!` to `String!`

Δ Field `SysSdmSoftwareStackInstance.id` changed type from `ID!` to `String!`

#### ⚠️ Dangerous Changes (122)

##### Collaboration

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desAnnotations`

Δ Directive `listSize` was added to `Query.desAnnotations`

###### Types

\+ Member `DesAnnotationManagedPartBinding` was added to Union type `DesAnnotationBinding`

##### Customization

###### 🔍 Query

Δ Directive `listSize` was added to `Query.gloScrScriptExecutionResults`

Δ Directive `listSize` was added to `Query.gloScrScripts`

Δ Directive `authorize` was added to `Query.gloScrScriptSecrets`

Δ Directive `authorize` was added to `Query.gloScrSecrets`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.gloCusAddAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusDeleteAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusUpdateAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusUpdateAssignmentConfigurations`

Δ Directive `authorize` was added to `Mutation.gloScrCreateScript`

Δ Directive `authorize` was added to `Mutation.gloScrCreateSecret`

Δ Directive `authorize` was added to `Mutation.gloScrDeleteScript`

Δ Directive `authorize` was added to `Mutation.gloScrDeleteSecret`

Δ Directive `authorize` was added to `Mutation.gloScrExecuteScript`

Δ Directive `authorize` was added to `Mutation.gloScrRenameScript`

Δ Directive `authorize` was added to `Mutation.gloScrSetScriptSecrets`

Δ Directive `authorize` was added to `Mutation.gloScrUpdateScript`

###### Fields

Δ Directive `listSize` was added to `GloCusExtensionPoint.assignments`

Δ Directive `listSize` was added to `GloScrScript.versions`

Δ Directive `authorize` was added to object `GloScrScript`

Δ Directive `authorize` was added to `GloScrScriptVersion.package`

##### Design

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desComparisonHealthcheck`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.desCompareReleases`

###### Types

Δ `DesCommentThread` object implements `Node` interface

##### Insights

###### 🔍 Query

Δ Directive `listSize` was added to `Query.desWorkspaceInsInsights`

\+ Argument `domain: String` added to `Query.desWorkspaceInsInsightTypes`

##### Library Management

###### 🔍 Query

\+ Argument `requestPaidData: Boolean` added to `Query.desPartGlobalPartByIds`

Δ Directive `listSize` was added to `Query.desPartGlobalSearch`

Δ Directive `listSize` was added to `Query.desPartSearch`

##### Platform

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desWorkspaceGroupById`

Δ Directive `authorize` was added to `Query.desWorkspaceGroupsByIds`

Δ Directive `authorize` was added to `Query.desWorkspaceTeamByAuth`

Δ Directive `authorize` was added to `Query.desWorkspaceUserByAuth`

Δ Directive `authorize` was added to `Query.desWorkspaceUserById`

Δ Directive `authorize` was added to `Query.desWorkspaceUsersByIds`

Δ Directive `authorize` was added to `Query.gloAppByClientId`

Δ Directive `authorize` was added to `Query.gloAppById`

Δ Directive `authorize` was added to `Query.gloAppInstalledApps`

Δ Directive `authorize` was added to `Query.gloApps`

Δ Directive `listSize` was added to `Query.gloApps`

Δ Directive `authorize` was added to `Query.gloEvtSubscriptionById`

Δ Directive `authorize` was added to `Query.gloOrganization`

Δ Directive `authorize` was added to `Query.gloOrganizationById`

Δ Directive `authorize` was added to `Query.gloUserById`

Δ Directive `authorize` was added to `Query.gloUserGroups`

Δ Directive `listSize` was added to `Query.gloUserGroups`

Δ Directive `authorize` was added to `Query.gloUsers`

Δ Directive `listSize` was added to `Query.gloUsers`

Δ Directive `authorize` was added to `Query.gloUsersByIds`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.gloAddAppClientSecret`

Δ Directive `authorize` was added to `Mutation.gloAddAppGrantType`

Δ Directive `authorize` was added to `Mutation.gloAddAppRedirectUri`

Δ Directive `authorize` was added to `Mutation.gloAddAppScope`

Δ Directive `authorize` was added to `Mutation.gloAddUsersToGroup`

Δ Directive `authorize` was added to `Mutation.globalTrackedEventReport`

Δ Directive `authorize` was added to `Mutation.gloCreateApp`

Δ Directive `authorize` was added to `Mutation.gloCreateAppFromOAuthClient`

Δ Directive `authorize` was added to `Mutation.gloCreateUser`

Δ Directive `authorize` was added to `Mutation.gloCreateUserGroup`

Δ Directive `authorize` was added to `Mutation.gloDeleteApp`

Δ Directive `authorize` was added to `Mutation.gloEvtCreateWebhookSubscription`

Δ Directive `authorize` was added to `Mutation.gloEvtDeleteSubscription`

Δ Directive `authorize` was added to `Mutation.gloEvtPublishEvent`

Δ Directive `authorize` was added to `Mutation.gloInstallApp`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppClientSecret`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppGrantType`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppRedirectUri`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppScope`

Δ Directive `authorize` was added to `Mutation.gloRemoveUsersFromGroup`

Δ Directive `authorize` was added to `Mutation.gloRestoreApp`

Δ Directive `authorize` was added to `Mutation.gloUninstallApp`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppContactEmail`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppDescription`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppHrid`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppName`

Δ Directive `authorize` was added to `Mutation.platformTokenDelete`

Δ Directive `authorize` was added to `Mutation.platformTokenUpdate`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenCreate`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenCreateNewSecret`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenDeleteSecret`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceTokenCreate`

###### Types

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformTokenUpdateError`

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformWorkspaceTokenCreateError`

###### Fields

Δ Directive `authorize` was added to `DesWorkspaceGroup.members`

Δ Directive `listSize` was added to `DesWorkspaceGroup.members`

Δ Directive `authorize` was added to `DesWorkspaceTeam.projectGuests`

Δ Directive `listSize` was added to `DesWorkspaceTeam.projectGuests`

Δ Directive `authorize` was added to `DesWorkspaceTeam.workspaceGroups`

Δ Directive `listSize` was added to `DesWorkspaceTeam.workspaceGroups`

Δ Directive `authorize` was added to `DesWorkspaceTeam.workspaceUsers`

Δ Directive `listSize` was added to `DesWorkspaceTeam.workspaceUsers`

Δ Directive `authorize` was added to `TokenQueries.byTokenId`

Δ Directive `authorize` was added to `TokenQueries.byWorkspace`

Δ Directive `listSize` was added to `TokenQueries.byWorkspace`

Δ Directive `authorize` was added to `TokenQueries.workspaceTokenQuota`

##### Procurement

###### 🔍 Query

Δ Directive `authorize` was added to `Query.bomBom`

Δ Directive `authorize` was added to `Query.bomBomById`

Δ Directive `authorize` was added to `Query.bomBomRelease`

Δ Directive `authorize` was added to `Query.bomBoms`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.bomChangeBomReleaseLifecycleState`

Δ Directive `authorize` was added to `Mutation.bomCreateBom`

Δ Directive `authorize` was added to `Mutation.bomExportBom`

Δ Directive `authorize` was added to `Mutation.bomExportBom`

Δ Directive `authorize` was added to `Mutation.bomExportBomById`

Δ Directive `authorize` was added to `Mutation.bomExportBomById`

Δ Directive `authorize` was added to `Mutation.bomExportBomRelease`

Δ Directive `authorize` was added to `Mutation.bomExportBomRelease`

###### Fields

Δ Directive `authorize` was added to `BomItem.issues`

Δ Directive `authorize` was added to `BomItemAlternate.issues`

Δ Directive `authorize` was added to `BomItemAlternate.selectedOffer`

Δ Directive `authorize` was added to `BomItemSubstitute.issues`

Δ Directive `authorize` was added to `BomItemSubstitute.selectedOffer`

Δ Directive `authorize` was added to `BomRelease.healthChecks`

Δ Directive `authorize` was added to `BomRelease.incompleteHealthChecks`

Δ Directive `authorize` was added to `BomRelease.issues`

Δ Directive `authorize` was added to `BomWip.healthChecks`

Δ Directive `authorize` was added to `BomWip.incompleteHealthChecks`

Δ Directive `authorize` was added to `BomWip.issues`

##### System Design

###### Fields

Δ Directive `experimental` was added to object `SysSdmSystemModel`

#### ✅ Non-Breaking Changes (198)

##### Collaboration

###### Types

\+ Type `DesAnnotationManagedPartBinding` was added

###### Fields

\+ Field `partId` was added to object type `DesAnnotationManagedPartBinding`

##### Common

###### Types

\+ Type `SchemaRegistryEntry` was added

###### Fields

\+ Field `cdmReleaseUrl` was added to object type `SchemaRegistryEntry`

\+ Field `cdmVersion` was added to object type `SchemaRegistryEntry`

\+ Field `description` was added to object type `SchemaRegistryEntry`

\+ Field `isLatest` was added to object type `SchemaRegistryEntry`

\+ Field `isOnlySemantic` was added to object type `SchemaRegistryEntry`

\+ Field `isPullDeprecated` was added to object type `SchemaRegistryEntry`

\+ Field `isPushDeprecated` was added to object type `SchemaRegistryEntry`

\+ Field `migrationNotes` was added to object type `SchemaRegistryEntry`

\+ Field `schemaVersion` was added to object type `SchemaRegistryEntry`

\+ Field `status` was added to object type `SchemaRegistryEntry`

###### Directives

\+ Directive `listSize` was added

Δ Location `FIELD_DEFINITION` was added to directive `listSize`

Δ Argument `assumedSize` was added to directive `listSize`

Δ Argument `slicingArguments` was added to directive `listSize`

Δ Argument `slicingArgumentDefaultValue` was added to directive `listSize`

Δ Argument `sizedFields` was added to directive `listSize`

Δ Argument `requireOneSlicingArgument` was added to directive `listSize`

##### Design

###### Types

\+ Type `DesCommentThreadProperty` was added

Δ Object type `DesCommentThreadProperty` has description `Comment thread metadata entry.`

\+ Type `DesMentionInput` was added

Δ Object type `DesMentionInput` has description `A user or group mention operation in a comment.`

\+ Type `DesMentionOperationType` was added

\+ Enum value `ADD` was added to enum `DesMentionOperationType`

\+ Enum value `REMOVE` was added to enum `DesMentionOperationType`

Δ Object type `DesMentionOperationType` has description `An operation on a comment mention.`

\+ Type `DesMentionType` was added

\+ Enum value `GROUP` was added to enum `DesMentionType`

\+ Enum value `USER` was added to enum `DesMentionType`

Δ Object type `DesMentionType` has description `The type of entity mentioned in a comment.`

###### Fields

\+ Field `name` was added to object type `DesCommentThreadProperty`

\+ Field `value` was added to object type `DesCommentThreadProperty`

\+ Field `id` was added to object type `DesCommentThread`

\+ Field `properties` was added to object type `DesCommentThread`

###### Input / Payload

\+ Input field `mentionGuid` of type `String!` was added to input object type `DesMentionInput`

\+ Input field `mentionType` of type `DesMentionType!` was added to input object type `DesMentionInput`

\+ Input field `operationType` of type `DesMentionOperationType!` with default value `"ADD"` was added to input object type `DesMentionInput`

\+ Input field `mentions` of type `[DesMentionInput!]` was added to input object type `DesCreateCommentInput`

\+ Input field `mentions` of type `[DesMentionInput!]` was added to input object type `DesCreateCommentThreadInput`

\+ Input field `mentions` of type `[DesMentionInput!]` was added to input object type `DesUpdateCommentInput`

##### Insights

###### 🔍 Query

\+ Field `desWorkspaceInsInsightsInitialized` was added to object type `Query`

###### Types

\+ Type `DesWorkspaceInsInsightDesignReviewLink` was added

Δ Object type `DesWorkspaceInsInsightDesignReviewLink` has description `Link to a design review associated with the insight.`

\+ Type `DesWorkspaceInsInsightTypesSettingsGql` was added

Δ Object type `DesWorkspaceInsInsightTypesSettingsGql` has description `Insight-type preferences affecting which insights are shown.`

\+ Type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` was added

Δ Object type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` has description `Insight-type preferences that define which insights are shown.`

###### Fields

\+ Field `created` was added to object type `DesWorkspaceInsInsightDesignReviewLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightDesignReviewLink`

\+ Field `excludedInsightTypes` was added to object type `DesWorkspaceInsInsightTypesSettingsGql`

\+ Field `status` was added to object type `DesWorkspaceInsInitializeInsightsIfRequiredPayload`

Δ Field `DesWorkspaceInsInitializeInsightsIfRequiredPayload.isSuccess` is deprecated

Δ Directive `deprecated` was added to `DesWorkspaceInsInitializeInsightsIfRequiredPayload.isSuccess`

\+ Field `designReviews` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `insightTypesSettings` was added to object type `DesWorkspaceInsUserSettings`

###### Input / Payload

\+ Input field `excludedInsightTypes` of type `[String!]!` was added to input object type `DesWorkspaceInsInsightTypesSettingsInputGqlInput`

\+ Input field `insightTypesSettings` of type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` was added to input object type `DesWorkspaceInsUserSettingsInput`

##### Library Management

###### Fields

\+ Field `hasComponentsUsages` was added to object type `DesPartSearchFixedFacets`

\+ Field `lifecycleStates` was added to object type `DesPartSearchFixedFacets`

\+ Field `componentStatus` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `errorDetails` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `message` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `partChoiceStatus` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `revisionId` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `errorDetails` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `message` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `failureReason` was added to object type `DesPartUploadOperationPayload`

##### Platform

###### 🔍 Query

Δ Field `Query.solBldEntityScaffoldingStatus` is deprecated

Δ Directive `deprecated` was added to `Query.solBldEntityScaffoldingStatus`

###### ✏️ Mutation

\+ Field `platformKeyValueStoreAdd` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreAddInput!` added to `Mutation.platformKeyValueStoreAdd`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreAdd`

\+ Field `platformKeyValueStoreDelete` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreDeleteInput!` added to `Mutation.platformKeyValueStoreDelete`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreDelete`

\+ Field `platformKeyValueStoreUpdate` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreUpdateInput!` added to `Mutation.platformKeyValueStoreUpdate`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreUpdate`

###### Types

\+ Type `PlatformKeyValueStoreAddPayload` was added

\+ Type `PlatformKeyValueStoreDeletePayload` was added

\+ Type `PlatformKeyValueStoreEntry` was added

Δ Object type `PlatformKeyValueStoreEntry` has description `A value stored in the key-value store of an app installation, in the workspace of the access token.`

\+ Type `PlatformKeyValueStoreEntryExistsError` was added

Δ `PlatformKeyValueStoreEntryExistsError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreEntryNotFoundError` was added

Δ `PlatformKeyValueStoreEntryNotFoundError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreEntrySummary` was added

Δ Object type `PlatformKeyValueStoreEntrySummary` has description `Entry metadata returned by *all*, without the value.`

\+ Type `PlatformKeyValueStoreEntrySummaryConnection` was added

Δ Object type `PlatformKeyValueStoreEntrySummaryConnection` has description `A connection to a list of items.`

\+ Type `PlatformKeyValueStoreEntrySummaryEdge` was added

Δ Object type `PlatformKeyValueStoreEntrySummaryEdge` has description `An edge in a connection.`

\+ Type `PlatformKeyValueStoreKeyInvalidError` was added

Δ `PlatformKeyValueStoreKeyInvalidError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreQueries` was added

\+ Type `PlatformKeyValueStoreQuotaExceededError` was added

Δ `PlatformKeyValueStoreQuotaExceededError` object implements `Error` interface

Δ Object type `PlatformKeyValueStoreQuotaExceededError` has description 'Returned when adding the entry, or growing its value, would exceed the installation\`s quota.\`

\+ Type `PlatformKeyValueStoreUpdatePayload` was added

\+ Type `PlatformKeyValueStoreValueTooLargeError` was added

Δ `PlatformKeyValueStoreValueTooLargeError` object implements `Error` interface

\+ Type `PlatformTokenInvalidNameError` was added

Δ `PlatformTokenInvalidNameError` object implements `Error` interface

Δ Object type `PlatformTokenInvalidNameError` has description ``Error returned by the Token API when an input name for a `PlatformToken` is invalid.``

\+ Type `PlatformKeyValueStoreAddError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreValueTooLargeError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreEntryExistsError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreQuotaExceededError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Type `PlatformKeyValueStoreDeleteError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreDeleteError`

\+ Type `PlatformKeyValueStoreUpdateError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreValueTooLargeError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreEntryNotFoundError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreQuotaExceededError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Type `PlatformKeyValueStoreAddInput` was added

\+ Type `PlatformKeyValueStoreDeleteInput` was added

\+ Type `PlatformKeyValueStoreUpdateInput` was added

Δ Object type `SolAccessibleToInput` has description `Specifies the grids whose permissions must provide access to a solution.`

###### Arguments

\+ Argument `after: String` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `first: Int` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `prefix: String` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `key: String!` added to `PlatformKeyValueStoreQueries.byKey`

\+ Argument `keys: [String!]!` added to `PlatformKeyValueStoreQueries.byKeys`

###### Fields

\+ Field `entry` was added to object type `PlatformKeyValueStoreAddPayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreAddPayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreDeletePayload`

\+ Field `isDeleted` was added to object type `PlatformKeyValueStoreDeletePayload`

\+ Field `createdAt` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `updatedAt` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `value` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntryExistsError`

\+ Field `message` was added to object type `PlatformKeyValueStoreEntryExistsError`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntryNotFoundError`

\+ Field `message` was added to object type `PlatformKeyValueStoreEntryNotFoundError`

\+ Field `createdAt` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `updatedAt` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `edges` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `nodes` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `pageInfo` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `cursor` was added to object type `PlatformKeyValueStoreEntrySummaryEdge`

\+ Field `node` was added to object type `PlatformKeyValueStoreEntrySummaryEdge`

\+ Field `key` was added to object type `PlatformKeyValueStoreKeyInvalidError`

\+ Field `message` was added to object type `PlatformKeyValueStoreKeyInvalidError`

\+ Field `all` was added to object type `PlatformKeyValueStoreQueries`

Δ Directive `listSize` was added to `PlatformKeyValueStoreQueries.all`

\+ Field `byKey` was added to object type `PlatformKeyValueStoreQueries`

\+ Field `byKeys` was added to object type `PlatformKeyValueStoreQueries`

\+ Field `maxEntryCount` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `maxTotalSizeBytes` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `message` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `entry` was added to object type `PlatformKeyValueStoreUpdatePayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreUpdatePayload`

\+ Field `maxSizeBytes` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `message` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `message` was added to object type `PlatformTokenInvalidNameError`

\+ Field `keyValueStore` was added to object type `PlatformQueries`

Δ Directive `authorize` was added to `PlatformQueries.keyValueStore`

###### Input / Payload

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreAddInput`

\+ Input field `value` of type `String!` was added to input object type `PlatformKeyValueStoreAddInput`

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreDeleteInput`

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreUpdateInput`

\+ Input field `value` of type `String!` was added to input object type `PlatformKeyValueStoreUpdateInput`

\+ Input field `itemIds` of type `[ID!]` was added to input object type `SolCreateSolutionInput`

##### Procurement

###### Types

\+ Type `BomCostedBomsConnection` was added

Δ Object type `BomCostedBomsConnection` has description `A connection to a list of items.`

\+ Type `BomCostedBomsEdge` was added

Δ Object type `BomCostedBomsEdge` has description `An edge in a connection.`

Δ Object type `BomChangeBomReleaseLifecycleStatePayload` has description `Result of changing the lifecycle state of a BOM release.`

Δ Object type `BomCreateBomPayload` has description `Result of creating a new BOM.`

Δ Object type `BomExportBomPayload` has description `Result of exporting a BOM to a file.`

Δ Object type `BomExportBomReleasePayload` has description `Result of exporting a BOM release to a file.`

Δ Object type `BomChangeBomReleaseLifecycleStateInput` has description `Input for changing the lifecycle state of a BOM release.`

Δ Object type `BomCreateBomInput` has description `Input for creating a new BOM.`

Δ Object type `BomExportBomByIdInput` has description `Input for exporting a BOM by its identifier.`

Δ Object type `BomExportBomInput` has description `Input for exporting a BOM.`

Δ Object type `BomExportBomReleaseInput` has description `Input for exporting a BOM release.`

###### Arguments

\+ Argument `after: String` added to `BomWip.costedBoms`

\+ Argument `before: String` added to `BomWip.costedBoms`

\+ Argument `first: Int` added to `BomWip.costedBoms`

\+ Argument `last: Int` added to `BomWip.costedBoms`

###### Fields

\+ Field `edges` was added to object type `BomCostedBomsConnection`

\+ Field `nodes` was added to object type `BomCostedBomsConnection`

\+ Field `pageInfo` was added to object type `BomCostedBomsConnection`

\+ Field `totalCount` was added to object type `BomCostedBomsConnection`

\+ Field `cursor` was added to object type `BomCostedBomsEdge`

\+ Field `node` was added to object type `BomCostedBomsEdge`

\+ Field `costedBoms` was added to object type `BomWip`

##### Renesas (preview)

###### Fields

\+ Field `onChipMemoryCode` was added to object type `DmRaPartNumberModel`

##### System Design

###### Types

Δ Object type `SysSdmSystemModel` has description `**Experimental**`

### 28-Oct-2026

#### 🔴 Breaking Changes (22)

##### Common

###### Types

− Type `SchemaRegistryEntry` was removed

##### Renesas (preview)

###### Types

− Type `SupSoftwareProjectToolchain` was removed

###### Fields

Δ Field `SupSoftwareProjectEvalKitProjectSource.toolchain` changed type from `SupSoftwareProjectToolchain` to `SupEvalKitSoftwareProjectToolchain`

##### System Design

###### 🔍 Query

Δ Field `Query.sysSdmSchemaVersionRegistry` changed type from `[SchemaRegistryEntry!]!` to `[SysSdmSchemaRegistryEntry!]!`

###### Fields

Δ Field `SysSdmConnection.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDeviceModel.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPeripheralConfiguration.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPeripheralInstance.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPort.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPortConfiguration.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPortConfigurationEnumValue.id` changed type from `String!` to `ID!`

Δ Field `SysSdmDmPortConnection.id` changed type from `String!` to `ID!`

Δ Field `SysSdmFunctionalBlock.id` changed type from `String!` to `ID!`

Δ Field `SysSdmFunctionalModel.id` changed type from `String!` to `ID!`

Δ Field `SysSdmHardwareComponent.id` changed type from `String!` to `ID!`

Δ Field `SysSdmHardwareModel.id` changed type from `String!` to `ID!`

Δ Field `SysSdmParameter.id` changed type from `String!` to `ID!`

Δ Field `SysSdmPeripheral.id` changed type from `String!` to `ID!`

Δ Field `SysSdmPort.id` changed type from `String!` to `ID!`

Δ Field `SysSdmSoftwareComponent.id` changed type from `String!` to `ID!`

Δ Field `SysSdmSoftwareModel.id` changed type from `String!` to `ID!`

Δ Field `SysSdmSoftwareStackInstance.id` changed type from `String!` to `ID!`

#### ⚠️ Dangerous Changes (56)

##### System Design

###### 🔍 Query

Δ Directive `experimental` was removed from field `Query.sysLibSoftwareComponentById`

Δ Directive `experimental` was removed from field `Query.sysLibSoftwareComponents`

Δ Directive `experimental` was removed from field `Query.sysLibSoftwareLibraryDownloads`

Δ Directive `experimental` was removed from field `Query.sysSdmSchemaVersionRegistry`

Δ Directive `experimental` was removed from field `Query.sysSdmSystemModelById`

Δ Directive `experimental` was removed from field `Query.sysSdmSystemModelsByIds`

Δ Directive `experimental` was removed from field `Query.sysSdmSystemModelVersionById`

###### ✏️ Mutation

Δ Directive `experimental` was removed from field `Mutation.sysLibDeleteSoftwareLibrary`

Δ Directive `experimental` was removed from field `Mutation.sysLibUploadSoftwareLibrary`

Δ Directive `experimental` was removed from field `Mutation.sysSdmCreateSystemModelVersion`

###### Fields

Δ Directive `experimental` was removed from object `SysLibDeleteSoftwareLibraryPayload`

Δ Directive `experimental` was removed from object `SysLibSoftwareComponent`

Δ Directive `experimental` was removed from object `SysLibSoftwareComponentSpecification`

Δ Directive `experimental` was removed from object `SysLibSoftwareLibraryDownload`

Δ Directive `experimental` was removed from object `SysLibUploadSoftwareLibraryPayload`

Δ Directive `experimental` was removed from object `SysSdmAuthoringApplication`

Δ Directive `experimental` was removed from object `SysSdmConnection`

Δ Directive `experimental` was removed from object `SysSdmCreateSystemModelVersionPayload`

Δ Directive `experimental` was removed from object `SysSdmDeviceModel`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralConfiguration`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralInstance`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralMode`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralParameter`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralPinConfig`

Δ Directive `experimental` was removed from object `SysSdmDmPeripheralPinDependencyConfig`

Δ Directive `experimental` was removed from object `SysSdmDmPort`

Δ Directive `experimental` was removed from object `SysSdmDmPortConfiguration`

Δ Directive `experimental` was removed from object `SysSdmDmPortConfigurationDependency`

Δ Directive `experimental` was removed from object `SysSdmDmPortConfigurationEnumValue`

Δ Directive `experimental` was removed from object `SysSdmDmPortConnection`

Δ Directive `experimental` was removed from object `SysSdmDmPortFunction`

Δ Directive `experimental` was removed from object `SysSdmEndpoint`

Δ Directive `experimental` was removed from object `SysSdmFunctionalBlock`

Δ Directive `experimental` was removed from object `SysSdmFunctionalModel`

Δ Directive `experimental` was removed from object `SysSdmHardwareComponent`

Δ Directive `experimental` was removed from object `SysSdmHardwareModel`

Δ Directive `experimental` was removed from object `SysSdmParameter`

Δ Directive `experimental` was removed from object `SysSdmPeripheral`

Δ Directive `experimental` was removed from object `SysSdmPort`

Δ Directive `experimental` was removed from object `SysSdmSoftwareComponent`

Δ Directive `experimental` was removed from object `SysSdmSoftwareModel`

Δ Directive `experimental` was removed from object `SysSdmSoftwareSpecification`

Δ Directive `experimental` was removed from object `SysSdmSoftwareStackInstance`

Δ Directive `experimental` was removed from field `SysSdmSystemModel.latestVersion`

Δ Directive `experimental` was removed from field `SysSdmSystemModel.name`

Δ Directive `experimental` was removed from field `SysSdmSystemModel.versions`

Δ Directive `experimental` was removed from object `SysSdmSystemModel`

Δ Directive `experimental` was removed from object `SysSdmSystemModelVersion`

Δ Directive `experimental` was removed from object `SysSdmSystemModelVersionMetadata`

Δ Directive `experimental` was removed from enum `SysSdmDmGpioMode`

Δ Directive `experimental` was removed from enum `SysSdmDmPeripheralVirtualization`

Δ Directive `experimental` was removed from enum `SysSdmDmPortMode`

Δ Directive `experimental` was removed from enum `SysSdmSoftwareComponentCategory`

###### Input / Payload

Δ Directive `experimental` was removed from input object `SysLibDeleteSoftwareLibraryInput`

Δ Directive `experimental` was removed from input object `SysLibUploadSoftwareLibraryInput`

Δ Directive `experimental` was removed from input object `SysSdmCreateSystemModelVersionInput`

#### ✅ Non-Breaking Changes (84)

##### Supply

###### 🔍 Query

\+ Field `supEvalKitSoftwareProjectToolchains` was added to object type `Query`

\+ Argument `after: String` added to `Query.supEvalKitSoftwareProjectToolchains`

\+ Argument `before: String` added to `Query.supEvalKitSoftwareProjectToolchains`

\+ Argument `first: Int` added to `Query.supEvalKitSoftwareProjectToolchains`

\+ Argument `last: Int` added to `Query.supEvalKitSoftwareProjectToolchains`

\+ Argument `order: [SupEvalKitSoftwareProjectToolchainSortInput!]` added to `Query.supEvalKitSoftwareProjectToolchains`

\+ Argument `where: SupEvalKitSoftwareProjectToolchainFilterInput` added to `Query.supEvalKitSoftwareProjectToolchains`

###### Types

\+ Type `SupEvalKitSoftwareProjectToolchain` was added

\+ Type `SupEvalKitSoftwareProjectToolchainConnection` was added

Δ Object type `SupEvalKitSoftwareProjectToolchainConnection` has description `A connection to a list of items.`

\+ Type `SupEvalKitSoftwareProjectToolchainEdge` was added

Δ Object type `SupEvalKitSoftwareProjectToolchainEdge` has description `An edge in a connection.`

\+ Type `SupEvalKitSoftwareProjectToolchainFilterInput` was added

Δ Object type `SupEvalKitSoftwareProjectToolchainFilterInput` has description `Represents the filter for searching project source toolchains.`

\+ Type `SupEvalKitSoftwareProjectToolchainSortInput` was added

Δ Object type `SupEvalKitSoftwareProjectToolchainSortInput` has description `Input type for sorting.`

###### Fields

\+ Field `name` was added to object type `SupEvalKitSoftwareProjectToolchain`

\+ Field `supportedVersions` was added to object type `SupEvalKitSoftwareProjectToolchain`

\+ Field `toolchainId` was added to object type `SupEvalKitSoftwareProjectToolchain`

Δ Field `SupEvalKitSoftwareProjectToolchain.toolchainId` is deprecated

Δ Directive `deprecated` was added to `SupEvalKitSoftwareProjectToolchain.toolchainId`

\+ Field `edges` was added to object type `SupEvalKitSoftwareProjectToolchainConnection`

\+ Field `nodes` was added to object type `SupEvalKitSoftwareProjectToolchainConnection`

\+ Field `pageInfo` was added to object type `SupEvalKitSoftwareProjectToolchainConnection`

\+ Field `totalCount` was added to object type `SupEvalKitSoftwareProjectToolchainConnection`

\+ Field `cursor` was added to object type `SupEvalKitSoftwareProjectToolchainEdge`

\+ Field `node` was added to object type `SupEvalKitSoftwareProjectToolchainEdge`

###### Input / Payload

\+ Input field `ids` of type `[String!]` was added to input object type `SupEvalKitSoftwareProjectToolchainFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupEvalKitSoftwareProjectToolchainFilterInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `SupEvalKitSoftwareProjectToolchainSortInput`

##### System Design

###### Types

\+ Type `SysSdmSchemaRegistryEntry` was added

− Description `**Experimental**` was removed from object type `SysLibDeleteSoftwareLibraryPayload`

− Description `**Experimental**` was removed from object type `SysLibSoftwareComponent`

− Description `**Experimental**` was removed from object type `SysLibSoftwareComponentSpecification`

− Description `**Experimental**` was removed from object type `SysLibSoftwareLibraryDownload`

− Description `**Experimental**` was removed from object type `SysLibUploadSoftwareLibraryPayload`

− Description `**Experimental**` was removed from object type `SysSdmAuthoringApplication`

− Description `**Experimental**` was removed from object type `SysSdmConnection`

− Description `**Experimental**` was removed from object type `SysSdmCreateSystemModelVersionPayload`

− Description `**Experimental**` was removed from object type `SysSdmDeviceModel`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralConfiguration`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralInstance`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralMode`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralParameter`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralPinConfig`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralPinDependencyConfig`

− Description `**Experimental**` was removed from object type `SysSdmDmPort`

− Description `**Experimental**` was removed from object type `SysSdmDmPortConfiguration`

− Description `**Experimental**` was removed from object type `SysSdmDmPortConfigurationDependency`

− Description `**Experimental**` was removed from object type `SysSdmDmPortConfigurationEnumValue`

− Description `**Experimental**` was removed from object type `SysSdmDmPortConnection`

− Description `**Experimental**` was removed from object type `SysSdmDmPortFunction`

− Description `**Experimental**` was removed from object type `SysSdmEndpoint`

− Description `**Experimental**` was removed from object type `SysSdmFunctionalBlock`

− Description `**Experimental**` was removed from object type `SysSdmFunctionalModel`

− Description `**Experimental**` was removed from object type `SysSdmHardwareComponent`

− Description `**Experimental**` was removed from object type `SysSdmHardwareModel`

− Description `**Experimental**` was removed from object type `SysSdmParameter`

− Description `**Experimental**` was removed from object type `SysSdmPeripheral`

− Description `**Experimental**` was removed from object type `SysSdmPort`

− Description `**Experimental**` was removed from object type `SysSdmSoftwareComponent`

− Description `**Experimental**` was removed from object type `SysSdmSoftwareModel`

− Description `**Experimental**` was removed from object type `SysSdmSoftwareSpecification`

− Description `**Experimental**` was removed from object type `SysSdmSoftwareStackInstance`

− Description `**Experimental**` was removed from object type `SysSdmSystemModel`

− Description `**Experimental**` was removed from object type `SysSdmSystemModelVersion`

− Description `**Experimental**` was removed from object type `SysSdmSystemModelVersionMetadata`

− Description `**Experimental**` was removed from object type `SysLibDeleteSoftwareLibraryInput`

− Description `**Experimental**` was removed from object type `SysLibUploadSoftwareLibraryInput`

− Description `**Experimental**` was removed from object type `SysSdmCreateSystemModelVersionInput`

− Description `**Experimental**` was removed from object type `SysSdmDmGpioMode`

− Description `**Experimental**` was removed from object type `SysSdmDmPeripheralVirtualization`

− Description `**Experimental**` was removed from object type `SysSdmDmPortMode`

− Description `**Experimental**` was removed from object type `SysSdmSoftwareComponentCategory`

###### Fields

\+ Field `cdmReleaseUrl` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `cdmVersion` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `description` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `isLatest` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `isOnlySemantic` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `isPullDeprecated` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `isPushDeprecated` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `migrationNotes` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `schemaVersion` was added to object type `SysSdmSchemaRegistryEntry`

\+ Field `status` was added to object type `SysSdmSchemaRegistryEntry`

### 27-Oct-2026

#### 🔴 Breaking Changes (52)

##### Collaboration

###### Types

− Type `DesAnnotationManagedPartBinding` was removed

− Member `DesAnnotationManagedPartBinding` was removed from Union type `DesAnnotationBinding`

##### Common

###### Directives

− Directive `listSize` was removed

##### Design

###### Types

− Type `DesCommentThreadProperty` was removed

Δ `DesCommentThread` object type no longer implements `Node` interface

###### Fields

− Field `id` was removed from object type `DesCommentThread`

− Field `properties` was removed from object type `DesCommentThread`

##### Insights

###### Types

− Type `DesWorkspaceInsInsightTypesSettingsGql` was removed

− Type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` was removed

###### Fields

− Field `insightTypesSettings` was removed from object type `DesWorkspaceInsUserSettings`

###### Input / Payload

− Input field `insightTypesSettings` was removed from input object type `DesWorkspaceInsUserSettingsInput`

##### Library Management

###### 🔍 Query

− Argument `requestPaidData: Boolean` was removed from field `Query.desPartGlobalPartByIds`

###### Fields

− Field `componentStatus` was removed from object type `DesPartUploadComponentOperationResult`

− Field `errorDetails` was removed from object type `DesPartUploadComponentOperationResult`

− Field `message` was removed from object type `DesPartUploadComponentOperationResult`

− Field `partChoiceStatus` was removed from object type `DesPartUploadComponentOperationResult`

− Field `revisionId` was removed from object type `DesPartUploadComponentOperationResult`

− Field `errorDetails` was removed from object type `DesPartUploadLibraryPartOperationResult`

− Field `message` was removed from object type `DesPartUploadLibraryPartOperationResult`

− Field `failureReason` was removed from object type `DesPartUploadOperationPayload`

##### Platform

###### ✏️ Mutation

− Field `platformKeyValueStoreAdd` was removed from object type `Mutation`

− Field `platformKeyValueStoreDelete` was removed from object type `Mutation`

− Field `platformKeyValueStoreUpdate` was removed from object type `Mutation`

###### Types

− Type `PlatformKeyValueStoreAddPayload` was removed

− Type `PlatformKeyValueStoreDeletePayload` was removed

− Type `PlatformKeyValueStoreEntry` was removed

− Type `PlatformKeyValueStoreEntryExistsError` was removed

− Type `PlatformKeyValueStoreEntryNotFoundError` was removed

− Type `PlatformKeyValueStoreEntrySummary` was removed

− Type `PlatformKeyValueStoreEntrySummaryConnection` was removed

− Type `PlatformKeyValueStoreEntrySummaryEdge` was removed

− Type `PlatformKeyValueStoreKeyInvalidError` was removed

− Type `PlatformKeyValueStoreQueries` was removed

− Type `PlatformKeyValueStoreQuotaExceededError` was removed

− Type `PlatformKeyValueStoreUpdatePayload` was removed

− Type `PlatformKeyValueStoreValueTooLargeError` was removed

− Type `PlatformTokenInvalidNameError` was removed

− Type `PlatformKeyValueStoreAddError` was removed

− Type `PlatformKeyValueStoreDeleteError` was removed

− Type `PlatformKeyValueStoreUpdateError` was removed

− Type `PlatformKeyValueStoreAddInput` was removed

− Type `PlatformKeyValueStoreDeleteInput` was removed

− Type `PlatformKeyValueStoreUpdateInput` was removed

− Member `PlatformTokenInvalidNameError` was removed from Union type `PlatformTokenUpdateError`

− Member `PlatformTokenInvalidNameError` was removed from Union type `PlatformWorkspaceRefreshTokenCreateError`

− Member `PlatformTokenInvalidNameError` was removed from Union type `PlatformWorkspaceTokenCreateError`

###### Fields

− Field `keyValueStore` was removed from object type `PlatformQueries`

###### Input / Payload

− Input field `itemIds` was removed from input object type `SolCreateSolutionInput`

##### Procurement

###### Types

− Type `CostedBomsConnection` was removed

− Type `CostedBomsEdge` was removed

###### Fields

− Field `costedBoms` was removed from object type `BomWip`

##### Renesas (preview)

###### Fields

− Field `onChipMemoryCode` was removed from object type `DmRaPartNumberModel`

#### ⚠️ Dangerous Changes (114)

##### Collaboration

###### 🔍 Query

Δ Directive `authorize` was removed from field `Query.desAnnotations`

Δ Directive `listSize` was removed from field `Query.desAnnotations`

##### Customization

###### 🔍 Query

Δ Directive `listSize` was removed from field `Query.gloScrScriptExecutionResults`

Δ Directive `listSize` was removed from field `Query.gloScrScripts`

Δ Directive `authorize` was removed from field `Query.gloScrScriptSecrets`

Δ Directive `authorize` was removed from field `Query.gloScrSecrets`

###### ✏️ Mutation

Δ Directive `authorize` was removed from field `Mutation.gloCusAddAssignment`

Δ Directive `authorize` was removed from field `Mutation.gloCusDeleteAssignment`

Δ Directive `authorize` was removed from field `Mutation.gloCusUpdateAssignment`

Δ Directive `authorize` was removed from field `Mutation.gloCusUpdateAssignmentConfigurations`

Δ Directive `authorize` was removed from field `Mutation.gloScrCreateScript`

Δ Directive `authorize` was removed from field `Mutation.gloScrCreateSecret`

Δ Directive `authorize` was removed from field `Mutation.gloScrDeleteScript`

Δ Directive `authorize` was removed from field `Mutation.gloScrDeleteSecret`

Δ Directive `authorize` was removed from field `Mutation.gloScrExecuteScript`

Δ Directive `authorize` was removed from field `Mutation.gloScrRenameScript`

Δ Directive `authorize` was removed from field `Mutation.gloScrSetScriptSecrets`

Δ Directive `authorize` was removed from field `Mutation.gloScrUpdateScript`

###### Fields

Δ Directive `listSize` was removed from field `GloCusExtensionPoint.assignments`

Δ Directive `listSize` was removed from field `GloScrScript.versions`

Δ Directive `authorize` was removed from object `GloScrScript`

Δ Directive `authorize` was removed from field `GloScrScriptVersion.package`

##### Design

###### 🔍 Query

Δ Directive `authorize` was removed from field `Query.desComparisonHealthcheck`

###### ✏️ Mutation

Δ Directive `authorize` was removed from field `Mutation.desCompareReleases`

##### Insights

###### 🔍 Query

Δ Directive `listSize` was removed from field `Query.desWorkspaceInsInsights`

##### Library Management

###### 🔍 Query

Δ Directive `listSize` was removed from field `Query.desPartGlobalSearch`

Δ Directive `listSize` was removed from field `Query.desPartSearch`

##### Platform

###### 🔍 Query

Δ Directive `authorize` was removed from field `Query.desWorkspaceGroupById`

Δ Directive `authorize` was removed from field `Query.desWorkspaceGroupsByIds`

Δ Directive `authorize` was removed from field `Query.desWorkspaceTeamByAuth`

Δ Directive `authorize` was removed from field `Query.desWorkspaceUserByAuth`

Δ Directive `authorize` was removed from field `Query.desWorkspaceUserById`

Δ Directive `authorize` was removed from field `Query.desWorkspaceUsersByIds`

Δ Directive `authorize` was removed from field `Query.gloAppByClientId`

Δ Directive `authorize` was removed from field `Query.gloAppById`

Δ Directive `authorize` was removed from field `Query.gloAppInstalledApps`

Δ Directive `authorize` was removed from field `Query.gloApps`

Δ Directive `listSize` was removed from field `Query.gloApps`

Δ Directive `authorize` was removed from field `Query.gloEvtSubscriptionById`

Δ Directive `authorize` was removed from field `Query.gloOrganization`

Δ Directive `authorize` was removed from field `Query.gloOrganizationById`

Δ Directive `authorize` was removed from field `Query.gloUserById`

Δ Directive `authorize` was removed from field `Query.gloUserGroups`

Δ Directive `listSize` was removed from field `Query.gloUserGroups`

Δ Directive `authorize` was removed from field `Query.gloUsers`

Δ Directive `listSize` was removed from field `Query.gloUsers`

Δ Directive `authorize` was removed from field `Query.gloUsersByIds`

###### ✏️ Mutation

Δ Directive `authorize` was removed from field `Mutation.gloAddAppClientSecret`

Δ Directive `authorize` was removed from field `Mutation.gloAddAppGrantType`

Δ Directive `authorize` was removed from field `Mutation.gloAddAppRedirectUri`

Δ Directive `authorize` was removed from field `Mutation.gloAddAppScope`

Δ Directive `authorize` was removed from field `Mutation.gloAddUsersToGroup`

Δ Directive `authorize` was removed from field `Mutation.globalTrackedEventReport`

Δ Directive `authorize` was removed from field `Mutation.gloCreateApp`

Δ Directive `authorize` was removed from field `Mutation.gloCreateAppFromOAuthClient`

Δ Directive `authorize` was removed from field `Mutation.gloCreateUser`

Δ Directive `authorize` was removed from field `Mutation.gloCreateUserGroup`

Δ Directive `authorize` was removed from field `Mutation.gloDeleteApp`

Δ Directive `authorize` was removed from field `Mutation.gloEvtCreateWebhookSubscription`

Δ Directive `authorize` was removed from field `Mutation.gloEvtDeleteSubscription`

Δ Directive `authorize` was removed from field `Mutation.gloEvtPublishEvent`

Δ Directive `authorize` was removed from field `Mutation.gloInstallApp`

Δ Directive `authorize` was removed from field `Mutation.gloRemoveAppClientSecret`

Δ Directive `authorize` was removed from field `Mutation.gloRemoveAppGrantType`

Δ Directive `authorize` was removed from field `Mutation.gloRemoveAppRedirectUri`

Δ Directive `authorize` was removed from field `Mutation.gloRemoveAppScope`

Δ Directive `authorize` was removed from field `Mutation.gloRemoveUsersFromGroup`

Δ Directive `authorize` was removed from field `Mutation.gloRestoreApp`

Δ Directive `authorize` was removed from field `Mutation.gloUninstallApp`

Δ Directive `authorize` was removed from field `Mutation.gloUpdateAppContactEmail`

Δ Directive `authorize` was removed from field `Mutation.gloUpdateAppDescription`

Δ Directive `authorize` was removed from field `Mutation.gloUpdateAppHrid`

Δ Directive `authorize` was removed from field `Mutation.gloUpdateAppName`

Δ Directive `authorize` was removed from field `Mutation.platformTokenDelete`

Δ Directive `authorize` was removed from field `Mutation.platformTokenUpdate`

Δ Directive `authorize` was removed from field `Mutation.platformWorkspaceRefreshTokenCreate`

Δ Directive `authorize` was removed from field `Mutation.platformWorkspaceRefreshTokenCreateNewSecret`

Δ Directive `authorize` was removed from field `Mutation.platformWorkspaceRefreshTokenDeleteSecret`

Δ Directive `authorize` was removed from field `Mutation.platformWorkspaceTokenCreate`

###### Fields

Δ Directive `authorize` was removed from field `DesWorkspaceGroup.members`

Δ Directive `listSize` was removed from field `DesWorkspaceGroup.members`

Δ Directive `authorize` was removed from field `DesWorkspaceTeam.projectGuests`

Δ Directive `listSize` was removed from field `DesWorkspaceTeam.projectGuests`

Δ Directive `authorize` was removed from field `DesWorkspaceTeam.workspaceGroups`

Δ Directive `listSize` was removed from field `DesWorkspaceTeam.workspaceGroups`

Δ Directive `authorize` was removed from field `DesWorkspaceTeam.workspaceUsers`

Δ Directive `listSize` was removed from field `DesWorkspaceTeam.workspaceUsers`

Δ Directive `authorize` was removed from field `TokenQueries.byTokenId`

Δ Directive `authorize` was removed from field `TokenQueries.byWorkspace`

Δ Directive `listSize` was removed from field `TokenQueries.byWorkspace`

Δ Directive `authorize` was removed from field `TokenQueries.workspaceTokenQuota`

##### Procurement

###### 🔍 Query

Δ Directive `authorize` was removed from field `Query.bomBom`

Δ Directive `authorize` was removed from field `Query.bomBomById`

Δ Directive `authorize` was removed from field `Query.bomBomRelease`

Δ Directive `authorize` was removed from field `Query.bomBoms`

###### ✏️ Mutation

Δ Directive `authorize` was removed from field `Mutation.bomChangeBomReleaseLifecycleState`

Δ Directive `authorize` was removed from field `Mutation.bomCreateBom`

Δ Directive `authorize` was removed from field `Mutation.bomExportBom`

Δ Directive `authorize` was removed from field `Mutation.bomExportBom`

Δ Directive `authorize` was removed from field `Mutation.bomExportBomById`

Δ Directive `authorize` was removed from field `Mutation.bomExportBomById`

Δ Directive `authorize` was removed from field `Mutation.bomExportBomRelease`

Δ Directive `authorize` was removed from field `Mutation.bomExportBomRelease`

###### Fields

Δ Directive `authorize` was removed from field `BomItem.issues`

Δ Directive `authorize` was removed from field `BomItemAlternate.issues`

Δ Directive `authorize` was removed from field `BomItemAlternate.selectedOffer`

Δ Directive `authorize` was removed from field `BomItemSubstitute.issues`

Δ Directive `authorize` was removed from field `BomItemSubstitute.selectedOffer`

Δ Directive `authorize` was removed from field `BomRelease.healthChecks`

Δ Directive `authorize` was removed from field `BomRelease.incompleteHealthChecks`

Δ Directive `authorize` was removed from field `BomRelease.issues`

Δ Directive `authorize` was removed from field `BomWip.healthChecks`

Δ Directive `authorize` was removed from field `BomWip.incompleteHealthChecks`

Δ Directive `authorize` was removed from field `BomWip.issues`

#### ✅ Non-Breaking Changes (20)

##### Customization

###### Input / Payload

Δ Directive `oneOf` was removed from input object `GloCusUpdateAssignmentInput`

##### Library Management

###### Fields

\+ Field `errorMessage` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `status` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `errorMessage` was added to object type `DesPartUploadLibraryPartOperationResult`

##### Platform

###### 🔍 Query

Δ Field `Query.solBldEntityScaffoldingStatus` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.solBldEntityScaffoldingStatus`

###### Types

− Description `Specifies the grids whose permissions must provide access to a solution.` was removed from object type `SolAccessibleToInput`

##### Procurement

###### Types

− Description `Result of changing the lifecycle state of a BOM release.` was removed from object type `BomChangeBomReleaseLifecycleStatePayload`

− Description `Result of creating a new BOM.` was removed from object type `BomCreateBomPayload`

− Description `Result of exporting a BOM to a file.` was removed from object type `BomExportBomPayload`

− Description `Result of exporting a BOM release to a file.` was removed from object type `BomExportBomReleasePayload`

− Description `Input for changing the lifecycle state of a BOM release.` was removed from object type `BomChangeBomReleaseLifecycleStateInput`

− Description `Input for creating a new BOM.` was removed from object type `BomCreateBomInput`

− Description `Input for exporting a BOM by its identifier.` was removed from object type `BomExportBomByIdInput`

− Description `Input for exporting a BOM.` was removed from object type `BomExportBomInput`

− Description `Input for exporting a BOM release.` was removed from object type `BomExportBomReleaseInput`

###### Input / Payload

Δ Directive `oneOf` was removed from input object `BomCreateBomItemElementAttributeValueInput`

Δ Directive `oneOf` was removed from input object `BomCreateBomOfferReferenceInput`

Δ Directive `oneOf` was removed from input object `BomCreateBomPartReferenceInput`

Δ Directive `oneOf` was removed from input object `BomCreateBomSupplierReferenceInput`

### 24-Oct-2026

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

Δ `DesCommentThread` object implements `Node` interface

#### ✅ Non-Breaking Changes (6)

##### Design

###### Types

\+ Type `DesCommentThreadProperty` was added

Δ Object type `DesCommentThreadProperty` has description `Comment thread metadata entry.`

###### Fields

\+ Field `name` was added to object type `DesCommentThreadProperty`

\+ Field `value` was added to object type `DesCommentThreadProperty`

\+ Field `id` was added to object type `DesCommentThread`

\+ Field `properties` was added to object type `DesCommentThread`

### 23-Oct-2026

#### ✅ Non-Breaking Changes (30)

##### Platform

###### 🔍 Query

\+ Field `globalTrackedEvent` was added to object type `Query`

Δ Field `Query.globalTrackedEvent` is deprecated

Δ Directive `deprecated` was added to `Query.globalTrackedEvent`

###### ✏️ Mutation

\+ Field `globalTrackedEventReport` was added to object type `Mutation`

\+ Argument `input: GlobalTrackedEventReportInput!` added to `Mutation.globalTrackedEventReport`

Δ Directive `authorize` was added to `Mutation.globalTrackedEventReport`

###### Types

\+ Type `GlobalTrackedEventContextObjectIdInvalidError` was added

Δ `GlobalTrackedEventContextObjectIdInvalidError` object implements `Error` interface

Δ Object type `GlobalTrackedEventContextObjectIdInvalidError` has description `Indicates that the supplied context object identifier is rejected.`

\+ Type `GlobalTrackedEventNameInvalidError` was added

Δ `GlobalTrackedEventNameInvalidError` object implements `Error` interface

Δ Object type `GlobalTrackedEventNameInvalidError` has description `Indicates that the supplied event name is rejected.`

\+ Type `GlobalTrackedEventReportPayload` was added

Δ Object type `GlobalTrackedEventReportPayload` has description `Result of reporting a business analytics event.`

\+ Type `GlobalTrackedEventReportError` was added

\+ Member `GlobalTrackedEventNameInvalidError` was added to Union type `GlobalTrackedEventReportError`

\+ Member `GlobalTrackedEventContextObjectIdInvalidError` was added to Union type `GlobalTrackedEventReportError`

\+ Type `GlobalTrackedEventReportInput` was added

Δ Object type `GlobalTrackedEventReportInput` has description `Business analytics event to record.`

###### Fields

\+ Field `contextObjectId` was added to object type `GlobalTrackedEventContextObjectIdInvalidError`

\+ Field `message` was added to object type `GlobalTrackedEventContextObjectIdInvalidError`

\+ Field `eventName` was added to object type `GlobalTrackedEventNameInvalidError`

\+ Field `message` was added to object type `GlobalTrackedEventNameInvalidError`

\+ Field `errors` was added to object type `GlobalTrackedEventReportPayload`

###### Input / Payload

\+ Input field `contextObjectId` of type `String` was added to input object type `GlobalTrackedEventReportInput`

\+ Input field `eventName` of type `String!` was added to input object type `GlobalTrackedEventReportInput`

\+ Input field `sourceName` of type `String` was added to input object type `GlobalTrackedEventReportInput`

\+ Input field `userId` of type `String!` was added to input object type `GlobalTrackedEventReportInput`

\+ Input field `workspaceId` of type `String!` was added to input object type `GlobalTrackedEventReportInput`

\+ Input field `itemIds` of type `[ID!]` was added to input object type `SolCreateSolutionInput`

### 20-Oct-2026

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### Types

\+ Enum value `RASC_CMAKE` was added to enum `SupSoftwareProjectEvalKitProjectSourceType`

### 17-Oct-2026

#### ⚠️ Dangerous Changes (1)

##### Library Management

###### 🔍 Query

\+ Argument `requestPaidData: Boolean` added to `Query.desPartGlobalPartByIds`

#### ✅ Non-Breaking Changes (10)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectToolchain` was added

###### Fields

\+ Field `name` was added to object type `SupSoftwareProjectToolchain`

\+ Field `supportedVersions` was added to object type `SupSoftwareProjectToolchain`

\+ Field `toolchainId` was added to object type `SupSoftwareProjectToolchain`

Δ Field `SupSoftwareProjectToolchain.toolchainId` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectToolchain.toolchainId`

\+ Field `toolchain` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `toolchainVersion` was added to object type `SupSoftwareProjectEvalKitProjectSource`

##### Supply

###### Input / Payload

\+ Input field `toolchainId` of type `String` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `toolchainVersion` of type `String` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

### 15-Oct-2026

#### 🔴 Breaking Changes (8)

##### Customization

###### Input / Payload

Δ Directive `oneOf` was added to input object `GloCusUpdateAssignmentInput`

##### Library Management

###### Fields

− Field `errorMessage` was removed from object type `DesPartUploadComponentOperationResult`

− Field `status` was removed from object type `DesPartUploadComponentOperationResult`

− Field `errorMessage` was removed from object type `DesPartUploadLibraryPartOperationResult`

##### Procurement

###### Input / Payload

Δ Directive `oneOf` was added to input object `BomCreateBomItemElementAttributeValueInput`

Δ Directive `oneOf` was added to input object `BomCreateBomOfferReferenceInput`

Δ Directive `oneOf` was added to input object `BomCreateBomPartReferenceInput`

Δ Directive `oneOf` was added to input object `BomCreateBomSupplierReferenceInput`

#### ⚠️ Dangerous Changes (117)

##### Collaboration

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desAnnotations`

Δ Directive `listSize` was added to `Query.desAnnotations`

###### Types

\+ Member `DesAnnotationManagedPartBinding` was added to Union type `DesAnnotationBinding`

##### Customization

###### 🔍 Query

Δ Directive `listSize` was added to `Query.gloScrScriptExecutionResults`

Δ Directive `listSize` was added to `Query.gloScrScripts`

Δ Directive `authorize` was added to `Query.gloScrScriptSecrets`

Δ Directive `authorize` was added to `Query.gloScrSecrets`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.gloCusAddAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusDeleteAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusUpdateAssignment`

Δ Directive `authorize` was added to `Mutation.gloCusUpdateAssignmentConfigurations`

Δ Directive `authorize` was added to `Mutation.gloScrCreateScript`

Δ Directive `authorize` was added to `Mutation.gloScrCreateSecret`

Δ Directive `authorize` was added to `Mutation.gloScrDeleteScript`

Δ Directive `authorize` was added to `Mutation.gloScrDeleteSecret`

Δ Directive `authorize` was added to `Mutation.gloScrExecuteScript`

Δ Directive `authorize` was added to `Mutation.gloScrRenameScript`

Δ Directive `authorize` was added to `Mutation.gloScrSetScriptSecrets`

Δ Directive `authorize` was added to `Mutation.gloScrUpdateScript`

###### Fields

Δ Directive `listSize` was added to `GloCusExtensionPoint.assignments`

Δ Directive `listSize` was added to `GloScrScript.versions`

Δ Directive `authorize` was added to object `GloScrScript`

Δ Directive `authorize` was added to `GloScrScriptVersion.package`

##### Design

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desComparisonHealthcheck`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.desCompareReleases`

##### Insights

###### 🔍 Query

Δ Directive `listSize` was added to `Query.desWorkspaceInsInsights`

##### Library Management

###### 🔍 Query

Δ Directive `listSize` was added to `Query.desPartGlobalSearch`

Δ Directive `listSize` was added to `Query.desPartSearch`

##### Platform

###### 🔍 Query

Δ Directive `authorize` was added to `Query.desWorkspaceGroupById`

Δ Directive `authorize` was added to `Query.desWorkspaceGroupsByIds`

Δ Directive `authorize` was added to `Query.desWorkspaceTeamByAuth`

Δ Directive `authorize` was added to `Query.desWorkspaceUserByAuth`

Δ Directive `authorize` was added to `Query.desWorkspaceUserById`

Δ Directive `authorize` was added to `Query.desWorkspaceUsersByIds`

Δ Directive `authorize` was added to `Query.gloAppByClientId`

Δ Directive `authorize` was added to `Query.gloAppById`

Δ Directive `authorize` was added to `Query.gloAppInstalledApps`

Δ Directive `authorize` was added to `Query.gloApps`

Δ Directive `listSize` was added to `Query.gloApps`

Δ Directive `authorize` was added to `Query.gloEvtSubscriptionById`

Δ Directive `authorize` was added to `Query.gloOrganization`

Δ Directive `authorize` was added to `Query.gloOrganizationById`

Δ Directive `authorize` was added to `Query.gloUserById`

Δ Directive `authorize` was added to `Query.gloUserGroups`

Δ Directive `listSize` was added to `Query.gloUserGroups`

Δ Directive `authorize` was added to `Query.gloUsers`

Δ Directive `listSize` was added to `Query.gloUsers`

Δ Directive `authorize` was added to `Query.gloUsersByIds`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.gloAddAppClientSecret`

Δ Directive `authorize` was added to `Mutation.gloAddAppGrantType`

Δ Directive `authorize` was added to `Mutation.gloAddAppRedirectUri`

Δ Directive `authorize` was added to `Mutation.gloAddAppScope`

Δ Directive `authorize` was added to `Mutation.gloAddUsersToGroup`

Δ Directive `authorize` was added to `Mutation.gloCreateApp`

Δ Directive `authorize` was added to `Mutation.gloCreateAppFromOAuthClient`

Δ Directive `authorize` was added to `Mutation.gloCreateUser`

Δ Directive `authorize` was added to `Mutation.gloCreateUserGroup`

Δ Directive `authorize` was added to `Mutation.gloDeleteApp`

Δ Directive `authorize` was added to `Mutation.gloEvtCreateWebhookSubscription`

Δ Directive `authorize` was added to `Mutation.gloEvtDeleteSubscription`

Δ Directive `authorize` was added to `Mutation.gloEvtPublishEvent`

Δ Directive `authorize` was added to `Mutation.gloInstallApp`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppClientSecret`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppGrantType`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppRedirectUri`

Δ Directive `authorize` was added to `Mutation.gloRemoveAppScope`

Δ Directive `authorize` was added to `Mutation.gloRemoveUsersFromGroup`

Δ Directive `authorize` was added to `Mutation.gloRestoreApp`

Δ Directive `authorize` was added to `Mutation.gloUninstallApp`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppContactEmail`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppDescription`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppHrid`

Δ Directive `authorize` was added to `Mutation.gloUpdateAppName`

Δ Directive `authorize` was added to `Mutation.platformTokenDelete`

Δ Directive `authorize` was added to `Mutation.platformTokenUpdate`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenCreate`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenCreateNewSecret`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceRefreshTokenDeleteSecret`

Δ Directive `authorize` was added to `Mutation.platformWorkspaceTokenCreate`

###### Types

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformTokenUpdateError`

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenInvalidNameError` was added to Union type `PlatformWorkspaceTokenCreateError`

###### Fields

Δ Directive `authorize` was added to `DesWorkspaceGroup.members`

Δ Directive `listSize` was added to `DesWorkspaceGroup.members`

Δ Directive `authorize` was added to `DesWorkspaceTeam.projectGuests`

Δ Directive `listSize` was added to `DesWorkspaceTeam.projectGuests`

Δ Directive `authorize` was added to `DesWorkspaceTeam.workspaceGroups`

Δ Directive `listSize` was added to `DesWorkspaceTeam.workspaceGroups`

Δ Directive `authorize` was added to `DesWorkspaceTeam.workspaceUsers`

Δ Directive `listSize` was added to `DesWorkspaceTeam.workspaceUsers`

Δ Directive `authorize` was added to `TokenQueries.byTokenId`

Δ Directive `authorize` was added to `TokenQueries.byWorkspace`

Δ Directive `listSize` was added to `TokenQueries.byWorkspace`

Δ Directive `authorize` was added to `TokenQueries.workspaceTokenQuota`

##### Procurement

###### 🔍 Query

Δ Directive `authorize` was added to `Query.bomBom`

Δ Directive `authorize` was added to `Query.bomBomById`

Δ Directive `authorize` was added to `Query.bomBomRelease`

Δ Directive `authorize` was added to `Query.bomBoms`

###### ✏️ Mutation

Δ Directive `authorize` was added to `Mutation.bomChangeBomReleaseLifecycleState`

Δ Directive `authorize` was added to `Mutation.bomCreateBom`

Δ Directive `authorize` was added to `Mutation.bomExportBom`

Δ Directive `authorize` was added to `Mutation.bomExportBom`

Δ Directive `authorize` was added to `Mutation.bomExportBomById`

Δ Directive `authorize` was added to `Mutation.bomExportBomById`

Δ Directive `authorize` was added to `Mutation.bomExportBomRelease`

Δ Directive `authorize` was added to `Mutation.bomExportBomRelease`

###### Fields

Δ Directive `authorize` was added to `BomItem.issues`

Δ Directive `authorize` was added to `BomItemAlternate.issues`

Δ Directive `authorize` was added to `BomItemAlternate.selectedOffer`

Δ Directive `authorize` was added to `BomItemSubstitute.issues`

Δ Directive `authorize` was added to `BomItemSubstitute.selectedOffer`

Δ Directive `authorize` was added to `BomRelease.healthChecks`

Δ Directive `authorize` was added to `BomRelease.incompleteHealthChecks`

Δ Directive `authorize` was added to `BomRelease.issues`

Δ Directive `authorize` was added to `BomWip.healthChecks`

Δ Directive `authorize` was added to `BomWip.incompleteHealthChecks`

Δ Directive `authorize` was added to `BomWip.issues`

#### ✅ Non-Breaking Changes (325)

##### Collaboration

###### 🔍 Query

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

###### Types

\+ Type `DesAnnotationManagedPartBinding` was added

###### Fields

\+ Field `partId` was added to object type `DesAnnotationManagedPartBinding`

##### Common

###### Directives

\+ Directive `listSize` was added

Δ Location `FIELD_DEFINITION` was added to directive `listSize`

Δ Argument `assumedSize` was added to directive `listSize`

Δ Argument `slicingArguments` was added to directive `listSize`

Δ Argument `slicingArgumentDefaultValue` was added to directive `listSize`

Δ Argument `sizedFields` was added to directive `listSize`

Δ Argument `requireOneSlicingArgument` was added to directive `listSize`

##### Customization

###### 🔍 Query

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

###### ✏️ Mutation

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

###### Fields

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

##### Insights

###### 🔍 Query

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

###### Types

\+ Type `DesWorkspaceInsInsightTypesSettingsGql` was added

Δ Object type `DesWorkspaceInsInsightTypesSettingsGql` has description `Insight-type preferences affecting which insights are shown.`

\+ Type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` was added

Δ Object type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` has description `Insight-type preferences that define which insights are shown.`

###### Fields

\+ Field `excludedInsightTypes` was added to object type `DesWorkspaceInsInsightTypesSettingsGql`

\+ Field `insightTypesSettings` was added to object type `DesWorkspaceInsUserSettings`

###### Input / Payload

\+ Input field `excludedInsightTypes` of type `[String!]!` was added to input object type `DesWorkspaceInsInsightTypesSettingsInputGqlInput`

\+ Input field `insightTypesSettings` of type `DesWorkspaceInsInsightTypesSettingsInputGqlInput` was added to input object type `DesWorkspaceInsUserSettingsInput`

##### Library Management

###### 🔍 Query

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

###### Fields

\+ Field `componentStatus` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `errorDetails` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `message` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `partChoiceStatus` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `revisionId` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `errorDetails` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `message` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `failureReason` was added to object type `DesPartUploadOperationPayload`

##### Platform

###### 🔍 Query

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

Δ Field `Query.solBldEntityScaffoldingStatus` is deprecated

Δ Directive `deprecated` was added to `Query.solBldEntityScaffoldingStatus`

Δ Argument `reason` was added to `@deprecated`

###### ✏️ Mutation

\+ Field `platformKeyValueStoreAdd` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreAddInput!` added to `Mutation.platformKeyValueStoreAdd`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreAdd`

Δ Argument `policy` was added to `@authorize`

\+ Field `platformKeyValueStoreDelete` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreDeleteInput!` added to `Mutation.platformKeyValueStoreDelete`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreDelete`

Δ Argument `policy` was added to `@authorize`

\+ Field `platformKeyValueStoreUpdate` was added to object type `Mutation`

\+ Argument `input: PlatformKeyValueStoreUpdateInput!` added to `Mutation.platformKeyValueStoreUpdate`

Δ Directive `authorize` was added to `Mutation.platformKeyValueStoreUpdate`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

###### Types

\+ Type `PlatformKeyValueStoreAddPayload` was added

\+ Type `PlatformKeyValueStoreDeletePayload` was added

\+ Type `PlatformKeyValueStoreEntry` was added

Δ Object type `PlatformKeyValueStoreEntry` has description `A value stored in the key-value store of an app installation, in the workspace of the access token.`

\+ Type `PlatformKeyValueStoreEntryExistsError` was added

Δ `PlatformKeyValueStoreEntryExistsError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreEntryNotFoundError` was added

Δ `PlatformKeyValueStoreEntryNotFoundError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreEntrySummary` was added

Δ Object type `PlatformKeyValueStoreEntrySummary` has description `Entry metadata returned by *all*, without the value.`

\+ Type `PlatformKeyValueStoreEntrySummaryConnection` was added

Δ Object type `PlatformKeyValueStoreEntrySummaryConnection` has description `A connection to a list of items.`

\+ Type `PlatformKeyValueStoreEntrySummaryEdge` was added

Δ Object type `PlatformKeyValueStoreEntrySummaryEdge` has description `An edge in a connection.`

\+ Type `PlatformKeyValueStoreKeyInvalidError` was added

Δ `PlatformKeyValueStoreKeyInvalidError` object implements `Error` interface

\+ Type `PlatformKeyValueStoreQueries` was added

\+ Type `PlatformKeyValueStoreQuotaExceededError` was added

Δ `PlatformKeyValueStoreQuotaExceededError` object implements `Error` interface

Δ Object type `PlatformKeyValueStoreQuotaExceededError` has description 'Returned when adding the entry, or growing its value, would exceed the installation\`s quota.\`

\+ Type `PlatformKeyValueStoreUpdatePayload` was added

\+ Type `PlatformKeyValueStoreValueTooLargeError` was added

Δ `PlatformKeyValueStoreValueTooLargeError` object implements `Error` interface

\+ Type `PlatformTokenInvalidNameError` was added

Δ `PlatformTokenInvalidNameError` object implements `Error` interface

Δ Object type `PlatformTokenInvalidNameError` has description ``Error returned by the Token API when an input name for a `PlatformToken` is invalid.``

\+ Type `PlatformKeyValueStoreAddError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreValueTooLargeError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreEntryExistsError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Member `PlatformKeyValueStoreQuotaExceededError` was added to Union type `PlatformKeyValueStoreAddError`

\+ Type `PlatformKeyValueStoreDeleteError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreDeleteError`

\+ Type `PlatformKeyValueStoreUpdateError` was added

\+ Member `PlatformKeyValueStoreKeyInvalidError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreValueTooLargeError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreEntryNotFoundError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Member `PlatformKeyValueStoreQuotaExceededError` was added to Union type `PlatformKeyValueStoreUpdateError`

\+ Type `PlatformKeyValueStoreAddInput` was added

\+ Type `PlatformKeyValueStoreDeleteInput` was added

\+ Type `PlatformKeyValueStoreUpdateInput` was added

Δ Object type `SolAccessibleToInput` has description `Specifies the grids whose permissions must provide access to a solution.`

###### Arguments

\+ Argument `after: String` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `first: Int` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `prefix: String` added to `PlatformKeyValueStoreQueries.all`

\+ Argument `key: String!` added to `PlatformKeyValueStoreQueries.byKey`

\+ Argument `keys: [String!]!` added to `PlatformKeyValueStoreQueries.byKeys`

###### Fields

\+ Field `entry` was added to object type `PlatformKeyValueStoreAddPayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreAddPayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreDeletePayload`

\+ Field `isDeleted` was added to object type `PlatformKeyValueStoreDeletePayload`

\+ Field `createdAt` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `updatedAt` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `value` was added to object type `PlatformKeyValueStoreEntry`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntryExistsError`

\+ Field `message` was added to object type `PlatformKeyValueStoreEntryExistsError`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntryNotFoundError`

\+ Field `message` was added to object type `PlatformKeyValueStoreEntryNotFoundError`

\+ Field `createdAt` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `key` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `updatedAt` was added to object type `PlatformKeyValueStoreEntrySummary`

\+ Field `edges` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `nodes` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `pageInfo` was added to object type `PlatformKeyValueStoreEntrySummaryConnection`

\+ Field `cursor` was added to object type `PlatformKeyValueStoreEntrySummaryEdge`

\+ Field `node` was added to object type `PlatformKeyValueStoreEntrySummaryEdge`

\+ Field `key` was added to object type `PlatformKeyValueStoreKeyInvalidError`

\+ Field `message` was added to object type `PlatformKeyValueStoreKeyInvalidError`

\+ Field `all` was added to object type `PlatformKeyValueStoreQueries`

Δ Directive `listSize` was added to `PlatformKeyValueStoreQueries.all`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

\+ Field `byKey` was added to object type `PlatformKeyValueStoreQueries`

\+ Field `byKeys` was added to object type `PlatformKeyValueStoreQueries`

\+ Field `maxEntryCount` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `maxTotalSizeBytes` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `message` was added to object type `PlatformKeyValueStoreQuotaExceededError`

\+ Field `entry` was added to object type `PlatformKeyValueStoreUpdatePayload`

\+ Field `errors` was added to object type `PlatformKeyValueStoreUpdatePayload`

\+ Field `maxSizeBytes` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `message` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `sizeBytes` was added to object type `PlatformKeyValueStoreValueTooLargeError`

\+ Field `message` was added to object type `PlatformTokenInvalidNameError`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

\+ Field `keyValueStore` was added to object type `PlatformQueries`

Δ Directive `authorize` was added to `PlatformQueries.keyValueStore`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `assumedSize` was added to `@listSize`

Δ Argument `slicingArguments` was added to `@listSize`

Δ Argument `slicingArgumentDefaultValue` was added to `@listSize`

Δ Argument `sizedFields` was added to `@listSize`

Δ Argument `requireOneSlicingArgument` was added to `@listSize`

Δ Argument `policy` was added to `@authorize`

###### Input / Payload

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreAddInput`

\+ Input field `value` of type `String!` was added to input object type `PlatformKeyValueStoreAddInput`

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreDeleteInput`

\+ Input field `key` of type `String!` was added to input object type `PlatformKeyValueStoreUpdateInput`

\+ Input field `value` of type `String!` was added to input object type `PlatformKeyValueStoreUpdateInput`

##### Procurement

###### 🔍 Query

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

###### ✏️ Mutation

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

###### Types

\+ Type `CostedBomsConnection` was added

Δ Object type `CostedBomsConnection` has description `A connection to a list of items.`

\+ Type `CostedBomsEdge` was added

Δ Object type `CostedBomsEdge` has description `An edge in a connection.`

Δ Object type `BomChangeBomReleaseLifecycleStatePayload` has description `Result of changing the lifecycle state of a BOM release.`

Δ Object type `BomCreateBomPayload` has description `Result of creating a new BOM.`

Δ Object type `BomExportBomPayload` has description `Result of exporting a BOM to a file.`

Δ Object type `BomExportBomReleasePayload` has description `Result of exporting a BOM release to a file.`

Δ Object type `BomChangeBomReleaseLifecycleStateInput` has description `Input for changing the lifecycle state of a BOM release.`

Δ Object type `BomCreateBomInput` has description `Input for creating a new BOM.`

Δ Object type `BomExportBomByIdInput` has description `Input for exporting a BOM by its identifier.`

Δ Object type `BomExportBomInput` has description `Input for exporting a BOM.`

Δ Object type `BomExportBomReleaseInput` has description `Input for exporting a BOM release.`

###### Arguments

\+ Argument `after: String` added to `BomWip.costedBoms`

\+ Argument `before: String` added to `BomWip.costedBoms`

\+ Argument `first: Int` added to `BomWip.costedBoms`

\+ Argument `last: Int` added to `BomWip.costedBoms`

###### Fields

\+ Field `edges` was added to object type `CostedBomsConnection`

\+ Field `nodes` was added to object type `CostedBomsConnection`

\+ Field `pageInfo` was added to object type `CostedBomsConnection`

\+ Field `totalCount` was added to object type `CostedBomsConnection`

\+ Field `cursor` was added to object type `CostedBomsEdge`

\+ Field `node` was added to object type `CostedBomsEdge`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

\+ Field `costedBoms` was added to object type `BomWip`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

Δ Argument `policy` was added to `@authorize`

##### Renesas (preview)

###### Fields

\+ Field `onChipMemoryCode` was added to object type `DmRaPartNumberModel`

### 10-Oct-2026

#### ✅ Non-Breaking Changes (13)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectEvalKitProjectSourceArtifact` was added

###### Fields

\+ Field `downloadUrl` was added to object type `SupSoftwareProjectEvalKitProjectSourceArtifact`

\+ Field `fileName` was added to object type `SupSoftwareProjectEvalKitProjectSourceArtifact`

\+ Field `fileSizeInBytes` was added to object type `SupSoftwareProjectEvalKitProjectSourceArtifact`

\+ Field `outputSdmUrl` was added to object type `SupSoftwareProjectEvalKitProjectSourceArtifact`

\+ Field `updatedAt` was added to object type `SupSoftwareProjectEvalKitProjectSourceArtifact`

\+ Field `artifact` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `projectSourceId` was added to object type `SupSoftwareProjectEvalKitProjectSource`

Δ Field `SupSoftwareProjectEvalKitProjectSource.projectSourceId` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitProjectSource.projectSourceId`

Δ Argument `reason` was added to `@deprecated`

##### Supply

###### Input / Payload

\+ Input field `tags` of type `[String!]` was added to input object type `SupSolutionTemplateFilterInput`

\+ Input field `tags` of type `[String!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

### 08-Oct-2026

#### ✅ Non-Breaking Changes (35)

##### Design

###### Arguments

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byReleaseIdCombinedErc`

\+ Argument `releaseId: ID!` added to `RuleCheckExecutionQueries.byReleaseIdCombinedErc`

###### Fields

\+ Field `byReleaseIdCombinedErc` was added to object type `RuleCheckExecutionQueries`

##### Supply

###### ✏️ Mutation

\+ Field `supSolutionTemplatePatchRefDesigns` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchRefDesignsInput!` added to `Mutation.supSolutionTemplatePatchRefDesigns`

\+ Field `supSolutionTemplateSetRefDesigns` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetRefDesignsInput!` added to `Mutation.supSolutionTemplateSetRefDesigns`

###### Types

\+ Type `SupSolutionTemplatePatchRefDesignsPayload` was added

Δ Object type `SupSolutionTemplatePatchRefDesignsPayload` has description `Payload for patching reference designs on a solution template.`

\+ Type `SupSolutionTemplateSetRefDesignsPayload` was added

Δ Object type `SupSolutionTemplateSetRefDesignsPayload` has description `Payload for replacing reference designs on a solution template.`

\+ Type `SupSolutionTemplatePatchRefDesignsError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchRefDesignsError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchRefDesignsError`

\+ Type `SupSolutionTemplateSetRefDesignsError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetRefDesignsError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetRefDesignsError`

\+ Type `SupSolutionTemplatePatchRefDesignsInput` was added

Δ Object type `SupSolutionTemplatePatchRefDesignsInput` has description `Input for adding or removing individual reference designs on a solution template.`

\+ Type `SupSolutionTemplateSetRefDesignsInput` was added

Δ Object type `SupSolutionTemplateSetRefDesignsInput` has description `Input for replacing all reference designs on a solution template.`

###### Fields

\+ Field `errors` was added to object type `SupSolutionTemplatePatchRefDesignsPayload`

\+ Field `success` was added to object type `SupSolutionTemplatePatchRefDesignsPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetRefDesignsPayload`

\+ Field `success` was added to object type `SupSolutionTemplateSetRefDesignsPayload`

\+ Field `refDesignIds` was added to object type `SupSolutionTemplate`

Δ Field `SupSolutionTemplate.refDesignIds` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplate.refDesignIds`

Δ Argument `reason` was added to `@deprecated`

\+ Field `refDesigns` was added to object type `SupSolutionTemplate`

###### Input / Payload

\+ Input field `addRefDesignIds` of type `[ID!]` was added to input object type `SupSolutionTemplatePatchRefDesignsInput`

\+ Input field `removeRefDesignIds` of type `[ID!]` was added to input object type `SupSolutionTemplatePatchRefDesignsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchRefDesignsInput`

\+ Input field `refDesignIds` of type `[ID!]!` was added to input object type `SupSolutionTemplateSetRefDesignsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetRefDesignsInput`

### 29-Sep-2026

#### ✅ Non-Breaking Changes (38)

##### Customization

###### 🔍 Query

\+ Field `gloScrScriptSecrets` was added to object type `Query`

\+ Argument `scriptId: String!` added to `Query.gloScrScriptSecrets`

\+ Argument `scriptVersionId: String` added to `Query.gloScrScriptSecrets`

\+ Field `gloScrSecrets` was added to object type `Query`

###### ✏️ Mutation

\+ Field `gloScrCreateSecret` was added to object type `Mutation`

\+ Argument `input: GloScrCreateSecretInput!` added to `Mutation.gloScrCreateSecret`

\+ Field `gloScrDeleteSecret` was added to object type `Mutation`

\+ Argument `input: GloScrDeleteSecretInput!` added to `Mutation.gloScrDeleteSecret`

\+ Field `gloScrRenameScript` was added to object type `Mutation`

\+ Argument `input: GloScrRenameScriptInput!` added to `Mutation.gloScrRenameScript`

\+ Field `gloScrSetScriptSecrets` was added to object type `Mutation`

\+ Argument `input: GloScrSetScriptSecretsInput!` added to `Mutation.gloScrSetScriptSecrets`

###### Types

\+ Type `GloScrCreateSecretPayload` was added

\+ Type `GloScrDeleteSecretPayload` was added

\+ Type `GloScrRenameScriptPayload` was added

\+ Type `GloScrScriptSecret` was added

\+ Type `GloScrSecret` was added

\+ Type `GloScrSetScriptSecretsPayload` was added

\+ Type `GloScrCreateSecretInput` was added

\+ Type `GloScrDeleteSecretInput` was added

\+ Type `GloScrRenameScriptInput` was added

\+ Type `GloScrSetScriptSecretsInput` was added

###### Fields

\+ Field `gloScrSecret` was added to object type `GloScrCreateSecretPayload`

\+ Field `boolean` was added to object type `GloScrDeleteSecretPayload`

\+ Field `gloScrScript` was added to object type `GloScrRenameScriptPayload`

\+ Field `isMissing` was added to object type `GloScrScriptSecret`

\+ Field `name` was added to object type `GloScrScriptSecret`

\+ Field `name` was added to object type `GloScrSecret`

\+ Field `gloScrScriptSecret` was added to object type `GloScrSetScriptSecretsPayload`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `GloScrCreateSecretInput`

\+ Input field `value` of type `String!` was added to input object type `GloScrCreateSecretInput`

\+ Input field `name` of type `String!` was added to input object type `GloScrDeleteSecretInput`

\+ Input field `name` of type `String!` was added to input object type `GloScrRenameScriptInput`

\+ Input field `onlyIfProvisional` of type `Boolean` was added to input object type `GloScrRenameScriptInput`

\+ Input field `scriptId` of type `String!` was added to input object type `GloScrRenameScriptInput`

\+ Input field `scriptId` of type `String!` was added to input object type `GloScrSetScriptSecretsInput`

\+ Input field `scriptVersionId` of type `String!` was added to input object type `GloScrSetScriptSecretsInput`

\+ Input field `secretNames` of type `[String!]!` was added to input object type `GloScrSetScriptSecretsInput`

### 17-Sep-2026

#### ✅ Non-Breaking Changes (2)

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmBoardDeviceModel` was added to object type `Query`

\+ Argument `boardName: String!` added to `Query.dmBoardDeviceModel`

### 14-Sep-2026

#### ✅ Non-Breaking Changes (13)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectEvalKitProjectSourceDeviceFamily` was added

\+ Enum value `R_CAR` was added to enum `SupSoftwareProjectEvalKitProjectSourceDeviceFamily`

\+ Enum value `RA` was added to enum `SupSoftwareProjectEvalKitProjectSourceDeviceFamily`

\+ Enum value `RAFW` was added to enum `SupSoftwareProjectEvalKitProjectSourceDeviceFamily`

\+ Enum value `RX` was added to enum `SupSoftwareProjectEvalKitProjectSourceDeviceFamily`

\+ Enum value `RZ` was added to enum `SupSoftwareProjectEvalKitProjectSourceDeviceFamily`

\+ Type `SupSoftwareProjectEvalKitProjectSourceFramework` was added

\+ Enum value `FIT` was added to enum `SupSoftwareProjectEvalKitProjectSourceFramework`

\+ Enum value `FSP` was added to enum `SupSoftwareProjectEvalKitProjectSourceFramework`

###### Fields

\+ Field `family` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `framework` was added to object type `SupSoftwareProjectEvalKitProjectSource`

##### Supply

###### Input / Payload

\+ Input field `family` of type `SupSoftwareProjectEvalKitProjectSourceDeviceFamily` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `framework` of type `SupSoftwareProjectEvalKitProjectSourceFramework` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

### 11-Sep-2026

#### ✅ Non-Breaking Changes (9)

##### Design

###### Types

\+ Type `DesignDataSchematicDocument_Preview` was added

Δ Object type `DesignDataSchematicDocument_Preview` has description `**Experimental** Represents a schematic document in the design.`

###### Fields

\+ Field `documentId` was added to object type `DesignDataSchematicDocument_Preview`

\+ Field `fileName` was added to object type `DesignDataSchematicDocument_Preview`

\+ Field `parentDocumentIds` was added to object type `DesignDataSchematicDocument_Preview`

\+ Field `schematics` was added to object type `DesignData_Preview`

\+ Field `footprint` was added to object type `DesignDataComponent_Preview`

\+ Field `hierarchyPath` was added to object type `DesignDataComponent_Preview`

\+ Field `componentHierarchyPath` was added to object type `DesignDataVariation_Preview`

### 09-Sep-2026

#### ✅ Non-Breaking Changes (32)

##### Design

###### Types

\+ Type `DesProjectRepositoryType` was added

\+ Enum value `EXTERNAL` was added to enum `DesProjectRepositoryType`

\+ Enum value `INTERNAL` was added to enum `DesProjectRepositoryType`

Δ Object type `DesProjectRepositoryType` has description 'The hosting location of a project\`s VCS repository.\`

###### Fields

\+ Field `repositoryType` was added to object type `DesProject`

##### System Design

###### 🔍 Query

\+ Field `sysLibSoftwareLibraryDownloads` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sysLibSoftwareLibraryDownloads`

###### ✏️ Mutation

\+ Field `sysLibDeleteSoftwareLibrary` was added to object type `Mutation`

\+ Argument `input: SysLibDeleteSoftwareLibraryInput!` added to `Mutation.sysLibDeleteSoftwareLibrary`

\+ Field `sysLibUploadSoftwareLibrary` was added to object type `Mutation`

\+ Argument `input: SysLibUploadSoftwareLibraryInput!` added to `Mutation.sysLibUploadSoftwareLibrary`

###### Types

\+ Type `SysLibDeleteSoftwareLibraryPayload` was added

Δ Object type `SysLibDeleteSoftwareLibraryPayload` has description `**Experimental**`

\+ Type `SysLibSoftwareLibraryDownload` was added

Δ Object type `SysLibSoftwareLibraryDownload` has description `**Experimental**`

\+ Type `SysLibUploadSoftwareLibraryPayload` was added

Δ Object type `SysLibUploadSoftwareLibraryPayload` has description `**Experimental**`

\+ Type `SysLibDeleteSoftwareLibraryInput` was added

Δ Object type `SysLibDeleteSoftwareLibraryInput` has description `**Experimental**`

\+ Type `SysLibUploadSoftwareLibraryInput` was added

Δ Object type `SysLibUploadSoftwareLibraryInput` has description `**Experimental**`

###### Fields

\+ Field `boolean` was added to object type `SysLibDeleteSoftwareLibraryPayload`

\+ Field `downloadUrl` was added to object type `SysLibSoftwareLibraryDownload`

\+ Field `fileName` was added to object type `SysLibSoftwareLibraryDownload`

\+ Field `id` was added to object type `SysLibSoftwareLibraryDownload`

\+ Field `name` was added to object type `SysLibSoftwareLibraryDownload`

\+ Field `sysLibSoftwareComponent` was added to object type `SysLibUploadSoftwareLibraryPayload`

###### Input / Payload

\+ Input field `libraryId` of type `ID!` was added to input object type `SysLibDeleteSoftwareLibraryInput`

\+ Input field `fileId` of type `String!` was added to input object type `SysLibUploadSoftwareLibraryInput`

\+ Input field `fileName` of type `String!` was added to input object type `SysLibUploadSoftwareLibraryInput`

\+ Input field `libraryId` of type `ID` was added to input object type `SysLibUploadSoftwareLibraryInput`

\+ Input field `name` of type `String!` was added to input object type `SysLibUploadSoftwareLibraryInput`

### 01-Sep-2026

#### ✅ Non-Breaking Changes (2)

##### Design

###### Fields

\+ Field `isDeleted` was added to object type `DesRevisionDetails`

###### Input / Payload

\+ Input field `assigneeId` of type `String` was added to input object type `DesUpdateTaskInput`

### 31-Aug-2026

#### ✅ Non-Breaking Changes (4)

##### Platform

###### Types

\+ Type `SolAccessibleToInput` was added

###### Input / Payload

\+ Input field `ids` of type `[ID!]` was added to input object type `SolAccessibleToInput`

\+ Input field `accessibleTo` of type `SolAccessibleToInput` was added to input object type `SolSolutionFilterInput`

\+ Input field `ownedBy` of type `[ID!]` was added to input object type `SolSolutionFilterInput`

### 27-Aug-2026

#### ✅ Non-Breaking Changes (4)

##### Platform

###### Types

\+ Type `GloNtfEmailAttachmentInput` was added

###### Input / Payload

\+ Input field `fileName` of type `String!` was added to input object type `GloNtfEmailAttachmentInput`

\+ Input field `id` of type `String!` was added to input object type `GloNtfEmailAttachmentInput`

\+ Input field `attachments` of type `[GloNtfEmailAttachmentInput!]` was added to input object type `GloNtfSendEmailInput`

### 26-Aug-2026

#### ✅ Non-Breaking Changes (1)

##### Design

###### Fields

\+ Field `repositoryUrl` was added to object type `DesProject`

### 24-Aug-2026

#### 🔴 Breaking Changes (4)

##### Library Management

###### ✏️ Mutation

− Field `desPartUploadParts` was removed from object type `Mutation`

###### Types

− Type `DesPartUploadPartOperationResult` was removed

− Type `DesPartUploadPartsPayload` was removed

− Type `DesPartUploadPartsInput` was removed

#### ✅ Non-Breaking Changes (227)

##### Library Management

###### 🔍 Query

\+ Field `desPartTags` was added to object type `Query`

\+ Field `desPartUploadComponentsReport` was added to object type `Query`

\+ Argument `operationId: UUID!` added to `Query.desPartUploadComponentsReport`

\+ Field `desPartUploadLibraryPartsReport` was added to object type `Query`

\+ Argument `operationId: UUID!` added to `Query.desPartUploadLibraryPartsReport`

\+ Field `desPartUploadOperation` was added to object type `Query`

\+ Field `desPartUploadPartFileColumns` was added to object type `Query`

\+ Argument `fileId: String!` added to `Query.desPartUploadPartFileColumns`

\+ Argument `fileName: String!` added to `Query.desPartUploadPartFileColumns`

###### ✏️ Mutation

\+ Field `desPartAcknowledgeUploadOperation` was added to object type `Mutation`

\+ Argument `input: DesPartAcknowledgeUploadOperationInput!` added to `Mutation.desPartAcknowledgeUploadOperation`

\+ Field `desPartAttachTag` was added to object type `Mutation`

\+ Argument `input: DesPartAttachTagInput!` added to `Mutation.desPartAttachTag`

\+ Field `desPartChangeLifecycleState` was added to object type `Mutation`

\+ Argument `input: DesPartChangeLifecycleStateInput!` added to `Mutation.desPartChangeLifecycleState`

\+ Field `desPartCreateTag` was added to object type `Mutation`

\+ Argument `input: DesPartCreateTagInput!` added to `Mutation.desPartCreateTag`

\+ Field `desPartDeleteTag` was added to object type `Mutation`

\+ Argument `input: DesPartDeleteTagInput!` added to `Mutation.desPartDeleteTag`

\+ Field `desPartDetachTag` was added to object type `Mutation`

\+ Argument `input: DesPartDetachTagInput!` added to `Mutation.desPartDetachTag`

\+ Field `desPartUploadComponents` was added to object type `Mutation`

\+ Argument `input: DesPartUploadComponentsInput!` added to `Mutation.desPartUploadComponents`

\+ Field `desPartUploadLibraryParts` was added to object type `Mutation`

\+ Argument `input: DesPartUploadLibraryPartsInput!` added to `Mutation.desPartUploadLibraryParts`

###### Types

\+ Type `DesPartAcknowledgeUploadOperationPayload` was added

Δ Object type `DesPartAcknowledgeUploadOperationPayload` has description `Payload produced when the result of a parts upload operation is marked as read.`

\+ Type `DesPartAttachTagPayload` was added

Δ Object type `DesPartAttachTagPayload` has description `Represents the payload returned after assigning a part tag to parts.`

\+ Type `DesPartChangeLifecycleStatePayload` was added

Δ Object type `DesPartChangeLifecycleStatePayload` has description `Represents the payload returned after changing the lifecycle state of a part.`

\+ Type `DesPartCreateTagPayload` was added

Δ Object type `DesPartCreateTagPayload` has description `Represents the payload returned after creating a part tag.`

\+ Type `DesPartDeleteTagPayload` was added

Δ Object type `DesPartDeleteTagPayload` has description `Represents the payload returned after deleting a part tag.`

\+ Type `DesPartDetachTagPayload` was added

Δ Object type `DesPartDetachTagPayload` has description `Represents the payload returned after unassigning a part tag from parts.`

\+ Type `DesPartDocumentMapping` was added

Δ Object type `DesPartDocumentMapping` has description `Maps file columns to a document.`

\+ Type `DesPartLifecycle` was added

Δ Object type `DesPartLifecycle` has description `Represents the lifecycle of a managed part.`

\+ Type `DesPartPriceMapping` was added

Δ Object type `DesPartPriceMapping` has description `Maps the price of a fixed break quantity to a file column.`

\+ Type `DesPartSellerMapping` was added

Δ Object type `DesPartSellerMapping` has description `Maps file columns to a seller and its prices/stocks.`

\+ Type `DesPartSpecMapping` was added

Δ Object type `DesPartSpecMapping` has description `Maps a file column to a spec value.`

\+ Type `DesPartStartUploadPayload` was added

Δ Object type `DesPartStartUploadPayload` has description `Payload produced when a parts upload is started.`

\+ Type `DesPartStockMapping` was added

Δ Object type `DesPartStockMapping` has description `Maps a file column to a stock quantity and optional location.`

\+ Type `DesPartTag` was added

Δ Object type `DesPartTag` has description `Represents a tag that can be assigned to parts.`

\+ Type `DesPartUploadComponentOperationResult` was added

Δ Object type `DesPartUploadComponentOperationResult` has description `Represents the result of the upload components operation.`

\+ Type `DesPartUploadComponentsColumnMapping` was added

Δ Object type `DesPartUploadComponentsColumnMapping` has description `Column mapping for components upload. Only MPN, Manufacturer and IPN columns are supported.`

\+ Type `DesPartUploadComponentsPayload` was added

Δ Object type `DesPartUploadComponentsPayload` has description `Payload produced when uploading components.`

\+ Type `DesPartUploadLibraryPartOperationResult` was added

Δ Object type `DesPartUploadLibraryPartOperationResult` has description `Represents the result of a library part upload operation.`

\+ Type `DesPartUploadLibraryPartsColumnMapping` was added

Δ Object type `DesPartUploadLibraryPartsColumnMapping` has description `Maps file columns to part fields.`

\+ Type `DesPartUploadLibraryPartsPayload` was added

Δ Object type `DesPartUploadLibraryPartsPayload` has description `Payload produced when uploading custom library parts.`

\+ Type `DesPartUploadOperationPayload` was added

Δ Object type `DesPartUploadOperationPayload` has description `Represents a parts upload operation of the workspace.`

\+ Type `DesPartUploadPartFileColumnsPayload` was added

Δ Object type `DesPartUploadPartFileColumnsPayload` has description `Payload produced when reading columns from an uploaded file.`

\+ Type `DesPartPartChoiceUpdateMode` was added

\+ Enum value `RECREATE` was added to enum `DesPartPartChoiceUpdateMode`

\+ Enum value `UPDATE` was added to enum `DesPartPartChoiceUpdateMode`

Δ Object type `DesPartPartChoiceUpdateMode` has description `Specifies how existing part choices are handled during upload.`

\+ Type `DesPartAcknowledgeUploadOperationInput` was added

Δ Object type `DesPartAcknowledgeUploadOperationInput` has description `Input for marking the result of a parts upload operation as read.`

\+ Type `DesPartAttachTagInput` was added

Δ Object type `DesPartAttachTagInput` has description `Represents the input for assigning a part tag to parts.`

\+ Type `DesPartChangeLifecycleStateInput` was added

Δ Object type `DesPartChangeLifecycleStateInput` has description `Represents the input for changing the lifecycle state of a part.`

\+ Type `DesPartCreateTagInput` was added

Δ Object type `DesPartCreateTagInput` has description `Represents the input for creating a part tag.`

\+ Type `DesPartDeleteTagInput` was added

Δ Object type `DesPartDeleteTagInput` has description `Represents the input for deleting a part tag.`

\+ Type `DesPartDetachTagInput` was added

Δ Object type `DesPartDetachTagInput` has description `Represents the input for unassigning a part tag from parts.`

\+ Type `DesPartDocumentMappingInput` was added

Δ Object type `DesPartDocumentMappingInput` has description `Maps file columns to a document.`

\+ Type `DesPartPriceMappingInput` was added

Δ Object type `DesPartPriceMappingInput` has description `Maps the price of a fixed break quantity to a file column.`

\+ Type `DesPartSellerMappingInput` was added

Δ Object type `DesPartSellerMappingInput` has description `Maps file columns to a seller and its prices/stocks.`

\+ Type `DesPartSpecMappingInput` was added

Δ Object type `DesPartSpecMappingInput` has description `Maps a file column to a spec value.`

\+ Type `DesPartStockMappingInput` was added

Δ Object type `DesPartStockMappingInput` has description `Maps a file column to a stock quantity and optional location.`

\+ Type `DesPartUploadComponentsColumnMappingInput` was added

Δ Object type `DesPartUploadComponentsColumnMappingInput` has description `Column mapping for components upload. Only MPN, Manufacturer and IPN columns are supported.`

\+ Type `DesPartUploadComponentsInput` was added

Δ Object type `DesPartUploadComponentsInput` has description `Input for uploading components with part choices.`

\+ Type `DesPartUploadLibraryPartsColumnMappingInput` was added

Δ Object type `DesPartUploadLibraryPartsColumnMappingInput` has description `Maps file columns to part fields.`

\+ Type `DesPartUploadLibraryPartsInput` was added

Δ Object type `DesPartUploadLibraryPartsInput` has description `Input for uploading custom library parts (Custom Part Provider mode). Column mapping is required.`

Δ Object type `DesPartBomAlternativePartsEntry` has description `Represents the alternative parts of a single element.`

###### Fields

\+ Field `errors` was added to object type `DesPartAcknowledgeUploadOperationPayload`

\+ Field `operation` was added to object type `DesPartAcknowledgeUploadOperationPayload`

\+ Field `errors` was added to object type `DesPartAttachTagPayload`

\+ Field `isSuccessful` was added to object type `DesPartAttachTagPayload`

\+ Field `errors` was added to object type `DesPartChangeLifecycleStatePayload`

\+ Field `isSuccessful` was added to object type `DesPartChangeLifecycleStatePayload`

\+ Field `errors` was added to object type `DesPartCreateTagPayload`

\+ Field `tag` was added to object type `DesPartCreateTagPayload`

\+ Field `deletedTagId` was added to object type `DesPartDeleteTagPayload`

\+ Field `errors` was added to object type `DesPartDeleteTagPayload`

\+ Field `errors` was added to object type `DesPartDetachTagPayload`

\+ Field `isSuccessful` was added to object type `DesPartDetachTagPayload`

\+ Field `nameColumn` was added to object type `DesPartDocumentMapping`

\+ Field `urlColumn` was added to object type `DesPartDocumentMapping`

\+ Field `currentLifecycleStateId` was added to object type `DesPartLifecycle`

\+ Field `definition` was added to object type `DesPartLifecycle`

\+ Field `priceColumn` was added to object type `DesPartPriceMapping`

\+ Field `quantity` was added to object type `DesPartPriceMapping`

\+ Field `currencyColumn` was added to object type `DesPartSellerMapping`

\+ Field `nameColumn` was added to object type `DesPartSellerMapping`

\+ Field `prices` was added to object type `DesPartSellerMapping`

\+ Field `skuColumn` was added to object type `DesPartSellerMapping`

\+ Field `stocks` was added to object type `DesPartSellerMapping`

\+ Field `urlColumn` was added to object type `DesPartSellerMapping`

\+ Field `nameColumn` was added to object type `DesPartSpecMapping`

\+ Field `valueColumn` was added to object type `DesPartSpecMapping`

\+ Field `errors` was added to object type `DesPartStartUploadPayload`

\+ Field `operationId` was added to object type `DesPartStartUploadPayload`

\+ Field `locationColumn` was added to object type `DesPartStockMapping`

\+ Field `qtyColumn` was added to object type `DesPartStockMapping`

\+ Field `isDeletable` was added to object type `DesPartTag`

\+ Field `name` was added to object type `DesPartTag`

\+ Field `tagId` was added to object type `DesPartTag`

\+ Field `errorMessage` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `partId` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `status` was added to object type `DesPartUploadComponentOperationResult`

\+ Field `ipnColumn` was added to object type `DesPartUploadComponentsColumnMapping`

\+ Field `manufacturerNameColumn` was added to object type `DesPartUploadComponentsColumnMapping`

\+ Field `mpnColumn` was added to object type `DesPartUploadComponentsColumnMapping`

\+ Field `errors` was added to object type `DesPartUploadComponentsPayload`

\+ Field `results` was added to object type `DesPartUploadComponentsPayload`

\+ Field `errorMessage` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `partId` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `status` was added to object type `DesPartUploadLibraryPartOperationResult`

\+ Field `categoryNameColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `datasheetUrlColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `descriptionColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `documents` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `imageUrlColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `manufacturerNameColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `mpnColumn` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `sellers` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `specs` was added to object type `DesPartUploadLibraryPartsColumnMapping`

\+ Field `errors` was added to object type `DesPartUploadLibraryPartsPayload`

\+ Field `results` was added to object type `DesPartUploadLibraryPartsPayload`

\+ Field `componentsColumnMapping` was added to object type `DesPartUploadOperationPayload`

\+ Field `createdAt` was added to object type `DesPartUploadOperationPayload`

\+ Field `fileId` was added to object type `DesPartUploadOperationPayload`

\+ Field `fileName` was added to object type `DesPartUploadOperationPayload`

\+ Field `finishedAt` was added to object type `DesPartUploadOperationPayload`

\+ Field `isAck` was added to object type `DesPartUploadOperationPayload`

\+ Field `kind` was added to object type `DesPartUploadOperationPayload`

\+ Field `libraryPartsColumnMapping` was added to object type `DesPartUploadOperationPayload`

\+ Field `operationId` was added to object type `DesPartUploadOperationPayload`

\+ Field `partChoiceUpdateMode` was added to object type `DesPartUploadOperationPayload`

\+ Field `startedAt` was added to object type `DesPartUploadOperationPayload`

\+ Field `status` was added to object type `DesPartUploadOperationPayload`

\+ Field `columns` was added to object type `DesPartUploadPartFileColumnsPayload`

\+ Field `errors` was added to object type `DesPartUploadPartFileColumnsPayload`

\+ Field `lifecycle` was added to object type `DesPart`

\+ Field `tags` was added to object type `DesPart`

\+ Field `tags` was added to object type `DesPartSearchFixedFacets`

###### Input / Payload

\+ Input field `operationId` of type `UUID!` was added to input object type `DesPartAcknowledgeUploadOperationInput`

\+ Input field `partIds` of type `[ID!]!` was added to input object type `DesPartAttachTagInput`

\+ Input field `tagId` of type `String!` was added to input object type `DesPartAttachTagInput`

\+ Input field `partId` of type `ID!` was added to input object type `DesPartChangeLifecycleStateInput`

\+ Input field `transitionLifecycleStateId` of type `String!` was added to input object type `DesPartChangeLifecycleStateInput`

\+ Input field `name` of type `String!` was added to input object type `DesPartCreateTagInput`

\+ Input field `tagId` of type `String!` was added to input object type `DesPartDeleteTagInput`

\+ Input field `partIds` of type `[ID!]!` was added to input object type `DesPartDetachTagInput`

\+ Input field `tagId` of type `String!` was added to input object type `DesPartDetachTagInput`

\+ Input field `nameColumn` of type `String` was added to input object type `DesPartDocumentMappingInput`

\+ Input field `urlColumn` of type `String!` was added to input object type `DesPartDocumentMappingInput`

\+ Input field `priceColumn` of type `String!` was added to input object type `DesPartPriceMappingInput`

\+ Input field `quantity` of type `Int!` was added to input object type `DesPartPriceMappingInput`

\+ Input field `currencyColumn` of type `String` was added to input object type `DesPartSellerMappingInput`

\+ Input field `nameColumn` of type `String!` was added to input object type `DesPartSellerMappingInput`

\+ Input field `prices` of type `[DesPartPriceMappingInput!]` was added to input object type `DesPartSellerMappingInput`

\+ Input field `skuColumn` of type `String` was added to input object type `DesPartSellerMappingInput`

\+ Input field `stocks` of type `[DesPartStockMappingInput!]` was added to input object type `DesPartSellerMappingInput`

\+ Input field `urlColumn` of type `String` was added to input object type `DesPartSellerMappingInput`

\+ Input field `nameColumn` of type `String!` was added to input object type `DesPartSpecMappingInput`

\+ Input field `valueColumn` of type `String!` was added to input object type `DesPartSpecMappingInput`

\+ Input field `locationColumn` of type `String` was added to input object type `DesPartStockMappingInput`

\+ Input field `qtyColumn` of type `String!` was added to input object type `DesPartStockMappingInput`

\+ Input field `ipnColumn` of type `String!` was added to input object type `DesPartUploadComponentsColumnMappingInput`

\+ Input field `manufacturerNameColumn` of type `String!` was added to input object type `DesPartUploadComponentsColumnMappingInput`

\+ Input field `mpnColumn` of type `String!` was added to input object type `DesPartUploadComponentsColumnMappingInput`

\+ Input field `columnMapping` of type `DesPartUploadComponentsColumnMappingInput!` was added to input object type `DesPartUploadComponentsInput`

\+ Input field `fileId` of type `String!` was added to input object type `DesPartUploadComponentsInput`

\+ Input field `fileName` of type `String!` was added to input object type `DesPartUploadComponentsInput`

\+ Input field `partChoiceUpdateMode` of type `DesPartPartChoiceUpdateMode!` was added to input object type `DesPartUploadComponentsInput`

\+ Input field `categoryNameColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `datasheetUrlColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `descriptionColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `documents` of type `[DesPartDocumentMappingInput!]` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `imageUrlColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `manufacturerNameColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `mpnColumn` of type `String` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `sellers` of type `[DesPartSellerMappingInput!]` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `specs` of type `[DesPartSpecMappingInput!]` was added to input object type `DesPartUploadLibraryPartsColumnMappingInput`

\+ Input field `columnMapping` of type `DesPartUploadLibraryPartsColumnMappingInput!` was added to input object type `DesPartUploadLibraryPartsInput`

\+ Input field `fileId` of type `String!` was added to input object type `DesPartUploadLibraryPartsInput`

\+ Input field `fileName` of type `String!` was added to input object type `DesPartUploadLibraryPartsInput`

\+ Input field `lifecycleState` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `tags` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

Δ Directive `deprecated` was added to input field `supplierName` in input object `DesPartSearchFilterInput`

Δ Directive `deprecated` was added to input field `supplierPartNumber` in input object `DesPartSearchFilterInput`

\+ Input field `lifecycleState` of type `SortEnumType` was added to input object type `DesPartSortInput`

##### Supply

###### Input / Payload

Δ Directive `deprecated` was added to input field `newCompatibleEvalKits` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `newEsdSource` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `newParameters` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `newPreviewImages` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

### 21-Aug-2026

#### ⚠️ Dangerous Changes (3)

##### Design

###### Types

\+ Enum value `MANAGED_PART` was added to enum `DesContentTypeKind`

\+ Enum value `REQUIREMENTS_PROJECT` was added to enum `DesContentTypeKind`

\+ Enum value `MANAGED_PARTS_CATALOG` was added to enum `DesFolderType`

### 19-Aug-2026

#### ✅ Non-Breaking Changes (9)

##### Common

###### ✏️ Mutation

\+ Field `kgDeleteNode` was added to object type `Mutation`

\+ Argument `input: KgDeleteNodeInput!` added to `Mutation.kgDeleteNode`

###### Types

\+ Type `KgDeleteNodePayload` was added

Δ Object type `KgDeleteNodePayload` has description `**Experimental**`

\+ Type `KgDeleteNodeInput` was added

Δ Object type `KgDeleteNodeInput` has description `**Experimental**`

###### Fields

\+ Field `isDeleted` was added to object type `KgDeleteNodePayload`

###### Input / Payload

\+ Input field `hardDelete` of type `Boolean!` with default value `false` was added to input object type `KgDeleteNodeInput`

\+ Input field `id` of type `ID!` was added to input object type `KgDeleteNodeInput`

### 18-Aug-2026

#### ✅ Non-Breaking Changes (17)

##### Design

###### Types

\+ Type `DesignDataCombinedErcCheckResult` was added

Δ Object type `DesignDataCombinedErcCheckResult` has description `**Experimental** Represents the result of a single ERC check.`

\+ Type `DesignDataCombinedErcExecution` was added

Δ Object type `DesignDataCombinedErcExecution` has description `**Experimental** Represents the combined custom and default ERC results for a design revision.`

###### Arguments

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byDesignIdCombinedErc`

\+ Argument `revisionId: String` added to `RuleCheckExecutionQueries.byDesignIdCombinedErc`

###### Fields

\+ Field `customRuleCheck` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `name` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `origin` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `outcome` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `ruleCheckType` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `violations` was added to object type `DesignDataCombinedErcCheckResult`

\+ Field `designId` was added to object type `DesignDataCombinedErcExecution`

\+ Field `results` was added to object type `DesignDataCombinedErcExecution`

\+ Field `revisionId` was added to object type `DesignDataCombinedErcExecution`

\+ Field `status` was added to object type `DesignDataCombinedErcExecution`

\+ Field `byDesignIdCombinedErc` was added to object type `RuleCheckExecutionQueries`

### 17-Aug-2026

#### ✅ Non-Breaking Changes (7)

##### Supply

###### Fields

\+ Field `sourceUrl` was added to object type `SupSolutionTemplate`

Δ Field `SupSolutionTemplate.solutionSourceUrl` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplate.solutionSourceUrl`

###### Input / Payload

\+ Input field `sourceUrl` of type `String` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `solutionSourceUrl` in input object `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `sourceUrl` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `solutionSourceUrl` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

### 13-Aug-2026

#### 🔴 Breaking Changes (12)

##### Renesas (preview)

###### 🔍 Query

− Field `supSoftwareProjectAuditSearch` was removed from object type `Query`

###### Types

− Type `SupSoftwareProjectAudit` was removed

− Type `SupSoftwareProjectAuditConnection` was removed

− Type `SupSoftwareProjectAuditEdge` was removed

− Type `SupSoftwareProjectAuditAction` was removed

− Type `SupSoftwareProjectAuditSearchFilter` was removed

##### Supply

###### 🔍 Query

− Field `supEvalKitAuditSearch` was removed from object type `Query`

###### Types

− Type `SupEvalKitAudit` was removed

− Type `SupEvalKitAuditConnection` was removed

− Type `SupEvalKitAuditEdge` was removed

− Type `SupEvalKitAuditAction` was removed

− Type `SupEvalKitAuditSearchFilter` was removed

### 10-Aug-2026

#### 🔴 Breaking Changes (6)

##### Supply

###### 🔍 Query

− Field `supSolutionTemplateAuditSearch` was removed from object type `Query`

###### Types

− Type `SupSolutionTemplateAudit` was removed

− Type `SupSolutionTemplateAuditConnection` was removed

− Type `SupSolutionTemplateAuditEdge` was removed

− Type `SupSolutionTemplateAuditAction` was removed

− Type `SupSolutionTemplateAuditSearchFilter` was removed

#### ⚠️ Dangerous Changes (1)

##### Platform

###### Types

\+ Member `PlatformTokenDeletePartiallyFailedError` was added to Union type `PlatformTokenDeleteError`

#### ✅ Non-Breaking Changes (102)

##### Platform

###### ✏️ Mutation

\+ Field `platformWorkspaceRefreshTokenDeleteSecret` was added to object type `Mutation`

\+ Argument `input: PlatformWorkspaceRefreshTokenDeleteSecretInput!` added to `Mutation.platformWorkspaceRefreshTokenDeleteSecret`

###### Types

\+ Type `PlatformTokenDeletePartiallyFailedError` was added

Δ `PlatformTokenDeletePartiallyFailedError` object implements `Error` interface

Δ Object type `PlatformTokenDeletePartiallyFailedError` has description ``Error returned by the Token API when a `PlatformToken` could not be fully deleted, leaving it in an inconsistent state.``

\+ Type `PlatformTokenDeleteRefreshTokenSecretError` was added

Δ `PlatformTokenDeleteRefreshTokenSecretError` object implements `Error` interface

Δ Object type `PlatformTokenDeleteRefreshTokenSecretError` has description ``Error returned by the Token API when a client secret for a `PlatformWorkspaceRefreshToken` could not be deleted.``

\+ Type `PlatformWorkspaceRefreshTokenDeleteSecretPayload` was added

\+ Type `PlatformWorkspaceRefreshTokenDeleteSecretError` was added

\+ Member `PlatformTokenNotFoundError` was added to Union type `PlatformWorkspaceRefreshTokenDeleteSecretError`

\+ Member `PlatformTokenDeleteRefreshTokenSecretError` was added to Union type `PlatformWorkspaceRefreshTokenDeleteSecretError`

\+ Type `PlatformWorkspaceRefreshTokenDeleteSecretInput` was added

###### Fields

\+ Field `message` was added to object type `PlatformTokenDeletePartiallyFailedError`

\+ Field `message` was added to object type `PlatformTokenDeleteRefreshTokenSecretError`

\+ Field `errors` was added to object type `PlatformWorkspaceRefreshTokenDeleteSecretPayload`

\+ Field `refreshToken` was added to object type `PlatformWorkspaceRefreshTokenDeleteSecretPayload`

###### Input / Payload

\+ Input field `clientSecret` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenDeleteSecretInput`

\+ Input field `tokenId` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenDeleteSecretInput`

##### Supply

###### ✏️ Mutation

\+ Field `supSolutionTemplatePatchCompatibleEvalKits` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchCompatibleEvalKitsInput!` added to `Mutation.supSolutionTemplatePatchCompatibleEvalKits`

\+ Field `supSolutionTemplatePatchEsdSource` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateEsdSourcePatchInput!` added to `Mutation.supSolutionTemplatePatchEsdSource`

\+ Field `supSolutionTemplatePatchParameters` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchParametersInput!` added to `Mutation.supSolutionTemplatePatchParameters`

\+ Field `supSolutionTemplateSetCompatibleEvalKits` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetCompatibleEvalKitsInput!` added to `Mutation.supSolutionTemplateSetCompatibleEvalKits`

\+ Field `supSolutionTemplateSetParameters` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetParametersInput!` added to `Mutation.supSolutionTemplateSetParameters`

###### Types

\+ Type `SupSolutionTemplatePatchCompatibleEvalKitsPayload` was added

Δ Object type `SupSolutionTemplatePatchCompatibleEvalKitsPayload` has description `Payload for patching compatible eval kits on a solution template.`

\+ Type `SupSolutionTemplatePatchEsdSourcePayload` was added

Δ Object type `SupSolutionTemplatePatchEsdSourcePayload` has description `Payload for patching the ESD source of a solution template.`

\+ Type `SupSolutionTemplatePatchParametersPayload` was added

Δ Object type `SupSolutionTemplatePatchParametersPayload` has description `Payload for patching parameters on a solution template.`

\+ Type `SupSolutionTemplateSetCompatibleEvalKitsPayload` was added

Δ Object type `SupSolutionTemplateSetCompatibleEvalKitsPayload` has description `Payload for replacing all compatible eval kits on a solution template.`

\+ Type `SupSolutionTemplateSetParametersPayload` was added

Δ Object type `SupSolutionTemplateSetParametersPayload` has description `Payload for replacing all parameters on a solution template.`

\+ Type `SupSolutionTemplatePatchCompatibleEvalKitsError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchCompatibleEvalKitsError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchCompatibleEvalKitsError`

\+ Type `SupSolutionTemplatePatchEsdSourceError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchEsdSourceError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchEsdSourceError`

\+ Type `SupSolutionTemplatePatchParametersError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchParametersError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchParametersError`

\+ Type `SupSolutionTemplateSetCompatibleEvalKitsError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetCompatibleEvalKitsError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetCompatibleEvalKitsError`

\+ Type `SupSolutionTemplateSetParametersError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetParametersError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetParametersError`

\+ Type `SupSolutionTemplateCompatibleEvalKitUpdateInput` was added

Δ Object type `SupSolutionTemplateCompatibleEvalKitUpdateInput` has description `Input for updating an existing compatible eval kit on a solution template.`

\+ Type `SupSolutionTemplateEsdSourcePatchInput` was added

Δ Object type `SupSolutionTemplateEsdSourcePatchInput` has description `Input for patching the ESD source of a solution template.`

\+ Type `SupSolutionTemplatePatchCompatibleEvalKitsInput` was added

Δ Object type `SupSolutionTemplatePatchCompatibleEvalKitsInput` has description `Input for adding or removing individual compatible eval kits on a solution template.`

\+ Type `SupSolutionTemplatePatchParametersInput` was added

Δ Object type `SupSolutionTemplatePatchParametersInput` has description `Input for adding or removing individual parameters on a solution template.`

\+ Type `SupSolutionTemplateSetCompatibleEvalKitsInput` was added

Δ Object type `SupSolutionTemplateSetCompatibleEvalKitsInput` has description `Input for replacing all compatible eval kits on a solution template.`

\+ Type `SupSolutionTemplateSetParametersInput` was added

Δ Object type `SupSolutionTemplateSetParametersInput` has description `Input for replacing all parameters on a solution template.`

###### Fields

\+ Field `errors` was added to object type `SupSolutionTemplatePatchCompatibleEvalKitsPayload`

\+ Field `success` was added to object type `SupSolutionTemplatePatchCompatibleEvalKitsPayload`

\+ Field `errors` was added to object type `SupSolutionTemplatePatchEsdSourcePayload`

\+ Field `success` was added to object type `SupSolutionTemplatePatchEsdSourcePayload`

\+ Field `errors` was added to object type `SupSolutionTemplatePatchParametersPayload`

\+ Field `success` was added to object type `SupSolutionTemplatePatchParametersPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetCompatibleEvalKitsPayload`

\+ Field `success` was added to object type `SupSolutionTemplateSetCompatibleEvalKitsPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetParametersPayload`

\+ Field `success` was added to object type `SupSolutionTemplateSetParametersPayload`

\+ Field `compatibleEvalKitId` was added to object type `SupSolutionTemplateCompatibleEvalKit`

Δ Field `SupSolutionTemplateCompatibleEvalKit.compatibleEvalKitId` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplateCompatibleEvalKit.compatibleEvalKitId`

###### Input / Payload

\+ Input field `addParameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateCompatibleEvalKitUpdateInput`

\+ Input field `compatibleEvalKitId` of type `String!` was added to input object type `SupSolutionTemplateCompatibleEvalKitUpdateInput`

\+ Input field `evalKitId` of type `ID` was added to input object type `SupSolutionTemplateCompatibleEvalKitUpdateInput`

\+ Input field `removeParameterTitles` of type `[String!]` was added to input object type `SupSolutionTemplateCompatibleEvalKitUpdateInput`

\+ Input field `updateParameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateCompatibleEvalKitUpdateInput`

\+ Input field `clearCompileModel` of type `Boolean` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `clearPreviewImage` of type `Boolean` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `compileModel` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `documentFile` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `previewImageFile` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateEsdSourcePatchInput`

\+ Input field `addCompatibleEvalKits` of type `[SupSolutionTemplateCompatibleEvalKitInput!]` was added to input object type `SupSolutionTemplatePatchCompatibleEvalKitsInput`

\+ Input field `removeCompatibleEvalKitIds` of type `[String!]` was added to input object type `SupSolutionTemplatePatchCompatibleEvalKitsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchCompatibleEvalKitsInput`

\+ Input field `updateCompatibleEvalKits` of type `[SupSolutionTemplateCompatibleEvalKitUpdateInput!]` was added to input object type `SupSolutionTemplatePatchCompatibleEvalKitsInput`

\+ Input field `addParameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplatePatchParametersInput`

\+ Input field `removeParameterTitles` of type `[String!]` was added to input object type `SupSolutionTemplatePatchParametersInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchParametersInput`

\+ Input field `updateParameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplatePatchParametersInput`

\+ Input field `compatibleEvalKits` of type `[SupSolutionTemplateCompatibleEvalKitInput!]` was added to input object type `SupSolutionTemplateSetCompatibleEvalKitsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetCompatibleEvalKitsInput`

\+ Input field `parameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateSetParametersInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetParametersInput`

### 07-Aug-2026

#### ⚠️ Dangerous Changes (2)

##### Platform

###### Types

\+ Member `PlatformTokenInvalidTokenLifetimeError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenInvalidTokenLifetimeError` was added to Union type `PlatformWorkspaceTokenCreateError`

#### ✅ Non-Breaking Changes (17)

##### Platform

###### Types

\+ Type `GloCreateAppWarning` was added

\+ Type `PlatformTokenInvalidTokenLifetimeError` was added

Δ `PlatformTokenInvalidTokenLifetimeError` object implements `Error` interface

Δ Object type `PlatformTokenInvalidTokenLifetimeError` has description ``Error returned by the Token API when an input token lifetime for a new `PlatformToken` is invalid.``

\+ Type `GloOAuthClientRefreshTokenExpirationType` was added

\+ Enum value `ABSOLUTE` was added to enum `GloOAuthClientRefreshTokenExpirationType`

\+ Enum value `SLIDING` was added to enum `GloOAuthClientRefreshTokenExpirationType`

###### Fields

\+ Field `message` was added to object type `GloCreateAppWarning`

\+ Field `message` was added to object type `PlatformTokenInvalidTokenLifetimeError`

\+ Field `warnings` was added to object type `GloCreateAppPayload`

###### Input / Payload

\+ Input field `refreshTokenAbsoluteLifetime` of type `Int` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `refreshTokenExpirationType` of type `GloOAuthClientRefreshTokenExpirationType` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `refreshTokenSlidingLifetime` of type `Int` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `refreshTokenAbsoluteLifetime` of type `Int` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

\+ Input field `refreshTokenSlidingLifetime` of type `Int` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

Δ Input field `PlatformWorkspaceRefreshTokenCreateInput.accessTokenLifetime` changed type from `Int!` to `Int`

Δ Input field `PlatformWorkspaceTokenCreateInput.accessTokenLifetime` changed type from `Int!` to `Int`

### 05-Aug-2026

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### Types

\+ Enum value `RECOMMEND_SCORE` was added to enum `SupSoftwareProjectOrderField`

### 04-Aug-2026

#### ✅ Non-Breaking Changes (3)

##### Supply

###### Input / Payload

Δ Directive `deprecated` was added to input field `softwareProjectIds` in input object `SupSolutionTemplateCreateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `addSoftwareProjectIds` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Directive `deprecated` was added to input field `removeSoftwareProjectIds` in input object `SupSolutionTemplateUpdateSolutionTemplateInput`

### 03-Aug-2026

#### ✅ Non-Breaking Changes (33)

##### Common

###### 🔍 Query

\+ Field `kgNodes` was added to object type `Query`

\+ Argument `type: KgNodeType!` added to `Query.kgNodes`

###### ✏️ Mutation

\+ Field `kgAddNode` was added to object type `Mutation`

\+ Argument `input: KgAddNodeInput!` added to `Mutation.kgAddNode`

###### Types

\+ Type `KgAccessLevel` was added

Δ Object type `KgAccessLevel` has description `**Experimental**`

\+ Type `KgAddNodePayload` was added

Δ Object type `KgAddNodePayload` has description `**Experimental**`

\+ Type `KgNodeType` was added

\+ Enum value `REQUIREMENTS_PROJECT` was added to enum `KgNodeType`

Δ Object type `KgNodeType` has description `**Experimental**`

\+ Type `KgAddNodeInput` was added

Δ Object type `KgAddNodeInput` has description `**Experimental**`

\+ Type `KgNodeParameterInput` was added

Δ Object type `KgNodeParameterInput` has description `**Experimental**`

###### Fields

\+ Field `canEdit` was added to object type `KgAccessLevel`

\+ Field `isAdded` was added to object type `KgAddNodePayload`

\+ Field `accessLevel` was added to object type `KgAnchorNode`

\+ Field `entityGuid` was added to object type `KgAnchorNode`

Δ Field `accessLevel` was added to interface `KgNode`

Δ Field `entityGuid` was added to interface `KgNode`

###### Input / Payload

\+ Input field `description` of type `String` was added to input object type `KgAddNodeInput`

\+ Input field `id` of type `ID!` was added to input object type `KgAddNodeInput`

\+ Input field `name` of type `String!` was added to input object type `KgAddNodeInput`

\+ Input field `parameters` of type `[KgNodeParameterInput!]` was added to input object type `KgAddNodeInput`

\+ Input field `parentFolderGuid` of type `String!` was added to input object type `KgAddNodeInput`

\+ Input field `name` of type `String!` was added to input object type `KgNodeParameterInput`

\+ Input field `value` of type `String!` was added to input object type `KgNodeParameterInput`

##### Platform

###### Types

\+ Type `PlatformWorkspaceTokenQuota` was added

Δ Object type `PlatformWorkspaceTokenQuota` has description ``Represents the quota for the number of active `PlatformToken`s allowed in a Workspace.``

###### Fields

\+ Field `activeTokenCount` was added to object type `PlatformWorkspaceTokenQuota`

\+ Field `maxActiveTokenCount` was added to object type `PlatformWorkspaceTokenQuota`

\+ Field `workspaceTokenQuota` was added to object type `TokenQueries`

### 31-Jul-2026

#### ✅ Non-Breaking Changes (45)

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectAuditSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSoftwareProjectAuditSearch`

\+ Argument `before: String` added to `Query.supSoftwareProjectAuditSearch`

\+ Argument `first: Int` added to `Query.supSoftwareProjectAuditSearch`

\+ Argument `last: Int` added to `Query.supSoftwareProjectAuditSearch`

\+ Argument `where: SupSoftwareProjectAuditSearchFilter` added to `Query.supSoftwareProjectAuditSearch`

\+ Field `supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds` was added to object type `Query`

\+ Argument `solutionTemplateIds: [ID!]!` added to `Query.supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds`

###### Types

\+ Type `SupSoftwareProjectAudit` was added

\+ Type `SupSoftwareProjectAuditConnection` was added

Δ Object type `SupSoftwareProjectAuditConnection` has description `A connection to a list of items.`

\+ Type `SupSoftwareProjectAuditEdge` was added

Δ Object type `SupSoftwareProjectAuditEdge` has description `An edge in a connection.`

\+ Type `SupSoftwareProjectSolutionTemplateSoftwareProjectsResult` was added

\+ Type `SupSoftwareProjectAuditAction` was added

\+ Enum value `ADD` was added to enum `SupSoftwareProjectAuditAction`

\+ Enum value `CREATE` was added to enum `SupSoftwareProjectAuditAction`

\+ Enum value `DELETE` was added to enum `SupSoftwareProjectAuditAction`

\+ Enum value `MODIFY` was added to enum `SupSoftwareProjectAuditAction`

\+ Enum value `REMOVE` was added to enum `SupSoftwareProjectAuditAction`

\+ Enum value `SOFT_DELETE` was added to enum `SupSoftwareProjectAuditAction`

\+ Type `SupSoftwareProjectAuditSearchFilter` was added

Δ Object type `SupSoftwareProjectAuditSearchFilter` has description `Filter input for searching solution template audit records.`

###### Fields

\+ Field `action` was added to object type `SupSoftwareProjectAudit`

\+ Field `authorId` was added to object type `SupSoftwareProjectAudit`

\+ Field `authorName` was added to object type `SupSoftwareProjectAudit`

\+ Field `eventDate` was added to object type `SupSoftwareProjectAudit`

\+ Field `groupId` was added to object type `SupSoftwareProjectAudit`

\+ Field `message` was added to object type `SupSoftwareProjectAudit`

\+ Field `objectId` was added to object type `SupSoftwareProjectAudit`

\+ Field `objectTypeId` was added to object type `SupSoftwareProjectAudit`

\+ Field `objectTypeName` was added to object type `SupSoftwareProjectAudit`

\+ Field `primaryObjectId` was added to object type `SupSoftwareProjectAudit`

\+ Field `edges` was added to object type `SupSoftwareProjectAuditConnection`

\+ Field `nodes` was added to object type `SupSoftwareProjectAuditConnection`

\+ Field `pageInfo` was added to object type `SupSoftwareProjectAuditConnection`

\+ Field `totalCount` was added to object type `SupSoftwareProjectAuditConnection`

\+ Field `cursor` was added to object type `SupSoftwareProjectAuditEdge`

\+ Field `node` was added to object type `SupSoftwareProjectAuditEdge`

\+ Field `softwareProjects` was added to object type `SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`

\+ Field `solutionTemplateId` was added to object type `SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`

###### Input / Payload

\+ Input field `endDate` of type `DateTime` was added to input object type `SupSoftwareProjectAuditSearchFilter`

\+ Input field `primaryObjectId` of type `String` was added to input object type `SupSoftwareProjectAuditSearchFilter`

\+ Input field `startDate` of type `DateTime` was added to input object type `SupSoftwareProjectAuditSearchFilter`

\+ Input field `text` of type `String` was added to input object type `SupSoftwareProjectAuditSearchFilter`

### 30-Jul-2026

#### ✅ Non-Breaking Changes (33)

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectSolutionTemplateSoftwareProjectIdsBySolutionTemplateId` was added to object type `Query`

\+ Argument `solutionTemplateId: ID!` added to `Query.supSoftwareProjectSolutionTemplateSoftwareProjectIdsBySolutionTemplateId`

\+ Field `supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId` was added to object type `Query`

\+ Argument `solutionTemplateId: ID!` added to `Query.supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId`

###### ✏️ Mutation

\+ Field `supSoftwareProjectPatchSoftwareProjectSolutionTemplates` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput!` added to `Mutation.supSoftwareProjectPatchSoftwareProjectSolutionTemplates`

\+ Field `supSoftwareProjectSetSoftwareProjectSolutionTemplates` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput!` added to `Mutation.supSoftwareProjectSetSoftwareProjectSolutionTemplates`

###### Types

\+ Type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload` was added

Δ Object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload` has description `Payload returned after patching software projects on a solution template.`

\+ Type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload` was added

Δ Object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload` has description `Payload returned after setting software projects on a solution template.`

\+ Type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError`

\+ Type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError`

\+ Type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput` was added

Δ Object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput` has description `Input for patching software project associations on a solution template.`

\+ Type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput` was added

Δ Object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput` has description `Input for replacing all software project associations on a solution template.`

###### Fields

\+ Field `errors` was added to object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload`

\+ Field `success` was added to object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload`

\+ Field `errors` was added to object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload`

\+ Field `success` was added to object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload`

###### Input / Payload

\+ Input field `addSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput`

\+ Input field `removeSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput`

\+ Input field `softwareProjectIds` of type `[ID!]` was added to input object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput`

##### Supply

###### Fields

Δ Field `SupSolutionTemplate.softwareProjectIds` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplate.softwareProjectIds`

### 29-Jul-2026

#### 🔴 Breaking Changes (9)

##### Platform

###### Fields

Δ Field `PlatformWorkspaceRefreshToken.createdBy` changed type from `GloUser!` to `DesUser!`

Δ Field `PlatformWorkspaceRefreshToken.deletedBy` changed type from `GloUser` to `DesUser`

Δ Field `PlatformWorkspaceRefreshToken.updatedBy` changed type from `GloUser!` to `DesUser!`

Δ Field `PlatformWorkspaceToken.createdBy` changed type from `GloUser!` to `DesUser!`

Δ Field `PlatformWorkspaceToken.deletedBy` changed type from `GloUser` to `DesUser`

Δ Field `PlatformWorkspaceToken.updatedBy` changed type from `GloUser!` to `DesUser!`

− Field `createdBy` was removed from interface `PlatformToken`

− Field `deletedBy` was removed from interface `PlatformToken`

− Field `updatedBy` was removed from interface `PlatformToken`

#### ✅ Non-Breaking Changes (2)

##### Supply

###### Input / Payload

\+ Input field `solutionSourceUrl` of type `String` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `solutionSourceUrl` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

### 28-Jul-2026

#### 🔴 Breaking Changes (3)

##### Supply

###### Types

− Type `SupSolutionTemplateAuditObject` was removed

###### Fields

− Field `author` was removed from object type `SupSolutionTemplateAudit`

− Field `objectType` was removed from object type `SupSolutionTemplateAudit`

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### Types

\+ Enum value `IS_RECOMMENDED` was added to enum `SupSoftwareProjectOrderField`

#### ✅ Non-Breaking Changes (51)

##### Renesas (preview)

###### Fields

\+ Field `isRecommended` was added to object type `SupSoftwareProject`

\+ Field `recommendScore` was added to object type `SupSoftwareProject`

###### Input / Payload

\+ Input field `recommendScore` of type `Int` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

\+ Input field `isRecommended` of type `Boolean` was added to input object type `SupSoftwareProjectFilterInput`

\+ Input field `isRecommended` of type `Boolean` was added to input object type `SupSoftwareProjectSearchFilterInput`

\+ Input field `isRecommended` of type `SortEnumType` was added to input object type `SupSoftwareProjectSortInput`

\+ Input field `recommendScore` of type `SortEnumType` was added to input object type `SupSoftwareProjectSortInput`

\+ Input field `recommendScore` of type `Int` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

##### Supply

###### 🔍 Query

\+ Field `supEvalKitAuditSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supEvalKitAuditSearch`

\+ Argument `before: String` added to `Query.supEvalKitAuditSearch`

\+ Argument `first: Int` added to `Query.supEvalKitAuditSearch`

\+ Argument `last: Int` added to `Query.supEvalKitAuditSearch`

\+ Argument `where: SupEvalKitAuditSearchFilter` added to `Query.supEvalKitAuditSearch`

###### Types

\+ Type `SupEvalKitAudit` was added

\+ Type `SupEvalKitAuditConnection` was added

Δ Object type `SupEvalKitAuditConnection` has description `A connection to a list of items.`

\+ Type `SupEvalKitAuditEdge` was added

Δ Object type `SupEvalKitAuditEdge` has description `An edge in a connection.`

\+ Type `SupEvalKitAuditAction` was added

\+ Enum value `ADD` was added to enum `SupEvalKitAuditAction`

\+ Enum value `CREATE` was added to enum `SupEvalKitAuditAction`

\+ Enum value `DELETE` was added to enum `SupEvalKitAuditAction`

\+ Enum value `MODIFY` was added to enum `SupEvalKitAuditAction`

\+ Enum value `REMOVE` was added to enum `SupEvalKitAuditAction`

\+ Enum value `SOFT_DELETE` was added to enum `SupEvalKitAuditAction`

\+ Type `SupEvalKitAuditSearchFilter` was added

Δ Object type `SupEvalKitAuditSearchFilter` has description `Filter input for searching solution template audit records.`

###### Fields

\+ Field `action` was added to object type `SupEvalKitAudit`

\+ Field `authorId` was added to object type `SupEvalKitAudit`

\+ Field `authorName` was added to object type `SupEvalKitAudit`

\+ Field `eventDate` was added to object type `SupEvalKitAudit`

\+ Field `groupId` was added to object type `SupEvalKitAudit`

\+ Field `message` was added to object type `SupEvalKitAudit`

\+ Field `objectId` was added to object type `SupEvalKitAudit`

\+ Field `objectTypeId` was added to object type `SupEvalKitAudit`

\+ Field `objectTypeName` was added to object type `SupEvalKitAudit`

\+ Field `primaryObjectId` was added to object type `SupEvalKitAudit`

\+ Field `edges` was added to object type `SupEvalKitAuditConnection`

\+ Field `nodes` was added to object type `SupEvalKitAuditConnection`

\+ Field `pageInfo` was added to object type `SupEvalKitAuditConnection`

\+ Field `totalCount` was added to object type `SupEvalKitAuditConnection`

\+ Field `cursor` was added to object type `SupEvalKitAuditEdge`

\+ Field `node` was added to object type `SupEvalKitAuditEdge`

\+ Field `authorId` was added to object type `SupSolutionTemplateAudit`

\+ Field `objectTypeId` was added to object type `SupSolutionTemplateAudit`

\+ Field `objectTypeName` was added to object type `SupSolutionTemplateAudit`

###### Input / Payload

\+ Input field `endDate` of type `DateTime` was added to input object type `SupEvalKitAuditSearchFilter`

\+ Input field `primaryObjectId` of type `String` was added to input object type `SupEvalKitAuditSearchFilter`

\+ Input field `startDate` of type `DateTime` was added to input object type `SupEvalKitAuditSearchFilter`

\+ Input field `text` of type `String` was added to input object type `SupEvalKitAuditSearchFilter`

### 27-Jul-2026

#### ✅ Non-Breaking Changes (27)

##### Renesas (preview)

###### Types

\+ Type `DmMcuPartNumberModel` was added

Δ Object type `DmMcuPartNumberModel` has description `**Experimental** MCU part number details parsed into structured properties.`

###### Fields

\+ Field `application` was added to object type `DmMcuPartNumberModel`

\+ Field `device` was added to object type `DmMcuPartNumberModel`

\+ Field `display` was added to object type `DmMcuPartNumberModel`

\+ Field `family` was added to object type `DmMcuPartNumberModel`

\+ Field `featureSet` was added to object type `DmMcuPartNumberModel`

\+ Field `flashMemorySizeKB` was added to object type `DmMcuPartNumberModel`

\+ Field `groupNumber` was added to object type `DmMcuPartNumberModel`

\+ Field `isArrayPackage` was added to object type `DmMcuPartNumberModel`

\+ Field `onChipMemoryCode` was added to object type `DmMcuPartNumberModel`

\+ Field `package` was added to object type `DmMcuPartNumberModel`

\+ Field `packing` was added to object type `DmMcuPartNumberModel`

\+ Field `partNumber` was added to object type `DmMcuPartNumberModel`

\+ Field `performance` was added to object type `DmMcuPartNumberModel`

\+ Field `pinCount` was added to object type `DmMcuPartNumberModel`

\+ Field `pitchMm` was added to object type `DmMcuPartNumberModel`

\+ Field `qualityGrade` was added to object type `DmMcuPartNumberModel`

\+ Field `romCode` was added to object type `DmMcuPartNumberModel`

\+ Field `temperatureRange` was added to object type `DmMcuPartNumberModel`

\+ Field `xMm` was added to object type `DmMcuPartNumberModel`

\+ Field `yMm` was added to object type `DmMcuPartNumberModel`

\+ Field `deviceFamily` was added to object type `DmFamilyPart`

\+ Field `mcuPartDetails` was added to object type `DmFamilyPart`

\+ Field `vendor` was added to object type `DmFamilyPart`

Δ Field `DmFamilyPart.raPartDetails` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.raPartDetails`

### 24-Jul-2026

#### ✅ Non-Breaking Changes (4)

##### Design

###### Fields

\+ Field `createdAt` was added to object type `DesFootprint`

\+ Field `releasedAt` was added to object type `DesFootprint`

\+ Field `createdAt` was added to object type `DesSymbol`

\+ Field `releasedAt` was added to object type `DesSymbol`

### 21-Jul-2026

#### ✅ Non-Breaking Changes (66)

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmDeviceFamilies` was added to object type `Query`

###### ✏️ Mutation

\+ Field `dmExecuteDeviceEvaluationByFamily` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceEvaluationByFamilyInput!` added to `Mutation.dmExecuteDeviceEvaluationByFamily`

\+ Field `dmExecuteDeviceEvaluationByMpn` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceEvaluationByMpnInput!` added to `Mutation.dmExecuteDeviceEvaluationByMpn`

###### Types

\+ Type `DmDeviceFamily` was added

Δ Object type `DmDeviceFamily` has description `**Experimental** A supported device family (e.g. RA, RX) with display metadata and total device count.`

\+ Type `DmExecuteDeviceEvaluationByFamilyPayload` was added

Δ Object type `DmExecuteDeviceEvaluationByFamilyPayload` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationByMpnPayload` was added

Δ Object type `DmExecuteDeviceEvaluationByMpnPayload` has description `**Experimental**`

\+ Type `DmFamilyCapability` was added

Δ Object type `DmFamilyCapability` has description `**Experimental** A single named family capability. The set is an extensible key-value list so new capabilities do not require a schema change.`

\+ Type `DmFeasibleDeviceModel` was added

Δ Object type `DmFeasibleDeviceModel` has description `**Experimental** A device without concrete peripherals and ports — enough to drive the matched-parts list and search results.`

\+ Type `DmResolverFeasibilityResult` was added

Δ Object type `DmResolverFeasibilityResult` has description `**Experimental** Feasibility outcome for a single candidate device (no full configuration).`

\+ Type `DmResolverFeasibilitySummary` was added

Δ Object type `DmResolverFeasibilitySummary` has description `**Experimental** Fast, family-scoped feasibility summary. Carries a lean feasibleModel (no configured ports/peripherals) for each candidate device, enough to drive the matched-parts list and search results.`

\+ Type `DmExecuteDeviceEvaluationByFamilyInput` was added

Δ Object type `DmExecuteDeviceEvaluationByFamilyInput` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationByMpnInput` was added

Δ Object type `DmExecuteDeviceEvaluationByMpnInput` has description `**Experimental**`

###### Fields

\+ Field `aliases` was added to object type `DmDeviceFamily`

\+ Field `capabilities` was added to object type `DmDeviceFamily`

\+ Field `description` was added to object type `DmDeviceFamily`

\+ Field `key` was added to object type `DmDeviceFamily`

\+ Field `label` was added to object type `DmDeviceFamily`

\+ Field `priority` was added to object type `DmDeviceFamily`

\+ Field `shortLabel` was added to object type `DmDeviceFamily`

\+ Field `totalDevices` was added to object type `DmDeviceFamily`

\+ Field `vendor` was added to object type `DmDeviceFamily`

\+ Field `dmResolverFeasibilitySummary` was added to object type `DmExecuteDeviceEvaluationByFamilyPayload`

\+ Field `dmResolverSummary` was added to object type `DmExecuteDeviceEvaluationByMpnPayload`

\+ Field `key` was added to object type `DmFamilyCapability`

\+ Field `value` was added to object type `DmFamilyCapability`

\+ Field `board` was added to object type `DmFeasibleDeviceModel`

\+ Field `deviceMpn` was added to object type `DmFeasibleDeviceModel`

\+ Field `familyPart` was added to object type `DmFeasibleDeviceModel`

\+ Field `boardName` was added to object type `DmResolverFeasibilityResult`

\+ Field `constraintModel` was added to object type `DmResolverFeasibilityResult`

\+ Field `deviceFamily` was added to object type `DmResolverFeasibilityResult`

\+ Field `deviceFamilyKey` was added to object type `DmResolverFeasibilityResult`

\+ Field `deviceMpn` was added to object type `DmResolverFeasibilityResult`

\+ Field `errors` was added to object type `DmResolverFeasibilityResult`

\+ Field `feasibleModel` was added to object type `DmResolverFeasibilityResult`

\+ Field `isFeasible` was added to object type `DmResolverFeasibilityResult`

\+ Field `logs` was added to object type `DmResolverFeasibilityResult`

\+ Field `solverStatus` was added to object type `DmResolverFeasibilityResult`

\+ Field `vendor` was added to object type `DmResolverFeasibilityResult`

\+ Field `wallTimeSeconds` was added to object type `DmResolverFeasibilityResult`

\+ Field `warnings` was added to object type `DmResolverFeasibilityResult`

\+ Field `percentResolvedSuccess` was added to object type `DmResolverFeasibilitySummary`

\+ Field `requiredPeripherals` was added to object type `DmResolverFeasibilitySummary`

\+ Field `results` was added to object type `DmResolverFeasibilitySummary`

\+ Field `deviceFamilyKey` was added to object type `DmResolverResult`

\+ Field `vendor` was added to object type `DmResolverResult`

###### Input / Payload

\+ Input field `deviceFamily` of type `String!` was added to input object type `DmExecuteDeviceEvaluationByFamilyInput`

\+ Input field `evaluationStrategy` of type `DmModelEvaluationStrategy` was added to input object type `DmExecuteDeviceEvaluationByFamilyInput`

\+ Input field `includeDiagnostics` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationByFamilyInput`

\+ Input field `payload` of type `[DmRequiredPeripheralPayloadInput!]!` was added to input object type `DmExecuteDeviceEvaluationByFamilyInput`

\+ Input field `vendor` of type `String!` was added to input object type `DmExecuteDeviceEvaluationByFamilyInput`

\+ Input field `deviceMpn` of type `String!` was added to input object type `DmExecuteDeviceEvaluationByMpnInput`

\+ Input field `evaluationStrategy` of type `DmModelEvaluationStrategy` was added to input object type `DmExecuteDeviceEvaluationByMpnInput`

\+ Input field `includeDiagnostics` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationByMpnInput`

\+ Input field `payload` of type `[DmRequiredPeripheralPayloadInput!]!` was added to input object type `DmExecuteDeviceEvaluationByMpnInput`

### 20-Jul-2026

#### ✅ Non-Breaking Changes (58)

##### Renesas (preview)

###### Input / Payload

\+ Input field `ids` of type `[ID!]` was added to input object type `SupSoftwareProjectSearchFilterInput`

##### Supply

###### 🔍 Query

\+ Field `supSolutionTemplateAuditSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSolutionTemplateAuditSearch`

\+ Argument `before: String` added to `Query.supSolutionTemplateAuditSearch`

\+ Argument `first: Int` added to `Query.supSolutionTemplateAuditSearch`

\+ Argument `last: Int` added to `Query.supSolutionTemplateAuditSearch`

\+ Argument `where: SupSolutionTemplateAuditSearchFilter` added to `Query.supSolutionTemplateAuditSearch`

###### Types

\+ Type `SupSolutionTemplateAudit` was added

\+ Type `SupSolutionTemplateAuditConnection` was added

Δ Object type `SupSolutionTemplateAuditConnection` has description `A connection to a list of items.`

\+ Type `SupSolutionTemplateAuditEdge` was added

Δ Object type `SupSolutionTemplateAuditEdge` has description `An edge in a connection.`

\+ Type `SupSolutionTemplateAuditAction` was added

\+ Enum value `ADD` was added to enum `SupSolutionTemplateAuditAction`

\+ Enum value `CREATE` was added to enum `SupSolutionTemplateAuditAction`

\+ Enum value `DELETE` was added to enum `SupSolutionTemplateAuditAction`

\+ Enum value `MODIFY` was added to enum `SupSolutionTemplateAuditAction`

\+ Enum value `REMOVE` was added to enum `SupSolutionTemplateAuditAction`

\+ Enum value `SOFT_DELETE` was added to enum `SupSolutionTemplateAuditAction`

\+ Type `SupSolutionTemplateAuditObject` was added

\+ Enum value `APPLICATION` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `APPLICATION_BUNDLE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `APPLICATION_PARAMETER_BUNDLE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `COMPATIBLE_EVAL_KIT` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `ESD_SOURCE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `KEY_FEATURE_GROUP` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `KEY_FEATURE_GROUP_ATTRIBUTE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `PARAMETER` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `PARAMETER_BUNDLE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `PARAMETER_BUNDLE_VALUE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `PREVIEW_IMAGE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `SOFTWARE_PROJECT` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `SOLUTION_TEMPLATE` was added to enum `SupSolutionTemplateAuditObject`

\+ Enum value `TAG` was added to enum `SupSolutionTemplateAuditObject`

\+ Type `SupSolutionTemplateAuditSearchFilter` was added

Δ Object type `SupSolutionTemplateAuditSearchFilter` has description `Filter input for searching solution template audit records.`

###### Fields

\+ Field `action` was added to object type `SupSolutionTemplateAudit`

\+ Field `author` was added to object type `SupSolutionTemplateAudit`

\+ Field `authorName` was added to object type `SupSolutionTemplateAudit`

\+ Field `eventDate` was added to object type `SupSolutionTemplateAudit`

\+ Field `groupId` was added to object type `SupSolutionTemplateAudit`

\+ Field `message` was added to object type `SupSolutionTemplateAudit`

\+ Field `objectId` was added to object type `SupSolutionTemplateAudit`

\+ Field `objectType` was added to object type `SupSolutionTemplateAudit`

\+ Field `primaryObjectId` was added to object type `SupSolutionTemplateAudit`

\+ Field `edges` was added to object type `SupSolutionTemplateAuditConnection`

\+ Field `nodes` was added to object type `SupSolutionTemplateAuditConnection`

\+ Field `pageInfo` was added to object type `SupSolutionTemplateAuditConnection`

\+ Field `totalCount` was added to object type `SupSolutionTemplateAuditConnection`

\+ Field `cursor` was added to object type `SupSolutionTemplateAuditEdge`

\+ Field `node` was added to object type `SupSolutionTemplateAuditEdge`

###### Input / Payload

\+ Input field `endDate` of type `DateTime` was added to input object type `SupSolutionTemplateAuditSearchFilter`

\+ Input field `primaryObjectId` of type `String` was added to input object type `SupSolutionTemplateAuditSearchFilter`

\+ Input field `startDate` of type `DateTime` was added to input object type `SupSolutionTemplateAuditSearchFilter`

\+ Input field `text` of type `String` was added to input object type `SupSolutionTemplateAuditSearchFilter`

\+ Input field `ids` of type `[ID!]` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `ids` of type `[ID!]` was added to input object type `SupSolutionTemplateApplicationSearchFilterInput`

\+ Input field `ids` of type `[ID!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

### 17-Jul-2026

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Fields

\+ Field `clientId` was added to object type `PlatformWorkspaceRefreshToken`

### 15-Jul-2026

#### ✅ Non-Breaking Changes (33)

##### Platform

###### Types

\+ Type `PlatformTokenConnection` was added

Δ Object type `PlatformTokenConnection` has description `A connection to a list of items.`

\+ Type `PlatformTokenEdge` was added

Δ Object type `PlatformTokenEdge` has description `An edge in a connection.`

\+ Type `PlatformTokenFilterInput` was added

\+ Type `PlatformTokenSortInput` was added

###### Arguments

\+ Argument `after: String` added to `TokenQueries.byWorkspace`

\+ Argument `before: String` added to `TokenQueries.byWorkspace`

\+ Argument `first: Int` added to `TokenQueries.byWorkspace`

\+ Argument `last: Int` added to `TokenQueries.byWorkspace`

\+ Argument `order: [PlatformTokenSortInput!]` added to `TokenQueries.byWorkspace`

\+ Argument `where: PlatformTokenFilterInput` added to `TokenQueries.byWorkspace`

###### Fields

\+ Field `edges` was added to object type `PlatformTokenConnection`

\+ Field `nodes` was added to object type `PlatformTokenConnection`

\+ Field `pageInfo` was added to object type `PlatformTokenConnection`

\+ Field `totalCount` was added to object type `PlatformTokenConnection`

\+ Field `cursor` was added to object type `PlatformTokenEdge`

\+ Field `node` was added to object type `PlatformTokenEdge`

\+ Field `byWorkspace` was added to object type `TokenQueries`

###### Input / Payload

\+ Input field `and` of type `[PlatformTokenFilterInput!]` was added to input object type `PlatformTokenFilterInput`

\+ Input field `createdAt` of type `DateTimeOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `deletedAt` of type `DateTimeOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `expiresAt` of type `DateTimeOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `or` of type `[PlatformTokenFilterInput!]` was added to input object type `PlatformTokenFilterInput`

\+ Input field `updatedAt` of type `DateTimeOperationFilterInput` was added to input object type `PlatformTokenFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

\+ Input field `deletedAt` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

\+ Input field `description` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

\+ Input field `expiresAt` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `PlatformTokenSortInput`

### 14-Jul-2026

#### ✅ Non-Breaking Changes (67)

##### Platform

###### ✏️ Mutation

\+ Field `platformTokenDelete` was added to object type `Mutation`

\+ Argument `input: PlatformTokenDeleteInput!` added to `Mutation.platformTokenDelete`

\+ Field `platformTokenUpdate` was added to object type `Mutation`

\+ Argument `input: PlatformTokenUpdateInput!` added to `Mutation.platformTokenUpdate`

\+ Field `platformWorkspaceRefreshTokenCreateNewSecret` was added to object type `Mutation`

\+ Argument `input: PlatformWorkspaceRefreshTokenCreateNewSecretInput!` added to `Mutation.platformWorkspaceRefreshTokenCreateNewSecret`

###### Types

\+ Type `PlatformRefreshTokenCreateNewSecretError` was added

Δ `PlatformRefreshTokenCreateNewSecretError` object implements `Error` interface

Δ Object type `PlatformRefreshTokenCreateNewSecretError` has description ``Error returned by the Token API when a new client secret for a `PlatformWorkspaceRefreshToken` could not be created.``

\+ Type `PlatformTokenDeleteFailedError` was added

Δ `PlatformTokenDeleteFailedError` object implements `Error` interface

Δ Object type `PlatformTokenDeleteFailedError` has description ``Error returned by the Token API when a `PlatformToken` could not be deleted.``

\+ Type `PlatformTokenDeletePayload` was added

\+ Type `PlatformTokenNotFoundError` was added

Δ `PlatformTokenNotFoundError` object implements `Error` interface

Δ Object type `PlatformTokenNotFoundError` has description ``Error that occurs when a `PlatformToken` with the specified identifier could not be found.``

\+ Type `PlatformTokenUpdateFailedError` was added

Δ `PlatformTokenUpdateFailedError` object implements `Error` interface

Δ Object type `PlatformTokenUpdateFailedError` has description ``Error that occurs when no `PlatformToken` exists with the specified identifier.``

\+ Type `PlatformTokenUpdateInvalidError` was added

Δ `PlatformTokenUpdateInvalidError` object implements `Error` interface

Δ Object type `PlatformTokenUpdateInvalidError` has description ``Error that occurs when a `PlatformToken` update request specifies no fields to update.``

\+ Type `PlatformTokenUpdatePayload` was added

\+ Type `PlatformWorkspaceRefreshTokenCreateNewSecretPayload` was added

Δ Object type `PlatformWorkspaceRefreshTokenCreateNewSecretPayload` has description ``Payload for creating a new client secret for a `PlatformWorkspaceRefreshToken`.``

\+ Type `PlatformTokenDeleteError` was added

\+ Member `PlatformTokenNotFoundError` was added to Union type `PlatformTokenDeleteError`

\+ Member `PlatformTokenDeleteFailedError` was added to Union type `PlatformTokenDeleteError`

\+ Type `PlatformTokenUpdateError` was added

\+ Member `PlatformTokenUpdateInvalidError` was added to Union type `PlatformTokenUpdateError`

\+ Member `PlatformTokenUpdateFailedError` was added to Union type `PlatformTokenUpdateError`

\+ Member `PlatformTokenNameExistsError` was added to Union type `PlatformTokenUpdateError`

\+ Type `PlatformWorkspaceRefreshTokenCreateNewSecretError` was added

\+ Member `PlatformTokenNotFoundError` was added to Union type `PlatformWorkspaceRefreshTokenCreateNewSecretError`

\+ Member `PlatformRefreshTokenCreateNewSecretError` was added to Union type `PlatformWorkspaceRefreshTokenCreateNewSecretError`

\+ Type `PlatformTokenDeleteInput` was added

\+ Type `PlatformTokenUpdateInput` was added

Δ Object type `PlatformTokenUpdateInput` has description ``Input for updating an existing `PlatformToken`. At least one of `name` or `description` must be provided.``

\+ Type `PlatformWorkspaceRefreshTokenCreateNewSecretInput` was added

###### Fields

\+ Field `message` was added to object type `PlatformRefreshTokenCreateNewSecretError`

\+ Field `message` was added to object type `PlatformTokenDeleteFailedError`

\+ Field `errors` was added to object type `PlatformTokenDeletePayload`

\+ Field `tokenId` was added to object type `PlatformTokenDeletePayload`

\+ Field `message` was added to object type `PlatformTokenNotFoundError`

\+ Field `message` was added to object type `PlatformTokenUpdateFailedError`

\+ Field `message` was added to object type `PlatformTokenUpdateInvalidError`

\+ Field `errors` was added to object type `PlatformTokenUpdatePayload`

\+ Field `platformToken` was added to object type `PlatformTokenUpdatePayload`

\+ Field `clientSecret` was added to object type `PlatformWorkspaceRefreshTokenCreateNewSecretPayload`

\+ Field `errors` was added to object type `PlatformWorkspaceRefreshTokenCreateNewSecretPayload`

\+ Field `refreshToken` was added to object type `PlatformWorkspaceRefreshTokenCreateNewSecretPayload`

###### Input / Payload

\+ Input field `tokenId` of type `String!` was added to input object type `PlatformTokenDeleteInput`

\+ Input field `description` of type `String` was added to input object type `PlatformTokenUpdateInput`

\+ Input field `name` of type `String` was added to input object type `PlatformTokenUpdateInput`

\+ Input field `tokenId` of type `String!` was added to input object type `PlatformTokenUpdateInput`

\+ Input field `tokenId` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenCreateNewSecretInput`

##### System Design

###### Types

Δ Object type `SysEsdCreateDocumentPayload` has description `Result of creating a new ESD document.`

Δ Object type `SysEsdDeleteDocumentPayload` has description `Result of deleting an ESD document.`

Δ Object type `SysEsdDocument` has description `Represents an ESD (Electronic System Design) document stored in a regional workspace.`

Δ Object type `SysEsdExportDocumentPayload` has description `Result of exporting an ESD document.`

Δ Object type `SysEsdImportDocumentPayload` has description `Result of importing content into an ESD document.`

Δ Object type `SysEsdUpdateDocumentPayload` has description `Result of updating an ESD document.`

Δ Object type `SysEsdCreateDocumentInput` has description `Input for creating a new ESD document.`

Δ Object type `SysEsdDeleteDocumentInput` has description `Input for deleting an ESD document.`

Δ Object type `SysEsdExportDocumentInput` has description `Input for exporting an ESD document.`

Δ Object type `SysEsdImportDocumentInput` has description `Input for importing content into an existing ESD document.`

Δ Object type `SysEsdUpdateDocumentInput` has description `Input for updating an existing ESD document.`

### 13-Jul-2026

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

− Field `tokenByTokenId` was removed from object type `TokenQueries`

#### ✅ Non-Breaking Changes (2)

##### Platform

###### Arguments

\+ Argument `tokenId: String!` added to `TokenQueries.byTokenId`

###### Fields

\+ Field `byTokenId` was added to object type `TokenQueries`

### 10-Jul-2026

#### ✅ Non-Breaking Changes (13)

##### Common

###### Types

\+ Type `SchemaRegistryEntry` was added

Δ Object type `SchemaRegistryEntry` has description `**Experimental**`

###### Fields

\+ Field `cdmReleaseUrl` was added to object type `SchemaRegistryEntry`

\+ Field `cdmVersion` was added to object type `SchemaRegistryEntry`

\+ Field `description` was added to object type `SchemaRegistryEntry`

\+ Field `isLatest` was added to object type `SchemaRegistryEntry`

\+ Field `isOnlySemantic` was added to object type `SchemaRegistryEntry`

\+ Field `isPullDeprecated` was added to object type `SchemaRegistryEntry`

\+ Field `isPushDeprecated` was added to object type `SchemaRegistryEntry`

\+ Field `migrationNotes` was added to object type `SchemaRegistryEntry`

\+ Field `schemaVersion` was added to object type `SchemaRegistryEntry`

\+ Field `status` was added to object type `SchemaRegistryEntry`

##### System Design

###### 🔍 Query

\+ Field `sysSdmSchemaVersionRegistry` was added to object type `Query`

### 06-Jul-2026

#### ✅ Non-Breaking Changes (1)

##### Design

###### Fields

\+ Field `fullName` was added to object type `DesignDataPin_Preview`

### 03-Jul-2026

#### ✅ Non-Breaking Changes (32)

##### Design

###### Fields

\+ Field `apiVoyagerUrl` was added to object type `DesWorkspaceLocation`

##### Renesas (preview)

###### Fields

\+ Field `isArrayPackage` was added to object type `DmRaPartNumberModel`

##### Supply

###### ✏️ Mutation

\+ Field `supSolutionTemplatePatchPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchPreviewImagesInput!` added to `Mutation.supSolutionTemplatePatchPreviewImages`

\+ Field `supSolutionTemplateSetPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetPreviewImagesInput!` added to `Mutation.supSolutionTemplateSetPreviewImages`

###### Types

\+ Type `SupSolutionTemplatePatchPreviewImagesPayload` was added

Δ Object type `SupSolutionTemplatePatchPreviewImagesPayload` has description `Payload for patching preview images on a solution template.`

\+ Type `SupSolutionTemplateSetPreviewImagesPayload` was added

Δ Object type `SupSolutionTemplateSetPreviewImagesPayload` has description `Payload for replacing all preview images on a solution template.`

\+ Type `SupSolutionTemplatePatchPreviewImagesError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchPreviewImagesError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchPreviewImagesError`

\+ Type `SupSolutionTemplateSetPreviewImagesError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetPreviewImagesError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetPreviewImagesError`

\+ Type `SupSolutionTemplatePatchPreviewImagesInput` was added

Δ Object type `SupSolutionTemplatePatchPreviewImagesInput` has description `Input for patching preview images on a solution template.`

\+ Type `SupSolutionTemplateSetPreviewImagesInput` was added

Δ Object type `SupSolutionTemplateSetPreviewImagesInput` has description `Input for replacing all preview images on a solution template.`

###### Fields

\+ Field `errors` was added to object type `SupSolutionTemplatePatchPreviewImagesPayload`

\+ Field `success` was added to object type `SupSolutionTemplatePatchPreviewImagesPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetPreviewImagesPayload`

\+ Field `success` was added to object type `SupSolutionTemplateSetPreviewImagesPayload`

###### Input / Payload

\+ Input field `addPreviewImages` of type `[SupSolutionTemplateFileInput!]` was added to input object type `SupSolutionTemplatePatchPreviewImagesInput`

\+ Input field `deletePreviewImageUrls` of type `[String!]` was added to input object type `SupSolutionTemplatePatchPreviewImagesInput`

\+ Input field `reorderPreviewImageUrls` of type `[String!]` was added to input object type `SupSolutionTemplatePatchPreviewImagesInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchPreviewImagesInput`

\+ Input field `previewImages` of type `[SupSolutionTemplateFileInput!]` was added to input object type `SupSolutionTemplateSetPreviewImagesInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetPreviewImagesInput`

\+ Input field `publisherIds` of type `[String!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `updatedByIds` of type `[String!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

### 02-Jul-2026

#### ✅ Non-Breaking Changes (1)

##### Renesas (preview)

###### Input / Payload

\+ Input field `strictMode` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationInput`

### 01-Jul-2026

#### ✅ Non-Breaking Changes (12)

##### Supply

###### ✏️ Mutation

\+ Field `supSolutionTemplateUpdateSolutionTemplateStatus` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateUpdateSolutionTemplateStatusInput!` added to `Mutation.supSolutionTemplateUpdateSolutionTemplateStatus`

###### Types

\+ Type `SupSolutionTemplateUpdateSolutionTemplateStatusPayload` was added

Δ Object type `SupSolutionTemplateUpdateSolutionTemplateStatusPayload` has description `Payload associated with updating the status of a solution template.`

\+ Type `SupSolutionTemplateUpdateSolutionTemplateStatusError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateStatusError`

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateStatusError`

\+ Type `SupSolutionTemplateUpdateSolutionTemplateStatusInput` was added

Δ Object type `SupSolutionTemplateUpdateSolutionTemplateStatusInput` has description `Input for solution template status update.`

###### Fields

\+ Field `errors` was added to object type `SupSolutionTemplateUpdateSolutionTemplateStatusPayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateStatusInput`

\+ Input field `status` of type `SupSolutionTemplateStatus!` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateStatusInput`

### 30-Jun-2026

#### ⚠️ Dangerous Changes (7)

##### Renesas (preview)

###### Fields

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

##### Supply

###### Fields

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

#### ✅ Non-Breaking Changes (1)

##### Renesas (preview)

###### Fields

\+ Field `updatedAt` was added to object type `SupSoftwareProjectEvalKitProjectSource`

### 29-Jun-2026

#### ✅ Non-Breaking Changes (10)

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmInterfaceTypeModels` was added to object type `Query`

###### Types

\+ Type `DmInterfaceTypeModel` was added

Δ Object type `DmInterfaceTypeModel` has description `**Experimental** A supported interface (port) type with display metadata. Source of truth for the interface types the product supports.`

###### Fields

\+ Field `aliases` was added to object type `DmInterfaceTypeModel`

\+ Field `description` was added to object type `DmInterfaceTypeModel`

\+ Field `key` was added to object type `DmInterfaceTypeModel`

\+ Field `label` was added to object type `DmInterfaceTypeModel`

\+ Field `shortLabel` was added to object type `DmInterfaceTypeModel`

\+ Field `userSelectable` was added to object type `DmInterfaceTypeModel`

\+ Field `interfaceTypeModel` was added to object type `DmInterfaceSummary`

### 24-Jun-2026

#### 🔴 Breaking Changes (1)

##### Supply

###### Input / Payload

Δ Input field `SupSolutionTemplateUpdateSolutionTemplateInput.newEsdSource` changed type from `SupSolutionTemplateEsdSourceInput` to `SupSolutionTemplatePatchEsdSourceInput`

#### ✅ Non-Breaking Changes (141)

##### Design

###### Fields

\+ Field `component` was added to object type `DesCadBoardComponentType`

\+ Field `footprint` was added to object type `DesCadBoardComponentType`

\+ Field `footprintReference` was added to object type `DesCadBoardComponentType`

###### Input / Payload

\+ Input field `footprintReference` of type `String` was added to input object type `DesCadBoardComponentTypeInput`

##### Platform

###### 🔍 Query

\+ Field `platform` was added to object type `Query`

###### ✏️ Mutation

\+ Field `platformWorkspaceRefreshTokenCreate` was added to object type `Mutation`

\+ Argument `input: PlatformWorkspaceRefreshTokenCreateInput!` added to `Mutation.platformWorkspaceRefreshTokenCreate`

\+ Field `platformWorkspaceTokenCreate` was added to object type `Mutation`

\+ Argument `input: PlatformWorkspaceTokenCreateInput!` added to `Mutation.platformWorkspaceTokenCreate`

###### Types

\+ Type `PlatformQueries` was added

\+ Type `PlatformTokenGenerationError` was added

Δ `PlatformTokenGenerationError` object implements `Error` interface

Δ Object type `PlatformTokenGenerationError` has description ``Error that occurs when the `PlatformToken` has not been successfully generated.``

\+ Type `PlatformTokenNameExistsError` was added

Δ `PlatformTokenNameExistsError` object implements `Error` interface

Δ Object type `PlatformTokenNameExistsError` has description ``Error that occurs when the input `PlatformToken` name already exists.``

\+ Type `PlatformTokenQuotaExceededError` was added

Δ `PlatformTokenQuotaExceededError` object implements `Error` interface

Δ Object type `PlatformTokenQuotaExceededError` has description ``Error that occurs when the maximum number of `PlatformToken` for a workspace has been reached.``

\+ Type `PlatformTokenWorkspaceAccessDeniedError` was added

Δ `PlatformTokenWorkspaceAccessDeniedError` object implements `Error` interface

Δ Object type `PlatformTokenWorkspaceAccessDeniedError` has description ``Error that occurs when access to a workspace is denied for a `PlatformToken`.``

\+ Type `PlatformWorkspaceRefreshToken` was added

Δ `PlatformWorkspaceRefreshToken` object implements `PlatformToken` interface

Δ Object type `PlatformWorkspaceRefreshToken` has description ``Represents a `PlatformWorkspaceRefreshToken`, which is used for authentication and authorization when accessing the Altium platform.``

\+ Type `PlatformWorkspaceRefreshTokenCreatePayload` was added

\+ Type `PlatformWorkspaceToken` was added

Δ `PlatformWorkspaceToken` object implements `PlatformToken` interface

Δ Object type `PlatformWorkspaceToken` has description ``Represents a `PlatformWorkspaceToken`, which is used for authentication and authorization when accessing the Altium platform.``

\+ Type `PlatformWorkspaceTokenCreatePayload` was added

\+ Type `TokenQueries` was added

\+ Type `PlatformToken` was added

Δ Object type `PlatformToken` has description ``Represents a `PlatformToken`, which is used for authentication and authorization when accessing the Altium platform.``

\+ Type `PlatformWorkspaceRefreshTokenCreateError` was added

\+ Member `PlatformTokenNameExistsError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenWorkspaceAccessDeniedError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenGenerationError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Member `PlatformTokenQuotaExceededError` was added to Union type `PlatformWorkspaceRefreshTokenCreateError`

\+ Type `PlatformWorkspaceTokenCreateError` was added

\+ Member `PlatformTokenNameExistsError` was added to Union type `PlatformWorkspaceTokenCreateError`

\+ Member `PlatformTokenWorkspaceAccessDeniedError` was added to Union type `PlatformWorkspaceTokenCreateError`

\+ Member `PlatformTokenGenerationError` was added to Union type `PlatformWorkspaceTokenCreateError`

\+ Member `PlatformTokenQuotaExceededError` was added to Union type `PlatformWorkspaceTokenCreateError`

\+ Type `PlatformWorkspaceRefreshTokenCreateInput` was added

Δ Object type `PlatformWorkspaceRefreshTokenCreateInput` has description ``Input for creating a new `PlatformWorkspaceRefreshToken`.``

\+ Type `PlatformWorkspaceTokenCreateInput` was added

Δ Object type `PlatformWorkspaceTokenCreateInput` has description ``Input for creating a new `PlatformWorkspaceToken`.``

###### Arguments

\+ Argument `tokenId: String!` added to `TokenQueries.tokenByTokenId`

###### Fields

\+ Field `token` was added to object type `PlatformQueries`

\+ Field `message` was added to object type `PlatformTokenGenerationError`

\+ Field `message` was added to object type `PlatformTokenNameExistsError`

\+ Field `message` was added to object type `PlatformTokenQuotaExceededError`

\+ Field `message` was added to object type `PlatformTokenWorkspaceAccessDeniedError`

\+ Field `createdAt` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `createdBy` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `deletedAt` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `deletedBy` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `description` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `expiresAt` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `maskedRefreshToken` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `name` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `tokenId` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `updatedAt` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `updatedBy` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `workspaceId` was added to object type `PlatformWorkspaceRefreshToken`

\+ Field `errors` was added to object type `PlatformWorkspaceRefreshTokenCreatePayload`

\+ Field `redirectUrl` was added to object type `PlatformWorkspaceRefreshTokenCreatePayload`

\+ Field `createdAt` was added to object type `PlatformWorkspaceToken`

\+ Field `createdBy` was added to object type `PlatformWorkspaceToken`

\+ Field `deletedAt` was added to object type `PlatformWorkspaceToken`

\+ Field `deletedBy` was added to object type `PlatformWorkspaceToken`

\+ Field `description` was added to object type `PlatformWorkspaceToken`

\+ Field `expiresAt` was added to object type `PlatformWorkspaceToken`

\+ Field `maskedAccessToken` was added to object type `PlatformWorkspaceToken`

\+ Field `name` was added to object type `PlatformWorkspaceToken`

\+ Field `tokenId` was added to object type `PlatformWorkspaceToken`

\+ Field `updatedAt` was added to object type `PlatformWorkspaceToken`

\+ Field `updatedBy` was added to object type `PlatformWorkspaceToken`

\+ Field `workspaceId` was added to object type `PlatformWorkspaceToken`

\+ Field `errors` was added to object type `PlatformWorkspaceTokenCreatePayload`

\+ Field `redirectUrl` was added to object type `PlatformWorkspaceTokenCreatePayload`

\+ Field `tokenByTokenId` was added to object type `TokenQueries`

Δ Field `createdAt` was added to interface `PlatformToken`

Δ Field `createdBy` was added to interface `PlatformToken`

Δ Field `deletedAt` was added to interface `PlatformToken`

Δ Field `deletedBy` was added to interface `PlatformToken`

Δ Field `description` was added to interface `PlatformToken`

Δ Field `expiresAt` was added to interface `PlatformToken`

Δ Field `name` was added to interface `PlatformToken`

Δ Field `tokenId` was added to interface `PlatformToken`

Δ Field `updatedAt` was added to interface `PlatformToken`

Δ Field `updatedBy` was added to interface `PlatformToken`

###### Input / Payload

\+ Input field `accessTokenLifetime` of type `Int!` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

\+ Input field `description` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

\+ Input field `name` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

\+ Input field `returnUrl` of type `String!` was added to input object type `PlatformWorkspaceRefreshTokenCreateInput`

\+ Input field `accessTokenLifetime` of type `Int!` was added to input object type `PlatformWorkspaceTokenCreateInput`

\+ Input field `description` of type `String!` was added to input object type `PlatformWorkspaceTokenCreateInput`

\+ Input field `name` of type `String!` was added to input object type `PlatformWorkspaceTokenCreateInput`

\+ Input field `returnUrl` of type `String!` was added to input object type `PlatformWorkspaceTokenCreateInput`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `supSoftwareProjectPatchPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectPatchPreviewImagesInput!` added to `Mutation.supSoftwareProjectPatchPreviewImages`

\+ Field `supSoftwareProjectSetPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectSetPreviewImagesInput!` added to `Mutation.supSoftwareProjectSetPreviewImages`

###### Types

\+ Type `SupSoftwareProjectPatchPreviewImagesPayload` was added

Δ Object type `SupSoftwareProjectPatchPreviewImagesPayload` has description `Payload for patching preview images on a software project.`

\+ Type `SupSoftwareProjectSetPreviewImagesPayload` was added

Δ Object type `SupSoftwareProjectSetPreviewImagesPayload` has description `Payload for replacing all preview images on a software project.`

\+ Type `SupSoftwareProjectPatchPreviewImagesError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectPatchPreviewImagesError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectPatchPreviewImagesError`

\+ Type `SupSoftwareProjectSetPreviewImagesError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectSetPreviewImagesError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectSetPreviewImagesError`

\+ Type `SupSoftwareProjectPatchPreviewImagesInput` was added

Δ Object type `SupSoftwareProjectPatchPreviewImagesInput` has description `Input for patching preview images on a software project.`

\+ Type `SupSoftwareProjectSetPreviewImagesInput` was added

Δ Object type `SupSoftwareProjectSetPreviewImagesInput` has description `Input for replacing all preview images on a software project.`

###### Fields

\+ Field `errors` was added to object type `SupSoftwareProjectPatchPreviewImagesPayload`

\+ Field `success` was added to object type `SupSoftwareProjectPatchPreviewImagesPayload`

\+ Field `errors` was added to object type `SupSoftwareProjectSetPreviewImagesPayload`

\+ Field `success` was added to object type `SupSoftwareProjectSetPreviewImagesPayload`

###### Input / Payload

\+ Input field `addPreviewImages` of type `[SupSoftwareProjectFileInput!]` was added to input object type `SupSoftwareProjectPatchPreviewImagesInput`

\+ Input field `deletePreviewImageUrls` of type `[String!]` was added to input object type `SupSoftwareProjectPatchPreviewImagesInput`

\+ Input field `reorderPreviewImageUrls` of type `[String!]` was added to input object type `SupSoftwareProjectPatchPreviewImagesInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SupSoftwareProjectPatchPreviewImagesInput`

\+ Input field `previewImages` of type `[SupSoftwareProjectFileInput!]` was added to input object type `SupSoftwareProjectSetPreviewImagesInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SupSoftwareProjectSetPreviewImagesInput`

##### Supply

###### Types

\+ Type `SupSolutionTemplateRefDesignCategoryBucket` was added

Δ Object type `SupSolutionTemplateRefDesignCategoryBucket` has description `Aggregation bucket for reference design categories with category identifier + counts.`

\+ Type `SupSolutionTemplatePatchEsdSourceInput` was added

###### Arguments

\+ Argument `size: Int` (with default value) added to `SupSolutionTemplateRefDesignResultSet.categoryAgg`

###### Fields

\+ Field `categoryId` was added to object type `SupSolutionTemplateRefDesignCategoryBucket`

\+ Field `count` was added to object type `SupSolutionTemplateRefDesignCategoryBucket`

\+ Field `categoryAgg` was added to object type `SupSolutionTemplateRefDesignResultSet`

###### Input / Payload

\+ Input field `clearCompileModel` of type `Boolean` was added to input object type `SupSolutionTemplatePatchEsdSourceInput`

\+ Input field `clearPreviewImage` of type `Boolean` was added to input object type `SupSolutionTemplatePatchEsdSourceInput`

\+ Input field `compileModel` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplatePatchEsdSourceInput`

\+ Input field `documentFile` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplatePatchEsdSourceInput`

\+ Input field `previewImageFile` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplatePatchEsdSourceInput`

\+ Input field `previewImageFile` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplateEsdSourceInput`

### 23-Jun-2026

#### 🔴 Breaking Changes (1)

##### Supply

###### Fields

Δ Field `SupSolutionTemplateKeyFeatureGroupAttribute.value` changed type from `String!` to `String`

#### ✅ Non-Breaking Changes (5)

##### Supply

###### 🔍 Query

\+ Field `supRefDesignsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supRefDesignsByIds`

Δ Field `Query.supRefDesignByIds` is deprecated

Δ Directive `deprecated` was added to `Query.supRefDesignByIds`

###### Input / Payload

Δ Input field `SupSolutionTemplateKeyFeatureGroupAttributeInput.value` changed type from `String!` to `String`

### 19-Jun-2026

#### 🔴 Breaking Changes (30)

##### Design

###### ✏️ Mutation

− Field `design` (deprecated) was removed from object type `Mutation`

###### Types

− Type `DesignMutations` was removed

− Type `DesignPreviewMutations` was removed

− Type `RuleCheck_Preview` was removed

− Type `RuleCheckConfiguration_Preview` was removed

− Type `RuleCheckExecutionPart_Preview` was removed

− Type `RuleViolationRelatedObject_Preview` was removed

###### Fields

− Field `latestGenerationByFileId` was removed from object type `DesignPreviewQueries`

Δ Field `DesignPreviewQueries.latestGeneration` changed type from `DesignDataGeneration_Preview!` to `DesignDataGeneration_Preview`

Δ Field `DesignPreviewQueries.latestGenerationByUploadId` changed type from `DesignDataGeneration_Preview!` to `DesignDataGeneration_Preview`

Δ Field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId` changed type from `RuleCheckAggregateExecution_Preview!` to `RuleCheckAggregateExecution_Preview`

Δ Field `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId` changed type from `RuleCheckAggregateExecution_Preview!` to `RuleCheckAggregateExecution_Preview`

Δ Field `DesignPreviewQueries.ruleCheckById` changed type from `RuleCheck_Preview` to `RuleCheck`

Δ Field `DesignPreviewQueries.ruleCheckConfiguration` changed type from `RuleCheckConfiguration_Preview!` to `RuleCheckConfiguration!`

Δ Field `DesignPreviewQueries.ruleCheckExecutions` changed type from `[RuleCheckExecution_Preview]!` to `[RuleCheckExecution_Preview]`

Δ Field `DesignPreviewQueries.ruleCheckExecutionsByDesignId` changed type from `[RuleCheckExecution_Preview!]!` to `[RuleCheckExecution_Preview!]`

Δ Field `DesignPreviewQueries.ruleCheckExecutionsByReleaseId` changed type from `[RuleCheckExecution_Preview!]!` to `[RuleCheckExecution_Preview!]`

Δ Field `DesignPreviewQueries.ruleCheckLatestExecution` changed type from `RuleCheckExecution_Preview!` to `RuleCheckExecution_Preview`

Δ Field `DesignPreviewQueries.ruleChecksByAuth` changed type from `[RuleCheck_Preview!]!` to `[RuleCheck!]!`

Δ Field `DesignPreviewQueries.ruleChecksByIds` changed type from `[RuleCheck_Preview]!` to `[RuleCheck]!`

Δ Field `DesignRuleCheckExecuteOnUploadPayload.ruleCheckExecution_Preview` changed type from `RuleCheckExecution_Preview` to `RuleCheckExecution!`

Δ Field `DesignRuleCheckExecutePayload.ruleCheckExecution_Preview` changed type from `RuleCheckExecution_Preview` to `RuleCheckExecution!`

Δ Field `RuleCheckAggregateExecution_Preview.parts` changed type from `[RuleCheckExecutionPart_Preview!]!` to `[RuleCheckExecutionPart!]!`

Δ Field `RuleCheckAggregateExecution_Preview.ruleChecks` changed type from `[RuleCheckExecutionPart_Preview!]` to `[RuleCheckExecutionPart!]`

Δ Field `RuleCheckExecution_Preview.parts` changed type from `[RuleCheckExecutionPart_Preview!]!` to `[RuleCheckExecutionPart!]!`

Δ Field `RuleCheckExecution_Preview.ruleChecks` changed type from `[RuleCheckExecutionPart_Preview!]` to `[RuleCheckExecutionPart!]`

Δ Field `RuleViolation_Preview.boundingRectangle` changed type from `DesignDataRectangle_Preview` to `RuleViolationRectangle`

Δ Field `RuleViolation_Preview.location` changed type from `DesignDataLocation_Preview` to `RuleViolationLocation`

Δ Field `RuleViolation_Preview.relatedObjects` changed type from `[RuleViolationRelatedObject_Preview!]!` to `[RuleViolationRelatedObject!]!`

Δ Field `RuleViolation_Preview.ruleCheck` changed type from `RuleCheckExecutionPart_Preview!` to `RuleCheckExecutionPart!`

#### ✅ Non-Breaking Changes (166)

##### Design

###### Types

\+ Type `DesignDataGeneration` was added

Δ Object type `DesignDataGeneration` has description `**Experimental** Represents a design data generation process and its result.`

\+ Type `LatestGenerationQueries` was added

Δ Object type `LatestGenerationQueries` has description `**Experimental** The entry point for queries related to the latest design data generation.`

\+ Type `RuleCheck` was added

Δ Object type `RuleCheck` has description `**Experimental** Represents a rule check definition.`

\+ Type `RuleCheckAggregateExecution` was added

Δ Object type `RuleCheckAggregateExecution` has description `**Experimental** Represents the aggregated result of one or more rule check executions for a design.`

\+ Type `RuleCheckConfiguration` was added

Δ Object type `RuleCheckConfiguration` has description `**Experimental** Represents current rule check configuration.`

\+ Type `RuleCheckExecution` was added

Δ Object type `RuleCheckExecution` has description `**Experimental** Represents the execution of rule checks against a design.`

\+ Type `RuleCheckExecutionPart` was added

Δ Object type `RuleCheckExecutionPart` has description '**Experimental** Represents the definition of a single rule check (one part of the execution) at the time of execution and it\`s current status.\`

\+ Type `RuleCheckExecutionQueries` was added

Δ Object type `RuleCheckExecutionQueries` has description `**Experimental** The entry point for queries related to design rule checks.`

\+ Type `RuleCheckQueries` was added

Δ Object type `RuleCheckQueries` has description `**Experimental** The entry point for queries related to design rule checks.`

\+ Type `RuleViolation` was added

Δ Object type `RuleViolation` has description `**Experimental** Represents a violation detected during a rule check execution.`

\+ Type `RuleViolationLocation` was added

Δ Object type `RuleViolationLocation` has description `**Experimental** Represents a 2D coordinate location associated with a rule violation.`

\+ Type `RuleViolationRectangle` was added

Δ Object type `RuleViolationRectangle` has description `**Experimental** Represents an axis-aligned bounding rectangle associated with a rule violation.`

\+ Type `RuleViolationRelatedObject` was added

Δ Object type `RuleViolationRelatedObject` has description `**Experimental** Represents a design object related to a rule violation.`

###### Arguments

\+ Argument `designId: ID!` added to `LatestGenerationQueries.byDesignId`

\+ Argument `revisionId: String` added to `LatestGenerationQueries.byDesignId`

\+ Argument `uploadId: String!` added to `LatestGenerationQueries.byUploadId`

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byDesignId`

\+ Argument `revisionId: String!` added to `RuleCheckExecutionQueries.byDesignId`

\+ Argument `where: RuleCheckExecutionFilterInput` added to `RuleCheckExecutionQueries.byDesignId`

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byDesignIdAggregated`

\+ Argument `revisionId: String` added to `RuleCheckExecutionQueries.byDesignIdAggregated`

\+ Argument `where: RuleCheckExecutionFilterInput` added to `RuleCheckExecutionQueries.byDesignIdAggregated`

\+ Argument `id: ID!` added to `RuleCheckExecutionQueries.byId`

\+ Argument `ids: [ID!]!` added to `RuleCheckExecutionQueries.byIds`

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byReleaseId`

\+ Argument `releaseId: ID!` added to `RuleCheckExecutionQueries.byReleaseId`

\+ Argument `where: RuleCheckExecutionFilterInput` added to `RuleCheckExecutionQueries.byReleaseId`

\+ Argument `designId: ID!` added to `RuleCheckExecutionQueries.byReleaseIdAggregated`

\+ Argument `releaseId: ID!` added to `RuleCheckExecutionQueries.byReleaseIdAggregated`

\+ Argument `where: RuleCheckExecutionFilterInput` added to `RuleCheckExecutionQueries.byReleaseIdAggregated`

\+ Argument `id: ID!` added to `RuleCheckQueries.byId`

\+ Argument `ids: [ID!]!` added to `RuleCheckQueries.byIds`

###### Fields

\+ Field `designData_Preview` was added to object type `DesignDataGeneration`

\+ Field `designId` was added to object type `DesignDataGeneration`

\+ Field `message` was added to object type `DesignDataGeneration`

\+ Field `revisionId` was added to object type `DesignDataGeneration`

\+ Field `status` was added to object type `DesignDataGeneration`

\+ Field `uploadId` was added to object type `DesignDataGeneration`

\+ Field `byDesignId` was added to object type `LatestGenerationQueries`

\+ Field `byUploadId` was added to object type `LatestGenerationQueries`

\+ Field `actualErrorReportLevel` was added to object type `RuleCheck`

\+ Field `defaultErrorReportLevel` was added to object type `RuleCheck`

\+ Field `description` was added to object type `RuleCheck`

\+ Field `id` was added to object type `RuleCheck`

\+ Field `name` was added to object type `RuleCheck`

\+ Field `type` was added to object type `RuleCheck`

\+ Field `designId` was added to object type `RuleCheckAggregateExecution`

\+ Field `executions` was added to object type `RuleCheckAggregateExecution`

\+ Field `parts` was added to object type `RuleCheckAggregateExecution`

\+ Field `revisionId` was added to object type `RuleCheckAggregateExecution`

\+ Field `status` was added to object type `RuleCheckAggregateExecution`

\+ Field `violations` was added to object type `RuleCheckAggregateExecution`

\+ Field `features` was added to object type `RuleCheckConfiguration`

\+ Field `staleStatusThreshold` was added to object type `RuleCheckConfiguration`

\+ Field `designId` was added to object type `RuleCheckExecution`

\+ Field `finishedAt` was added to object type `RuleCheckExecution`

\+ Field `id` was added to object type `RuleCheckExecution`

\+ Field `parts` was added to object type `RuleCheckExecution`

\+ Field `reason` was added to object type `RuleCheckExecution`

\+ Field `revisionId` was added to object type `RuleCheckExecution`

\+ Field `source` was added to object type `RuleCheckExecution`

\+ Field `startedAt` was added to object type `RuleCheckExecution`

\+ Field `startedByUserId` was added to object type `RuleCheckExecution`

\+ Field `status` was added to object type `RuleCheckExecution`

\+ Field `uploadId` was added to object type `RuleCheckExecution`

\+ Field `violations` was added to object type `RuleCheckExecution`

\+ Field `actualErrorReportLevel` was added to object type `RuleCheckExecutionPart`

\+ Field `currentRule` was added to object type `RuleCheckExecutionPart`

\+ Field `defaultErrorReportLevel` was added to object type `RuleCheckExecutionPart`

\+ Field `description` was added to object type `RuleCheckExecutionPart`

\+ Field `id` was added to object type `RuleCheckExecutionPart`

\+ Field `name` was added to object type `RuleCheckExecutionPart`

\+ Field `status` was added to object type `RuleCheckExecutionPart`

\+ Field `type` was added to object type `RuleCheckExecutionPart`

\+ Field `byDesignId` was added to object type `RuleCheckExecutionQueries`

\+ Field `byDesignIdAggregated` was added to object type `RuleCheckExecutionQueries`

\+ Field `byId` was added to object type `RuleCheckExecutionQueries`

\+ Field `byIds` was added to object type `RuleCheckExecutionQueries`

\+ Field `byReleaseId` was added to object type `RuleCheckExecutionQueries`

\+ Field `byReleaseIdAggregated` was added to object type `RuleCheckExecutionQueries`

\+ Field `byAuth` was added to object type `RuleCheckQueries`

\+ Field `byId` was added to object type `RuleCheckQueries`

\+ Field `byIds` was added to object type `RuleCheckQueries`

\+ Field `configuration` was added to object type `RuleCheckQueries`

\+ Field `boundingRectangle` was added to object type `RuleViolation`

\+ Field `documentId` was added to object type `RuleViolation`

\+ Field `errorReportLevel` was added to object type `RuleViolation`

\+ Field `errorText` was added to object type `RuleViolation`

\+ Field `location` was added to object type `RuleViolation`

\+ Field `relatedObjects` was added to object type `RuleViolation`

\+ Field `ruleCheck` was added to object type `RuleViolation`

\+ Field `ruleFailureCode` was added to object type `RuleViolation`

\+ Field `variantId` was added to object type `RuleViolation`

\+ Field `variantName` was added to object type `RuleViolation`

\+ Field `x` was added to object type `RuleViolationLocation`

\+ Field `y` was added to object type `RuleViolationLocation`

\+ Field `bottom` was added to object type `RuleViolationRectangle`

\+ Field `left` was added to object type `RuleViolationRectangle`

\+ Field `right` was added to object type `RuleViolationRectangle`

\+ Field `top` was added to object type `RuleViolationRectangle`

\+ Field `boundingRectangle` was added to object type `RuleViolationRelatedObject`

\+ Field `designator` was added to object type `RuleViolationRelatedObject`

\+ Field `documentId` was added to object type `RuleViolationRelatedObject`

\+ Field `location` was added to object type `RuleViolationRelatedObject`

\+ Field `name` was added to object type `RuleViolationRelatedObject`

\+ Field `type` was added to object type `RuleViolationRelatedObject`

\+ Field `uniqueId` was added to object type `RuleViolationRelatedObject`

\+ Field `variantId` was added to object type `RuleViolationRelatedObject`

\+ Field `variantName` was added to object type `RuleViolationRelatedObject`

\+ Field `version` was added to object type `DesignData_Preview`

Δ Field `DesignPreviewQueries.latestGeneration` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.latestGeneration`

Δ Field `DesignPreviewQueries.latestGenerationByUploadId` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.latestGenerationByUploadId`

Δ Field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

Δ Field `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

Δ Field `DesignPreviewQueries.ruleCheckById` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckById`

Δ Field `DesignPreviewQueries.ruleCheckConfiguration` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckConfiguration`

Δ Field `DesignPreviewQueries.ruleCheckExecution` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckExecution`

Δ Field `DesignPreviewQueries.ruleCheckExecutions` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckExecutions`

Δ Field `DesignPreviewQueries.ruleCheckExecutionsByDesignId` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckExecutionsByDesignId`

Δ Field `DesignPreviewQueries.ruleCheckExecutionsByReleaseId` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckExecutionsByReleaseId`

Δ Field `DesignPreviewQueries.ruleCheckLatestExecution` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleCheckLatestExecution`

Δ Field `DesignPreviewQueries.ruleChecksByAuth` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleChecksByAuth`

Δ Field `DesignPreviewQueries.ruleChecksByIds` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewQueries.ruleChecksByIds`

\+ Field `latestGeneration` was added to object type `DesignQueries`

\+ Field `ruleCheck` was added to object type `DesignQueries`

\+ Field `ruleCheckExecution` was added to object type `DesignQueries`

\+ Field `ruleCheckExecution` was added to object type `DesignRuleCheckExecuteOnUploadPayload`

Δ Field `DesignRuleCheckExecuteOnUploadPayload.ruleCheckExecution_Preview` is deprecated

Δ Directive `deprecated` was added to `DesignRuleCheckExecuteOnUploadPayload.ruleCheckExecution_Preview`

\+ Field `ruleCheckExecution` was added to object type `DesignRuleCheckExecutePayload`

Δ Field `DesignRuleCheckExecutePayload.ruleCheckExecution_Preview` is deprecated

Δ Directive `deprecated` was added to `DesignRuleCheckExecutePayload.ruleCheckExecution_Preview`

Δ Field `RuleViolation_Preview.ruleNameWithVariant` is deprecated

Δ Directive `deprecated` was added to `RuleViolation_Preview.ruleNameWithVariant`

###### Input / Payload

\+ Input field `clientExecutionId` of type `String` was added to input object type `DesignRuleCheckExecuteInput`

Δ Input field `DesignRuleCheckExecuteInput.idempotencyToken` changed type from `String!` to `String`

Δ Directive `deprecated` was added to input field `idempotencyToken` in input object `DesignRuleCheckExecuteInput`

\+ Input field `clientExecutionId` of type `String` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

Δ Input field `DesignRuleCheckExecuteOnUploadInput.idempotencyToken` changed type from `String!` to `String`

Δ Directive `deprecated` was added to input field `idempotencyToken` in input object `DesignRuleCheckExecuteOnUploadInput`

### 17-Jun-2026

#### ✅ Non-Breaking Changes (2)

##### Supply

###### Input / Payload

\+ Input field `releaseDate` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

##### System Design

###### Input / Payload

\+ Input field `applicationVersion` of type `String` was added to input object type `SysSdmCreateSystemModelVersionInput`

### 16-Jun-2026

#### ✅ Non-Breaking Changes (111)

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `supSoftwareProjectPatchParameters` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectPatchParametersInput!` added to `Mutation.supSoftwareProjectPatchParameters`

\+ Field `supSoftwareProjectSetParameters` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectSetParametersInput!` added to `Mutation.supSoftwareProjectSetParameters`

###### Types

\+ Type `SupSoftwareProjectPatchParametersPayload` was added

Δ Object type `SupSoftwareProjectPatchParametersPayload` has description `Payload returned after patching parameters on a software project.`

\+ Type `SupSoftwareProjectSetParametersPayload` was added

Δ Object type `SupSoftwareProjectSetParametersPayload` has description `Payload returned after setting parameters on a software project.`

\+ Type `SupSoftwareProjectPatchParametersError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectPatchParametersError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectPatchParametersError`

\+ Type `SupSoftwareProjectSetParametersError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectSetParametersError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectSetParametersError`

\+ Type `SupSoftwareProjectParameterInfoInput` was added

Δ Object type `SupSoftwareProjectParameterInfoInput` has description `Identifies a parameter by its title.`

\+ Type `SupSoftwareProjectParameterInput` was added

Δ Object type `SupSoftwareProjectParameterInput` has description `A parameter and its values.`

\+ Type `SupSoftwareProjectPatchParametersInput` was added

Δ Object type `SupSoftwareProjectPatchParametersInput` has description `Input for patching parameters on a software project.`

\+ Type `SupSoftwareProjectSetParametersInput` was added

Δ Object type `SupSoftwareProjectSetParametersInput` has description `Input for replacing all parameters on a software project.`

###### Fields

\+ Field `errors` was added to object type `SupSoftwareProjectPatchParametersPayload`

\+ Field `success` was added to object type `SupSoftwareProjectPatchParametersPayload`

\+ Field `errors` was added to object type `SupSoftwareProjectSetParametersPayload`

\+ Field `success` was added to object type `SupSoftwareProjectSetParametersPayload`

###### Input / Payload

\+ Input field `title` of type `String!` was added to input object type `SupSoftwareProjectParameterInfoInput`

\+ Input field `parameter` of type `SupSoftwareProjectParameterInfoInput!` was added to input object type `SupSoftwareProjectParameterInput`

\+ Input field `values` of type `[String!]!` was added to input object type `SupSoftwareProjectParameterInput`

\+ Input field `addParameters` of type `[SupSoftwareProjectParameterInput!]` was added to input object type `SupSoftwareProjectPatchParametersInput`

\+ Input field `removeParameters` of type `[SupSoftwareProjectParameterInfoInput!]` was added to input object type `SupSoftwareProjectPatchParametersInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SupSoftwareProjectPatchParametersInput`

\+ Input field `parameters` of type `[SupSoftwareProjectParameterInput!]` was added to input object type `SupSoftwareProjectSetParametersInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SupSoftwareProjectSetParametersInput`

##### Supply

###### ✏️ Mutation

\+ Field `supEvalKitPatchParameters` was added to object type `Mutation`

\+ Argument `input: SupEvalKitPatchParametersInput!` added to `Mutation.supEvalKitPatchParameters`

\+ Field `supEvalKitSetParameters` was added to object type `Mutation`

\+ Argument `input: SupEvalKitSetParametersInput!` added to `Mutation.supEvalKitSetParameters`

\+ Field `supSolutionTemplatePatchKeyFeatureGroups` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchKeyFeatureGroupsInput!` added to `Mutation.supSolutionTemplatePatchKeyFeatureGroups`

\+ Field `supSolutionTemplateSetKeyFeatureGroups` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetKeyFeatureGroupsInput!` added to `Mutation.supSolutionTemplateSetKeyFeatureGroups`

###### Types

\+ Type `SupEvalKitPatchParametersPayload` was added

Δ Object type `SupEvalKitPatchParametersPayload` has description `Payload returned after patching parameters on an evaluation kit.`

\+ Type `SupEvalKitSetParametersPayload` was added

Δ Object type `SupEvalKitSetParametersPayload` has description `Payload returned after setting parameters on an evaluation kit.`

\+ Type `SupSolutionTemplateInvalidDataError` was added

Δ `SupSolutionTemplateInvalidDataError` object implements `Error` interface

\+ Type `SupSolutionTemplatePatchKeyFeatureGroupsPayload` was added

\+ Type `SupSolutionTemplateSetKeyFeatureGroupsPayload` was added

\+ Type `SupEvalKitPatchParametersError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitPatchParametersError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitPatchParametersError`

\+ Type `SupEvalKitSetParametersError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitSetParametersError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitSetParametersError`

\+ Type `SupSolutionTemplatePatchKeyFeatureGroupsError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchKeyFeatureGroupsError`

\+ Member `SupSolutionTemplateInvalidDataError` was added to Union type `SupSolutionTemplatePatchKeyFeatureGroupsError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchKeyFeatureGroupsError`

\+ Type `SupSolutionTemplateSetKeyFeatureGroupsError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetKeyFeatureGroupsError`

\+ Member `SupSolutionTemplateInvalidDataError` was added to Union type `SupSolutionTemplateSetKeyFeatureGroupsError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetKeyFeatureGroupsError`

\+ Type `SupEvalKitParameterInfoInput` was added

Δ Object type `SupEvalKitParameterInfoInput` has description `Identifies a parameter by its title.`

\+ Type `SupEvalKitParameterInput` was added

Δ Object type `SupEvalKitParameterInput` has description `A parameter and its values.`

\+ Type `SupEvalKitPatchParametersInput` was added

Δ Object type `SupEvalKitPatchParametersInput` has description `Input for patching parameters on an evaluation kit.`

\+ Type `SupEvalKitSetParametersInput` was added

Δ Object type `SupEvalKitSetParametersInput` has description `Input for replacing all parameters on an evaluation kit.`

\+ Type `SupSolutionTemplateKeyFeatureGroupAttributeInput` was added

\+ Type `SupSolutionTemplateKeyFeatureGroupInput` was added

\+ Type `SupSolutionTemplatePatchKeyFeatureGroupInput` was added

\+ Type `SupSolutionTemplatePatchKeyFeatureGroupsInput` was added

\+ Type `SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput` was added

\+ Type `SupSolutionTemplateSetKeyFeatureGroupInput` was added

\+ Type `SupSolutionTemplateSetKeyFeatureGroupsInput` was added

###### Fields

\+ Field `errors` was added to object type `SupEvalKitPatchParametersPayload`

\+ Field `success` was added to object type `SupEvalKitPatchParametersPayload`

\+ Field `errors` was added to object type `SupEvalKitSetParametersPayload`

\+ Field `success` was added to object type `SupEvalKitSetParametersPayload`

\+ Field `errorCode` was added to object type `SupSolutionTemplateInvalidDataError`

\+ Field `message` was added to object type `SupSolutionTemplateInvalidDataError`

\+ Field `errors` was added to object type `SupSolutionTemplatePatchKeyFeatureGroupsPayload`

\+ Field `result` was added to object type `SupSolutionTemplatePatchKeyFeatureGroupsPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetKeyFeatureGroupsPayload`

\+ Field `result` was added to object type `SupSolutionTemplateSetKeyFeatureGroupsPayload`

###### Input / Payload

\+ Input field `title` of type `String!` was added to input object type `SupEvalKitParameterInfoInput`

\+ Input field `parameter` of type `SupEvalKitParameterInfoInput!` was added to input object type `SupEvalKitParameterInput`

\+ Input field `values` of type `[String!]!` was added to input object type `SupEvalKitParameterInput`

\+ Input field `addParameters` of type `[SupEvalKitParameterInput!]` was added to input object type `SupEvalKitPatchParametersInput`

\+ Input field `evaluationKitId` of type `ID!` was added to input object type `SupEvalKitPatchParametersInput`

\+ Input field `removeParameters` of type `[SupEvalKitParameterInfoInput!]` was added to input object type `SupEvalKitPatchParametersInput`

\+ Input field `evaluationKitId` of type `ID!` was added to input object type `SupEvalKitSetParametersInput`

\+ Input field `parameters` of type `[SupEvalKitParameterInput!]` was added to input object type `SupEvalKitSetParametersInput`

\+ Input field `name` of type `String!` was added to input object type `SupSolutionTemplateKeyFeatureGroupAttributeInput`

\+ Input field `value` of type `String!` was added to input object type `SupSolutionTemplateKeyFeatureGroupAttributeInput`

\+ Input field `attributes` of type `[SupSolutionTemplateKeyFeatureGroupAttributeInput!]!` was added to input object type `SupSolutionTemplateKeyFeatureGroupInput`

\+ Input field `order` of type `Int!` was added to input object type `SupSolutionTemplateKeyFeatureGroupInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateKeyFeatureGroupInput`

\+ Input field `addKeyFeatureGroups` of type `[SupSolutionTemplateKeyFeatureGroupInput!]` was added to input object type `SupSolutionTemplatePatchKeyFeatureGroupInput`

\+ Input field `removeKeyFeatureGroupAttributes` of type `[SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput!]` was added to input object type `SupSolutionTemplatePatchKeyFeatureGroupInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchKeyFeatureGroupInput`

\+ Input field `input` of type `SupSolutionTemplatePatchKeyFeatureGroupInput!` was added to input object type `SupSolutionTemplatePatchKeyFeatureGroupsInput`

\+ Input field `attributeNames` of type `[String!]` was added to input object type `SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput`

\+ Input field `keyFeatureGroupTitle` of type `String!` was added to input object type `SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput`

\+ Input field `keyFeatureGroups` of type `[SupSolutionTemplateKeyFeatureGroupInput!]` was added to input object type `SupSolutionTemplateSetKeyFeatureGroupInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetKeyFeatureGroupInput`

\+ Input field `input` of type `SupSolutionTemplateSetKeyFeatureGroupInput!` was added to input object type `SupSolutionTemplateSetKeyFeatureGroupsInput`

### 15-Jun-2026

#### ⚠️ Dangerous Changes (1)

##### Library Management

###### 🔍 Query

\+ Argument `minCoverage: Float!` (with default value) added to `Query.desPartSearchSuggestions`

#### ✅ Non-Breaking Changes (48)

##### Library Management

###### 🔍 Query

\+ Field `desPartSearchInference` was added to object type `Query`

\+ Argument `where: DesPartSearchInferenceFilterInput!` added to `Query.desPartSearchInference`

###### Types

\+ Type `DesPartSearchInferenceCategorySuggestion` was added

Δ Object type `DesPartSearchInferenceCategorySuggestion` has description `Represents a suggested category for an inferred search.`

\+ Type `DesPartSearchInferenceResult` was added

Δ Object type `DesPartSearchInferenceResult` has description `Represents inferred part search criteria.`

\+ Type `DesPartSearchInferenceStrippedSpan` was added

Δ Object type `DesPartSearchInferenceStrippedSpan` has description `Represents a term stripped from the original query during inference.`

\+ Type `DesPartSearchInferenceSuggestedAttribute` was added

Δ Object type `DesPartSearchInferenceSuggestedAttribute` has description `Represents an inferred search attribute.`

\+ Type `DesPartSearchInferenceFilterInput` was added

Δ Object type `DesPartSearchInferenceFilterInput` has description `Filter for inferring part search criteria from a keyword.`

###### Fields

\+ Field `category` was added to object type `DesPartSearchInferenceCategorySuggestion`

\+ Field `count` was added to object type `DesPartSearchInferenceCategorySuggestion`

\+ Field `attributes` was added to object type `DesPartSearchInferenceResult`

\+ Field `category` was added to object type `DesPartSearchInferenceResult`

\+ Field `manufacturer` was added to object type `DesPartSearchInferenceResult`

\+ Field `normalizedQuery` was added to object type `DesPartSearchInferenceResult`

\+ Field `strippedQuery` was added to object type `DesPartSearchInferenceResult`

\+ Field `strippedSpans` was added to object type `DesPartSearchInferenceResult`

\+ Field `suggestedCategories` was added to object type `DesPartSearchInferenceResult`

\+ Field `attributeShortnames` was added to object type `DesPartSearchInferenceStrippedSpan`

\+ Field `end` was added to object type `DesPartSearchInferenceStrippedSpan`

\+ Field `start` was added to object type `DesPartSearchInferenceStrippedSpan`

\+ Field `text` was added to object type `DesPartSearchInferenceStrippedSpan`

\+ Field `attribute` was added to object type `DesPartSearchInferenceSuggestedAttribute`

\+ Field `displayValues` was added to object type `DesPartSearchInferenceSuggestedAttribute`

\+ Field `name` was added to object type `DesPartSearchInferenceSuggestedAttribute`

\+ Field `shortname` was added to object type `DesPartSearchInferenceSuggestedAttribute`

\+ Field `unitsSymbol` was added to object type `DesPartSearchInferenceSuggestedAttribute`

\+ Field `values` was added to object type `DesPartSearchInferenceSuggestedAttribute`

###### Input / Payload

\+ Input field `attributes` of type `[DesPartSearchAttributeFilterInput!]` was added to input object type `DesPartSearchInferenceFilterInput`

\+ Input field `categories` of type `[String!]` was added to input object type `DesPartSearchInferenceFilterInput`

\+ Input field `inStockOnly` of type `Boolean` was added to input object type `DesPartSearchInferenceFilterInput`

\+ Input field `keyword` of type `String!` was added to input object type `DesPartSearchInferenceFilterInput`

\+ Input field `manufacturers` of type `[String!]` was added to input object type `DesPartSearchInferenceFilterInput`

##### System Design

###### Types

\+ Type `SysSdmAuthoringApplication` was added

Δ Object type `SysSdmAuthoringApplication` has description `**Experimental**`

\+ Type `SysSdmSystemModelVersionMetadata` was added

Δ Object type `SysSdmSystemModelVersionMetadata` has description `**Experimental**`

###### Fields

\+ Field `applicationId` was added to object type `SysSdmAuthoringApplication`

\+ Field `name` was added to object type `SysSdmAuthoringApplication`

\+ Field `version` was added to object type `SysSdmAuthoringApplication`

\+ Field `authoringApplication` was added to object type `SysSdmSystemModelVersionMetadata`

\+ Field `createdAt` was added to object type `SysSdmSystemModelVersionMetadata`

\+ Field `createdBy` was added to object type `SysSdmSystemModelVersionMetadata`

\+ Field `tags` was added to object type `SysSdmSystemModelVersionMetadata`

\+ Field `metadata` was added to object type `SysSdmSystemModelVersion`

### 12-Jun-2026

#### 🔴 Breaking Changes (1)

##### Supply

###### 🔍 Query

− Field `supRefDesignsByIds` was removed from object type `Query`

#### ✅ Non-Breaking Changes (19)

##### Design

###### ✏️ Mutation

\+ Field `desUpdateCommentThread` was added to object type `Mutation`

\+ Argument `input: DesUpdateCommentThreadInput!` added to `Mutation.desUpdateCommentThread`

###### Types

\+ Type `DesUpdateCommentThreadPayload` was added

Δ Object type `DesUpdateCommentThreadPayload` has description `Payload associated with updating a comment thread.`

\+ Type `DesCommentThreadStatus` was added

\+ Enum value `ACTIVE` was added to enum `DesCommentThreadStatus`

\+ Enum value `RESOLVED` was added to enum `DesCommentThreadStatus`

Δ Object type `DesCommentThreadStatus` has description `Specifies a comment thread status.`

\+ Type `DesUpdateCommentThreadInput` was added

Δ Object type `DesUpdateCommentThreadInput` has description `Input for updating a comment thread.`

###### Fields

\+ Field `errors` was added to object type `DesUpdateCommentThreadPayload`

###### Input / Payload

\+ Input field `commentThreadId` of type `String!` was added to input object type `DesUpdateCommentThreadInput`

\+ Input field `entityId` of type `ID!` was added to input object type `DesUpdateCommentThreadInput`

\+ Input field `status` of type `DesCommentThreadStatus!` was added to input object type `DesUpdateCommentThreadInput`

##### Platform

###### 🔍 Query

\+ Field `solSolutionsByIds` was added to object type `Query`

Δ Field `Query.solSolutionsByIds` is deprecated

\+ Argument `ids: [ID!]!` added to `Query.solSolutionsByIds`

Δ Directive `deprecated` was added to `Query.solSolutionsByIds`

##### Supply

###### Input / Payload

\+ Input field `releaseDate` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

### 11-Jun-2026

#### ✅ Non-Breaking Changes (88)

##### Renesas (preview)

###### Fields

\+ Field `bestPreviewImage` was added to object type `SupSoftwareProject`

\+ Field `previewImages` was added to object type `SupSoftwareProject`

##### Supply

###### 🔍 Query

\+ Field `supRefDesignsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supRefDesignsByIds`

\+ Field `supSolutionTemplateRefDesignSearch` was added to object type `Query`

\+ Argument `filter: SupSolutionTemplateRefDesignFilterInput` added to `Query.supSolutionTemplateRefDesignSearch`

\+ Argument `limit: Int!` added to `Query.supSolutionTemplateRefDesignSearch`

\+ Argument `order: [SupSolutionTemplateRefDesignOrderInput!]` added to `Query.supSolutionTemplateRefDesignSearch`

\+ Argument `q: String!` added to `Query.supSolutionTemplateRefDesignSearch`

\+ Argument `start: Int!` added to `Query.supSolutionTemplateRefDesignSearch`

###### ✏️ Mutation

\+ Field `supSolutionTemplateIndexSolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateIndexSolutionTemplateInput!` added to `Mutation.supSolutionTemplateIndexSolutionTemplate`

###### Types

\+ Type `SupSolutionTemplateIndexSolutionTemplatePayload` was added

Δ Object type `SupSolutionTemplateIndexSolutionTemplatePayload` has description `Payload associated with indexing a solution template.`

\+ Type `SupSolutionTemplateRefDesignApplicationBucket` was added

Δ Object type `SupSolutionTemplateRefDesignApplicationBucket` has description `Aggregation bucket for applications with application identifier + counts.`

\+ Type `SupSolutionTemplateRefDesignPublisherBucket` was added

Δ Object type `SupSolutionTemplateRefDesignPublisherBucket` has description `Aggregation bucket for reference design publishers with company identifier + counts.`

\+ Type `SupSolutionTemplateRefDesignResultSet` was added

Δ Object type `SupSolutionTemplateRefDesignResultSet` has description `Reference designs with pagination, aggregation information.`

\+ Type `SupSolutionTemplateRefDesignTagBucket` was added

Δ Object type `SupSolutionTemplateRefDesignTagBucket` has description `Aggregation bucket for reference design tags with name + counts.`

\+ Type `SupSolutionTemplateRefDesignTypeBucket` was added

Δ Object type `SupSolutionTemplateRefDesignTypeBucket` has description `Aggregation bucket for reference design types with type + counts.`

\+ Type `SupSolutionTemplateIndexSolutionTemplateError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateIndexSolutionTemplateError`

\+ Type `SupSolutionTemplateRefDesign` was added

\+ Member `SupRefDesign` was added to Union type `SupSolutionTemplateRefDesign`

\+ Member `SupSolutionTemplate` was added to Union type `SupSolutionTemplateRefDesign`

Δ Object type `SupSolutionTemplateRefDesign` has description `Union type for solution template and reference design types.`

\+ Type `SupSolutionTemplateRefDesignSortDirection` was added

\+ Enum value `ASC` was added to enum `SupSolutionTemplateRefDesignSortDirection`

\+ Enum value `DESC` was added to enum `SupSolutionTemplateRefDesignSortDirection`

Δ Object type `SupSolutionTemplateRefDesignSortDirection` has description `Specifies the sort direction for ordering results.`

\+ Type `SupSolutionTemplateRefDesignType` was added

\+ Enum value `DEMONSTRATION` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `DEVELOPMENT` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `EVALUATION` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `EXAMPLE` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `EXPANSION` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `REFERENCE_DESIGN` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `SOLUTION_TEMPLATE` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `STARTER` was added to enum `SupSolutionTemplateRefDesignType`

\+ Enum value `SYSTEM` was added to enum `SupSolutionTemplateRefDesignType`

\+ Type `SupSolutionTemplateIndexSolutionTemplateInput` was added

\+ Type `SupSolutionTemplateRefDesignFilterInput` was added

Δ Object type `SupSolutionTemplateRefDesignFilterInput` has description `Input for filtering reference designs by additional conditions.`

\+ Type `SupSolutionTemplateRefDesignOrderInput` was added

Δ Object type `SupSolutionTemplateRefDesignOrderInput` has description `Input for ordering solution templates or reference designs by one or more fields.`

###### Arguments

\+ Argument `size: Int` (with default value) added to `SupSolutionTemplateRefDesignResultSet.applicationAgg`

\+ Argument `size: Int` (with default value) added to `SupSolutionTemplateRefDesignResultSet.publisherAgg`

\+ Argument `size: Int` (with default value) added to `SupSolutionTemplateRefDesignResultSet.tagAgg`

\+ Argument `size: Int` (with default value) added to `SupSolutionTemplateRefDesignResultSet.typeAgg`

###### Fields

\+ Field `errors` was added to object type `SupSolutionTemplateIndexSolutionTemplatePayload`

\+ Field `success` was added to object type `SupSolutionTemplateIndexSolutionTemplatePayload`

\+ Field `applicationId` was added to object type `SupSolutionTemplateRefDesignApplicationBucket`

\+ Field `count` was added to object type `SupSolutionTemplateRefDesignApplicationBucket`

\+ Field `count` was added to object type `SupSolutionTemplateRefDesignPublisherBucket`

\+ Field `publisherId` was added to object type `SupSolutionTemplateRefDesignPublisherBucket`

\+ Field `applicationAgg` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `hits` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `publisherAgg` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `results` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `tagAgg` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `typeAgg` was added to object type `SupSolutionTemplateRefDesignResultSet`

\+ Field `count` was added to object type `SupSolutionTemplateRefDesignTagBucket`

\+ Field `name` was added to object type `SupSolutionTemplateRefDesignTagBucket`

\+ Field `count` was added to object type `SupSolutionTemplateRefDesignTypeBucket`

\+ Field `type` was added to object type `SupSolutionTemplateRefDesignTypeBucket`

\+ Field `releaseDate` was added to object type `SupSolutionTemplate`

###### Input / Payload

\+ Input field `solutionTemplateIds` of type `[ID!]!` was added to input object type `SupSolutionTemplateIndexSolutionTemplateInput`

\+ Input field `applicationIds` of type `[String]` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `categoryIds` of type `[String]` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `hasEvalBoard` of type `Boolean` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `isVerified` of type `Boolean` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `publisherIds` of type `[String]` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `statuses` of type `[SupSolutionTemplateStatus]` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `tags` of type `[String]` was added to input object type `SupSolutionTemplateRefDesignFilterInput`

\+ Input field `createdAt` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

\+ Input field `stableName` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

\+ Input field `title` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

\+ Input field `type` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

\+ Input field `updatedAt` of type `SupSolutionTemplateRefDesignSortDirection` was added to input object type `SupSolutionTemplateRefDesignOrderInput`

\+ Input field `releaseDate` of type `DateTime` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `requirementTemplate` of type `String` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `releaseDate` of type `SortEnumType` was added to input object type `SupSolutionTemplateSortInput`

\+ Input field `releaseDate` of type `DateTime` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `requirementTemplate` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

### 10-Jun-2026

#### ✅ Non-Breaking Changes (2)

##### Design

###### Input / Payload

Δ Input field `DesignRegisterUploadInput.designId` changed type from `ID!` to `ID`

Δ Directive `deprecated` was added to input field `designId` in input object `DesignRegisterUploadInput`

### 09-Jun-2026

#### ⚠️ Dangerous Changes (2)

##### Supply

###### Types

\+ Enum value `INVALID_DATA_INPUT` was added to enum `SupSolutionTemplateErrorCode`

\+ Enum value `SUP_SOLUTION_TEMPLATE_ITEM_CONFLICT` was added to enum `SupSolutionTemplateErrorCode`

#### ✅ Non-Breaking Changes (62)

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectParameterInfos` was added to object type `Query`

###### Types

\+ Type `SupSoftwareProjectParameter` was added

Δ Object type `SupSoftwareProjectParameter` has description `Represents a parameter in the software project.`

\+ Type `SupSoftwareProjectParameterInfo` was added

Δ Object type `SupSoftwareProjectParameterInfo` has description `Represents the information of a parameter in the software project.`

###### Fields

\+ Field `parameter` was added to object type `SupSoftwareProjectParameter`

\+ Field `values` was added to object type `SupSoftwareProjectParameter`

\+ Field `title` was added to object type `SupSoftwareProjectParameterInfo`

\+ Field `parameters` was added to object type `SupSoftwareProject`

##### Supply

###### 🔍 Query

\+ Field `supEvalKitParameterInfos` was added to object type `Query`

###### ✏️ Mutation

\+ Field `supSolutionTemplatePatchTags` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplatePatchTagsInput!` added to `Mutation.supSolutionTemplatePatchTags`

\+ Field `supSolutionTemplateSetTags` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateSetTagsInput!` added to `Mutation.supSolutionTemplateSetTags`

###### Types

\+ Type `SupEvalKitParameter` was added

Δ Object type `SupEvalKitParameter` has description `Represents a parameter in the evaluation kit.`

\+ Type `SupEvalKitParameterInfo` was added

Δ Object type `SupEvalKitParameterInfo` has description `Represents the information of a parameter in the evaluation kit.`

\+ Type `SupSolutionTemplateKeyFeatureGroup` was added

\+ Type `SupSolutionTemplateKeyFeatureGroupAttribute` was added

\+ Type `SupSolutionTemplatePatchTagsPayload` was added

\+ Type `SupSolutionTemplateResultPayload` was added

\+ Type `SupSolutionTemplateSetTagsPayload` was added

\+ Type `SupSolutionTemplateTag` was added

Δ Object type `SupSolutionTemplateTag` has description `Represents a tag for categorizing a solution template.`

\+ Type `SupSolutionTemplatePatchTagsError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplatePatchTagsError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplatePatchTagsError`

\+ Type `SupSolutionTemplateSetTagsError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateSetTagsError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateSetTagsError`

\+ Type `SupSolutionTemplatePatchTagsInput` was added

\+ Type `SupSolutionTemplateSetTagsInput` was added

\+ Type `SupSolutionTemplateTagInput` was added

###### Fields

\+ Field `parameter` was added to object type `SupEvalKitParameter`

\+ Field `values` was added to object type `SupEvalKitParameter`

\+ Field `title` was added to object type `SupEvalKitParameterInfo`

\+ Field `attributes` was added to object type `SupSolutionTemplateKeyFeatureGroup`

\+ Field `order` was added to object type `SupSolutionTemplateKeyFeatureGroup`

\+ Field `title` was added to object type `SupSolutionTemplateKeyFeatureGroup`

\+ Field `name` was added to object type `SupSolutionTemplateKeyFeatureGroupAttribute`

\+ Field `value` was added to object type `SupSolutionTemplateKeyFeatureGroupAttribute`

\+ Field `errors` was added to object type `SupSolutionTemplatePatchTagsPayload`

\+ Field `result` was added to object type `SupSolutionTemplatePatchTagsPayload`

\+ Field `success` was added to object type `SupSolutionTemplateResultPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateSetTagsPayload`

\+ Field `result` was added to object type `SupSolutionTemplateSetTagsPayload`

\+ Field `category` was added to object type `SupSolutionTemplateTag`

\+ Field `value` was added to object type `SupSolutionTemplateTag`

\+ Field `parameters` was added to object type `SupEvalKit`

\+ Field `releaseDate` was added to object type `SupRefDesign`

\+ Field `keyFeatureGroups` was added to object type `SupSolutionTemplate`

\+ Field `requirementTemplate` was added to object type `SupSolutionTemplate`

\+ Field `tags` was added to object type `SupSolutionTemplate`

\+ Field `previewUrl` was added to object type `SupSolutionTemplateESDSource`

###### Input / Payload

\+ Input field `addTags` of type `[SupSolutionTemplateTagInput!]` was added to input object type `SupSolutionTemplatePatchTagsInput`

\+ Input field `removeTags` of type `[SupSolutionTemplateTagInput!]` was added to input object type `SupSolutionTemplatePatchTagsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplatePatchTagsInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SupSolutionTemplateSetTagsInput`

\+ Input field `tags` of type `[SupSolutionTemplateTagInput!]!` was added to input object type `SupSolutionTemplateSetTagsInput`

\+ Input field `category` of type `String!` was added to input object type `SupSolutionTemplateTagInput`

\+ Input field `value` of type `String!` was added to input object type `SupSolutionTemplateTagInput`

### 05-Jun-2026

#### 🔴 Breaking Changes (27)

##### Common

###### Types

− Type `UploadRuleCheckExecutionInput_Preview` was removed

##### Design

###### ✏️ Mutation

− Field `designExecuteRuleCheck_Preview` was removed from object type `Mutation`

− Field `designExecuteRuleCheckOnUpload_Preview` was removed from object type `Mutation`

− Field `designRegisterUpload_Preview` was removed from object type `Mutation`

###### Types

− Type `DesignUploadResult_Preview` was removed

− Type `DesignDataDesignUploadRegistrationInput_Preview` was removed

− Type `DesignRuleCheckExecutionInput_Preview` was removed

− Type `RuleCheckExecution_PreviewFilterInput` was removed

− Type `RuleCheckExecutionConfigurationInput_Preview` was removed

− Type `RuleCheckExecutionConfigurationItemInput_Preview` was removed

− Type `RuleCheckExecutionReason_PreviewOperationFilterInput` was removed

− Type `RuleCheckExecutionSource_PreviewOperationFilterInput` was removed

###### Arguments

Δ Type for argument `input` on field `DesignPreviewMutations.executeRuleCheck` changed from `DesignRuleCheckExecutionInput_Preview!` to `DesignRuleCheckExecuteInput!`

Δ Type for argument `input` on field `DesignPreviewMutations.executeRuleCheckOnUpload` changed from `UploadRuleCheckExecutionInput_Preview!` to `DesignRuleCheckExecuteOnUploadInput!`

Δ Type for argument `input` on field `DesignPreviewMutations.registerDesignUpload` changed from `DesignDataDesignUploadRegistrationInput_Preview!` to `DesignRegisterUploadInput!`

Δ Type for argument `where` on field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId` changed from `RuleCheckExecution_PreviewFilterInput` to `RuleCheckExecutionFilterInput`

Δ Type for argument `where` on field `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId` changed from `RuleCheckExecution_PreviewFilterInput` to `RuleCheckExecutionFilterInput`

Δ Type for argument `where` on field `DesignPreviewQueries.ruleCheckExecutionsByDesignId` changed from `RuleCheckExecution_PreviewFilterInput` to `RuleCheckExecutionFilterInput`

Δ Type for argument `where` on field `DesignPreviewQueries.ruleCheckExecutionsByReleaseId` changed from `RuleCheckExecution_PreviewFilterInput` to `RuleCheckExecutionFilterInput`

###### Fields

Δ Field `DesignDataComponent_Preview.tagTypes` changed type from `[String!]!` to `[String!]`

Δ Field `DesignPreviewMutations.registerDesignUpload` changed type from `DesignUploadResult_Preview!` to `UploadRegistrationResult!`

Δ Field `RuleCheckAggregateExecution_Preview.ruleChecks` changed type from `[RuleCheckExecutionPart_Preview!]!` to `[RuleCheckExecutionPart_Preview!]`

Δ Field `RuleCheckExecution_Preview.ruleChecks` changed type from `[RuleCheckExecutionPart_Preview!]!` to `[RuleCheckExecutionPart_Preview!]`

##### Library Management

###### Fields

Δ Field `DesPartBomUsage.alternativeForElementIds` changed type from `[String!]!` to `[String!]`

Δ Field `DesPartBomUsage.alternativePartsForElementIds` changed type from `[DesPartBomAlternativePartsEntry!]!` to `[DesPartBomAlternativePartsEntry!]`

Δ Field `DesPartProjectUsage.alternativeForElementIds` changed type from `[String!]!` to `[String!]`

Δ Field `DesPartProjectUsage.alternativePartsForElementIds` changed type from `[DesPartBomAlternativePartsEntry!]!` to `[DesPartBomAlternativePartsEntry!]`

#### ⚠️ Dangerous Changes (8)

##### Design

###### ✏️ Mutation

− Argument `reason` was removed from `@deprecated`

###### Fields

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

#### ✅ Non-Breaking Changes (84)

##### Common

###### Types

\+ Type `UploadRegistrationResult` was added

Δ Object type `UploadRegistrationResult` has description `**Experimental**`

###### Fields

\+ Field `uploadId` was added to object type `UploadRegistrationResult`

##### Design

###### ✏️ Mutation

\+ Field `designRegisterUpload` was added to object type `Mutation`

\+ Argument `input: DesignRegisterUploadInput!` added to `Mutation.designRegisterUpload`

\+ Field `designRuleCheckExecute` was added to object type `Mutation`

\+ Argument `input: DesignRuleCheckExecuteInput!` added to `Mutation.designRuleCheckExecute`

\+ Field `designRuleCheckExecuteOnUpload` was added to object type `Mutation`

\+ Argument `input: DesignRuleCheckExecuteOnUploadInput!` added to `Mutation.designRuleCheckExecuteOnUpload`

Δ Deprecation reason on field `Mutation.design` has changed from `Use top-level design mutations (e.g. designRegisterUpload_Preview, designExecuteRuleCheck_Preview, designExecuteRuleCheckOnUpload_Preview) instead. This field will be removed in a future version.` to `Use top-level design mutations (e.g. designRegisterUpload, designRuleCheckExecute, designRuleCheckExecuteOnUpload) instead. This field will be removed in a future version.`

###### Types

\+ Type `DesignRegisterUploadPayload` was added

Δ Object type `DesignRegisterUploadPayload` has description `**Experimental**`

\+ Type `DesignRuleCheckExecuteOnUploadPayload` was added

Δ Object type `DesignRuleCheckExecuteOnUploadPayload` has description `**Experimental**`

\+ Type `DesignRuleCheckExecutePayload` was added

Δ Object type `DesignRuleCheckExecutePayload` has description `**Experimental**`

\+ Type `DesignRegisterUploadInput` was added

Δ Object type `DesignRegisterUploadInput` has description `**Experimental** Represents input value for generate design data mutation.`

\+ Type `DesignRuleCheckExecuteInput` was added

Δ Object type `DesignRuleCheckExecuteInput` has description `**Experimental** Represents the input for executing rule checks on a design.`

\+ Type `DesignRuleCheckExecuteOnUploadInput` was added

Δ Object type `DesignRuleCheckExecuteOnUploadInput` has description `**Experimental** Represents the input for executing rule checks on an upload.`

\+ Type `DesignRuleCheckExecutionConfigurationInput` was added

Δ Object type `DesignRuleCheckExecutionConfigurationInput` has description `**Experimental** Represents the configuration of rule check execution, allowing to override certain traits of the rule check execution.`

\+ Type `DesignRuleCheckExecutionConfigurationItemInput` was added

Δ Object type `DesignRuleCheckExecutionConfigurationItemInput` has description `**Experimental** Represents the rule check configuration for a specific rule check execution, allowing to override certain traits of the rule check execution.`

\+ Type `RuleCheckExecutionFilterInput` was added

Δ Object type `RuleCheckExecutionFilterInput` has description `**Experimental** Represents the execution of rule checks against a design.`

\+ Type `RuleCheckExecutionReasonOperationFilterInput` was added

Δ Object type `RuleCheckExecutionReasonOperationFilterInput` has description `**Experimental**`

\+ Type `RuleCheckExecutionSourceOperationFilterInput` was added

Δ Object type `RuleCheckExecutionSourceOperationFilterInput` has description `**Experimental**`

###### Fields

\+ Field `designUploadResult` was added to object type `DesignRegisterUploadPayload`

\+ Field `ruleCheckExecution_Preview` was added to object type `DesignRuleCheckExecuteOnUploadPayload`

\+ Field `ruleCheckExecution_Preview` was added to object type `DesignRuleCheckExecutePayload`

Δ Deprecation reason on field `DesignDataComponent_Preview.tagTypes` has changed from `Use ComponentType instead.` to `Use componentType instead.`

Δ Deprecation reason on field `DesignDataComponent_Preview.uniqueId` has changed from `Use DesignComponentId instead.` to `Use designComponentId instead.`

Δ Deprecation reason on field `DesignDataPart_Preview.uniqueId` has changed from `Use DesignPartId instead.` to `Use designPartId instead.`

Δ Deprecation reason on field `DesignMutations.preview` has changed from `Use top-level design mutations (e.g. designRegisterUpload_Preview, designExecuteRuleCheck_Preview, designExecuteRuleCheckOnUpload_Preview) instead. This field will be removed in a future version.` to `Use top-level design mutations (e.g. designRegisterUpload, designRuleCheckExecute, designRuleCheckExecuteOnUpload) instead. This field will be removed in a future version.`

Δ Deprecation reason on field `DesignPreviewMutations.executeRuleCheck` has changed from `Use top-level designExecuteRuleCheck_Preview mutation instead. This mutation will be removed in a future version.` to `Use top-level designRuleCheckExecute mutation instead. This mutation will be removed in a future version.`

Δ Deprecation reason on field `DesignPreviewMutations.executeRuleCheckOnUpload` has changed from `Use top-level designExecuteRuleCheckOnUpload_Preview mutation instead. This mutation will be removed in a future version.` to `Use top-level designRuleCheckExecuteOnUpload mutation instead. This mutation will be removed in a future version.`

Δ Deprecation reason on field `DesignPreviewMutations.registerDesignUpload` has changed from `Use top-level designRegisterUpload_Preview mutation instead. This mutation will be removed in a future version.` to `Use top-level designRegisterUpload mutation instead. This mutation will be removed in a future version.`

###### Input / Payload

\+ Input field `designId` of type `ID!` was added to input object type `DesignRegisterUploadInput`

\+ Input field `fileId` of type `String!` was added to input object type `DesignRegisterUploadInput`

\+ Input field `configuration` of type `DesignRuleCheckExecutionConfigurationInput` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `designId` of type `ID!` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `idempotencyToken` of type `String!` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `reason` of type `String!` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `revisionId` of type `String` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `source` of type `String!` was added to input object type `DesignRuleCheckExecuteInput`

\+ Input field `configuration` of type `DesignRuleCheckExecutionConfigurationInput` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

\+ Input field `idempotencyToken` of type `String!` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

\+ Input field `reason` of type `String!` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

\+ Input field `source` of type `String!` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

\+ Input field `uploadId` of type `String!` was added to input object type `DesignRuleCheckExecuteOnUploadInput`

\+ Input field `ruleChecks` of type `[DesignRuleCheckExecutionConfigurationItemInput!]` was added to input object type `DesignRuleCheckExecutionConfigurationInput`

\+ Input field `errorReportLevel` of type `String!` was added to input object type `DesignRuleCheckExecutionConfigurationItemInput`

\+ Input field `name` of type `String` was added to input object type `DesignRuleCheckExecutionConfigurationItemInput`

\+ Input field `ruleCheckId` of type `ID!` was added to input object type `DesignRuleCheckExecutionConfigurationItemInput`

\+ Input field `and` of type `[RuleCheckExecutionFilterInput!]` was added to input object type `RuleCheckExecutionFilterInput`

\+ Input field `or` of type `[RuleCheckExecutionFilterInput!]` was added to input object type `RuleCheckExecutionFilterInput`

\+ Input field `reason` of type `RuleCheckExecutionReasonOperationFilterInput` was added to input object type `RuleCheckExecutionFilterInput`

\+ Input field `source` of type `RuleCheckExecutionSourceOperationFilterInput` was added to input object type `RuleCheckExecutionFilterInput`

\+ Input field `eq` of type `String` was added to input object type `RuleCheckExecutionReasonOperationFilterInput`

\+ Input field `in` of type `[String!]` was added to input object type `RuleCheckExecutionReasonOperationFilterInput`

\+ Input field `neq` of type `String` was added to input object type `RuleCheckExecutionReasonOperationFilterInput`

\+ Input field `nin` of type `[String!]` was added to input object type `RuleCheckExecutionReasonOperationFilterInput`

\+ Input field `eq` of type `String` was added to input object type `RuleCheckExecutionSourceOperationFilterInput`

\+ Input field `in` of type `[String!]` was added to input object type `RuleCheckExecutionSourceOperationFilterInput`

\+ Input field `neq` of type `String` was added to input object type `RuleCheckExecutionSourceOperationFilterInput`

\+ Input field `nin` of type `[String!]` was added to input object type `RuleCheckExecutionSourceOperationFilterInput`

##### Library Management

###### 🔍 Query

\+ Field `desPartGlobalPartByIds` was added to object type `Query`

\+ Argument `globalPartIds: [String!]!` added to `Query.desPartGlobalPartByIds`

###### Types

\+ Type `DesPartGlobalAlternativeItem` was added

Δ Object type `DesPartGlobalAlternativeItem` has description `An alternative global part.`

\+ Type `DesPartGlobalAlternativesResult` was added

Δ Object type `DesPartGlobalAlternativesResult` has description `The result of a global part alternatives lookup, grouped by provider.`

###### Fields

\+ Field `part` was added to object type `DesPartGlobalAlternativeItem`

\+ Field `providerInfo` was added to object type `DesPartGlobalAlternativeItem`

\+ Field `siliconExpertParts` was added to object type `DesPartGlobalAlternativesResult`

\+ Field `supplyParts` was added to object type `DesPartGlobalAlternativesResult`

\+ Field `z2DataParts` was added to object type `DesPartGlobalAlternativesResult`

\+ Field `alternatives` was added to object type `DesPartGlobalPart`

\+ Field `globalPartId` was added to object type `DesPartGlobalPart`

### 04-Jun-2026

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Fields

\+ Field `tokenExchangeSources` was added to object type `GloApp`

### 03-Jun-2026

#### 🔴 Breaking Changes (7)

##### Design

###### Types

− Type `RuleCheckPastDefinition_Preview` was removed

− Type `RuleCheckExecutionInput_Preview` was removed

###### Arguments

Δ Type for argument `input` on field `DesignPreviewMutations.executeRuleCheck` changed from `RuleCheckExecutionInput_Preview!` to `DesignRuleCheckExecutionInput_Preview!`

###### Fields

− Field `ruleCheckLatestExecutionByUploadId` was removed from object type `DesignPreviewQueries`

Δ Field `RuleCheckAggregateExecution_Preview.ruleChecks` changed type from `[RuleCheckPastDefinition_Preview!]!` to `[RuleCheckExecutionPart_Preview!]!`

Δ Field `RuleCheckExecution_Preview.ruleChecks` changed type from `[RuleCheckPastDefinition_Preview!]!` to `[RuleCheckExecutionPart_Preview!]!`

Δ Field `RuleViolation_Preview.ruleCheck` changed type from `RuleCheckPastDefinition_Preview!` to `RuleCheckExecutionPart_Preview!`

#### ⚠️ Dangerous Changes (3)

##### Design

###### Types

\+ Enum value `HARNESS_ENTITY` was added to enum `DesContentTypeKind`

\+ Enum value `HARNESS_ENTITY_TEMPLATE` was added to enum `DesContentTypeKind`

\+ Enum value `HARNESS_MODEL_TEMPLATES_CATALOG` was added to enum `DesFolderType`

#### ✅ Non-Breaking Changes (54)

##### Common

###### Types

\+ Type `UploadRuleCheckExecutionInput_Preview` was added

Δ Object type `UploadRuleCheckExecutionInput_Preview` has description `**Experimental** Represents the input for executing rule checks on an upload.`

###### Input / Payload

\+ Input field `configuration` of type `RuleCheckExecutionConfigurationInput_Preview` was added to input object type `UploadRuleCheckExecutionInput_Preview`

\+ Input field `idempotencyToken` of type `String!` was added to input object type `UploadRuleCheckExecutionInput_Preview`

\+ Input field `reason` of type `String!` was added to input object type `UploadRuleCheckExecutionInput_Preview`

\+ Input field `source` of type `String!` was added to input object type `UploadRuleCheckExecutionInput_Preview`

\+ Input field `uploadId` of type `String!` was added to input object type `UploadRuleCheckExecutionInput_Preview`

##### Design

###### ✏️ Mutation

\+ Field `designExecuteRuleCheck_Preview` was added to object type `Mutation`

\+ Argument `input: DesignRuleCheckExecutionInput_Preview!` added to `Mutation.designExecuteRuleCheck_Preview`

\+ Field `designExecuteRuleCheckOnUpload_Preview` was added to object type `Mutation`

\+ Argument `input: UploadRuleCheckExecutionInput_Preview!` added to `Mutation.designExecuteRuleCheckOnUpload_Preview`

\+ Field `designRegisterUpload_Preview` was added to object type `Mutation`

\+ Argument `input: DesignDataDesignUploadRegistrationInput_Preview!` added to `Mutation.designRegisterUpload_Preview`

Δ Field `Mutation.design` is deprecated

Δ Directive `deprecated` was added to `Mutation.design`

###### Types

\+ Type `RuleCheckConfiguration_Preview` was added

Δ Object type `RuleCheckConfiguration_Preview` has description `**Experimental** Represents current rule check configuration.`

\+ Type `RuleCheckExecutionPart_Preview` was added

Δ Object type `RuleCheckExecutionPart_Preview` has description '**Experimental** Represents the definition of a single rule check (one part of the execution) at the time of execution and it\`s current status.\`

\+ Type `DesignRuleCheckExecutionInput_Preview` was added

Δ Object type `DesignRuleCheckExecutionInput_Preview` has description `**Experimental** Represents the input for executing rule checks on a design.`

###### Arguments

\+ Argument `input: UploadRuleCheckExecutionInput_Preview!` added to `DesignPreviewMutations.executeRuleCheckOnUpload`

###### Fields

\+ Field `features` was added to object type `RuleCheckConfiguration_Preview`

\+ Field `staleStatusThreshold` was added to object type `RuleCheckConfiguration_Preview`

\+ Field `actualErrorReportLevel` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `currentRule` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `defaultErrorReportLevel` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `description` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `id` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `name` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `status` was added to object type `RuleCheckExecutionPart_Preview`

\+ Field `type` was added to object type `RuleCheckExecutionPart_Preview`

Δ Field `DesignMutations.preview` is deprecated

Δ Directive `deprecated` was added to `DesignMutations.preview`

\+ Field `executeRuleCheckOnUpload` was added to object type `DesignPreviewMutations`

Δ Field `DesignPreviewMutations.executeRuleCheckOnUpload` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewMutations.executeRuleCheckOnUpload`

Δ Field `DesignPreviewMutations.executeRuleCheck` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewMutations.executeRuleCheck`

Δ Field `DesignPreviewMutations.registerDesignUpload` is deprecated

Δ Directive `deprecated` was added to `DesignPreviewMutations.registerDesignUpload`

\+ Field `ruleCheckConfiguration` was added to object type `DesignPreviewQueries`

\+ Field `parts` was added to object type `RuleCheckAggregateExecution_Preview`

Δ Field `RuleCheckAggregateExecution_Preview.ruleChecks` is deprecated

Δ Directive `deprecated` was added to `RuleCheckAggregateExecution_Preview.ruleChecks`

\+ Field `parts` was added to object type `RuleCheckExecution_Preview`

Δ Field `RuleCheckExecution_Preview.ruleChecks` is deprecated

Δ Directive `deprecated` was added to `RuleCheckExecution_Preview.ruleChecks`

###### Input / Payload

\+ Input field `configuration` of type `RuleCheckExecutionConfigurationInput_Preview` was added to input object type `DesignRuleCheckExecutionInput_Preview`

\+ Input field `designId` of type `ID!` was added to input object type `DesignRuleCheckExecutionInput_Preview`

\+ Input field `idempotencyToken` of type `String!` was added to input object type `DesignRuleCheckExecutionInput_Preview`

\+ Input field `reason` of type `String!` was added to input object type `DesignRuleCheckExecutionInput_Preview`

\+ Input field `revisionId` of type `String` was added to input object type `DesignRuleCheckExecutionInput_Preview`

\+ Input field `source` of type `String!` was added to input object type `DesignRuleCheckExecutionInput_Preview`

### 01-Jun-2026

#### ✅ Non-Breaking Changes (23)

##### Library Management

###### Types

\+ Type `DesPartAlternativeItem` was added

Δ Object type `DesPartAlternativeItem` has description `An alternative part.`

\+ Type `DesPartAlternativeProviderInfo` was added

Δ Object type `DesPartAlternativeProviderInfo` has description `Provider-specific information about a part alternative.`

\+ Type `DesPartAlternativesResult` was added

Δ Object type `DesPartAlternativesResult` has description `The result of a part alternatives lookup, grouped by provider.`

\+ Type `DesPartBomAlternativePartsEntry` was added

###### Fields

\+ Field `part` was added to object type `DesPartAlternativeItem`

\+ Field `providerInfo` was added to object type `DesPartAlternativeItem`

\+ Field `comments` was added to object type `DesPartAlternativeProviderInfo`

\+ Field `compatibilityRating` was added to object type `DesPartAlternativeProviderInfo`

\+ Field `crossType` was added to object type `DesPartAlternativeProviderInfo`

\+ Field `crossTypeShort` was added to object type `DesPartAlternativeProviderInfo`

\+ Field `siliconExpertParts` was added to object type `DesPartAlternativesResult`

\+ Field `supplyParts` was added to object type `DesPartAlternativesResult`

\+ Field `z2DataParts` was added to object type `DesPartAlternativesResult`

\+ Field `alternativePartIds` was added to object type `DesPartBomAlternativePartsEntry`

\+ Field `elementId` was added to object type `DesPartBomAlternativePartsEntry`

\+ Field `alternatives` was added to object type `DesPart`

\+ Field `alternativeForElementIds` was added to object type `DesPartBomUsage`

\+ Field `alternativePartsForElementIds` was added to object type `DesPartBomUsage`

\+ Field `alternativeForElementIds` was added to object type `DesPartProjectUsage`

\+ Field `alternativePartsForElementIds` was added to object type `DesPartProjectUsage`

### 29-May-2026

#### 🔴 Breaking Changes (1)

##### Design

###### Arguments

Δ Type for argument `revisionId` on field `DesignPreviewQueries.ruleCheckExecutionsByDesignId` changed from `String` to `String!`

#### ✅ Non-Breaking Changes (1)

##### Design

###### Input / Payload

\+ Input field `name` of type `String` was added to input object type `RuleCheckExecutionConfigurationItemInput_Preview`

### 27-May-2026

#### 🔴 Breaking Changes (7)

##### Design

###### Arguments

− Argument `uploadGrid: ID!` was removed from field `DesignPreviewQueries.latestGenerationByUploadId`

\+ Argument `uploadId: String!` added to `DesignPreviewQueries.latestGenerationByUploadId`

Δ Type for argument `uploadId` on field `DesignPreviewQueries.ruleCheckLatestExecutionByUploadId` changed from `ID!` to `String!`

###### Fields

Δ Field `DesignDataGeneration_Preview.designId` changed type from `ID!` to `ID`

− Field `grid` was removed from object type `DesignUploadResult_Preview`

− Field `marketingBadge` was removed from object type `DesWorkspaceInfo`

Δ Field `RuleCheckExecution_Preview.designId` changed type from `ID!` to `ID`

#### ✅ Non-Breaking Changes (3)

##### Design

###### Fields

\+ Field `uploadId` was added to object type `DesignDataGeneration_Preview`

\+ Field `uploadId` was added to object type `DesignUploadResult_Preview`

\+ Field `uploadId` was added to object type `RuleCheckExecution_Preview`

### 25-May-2026

#### 🔴 Breaking Changes (38)

##### Design

###### Types

− Type `DesignDataErrorReportLevel_Preview` was removed

− Type `DesignDataGenerationStatus_Preview` was removed

− Type `DesignDataObjectType_Preview` was removed

− Type `DesignDataVariationKind_Preview` was removed

− Type `RuleCheckExecutionReason_Preview` was removed

− Type `RuleCheckExecutionSource_Preview` was removed

− Type `RuleCheckExecutionStatus_Preview` was removed

− Type `RuleCheckType_Preview` was removed

− Type `RuleFailureCode_Preview` was removed

− Type `RuleViolationErrorReportLevel_Preview` was removed

###### Fields

Δ Field `DesignDataCustomCheckConfigurationItem_Preview.errorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Field `DesignDataGeneration_Preview.status` changed type from `DesignDataGenerationStatus_Preview!` to `String!`

Δ Field `DesignDataVariation_Preview.kind` changed type from `DesignDataVariationKind_Preview!` to `String!`

Δ Field `RuleCheck_Preview.actualErrorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Field `RuleCheck_Preview.defaultErrorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Field `RuleCheck_Preview.type` changed type from `RuleCheckType_Preview!` to `String!`

Δ Field `RuleCheckAggregateExecution_Preview.status` changed type from `RuleCheckExecutionStatus_Preview!` to `String!`

Δ Field `RuleCheckExecution_Preview.reason` changed type from `RuleCheckExecutionReason_Preview!` to `String!`

Δ Field `RuleCheckExecution_Preview.source` changed type from `RuleCheckExecutionSource_Preview!` to `String!`

Δ Field `RuleCheckExecution_Preview.status` changed type from `RuleCheckExecutionStatus_Preview!` to `String!`

Δ Field `RuleCheckPastDefinition_Preview.actualErrorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Field `RuleCheckPastDefinition_Preview.defaultErrorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Field `RuleCheckPastDefinition_Preview.type` changed type from `RuleCheckType_Preview!` to `String!`

Δ Field `RuleViolation_Preview.errorReportLevel` changed type from `RuleViolationErrorReportLevel_Preview!` to `String!`

Δ Field `RuleViolation_Preview.ruleFailureCode` changed type from `RuleFailureCode_Preview` to `String`

Δ Field `RuleViolation_Preview.ruleType` changed type from `RuleCheckType_Preview!` to `String!`

Δ Field `RuleViolationRelatedObject_Preview.type` changed type from `DesignDataObjectType_Preview!` to `String!`

###### Input / Payload

Δ Input field `RuleCheckExecutionConfigurationItemInput_Preview.errorReportLevel` changed type from `DesignDataErrorReportLevel_Preview!` to `String!`

Δ Input field `RuleCheckExecutionInput_Preview.reason` changed type from `RuleCheckExecutionReason_Preview!` to `String!`

Δ Input field `RuleCheckExecutionInput_Preview.source` changed type from `RuleCheckExecutionSource_Preview!` to `String!`

Δ Input field `RuleCheckExecutionReason_PreviewOperationFilterInput.eq` changed type from `RuleCheckExecutionReason_Preview` to `String`

Δ Input field `RuleCheckExecutionReason_PreviewOperationFilterInput.in` changed type from `[RuleCheckExecutionReason_Preview!]` to `[String!]`

Δ Input field `RuleCheckExecutionReason_PreviewOperationFilterInput.neq` changed type from `RuleCheckExecutionReason_Preview` to `String`

Δ Input field `RuleCheckExecutionReason_PreviewOperationFilterInput.nin` changed type from `[RuleCheckExecutionReason_Preview!]` to `[String!]`

Δ Input field `RuleCheckExecutionSource_PreviewOperationFilterInput.eq` changed type from `RuleCheckExecutionSource_Preview` to `String`

Δ Input field `RuleCheckExecutionSource_PreviewOperationFilterInput.in` changed type from `[RuleCheckExecutionSource_Preview!]` to `[String!]`

Δ Input field `RuleCheckExecutionSource_PreviewOperationFilterInput.neq` changed type from `RuleCheckExecutionSource_Preview` to `String`

Δ Input field `RuleCheckExecutionSource_PreviewOperationFilterInput.nin` changed type from `[RuleCheckExecutionSource_Preview!]` to `[String!]`

#### ⚠️ Dangerous Changes (1)

##### Design

###### Arguments

\+ Argument `isClosed: Boolean!` (with default value) added to `DesWorkspace.workflows`

#### ✅ Non-Breaking Changes (4)

##### Design

###### Fields

\+ Field `workflowType` was added to object type `DesWorkflow`

\+ Field `workflowType` was added to object type `DesWorkflowDefinition`

###### Input / Payload

\+ Input field `workflowType` of type `StringOperationFilterInput` was added to input object type `DesWorkflowDefinitionFilterInput`

\+ Input field `workflowType` of type `StringOperationFilterInput` was added to input object type `DesWorkflowFilterInput`

### 22-May-2026

#### ✅ Non-Breaking Changes (6)

##### Customization

###### Fields

\+ Field `assignmentType` was added to object type `GloCusExecuteAssignmentPayload`

\+ Field `executionId` was added to object type `GloCusExecuteAssignmentPayload`

Δ Field `GloCusExecuteAssignmentPayload.scriptExecutionId` is deprecated

Δ Directive `deprecated` was added to `GloCusExecuteAssignmentPayload.scriptExecutionId`

##### Design

###### Fields

\+ Field `marketingBadge` was added to object type `DesWorkspace`

\+ Field `marketingBadge` was added to object type `DesWorkspaceInfo`

### 21-May-2026

#### ⚠️ Dangerous Changes (1)

##### Supply

###### 🔍 Query

\+ Argument `order: [SupEvalKitSortInput!]` added to `Query.supEvalKitDetailsByRefDesignId`

#### ✅ Non-Breaking Changes (26)

##### Supply

###### ✏️ Mutation

\+ Field `supEvalKitAddRefDesignCompatibleEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitAddRefDesignCompatibleEvalKitInput!` added to `Mutation.supEvalKitAddRefDesignCompatibleEvalKit`

\+ Field `supEvalKitDeleteRefDesignCompatibleEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitDeleteRefDesignCompatibleEvalKitInput!` added to `Mutation.supEvalKitDeleteRefDesignCompatibleEvalKit`

###### Types

\+ Type `SupEvalKitAddRefDesignCompatibleEvalKitPayload` was added

\+ Type `SupEvalKitAddRefDesignCompatibleEvalKitsPayload` was added

\+ Type `SupEvalKitDeleteRefDesignCompatibleEvalKitPayload` was added

\+ Type `SupEvalKitDeleteRefDesignCompatibleEvalKitsPayload` was added

\+ Type `SupEvalKitAddRefDesignCompatibleEvalKitError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitAddRefDesignCompatibleEvalKitError`

\+ Type `SupEvalKitDeleteRefDesignCompatibleEvalKitError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitDeleteRefDesignCompatibleEvalKitError`

\+ Type `SupEvalKitAddRefDesignCompatibleEvalKitInput` was added

Δ Object type `SupEvalKitAddRefDesignCompatibleEvalKitInput` has description `Input for adding compatible evaluation kits to a reference design.`

\+ Type `SupEvalKitDeleteRefDesignCompatibleEvalKitInput` was added

Δ Object type `SupEvalKitDeleteRefDesignCompatibleEvalKitInput` has description `Input for deleting compatible evaluation kits from a reference design.`

###### Fields

\+ Field `errors` was added to object type `SupEvalKitAddRefDesignCompatibleEvalKitPayload`

\+ Field `supEvalKitAddRefDesignCompatibleEvalKitsPayload` was added to object type `SupEvalKitAddRefDesignCompatibleEvalKitPayload`

\+ Field `success` was added to object type `SupEvalKitAddRefDesignCompatibleEvalKitsPayload`

\+ Field `errors` was added to object type `SupEvalKitDeleteRefDesignCompatibleEvalKitPayload`

\+ Field `supEvalKitDeleteRefDesignCompatibleEvalKitsPayload` was added to object type `SupEvalKitDeleteRefDesignCompatibleEvalKitPayload`

\+ Field `success` was added to object type `SupEvalKitDeleteRefDesignCompatibleEvalKitsPayload`

###### Input / Payload

\+ Input field `evalKitIds` of type `[ID!]!` was added to input object type `SupEvalKitAddRefDesignCompatibleEvalKitInput`

\+ Input field `refDesignId` of type `ID!` was added to input object type `SupEvalKitAddRefDesignCompatibleEvalKitInput`

\+ Input field `evalKitIds` of type `[ID!]!` was added to input object type `SupEvalKitDeleteRefDesignCompatibleEvalKitInput`

\+ Input field `refDesignId` of type `ID!` was added to input object type `SupEvalKitDeleteRefDesignCompatibleEvalKitInput`

### 20-May-2026

#### 🔴 Breaking Changes (1)

##### Customization

###### Input / Payload

Δ Input field `GloCusUpdateWorkflowAssignmentInput.workflowId` changed type from `String` to `String!`

#### ✅ Non-Breaking Changes (7)

##### Platform

###### 🔍 Query

\+ Field `solBldScaffoldingStatusesBySolution` was added to object type `Query`

\+ Argument `solutionId: ID!` added to `Query.solBldScaffoldingStatusesBySolution`

###### Types

\+ Type `SolBldScaffoldingJobStatusPayload` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingJobStatusPayload`

\+ Field `messages` was added to object type `SolBldScaffoldingJobStatusPayload`

\+ Field `solutionId` was added to object type `SolBldScaffoldingJobStatusPayload`

\+ Field `status` was added to object type `SolBldScaffoldingJobStatusPayload`

### 19-May-2026

#### ✅ Non-Breaking Changes (10)

##### Design

###### Fields

\+ Field `componentType` was added to object type `DesignDataComponent_Preview`

\+ Field `designComponentId` was added to object type `DesignDataComponent_Preview`

\+ Field `libraryComponentId` was added to object type `DesignDataComponent_Preview`

Δ Field `DesignDataComponent_Preview.tagTypes` is deprecated

Δ Directive `deprecated` was added to `DesignDataComponent_Preview.tagTypes`

Δ Field `DesignDataComponent_Preview.uniqueId` is deprecated

Δ Directive `deprecated` was added to `DesignDataComponent_Preview.uniqueId`

\+ Field `designPartId` was added to object type `DesignDataPart_Preview`

Δ Field `DesignDataPart_Preview.uniqueId` is deprecated

Δ Directive `deprecated` was added to `DesignDataPart_Preview.uniqueId`

### 18-May-2026

#### ✅ Non-Breaking Changes (2)

##### Library Management

###### 🔍 Query

\+ Field `desSearchComponentsByIpns` was added to object type `Query`

\+ Argument `ipns: [String!]!` added to `Query.desSearchComponentsByIpns`

### 15-May-2026

#### ⚠️ Dangerous Changes (1)

##### Library Management

###### 🔍 Query

\+ Argument `attributeFacets: [String!]` added to `Query.desPartGlobalSearch`

#### ✅ Non-Breaking Changes (113)

##### Customization

###### ✏️ Mutation

\+ Field `gloCusExecuteExtensionPoint` was added to object type `Mutation`

\+ Argument `input: GloCusExecuteExtensionPointInput!` added to `Mutation.gloCusExecuteExtensionPoint`

###### Types

\+ Type `GloCusAssignmentExecution` was added

Δ Object type `GloCusAssignmentExecution` has description `Dispatch result for a single assignment started by an extension point execution.`

\+ Type `GloCusExecuteExtensionPointPayload` was added

Δ Object type `GloCusExecuteExtensionPointPayload` has description `Represents output value for extension point execution.`

\+ Type `GloCusExecuteExtensionPointInput` was added

Δ Object type `GloCusExecuteExtensionPointInput` has description `Represents input value for extension point execution.`

###### Fields

\+ Field `assignmentId` was added to object type `GloCusAssignmentExecution`

\+ Field `assignmentType` was added to object type `GloCusAssignmentExecution`

\+ Field `error` was added to object type `GloCusAssignmentExecution`

\+ Field `executionId` was added to object type `GloCusAssignmentExecution`

\+ Field `executions` was added to object type `GloCusExecuteExtensionPointPayload`

###### Input / Payload

\+ Input field `extensionPointId` of type `String!` was added to input object type `GloCusExecuteExtensionPointInput`

\+ Input field `parameters` of type `[GloCusAssignmentExecutionParameterInput!]` was added to input object type `GloCusExecuteExtensionPointInput`

##### Library Management

###### 🔍 Query

\+ Field `desPartCategoriesByProvider` was added to object type `Query`

\+ Field `desPartManufacturersByProvider` was added to object type `Query`

\+ Field `desPartSearchSuggestions` was added to object type `Query`

\+ Argument `requestedAttributes: [String!]` added to `Query.desPartSearchSuggestions`

\+ Argument `where: DesPartSearchSuggestionFilterInput!` added to `Query.desPartSearchSuggestions`

\+ Field `desPartSellersByProvider` was added to object type `Query`

###### ✏️ Mutation

\+ Field `desPartUploadCustomPartDatasheet` was added to object type `Mutation`

\+ Argument `input: DesPartUploadCustomPartFileInput!` added to `Mutation.desPartUploadCustomPartDatasheet`

\+ Field `desPartUploadCustomPartImage` was added to object type `Mutation`

\+ Argument `input: DesPartUploadCustomPartFileInput!` added to `Mutation.desPartUploadCustomPartImage`

###### Types

\+ Type `DesPartCategoriesByProviders` was added

Δ Object type `DesPartCategoriesByProviders` has description `Represents a collection of part categories grouped by providers.`

\+ Type `DesPartManufacturerCompany` was added

Δ Object type `DesPartManufacturerCompany` has description `Represents a manufacturer company.`

\+ Type `DesPartManufacturers` was added

Δ Object type `DesPartManufacturers` has description `Represents a collection of manufacturer companies by provider.`

\+ Type `DesPartSearchSuggestionValues` was added

Δ Object type `DesPartSearchSuggestionValues` has description `Represents the results of a part search suggestion request.`

\+ Type `DesPartSellers` was added

Δ Object type `DesPartSellers` has description `Represents a collection of seller companies by provider.`

\+ Type `DesPartUploadCustomPartFilePayload` was added

Δ Object type `DesPartUploadCustomPartFilePayload` has description `Payload produced when uploading a custom part file.`

\+ Type `DesPartSearchSuggestionFilterInput` was added

Δ Object type `DesPartSearchSuggestionFilterInput` has description `Filter for part search suggestions.`

\+ Type `DesPartUploadCustomPartFileInput` was added

Δ Object type `DesPartUploadCustomPartFileInput` has description `Input for uploading a custom part file.`

###### Fields

\+ Field `customPart` was added to object type `DesPartCategoriesByProviders`

\+ Field `siliconExpertPart` was added to object type `DesPartCategoriesByProviders`

\+ Field `supplyPart` was added to object type `DesPartCategoriesByProviders`

\+ Field `z2DataPart` was added to object type `DesPartCategoriesByProviders`

\+ Field `companyId` was added to object type `DesPartManufacturerCompany`

\+ Field `isActive` was added to object type `DesPartManufacturerCompany`

\+ Field `name` was added to object type `DesPartManufacturerCompany`

\+ Field `slug` was added to object type `DesPartManufacturerCompany`

\+ Field `customPart` was added to object type `DesPartManufacturers`

\+ Field `siliconExpertPart` was added to object type `DesPartManufacturers`

\+ Field `supplyPart` was added to object type `DesPartManufacturers`

\+ Field `z2DataPart` was added to object type `DesPartManufacturers`

\+ Field `allAttributes` was added to object type `DesPartSearchSuggestionValues`

\+ Field `attributeFacets` was added to object type `DesPartSearchSuggestionValues`

\+ Field `customPart` was added to object type `DesPartSellers`

\+ Field `siliconExpertPart` was added to object type `DesPartSellers`

\+ Field `supplyPart` was added to object type `DesPartSellers`

\+ Field `z2DataPart` was added to object type `DesPartSellers`

\+ Field `errors` was added to object type `DesPartUploadCustomPartFilePayload`

\+ Field `url` was added to object type `DesPartUploadCustomPartFilePayload`

\+ Field `relevantAttributes` was added to object type `DesPartCategory`

\+ Field `slug` was added to object type `DesPartCompany`

\+ Field `floatValue` was added to object type `DesPartSearchFacetValue`

###### Input / Payload

\+ Input field `categories` of type `[String!]` was added to input object type `DesPartSearchSuggestionFilterInput`

\+ Input field `manufacturers` of type `[String!]` was added to input object type `DesPartSearchSuggestionFilterInput`

\+ Input field `fileId` of type `String!` was added to input object type `DesPartUploadCustomPartFileInput`

\+ Input field `fileName` of type `String!` was added to input object type `DesPartUploadCustomPartFileInput`

\+ Input field `hasCADModelOnly` of type `Boolean` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `hasDatasheetOnly` of type `Boolean` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `inStockOnly` of type `Boolean` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `manufacturerName` of type `[String!]` was added to input object type `DesPartGlobalSearchFilterInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmInterfaceSupportSummary` was added to object type `Query`

###### Types

\+ Type `DmHistogramBucket` was added

Δ Object type `DmHistogramBucket` has description `**Experimental** A histogram bucket mapping an instance count to the number of models with that count.`

\+ Type `DmInstanceStatistics` was added

Δ Object type `DmInstanceStatistics` has description `**Experimental** Statistics on instance counts across supported models for an interface.`

\+ Type `DmInterfaceModelSupport` was added

Δ Object type `DmInterfaceModelSupport` has description `**Experimental** Support details for an interface across a set of models (devices or boards).`

\+ Type `DmInterfaceSummary` was added

Δ Object type `DmInterfaceSummary` has description `**Experimental** Summary of a single generic interface (e.g., UART, PWM) showing device and board support details.`

\+ Type `DmInterfaceSupportSummary` was added

Δ Object type `DmInterfaceSupportSummary` has description `**Experimental** Summary of supported interfaces across all devices in the catalog.`

\+ Type `DmModelSupportEntry` was added

Δ Object type `DmModelSupportEntry` has description `**Experimental** Support entry for a device or board, showing max instance count and access to the full model.`

###### Arguments

\+ Argument `deviceMpn: String` added to `DmInterfaceModelSupport.supported`

\+ Argument `family: String` added to `DmInterfaceModelSupport.supported`

\+ Argument `deviceMpn: String` added to `DmInterfaceModelSupport.unsupported`

\+ Argument `family: String` added to `DmInterfaceModelSupport.unsupported`

\+ Argument `interfaceType: String` added to `DmInterfaceSupportSummary.interfaces`

###### Fields

\+ Field `deviceCount` was added to object type `DmHistogramBucket`

\+ Field `instanceCount` was added to object type `DmHistogramBucket`

\+ Field `avg` was added to object type `DmInstanceStatistics`

\+ Field `histogram` was added to object type `DmInstanceStatistics`

\+ Field `max` was added to object type `DmInstanceStatistics`

\+ Field `median` was added to object type `DmInstanceStatistics`

\+ Field `min` was added to object type `DmInstanceStatistics`

\+ Field `statistics` was added to object type `DmInterfaceModelSupport`

\+ Field `supported` was added to object type `DmInterfaceModelSupport`

\+ Field `supportedCount` was added to object type `DmInterfaceModelSupport`

\+ Field `supportedPercentage` was added to object type `DmInterfaceModelSupport`

\+ Field `unsupported` was added to object type `DmInterfaceModelSupport`

\+ Field `boards` was added to object type `DmInterfaceSummary`

\+ Field `devices` was added to object type `DmInterfaceSummary`

\+ Field `interfaceType` was added to object type `DmInterfaceSummary`

\+ Field `interfaces` was added to object type `DmInterfaceSupportSummary`

\+ Field `totalBoards` was added to object type `DmInterfaceSupportSummary`

\+ Field `totalDevices` was added to object type `DmInterfaceSupportSummary`

\+ Field `maxInstances` was added to object type `DmModelSupportEntry`

\+ Field `model` was added to object type `DmModelSupportEntry`

\+ Field `board` was added to object type `DmFullStackDeviceModel`

Δ Field `DmResolverResult.completedOpModeGroups` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.completedOpModeGroups`

### 14-May-2026

#### 🔴 Breaking Changes (3)

##### Design

###### Arguments

− Argument `revisionId: String` was removed from field `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

Δ Type for argument `designId` on field `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId` changed from `ID` to `ID!`

###### Fields

Δ Field `DesignPreviewMutations.registerDesignUpload` changed type from `String!` to `DesignUploadResult_Preview!`

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

\+ Enum value `UPLOAD` was added to enum `RuleCheckExecutionReason_Preview`

#### ✅ Non-Breaking Changes (44)

##### Design

###### Types

\+ Type `DesComponentTypeConnection` was added

Δ Object type `DesComponentTypeConnection` has description `A connection to a list of items.`

\+ Type `DesComponentTypeEdge` was added

Δ Object type `DesComponentTypeEdge` has description `An edge in a connection.`

\+ Type `DesignUploadResult_Preview` was added

Δ Object type `DesignUploadResult_Preview` has description `**Experimental**`

\+ Type `DesComponentTypeFilterInput` was added

Δ Object type `DesComponentTypeFilterInput` has description `Represents a component type classification in the component library.`

###### Arguments

\+ Argument `uploadGrid: ID!` added to `DesignPreviewQueries.latestGenerationByUploadId`

\+ Argument `designId: ID!` added to `DesignPreviewQueries.ruleCheckExecutionsByReleaseId`

\+ Argument `releaseId: ID!` added to `DesignPreviewQueries.ruleCheckExecutionsByReleaseId`

\+ Argument `where: RuleCheckExecution_PreviewFilterInput` added to `DesignPreviewQueries.ruleCheckExecutionsByReleaseId`

\+ Argument `uploadId: ID!` added to `DesignPreviewQueries.ruleCheckLatestExecutionByUploadId`

\+ Argument `after: String` added to `DesLibrary.componentTypes`

\+ Argument `before: String` added to `DesLibrary.componentTypes`

\+ Argument `first: Int` added to `DesLibrary.componentTypes`

\+ Argument `last: Int` added to `DesLibrary.componentTypes`

\+ Argument `where: DesComponentTypeFilterInput` added to `DesLibrary.componentTypes`

###### Fields

\+ Field `edges` was added to object type `DesComponentTypeConnection`

\+ Field `nodes` was added to object type `DesComponentTypeConnection`

\+ Field `pageInfo` was added to object type `DesComponentTypeConnection`

\+ Field `totalCount` was added to object type `DesComponentTypeConnection`

\+ Field `cursor` was added to object type `DesComponentTypeEdge`

\+ Field `node` was added to object type `DesComponentTypeEdge`

\+ Field `grid` was added to object type `DesignUploadResult_Preview`

\+ Field `path` was added to object type `DesComponentType`

\+ Field `latestGenerationByUploadId` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckExecutionsByReleaseId` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckLatestExecutionByUploadId` was added to object type `DesignPreviewQueries`

\+ Field `componentTypes` was added to object type `DesLibrary`

###### Input / Payload

\+ Input field `and` of type `[DesComponentTypeFilterInput!]` was added to input object type `DesComponentTypeFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `DesComponentTypeFilterInput`

\+ Input field `or` of type `[DesComponentTypeFilterInput!]` was added to input object type `DesComponentTypeFilterInput`

##### Requirements

###### 🔍 Query

\+ Field `requirements` was added to object type `Query`

###### Types

\+ Type `RequirementsProject` was added

\+ Type `RequirementsProjectQueries` was added

\+ Type `RequirementsQueries` was added

###### Arguments

\+ Argument `id: ID!` added to `RequirementsProjectQueries.byId`

\+ Argument `ids: [ID!]!` added to `RequirementsProjectQueries.byIds`

###### Fields

\+ Field `id` was added to object type `RequirementsProject`

\+ Field `name` was added to object type `RequirementsProject`

\+ Field `byId` was added to object type `RequirementsProjectQueries`

\+ Field `byIds` was added to object type `RequirementsProjectQueries`

\+ Field `project` was added to object type `RequirementsQueries`

### 12-May-2026

#### 🔴 Breaking Changes (5)

##### Common

###### Directives

− Directive `listSize` was removed

##### Design

###### Fields

− Field `newComponentId` was removed from object type `DesAddComponentPartChoicesPayload`

− Field `newComponentId` was removed from object type `DesRemoveComponentPartChoicesPayload`

###### Input / Payload

− Input field `withRevisionControl` was removed from input object type `DesAddComponentPartChoicesInput`

− Input field `withRevisionControl` was removed from input object type `DesRemoveComponentPartChoicesInput`

#### ✅ Non-Breaking Changes (31)

##### Customization

###### Fields

\+ Field `supportedAssignmentTypes` was added to object type `GloCusExtensionPoint`

##### Design

###### Types

\+ Type `DesignDataDifferentialPair_Preview` was added

Δ Object type `DesignDataDifferentialPair_Preview` has description `**Experimental** Represents a differential pair and its associated positive and negative nets.`

\+ Type `DesignDataPinParameter_Preview` was added

Δ Object type `DesignDataPinParameter_Preview` has description `**Experimental** Represents a parameter associated with a pin.`

\+ Type `DesignDataRule_Preview` was added

Δ Object type `DesignDataRule_Preview` has description `**Experimental** Represents a rule associated with a net.`

\+ Type `DesignDataRuleAttribute_Preview` was added

Δ Object type `DesignDataRuleAttribute_Preview` has description `**Experimental** Represents an attribute associated with a rule.`

###### Fields

\+ Field `negativeNet` was added to object type `DesignDataDifferentialPair_Preview`

\+ Field `positiveNet` was added to object type `DesignDataDifferentialPair_Preview`

\+ Field `name` was added to object type `DesignDataPinParameter_Preview`

\+ Field `value` was added to object type `DesignDataPinParameter_Preview`

\+ Field `attributes` was added to object type `DesignDataRule_Preview`

\+ Field `name` was added to object type `DesignDataRule_Preview`

\+ Field `name` was added to object type `DesignDataRuleAttribute_Preview`

\+ Field `value` was added to object type `DesignDataRuleAttribute_Preview`

\+ Field `componentId` was added to object type `DesAddComponentPartChoicesPayload`

\+ Field `comment` was added to object type `DesignDataComponent_Preview`

\+ Field `description` was added to object type `DesignDataComponent_Preview`

\+ Field `tagTypes` was added to object type `DesignDataComponent_Preview`

\+ Field `diffPair` was added to object type `DesignDataNet_Preview`

\+ Field `netClasses` was added to object type `DesignDataNet_Preview`

\+ Field `rules` was added to object type `DesignDataNet_Preview`

\+ Field `description` was added to object type `DesignDataPin_Preview`

\+ Field `electricalType` was added to object type `DesignDataPin_Preview`

\+ Field `functions` was added to object type `DesignDataPin_Preview`

\+ Field `parameters` was added to object type `DesignDataPin_Preview`

\+ Field `propagationDelay` was added to object type `DesignDataPin_Preview`

\+ Field `componentId` was added to object type `DesRemoveComponentPartChoicesPayload`

##### Library Management

###### Input / Payload

\+ Input field `partSourceId` of type `String` was added to input object type `DesPartChoiceInput`

### 11-May-2026

#### 🔴 Breaking Changes (1)

##### Design

###### Fields

Δ Field `DesComponent.componentTemplate` changed type from `DesComponentTemplate` to `DesComponentTemplateRevision`

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

Δ `DesComponentTemplateRevision` object implements `Node` interface

#### ✅ Non-Breaking Changes (3)

##### Design

###### 🔍 Query

\+ Field `desComponentTemplateRevisionById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desComponentTemplateRevisionById`

###### Fields

\+ Field `id` was added to object type `DesComponentTemplateRevision`

### 07-May-2026

#### ✅ Non-Breaking Changes (1)

##### Customization

###### Fields

\+ Field `failureReason` was added to object type `GloScrScriptExecution`

### 06-May-2026

#### ⚠️ Dangerous Changes (1)

##### Supply

###### 🔍 Query

\+ Argument `order: [SupRefDesignOrderInput!]` added to `Query.supRefDesigns`

#### ✅ Non-Breaking Changes (15)

##### Design

###### Fields

\+ Field `componentTemplate` was added to object type `DesComponent`

###### Input / Payload

\+ Input field `componentTemplateId` of type `ID` was added to input object type `DesReleaseComponentInput`

\+ Input field `componentTypeId` of type `String` was added to input object type `DesReleaseComponentInput`

##### Supply

###### Types

\+ Type `SupRefSortDirection` was added

\+ Enum value `ASC` was added to enum `SupRefSortDirection`

\+ Enum value `DESC` was added to enum `SupRefSortDirection`

Δ Object type `SupRefSortDirection` has description `Specifies the sort direction for ordering results.`

\+ Type `SupRefDesignOrderInput` was added

Δ Object type `SupRefDesignOrderInput` has description `Input for ordering reference designs by one or more fields.`

###### Input / Payload

\+ Input field `createdAt` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

\+ Input field `stableName` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

\+ Input field `subtitle` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

\+ Input field `title` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

\+ Input field `type` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

\+ Input field `updatedAt` of type `SupRefSortDirection` was added to input object type `SupRefDesignOrderInput`

### 05-May-2026

#### ✅ Non-Breaking Changes (5)

##### Design

###### Arguments

\+ Argument `designId: ID` added to `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

\+ Argument `releaseId: ID!` added to `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

\+ Argument `revisionId: String` added to `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

\+ Argument `where: RuleCheckExecution_PreviewFilterInput` added to `DesignPreviewQueries.ruleCheckAggregateResultsByReleaseId`

###### Fields

\+ Field `ruleCheckAggregateResultsByReleaseId` was added to object type `DesignPreviewQueries`

### 30-Apr-2026

#### 🔴 Breaking Changes (3)

##### Design

###### Types

− Type `RuleCheckExecutionOrigin_Preview` was removed

###### Arguments

− Argument `origins: [RuleCheckExecutionOrigin_Preview!]` was removed from field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

###### Fields

Δ Field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId` changed type from `RuleCheckExecution_Preview!` to `RuleCheckAggregateExecution_Preview!`

#### ⚠️ Dangerous Changes (2)

##### Design

###### Types

\+ Enum value `SKIPPED` was added to enum `RuleCheckExecutionStatus_Preview`

###### Arguments

\+ Argument `where: RuleCheckExecution_PreviewFilterInput` added to `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

#### ✅ Non-Breaking Changes (82)

##### Design

###### Types

\+ Type `RuleCheckAggregateExecution_Preview` was added

Δ Object type `RuleCheckAggregateExecution_Preview` has description `**Experimental** Represents the aggregated result of one or more rule check executions for a design.`

\+ Type `RuleCheckExecutionReason_Preview` was added

\+ Enum value `CHANGE` was added to enum `RuleCheckExecutionReason_Preview`

\+ Enum value `PROCESS` was added to enum `RuleCheckExecutionReason_Preview`

\+ Enum value `REGENERATION` was added to enum `RuleCheckExecutionReason_Preview`

\+ Enum value `RELEASE` was added to enum `RuleCheckExecutionReason_Preview`

Δ Object type `RuleCheckExecutionReason_Preview` has description `**Experimental** Reason why the rule check execution was triggered, which can be used for filtering and distinguishing different types of rule check executions.`

\+ Type `RuleCheckExecutionSource_Preview` was added

\+ Enum value `SYSTEM` was added to enum `RuleCheckExecutionSource_Preview`

\+ Enum value `USER` was added to enum `RuleCheckExecutionSource_Preview`

Δ Object type `RuleCheckExecutionSource_Preview` has description `**Experimental** Source of the rule check execution, identifying whether it was triggered by a user or by the system.`

\+ Type `RuleCheckExecution_PreviewFilterInput` was added

Δ Object type `RuleCheckExecution_PreviewFilterInput` has description `**Experimental** Represents the execution of rule checks against a design.`

\+ Type `RuleCheckExecutionConfigurationInput_Preview` was added

Δ Object type `RuleCheckExecutionConfigurationInput_Preview` has description `**Experimental** Represents the configuration of rule check execution, allowing to override certain traits of the rule check execution.`

\+ Type `RuleCheckExecutionConfigurationItemInput_Preview` was added

Δ Object type `RuleCheckExecutionConfigurationItemInput_Preview` has description `**Experimental** Represents the rule check configuration for a specific rule check execution, allowing to override certain traits of the rule check execution.`

\+ Type `RuleCheckExecutionInput_Preview` was added

Δ Object type `RuleCheckExecutionInput_Preview` has description `**Experimental** Represents the input for executing rule checks on a design.`

\+ Type `RuleCheckExecutionReason_PreviewOperationFilterInput` was added

Δ Object type `RuleCheckExecutionReason_PreviewOperationFilterInput` has description `**Experimental**`

\+ Type `RuleCheckExecutionSource_PreviewOperationFilterInput` was added

Δ Object type `RuleCheckExecutionSource_PreviewOperationFilterInput` has description `**Experimental**`

###### Arguments

\+ Argument `input: RuleCheckExecutionInput_Preview!` added to `DesignPreviewMutations.executeRuleCheck`

\+ Argument `id: ID!` added to `DesignPreviewQueries.ruleCheckExecution`

\+ Argument `ids: [ID!]!` added to `DesignPreviewQueries.ruleCheckExecutions`

\+ Argument `designId: ID!` added to `DesignPreviewQueries.ruleCheckExecutionsByDesignId`

\+ Argument `revisionId: String` added to `DesignPreviewQueries.ruleCheckExecutionsByDesignId`

\+ Argument `where: RuleCheckExecution_PreviewFilterInput` added to `DesignPreviewQueries.ruleCheckExecutionsByDesignId`

###### Fields

\+ Field `designId` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `executions` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `revisionId` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `ruleChecks` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `status` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `violations` was added to object type `RuleCheckAggregateExecution_Preview`

\+ Field `executeRuleCheck` was added to object type `DesignPreviewMutations`

\+ Field `ruleCheckExecution` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckExecutions` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckExecutionsByDesignId` was added to object type `DesignPreviewQueries`

\+ Field `actualErrorReportLevel` was added to object type `RuleCheck_Preview`

\+ Field `finishedAt` was added to object type `RuleCheckExecution_Preview`

\+ Field `id` was added to object type `RuleCheckExecution_Preview`

\+ Field `reason` was added to object type `RuleCheckExecution_Preview`

\+ Field `source` was added to object type `RuleCheckExecution_Preview`

\+ Field `startedAt` was added to object type `RuleCheckExecution_Preview`

\+ Field `startedByUserId` was added to object type `RuleCheckExecution_Preview`

Δ Field `RuleCheckExecution_Preview.revisionId` changed type from `String` to `String!`

Δ Field `RuleCheckExecution_Preview.ruleChecks` changed type from `[RuleCheckPastDefinition_Preview!]` to `[RuleCheckPastDefinition_Preview!]!`

Δ Field `RuleCheckExecution_Preview.violations` changed type from `[RuleViolation_Preview!]` to `[RuleViolation_Preview!]!`

\+ Field `actualErrorReportLevel` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `currentRule` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `ruleCheck` was added to object type `RuleViolation_Preview`

Δ Field `RuleViolation_Preview.ruleDescription` is deprecated

Δ Directive `deprecated` was added to `RuleViolation_Preview.ruleDescription`

Δ Field `RuleViolation_Preview.ruleName` is deprecated

Δ Directive `deprecated` was added to `RuleViolation_Preview.ruleName`

Δ Field `RuleViolation_Preview.ruleNameWithVariant` changed type from `String` to `String!`

Δ Field `RuleViolation_Preview.ruleType` is deprecated

Δ Directive `deprecated` was added to `RuleViolation_Preview.ruleType`

###### Input / Payload

\+ Input field `and` of type `[RuleCheckExecution_PreviewFilterInput!]` was added to input object type `RuleCheckExecution_PreviewFilterInput`

\+ Input field `or` of type `[RuleCheckExecution_PreviewFilterInput!]` was added to input object type `RuleCheckExecution_PreviewFilterInput`

\+ Input field `reason` of type `RuleCheckExecutionReason_PreviewOperationFilterInput` was added to input object type `RuleCheckExecution_PreviewFilterInput`

\+ Input field `source` of type `RuleCheckExecutionSource_PreviewOperationFilterInput` was added to input object type `RuleCheckExecution_PreviewFilterInput`

\+ Input field `ruleChecks` of type `[RuleCheckExecutionConfigurationItemInput_Preview!]` was added to input object type `RuleCheckExecutionConfigurationInput_Preview`

\+ Input field `errorReportLevel` of type `DesignDataErrorReportLevel_Preview!` was added to input object type `RuleCheckExecutionConfigurationItemInput_Preview`

\+ Input field `ruleCheckId` of type `ID!` was added to input object type `RuleCheckExecutionConfigurationItemInput_Preview`

\+ Input field `configuration` of type `RuleCheckExecutionConfigurationInput_Preview` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `designId` of type `ID!` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `idempotencyToken` of type `String!` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `reason` of type `RuleCheckExecutionReason_Preview!` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `revisionId` of type `String` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `source` of type `RuleCheckExecutionSource_Preview!` was added to input object type `RuleCheckExecutionInput_Preview`

\+ Input field `eq` of type `RuleCheckExecutionReason_Preview` was added to input object type `RuleCheckExecutionReason_PreviewOperationFilterInput`

\+ Input field `in` of type `[RuleCheckExecutionReason_Preview!]` was added to input object type `RuleCheckExecutionReason_PreviewOperationFilterInput`

\+ Input field `neq` of type `RuleCheckExecutionReason_Preview` was added to input object type `RuleCheckExecutionReason_PreviewOperationFilterInput`

\+ Input field `nin` of type `[RuleCheckExecutionReason_Preview!]` was added to input object type `RuleCheckExecutionReason_PreviewOperationFilterInput`

\+ Input field `eq` of type `RuleCheckExecutionSource_Preview` was added to input object type `RuleCheckExecutionSource_PreviewOperationFilterInput`

\+ Input field `in` of type `[RuleCheckExecutionSource_Preview!]` was added to input object type `RuleCheckExecutionSource_PreviewOperationFilterInput`

\+ Input field `neq` of type `RuleCheckExecutionSource_Preview` was added to input object type `RuleCheckExecutionSource_PreviewOperationFilterInput`

\+ Input field `nin` of type `[RuleCheckExecutionSource_Preview!]` was added to input object type `RuleCheckExecutionSource_PreviewOperationFilterInput`

##### System Design

###### Input / Payload

\+ Input field `tags` of type `[String!]` was added to input object type `SysSdmCreateSystemModelVersionInput`

### 28-Apr-2026

#### ✅ Non-Breaking Changes (7)

##### System Design

###### Types

\+ Type `SysSdmDmPeripheralVirtualization` was added

\+ Enum value `CHANNEL` was added to enum `SysSdmDmPeripheralVirtualization`

\+ Enum value `NONE` was added to enum `SysSdmDmPeripheralVirtualization`

Δ Object type `SysSdmDmPeripheralVirtualization` has description `**Experimental**`

###### Fields

\+ Field `interfaceType` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `virtualization` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `channel` was added to object type `SysSdmDmPeripheralPinConfig`

### 24-Apr-2026

#### ✅ Non-Breaking Changes (27)

##### Design

###### Types

\+ Type `DesWorkspaceVendor` was added

\+ Enum value `ALTIUM` was added to enum `DesWorkspaceVendor`

\+ Enum value `RENESAS` was added to enum `DesWorkspaceVendor`

Δ Object type `DesWorkspaceVendor` has description `Workspace vendors.`

###### Fields

\+ Field `vendor` was added to object type `DesWorkspace`

\+ Field `vendor` was added to object type `DesWorkspaceInfo`

##### Platform

###### Fields

\+ Field `isWorkspaceApp` was added to object type `GloApp`

###### Input / Payload

\+ Input field `isWorkspaceApp` of type `BooleanOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `isWorkspaceApp` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `isWorkspaceApp` of type `Boolean` was added to input object type `GloCreateAppInput`

##### Renesas (preview)

###### Types

\+ Type `DmConstraintModel` was added

Δ Object type `DmConstraintModel` has description `**Experimental** Snapshot of the CP-SAT constraint model built before the solver runs, including variables, constraint groups, and the objective.`

\+ Type `DmPortPreset` was added

Δ Object type `DmPortPreset` has description `**Experimental** A port that carries a board-level preset function preference.`

###### Fields

\+ Field `constraints` was added to object type `DmConstraintModel`

\+ Field `display` was added to object type `DmConstraintModel`

\+ Field `objective` was added to object type `DmConstraintModel`

\+ Field `variables` was added to object type `DmConstraintModel`

\+ Field `portName` was added to object type `DmPortPreset`

\+ Field `presetFunctionName` was added to object type `DmPortPreset`

\+ Field `channel` was added to object type `DmModePinConfig`

\+ Field `virtualization` was added to object type `DmPeripheralInstance`

\+ Field `presetFunctionName` was added to object type `DmPinAssignment`

\+ Field `constraintModel` was added to object type `DmResolverResult`

\+ Field `portPresets` was added to object type `DmResolverResult`

###### Input / Payload

\+ Input field `includeDiagnostics` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationInput`

\+ Input field `includeDiagnostics` of type `Boolean` was added to input object type `DmUpdateDeviceFromSdmInput`

### 23-Apr-2026

#### ✅ Non-Breaking Changes (9)

##### Design

###### Types

\+ Type `RuleCheckPastDefinition_Preview` was added

Δ Object type `RuleCheckPastDefinition_Preview` has description `**Experimental** Represents the definition of a rule check at the time of execution.`

###### Arguments

Δ Type for argument `origins` on field `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId` changed from `[RuleCheckExecutionOrigin_Preview!]!` to `[RuleCheckExecutionOrigin_Preview!]`

###### Fields

\+ Field `defaultErrorReportLevel` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `description` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `id` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `name` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `type` was added to object type `RuleCheckPastDefinition_Preview`

\+ Field `ruleChecks` was added to object type `RuleCheckExecution_Preview`

### 22-Apr-2026

#### ✅ Non-Breaking Changes (29)

##### Design

###### Types

\+ Type `RuleCheckExecutionOrigin_Preview` was added

\+ Enum value `ON_CHANGE_PROCESS` was added to enum `RuleCheckExecutionOrigin_Preview`

\+ Enum value `ON_CHANGE_SYSTEM` was added to enum `RuleCheckExecutionOrigin_Preview`

\+ Enum value `ON_DEMAND_PROCESS` was added to enum `RuleCheckExecutionOrigin_Preview`

\+ Enum value `ON_REGENERATION` was added to enum `RuleCheckExecutionOrigin_Preview`

\+ Enum value `ON_RELEASE` was added to enum `RuleCheckExecutionOrigin_Preview`

\+ Enum value `TEMPORARY` was added to enum `RuleCheckExecutionOrigin_Preview`

Δ Object type `RuleCheckExecutionOrigin_Preview` has description `**Experimental** Represents the source that initiated the execution.`

\+ Type `DesUpdateFootprintFileInput` was added

Δ Object type `DesUpdateFootprintFileInput` has description `Input for updating a footprint file.`

\+ Type `DesUpdateSymbolFileInput` was added

Δ Object type `DesUpdateSymbolFileInput` has description `Input for updating a symbol file.`

###### Arguments

\+ Argument `designId: ID!` added to `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

\+ Argument `origins: [RuleCheckExecutionOrigin_Preview!]!` added to `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

\+ Argument `revisionId: String` added to `DesignPreviewQueries.ruleCheckAggregateResultsByDesignId`

###### Fields

\+ Field `ruleCheckAggregateResultsByDesignId` was added to object type `DesignPreviewQueries`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DesUpdateFootprintFileInput`

\+ Input field `relativePath` of type `String!` was added to input object type `DesUpdateFootprintFileInput`

\+ Input field `fileId` of type `String!` was added to input object type `DesUpdateSymbolFileInput`

\+ Input field `relativePath` of type `String!` was added to input object type `DesUpdateSymbolFileInput`

\+ Input field `files` of type `[DesUpdateFootprintFileInput!]` was added to input object type `DesUpdateFootprintInput`

\+ Input field `files` of type `[DesUpdateSymbolFileInput!]` was added to input object type `DesUpdateSymbolInput`

##### Platform

###### Types

\+ Type `SolBldScaffoldingStatusMessageParameterPayload` was added

\+ Type `SolBldScaffoldingStatusMessagePayload` was added

###### Fields

\+ Field `name` was added to object type `SolBldScaffoldingStatusMessageParameterPayload`

\+ Field `value` was added to object type `SolBldScaffoldingStatusMessageParameterPayload`

\+ Field `messageCode` was added to object type `SolBldScaffoldingStatusMessagePayload`

\+ Field `parameters` was added to object type `SolBldScaffoldingStatusMessagePayload`

\+ Field `messages` was added to object type `SolBldScaffoldingStatusPayload`

### 17-Apr-2026

#### ✅ Non-Breaking Changes (5)

##### Design

###### Fields

\+ Field `realValue` was added to object type `DesComponentParameter`

###### Input / Payload

\+ Input field `realValue` of type `String` was added to input object type `DesComponentItemParameterInput`

\+ Input field `type` of type `DesParameterType` was added to input object type `DesComponentItemParameterInput`

\+ Input field `realValue` of type `String` was added to input object type `DesRevisionParameterInput`

\+ Input field `type` of type `DesParameterType` was added to input object type `DesRevisionParameterInput`

### 16-Apr-2026

#### ⚠️ Dangerous Changes (2)

##### Design

###### 🔍 Query

\+ Argument `order: [DesProjectSortInput!]` added to `Query.desProjects`

###### Arguments

\+ Argument `order: [DesProjectSortInput!]` added to `DesWorkspace.projects`

#### ✅ Non-Breaking Changes (7)

##### Design

###### Types

\+ Type `DesProjectSortInput` was added

Δ Object type `DesProjectSortInput` has description `A project manages all development stages of the PCB/PCA product lifecycle.`

###### Input / Payload

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `DesProjectSortInput`

\+ Input field `description` of type `SortEnumType` was added to input object type `DesProjectSortInput`

\+ Input field `id` of type `SortEnumType` was added to input object type `DesProjectSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `DesProjectSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `DesProjectSortInput`

### 15-Apr-2026

#### ✅ Non-Breaking Changes (3)

##### Design

###### Fields

\+ Field `ruleNameWithVariant` was added to object type `RuleViolation_Preview`

\+ Field `variantId` was added to object type `RuleViolation_Preview`

\+ Field `variantName` was added to object type `RuleViolation_Preview`

### 14-Apr-2026

#### ⚠️ Dangerous Changes (2)

##### Design

###### Types

\+ Enum value `MOTOR_STUDIO_PROJECT` was added to enum `DesContentTypeKind`

\+ Enum value `TUNING` was added to enum `DesContentTypeKind`

### 13-Apr-2026

#### ✅ Non-Breaking Changes (18)

##### Platform

###### Input / Payload

\+ Input field `ignoreExistingSources` of type `Boolean` was added to input object type `SolBldScaffoldingBySdmInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId` was added to object type `Query`

\+ Argument `evalKitId: ID!` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId`

\+ Argument `limit: Int!` (with default value) added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId`

\+ Argument `start: Int!` (with default value) added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId`

\+ Field `supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId` was added to object type `Query`

\+ Argument `evalKitId: ID!` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId`

\+ Argument `limit: Int!` (with default value) added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId`

\+ Argument `start: Int!` (with default value) added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId`

###### Input / Payload

Δ Directive `deprecated` was added to input field `compatibleEvalKits` in input object `SupSoftwareProjectCreateSoftwareProjectInput`

Δ Directive `deprecated` was added to input field `addCompatibleEvalKits` in input object `SupSoftwareProjectUpdateSoftwareProjectInput`

Δ Directive `deprecated` was added to input field `removeCompatibleEvalKits` in input object `SupSoftwareProjectUpdateSoftwareProjectInput`

Δ Directive `deprecated` was added to input field `updateCompatibleEvalKits` in input object `SupSoftwareProjectUpdateSoftwareProjectInput`

##### Supply

###### Fields

Δ Field `SupEvalKit.compatibleSoftwareProjects` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.compatibleSoftwareProjects`

###### Input / Payload

Δ Directive `deprecated` was added to input field `compatibleSoftwareProjectIds` in input object `SupEvalKitCreateEvalKitInput`

Δ Directive `deprecated` was added to input field `addCompatibleSoftwareProjectIds` in input object `SupEvalKitUpdateEvalKitInput`

Δ Directive `deprecated` was added to input field `removeCompatibleSoftwareProjectIds` in input object `SupEvalKitUpdateEvalKitInput`

### 10-Apr-2026

#### ⚠️ Dangerous Changes (1)

##### System Design

###### Arguments

\+ Argument `schemaVersion: String` added to `SysSdmSystemModelVersion.downloadUrl`

#### ✅ Non-Breaking Changes (2)

##### System Design

###### Fields

\+ Field `schemaVersion` was added to object type `SysSdmSystemModelVersion`

###### Input / Payload

\+ Input field `schemaVersion` of type `String` was added to input object type `SysSdmCreateSystemModelVersionInput`

### 07-Apr-2026

#### ⚠️ Dangerous Changes (2)

##### Library Management

###### 🔍 Query

\+ Argument `requestPaidData: Boolean` added to `Query.desPartById`

\+ Argument `requestPaidData: Boolean` added to `Query.desPartByIds`

#### ✅ Non-Breaking Changes (38)

##### Library Management

###### 🔍 Query

\+ Field `desPartAttributesByProvider` was added to object type `Query`

###### ✏️ Mutation

\+ Field `desPartUploadParts` was added to object type `Mutation`

\+ Argument `input: DesPartUploadPartsInput!` added to `Mutation.desPartUploadParts`

###### Types

\+ Type `DesPartAttributes` was added

Δ Object type `DesPartAttributes` has description `Represents part attributes by provider.`

\+ Type `DesPartHealthCheckResult` was added

Δ Object type `DesPartHealthCheckResult` has description `Represents a health check result for a part.`

\+ Type `DesPartManufacturerPartIdWithIpn` was added

Δ Object type `DesPartManufacturerPartIdWithIpn` has description `Represents the part manufacturer name and part number with internal part number.`

\+ Type `DesPartUploadPartOperationResult` was added

Δ Object type `DesPartUploadPartOperationResult` has description `**Experimental** Represents the result of the upload parts operation.`

\+ Type `DesPartUploadPartsPayload` was added

Δ Object type `DesPartUploadPartsPayload` has description `**Experimental** Payload produced when uploading parts.`

\+ Type `DesPartUploadPartsInput` was added

Δ Object type `DesPartUploadPartsInput` has description `**Experimental** Input for upload parts.`

###### Fields

\+ Field `customPart` was added to object type `DesPartAttributes`

\+ Field `siliconExpertPart` was added to object type `DesPartAttributes`

\+ Field `supplyPart` was added to object type `DesPartAttributes`

\+ Field `z2DataPart` was added to object type `DesPartAttributes`

\+ Field `description` was added to object type `DesPartHealthCheckResult`

\+ Field `healthCheckId` was added to object type `DesPartHealthCheckResult`

\+ Field `severity` was added to object type `DesPartHealthCheckResult`

\+ Field `shortDescription` was added to object type `DesPartHealthCheckResult`

\+ Field `source` was added to object type `DesPartHealthCheckResult`

\+ Field `ipn` was added to object type `DesPartManufacturerPartIdWithIpn`

\+ Field `manufacturerName` was added to object type `DesPartManufacturerPartIdWithIpn`

\+ Field `mpn` was added to object type `DesPartManufacturerPartIdWithIpn`

\+ Field `errorMessage` was added to object type `DesPartUploadPartOperationResult`

\+ Field `partId` was added to object type `DesPartUploadPartOperationResult`

\+ Field `errors` was added to object type `DesPartUploadPartsPayload`

\+ Field `results` was added to object type `DesPartUploadPartsPayload`

\+ Field `healthChecks` was added to object type `DesPart`

\+ Field `healthCheckResults` was added to object type `DesPartGlobalPart`

\+ Field `totalAvail` was added to object type `DesPartProviderPart`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DesPartUploadPartsInput`

\+ Input field `fileName` of type `String!` was added to input object type `DesPartUploadPartsInput`

\+ Input field `medianPrice1000` of type `SortEnumType` was added to input object type `DesPartGlobalSearchSortInput`

\+ Input field `medianPrice1000` of type `SortEnumType` was added to input object type `DesPartSortInput`

### 06-Apr-2026

#### ✅ Non-Breaking Changes (2)

##### Renesas (preview)

###### Fields

\+ Field `artifactVersion` was added to object type `SupSoftwareProjectEvalKitProjectSource`

##### Supply

###### Input / Payload

\+ Input field `artifactVersion` of type `String` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

### 03-Apr-2026

#### ✅ Non-Breaking Changes (10)

##### Design

###### Fields

\+ Field `projectGuid` was added to object type `DesignData_Preview`

\+ Field `variantId` was added to object type `DesignDataComponent_Preview`

\+ Field `variantName` was added to object type `DesignDataComponent_Preview`

\+ Field `variantId` was added to object type `DesignDataNetItem_Preview`

\+ Field `variantName` was added to object type `DesignDataNetItem_Preview`

\+ Field `variantName` was added to object type `DesignDataPart_Preview`

\+ Field `variantId` was added to object type `DesignDataPin_Preview`

\+ Field `variantName` was added to object type `DesignDataPin_Preview`

\+ Field `variantId` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `variantName` was added to object type `RuleViolationRelatedObject_Preview`

### 30-Mar-2026

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### Arguments

\+ Argument `order: [SupSoftwareProjectCompatibleEvalKitSortInput!]` added to `SupSoftwareProject.compatibleEvalKitData`

#### ✅ Non-Breaking Changes (64)

##### Platform

###### 🔍 Query

\+ Field `solEnvironmentLinks` was added to object type `Query`

###### Types

\+ Type `SolStringKeyValue` was added

###### Fields

\+ Field `key` was added to object type `SolStringKeyValue`

\+ Field `value` was added to object type `SolStringKeyValue`

\+ Field `motorStudioProjects` was added to object type `SolSolution`

##### Renesas (preview)

###### 🔍 Query

\+ Field `rsaMotorStudioProjectsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.rsaMotorStudioProjectsByIds`

###### Types

\+ Type `SupSoftwareProjectCompatibleEvalKitSortInput` was added

Δ Object type `SupSoftwareProjectCompatibleEvalKitSortInput` has description `Input type for sorting.`

###### Arguments

\+ Argument `after: String` added to `SupSoftwareProject.compatibleEvalKitDetails`

\+ Argument `before: String` added to `SupSoftwareProject.compatibleEvalKitDetails`

\+ Argument `first: Int` added to `SupSoftwareProject.compatibleEvalKitDetails`

\+ Argument `last: Int` added to `SupSoftwareProject.compatibleEvalKitDetails`

\+ Argument `order: [SupSoftwareProjectCompatibleEvalKitSortInput!]` added to `SupSoftwareProject.compatibleEvalKitDetails`

\+ Argument `where: SupSoftwareProjectCompatibleEvalKitFilterInput` added to `SupSoftwareProject.compatibleEvalKitDetails`

###### Fields

\+ Field `compatibleEvalKitDetails` was added to object type `SupSoftwareProject`

Δ Field `SupSoftwareProject.compatibleEvalKitData` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProject.compatibleEvalKitData`

Δ Field `SupSoftwareProjectEvalKitSource.compatibleEvalKitId` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.compatibleEvalKitId`

Δ Field `SupSoftwareProjectEvalKitSource.evalKitId` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.evalKitId`

###### Input / Payload

\+ Input field `evalKit` of type `SupEvalKitSortInput` was added to input object type `SupSoftwareProjectCompatibleEvalKitSortInput`

\+ Input field `q` of type `String` was added to input object type `SupSoftwareProjectCompatibleEvalKitFilterInput`

##### Supply

###### 🔍 Query

\+ Field `supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId`

\+ Argument `softwareProjectId: ID!` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId`

\+ Field `supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId` was added to object type `Query`

\+ Argument `softwareProjectId: ID!` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId`

\+ Field `supEvalKitSoftwareProjectCompatibleEvalKitSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `before: String` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `first: Int` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `last: Int` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `order: [SupSoftwareProjectCompatibleEvalKitSortInput!]` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `softwareProjectId: ID!` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

\+ Argument `where: SupSoftwareProjectCompatibleEvalKitFilterInput` added to `Query.supEvalKitSoftwareProjectCompatibleEvalKitSearch`

###### ✏️ Mutation

\+ Field `supEvalKitSoftwareProjectCompatibleEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitSoftwareProjectCompatibleEvalKitInput!` added to `Mutation.supEvalKitSoftwareProjectCompatibleEvalKit`

###### Types

\+ Type `SupEvalKitSoftwareProjectCompatibleEvalKitPayload` was added

Δ Object type `SupEvalKitSoftwareProjectCompatibleEvalKitPayload` has description `Payload associated with updating a software project compatible evaluation kits.`

\+ Type `SupEvalKitSoftwareProjectCompatibleEvalKitError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitSoftwareProjectCompatibleEvalKitError`

\+ Type `SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput` was added

\+ Type `SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput` was added

\+ Type `SupEvalKitSoftwareProjectCompatibleEvalKitInput` was added

Δ Object type `SupEvalKitSoftwareProjectCompatibleEvalKitInput` has description `Input for software project update.`

\+ Type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput` was added

\+ Type `SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput` was added

###### Fields

\+ Field `errors` was added to object type `SupEvalKitSoftwareProjectCompatibleEvalKitPayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput`

\+ Input field `projectSources` of type `[SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]!` was added to input object type `SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput`

\+ Input field `compatibleEvalKitId` of type `String!` was added to input object type `SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput`

\+ Input field `addCompatibleEvalKits` of type `[SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput!]` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitInput`

\+ Input field `id` of type `ID!` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitInput`

\+ Input field `removeCompatibleEvalKits` of type `[SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput!]` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitInput`

\+ Input field `updateCompatibleEvalKits` of type `[SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput!]` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitInput`

\+ Input field `configXmlUrl` of type `String!` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `sourceFile` of type `SupEvalKitFileInput` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `sourceUrl` of type `String` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `type` of type `SupSoftwareProjectEvalKitProjectSourceType!` was added to input object type `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`

\+ Input field `compatibleEvalKitId` of type `String!` was added to input object type `SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput`

\+ Input field `newProjectSources` of type `[SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]` was added to input object type `SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput`

### 27-Mar-2026

#### ✅ Non-Breaking Changes (56)

##### Supply

###### ✏️ Mutation

\+ Field `supEvalKitAddDevices` was added to object type `Mutation`

\+ Argument `input: SupEvalKitAddDevicesInput!` added to `Mutation.supEvalKitAddDevices`

\+ Field `supEvalKitDeleteDevices` was added to object type `Mutation`

\+ Argument `input: SupEvalKitDeleteDevicesInput!` added to `Mutation.supEvalKitDeleteDevices`

\+ Field `supEvalKitSetMainRefDesign` was added to object type `Mutation`

\+ Argument `input: SupEvalKitSetMainRefDesignInput!` added to `Mutation.supEvalKitSetMainRefDesign`

\+ Field `supEvalKitUnsetMainRefDesign` was added to object type `Mutation`

\+ Argument `input: SupEvalKitUnsetMainRefDesignInput!` added to `Mutation.supEvalKitUnsetMainRefDesign`

###### Types

\+ Type `SupEvalKitAddDevicesPayload` was added

Δ Object type `SupEvalKitAddDevicesPayload` has description `Payload returned after adding devices to the evaluation kit.`

\+ Type `SupEvalKitDeleteDevicesPayload` was added

Δ Object type `SupEvalKitDeleteDevicesPayload` has description `Payload returned after deleting devices from an evaluation kit.`

\+ Type `SupEvalKitSetMainRefDesignPayload` was added

Δ Object type `SupEvalKitSetMainRefDesignPayload` has description `Payload returned after setting the main reference design of an evaluation kit.`

\+ Type `SupEvalKitUnsetMainRefDesignPayload` was added

Δ Object type `SupEvalKitUnsetMainRefDesignPayload` has description `Payload returned after unsetting the main reference design of an evaluation kit.`

\+ Type `SupEvalKitAddDevicesError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitAddDevicesError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitAddDevicesError`

\+ Type `SupEvalKitDeleteDevicesError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitDeleteDevicesError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitDeleteDevicesError`

\+ Type `SupEvalKitSetMainRefDesignError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitSetMainRefDesignError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitSetMainRefDesignError`

\+ Type `SupEvalKitUnsetMainRefDesignError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitUnsetMainRefDesignError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitUnsetMainRefDesignError`

\+ Type `SupEvalKitAddDevicesInput` was added

Δ Object type `SupEvalKitAddDevicesInput` has description `Input for adding devices to an evaluation kit.`

\+ Type `SupEvalKitDeleteDevicesInput` was added

Δ Object type `SupEvalKitDeleteDevicesInput` has description `Input for deleting devices from an evaluation kit.`

\+ Type `SupEvalKitDeviceInput` was added

Δ Object type `SupEvalKitDeviceInput` has description `Input type for device mutation.`

\+ Type `SupEvalKitSetMainRefDesignInput` was added

Δ Object type `SupEvalKitSetMainRefDesignInput` has description `Input for setting the main reference design of an evaluation kit.`

\+ Type `SupEvalKitUnsetMainRefDesignInput` was added

Δ Object type `SupEvalKitUnsetMainRefDesignInput` has description `Input for unsetting the main reference design of an evaluation kit.`

###### Fields

\+ Field `errors` was added to object type `SupEvalKitAddDevicesPayload`

\+ Field `success` was added to object type `SupEvalKitAddDevicesPayload`

\+ Field `errors` was added to object type `SupEvalKitDeleteDevicesPayload`

\+ Field `success` was added to object type `SupEvalKitDeleteDevicesPayload`

\+ Field `errors` was added to object type `SupEvalKitSetMainRefDesignPayload`

\+ Field `success` was added to object type `SupEvalKitSetMainRefDesignPayload`

\+ Field `errors` was added to object type `SupEvalKitUnsetMainRefDesignPayload`

\+ Field `success` was added to object type `SupEvalKitUnsetMainRefDesignPayload`

###### Input / Payload

\+ Input field `devices` of type `[SupEvalKitDeviceInput!]!` was added to input object type `SupEvalKitAddDevicesInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitAddDevicesInput`

\+ Input field `devices` of type `[SupEvalKitDeviceInput!]!` was added to input object type `SupEvalKitDeleteDevicesInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitDeleteDevicesInput`

\+ Input field `deviceMpn` of type `String!` was added to input object type `SupEvalKitDeviceInput`

\+ Input field `refDesignId` of type `ID!` was added to input object type `SupEvalKitDeviceInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitSetMainRefDesignInput`

\+ Input field `refDesignId` of type `ID!` was added to input object type `SupEvalKitSetMainRefDesignInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitUnsetMainRefDesignInput`

\+ Input field `refDesignId` of type `ID!` was added to input object type `SupEvalKitUnsetMainRefDesignInput`

### 25-Mar-2026

#### ✅ Non-Breaking Changes (33)

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `dmUpdateDeviceFromSdm` was added to object type `Mutation`

\+ Argument `input: DmUpdateDeviceFromSdmInput!` added to `Mutation.dmUpdateDeviceFromSdm`

###### Types

\+ Type `DmPeripheralChanges` was added

Δ Object type `DmPeripheralChanges` has description `**Experimental** Changes in peripheral instances between incoming SDM and resolved model.`

\+ Type `DmUpdateDeviceFromSdmPayload` was added

Δ Object type `DmUpdateDeviceFromSdmPayload` has description `**Experimental**`

\+ Type `DmUpdaterSummary` was added

Δ Object type `DmUpdaterSummary` has description `**Experimental** Summary of device model updater run.`

\+ Type `DmUpdateDeviceFromSdmInput` was added

Δ Object type `DmUpdateDeviceFromSdmInput` has description `**Experimental**`

###### Fields

\+ Field `added` was added to object type `DmPeripheralChanges`

\+ Field `addedInstances` was added to object type `DmPeripheralChanges`

\+ Field `modified` was added to object type `DmPeripheralChanges`

\+ Field `modifiedInstances` was added to object type `DmPeripheralChanges`

\+ Field `removed` was added to object type `DmPeripheralChanges`

\+ Field `dmUpdaterSummary` was added to object type `DmUpdateDeviceFromSdmPayload`

\+ Field `peripheralChanges` was added to object type `DmUpdaterSummary`

\+ Field `result` was added to object type `DmUpdaterSummary`

\+ Field `interfaceType` was added to object type `DmPeripheralInstance`

###### Input / Payload

\+ Input field `deviceModelId` of type `String!` was added to input object type `DmUpdateDeviceFromSdmInput`

\+ Input field `fileId` of type `String!` was added to input object type `DmUpdateDeviceFromSdmInput`

\+ Input field `requiredPeripherals` of type `[DmRequiredPeripheralPayloadInput!]!` was added to input object type `DmUpdateDeviceFromSdmInput`

##### Supply

###### Types

\+ Type `SupEvalKitDevice` was added

###### Fields

\+ Field `designProject` was added to object type `SupEvalKitDevice`

\+ Field `deviceMpn` was added to object type `SupEvalKitDevice`

\+ Field `refDesignId` was added to object type `SupEvalKitDevice`

Δ Field `SupEvalKitDevice.refDesignId` is deprecated

Δ Directive `deprecated` was added to `SupEvalKitDevice.refDesignId`

\+ Field `devices` was added to object type `SupEvalKit`

\+ Field `mainRefDesign` was added to object type `SupEvalKit`

\+ Field `mainRefDesignId` was added to object type `SupEvalKit`

Δ Field `SupEvalKit.mainRefDesignId` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.mainRefDesignId`

### 24-Mar-2026

#### ✅ Non-Breaking Changes (169)

##### Library Management

###### 🔍 Query

\+ Field `desPartSearchCustomParts` was added to object type `Query`

\+ Argument `items: [DesPartManufacturerPartIdInput!]!` added to `Query.desPartSearchCustomParts`

###### ✏️ Mutation

\+ Field `desPartRemoveCustomParts` was added to object type `Mutation`

\+ Argument `input: DesPartRemoveCustomPartsInput!` added to `Mutation.desPartRemoveCustomParts`

\+ Field `desPartUpsertCustomParts` was added to object type `Mutation`

\+ Argument `input: DesPartUpsertCustomPartsInput!` added to `Mutation.desPartUpsertCustomParts`

###### Types

\+ Type `DesPartBestImage` was added

Δ Object type `DesPartBestImage` has description `Represents the image for a part.`

\+ Type `DesPartCustomPart` was added

Δ Object type `DesPartCustomPart` has description `Represents a custom part.`

\+ Type `DesPartCustomPartData` was added

Δ Object type `DesPartCustomPartData` has description `Represents custom part data.`

\+ Type `DesPartCustomPartDocument` was added

Δ Object type `DesPartCustomPartDocument` has description `Represents a custom part document.`

\+ Type `DesPartCustomPartOperationResult` was added

Δ Object type `DesPartCustomPartOperationResult` has description `Represents the result of an operation for a custom part.`

\+ Type `DesPartCustomPartPricePoint` was added

Δ Object type `DesPartCustomPartPricePoint` has description `Represents a price point.`

\+ Type `DesPartCustomPartSearchResultItem` was added

Δ Object type `DesPartCustomPartSearchResultItem` has description `Represents a search result item.`

\+ Type `DesPartCustomPartSeller` was added

Δ Object type `DesPartCustomPartSeller` has description `Represents a seller for a custom part.`

\+ Type `DesPartCustomPartSellerSpec` was added

Δ Object type `DesPartCustomPartSellerSpec` has description `Represents a specification for a seller.`

\+ Type `DesPartCustomPartSource` was added

Δ Object type `DesPartCustomPartSource` has description `Represents a custom part source.`

\+ Type `DesPartCustomPartSpec` was added

Δ Object type `DesPartCustomPartSpec` has description `Represents a custom part specification.`

\+ Type `DesPartCustomPartStockItem` was added

Δ Object type `DesPartCustomPartStockItem` has description `Represents a stock item.`

\+ Type `DesPartErrorPayload` was added

Δ Object type `DesPartErrorPayload` has description `Represents a standard error payload.`

\+ Type `DesPartRemoveCustomPartsPayload` was added

Δ Object type `DesPartRemoveCustomPartsPayload` has description `Represents the payload returned after removing custom parts.`

\+ Type `DesPartUpsertCustomPartsPayload` was added

Δ Object type `DesPartUpsertCustomPartsPayload` has description `Represents the result of upserting custom parts.`

\+ Type `DesPartCustomPartDataInput` was added

Δ Object type `DesPartCustomPartDataInput` has description `Represents custom part data.`

\+ Type `DesPartCustomPartDocumentInput` was added

Δ Object type `DesPartCustomPartDocumentInput` has description `Represents a custom part document.`

\+ Type `DesPartCustomPartPricePointInput` was added

Δ Object type `DesPartCustomPartPricePointInput` has description `Represents a price point.`

\+ Type `DesPartCustomPartSellerInput` was added

Δ Object type `DesPartCustomPartSellerInput` has description `Represents a seller for a custom part.`

\+ Type `DesPartCustomPartSellerSpecInput` was added

Δ Object type `DesPartCustomPartSellerSpecInput` has description `Represents a specification for a seller.`

\+ Type `DesPartCustomPartSpecInput` was added

Δ Object type `DesPartCustomPartSpecInput` has description `Represents a custom part specification.`

\+ Type `DesPartCustomPartStockItemInput` was added

Δ Object type `DesPartCustomPartStockItemInput` has description `Represents a stock item.`

\+ Type `DesPartManufacturerPartIdWithLastSyncTimeInput` was added

Δ Object type `DesPartManufacturerPartIdWithLastSyncTimeInput` has description `Represents the part manufacturer name and part number with last sync time in part source.`

\+ Type `DesPartRemoveCustomPartsInput` was added

Δ Object type `DesPartRemoveCustomPartsInput` has description `Represents the input for removing custom parts.`

\+ Type `DesPartUpsertCustomPartsInput` was added

Δ Object type `DesPartUpsertCustomPartsInput` has description `Represents the input for upserting custom parts.`

###### Fields

\+ Field `url` was added to object type `DesPartBestImage`

\+ Field `part` was added to object type `DesPartCustomPart`

\+ Field `source` was added to object type `DesPartCustomPart`

\+ Field `categoryName` was added to object type `DesPartCustomPartData`

\+ Field `datasheetUrl` was added to object type `DesPartCustomPartData`

\+ Field `description` was added to object type `DesPartCustomPartData`

\+ Field `documents` was added to object type `DesPartCustomPartData`

\+ Field `imageUrl` was added to object type `DesPartCustomPartData`

\+ Field `manufacturerName` was added to object type `DesPartCustomPartData`

\+ Field `mpn` was added to object type `DesPartCustomPartData`

\+ Field `sellers` was added to object type `DesPartCustomPartData`

\+ Field `specs` was added to object type `DesPartCustomPartData`

\+ Field `updatedAt` was added to object type `DesPartCustomPartData`

\+ Field `name` was added to object type `DesPartCustomPartDocument`

\+ Field `url` was added to object type `DesPartCustomPartDocument`

\+ Field `errorMessage` was added to object type `DesPartCustomPartOperationResult`

\+ Field `partId` was added to object type `DesPartCustomPartOperationResult`

\+ Field `price` was added to object type `DesPartCustomPartPricePoint`

\+ Field `quantity` was added to object type `DesPartCustomPartPricePoint`

\+ Field `parts` was added to object type `DesPartCustomPartSearchResultItem`

\+ Field `requested` was added to object type `DesPartCustomPartSearchResultItem`

\+ Field `currency` was added to object type `DesPartCustomPartSeller`

\+ Field `prices` was added to object type `DesPartCustomPartSeller`

\+ Field `sellerName` was added to object type `DesPartCustomPartSeller`

\+ Field `sellerUrl` was added to object type `DesPartCustomPartSeller`

\+ Field `sku` was added to object type `DesPartCustomPartSeller`

\+ Field `specs` was added to object type `DesPartCustomPartSeller`

\+ Field `stock` was added to object type `DesPartCustomPartSeller`

\+ Field `updatedAt` was added to object type `DesPartCustomPartSeller`

\+ Field `name` was added to object type `DesPartCustomPartSellerSpec`

\+ Field `value` was added to object type `DesPartCustomPartSellerSpec`

\+ Field `name` was added to object type `DesPartCustomPartSource`

\+ Field `partSourceId` was added to object type `DesPartCustomPartSource`

\+ Field `name` was added to object type `DesPartCustomPartSpec`

\+ Field `value` was added to object type `DesPartCustomPartSpec`

\+ Field `location` was added to object type `DesPartCustomPartStockItem`

\+ Field `quantity` was added to object type `DesPartCustomPartStockItem`

\+ Field `message` was added to object type `DesPartErrorPayload`

\+ Field `errors` was added to object type `DesPartRemoveCustomPartsPayload`

\+ Field `results` was added to object type `DesPartRemoveCustomPartsPayload`

\+ Field `errors` was added to object type `DesPartUpsertCustomPartsPayload`

\+ Field `results` was added to object type `DesPartUpsertCustomPartsPayload`

\+ Field `bestImage` was added to object type `DesPartProviderPart`

\+ Field `shortDescription` was added to object type `DesPartProviderPart`

###### Input / Payload

\+ Input field `categoryName` of type `String` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `datasheetUrl` of type `String` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `description` of type `String` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `documents` of type `[DesPartCustomPartDocumentInput!]!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `imageUrl` of type `String` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `manufacturerName` of type `String!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `mpn` of type `String!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `sellers` of type `[DesPartCustomPartSellerInput!]!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `specs` of type `[DesPartCustomPartSpecInput!]!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `updatedAt` of type `DateTime!` was added to input object type `DesPartCustomPartDataInput`

\+ Input field `name` of type `String!` was added to input object type `DesPartCustomPartDocumentInput`

\+ Input field `url` of type `String!` was added to input object type `DesPartCustomPartDocumentInput`

\+ Input field `price` of type `Decimal!` was added to input object type `DesPartCustomPartPricePointInput`

\+ Input field `quantity` of type `Int!` was added to input object type `DesPartCustomPartPricePointInput`

\+ Input field `currency` of type `String` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `prices` of type `[DesPartCustomPartPricePointInput!]!` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `sellerName` of type `String!` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `sellerUrl` of type `String` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `sku` of type `String` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `specs` of type `[DesPartCustomPartSellerSpecInput!]!` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `stock` of type `[DesPartCustomPartStockItemInput!]!` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `updatedAt` of type `DateTime` was added to input object type `DesPartCustomPartSellerInput`

\+ Input field `name` of type `String!` was added to input object type `DesPartCustomPartSellerSpecInput`

\+ Input field `value` of type `String!` was added to input object type `DesPartCustomPartSellerSpecInput`

\+ Input field `name` of type `String!` was added to input object type `DesPartCustomPartSpecInput`

\+ Input field `value` of type `String!` was added to input object type `DesPartCustomPartSpecInput`

\+ Input field `location` of type `String!` was added to input object type `DesPartCustomPartStockItemInput`

\+ Input field `quantity` of type `Int!` was added to input object type `DesPartCustomPartStockItemInput`

\+ Input field `lastSyncTime` of type `DateTime!` was added to input object type `DesPartManufacturerPartIdWithLastSyncTimeInput`

\+ Input field `manufacturerName` of type `String!` was added to input object type `DesPartManufacturerPartIdWithLastSyncTimeInput`

\+ Input field `mpn` of type `String!` was added to input object type `DesPartManufacturerPartIdWithLastSyncTimeInput`

\+ Input field `partIds` of type `[DesPartManufacturerPartIdWithLastSyncTimeInput!]!` was added to input object type `DesPartRemoveCustomPartsInput`

\+ Input field `partSourceGuid` of type `String!` was added to input object type `DesPartRemoveCustomPartsInput`

\+ Input field `parts` of type `[DesPartCustomPartDataInput!]!` was added to input object type `DesPartUpsertCustomPartsInput`

\+ Input field `partSourceGuid` of type `String!` was added to input object type `DesPartUpsertCustomPartsInput`

##### Platform

###### Input / Payload

Δ Input field `GloCreateAppOAuthClientInput.accessTokenLifetime` changed type from `Int!` to `Int`

##### Supply

###### ✏️ Mutation

\+ Field `supEvalKitAddPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupEvalKitAddPreviewImagesInput!` added to `Mutation.supEvalKitAddPreviewImages`

\+ Field `supEvalKitDeletePreviewImages` was added to object type `Mutation`

\+ Argument `input: SupEvalKitDeletePreviewImagesInput!` added to `Mutation.supEvalKitDeletePreviewImages`

\+ Field `supEvalKitSortPreviewImages` was added to object type `Mutation`

\+ Argument `input: SupEvalKitSortPreviewImagesInput!` added to `Mutation.supEvalKitSortPreviewImages`

###### Types

\+ Type `SupEvalKitAddPreviewImagesPayload` was added

\+ Type `SupEvalKitDeletePreviewImagesPayload` was added

\+ Type `SupEvalKitSortPreviewImagesPayload` was added

\+ Type `SupEvalKitAddPreviewImagesError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitAddPreviewImagesError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitAddPreviewImagesError`

\+ Type `SupEvalKitDeletePreviewImagesError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitDeletePreviewImagesError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitDeletePreviewImagesError`

\+ Type `SupEvalKitSortPreviewImagesError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitSortPreviewImagesError`

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitSortPreviewImagesError`

\+ Type `SupEvalKitAddPreviewImagesInput` was added

Δ Object type `SupEvalKitAddPreviewImagesInput` has description `Input for adding preview images to an evaluation kit.`

\+ Type `SupEvalKitDeletePreviewImagesInput` was added

Δ Object type `SupEvalKitDeletePreviewImagesInput` has description `Input for deleting preview images from an evaluation kit.`

\+ Type `SupEvalKitSortPreviewImagesInput` was added

Δ Object type `SupEvalKitSortPreviewImagesInput` has description `Input for reordering preview images of an evaluation kit.`

###### Fields

\+ Field `errors` was added to object type `SupEvalKitAddPreviewImagesPayload`

\+ Field `errors` was added to object type `SupEvalKitDeletePreviewImagesPayload`

\+ Field `errors` was added to object type `SupEvalKitSortPreviewImagesPayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitAddPreviewImagesInput`

\+ Input field `previewImages` of type `[SupEvalKitFileInput!]!` was added to input object type `SupEvalKitAddPreviewImagesInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitDeletePreviewImagesInput`

\+ Input field `imageUrls` of type `[String!]!` was added to input object type `SupEvalKitDeletePreviewImagesInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupEvalKitSortPreviewImagesInput`

\+ Input field `sortedImageUrls` of type `[String!]!` was added to input object type `SupEvalKitSortPreviewImagesInput`

### 23-Mar-2026

#### ✅ Non-Breaking Changes (28)

##### Supply

###### 🔍 Query

\+ Field `supEvalKitDetailsByRefDesignId` was added to object type `Query`

\+ Argument `after: String` added to `Query.supEvalKitDetailsByRefDesignId`

\+ Argument `before: String` added to `Query.supEvalKitDetailsByRefDesignId`

\+ Argument `first: Int` added to `Query.supEvalKitDetailsByRefDesignId`

\+ Argument `last: Int` added to `Query.supEvalKitDetailsByRefDesignId`

\+ Argument `refDesignId: ID!` added to `Query.supEvalKitDetailsByRefDesignId`

\+ Argument `where: SupEvalKitByRefDesignFilterInput` added to `Query.supEvalKitDetailsByRefDesignId`

###### Types

\+ Type `SupEvalKitByRefDesignFilterInput` was added

Δ Object type `SupEvalKitByRefDesignFilterInput` has description `Represents the filter for searching evaluation kits.`

###### Arguments

\+ Argument `after: String` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `before: String` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `first: Int` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `last: Int` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `order: [SupSoftwareProjectSortInput!]` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `where: SupEvalKitCompatibleSoftwareProjectFilterInput` added to `SupEvalKit.compatibleSoftwareProjectDetails`

\+ Argument `after: String` added to `SupRefDesign.evalKitDetails`

\+ Argument `before: String` added to `SupRefDesign.evalKitDetails`

\+ Argument `first: Int` added to `SupRefDesign.evalKitDetails`

\+ Argument `last: Int` added to `SupRefDesign.evalKitDetails`

\+ Argument `where: SupEvalKitByRefDesignFilterInput` added to `SupRefDesign.evalKitDetails`

###### Fields

\+ Field `compatibleSoftwareProjectDetails` was added to object type `SupEvalKit`

Δ Field `SupEvalKit.compatibleSoftwareProjectData` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Field `evalKitDetails` was added to object type `SupRefDesign`

###### Input / Payload

\+ Input field `description` of type `String` was added to input object type `SupEvalKitByRefDesignFilterInput`

\+ Input field `partIds` of type `[String!]` was added to input object type `SupEvalKitByRefDesignFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupEvalKitByRefDesignFilterInput`

\+ Input field `title` of type `String` was added to input object type `SupEvalKitByRefDesignFilterInput`

### 20-Mar-2026

#### 🔴 Breaking Changes (1)

##### Platform

###### Input / Payload

\+ Input field `accessTokenLifetime` of type `Int!` was added to input object type `GloCreateAppOAuthClientInput`

#### ✅ Non-Breaking Changes (2)

##### Platform

###### 🔍 Query

\+ Field `desWorkspaceUserByAuth` was added to object type `Query`

###### Fields

\+ Field `licenseFeatures` was added to object type `DesWorkspaceUser`

### 19-Mar-2026

#### 🔴 Breaking Changes (3)

##### Design

###### Types

− Type `DesignDataDocument_Preview` was removed

###### Fields

− Field `documents` was removed from object type `DesignData_Preview`

− Field `uniqueId` was removed from object type `DesignDataNet_Preview`

#### ✅ Non-Breaking Changes (8)

##### Design

###### Fields

\+ Field `components` was added to object type `DesignData_Preview`

\+ Field `nets` was added to object type `DesignData_Preview`

\+ Field `documentId` was added to object type `DesignDataComponent_Preview`

\+ Field `documentId` was added to object type `DesignDataLine_Preview`

\+ Field `documentId` was added to object type `DesignDataNetItem_Preview`

\+ Field `documentId` was added to object type `DesignDataPart_Preview`

\+ Field `documentId` was added to object type `DesignDataPin_Preview`

##### System Design

###### Input / Payload

\+ Input field `sourceFlow` of type `String` was added to input object type `SysEsdCreateDocumentInput`

### 17-Mar-2026

#### 🔴 Breaking Changes (9)

##### System Design

###### Types

− Type `SysSdmPeripheralConfiguration` was removed

− Type `SysSdmPeripheralInstance` was removed

− Type `SysSdmPeripheralMode` was removed

− Type `SysSdmPeripheralParameter` was removed

− Type `SysSdmPeripheralPinConfig` was removed

− Type `SysSdmPeripheralPinDependencyConfig` was removed

###### Fields

Δ Field `SysSdmDeviceModel.ports` changed type from `[SysSdmPort!]` to `[SysSdmDmPort!]`

Δ Field `SysSdmPeripheral.instances` changed type from `[SysSdmPeripheralInstance!]` to `[SysSdmDmPeripheralInstance!]`

Δ Field `SysSdmSystemModelVersion.name` changed type from `String!` to `String`

#### ✅ Non-Breaking Changes (85)

##### Design

###### Types

\+ Type `DesManufacturerPartParameter` was added

Δ Object type `DesManufacturerPartParameter` has description `Parameter describing a manufacturer part.`

###### Fields

\+ Field `name` was added to object type `DesManufacturerPartParameter`

\+ Field `unit` was added to object type `DesManufacturerPartParameter`

\+ Field `value` was added to object type `DesManufacturerPartParameter`

\+ Field `parameters` was added to object type `DesManufacturerPart`

##### Platform

###### Fields

\+ Field `isActive` was added to object type `DesWorkspaceUser`

##### System Design

###### Types

\+ Type `SysSdmDmPeripheralConfiguration` was added

Δ Object type `SysSdmDmPeripheralConfiguration` has description `**Experimental**`

\+ Type `SysSdmDmPeripheralInstance` was added

Δ Object type `SysSdmDmPeripheralInstance` has description `**Experimental**`

\+ Type `SysSdmDmPeripheralMode` was added

Δ Object type `SysSdmDmPeripheralMode` has description `**Experimental**`

\+ Type `SysSdmDmPeripheralParameter` was added

Δ Object type `SysSdmDmPeripheralParameter` has description `**Experimental**`

\+ Type `SysSdmDmPeripheralPinConfig` was added

Δ Object type `SysSdmDmPeripheralPinConfig` has description `**Experimental**`

\+ Type `SysSdmDmPeripheralPinDependencyConfig` was added

Δ Object type `SysSdmDmPeripheralPinDependencyConfig` has description `**Experimental**`

\+ Type `SysSdmDmPort` was added

Δ Object type `SysSdmDmPort` has description `**Experimental**`

\+ Type `SysSdmDmPortConfiguration` was added

Δ Object type `SysSdmDmPortConfiguration` has description `**Experimental**`

\+ Type `SysSdmDmPortConfigurationDependency` was added

Δ Object type `SysSdmDmPortConfigurationDependency` has description `**Experimental**`

\+ Type `SysSdmDmPortConfigurationEnumValue` was added

Δ Object type `SysSdmDmPortConfigurationEnumValue` has description `**Experimental**`

\+ Type `SysSdmDmPortConnection` was added

Δ Object type `SysSdmDmPortConnection` has description `**Experimental**`

\+ Type `SysSdmDmPortFunction` was added

Δ Object type `SysSdmDmPortFunction` has description `**Experimental**`

\+ Type `SysSdmDmGpioMode` was added

\+ Enum value `INPUT` was added to enum `SysSdmDmGpioMode`

\+ Enum value `NONE` was added to enum `SysSdmDmGpioMode`

\+ Enum value `OUTPUT_HIGH` was added to enum `SysSdmDmGpioMode`

\+ Enum value `OUTPUT_LOW` was added to enum `SysSdmDmGpioMode`

Δ Object type `SysSdmDmGpioMode` has description `**Experimental**`

\+ Type `SysSdmDmPortMode` was added

\+ Enum value `ALTERNATE_FUNCTION` was added to enum `SysSdmDmPortMode`

\+ Enum value `GPIO` was added to enum `SysSdmDmPortMode`

Δ Object type `SysSdmDmPortMode` has description `**Experimental**`

###### Fields

\+ Field `id` was added to object type `SysSdmDmPeripheralConfiguration`

\+ Field `parameters` was added to object type `SysSdmDmPeripheralConfiguration`

\+ Field `pinConfigs` was added to object type `SysSdmDmPeripheralConfiguration`

\+ Field `pinDependencyConfigs` was added to object type `SysSdmDmPeripheralConfiguration`

\+ Field `id` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `modes` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `name` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `unit` was added to object type `SysSdmDmPeripheralInstance`

\+ Field `configurations` was added to object type `SysSdmDmPeripheralMode`

\+ Field `name` was added to object type `SysSdmDmPeripheralMode`

\+ Field `name` was added to object type `SysSdmDmPeripheralParameter`

\+ Field `value` was added to object type `SysSdmDmPeripheralParameter`

\+ Field `function` was added to object type `SysSdmDmPeripheralPinConfig`

\+ Field `pinName` was added to object type `SysSdmDmPeripheralPinConfig`

\+ Field `pinValue` was added to object type `SysSdmDmPeripheralPinConfig`

\+ Field `port` was added to object type `SysSdmDmPeripheralPinConfig`

\+ Field `portName` was added to object type `SysSdmDmPeripheralPinConfig`

\+ Field `name` was added to object type `SysSdmDmPeripheralPinDependencyConfig`

\+ Field `value` was added to object type `SysSdmDmPeripheralPinDependencyConfig`

\+ Field `configurations` was added to object type `SysSdmDmPort`

\+ Field `connections` was added to object type `SysSdmDmPort`

\+ Field `description` was added to object type `SysSdmDmPort`

\+ Field `functions` was added to object type `SysSdmDmPort`

\+ Field `id` was added to object type `SysSdmDmPort`

\+ Field `name` was added to object type `SysSdmDmPort`

\+ Field `pin` was added to object type `SysSdmDmPort`

\+ Field `symbolicName` was added to object type `SysSdmDmPort`

\+ Field `enumValues` was added to object type `SysSdmDmPortConfiguration`

\+ Field `id` was added to object type `SysSdmDmPortConfiguration`

\+ Field `name` was added to object type `SysSdmDmPortConfiguration`

\+ Field `altRef` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `configRef` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `functionName` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `gpioMode` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `peripheralInstanceName` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `port` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `portMode` was added to object type `SysSdmDmPortConfigurationDependency`

\+ Field `dependencies` was added to object type `SysSdmDmPortConfigurationEnumValue`

\+ Field `id` was added to object type `SysSdmDmPortConfigurationEnumValue`

\+ Field `name` was added to object type `SysSdmDmPortConfigurationEnumValue`

\+ Field `id` was added to object type `SysSdmDmPortConnection`

\+ Field `name` was added to object type `SysSdmDmPortConnection`

\+ Field `name` was added to object type `SysSdmDmPortFunction`

\+ Field `peripheralInstance` was added to object type `SysSdmDmPortFunction`

### 13-Mar-2026

#### 🔴 Breaking Changes (2)

##### Common

###### ✏️ Mutation

− Field `registerDesignUpload` was removed from object type `Mutation`

##### System Design

###### Fields

Δ Field `SysSdmSoftwareSpecification.category` changed type from `SysSdmSoftwareComponentCategory!` to `SysSdmSoftwareComponentCategory`

#### ⚠️ Dangerous Changes (3)

##### Design

###### Types

\+ Enum value `SKIPPED` was added to enum `DesignDataGenerationStatus_Preview`

###### Arguments

\+ Argument `revisionId: String` added to `DesignPreviewQueries.latestGeneration`

\+ Argument `revisionId: String` added to `DesignPreviewQueries.ruleCheckLatestExecution`

#### ✅ Non-Breaking Changes (11)

##### Design

###### ✏️ Mutation

\+ Field `design` was added to object type `Mutation`

###### Types

\+ Type `DesignMutations` was added

Δ Object type `DesignMutations` has description `**Experimental** Design related mutations entry point.`

\+ Type `DesignPreviewMutations` was added

Δ Object type `DesignPreviewMutations` has description `**Experimental** Entry point for the experimental design preview mutations, which may change or be removed without deprecation.`

###### Arguments

\+ Argument `input: DesignDataDesignUploadRegistrationInput_Preview!` added to `DesignPreviewMutations.registerDesignUpload`

###### Fields

\+ Field `preview` was added to object type `DesignMutations`

\+ Field `registerDesignUpload` was added to object type `DesignPreviewMutations`

\+ Field `revisionId` was added to object type `DesignDataGeneration_Preview`

\+ Field `revisionId` was added to object type `RuleCheckExecution_Preview`

##### Platform

###### Input / Payload

\+ Input field `postLogoutRedirectUris` of type `[String!]` was added to input object type `GloCreateAppOAuthClientInput`

### 12-Mar-2026

#### 🔴 Breaking Changes (7)

##### System Design

###### Types

− Type `SysSdmClientMetadata` was removed

###### Fields

− Field `metadata` was removed from object type `SysSdmConnection`

− Field `metadata` was removed from object type `SysSdmFunctionalBlock`

− Field `metadata` was removed from object type `SysSdmFunctionalModel`

− Field `metadata` was removed from object type `SysSdmHardwareComponent`

− Field `metadata` was removed from object type `SysSdmPort`

Δ Field `SysSdmSoftwareComponent.implementedBy` changed type from `String` to `[String!]`

#### ✅ Non-Breaking Changes (16)

##### Platform

###### ✏️ Mutation

\+ Field `solBldImportSoftwareProjects` was added to object type `Mutation`

\+ Argument `input: SolBldImportSoftwareProjectsInput!` added to `Mutation.solBldImportSoftwareProjects`

###### Types

\+ Type `SolBldImportSoftwareProjectsPayload` was added

\+ Type `SolBldImportSoftwareProjectsInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldImportSoftwareProjectsPayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID!` was added to input object type `SolBldImportSoftwareProjectsInput`

\+ Input field `softwareProjectIds` of type `[ID!]!` was added to input object type `SolBldImportSoftwareProjectsInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldImportSoftwareProjectsInput`

##### System Design

###### Fields

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmFunctionalBlock`

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmHardwareComponent`

Δ Field `SysSdmHardwareModel.sdmReferenceDesignator` changed type from `String` to `String!`

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmPort`

Δ Field `SysSdmSoftwareComponent.sdmReferenceDesignator` changed type from `String` to `String!`

Δ Field `SysSdmSoftwareModel.sdmReferenceDesignator` changed type from `String` to `String!`

Δ Field `SysSdmSoftwareSpecification.category` changed type from `SysSdmSoftwareComponentCategory` to `SysSdmSoftwareComponentCategory!`

Δ Field `SysSdmSoftwareStackInstance.dependencyIds` changed type from `[String!]` to `[String!]!`

### 11-Mar-2026

#### ✅ Non-Breaking Changes (14)

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmSoftwareModelFromConfigurationXml` was added to object type `Query`

Δ Field `Query.dmSoftwareModelFromConfigurationXml` is deprecated

\+ Argument `fileId: String!` added to `Query.dmSoftwareModelFromConfigurationXml`

Δ Directive `deprecated` was added to `Query.dmSoftwareModelFromConfigurationXml`

###### Types

\+ Type `DmSoftwareComponent` was added

Δ Object type `DmSoftwareComponent` has description `**Experimental** The software component used in configuration.xml, optionally linked to a library ID.`

\+ Type `DmSoftwareModel` was added

Δ Object type `DmSoftwareModel` has description `**Experimental** The software model for a device, including the device part number, its ports, and associated software components such as middleware and drivers.`

###### Fields

\+ Field `componentLibraryId` was added to object type `DmSoftwareComponent`

\+ Field `id` was added to object type `DmSoftwareComponent`

\+ Field `name` was added to object type `DmSoftwareComponent`

\+ Field `deviceMpn` was added to object type `DmSoftwareModel`

\+ Field `ports` was added to object type `DmSoftwareModel`

\+ Field `softwareComponents` was added to object type `DmSoftwareModel`

### 09-Mar-2026

#### 🔴 Breaking Changes (1)

##### Renesas (preview)

###### Input / Payload

\+ Input field `folderId` of type `String!` was added to input object type `RsaMotorStudioCreateProjectInput`

#### ✅ Non-Breaking Changes (152)

##### Common

###### Types

\+ Type `ParamSource` was added

\+ Enum value `IDENT_RESULT` was added to enum `ParamSource`

\+ Enum value `USER_ENTERED` was added to enum `ParamSource`

Δ Object type `ParamSource` has description `**Experimental**`

\+ Type `TuningModuleType` was added

\+ Enum value `BRUSHLESS_THREE_PHASE_MOTOR` was added to enum `TuningModuleType`

\+ Enum value `MOTOR` was added to enum `TuningModuleType`

\+ Enum value `PI_CURRENT_CONTROLLER` was added to enum `TuningModuleType`

\+ Enum value `PI_SPEED_CONTROLLER` was added to enum `TuningModuleType`

\+ Enum value `THREE_PHASE_INVERTER` was added to enum `TuningModuleType`

Δ Object type `TuningModuleType` has description `**Experimental**`

\+ Type `TuningType` was added

\+ Enum value `FOC3_PHASE_SENSORED` was added to enum `TuningType`

\+ Enum value `FOC3_PHASE_SENSORLESS` was added to enum `TuningType`

Δ Object type `TuningType` has description `**Experimental**`

##### Renesas (preview)

###### 🔍 Query

\+ Field `rsaMotorStudioTuningById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.rsaMotorStudioTuningById`

\+ Field `rsaMotorStudioTuningRevisionById` was added to object type `Query`

\+ Argument `revisionId: ID!` added to `Query.rsaMotorStudioTuningRevisionById`

\+ Field `rsaMotorStudioTuningRevisionsByTuningId` was added to object type `Query`

\+ Argument `tuningId: ID!` added to `Query.rsaMotorStudioTuningRevisionsByTuningId`

\+ Field `rsaMotorStudioTunings` was added to object type `Query`

###### ✏️ Mutation

\+ Field `rsaMotorStudioCreateTuning` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateTuningInput!` added to `Mutation.rsaMotorStudioCreateTuning`

\+ Field `rsaMotorStudioCreateTuningRevision` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateTuningRevisionInput!` added to `Mutation.rsaMotorStudioCreateTuningRevision`

\+ Field `rsaMotorStudioDeleteTuning` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteTuningInput!` added to `Mutation.rsaMotorStudioDeleteTuning`

\+ Field `rsaMotorStudioLinkTuningToProject` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioLinkTuningToProjectInput!` added to `Mutation.rsaMotorStudioLinkTuningToProject`

\+ Field `rsaMotorStudioUnlinkTuningFromProject` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUnlinkTuningFromProjectInput!` added to `Mutation.rsaMotorStudioUnlinkTuningFromProject`

\+ Field `rsaMotorStudioUpdateTuning` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUpdateTuningInput!` added to `Mutation.rsaMotorStudioUpdateTuning`

###### Types

\+ Type `RsaMotorStudioCreateTuningPayload` was added

Δ Object type `RsaMotorStudioCreateTuningPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateTuningRevisionPayload` was added

Δ Object type `RsaMotorStudioCreateTuningRevisionPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteTuningPayload` was added

Δ Object type `RsaMotorStudioDeleteTuningPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioLinkTuningToProjectPayload` was added

Δ Object type `RsaMotorStudioLinkTuningToProjectPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioTuning` was added

Δ Object type `RsaMotorStudioTuning` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningModule` was added

Δ Object type `RsaMotorStudioTuningModule` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningParameter` was added

Δ Object type `RsaMotorStudioTuningParameter` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningParameterEvidence` was added

Δ Object type `RsaMotorStudioTuningParameterEvidence` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningRevision` was added

Δ Object type `RsaMotorStudioTuningRevision` has description `**Experimental**`

\+ Type `RsaMotorStudioUnlinkTuningFromProjectPayload` was added

Δ Object type `RsaMotorStudioUnlinkTuningFromProjectPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateTuningPayload` was added

Δ Object type `RsaMotorStudioUpdateTuningPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateTuningInput` was added

Δ Object type `RsaMotorStudioCreateTuningInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateTuningRevisionInput` was added

Δ Object type `RsaMotorStudioCreateTuningRevisionInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteTuningInput` was added

Δ Object type `RsaMotorStudioDeleteTuningInput` has description `**Experimental**`

\+ Type `RsaMotorStudioLinkTuningToProjectInput` was added

Δ Object type `RsaMotorStudioLinkTuningToProjectInput` has description `**Experimental**`

\+ Type `RsaMotorStudioParameterEvidenceInput` was added

Δ Object type `RsaMotorStudioParameterEvidenceInput` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningModuleInput` was added

Δ Object type `RsaMotorStudioTuningModuleInput` has description `**Experimental**`

\+ Type `RsaMotorStudioTuningParameterInput` was added

Δ Object type `RsaMotorStudioTuningParameterInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUnlinkTuningFromProjectInput` was added

Δ Object type `RsaMotorStudioUnlinkTuningFromProjectInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateTuningInput` was added

Δ Object type `RsaMotorStudioUpdateTuningInput` has description `**Experimental**`

###### Fields

\+ Field `tuning` was added to object type `RsaMotorStudioCreateTuningPayload`

\+ Field `revision` was added to object type `RsaMotorStudioCreateTuningRevisionPayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteTuningPayload`

\+ Field `isSuccess` was added to object type `RsaMotorStudioLinkTuningToProjectPayload`

\+ Field `applicationMount` was added to object type `RsaMotorStudioTuning`

\+ Field `createdAt` was added to object type `RsaMotorStudioTuning`

\+ Field `createdBy` was added to object type `RsaMotorStudioTuning`

\+ Field `createdById` was added to object type `RsaMotorStudioTuning`

\+ Field `folderId` was added to object type `RsaMotorStudioTuning`

\+ Field `id` was added to object type `RsaMotorStudioTuning`

\+ Field `latestRevision` was added to object type `RsaMotorStudioTuning`

\+ Field `modifiedAt` was added to object type `RsaMotorStudioTuning`

\+ Field `modifiedBy` was added to object type `RsaMotorStudioTuning`

\+ Field `modifiedById` was added to object type `RsaMotorStudioTuning`

\+ Field `motorStudioProject` was added to object type `RsaMotorStudioTuning`

\+ Field `name` was added to object type `RsaMotorStudioTuning`

\+ Field `path` was added to object type `RsaMotorStudioTuning`

\+ Field `revisions` was added to object type `RsaMotorStudioTuning`

\+ Field `tuningType` was added to object type `RsaMotorStudioTuning`

\+ Field `moduleType` was added to object type `RsaMotorStudioTuningModule`

\+ Field `parameters` was added to object type `RsaMotorStudioTuningModule`

\+ Field `path` was added to object type `RsaMotorStudioTuningModule`

\+ Field `evidence` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `name` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `path` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `source` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `units` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `value` was added to object type `RsaMotorStudioTuningParameter`

\+ Field `note` was added to object type `RsaMotorStudioTuningParameterEvidence`

\+ Field `scopeCapture` was added to object type `RsaMotorStudioTuningParameterEvidence`

\+ Field `scopeCaptureId` was added to object type `RsaMotorStudioTuningParameterEvidence`

\+ Field `scopeProjectId` was added to object type `RsaMotorStudioTuningParameterEvidence`

\+ Field `createdAt` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `createdBy` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `createdById` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `id` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `modules` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `resultParameters` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `revision` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `tuning` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `tuningId` was added to object type `RsaMotorStudioTuningRevision`

\+ Field `isSuccess` was added to object type `RsaMotorStudioUnlinkTuningFromProjectPayload`

\+ Field `tuning` was added to object type `RsaMotorStudioUpdateTuningPayload`

\+ Field `folderId` was added to object type `RsaMotorStudioProject`

\+ Field `parentSolutions` was added to object type `RsaMotorStudioProject`

\+ Field `tunings` was added to object type `RsaMotorStudioProject`

###### Input / Payload

\+ Input field `applicationMount` of type `String!` was added to input object type `RsaMotorStudioCreateTuningInput`

\+ Input field `folderId` of type `String!` was added to input object type `RsaMotorStudioCreateTuningInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioCreateTuningInput`

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioCreateTuningInput`

\+ Input field `tuningType` of type `TuningType!` was added to input object type `RsaMotorStudioCreateTuningInput`

\+ Input field `modules` of type `[RsaMotorStudioTuningModuleInput!]!` was added to input object type `RsaMotorStudioCreateTuningRevisionInput`

\+ Input field `tuningId` of type `ID!` was added to input object type `RsaMotorStudioCreateTuningRevisionInput`

\+ Input field `id` of type `ID!` was added to input object type `RsaMotorStudioDeleteTuningInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioLinkTuningToProjectInput`

\+ Input field `tuningId` of type `ID!` was added to input object type `RsaMotorStudioLinkTuningToProjectInput`

\+ Input field `note` of type `String` was added to input object type `RsaMotorStudioParameterEvidenceInput`

\+ Input field `scopeCaptureId` of type `String` was added to input object type `RsaMotorStudioParameterEvidenceInput`

\+ Input field `moduleType` of type `TuningModuleType!` was added to input object type `RsaMotorStudioTuningModuleInput`

\+ Input field `parameters` of type `[RsaMotorStudioTuningParameterInput!]!` was added to input object type `RsaMotorStudioTuningModuleInput`

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioTuningModuleInput`

\+ Input field `evidence` of type `RsaMotorStudioParameterEvidenceInput` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `source` of type `ParamSource!` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `units` of type `String` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `value` of type `String!` was added to input object type `RsaMotorStudioTuningParameterInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioUnlinkTuningFromProjectInput`

\+ Input field `tuningId` of type `ID!` was added to input object type `RsaMotorStudioUnlinkTuningFromProjectInput`

\+ Input field `applicationMount` of type `String` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `folderId` of type `String` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `id` of type `ID!` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `name` of type `String` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `path` of type `String` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `tuningType` of type `TuningType` was added to input object type `RsaMotorStudioUpdateTuningInput`

\+ Input field `folderId` of type `StringOperationFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `folderId` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `folderId` of type `String` was added to input object type `RsaMotorStudioUpdateProjectInput`

### 05-Mar-2026

#### 🔴 Breaking Changes (7)

##### System Design

###### Fields

− Field `metadata` was removed from object type `SysSdmDeviceModel`

− Field `metadata` was removed from object type `SysSdmHardwareModel`

− Field `dependencyIds` was removed from object type `SysSdmSoftwareComponent`

− Field `metadata` was removed from object type `SysSdmSoftwareComponent`

− Field `peripheralInstanceId` was removed from object type `SysSdmSoftwareComponent`

− Field `specification` was removed from object type `SysSdmSoftwareComponent`

− Field `metadata` was removed from object type `SysSdmSoftwareModel`

#### ⚠️ Dangerous Changes (3)

##### Platform

###### Types

\+ Member `GloAppOAuthClientGrantAccessError` was added to Union type `GloCreateAppError`

\+ Member `GloAppOAuthClientGrantAccessError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Member `GloAppDeletedError` was added to Union type `GloInstallAppError`

#### ✅ Non-Breaking Changes (36)

##### Platform

###### ✏️ Mutation

\+ Field `gloUninstallApp` was added to object type `Mutation`

\+ Argument `input: GloUninstallAppInput!` added to `Mutation.gloUninstallApp`

###### Types

\+ Type `GloAppNotUninstalledError` was added

Δ `GloAppNotUninstalledError` object implements `Error` interface

Δ Object type `GloAppNotUninstalledError` has description ``Error that occurs when a `GloApp` cannot be uninstalled from a workspace.``

\+ Type `GloAppOAuthClientGrantAccessError` was added

Δ `GloAppOAuthClientGrantAccessError` object implements `Error` interface

Δ Object type `GloAppOAuthClientGrantAccessError` has description `Error that occurs when granting access to a *OAuth client* fails.`

\+ Type `GloUninstallAppPayload` was added

\+ Type `GloUninstallAppError` was added

\+ Member `GloAppNotUninstalledError` was added to Union type `GloUninstallAppError`

\+ Member `GloAppDeletedError` was added to Union type `GloUninstallAppError`

\+ Type `GloUninstallAppInput` was added

###### Fields

\+ Field `message` was added to object type `GloAppNotUninstalledError`

\+ Field `message` was added to object type `GloAppOAuthClientGrantAccessError`

\+ Field `errors` was added to object type `GloUninstallAppPayload`

\+ Field `gloApp` was added to object type `GloUninstallAppPayload`

\+ Field `systemDataModel` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `GloUninstallAppInput`

##### System Design

###### 🔍 Query

\+ Field `sysSdmSystemModelsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sysSdmSystemModelsByIds`

###### Types

\+ Type `SysSdmSoftwareStackInstance` was added

Δ Object type `SysSdmSoftwareStackInstance` has description `**Experimental**`

###### Fields

\+ Field `dependencyIds` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `id` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `name` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `parameters` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `peripheralInstanceId` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `specification` was added to object type `SysSdmSoftwareStackInstance`

\+ Field `boardName` was added to object type `SysSdmDeviceModel`

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmHardwareModel`

\+ Field `implementedBy` was added to object type `SysSdmSoftwareComponent`

\+ Field `libraryComponentId` was added to object type `SysSdmSoftwareComponent`

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmSoftwareComponent`

\+ Field `sdmReferenceDesignator` was added to object type `SysSdmSoftwareModel`

\+ Field `softwareStackInstances` was added to object type `SysSdmSoftwareModel`

### 04-Mar-2026

#### 🔴 Breaking Changes (1)

##### Platform

###### Input / Payload

\+ Input field `sdmReferenceDesignator` of type `String!` was added to input object type `SolBldScaffoldingBySdmInput`

#### ✅ Non-Breaking Changes (218)

##### Common

###### ✏️ Mutation

\+ Field `registerDesignUpload` was added to object type `Mutation`

\+ Argument `input: DesignDataDesignUploadRegistrationInput_Preview!` added to `Mutation.registerDesignUpload`

##### Design

###### 🔍 Query

\+ Field `design` was added to object type `Query`

###### Types

\+ Type `DesignData_Preview` was added

Δ Object type `DesignData_Preview` has description `**Experimental** Represents the design data extracted from a design project.`

\+ Type `DesignDataComponent_Preview` was added

Δ Object type `DesignDataComponent_Preview` has description `**Experimental** Represents a component in the design.`

\+ Type `DesignDataComponentParameter_Preview` was added

Δ Object type `DesignDataComponentParameter_Preview` has description `**Experimental** Represents a parameter associated with a component.`

\+ Type `DesignDataConfiguration_Preview` was added

Δ Object type `DesignDataConfiguration_Preview` has description `**Experimental** Represents the configuration settings for a design.`

\+ Type `DesignDataCustomCheckConfigurationItem_Preview` was added

Δ Object type `DesignDataCustomCheckConfigurationItem_Preview` has description `**Experimental** Represents a custom check configuration item in the design.`

\+ Type `DesignDataDocument_Preview` was added

Δ Object type `DesignDataDocument_Preview` has description `**Experimental** Represents a document within the design project.`

\+ Type `DesignDataGeneration_Preview` was added

Δ Object type `DesignDataGeneration_Preview` has description `**Experimental** Represents a design data generation process and its result.`

\+ Type `DesignDataLine_Preview` was added

Δ Object type `DesignDataLine_Preview` has description `**Experimental** Represents a line segment in the design.`

\+ Type `DesignDataLocation_Preview` was added

Δ Object type `DesignDataLocation_Preview` has description `**Experimental** Represents a 2D coordinate location.`

\+ Type `DesignDataNet_Preview` was added

Δ Object type `DesignDataNet_Preview` has description `**Experimental** Represents a net (electrical connection) in the design.`

\+ Type `DesignDataNetItem_Preview` was added

Δ Object type `DesignDataNetItem_Preview` has description `**Experimental** Represents an item belonging to a net.`

\+ Type `DesignDataNetParameter_Preview` was added

Δ Object type `DesignDataNetParameter_Preview` has description `**Experimental** Represents a parameter associated with a net.`

\+ Type `DesignDataPart_Preview` was added

Δ Object type `DesignDataPart_Preview` has description `**Experimental** Represents a part within a component.`

\+ Type `DesignDataPartParameter_Preview` was added

Δ Object type `DesignDataPartParameter_Preview` has description `**Experimental** Represents a parameter associated with a part.`

\+ Type `DesignDataPin_Preview` was added

Δ Object type `DesignDataPin_Preview` has description `**Experimental** Represents a pin on a component or part.`

\+ Type `DesignDataRectangle_Preview` was added

Δ Object type `DesignDataRectangle_Preview` has description `**Experimental** Represents an axis-aligned rectangle.`

\+ Type `DesignDataVariant_Preview` was added

Δ Object type `DesignDataVariant_Preview` has description `**Experimental** Represents a project variant in the design.`

\+ Type `DesignDataVariation_Preview` was added

Δ Object type `DesignDataVariation_Preview` has description `**Experimental** Represents a variation applied to a component within a project variant.`

\+ Type `DesignPreviewQueries` was added

Δ Object type `DesignPreviewQueries` has description `**Experimental** Entry point for the experimental design preview queries, which may change or be removed without deprecation.`

\+ Type `DesignQueries` was added

Δ Object type `DesignQueries` has description `**Experimental** Design related queries entry point.`

\+ Type `RuleCheck_Preview` was added

Δ Object type `RuleCheck_Preview` has description `**Experimental** Represents a rule check definition.`

\+ Type `RuleCheckExecution_Preview` was added

Δ Object type `RuleCheckExecution_Preview` has description `**Experimental** Represents the execution of rule checks against a design.`

\+ Type `RuleViolation_Preview` was added

Δ Object type `RuleViolation_Preview` has description `**Experimental** Represents a violation detected during a rule check execution.`

\+ Type `RuleViolationRelatedObject_Preview` was added

Δ Object type `RuleViolationRelatedObject_Preview` has description `**Experimental** Represents a design object related to a rule violation.`

\+ Type `DesignDataErrorReportLevel_Preview` was added

\+ Enum value `ERROR` was added to enum `DesignDataErrorReportLevel_Preview`

\+ Enum value `FATAL` was added to enum `DesignDataErrorReportLevel_Preview`

\+ Enum value `NO_REPORT` was added to enum `DesignDataErrorReportLevel_Preview`

\+ Enum value `WARNING` was added to enum `DesignDataErrorReportLevel_Preview`

Δ Object type `DesignDataErrorReportLevel_Preview` has description `**Experimental** Represents the error level used for reporting rule check violations.`

\+ Type `DesignDataGenerationStatus_Preview` was added

\+ Enum value `COMPLETED` was added to enum `DesignDataGenerationStatus_Preview`

\+ Enum value `FAILED` was added to enum `DesignDataGenerationStatus_Preview`

\+ Enum value `IN_PROGRESS` was added to enum `DesignDataGenerationStatus_Preview`

\+ Enum value `PENDING` was added to enum `DesignDataGenerationStatus_Preview`

Δ Object type `DesignDataGenerationStatus_Preview` has description `**Experimental** Represents the status of the design data generation.`

\+ Type `DesignDataObjectType_Preview` was added

\+ Enum value `COMPONENT` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `DOCUMENT` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `LINE` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `NET` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `NET_ITEM` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `PART` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `PIN` was added to enum `DesignDataObjectType_Preview`

\+ Enum value `VARIANT` was added to enum `DesignDataObjectType_Preview`

Δ Object type `DesignDataObjectType_Preview` has description `**Experimental** Represents the type of a design object.`

\+ Type `DesignDataVariationKind_Preview` was added

\+ Enum value `ALTERNATE` was added to enum `DesignDataVariationKind_Preview`

\+ Enum value `NONE` was added to enum `DesignDataVariationKind_Preview`

\+ Enum value `NOT_FITTED` was added to enum `DesignDataVariationKind_Preview`

Δ Object type `DesignDataVariationKind_Preview` has description `**Experimental** Represents the kind of variation applied to a component.`

\+ Type `RuleCheckExecutionStatus_Preview` was added

\+ Enum value `COMPLETED` was added to enum `RuleCheckExecutionStatus_Preview`

\+ Enum value `FAILED` was added to enum `RuleCheckExecutionStatus_Preview`

\+ Enum value `PENDING` was added to enum `RuleCheckExecutionStatus_Preview`

\+ Enum value `RUNNING` was added to enum `RuleCheckExecutionStatus_Preview`

Δ Object type `RuleCheckExecutionStatus_Preview` has description `**Experimental** Represents the status of a rule check execution.`

\+ Type `RuleCheckType_Preview` was added

\+ Enum value `DRC` was added to enum `RuleCheckType_Preview`

\+ Enum value `ERC` was added to enum `RuleCheckType_Preview`

Δ Object type `RuleCheckType_Preview` has description `**Experimental** Represents the type of a rule check.`

\+ Type `RuleFailureCode_Preview` was added

\+ Enum value `INTERNAL_SERVER_ERROR` was added to enum `RuleFailureCode_Preview`

\+ Enum value `INVALID_RETURN_VALUE_FROM_USER_SCRIPT` was added to enum `RuleFailureCode_Preview`

\+ Enum value `UNHANDLED_EXCEPTION_FROM_USER_SCRIPT` was added to enum `RuleFailureCode_Preview`

Δ Object type `RuleFailureCode_Preview` has description `**Experimental** Represents the reason a rule check execution failed.`

\+ Type `RuleViolationErrorReportLevel_Preview` was added

\+ Enum value `ERROR` was added to enum `RuleViolationErrorReportLevel_Preview`

\+ Enum value `FATAL` was added to enum `RuleViolationErrorReportLevel_Preview`

\+ Enum value `SKIPPED` was added to enum `RuleViolationErrorReportLevel_Preview`

\+ Enum value `WARNING` was added to enum `RuleViolationErrorReportLevel_Preview`

Δ Object type `RuleViolationErrorReportLevel_Preview` has description `**Experimental** Represents the severity level of a rule violation.`

\+ Type `DesignDataDesignUploadRegistrationInput_Preview` was added

Δ Object type `DesignDataDesignUploadRegistrationInput_Preview` has description `**Experimental** Represents input value for generate design data mutation.`

###### Arguments

\+ Argument `designGrid: ID!` added to `DesignPreviewQueries.latestGeneration`

\+ Argument `designGrid: ID!` added to `DesignPreviewQueries.latestGenerationByFileId`

\+ Argument `fileId: String!` added to `DesignPreviewQueries.latestGenerationByFileId`

\+ Argument `id: ID!` added to `DesignPreviewQueries.ruleCheckById`

\+ Argument `designId: ID!` added to `DesignPreviewQueries.ruleCheckLatestExecution`

\+ Argument `ids: [ID!]!` added to `DesignPreviewQueries.ruleChecksByIds`

###### Fields

\+ Field `configuration` was added to object type `DesignData_Preview`

\+ Field `documents` was added to object type `DesignData_Preview`

\+ Field `variants` was added to object type `DesignData_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataComponent_Preview`

\+ Field `location` was added to object type `DesignDataComponent_Preview`

\+ Field `logicalDesignator` was added to object type `DesignDataComponent_Preview`

\+ Field `parameters` was added to object type `DesignDataComponent_Preview`

\+ Field `parts` was added to object type `DesignDataComponent_Preview`

\+ Field `physicalDesignator` was added to object type `DesignDataComponent_Preview`

\+ Field `uniqueId` was added to object type `DesignDataComponent_Preview`

\+ Field `name` was added to object type `DesignDataComponentParameter_Preview`

\+ Field `value` was added to object type `DesignDataComponentParameter_Preview`

\+ Field `customChecks` was added to object type `DesignDataConfiguration_Preview`

\+ Field `customCheckId` was added to object type `DesignDataCustomCheckConfigurationItem_Preview`

\+ Field `errorReportLevel` was added to object type `DesignDataCustomCheckConfigurationItem_Preview`

\+ Field `name` was added to object type `DesignDataCustomCheckConfigurationItem_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataDocument_Preview`

\+ Field `components` was added to object type `DesignDataDocument_Preview`

\+ Field `documentId` was added to object type `DesignDataDocument_Preview`

\+ Field `location` was added to object type `DesignDataDocument_Preview`

\+ Field `nets` was added to object type `DesignDataDocument_Preview`

\+ Field `designData` was added to object type `DesignDataGeneration_Preview`

\+ Field `designId` was added to object type `DesignDataGeneration_Preview`

\+ Field `message` was added to object type `DesignDataGeneration_Preview`

\+ Field `status` was added to object type `DesignDataGeneration_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataLine_Preview`

\+ Field `location` was added to object type `DesignDataLine_Preview`

\+ Field `uniqueId` was added to object type `DesignDataLine_Preview`

\+ Field `x` was added to object type `DesignDataLocation_Preview`

\+ Field `y` was added to object type `DesignDataLocation_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataNet_Preview`

\+ Field `calculatedNetName` was added to object type `DesignDataNet_Preview`

\+ Field `color` was added to object type `DesignDataNet_Preview`

\+ Field `lines` was added to object type `DesignDataNet_Preview`

\+ Field `location` was added to object type `DesignDataNet_Preview`

\+ Field `name` was added to object type `DesignDataNet_Preview`

\+ Field `netItems` was added to object type `DesignDataNet_Preview`

\+ Field `parameters` was added to object type `DesignDataNet_Preview`

\+ Field `pins` was added to object type `DesignDataNet_Preview`

\+ Field `uniqueId` was added to object type `DesignDataNet_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataNetItem_Preview`

\+ Field `kind` was added to object type `DesignDataNetItem_Preview`

\+ Field `location` was added to object type `DesignDataNetItem_Preview`

\+ Field `portName` was added to object type `DesignDataNetItem_Preview`

\+ Field `uniqueId` was added to object type `DesignDataNetItem_Preview`

\+ Field `name` was added to object type `DesignDataNetParameter_Preview`

\+ Field `value` was added to object type `DesignDataNetParameter_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataPart_Preview`

\+ Field `itemGuid` was added to object type `DesignDataPart_Preview`

\+ Field `location` was added to object type `DesignDataPart_Preview`

\+ Field `logicalDesignator` was added to object type `DesignDataPart_Preview`

\+ Field `parameters` was added to object type `DesignDataPart_Preview`

\+ Field `physicalDesignator` was added to object type `DesignDataPart_Preview`

\+ Field `pins` was added to object type `DesignDataPart_Preview`

\+ Field `revisionGuid` was added to object type `DesignDataPart_Preview`

\+ Field `uniqueId` was added to object type `DesignDataPart_Preview`

\+ Field `variantId` was added to object type `DesignDataPart_Preview`

\+ Field `variationKind` was added to object type `DesignDataPart_Preview`

\+ Field `vaultGuid` was added to object type `DesignDataPart_Preview`

\+ Field `name` was added to object type `DesignDataPartParameter_Preview`

\+ Field `value` was added to object type `DesignDataPartParameter_Preview`

\+ Field `boundingRectangle` was added to object type `DesignDataPin_Preview`

\+ Field `location` was added to object type `DesignDataPin_Preview`

\+ Field `name` was added to object type `DesignDataPin_Preview`

\+ Field `number` was added to object type `DesignDataPin_Preview`

\+ Field `uniqueId` was added to object type `DesignDataPin_Preview`

\+ Field `bottom` was added to object type `DesignDataRectangle_Preview`

\+ Field `left` was added to object type `DesignDataRectangle_Preview`

\+ Field `right` was added to object type `DesignDataRectangle_Preview`

\+ Field `top` was added to object type `DesignDataRectangle_Preview`

\+ Field `name` was added to object type `DesignDataVariant_Preview`

\+ Field `variantGuid` was added to object type `DesignDataVariant_Preview`

\+ Field `variations` was added to object type `DesignDataVariant_Preview`

\+ Field `alternatePart` was added to object type `DesignDataVariation_Preview`

\+ Field `componentDesignator` was added to object type `DesignDataVariation_Preview`

\+ Field `componentUniqueId` was added to object type `DesignDataVariation_Preview`

\+ Field `kind` was added to object type `DesignDataVariation_Preview`

\+ Field `latestGeneration` was added to object type `DesignPreviewQueries`

\+ Field `latestGenerationByFileId` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckById` was added to object type `DesignPreviewQueries`

\+ Field `ruleCheckLatestExecution` was added to object type `DesignPreviewQueries`

\+ Field `ruleChecksByAuth` was added to object type `DesignPreviewQueries`

\+ Field `ruleChecksByIds` was added to object type `DesignPreviewQueries`

\+ Field `preview` was added to object type `DesignQueries`

\+ Field `defaultErrorReportLevel` was added to object type `RuleCheck_Preview`

\+ Field `description` was added to object type `RuleCheck_Preview`

\+ Field `id` was added to object type `RuleCheck_Preview`

\+ Field `name` was added to object type `RuleCheck_Preview`

\+ Field `type` was added to object type `RuleCheck_Preview`

\+ Field `designId` was added to object type `RuleCheckExecution_Preview`

\+ Field `status` was added to object type `RuleCheckExecution_Preview`

\+ Field `violations` was added to object type `RuleCheckExecution_Preview`

\+ Field `boundingRectangle` was added to object type `RuleViolation_Preview`

\+ Field `documentId` was added to object type `RuleViolation_Preview`

\+ Field `errorReportLevel` was added to object type `RuleViolation_Preview`

\+ Field `errorText` was added to object type `RuleViolation_Preview`

\+ Field `location` was added to object type `RuleViolation_Preview`

\+ Field `relatedObjects` was added to object type `RuleViolation_Preview`

\+ Field `ruleDescription` was added to object type `RuleViolation_Preview`

\+ Field `ruleFailureCode` was added to object type `RuleViolation_Preview`

\+ Field `ruleName` was added to object type `RuleViolation_Preview`

\+ Field `ruleType` was added to object type `RuleViolation_Preview`

\+ Field `boundingRectangle` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `designator` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `documentId` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `location` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `name` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `type` was added to object type `RuleViolationRelatedObject_Preview`

\+ Field `uniqueId` was added to object type `RuleViolationRelatedObject_Preview`

###### Input / Payload

\+ Input field `designId` of type `ID!` was added to input object type `DesignDataDesignUploadRegistrationInput_Preview`

\+ Input field `fileId` of type `String!` was added to input object type `DesignDataDesignUploadRegistrationInput_Preview`

### 03-Mar-2026

#### 🔴 Breaking Changes (39)

##### System Design

###### Types

− Type `SysSdmPortType` was removed

###### Fields

Δ Field `SysSdmClientMetadata.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmConnection.endpoints` changed type from `[SysSdmEndpoint!]!` to `[SysSdmEndpoint!]`

Δ Field `SysSdmConnection.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmConnection.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmDeviceModel.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmDeviceModel.peripherals` changed type from `[SysSdmPeripheral!]!` to `[SysSdmPeripheral!]`

Δ Field `SysSdmDeviceModel.ports` changed type from `[SysSdmPort!]!` to `[SysSdmPort!]`

Δ Field `SysSdmFunctionalBlock.hardwareComponentIds` changed type from `[String!]!` to `[String!]`

Δ Field `SysSdmFunctionalBlock.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmFunctionalBlock.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmFunctionalBlock.ports` changed type from `[SysSdmPort!]!` to `[SysSdmPort!]`

Δ Field `SysSdmFunctionalModel.connections` changed type from `[SysSdmConnection!]!` to `[SysSdmConnection!]`

Δ Field `SysSdmFunctionalModel.functionalBlocks` changed type from `[SysSdmFunctionalBlock!]!` to `[SysSdmFunctionalBlock!]`

Δ Field `SysSdmFunctionalModel.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmHardwareComponent.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmHardwareComponent.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmHardwareModel.functionalBlockIds` changed type from `[String!]!` to `[String!]`

Δ Field `SysSdmHardwareModel.hardwareComponents` changed type from `[SysSdmHardwareComponent!]!` to `[SysSdmHardwareComponent!]`

Δ Field `SysSdmHardwareModel.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmPeripheral.instances` changed type from `[SysSdmPeripheralInstance!]!` to `[SysSdmPeripheralInstance!]`

Δ Field `SysSdmPeripheralConfiguration.parameters` changed type from `[SysSdmPeripheralParameter!]!` to `[SysSdmPeripheralParameter!]`

Δ Field `SysSdmPeripheralConfiguration.pinConfigs` changed type from `[SysSdmPeripheralPinConfig!]!` to `[SysSdmPeripheralPinConfig!]`

Δ Field `SysSdmPeripheralConfiguration.pinDependencyConfigs` changed type from `[SysSdmPeripheralPinDependencyConfig!]!` to `[SysSdmPeripheralPinDependencyConfig!]`

Δ Field `SysSdmPeripheralInstance.modes` changed type from `[SysSdmPeripheralMode!]!` to `[SysSdmPeripheralMode!]`

Δ Field `SysSdmPeripheralMode.configurations` changed type from `[SysSdmPeripheralConfiguration!]!` to `[SysSdmPeripheralConfiguration!]`

− Field `quantity` was removed from object type `SysSdmPort`

Δ Field `SysSdmPort.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmPort.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmPort.portType` changed type from `SysSdmPortType` to `String`

Δ Field `SysSdmSoftwareComponent.dependencyIds` changed type from `[String!]!` to `[String!]`

Δ Field `SysSdmSoftwareComponent.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmSoftwareComponent.parameters` changed type from `[SysSdmParameter!]!` to `[SysSdmParameter!]`

Δ Field `SysSdmSoftwareModel.metadata` changed type from `[SysSdmClientMetadata!]!` to `[SysSdmClientMetadata!]`

Δ Field `SysSdmSoftwareModel.softwareComponents` changed type from `[SysSdmSoftwareComponent!]!` to `[SysSdmSoftwareComponent!]`

Δ Field `SysSdmSystemModel.versions` changed type from `[SysSdmSystemModelVersion!]!` to `[SysSdmSystemModelVersion!]`

Δ Field `SysSdmSystemModelVersion.deviceModels` changed type from `[SysSdmDeviceModel!]!` to `[SysSdmDeviceModel!]`

Δ Field `SysSdmSystemModelVersion.hardwareModels` changed type from `[SysSdmHardwareModel!]!` to `[SysSdmHardwareModel!]`

Δ Field `SysSdmSystemModelVersion.softwareModels` changed type from `[SysSdmSoftwareModel!]!` to `[SysSdmSoftwareModel!]`

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### Arguments

\+ Argument `includeBoardFixedPorts: Boolean!` (with default value) added to `DmDeviceModelAsConfigured.devicePorts`

#### ✅ Non-Breaking Changes (26)

##### Renesas (preview)

###### Types

\+ Type `DmDeviceBoard` was added

Δ Object type `DmDeviceBoard` has description `**Experimental** Represents an available device board for a specific device model.`

\+ Type `DmModelEvaluationStrategy` was added

\+ Enum value `DEVICES_ONLY` was added to enum `DmModelEvaluationStrategy`

\+ Enum value `DEVICES_PREFER_BOARD_COMPATIBLE` was added to enum `DmModelEvaluationStrategy`

Δ Object type `DmModelEvaluationStrategy` has description `**Experimental** Controls how device models are evaluated with respect to devices and boards, including preferred and fallback behaviors.`

###### Fields

\+ Field `isCompatible` was added to object type `DmDeviceBoard`

\+ Field `name` was added to object type `DmDeviceBoard`

\+ Field `board` was added to object type `DmDeviceModelAsConfigured`

\+ Field `isUserAssignable` was added to object type `DmPort`

\+ Field `boardName` was added to object type `DmResolverResult`

###### Input / Payload

\+ Input field `evaluationStrategy` of type `DmModelEvaluationStrategy` was added to input object type `DmExecuteDeviceEvaluationInput`

##### System Design

###### 🔍 Query

\+ Field `sysLibSoftwareComponentById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sysLibSoftwareComponentById`

\+ Field `sysLibSoftwareComponents` was added to object type `Query`

###### Types

\+ Type `SysLibSoftwareComponent` was added

Δ Object type `SysLibSoftwareComponent` has description `**Experimental**`

\+ Type `SysLibSoftwareComponentSpecification` was added

Δ Object type `SysLibSoftwareComponentSpecification` has description `**Experimental**`

###### Fields

\+ Field `category` was added to object type `SysLibSoftwareComponent`

\+ Field `id` was added to object type `SysLibSoftwareComponent`

\+ Field `name` was added to object type `SysLibSoftwareComponent`

\+ Field `specifications` was added to object type `SysLibSoftwareComponent`

\+ Field `ecosystem` was added to object type `SysLibSoftwareComponentSpecification`

\+ Field `name` was added to object type `SysLibSoftwareComponentSpecification`

\+ Field `vendor` was added to object type `SysLibSoftwareComponentSpecification`

### 02-Mar-2026

#### ✅ Non-Breaking Changes (6)

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingBySdm` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingBySdmInput!` added to `Mutation.solBldScaffoldingBySdm`

###### Types

\+ Type `SolBldScaffoldingBySdmPayload` was added

\+ Type `SolBldScaffoldingBySdmInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingBySdmPayload`

###### Input / Payload

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldScaffoldingBySdmInput`

### 27-Feb-2026

#### ✅ Non-Breaking Changes (465)

##### Common

###### Types

\+ Type `UUID` was added

\+ Type `TriggerEdge` was added

\+ Enum value `BOTH` was added to enum `TriggerEdge`

\+ Enum value `FALL` was added to enum `TriggerEdge`

\+ Enum value `RISE` was added to enum `TriggerEdge`

Δ Object type `TriggerEdge` has description `**Experimental**`

\+ Type `TriggerMode` was added

\+ Enum value `AUTO` was added to enum `TriggerMode`

\+ Enum value `NORMAL` was added to enum `TriggerMode`

\+ Enum value `SINGLE` was added to enum `TriggerMode`

Δ Object type `TriggerMode` has description `**Experimental**`

\+ Type `BooleanOperationFilterInput` was added

\+ Type `GridFilterInput` was added

Δ Object type `GridFilterInput` has description `**Experimental**`

\+ Type `IntOperationFilterInput` was added

\+ Type `MotorStudioProjectGridFilterInput` was added

Δ Object type `MotorStudioProjectGridFilterInput` has description `**Experimental**`

\+ Type `MotorStudioProjectGridSortInput` was added

Δ Object type `MotorStudioProjectGridSortInput` has description `**Experimental**`

\+ Type `PathFilterInput` was added

Δ Object type `PathFilterInput` has description `**Experimental**`

\+ Type `UuidOperationFilterInput` was added

Δ Object type `UuidOperationFilterInput` has description `**Experimental**`

###### Input / Payload

\+ Input field `eq` of type `Boolean` was added to input object type `BooleanOperationFilterInput`

\+ Input field `neq` of type `Boolean` was added to input object type `BooleanOperationFilterInput`

\+ Input field `and` of type `[GridFilterInput!]` was added to input object type `GridFilterInput`

\+ Input field `hasTenant` of type `BooleanOperationFilterInput` was added to input object type `GridFilterInput`

\+ Input field `isInvalid` of type `BooleanOperationFilterInput` was added to input object type `GridFilterInput`

\+ Input field `isWellFormed` of type `BooleanOperationFilterInput` was added to input object type `GridFilterInput`

\+ Input field `or` of type `[GridFilterInput!]` was added to input object type `GridFilterInput`

\+ Input field `resourcePath` of type `PathFilterInput` was added to input object type `GridFilterInput`

\+ Input field `value` of type `StringOperationFilterInput` was added to input object type `GridFilterInput`

\+ Input field `eq` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `gt` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `gte` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `in` of type `[Int]` was added to input object type `IntOperationFilterInput`

\+ Input field `lt` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `lte` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `neq` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `ngt` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `ngte` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `nin` of type `[Int]` was added to input object type `IntOperationFilterInput`

\+ Input field `nlt` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `nlte` of type `Int` was added to input object type `IntOperationFilterInput`

\+ Input field `and` of type `[MotorStudioProjectGridFilterInput!]` was added to input object type `MotorStudioProjectGridFilterInput`

\+ Input field `or` of type `[MotorStudioProjectGridFilterInput!]` was added to input object type `MotorStudioProjectGridFilterInput`

\+ Input field `projectId` of type `StringOperationFilterInput` was added to input object type `MotorStudioProjectGridFilterInput`

\+ Input field `tenantId` of type `UuidOperationFilterInput` was added to input object type `MotorStudioProjectGridFilterInput`

\+ Input field `projectId` of type `SortEnumType` was added to input object type `MotorStudioProjectGridSortInput`

\+ Input field `tenantId` of type `SortEnumType` was added to input object type `MotorStudioProjectGridSortInput`

\+ Input field `and` of type `[PathFilterInput!]` was added to input object type `PathFilterInput`

\+ Input field `count` of type `IntOperationFilterInput` was added to input object type `PathFilterInput`

\+ Input field `isEmpty` of type `BooleanOperationFilterInput` was added to input object type `PathFilterInput`

\+ Input field `or` of type `[PathFilterInput!]` was added to input object type `PathFilterInput`

\+ Input field `eq` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `gt` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `gte` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `in` of type `[UUID]` was added to input object type `UuidOperationFilterInput`

\+ Input field `lt` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `lte` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `neq` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `ngt` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `ngte` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `nin` of type `[UUID]` was added to input object type `UuidOperationFilterInput`

\+ Input field `nlt` of type `UUID` was added to input object type `UuidOperationFilterInput`

\+ Input field `nlte` of type `UUID` was added to input object type `UuidOperationFilterInput`

##### Platform

###### ✏️ Mutation

\+ Field `solBldImportRefDesigns` was added to object type `Mutation`

\+ Argument `input: SolBldImportRefDesignsInput!` added to `Mutation.solBldImportRefDesigns`

\+ Field `solBldLinkSolution` was added to object type `Mutation`

\+ Argument `input: SolBldLinkSolutionInput!` added to `Mutation.solBldLinkSolution`

###### Types

\+ Type `SolBldImportRefDesignsPayload` was added

\+ Type `SolBldLinkSolutionPayload` was added

\+ Type `DesWorkspaceUserSortInput` was added

Δ Object type `DesWorkspaceUserSortInput` has description `**Experimental**`

\+ Type `SolBldImportRefDesignsInput` was added

\+ Type `SolBldLinkSolutionInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldImportRefDesignsPayload`

\+ Field `solutionId` was added to object type `SolBldLinkSolutionPayload`

###### Input / Payload

\+ Input field `id` of type `SortEnumType` was added to input object type `DesWorkspaceUserSortInput`

\+ Input field `refDesignIds` of type `[ID!]!` was added to input object type `SolBldImportRefDesignsInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldImportRefDesignsInput`

\+ Input field `ensureEsdExists` of type `Boolean!` was added to input object type `SolBldLinkSolutionInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldLinkSolutionInput`

\+ Input field `solutionItems` of type `[ID!]!` was added to input object type `SolBldLinkSolutionInput`

\+ Input field `and` of type `[DesWorkspaceUserFilterInput!]` was added to input object type `DesWorkspaceUserFilterInput`

\+ Input field `id` of type `GridFilterInput` was added to input object type `DesWorkspaceUserFilterInput`

\+ Input field `or` of type `[DesWorkspaceUserFilterInput!]` was added to input object type `DesWorkspaceUserFilterInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `rsaMotorStudioEasyModeConfigById` was added to object type `Query`

\+ Argument `configId: String!` added to `Query.rsaMotorStudioEasyModeConfigById`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioEasyModeConfigById`

\+ Field `rsaMotorStudioEasyModeConfigs` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioEasyModeConfigs`

\+ Field `rsaMotorStudioProjectById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.rsaMotorStudioProjectById`

\+ Field `rsaMotorStudioProjects` was added to object type `Query`

\+ Argument `order: [RsaMotorStudioProjectSortInput!]` added to `Query.rsaMotorStudioProjects`

\+ Argument `where: RsaMotorStudioProjectFilterInput` added to `Query.rsaMotorStudioProjects`

\+ Field `rsaMotorStudioScopeCaptureById` was added to object type `Query`

\+ Argument `captureId: String!` added to `Query.rsaMotorStudioScopeCaptureById`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioScopeCaptureById`

\+ Field `rsaMotorStudioScopeCaptures` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioScopeCaptures`

\+ Field `rsaMotorStudioScopeConfigById` was added to object type `Query`

\+ Argument `configId: String!` added to `Query.rsaMotorStudioScopeConfigById`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioScopeConfigById`

\+ Field `rsaMotorStudioScopeConfigs` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioScopeConfigs`

\+ Field `rsaMotorStudioVariableSetById` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioVariableSetById`

\+ Argument `variableSetId: String!` added to `Query.rsaMotorStudioVariableSetById`

\+ Field `rsaMotorStudioVariableSets` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.rsaMotorStudioVariableSets`

###### ✏️ Mutation

\+ Field `rsaMotorStudioCreateEasyModeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateEasyModeConfigInput!` added to `Mutation.rsaMotorStudioCreateEasyModeConfig`

\+ Field `rsaMotorStudioCreateProject` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateProjectInput!` added to `Mutation.rsaMotorStudioCreateProject`

\+ Field `rsaMotorStudioCreateScopeCapture` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateScopeCaptureInput!` added to `Mutation.rsaMotorStudioCreateScopeCapture`

\+ Field `rsaMotorStudioCreateScopeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateScopeConfigInput!` added to `Mutation.rsaMotorStudioCreateScopeConfig`

\+ Field `rsaMotorStudioCreateVariableSet` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateVariableSetInput!` added to `Mutation.rsaMotorStudioCreateVariableSet`

\+ Field `rsaMotorStudioCreateVariableSetRevision` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioCreateVariableSetRevisionInput!` added to `Mutation.rsaMotorStudioCreateVariableSetRevision`

\+ Field `rsaMotorStudioDeleteEasyModeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteEasyModeConfigInput!` added to `Mutation.rsaMotorStudioDeleteEasyModeConfig`

\+ Field `rsaMotorStudioDeleteProject` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteProjectInput!` added to `Mutation.rsaMotorStudioDeleteProject`

\+ Field `rsaMotorStudioDeleteScopeCapture` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteScopeCaptureInput!` added to `Mutation.rsaMotorStudioDeleteScopeCapture`

\+ Field `rsaMotorStudioDeleteScopeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteScopeConfigInput!` added to `Mutation.rsaMotorStudioDeleteScopeConfig`

\+ Field `rsaMotorStudioDeleteVariableSet` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioDeleteVariableSetInput!` added to `Mutation.rsaMotorStudioDeleteVariableSet`

\+ Field `rsaMotorStudioUpdateEasyModeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUpdateEasyModeConfigInput!` added to `Mutation.rsaMotorStudioUpdateEasyModeConfig`

\+ Field `rsaMotorStudioUpdateProject` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUpdateProjectInput!` added to `Mutation.rsaMotorStudioUpdateProject`

\+ Field `rsaMotorStudioUpdateScopeConfig` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUpdateScopeConfigInput!` added to `Mutation.rsaMotorStudioUpdateScopeConfig`

\+ Field `rsaMotorStudioUpdateVariableSet` was added to object type `Mutation`

\+ Argument `input: RsaMotorStudioUpdateVariableSetInput!` added to `Mutation.rsaMotorStudioUpdateVariableSet`

###### Types

\+ Type `RsaMotorStudioCreateEasyModeConfigPayload` was added

Δ Object type `RsaMotorStudioCreateEasyModeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateProjectPayload` was added

Δ Object type `RsaMotorStudioCreateProjectPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateScopeCapturePayload` was added

Δ Object type `RsaMotorStudioCreateScopeCapturePayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateScopeConfigPayload` was added

Δ Object type `RsaMotorStudioCreateScopeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateVariableSetPayload` was added

Δ Object type `RsaMotorStudioCreateVariableSetPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateVariableSetRevisionPayload` was added

Δ Object type `RsaMotorStudioCreateVariableSetRevisionPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteEasyModeConfigPayload` was added

Δ Object type `RsaMotorStudioDeleteEasyModeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteProjectPayload` was added

Δ Object type `RsaMotorStudioDeleteProjectPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteScopeCapturePayload` was added

Δ Object type `RsaMotorStudioDeleteScopeCapturePayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteScopeConfigPayload` was added

Δ Object type `RsaMotorStudioDeleteScopeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteVariableSetPayload` was added

Δ Object type `RsaMotorStudioDeleteVariableSetPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioEasyModeConfig` was added

Δ Object type `RsaMotorStudioEasyModeConfig` has description `**Experimental**`

\+ Type `RsaMotorStudioProject` was added

Δ Object type `RsaMotorStudioProject` has description `**Experimental**`

\+ Type `RsaMotorStudioScopeCapture` was added

Δ Object type `RsaMotorStudioScopeCapture` has description `**Experimental**`

\+ Type `RsaMotorStudioScopeChannelConfig` was added

Δ Object type `RsaMotorStudioScopeChannelConfig` has description `**Experimental**`

\+ Type `RsaMotorStudioScopeConfig` was added

Δ Object type `RsaMotorStudioScopeConfig` has description `**Experimental**`

\+ Type `RsaMotorStudioScopeView` was added

Δ Object type `RsaMotorStudioScopeView` has description `**Experimental**`

\+ Type `RsaMotorStudioSlider` was added

Δ Object type `RsaMotorStudioSlider` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateEasyModeConfigPayload` was added

Δ Object type `RsaMotorStudioUpdateEasyModeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateProjectPayload` was added

Δ Object type `RsaMotorStudioUpdateProjectPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateScopeConfigPayload` was added

Δ Object type `RsaMotorStudioUpdateScopeConfigPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateVariableSetPayload` was added

Δ Object type `RsaMotorStudioUpdateVariableSetPayload` has description `**Experimental**`

\+ Type `RsaMotorStudioVariableSet` was added

Δ Object type `RsaMotorStudioVariableSet` has description `**Experimental**`

\+ Type `RsaMotorStudioVariableSetEntry` was added

Δ Object type `RsaMotorStudioVariableSetEntry` has description `**Experimental**`

\+ Type `RsaMotorStudioVariableSetRevision` was added

Δ Object type `RsaMotorStudioVariableSetRevision` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateEasyModeConfigInput` was added

Δ Object type `RsaMotorStudioCreateEasyModeConfigInput` has description `**Experimental** Represents input value for motor studio project easymode config creation.`

\+ Type `RsaMotorStudioCreateProjectInput` was added

Δ Object type `RsaMotorStudioCreateProjectInput` has description `**Experimental** Represents input value for motor studio project creation.`

\+ Type `RsaMotorStudioCreateScopeCaptureInput` was added

Δ Object type `RsaMotorStudioCreateScopeCaptureInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateScopeChannelInput` was added

Δ Object type `RsaMotorStudioCreateScopeChannelInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateScopeConfigInput` was added

Δ Object type `RsaMotorStudioCreateScopeConfigInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateScopeViewInput` was added

Δ Object type `RsaMotorStudioCreateScopeViewInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateSliderInput` was added

Δ Object type `RsaMotorStudioCreateSliderInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateVariableSetInput` was added

Δ Object type `RsaMotorStudioCreateVariableSetInput` has description `**Experimental**`

\+ Type `RsaMotorStudioCreateVariableSetRevisionInput` was added

Δ Object type `RsaMotorStudioCreateVariableSetRevisionInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteEasyModeConfigInput` was added

Δ Object type `RsaMotorStudioDeleteEasyModeConfigInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteProjectInput` was added

Δ Object type `RsaMotorStudioDeleteProjectInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteScopeCaptureInput` was added

Δ Object type `RsaMotorStudioDeleteScopeCaptureInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteScopeConfigInput` was added

Δ Object type `RsaMotorStudioDeleteScopeConfigInput` has description `**Experimental**`

\+ Type `RsaMotorStudioDeleteVariableSetInput` was added

Δ Object type `RsaMotorStudioDeleteVariableSetInput` has description `**Experimental**`

\+ Type `RsaMotorStudioProjectFilterInput` was added

Δ Object type `RsaMotorStudioProjectFilterInput` has description `**Experimental**`

\+ Type `RsaMotorStudioProjectSortInput` was added

Δ Object type `RsaMotorStudioProjectSortInput` has description `**Experimental**`

\+ Type `RsaMotorStudioScopeChannelInput` was added

Δ Object type `RsaMotorStudioScopeChannelInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateEasyModeConfigInput` was added

Δ Object type `RsaMotorStudioUpdateEasyModeConfigInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateProjectInput` was added

Δ Object type `RsaMotorStudioUpdateProjectInput` has description `**Experimental** Represents input value for motor studio project creation.`

\+ Type `RsaMotorStudioUpdateScopeConfigInput` was added

Δ Object type `RsaMotorStudioUpdateScopeConfigInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateScopeViewInput` was added

Δ Object type `RsaMotorStudioUpdateScopeViewInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateSliderInput` was added

Δ Object type `RsaMotorStudioUpdateSliderInput` has description `**Experimental**`

\+ Type `RsaMotorStudioUpdateVariableSetInput` was added

Δ Object type `RsaMotorStudioUpdateVariableSetInput` has description `**Experimental**`

\+ Type `RsaMotorStudioVariableSetEntryInput` was added

Δ Object type `RsaMotorStudioVariableSetEntryInput` has description `**Experimental**`

###### Fields

\+ Field `config` was added to object type `RsaMotorStudioCreateEasyModeConfigPayload`

\+ Field `project` was added to object type `RsaMotorStudioCreateProjectPayload`

\+ Field `capture` was added to object type `RsaMotorStudioCreateScopeCapturePayload`

\+ Field `config` was added to object type `RsaMotorStudioCreateScopeConfigPayload`

\+ Field `variableSet` was added to object type `RsaMotorStudioCreateVariableSetPayload`

\+ Field `revision` was added to object type `RsaMotorStudioCreateVariableSetRevisionPayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteEasyModeConfigPayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteProjectPayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteScopeCapturePayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteScopeConfigPayload`

\+ Field `isDeleted` was added to object type `RsaMotorStudioDeleteVariableSetPayload`

\+ Field `configId` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `modifiedAt` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `modifiedBy` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `modifiedById` was added to object type `RsaMotorStudioEasyModeConfig`

Δ Field `RsaMotorStudioEasyModeConfig.modifiedById` is deprecated

Δ Directive `deprecated` was added to `RsaMotorStudioEasyModeConfig.modifiedById`

\+ Field `path` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `projectId` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `sliders` was added to object type `RsaMotorStudioEasyModeConfig`

\+ Field `createdAt` was added to object type `RsaMotorStudioProject`

\+ Field `createdBy` was added to object type `RsaMotorStudioProject`

\+ Field `createdById` was added to object type `RsaMotorStudioProject`

Δ Field `RsaMotorStudioProject.createdById` is deprecated

Δ Directive `deprecated` was added to `RsaMotorStudioProject.createdById`

\+ Field `description` was added to object type `RsaMotorStudioProject`

\+ Field `easyModeConfigs` was added to object type `RsaMotorStudioProject`

\+ Field `id` was added to object type `RsaMotorStudioProject`

\+ Field `modifiedAt` was added to object type `RsaMotorStudioProject`

\+ Field `modifiedBy` was added to object type `RsaMotorStudioProject`

\+ Field `modifiedById` was added to object type `RsaMotorStudioProject`

Δ Field `RsaMotorStudioProject.modifiedById` is deprecated

Δ Directive `deprecated` was added to `RsaMotorStudioProject.modifiedById`

\+ Field `name` was added to object type `RsaMotorStudioProject`

\+ Field `scopeCaptures` was added to object type `RsaMotorStudioProject`

\+ Field `scopeConfigs` was added to object type `RsaMotorStudioProject`

\+ Field `variableSets` was added to object type `RsaMotorStudioProject`

\+ Field `capturedAt` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `capturedData` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `capturedDataUrl` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `captureId` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `createdBy` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `createdById` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `projectId` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `scopeConfigId` was added to object type `RsaMotorStudioScopeCapture`

\+ Field `channelId` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `color` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `index` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `offset` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `scale` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `variableName` was added to object type `RsaMotorStudioScopeChannelConfig`

\+ Field `channels` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `configId` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `createdAt` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `createdBy` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `createdById` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `description` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `modifiedAt` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `modifiedBy` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `modifiedById` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `name` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `preTriggerSamples` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `projectId` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `samplePeriodNs` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `samplesLength` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `triggerEdge` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `triggerLevel` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `triggerMode` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `triggerSourceChannelIndex` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `views` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `virtualVariables` was added to object type `RsaMotorStudioScopeConfig`

\+ Field `channelIndexes` was added to object type `RsaMotorStudioScopeView`

\+ Field `viewId` was added to object type `RsaMotorStudioScopeView`

\+ Field `defaultValue` was added to object type `RsaMotorStudioSlider`

\+ Field `description` was added to object type `RsaMotorStudioSlider`

\+ Field `displayName` was added to object type `RsaMotorStudioSlider`

\+ Field `max` was added to object type `RsaMotorStudioSlider`

\+ Field `min` was added to object type `RsaMotorStudioSlider`

\+ Field `sliderId` was added to object type `RsaMotorStudioSlider`

\+ Field `unit` was added to object type `RsaMotorStudioSlider`

\+ Field `variableName` was added to object type `RsaMotorStudioSlider`

\+ Field `config` was added to object type `RsaMotorStudioUpdateEasyModeConfigPayload`

\+ Field `project` was added to object type `RsaMotorStudioUpdateProjectPayload`

\+ Field `config` was added to object type `RsaMotorStudioUpdateScopeConfigPayload`

\+ Field `variableSet` was added to object type `RsaMotorStudioUpdateVariableSetPayload`

\+ Field `createdAt` was added to object type `RsaMotorStudioVariableSet`

\+ Field `createdBy` was added to object type `RsaMotorStudioVariableSet`

\+ Field `createdById` was added to object type `RsaMotorStudioVariableSet`

\+ Field `description` was added to object type `RsaMotorStudioVariableSet`

\+ Field `latestRevision` was added to object type `RsaMotorStudioVariableSet`

\+ Field `modifiedAt` was added to object type `RsaMotorStudioVariableSet`

\+ Field `modifiedBy` was added to object type `RsaMotorStudioVariableSet`

\+ Field `modifiedById` was added to object type `RsaMotorStudioVariableSet`

\+ Field `name` was added to object type `RsaMotorStudioVariableSet`

\+ Field `path` was added to object type `RsaMotorStudioVariableSet`

\+ Field `projectId` was added to object type `RsaMotorStudioVariableSet`

\+ Field `revisions` was added to object type `RsaMotorStudioVariableSet`

\+ Field `variableSetId` was added to object type `RsaMotorStudioVariableSet`

\+ Field `value` was added to object type `RsaMotorStudioVariableSetEntry`

\+ Field `variableName` was added to object type `RsaMotorStudioVariableSetEntry`

\+ Field `createdAt` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `createdBy` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `createdById` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `entries` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `projectId` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `revision` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `revisionId` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `variableSet` was added to object type `RsaMotorStudioVariableSetRevision`

\+ Field `variableSetId` was added to object type `RsaMotorStudioVariableSetRevision`

###### Input / Payload

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioCreateEasyModeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioCreateEasyModeConfigInput`

\+ Input field `sliders` of type `[RsaMotorStudioCreateSliderInput!]!` was added to input object type `RsaMotorStudioCreateEasyModeConfigInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioCreateProjectInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioCreateProjectInput`

\+ Input field `capturedAt` of type `DateTime!` was added to input object type `RsaMotorStudioCreateScopeCaptureInput`

\+ Input field `capturedData` of type `String!` was added to input object type `RsaMotorStudioCreateScopeCaptureInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioCreateScopeCaptureInput`

\+ Input field `scopeConfigId` of type `String!` was added to input object type `RsaMotorStudioCreateScopeCaptureInput`

\+ Input field `color` of type `String!` was added to input object type `RsaMotorStudioCreateScopeChannelInput`

\+ Input field `index` of type `Int!` was added to input object type `RsaMotorStudioCreateScopeChannelInput`

\+ Input field `offset` of type `Float` was added to input object type `RsaMotorStudioCreateScopeChannelInput`

\+ Input field `scale` of type `Float` was added to input object type `RsaMotorStudioCreateScopeChannelInput`

\+ Input field `variableName` of type `String` was added to input object type `RsaMotorStudioCreateScopeChannelInput`

\+ Input field `channels` of type `[RsaMotorStudioCreateScopeChannelInput!]!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `preTriggerSamples` of type `Int!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `samplePeriodNs` of type `Int!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `samplesLength` of type `Int!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `triggerEdge` of type `TriggerEdge!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `triggerLevel` of type `Float!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `triggerMode` of type `TriggerMode!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `triggerSourceChannelIndex` of type `Int!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `views` of type `[RsaMotorStudioCreateScopeViewInput!]!` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `virtualVariables` of type `[String!]` was added to input object type `RsaMotorStudioCreateScopeConfigInput`

\+ Input field `channelIndexes` of type `[Int!]!` was added to input object type `RsaMotorStudioCreateScopeViewInput`

\+ Input field `defaultValue` of type `String` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `displayName` of type `String!` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `max` of type `Float!` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `min` of type `Float!` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `unit` of type `String` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `variableName` of type `String!` was added to input object type `RsaMotorStudioCreateSliderInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioCreateVariableSetInput`

\+ Input field `initialEntries` of type `[RsaMotorStudioVariableSetEntryInput!]` was added to input object type `RsaMotorStudioCreateVariableSetInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioCreateVariableSetInput`

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioCreateVariableSetInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioCreateVariableSetInput`

\+ Input field `entries` of type `[RsaMotorStudioVariableSetEntryInput!]!` was added to input object type `RsaMotorStudioCreateVariableSetRevisionInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioCreateVariableSetRevisionInput`

\+ Input field `variableSetId` of type `String!` was added to input object type `RsaMotorStudioCreateVariableSetRevisionInput`

\+ Input field `configId` of type `String!` was added to input object type `RsaMotorStudioDeleteEasyModeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioDeleteEasyModeConfigInput`

\+ Input field `id` of type `ID!` was added to input object type `RsaMotorStudioDeleteProjectInput`

\+ Input field `captureId` of type `String!` was added to input object type `RsaMotorStudioDeleteScopeCaptureInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioDeleteScopeCaptureInput`

\+ Input field `configId` of type `String!` was added to input object type `RsaMotorStudioDeleteScopeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioDeleteScopeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioDeleteVariableSetInput`

\+ Input field `variableSetId` of type `String!` was added to input object type `RsaMotorStudioDeleteVariableSetInput`

\+ Input field `and` of type `[RsaMotorStudioProjectFilterInput!]` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `createdAt` of type `DateTimeOperationFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `createdBy` of type `DesWorkspaceUserFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `createdById` of type `GridFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `id` of type `MotorStudioProjectGridFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `modifiedAt` of type `DateTimeOperationFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `modifiedBy` of type `DesWorkspaceUserFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `modifiedById` of type `GridFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `or` of type `[RsaMotorStudioProjectFilterInput!]` was added to input object type `RsaMotorStudioProjectFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `createdBy` of type `DesWorkspaceUserSortInput` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `createdById` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `description` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `id` of type `MotorStudioProjectGridSortInput` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `modifiedAt` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `modifiedBy` of type `DesWorkspaceUserSortInput` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `modifiedById` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `RsaMotorStudioProjectSortInput`

\+ Input field `channelId` of type `String` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `color` of type `String!` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `index` of type `Int!` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `offset` of type `Float` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `scale` of type `Float` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `variableName` of type `String` was added to input object type `RsaMotorStudioScopeChannelInput`

\+ Input field `configId` of type `String!` was added to input object type `RsaMotorStudioUpdateEasyModeConfigInput`

\+ Input field `path` of type `String` was added to input object type `RsaMotorStudioUpdateEasyModeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioUpdateEasyModeConfigInput`

\+ Input field `sliders` of type `[RsaMotorStudioUpdateSliderInput!]!` was added to input object type `RsaMotorStudioUpdateEasyModeConfigInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioUpdateProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `RsaMotorStudioUpdateProjectInput`

\+ Input field `name` of type `String` was added to input object type `RsaMotorStudioUpdateProjectInput`

\+ Input field `channels` of type `[RsaMotorStudioScopeChannelInput!]!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `configId` of type `String!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `preTriggerSamples` of type `Int!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `samplePeriodNs` of type `Int!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `samplesLength` of type `Int!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `triggerEdge` of type `TriggerEdge!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `triggerLevel` of type `Float!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `triggerMode` of type `TriggerMode!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `triggerSourceChannelIndex` of type `Int!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `views` of type `[RsaMotorStudioUpdateScopeViewInput!]!` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `virtualVariables` of type `[String!]` was added to input object type `RsaMotorStudioUpdateScopeConfigInput`

\+ Input field `channelIndexes` of type `[Int!]!` was added to input object type `RsaMotorStudioUpdateScopeViewInput`

\+ Input field `viewId` of type `String` was added to input object type `RsaMotorStudioUpdateScopeViewInput`

\+ Input field `defaultValue` of type `String` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `displayName` of type `String!` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `max` of type `Float!` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `min` of type `Float!` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `sliderId` of type `String` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `unit` of type `String` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `variableName` of type `String!` was added to input object type `RsaMotorStudioUpdateSliderInput`

\+ Input field `description` of type `String` was added to input object type `RsaMotorStudioUpdateVariableSetInput`

\+ Input field `name` of type `String!` was added to input object type `RsaMotorStudioUpdateVariableSetInput`

\+ Input field `path` of type `String!` was added to input object type `RsaMotorStudioUpdateVariableSetInput`

\+ Input field `projectId` of type `ID!` was added to input object type `RsaMotorStudioUpdateVariableSetInput`

\+ Input field `variableSetId` of type `String!` was added to input object type `RsaMotorStudioUpdateVariableSetInput`

\+ Input field `value` of type `String!` was added to input object type `RsaMotorStudioVariableSetEntryInput`

\+ Input field `variableName` of type `String!` was added to input object type `RsaMotorStudioVariableSetEntryInput`

### 25-Feb-2026

#### 🔴 Breaking Changes (3)

##### Platform

###### ✏️ Mutation

− Field `solBldScaffoldingWithEmptyEsdAndSoftwareProject` was removed from object type `Mutation`

###### Types

− Type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectPayload` was removed

− Type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectInput` was removed

#### ✅ Non-Breaking Changes (7)

##### Platform

###### ✏️ Mutation

\+ Field `solBldCreateSolution` was added to object type `Mutation`

\+ Argument `input: SolBldCreateSolutionInput!` added to `Mutation.solBldCreateSolution`

###### Types

\+ Type `SolBldCreateSolutionPayload` was added

\+ Type `SolBldCreateSolutionInput` was added

###### Fields

\+ Field `solutionId` was added to object type `SolBldCreateSolutionPayload`

###### Input / Payload

\+ Input field `includeEmptyEsd` of type `Boolean!` was added to input object type `SolBldCreateSolutionInput`

\+ Input field `solutionItems` of type `[ID!]!` was added to input object type `SolBldCreateSolutionInput`

### 24-Feb-2026

#### ⚠️ Dangerous Changes (2)

##### Platform

###### 🔍 Query

\+ Argument `order: SolSolutionSortInput` added to `Query.solSolutionsByPagev2`

\+ Argument `where: SolSolutionFilterInput` added to `Query.solSolutionsByPagev2`

#### ✅ Non-Breaking Changes (166)

##### Platform

###### Types

\+ Type `SolSolutionFilterInput` was added

Δ Object type `SolSolutionFilterInput` has description `A filter input type for querying solutions. This class is used to specify filtering criteria when retrieving solutions.`

\+ Type `SolSolutionSortInput` was added

Δ Object type `SolSolutionSortInput` has description 'A sorting input type for querying solutions. This class is used to specify sorting criteria when retrieving solutions, allowing clients to sort results by modified date or name in ascending or descending order. Only one sorting criterion can be applied at a time. If both are provided, the API will prioritize one of them.'

###### Input / Payload

\+ Input field `name` of type `String` was added to input object type `SolSolutionFilterInput`

\+ Input field `modifiedAt` of type `SortEnumType` was added to input object type `SolSolutionSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `SolSolutionSortInput`

##### System Design

###### Types

\+ Type `SysSdmClientMetadata` was added

Δ Object type `SysSdmClientMetadata` has description `**Experimental**`

\+ Type `SysSdmConnection` was added

Δ Object type `SysSdmConnection` has description `**Experimental**`

\+ Type `SysSdmDeviceModel` was added

Δ Object type `SysSdmDeviceModel` has description `**Experimental**`

\+ Type `SysSdmEndpoint` was added

Δ Object type `SysSdmEndpoint` has description `**Experimental**`

\+ Type `SysSdmFunctionalBlock` was added

Δ Object type `SysSdmFunctionalBlock` has description `**Experimental**`

\+ Type `SysSdmFunctionalModel` was added

Δ Object type `SysSdmFunctionalModel` has description `**Experimental**`

\+ Type `SysSdmHardwareComponent` was added

Δ Object type `SysSdmHardwareComponent` has description `**Experimental**`

\+ Type `SysSdmHardwareModel` was added

Δ Object type `SysSdmHardwareModel` has description `**Experimental**`

\+ Type `SysSdmParameter` was added

Δ Object type `SysSdmParameter` has description `**Experimental**`

\+ Type `SysSdmPeripheral` was added

Δ Object type `SysSdmPeripheral` has description `**Experimental**`

\+ Type `SysSdmPeripheralConfiguration` was added

Δ Object type `SysSdmPeripheralConfiguration` has description `**Experimental**`

\+ Type `SysSdmPeripheralInstance` was added

Δ Object type `SysSdmPeripheralInstance` has description `**Experimental**`

\+ Type `SysSdmPeripheralMode` was added

Δ Object type `SysSdmPeripheralMode` has description `**Experimental**`

\+ Type `SysSdmPeripheralParameter` was added

Δ Object type `SysSdmPeripheralParameter` has description `**Experimental**`

\+ Type `SysSdmPeripheralPinConfig` was added

Δ Object type `SysSdmPeripheralPinConfig` has description `**Experimental**`

\+ Type `SysSdmPeripheralPinDependencyConfig` was added

Δ Object type `SysSdmPeripheralPinDependencyConfig` has description `**Experimental**`

\+ Type `SysSdmPort` was added

Δ Object type `SysSdmPort` has description `**Experimental**`

\+ Type `SysSdmSoftwareComponent` was added

Δ Object type `SysSdmSoftwareComponent` has description `**Experimental**`

\+ Type `SysSdmSoftwareModel` was added

Δ Object type `SysSdmSoftwareModel` has description `**Experimental**`

\+ Type `SysSdmSoftwareSpecification` was added

Δ Object type `SysSdmSoftwareSpecification` has description `**Experimental**`

\+ Type `SysSdmPortType` was added

\+ Enum value `ADC` was added to enum `SysSdmPortType`

\+ Enum value `AUDIO` was added to enum `SysSdmPortType`

\+ Enum value `CAMERA` was added to enum `SysSdmPortType`

\+ Enum value `CAN` was added to enum `SysSdmPortType`

\+ Enum value `CD_MMC` was added to enum `SysSdmPortType`

\+ Enum value `DAC` was added to enum `SysSdmPortType`

\+ Enum value `DISPLAY` was added to enum `SysSdmPortType`

\+ Enum value `ETHERNET` was added to enum `SysSdmPortType`

\+ Enum value `GPIO` was added to enum `SysSdmPortType`

\+ Enum value `I2C` was added to enum `SysSdmPortType`

\+ Enum value `IRQ` was added to enum `SysSdmPortType`

\+ Enum value `POWER_MCU` was added to enum `SysSdmPortType`

\+ Enum value `PWM` was added to enum `SysSdmPortType`

\+ Enum value `SPI` was added to enum `SysSdmPortType`

\+ Enum value `UART` was added to enum `SysSdmPortType`

\+ Enum value `USB` was added to enum `SysSdmPortType`

Δ Object type `SysSdmPortType` has description `**Experimental**`

\+ Type `SysSdmSoftwareComponentCategory` was added

\+ Enum value `APPLICATION` was added to enum `SysSdmSoftwareComponentCategory`

\+ Enum value `DRIVER` was added to enum `SysSdmSoftwareComponentCategory`

\+ Enum value `LIBRARY` was added to enum `SysSdmSoftwareComponentCategory`

\+ Enum value `MIDDLEWARE` was added to enum `SysSdmSoftwareComponentCategory`

\+ Enum value `OPERATING_SYSTEM` was added to enum `SysSdmSoftwareComponentCategory`

Δ Object type `SysSdmSoftwareComponentCategory` has description `**Experimental**`

###### Fields

\+ Field `clientId` was added to object type `SysSdmClientMetadata`

\+ Field `parameters` was added to object type `SysSdmClientMetadata`

\+ Field `endpoints` was added to object type `SysSdmConnection`

\+ Field `id` was added to object type `SysSdmConnection`

\+ Field `metadata` was added to object type `SysSdmConnection`

\+ Field `name` was added to object type `SysSdmConnection`

\+ Field `parameters` was added to object type `SysSdmConnection`

\+ Field `id` was added to object type `SysSdmDeviceModel`

\+ Field `metadata` was added to object type `SysSdmDeviceModel`

\+ Field `mpn` was added to object type `SysSdmDeviceModel`

\+ Field `peripherals` was added to object type `SysSdmDeviceModel`

\+ Field `ports` was added to object type `SysSdmDeviceModel`

\+ Field `functionalBlockId` was added to object type `SysSdmEndpoint`

\+ Field `portId` was added to object type `SysSdmEndpoint`

\+ Field `hardwareComponentIds` was added to object type `SysSdmFunctionalBlock`

\+ Field `id` was added to object type `SysSdmFunctionalBlock`

\+ Field `metadata` was added to object type `SysSdmFunctionalBlock`

\+ Field `name` was added to object type `SysSdmFunctionalBlock`

\+ Field `parameters` was added to object type `SysSdmFunctionalBlock`

\+ Field `ports` was added to object type `SysSdmFunctionalBlock`

\+ Field `connections` was added to object type `SysSdmFunctionalModel`

\+ Field `functionalBlocks` was added to object type `SysSdmFunctionalModel`

\+ Field `id` was added to object type `SysSdmFunctionalModel`

\+ Field `implementedBy` was added to object type `SysSdmFunctionalModel`

\+ Field `metadata` was added to object type `SysSdmFunctionalModel`

\+ Field `name` was added to object type `SysSdmFunctionalModel`

\+ Field `deviceModelId` was added to object type `SysSdmHardwareComponent`

\+ Field `id` was added to object type `SysSdmHardwareComponent`

\+ Field `metadata` was added to object type `SysSdmHardwareComponent`

\+ Field `name` was added to object type `SysSdmHardwareComponent`

\+ Field `parameters` was added to object type `SysSdmHardwareComponent`

\+ Field `functionalBlockIds` was added to object type `SysSdmHardwareModel`

\+ Field `hardwareComponents` was added to object type `SysSdmHardwareModel`

\+ Field `id` was added to object type `SysSdmHardwareModel`

\+ Field `implementedBy` was added to object type `SysSdmHardwareModel`

\+ Field `metadata` was added to object type `SysSdmHardwareModel`

\+ Field `name` was added to object type `SysSdmHardwareModel`

\+ Field `id` was added to object type `SysSdmParameter`

\+ Field `name` was added to object type `SysSdmParameter`

\+ Field `value` was added to object type `SysSdmParameter`

\+ Field `id` was added to object type `SysSdmPeripheral`

\+ Field `instances` was added to object type `SysSdmPeripheral`

\+ Field `name` was added to object type `SysSdmPeripheral`

\+ Field `id` was added to object type `SysSdmPeripheralConfiguration`

\+ Field `parameters` was added to object type `SysSdmPeripheralConfiguration`

\+ Field `pinConfigs` was added to object type `SysSdmPeripheralConfiguration`

\+ Field `pinDependencyConfigs` was added to object type `SysSdmPeripheralConfiguration`

\+ Field `id` was added to object type `SysSdmPeripheralInstance`

\+ Field `modes` was added to object type `SysSdmPeripheralInstance`

\+ Field `name` was added to object type `SysSdmPeripheralInstance`

\+ Field `unit` was added to object type `SysSdmPeripheralInstance`

\+ Field `configurations` was added to object type `SysSdmPeripheralMode`

\+ Field `name` was added to object type `SysSdmPeripheralMode`

\+ Field `name` was added to object type `SysSdmPeripheralParameter`

\+ Field `value` was added to object type `SysSdmPeripheralParameter`

\+ Field `function` was added to object type `SysSdmPeripheralPinConfig`

\+ Field `pinName` was added to object type `SysSdmPeripheralPinConfig`

\+ Field `pinValue` was added to object type `SysSdmPeripheralPinConfig`

\+ Field `port` was added to object type `SysSdmPeripheralPinConfig`

\+ Field `portName` was added to object type `SysSdmPeripheralPinConfig`

\+ Field `name` was added to object type `SysSdmPeripheralPinDependencyConfig`

\+ Field `value` was added to object type `SysSdmPeripheralPinDependencyConfig`

\+ Field `hardwareComponentId` was added to object type `SysSdmPort`

\+ Field `id` was added to object type `SysSdmPort`

\+ Field `metadata` was added to object type `SysSdmPort`

\+ Field `name` was added to object type `SysSdmPort`

\+ Field `parameters` was added to object type `SysSdmPort`

\+ Field `peripheralInstanceId` was added to object type `SysSdmPort`

\+ Field `portType` was added to object type `SysSdmPort`

\+ Field `quantity` was added to object type `SysSdmPort`

\+ Field `softwareComponentId` was added to object type `SysSdmPort`

\+ Field `dependencyIds` was added to object type `SysSdmSoftwareComponent`

\+ Field `id` was added to object type `SysSdmSoftwareComponent`

\+ Field `metadata` was added to object type `SysSdmSoftwareComponent`

\+ Field `name` was added to object type `SysSdmSoftwareComponent`

\+ Field `parameters` was added to object type `SysSdmSoftwareComponent`

\+ Field `peripheralInstanceId` was added to object type `SysSdmSoftwareComponent`

\+ Field `specification` was added to object type `SysSdmSoftwareComponent`

\+ Field `deviceModelId` was added to object type `SysSdmSoftwareModel`

\+ Field `id` was added to object type `SysSdmSoftwareModel`

\+ Field `implementedBy` was added to object type `SysSdmSoftwareModel`

\+ Field `metadata` was added to object type `SysSdmSoftwareModel`

\+ Field `name` was added to object type `SysSdmSoftwareModel`

\+ Field `softwareComponents` was added to object type `SysSdmSoftwareModel`

\+ Field `category` was added to object type `SysSdmSoftwareSpecification`

\+ Field `ecosystem` was added to object type `SysSdmSoftwareSpecification`

\+ Field `name` was added to object type `SysSdmSoftwareSpecification`

\+ Field `vendor` was added to object type `SysSdmSoftwareSpecification`

\+ Field `version` was added to object type `SysSdmSoftwareSpecification`

\+ Field `versions` was added to object type `SysSdmSystemModel`

\+ Field `deviceModels` was added to object type `SysSdmSystemModelVersion`

\+ Field `functionalModel` was added to object type `SysSdmSystemModelVersion`

\+ Field `hardwareModels` was added to object type `SysSdmSystemModelVersion`

\+ Field `softwareModels` was added to object type `SysSdmSystemModelVersion`

### 23-Feb-2026

#### ✅ Non-Breaking Changes (26)

##### Common

###### Directives

\+ Directive `authorize` was added

Δ Directive `authorize` added repeatable.

Δ Location `OBJECT` was added to directive `authorize`

Δ Location `FIELD_DEFINITION` was added to directive `authorize`

Δ Argument `apply` was added to directive `authorize`

Δ Argument `policy` was added to directive `authorize`

Δ Argument `roles` was added to directive `authorize`

\+ Directive `listSize` was added

Δ Location `FIELD_DEFINITION` was added to directive `listSize`

Δ Argument `assumedSize` was added to directive `listSize`

Δ Argument `slicingArguments` was added to directive `listSize`

Δ Argument `slicingArgumentDefaultValue` was added to directive `listSize`

Δ Argument `sizedFields` was added to directive `listSize`

Δ Argument `requireOneSlicingArgument` was added to directive `listSize`

##### Customization

###### Types

\+ Type `GloCusExecutionContext` was added

\+ Enum value `SYSTEM` was added to enum `GloCusExecutionContext`

\+ Enum value `USER` was added to enum `GloCusExecutionContext`

Δ Object type `GloCusExecutionContext` has description `Represents the types of execution context for extension points.`

\+ Type `GloCusExecutionContextOperationFilterInput` was added

###### Fields

\+ Field `executionContext` was added to object type `GloCusExtensionPoint`

###### Input / Payload

\+ Input field `eq` of type `GloCusExecutionContext` was added to input object type `GloCusExecutionContextOperationFilterInput`

\+ Input field `in` of type `[GloCusExecutionContext!]` was added to input object type `GloCusExecutionContextOperationFilterInput`

\+ Input field `neq` of type `GloCusExecutionContext` was added to input object type `GloCusExecutionContextOperationFilterInput`

\+ Input field `nin` of type `[GloCusExecutionContext!]` was added to input object type `GloCusExecutionContextOperationFilterInput`

\+ Input field `executionContext` of type `GloCusExecutionContextOperationFilterInput` was added to input object type `GloCusExtensionPointFilterInput`

\+ Input field `executionContext` of type `SortEnumType` was added to input object type `GloCusExtensionPointSortInput`

### 20-Feb-2026

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

\+ Enum value `COSTED_BOM` was added to enum `DesContentTypeKind`

#### ✅ Non-Breaking Changes (18)

##### Platform

###### 🔍 Query

\+ Field `gloAppInstalledApps` was added to object type `Query`

\+ Argument `order: [GloAppSortInput!]` added to `Query.gloAppInstalledApps`

\+ Argument `where: GloAppFilterInput` added to `Query.gloAppInstalledApps`

###### ✏️ Mutation

\+ Field `solBldScaffoldingWithEmptyEsdAndSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingWithEmptyEsdAndSoftwareProjectInput!` added to `Mutation.solBldScaffoldingWithEmptyEsdAndSoftwareProject`

###### Types

\+ Type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectPayload` was added

\+ Type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectInput` was added

###### Fields

\+ Field `solutionId` was added to object type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectPayload`

###### Input / Payload

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SolBldScaffoldingWithEmptyEsdAndSoftwareProjectInput`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `dmExecuteDeviceExtractionFromConfigurationUrl` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceExtractionFromConfigurationUrlInput!` added to `Mutation.dmExecuteDeviceExtractionFromConfigurationUrl`

###### Types

\+ Type `DmExecuteDeviceExtractionFromConfigurationUrlPayload` was added

Δ Object type `DmExecuteDeviceExtractionFromConfigurationUrlPayload` has description `**Experimental**`

\+ Type `DmExecuteDeviceExtractionFromConfigurationUrlInput` was added

Δ Object type `DmExecuteDeviceExtractionFromConfigurationUrlInput` has description `**Experimental**`

###### Fields

\+ Field `dmDeviceModelAsConfigured` was added to object type `DmExecuteDeviceExtractionFromConfigurationUrlPayload`

###### Input / Payload

\+ Input field `configurationFileUrl` of type `String!` was added to input object type `DmExecuteDeviceExtractionFromConfigurationUrlInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceExtractionFromConfigurationUrlInput`

### 18-Feb-2026

#### ✅ Non-Breaking Changes (47)

##### Library Management

###### 🔍 Query

\+ Field `desPartGlobalSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.desPartGlobalSearch`

\+ Argument `before: String` added to `Query.desPartGlobalSearch`

\+ Argument `first: Int` added to `Query.desPartGlobalSearch`

\+ Argument `last: Int` added to `Query.desPartGlobalSearch`

\+ Argument `order: DesPartGlobalSearchSortInput` added to `Query.desPartGlobalSearch`

\+ Argument `where: DesPartGlobalSearchFilterInput` added to `Query.desPartGlobalSearch`

###### Types

\+ Type `DesPartGlobalPart` was added

Δ Object type `DesPartGlobalPart` has description `Represents global the part details.`

\+ Type `DesPartGlobalSearchConnection` was added

Δ Object type `DesPartGlobalSearchConnection` has description `A connection to a list of items.`

\+ Type `DesPartGlobalSearchEdge` was added

Δ Object type `DesPartGlobalSearchEdge` has description `An edge in a connection.`

\+ Type `DesPartGlobalSearchFacets` was added

Δ Object type `DesPartGlobalSearchFacets` has description `Represents the search facets.`

\+ Type `DesPartGlobalSearchFixedFacets` was added

Δ Object type `DesPartGlobalSearchFixedFacets` has description `Represents fixed search facets.`

\+ Type `DesPartGlobalSearchItem` was added

Δ Object type `DesPartGlobalSearchItem` has description `Represents a global search item with links to supply part and platform part.`

\+ Type `DesPartGlobalSearchFilterInput` was added

Δ Object type `DesPartGlobalSearchFilterInput` has description `Represents the filter for global searching parts.`

\+ Type `DesPartGlobalSearchSortInput` was added

Δ Object type `DesPartGlobalSearchSortInput` has description `Represents the input for sorting parts.`

###### Fields

\+ Field `siliconExpertPart` was added to object type `DesPartGlobalPart`

\+ Field `supplyPart` was added to object type `DesPartGlobalPart`

\+ Field `z2DataPart` was added to object type `DesPartGlobalPart`

\+ Field `edges` was added to object type `DesPartGlobalSearchConnection`

\+ Field `nodes` was added to object type `DesPartGlobalSearchConnection`

\+ Field `pageInfo` was added to object type `DesPartGlobalSearchConnection`

\+ Field `searchFacets` was added to object type `DesPartGlobalSearchConnection`

\+ Field `totalCount` was added to object type `DesPartGlobalSearchConnection`

\+ Field `cursor` was added to object type `DesPartGlobalSearchEdge`

\+ Field `node` was added to object type `DesPartGlobalSearchEdge`

\+ Field `attributeFacets` was added to object type `DesPartGlobalSearchFacets`

\+ Field `fixedFacets` was added to object type `DesPartGlobalSearchFacets`

\+ Field `categoryNames` was added to object type `DesPartGlobalSearchFixedFacets`

\+ Field `manufacturerNames` was added to object type `DesPartGlobalSearchFixedFacets`

\+ Field `globalPart` was added to object type `DesPartGlobalSearchItem`

\+ Field `part` was added to object type `DesPartGlobalSearchItem`

\+ Field `medianPrice1000` was added to object type `DesPartProviderPart`

###### Input / Payload

\+ Input field `attributes` of type `[DesPartSearchAttributeFilterInput!]` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `categoryName` of type `[String!]` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `keyword` of type `String` was added to input object type `DesPartGlobalSearchFilterInput`

\+ Input field `attribute` of type `DesPartAttributeSortInput` was added to input object type `DesPartGlobalSearchSortInput`

\+ Input field `manufacturerName` of type `SortEnumType` was added to input object type `DesPartGlobalSearchSortInput`

\+ Input field `mpn` of type `SortEnumType` was added to input object type `DesPartGlobalSearchSortInput`

\+ Input field `hasUsages` of type `Boolean` was added to input object type `DesPartSearchFilterInput`

### 16-Feb-2026

#### ✅ Non-Breaking Changes (23)

##### Platform

###### ✏️ Mutation

\+ Field `gloInstallApp` was added to object type `Mutation`

\+ Argument `input: GloInstallAppInput!` added to `Mutation.gloInstallApp`

###### Types

\+ Type `GloAppAlreadyInstalledError` was added

Δ `GloAppAlreadyInstalledError` object implements `Error` interface

Δ Object type `GloAppAlreadyInstalledError` has description ``Error that occurs when a `GloApp` cannot be installed into a workspace as it has already been installed.``

\+ Type `GloAppInstallDeniedError` was added

Δ `GloAppInstallDeniedError` object implements `Error` interface

Δ Object type `GloAppInstallDeniedError` has description ``Error that occurs when a `GloApp` cannot be installed into a workspace due to insufficient permissions.``

\+ Type `GloAppNotInstalledError` was added

Δ `GloAppNotInstalledError` object implements `Error` interface

Δ Object type `GloAppNotInstalledError` has description ``Error that occurs when a `GloApp` cannot be installed into a workspace.``

\+ Type `GloInstallAppPayload` was added

\+ Type `GloInstallAppError` was added

\+ Member `GloAppNotInstalledError` was added to Union type `GloInstallAppError`

\+ Member `GloAppAlreadyInstalledError` was added to Union type `GloInstallAppError`

\+ Member `GloAppInstallDeniedError` was added to Union type `GloInstallAppError`

\+ Type `GloInstallAppInput` was added

###### Fields

\+ Field `message` was added to object type `GloAppAlreadyInstalledError`

\+ Field `message` was added to object type `GloAppInstallDeniedError`

\+ Field `message` was added to object type `GloAppNotInstalledError`

\+ Field `errors` was added to object type `GloInstallAppPayload`

\+ Field `gloApp` was added to object type `GloInstallAppPayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `GloInstallAppInput`

### 13-Feb-2026

#### ✅ Non-Breaking Changes (27)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectEvalKitSourceConnection` was added

Δ Object type `SupSoftwareProjectEvalKitSourceConnection` has description `A connection to a list of items.`

\+ Type `SupSoftwareProjectEvalKitSourceEdge` was added

Δ Object type `SupSoftwareProjectEvalKitSourceEdge` has description `An edge in a connection.`

\+ Type `SupSoftwareProjectCompatibleEvalKitFilterInput` was added

Δ Object type `SupSoftwareProjectCompatibleEvalKitFilterInput` has description `Represents the filter for searching compatible software projects.`

###### Arguments

\+ Argument `after: String` added to `SupSoftwareProject.compatibleEvalKitData`

\+ Argument `before: String` added to `SupSoftwareProject.compatibleEvalKitData`

\+ Argument `first: Int` added to `SupSoftwareProject.compatibleEvalKitData`

\+ Argument `last: Int` added to `SupSoftwareProject.compatibleEvalKitData`

\+ Argument `where: SupSoftwareProjectCompatibleEvalKitFilterInput` added to `SupSoftwareProject.compatibleEvalKitData`

###### Fields

\+ Field `edges` was added to object type `SupSoftwareProjectEvalKitSourceConnection`

\+ Field `nodes` was added to object type `SupSoftwareProjectEvalKitSourceConnection`

\+ Field `pageInfo` was added to object type `SupSoftwareProjectEvalKitSourceConnection`

\+ Field `totalCount` was added to object type `SupSoftwareProjectEvalKitSourceConnection`

\+ Field `cursor` was added to object type `SupSoftwareProjectEvalKitSourceEdge`

\+ Field `node` was added to object type `SupSoftwareProjectEvalKitSourceEdge`

\+ Field `compatibleEvalKitData` was added to object type `SupSoftwareProject`

Δ Field `SupSoftwareProjectEvalKitSource.configUrl` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.configUrl`

Δ Field `SupSoftwareProjectEvalKitSource.configXmlUrl` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.configXmlUrl`

Δ Field `SupSoftwareProjectEvalKitSource.readmeUrl` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.readmeUrl`

Δ Field `SupSoftwareProjectEvalKitSource.sourceUrl` is deprecated

Δ Directive `deprecated` was added to `SupSoftwareProjectEvalKitSource.sourceUrl`

###### Input / Payload

\+ Input field `evalKitIds` of type `[ID!]` was added to input object type `SupSoftwareProjectCompatibleEvalKitFilterInput`

### 11-Feb-2026

#### 🔴 Breaking Changes (9)

##### Common

###### Types

− Type `UUID` was removed

− Type `IdMutationResponse` was removed

##### System Design

###### 🔍 Query

− Field `sysSdmSystemModels` was removed from object type `Query`

Δ Type for argument `id` on field `Query.sysSdmSystemModelById` changed from `UUID!` to `ID!`

###### ✏️ Mutation

− Field `sysSdmCreateSystemModel` was removed from object type `Mutation`

###### Types

− Type `SysSdmCreateSystemModelPayload` was removed

− Type `SysSdmCreateSystemModelInput` was removed

− Type `SysSdmSystemModelFilterInput` was removed

− Type `SysSdmSystemModelSortInput` was removed

#### ✅ Non-Breaking Changes (40)

##### Design

###### ✏️ Mutation

\+ Field `desCreateDatasheet` was added to object type `Mutation`

\+ Argument `input: DesCreateDatasheetInput!` added to `Mutation.desCreateDatasheet`

###### Types

\+ Type `DesCreateDatasheetPayload` was added

Δ Object type `DesCreateDatasheetPayload` has description `Payload associated with creating datasheet.`

\+ Type `DesCreateDatasheetFileInput` was added

Δ Object type `DesCreateDatasheetFileInput` has description `Input for creating a datasheet file.`

\+ Type `DesCreateDatasheetInput` was added

Δ Object type `DesCreateDatasheetInput` has description `Input for creating a datasheet.`

###### Fields

\+ Field `datasheetId` was added to object type `DesCreateDatasheetPayload`

\+ Field `errors` was added to object type `DesCreateDatasheetPayload`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DesCreateDatasheetFileInput`

\+ Input field `relativePath` of type `String!` was added to input object type `DesCreateDatasheetFileInput`

\+ Input field `comment` of type `String` was added to input object type `DesCreateDatasheetInput`

\+ Input field `description` of type `String` was added to input object type `DesCreateDatasheetInput`

\+ Input field `file` of type `DesCreateDatasheetFileInput!` was added to input object type `DesCreateDatasheetInput`

\+ Input field `folderId` of type `String!` was added to input object type `DesCreateDatasheetInput`

\+ Input field `lifeCycleDefinitionId` of type `ID` was added to input object type `DesCreateDatasheetInput`

\+ Input field `name` of type `String` was added to input object type `DesCreateDatasheetInput`

\+ Input field `revisionNamingSchemeId` of type `ID` was added to input object type `DesCreateDatasheetInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesCreateDatasheetInput`

##### System Design

###### 🔍 Query

\+ Field `sysSdmSystemModelVersionById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sysSdmSystemModelVersionById`

###### ✏️ Mutation

\+ Field `sysSdmCreateSystemModelVersion` was added to object type `Mutation`

\+ Argument `input: SysSdmCreateSystemModelVersionInput!` added to `Mutation.sysSdmCreateSystemModelVersion`

###### Types

\+ Type `SysSdmCreateSystemModelVersionPayload` was added

Δ Object type `SysSdmCreateSystemModelVersionPayload` has description `**Experimental**`

\+ Type `SysSdmSystemModelVersion` was added

Δ Object type `SysSdmSystemModelVersion` has description `**Experimental**`

\+ Type `SysSdmCreateSystemModelVersionInput` was added

Δ Object type `SysSdmCreateSystemModelVersionInput` has description `**Experimental**`

###### Fields

\+ Field `sysSdmSystemModelVersion` was added to object type `SysSdmCreateSystemModelVersionPayload`

\+ Field `downloadUrl` was added to object type `SysSdmSystemModelVersion`

\+ Field `id` was added to object type `SysSdmSystemModelVersion`

\+ Field `name` was added to object type `SysSdmSystemModelVersion`

\+ Field `version` was added to object type `SysSdmSystemModelVersion`

\+ Field `id` was added to object type `SysSdmSystemModel`

\+ Field `latestVersion` was added to object type `SysSdmSystemModel`

###### Input / Payload

\+ Input field `systemModelId` of type `ID!` was added to input object type `SysSdmCreateSystemModelVersionInput`

\+ Input field `systemModelVersionFileId` of type `String!` was added to input object type `SysSdmCreateSystemModelVersionInput`

\+ Input field `version` of type `Int!` was added to input object type `SysSdmCreateSystemModelVersionInput`

### 10-Feb-2026

#### ✅ Non-Breaking Changes (44)

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `before: String` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `evalKitId: ID!` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `first: Int` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `last: Int` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `order: [SupSoftwareProjectSortInput!]` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

\+ Argument `where: SupEvalKitCompatibleSoftwareProjectFilterInput` added to `Query.supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`

###### ✏️ Mutation

\+ Field `supSoftwareProjectUpdateEvalKitCompatibleSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput!` added to `Mutation.supSoftwareProjectUpdateEvalKitCompatibleSoftwareProject`

###### Types

\+ Type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectPayload` was added

Δ Object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectPayload` has description `Payload associated with updating a evaluation kit compatible software projects.`

\+ Type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectError`

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectError`

\+ Type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput` was added

Δ Object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput` has description `Input for evaluation kit compatible software project update.`

###### Fields

\+ Field `errors` was added to object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectPayload`

###### Input / Payload

\+ Input field `addCompatibleSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput`

\+ Input field `removeCompatibleSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput`

##### Supply

###### Types

\+ Type `SupEvalKitCompatibleSoftwareProjectConnection` was added

Δ Object type `SupEvalKitCompatibleSoftwareProjectConnection` has description `A connection to a list of items.`

\+ Type `SupEvalKitCompatibleSoftwareProjectEdge` was added

Δ Object type `SupEvalKitCompatibleSoftwareProjectEdge` has description `An edge in a connection.`

\+ Type `SupEvalKitCompatibleSoftwareProjectFilterInput` was added

Δ Object type `SupEvalKitCompatibleSoftwareProjectFilterInput` has description `Represents the filter for searching compatible software projects.`

###### Arguments

\+ Argument `after: String` added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Argument `before: String` added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Argument `first: Int` added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Argument `last: Int` added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Argument `order: [SupSoftwareProjectSortInput!]` added to `SupEvalKit.compatibleSoftwareProjectData`

\+ Argument `where: SupEvalKitCompatibleSoftwareProjectFilterInput` added to `SupEvalKit.compatibleSoftwareProjectData`

###### Fields

\+ Field `edges` was added to object type `SupEvalKitCompatibleSoftwareProjectConnection`

\+ Field `nodes` was added to object type `SupEvalKitCompatibleSoftwareProjectConnection`

\+ Field `pageInfo` was added to object type `SupEvalKitCompatibleSoftwareProjectConnection`

\+ Field `totalCount` was added to object type `SupEvalKitCompatibleSoftwareProjectConnection`

\+ Field `cursor` was added to object type `SupEvalKitCompatibleSoftwareProjectEdge`

\+ Field `node` was added to object type `SupEvalKitCompatibleSoftwareProjectEdge`

\+ Field `compatibleSoftwareProjectData` was added to object type `SupEvalKit`

###### Input / Payload

\+ Input field `description` of type `String` was added to input object type `SupEvalKitCompatibleSoftwareProjectFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupEvalKitCompatibleSoftwareProjectFilterInput`

\+ Input field `title` of type `String` was added to input object type `SupEvalKitCompatibleSoftwareProjectFilterInput`

\+ Input field `types` of type `[SupSoftwareProjectType!]` was added to input object type `SupEvalKitCompatibleSoftwareProjectFilterInput`

### 06-Feb-2026

#### ✅ Non-Breaking Changes (28)

##### Common

###### Types

\+ Type `UUID` was added

\+ Type `IdMutationResponse` was added

Δ Object type `IdMutationResponse` has description `**Experimental**`

###### Fields

\+ Field `id` was added to object type `IdMutationResponse`

##### System Design

###### 🔍 Query

\+ Field `sysSdmSystemModelById` was added to object type `Query`

\+ Argument `id: UUID!` added to `Query.sysSdmSystemModelById`

\+ Field `sysSdmSystemModels` was added to object type `Query`

\+ Argument `order: [SysSdmSystemModelSortInput!]` added to `Query.sysSdmSystemModels`

\+ Argument `where: SysSdmSystemModelFilterInput` added to `Query.sysSdmSystemModels`

###### ✏️ Mutation

\+ Field `sysSdmCreateSystemModel` was added to object type `Mutation`

\+ Argument `systemModel: SysSdmCreateSystemModelInput!` added to `Mutation.sysSdmCreateSystemModel`

###### Types

\+ Type `SysSdmCreateSystemModelPayload` was added

Δ Object type `SysSdmCreateSystemModelPayload` has description `**Experimental**`

\+ Type `SysSdmSystemModel` was added

Δ Object type `SysSdmSystemModel` has description `**Experimental**`

\+ Type `SysSdmCreateSystemModelInput` was added

Δ Object type `SysSdmCreateSystemModelInput` has description `**Experimental**`

\+ Type `SysSdmSystemModelFilterInput` was added

Δ Object type `SysSdmSystemModelFilterInput` has description `**Experimental**`

\+ Type `SysSdmSystemModelSortInput` was added

Δ Object type `SysSdmSystemModelSortInput` has description `**Experimental**`

###### Fields

\+ Field `idMutationResponse` was added to object type `SysSdmCreateSystemModelPayload`

\+ Field `name` was added to object type `SysSdmSystemModel`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SysSdmCreateSystemModelInput`

\+ Input field `and` of type `[SysSdmSystemModelFilterInput!]` was added to input object type `SysSdmSystemModelFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `SysSdmSystemModelFilterInput`

\+ Input field `or` of type `[SysSdmSystemModelFilterInput!]` was added to input object type `SysSdmSystemModelFilterInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `SysSdmSystemModelSortInput`

### 05-Feb-2026

#### ✅ Non-Breaking Changes (48)

##### Design

###### Types

\+ Type `DesSymbolUsedBy` was added

Δ Object type `DesSymbolUsedBy` has description `Represents reverse relationships for a symbol (where the symbol is used).`

###### Arguments

\+ Argument `after: String` added to `DesSymbolUsedBy.components`

\+ Argument `before: String` added to `DesSymbolUsedBy.components`

\+ Argument `first: Int` added to `DesSymbolUsedBy.components`

\+ Argument `last: Int` added to `DesSymbolUsedBy.components`

###### Fields

\+ Field `components` was added to object type `DesSymbolUsedBy`

\+ Field `usedBy` was added to object type `DesSymbol`

##### System Design

###### Types

\+ Type `SysEsdCompiledMetadata` was added

\+ Type `SysEsdConnection` was added

\+ Type `SysEsdFunctionalBlock` was added

\+ Type `SysEsdKeyComponent` was added

\+ Type `SysEsdParameter` was added

\+ Type `SysEsdPort` was added

\+ Type `SysEsdPortAssociation` was added

\+ Type `SysEsdSoftwareComponent` was added

###### Fields

\+ Field `connections` was added to object type `SysEsdCompiledMetadata`

\+ Field `functionalBlocks` was added to object type `SysEsdCompiledMetadata`

\+ Field `parameters` was added to object type `SysEsdCompiledMetadata`

\+ Field `id` was added to object type `SysEsdConnection`

\+ Field `id` was added to object type `SysEsdFunctionalBlock`

\+ Field `keyComponents` was added to object type `SysEsdFunctionalBlock`

\+ Field `name` was added to object type `SysEsdFunctionalBlock`

\+ Field `parameters` was added to object type `SysEsdFunctionalBlock`

\+ Field `ports` was added to object type `SysEsdFunctionalBlock`

\+ Field `portsAssociations` was added to object type `SysEsdFunctionalBlock`

\+ Field `softwareComponents` was added to object type `SysEsdFunctionalBlock`

\+ Field `childSoftwareComponentsIds` was added to object type `SysEsdKeyComponent`

\+ Field `id` was added to object type `SysEsdKeyComponent`

\+ Field `name` was added to object type `SysEsdKeyComponent`

\+ Field `parameters` was added to object type `SysEsdKeyComponent`

\+ Field `id` was added to object type `SysEsdParameter`

\+ Field `name` was added to object type `SysEsdParameter`

\+ Field `value` was added to object type `SysEsdParameter`

\+ Field `associationId` was added to object type `SysEsdPort`

\+ Field `id` was added to object type `SysEsdPort`

\+ Field `name` was added to object type `SysEsdPort`

\+ Field `parameters` was added to object type `SysEsdPort`

\+ Field `id` was added to object type `SysEsdPortAssociation`

\+ Field `portId` was added to object type `SysEsdPortAssociation`

\+ Field `portLibraryName` was added to object type `SysEsdPortAssociation`

\+ Field `softwareComponentId` was added to object type `SysEsdPortAssociation`

\+ Field `id` was added to object type `SysEsdSoftwareComponent`

\+ Field `name` was added to object type `SysEsdSoftwareComponent`

\+ Field `parameters` was added to object type `SysEsdSoftwareComponent`

\+ Field `parentKeyComponentId` was added to object type `SysEsdSoftwareComponent`

\+ Field `portsAssociationsIds` was added to object type `SysEsdSoftwareComponent`

\+ Field `model` was added to object type `SysEsdDocument`

### 04-Feb-2026

#### ⚠️ Dangerous Changes (1)

##### Supply

###### Types

\+ Enum value `EXAMPLE` was added to enum `SupRefDesignType`

#### ✅ Non-Breaking Changes (18)

##### Design

###### ✏️ Mutation

\+ Field `desAddDatasheetToComponent` was added to object type `Mutation`

\+ Argument `input: DesAddDatasheetToComponentInput!` added to `Mutation.desAddDatasheetToComponent`

\+ Field `desRemoveDatasheetFromComponent` was added to object type `Mutation`

\+ Argument `input: DesRemoveDatasheetFromComponentInput!` added to `Mutation.desRemoveDatasheetFromComponent`

###### Types

\+ Type `DesAddDatasheetToComponentPayload` was added

Δ Object type `DesAddDatasheetToComponentPayload` has description `Payload associated with adding a datasheet to a component.`

\+ Type `DesRemoveDatasheetFromComponentPayload` was added

Δ Object type `DesRemoveDatasheetFromComponentPayload` has description `Payload associated with removing a datasheet from a component.`

\+ Type `DesAddDatasheetToComponentInput` was added

Δ Object type `DesAddDatasheetToComponentInput` has description `Input for adding a datasheet to a component.`

\+ Type `DesRemoveDatasheetFromComponentInput` was added

Δ Object type `DesRemoveDatasheetFromComponentInput` has description `Input for removing a datasheet from a component.`

###### Fields

\+ Field `errors` was added to object type `DesAddDatasheetToComponentPayload`

\+ Field `errors` was added to object type `DesRemoveDatasheetFromComponentPayload`

###### Input / Payload

\+ Input field `componentId` of type `ID!` was added to input object type `DesAddDatasheetToComponentInput`

\+ Input field `datasheetId` of type `ID!` was added to input object type `DesAddDatasheetToComponentInput`

\+ Input field `componentId` of type `ID!` was added to input object type `DesRemoveDatasheetFromComponentInput`

\+ Input field `datasheetId` of type `ID!` was added to input object type `DesRemoveDatasheetFromComponentInput`

### 03-Feb-2026

#### 🔴 Breaking Changes (3)

##### Design

###### 🔍 Query

− Field `desRevisionDetailsById` (deprecated) was removed from object type `Query`

###### Fields

− Field `id` (deprecated) was removed from object type `DesRevision`

− Field `id` (deprecated) was removed from object type `DesRevisionDetails`

#### ✅ Non-Breaking Changes (1)

##### Design

###### 🔍 Query

Δ Type for argument `workspaceUrl` on field `Query.desRevisionDetailsByRevisionId` changed from `String!` to `String`

### 02-Feb-2026

#### 🔴 Breaking Changes (4)

##### Design

###### 🔍 Query

− Field `desReleaseVariantById` (deprecated) was removed from object type `Query`

###### Types

Δ `DesReleaseVariant` object type no longer implements `Node` interface

###### Fields

− Field `id` (deprecated) was removed from object type `DesReleaseVariant`

Δ Field `DesReleaseVariant.releaseId` changed type from `String!` to `ID!`

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Input / Payload

\+ Input field `softwareProjectId` of type `ID` was added to input object type `SolBldScaffoldingByConfigurationInput`

### 29-Jan-2026

#### 🔴 Breaking Changes (7)

##### Design

###### 🔍 Query

− Field `desManufacturePackageById` (deprecated) was removed from object type `Query`

− Field `desWipVariantById` (deprecated) was removed from object type `Query`

###### Types

Δ `DesManufacturePackage` object type no longer implements `Node` interface

Δ `DesWipVariant` object type no longer implements `Node` interface

###### Fields

− Field `id` (deprecated) was removed from object type `DesManufacturePackage`

− Field `id` (deprecated) was removed from object type `DesWipVariant`

Δ Field `DesWipVariant.projectId` changed type from `String!` to `ID!`

#### ✅ Non-Breaking Changes (35)

##### Design

###### 🔍 Query

Δ Field `Query.desManufacturePackages` is deprecated

Δ Directive `deprecated` was added to `Query.desManufacturePackages`

###### Fields

\+ Field `manufacturePackageId` was added to object type `DesManufacturePackage`

Δ Field `DesRelease.manufacturePackages` is deprecated

Δ Directive `deprecated` was added to `DesRelease.manufacturePackages`

##### Library Management

###### 🔍 Query

\+ Field `desPermissionsById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desPermissionsById`

##### Platform

###### Input / Payload

\+ Input field `solutionFolderName` of type `String` was added to input object type `SolCreateSolutionInput`

Δ Directive `deprecated` was added to input field `createSolutionFolder` in input object `SolCreateSolutionInput`

##### Supply

###### 🔍 Query

\+ Field `supSolutionTemplateApplicationsSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSolutionTemplateApplicationsSearch`

\+ Argument `before: String` added to `Query.supSolutionTemplateApplicationsSearch`

\+ Argument `first: Int` added to `Query.supSolutionTemplateApplicationsSearch`

\+ Argument `last: Int` added to `Query.supSolutionTemplateApplicationsSearch`

\+ Argument `order: [SupSolutionTemplateApplicationSortInput!]` added to `Query.supSolutionTemplateApplicationsSearch`

\+ Argument `where: SupSolutionTemplateApplicationSearchFilterInput` added to `Query.supSolutionTemplateApplicationsSearch`

###### Types

\+ Type `SupSolutionTemplateApplicationConnection` was added

Δ Object type `SupSolutionTemplateApplicationConnection` has description `A connection to a list of items.`

\+ Type `SupSolutionTemplateApplicationEdge` was added

Δ Object type `SupSolutionTemplateApplicationEdge` has description `An edge in a connection.`

\+ Type `SupSolutionTemplateApplicationSearchFilterInput` was added

Δ Object type `SupSolutionTemplateApplicationSearchFilterInput` has description `Represents the filter for searching solution template applications.`

\+ Type `SupSolutionTemplateApplicationSortInput` was added

Δ Object type `SupSolutionTemplateApplicationSortInput` has description `Input type for solution template application sorting.`

###### Fields

\+ Field `edges` was added to object type `SupSolutionTemplateApplicationConnection`

\+ Field `nodes` was added to object type `SupSolutionTemplateApplicationConnection`

\+ Field `pageInfo` was added to object type `SupSolutionTemplateApplicationConnection`

\+ Field `totalCount` was added to object type `SupSolutionTemplateApplicationConnection`

\+ Field `cursor` was added to object type `SupSolutionTemplateApplicationEdge`

\+ Field `node` was added to object type `SupSolutionTemplateApplicationEdge`

\+ Field `createdAt` was added to object type `SupSolutionTemplateApplication`

\+ Field `updatedAt` was added to object type `SupSolutionTemplateApplication`

###### Input / Payload

\+ Input field `q` of type `String` was added to input object type `SupSolutionTemplateApplicationSearchFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `SupSolutionTemplateApplicationSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `SupSolutionTemplateApplicationSortInput`

### 27-Jan-2026

#### 🔴 Breaking Changes (7)

##### Design

###### 🔍 Query

− Field `desDesignItemById` (deprecated) was removed from object type `Query`

###### Types

Δ `DesComponentType` object type no longer implements `Node` interface

Δ `DesDesignItem` object type no longer implements `Node` interface

###### Fields

− Field `id` (deprecated) was removed from object type `DesComponentType`

− Field `id` (deprecated) was removed from object type `DesDesignItem`

###### Input / Payload

− Input field `itemAsDesignItemId` (deprecated) was removed from input object type `DesCreateCommentThreadInput`

##### Platform

###### Input / Payload

− Input field `userType` was removed from input object type `DesWorkspaceUserFilterInput`

#### ✅ Non-Breaking Changes (4)

##### Design

###### 🔍 Query

\+ Field `desDatasheetById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desDatasheetById`

##### Platform

###### Input / Payload

\+ Input field `groupIds` of type `[String!]` was added to input object type `DesWorkspaceUserFilterInput`

\+ Input field `userTypes` of type `[DesWorkspaceUserType!]` was added to input object type `DesWorkspaceUserFilterInput`

### 26-Jan-2026

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Input / Payload

\+ Input field `createSolutionFolder` of type `Boolean` was added to input object type `SolCreateSolutionInput`

### 23-Jan-2026

#### 🔴 Breaking Changes (5)

##### Platform

###### Fields

− Field `esdDocumentIds` (deprecated) was removed from object type `SolSolution`

− Field `hardwareProjectIds` (deprecated) was removed from object type `SolSolution`

− Field `sharedWithIds` (deprecated) was removed from object type `SolSolution`

− Field `simulationIds` (deprecated) was removed from object type `SolSolution`

− Field `softwareProjectIds` (deprecated) was removed from object type `SolSolution`

### 22-Jan-2026

#### 🔴 Breaking Changes (3)

##### Renesas (preview)

###### Input / Payload

\+ Input field `publisherId` of type `String!` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

##### Supply

###### Input / Payload

\+ Input field `publisherId` of type `String!` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `publisherId` of type `String!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

#### ⚠️ Dangerous Changes (1)

##### Supply

###### 🔍 Query

\+ Argument `filter: SupEvalKitFilterInput` added to `Query.supEvalKits`

#### ✅ Non-Breaking Changes (115)

##### Design

###### Fields

\+ Field `owner` was added to object type `DesProject`

##### Platform

###### Fields

\+ Field `uploadedById` was added to object type `SolAttachment`

Δ Field `SolAttachment.uploadedById` is deprecated

Δ Directive `deprecated` was added to `SolAttachment.uploadedById`

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSoftwareProjectSearch`

\+ Argument `before: String` added to `Query.supSoftwareProjectSearch`

\+ Argument `first: Int` added to `Query.supSoftwareProjectSearch`

\+ Argument `last: Int` added to `Query.supSoftwareProjectSearch`

\+ Argument `order: [SupSoftwareProjectSortInput!]` added to `Query.supSoftwareProjectSearch`

\+ Argument `where: SupSoftwareProjectSearchFilterInput` added to `Query.supSoftwareProjectSearch`

###### Types

\+ Type `SupSoftwareProjectConnection` was added

Δ Object type `SupSoftwareProjectConnection` has description `A connection to a list of items.`

\+ Type `SupSoftwareProjectEdge` was added

Δ Object type `SupSoftwareProjectEdge` has description `An edge in a connection.`

\+ Type `SupSoftwareProjectSearchFilterInput` was added

Δ Object type `SupSoftwareProjectSearchFilterInput` has description `Represents the filter for searching software projects.`

\+ Type `SupSoftwareProjectSortInput` was added

Δ Object type `SupSoftwareProjectSortInput` has description `Input type for sorting.`

Δ Object type `SupSoftwareProjectFilterInput` has description `Input for filtering software projects by additional conditions.`

###### Fields

\+ Field `edges` was added to object type `SupSoftwareProjectConnection`

\+ Field `nodes` was added to object type `SupSoftwareProjectConnection`

\+ Field `pageInfo` was added to object type `SupSoftwareProjectConnection`

\+ Field `totalCount` was added to object type `SupSoftwareProjectConnection`

\+ Field `cursor` was added to object type `SupSoftwareProjectEdge`

\+ Field `node` was added to object type `SupSoftwareProjectEdge`

\+ Field `owner` was added to object type `SftAIModel`

\+ Field `permissions` was added to object type `SftAIModel`

\+ Field `publisherId` was added to object type `SupSoftwareProject`

Δ Field `SupSoftwareProject.createdAt` changed type from `DateTime` to `DateTime!`

Δ Field `SupSoftwareProject.updatedAt` changed type from `DateTime` to `DateTime!`

###### Input / Payload

\+ Input field `description` of type `String` was added to input object type `SupSoftwareProjectSearchFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupSoftwareProjectSearchFilterInput`

\+ Input field `title` of type `String` was added to input object type `SupSoftwareProjectSearchFilterInput`

\+ Input field `types` of type `[SupSoftwareProjectType!]` was added to input object type `SupSoftwareProjectSearchFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `SupSoftwareProjectSortInput`

\+ Input field `title` of type `SortEnumType` was added to input object type `SupSoftwareProjectSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `SupSoftwareProjectSortInput`

\+ Input field `publisherIds` of type `[String!]` was added to input object type `SupSoftwareProjectFilterInput`

\+ Input field `publisherId` of type `String` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

##### Supply

###### 🔍 Query

\+ Field `supEvalKitSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supEvalKitSearch`

\+ Argument `before: String` added to `Query.supEvalKitSearch`

\+ Argument `first: Int` added to `Query.supEvalKitSearch`

\+ Argument `last: Int` added to `Query.supEvalKitSearch`

\+ Argument `order: [SupEvalKitSortInput!]` added to `Query.supEvalKitSearch`

\+ Argument `where: SupEvalKitSearchFilterInput` added to `Query.supEvalKitSearch`

\+ Field `supSolutionTemplateSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.supSolutionTemplateSearch`

\+ Argument `before: String` added to `Query.supSolutionTemplateSearch`

\+ Argument `first: Int` added to `Query.supSolutionTemplateSearch`

\+ Argument `last: Int` added to `Query.supSolutionTemplateSearch`

\+ Argument `order: [SupSolutionTemplateSortInput!]` added to `Query.supSolutionTemplateSearch`

\+ Argument `where: SupSolutionTemplateSearchFilterInput` added to `Query.supSolutionTemplateSearch`

###### Types

\+ Type `SupEvalKitConnection` was added

Δ Object type `SupEvalKitConnection` has description `A connection to a list of items.`

\+ Type `SupEvalKitEdge` was added

Δ Object type `SupEvalKitEdge` has description `An edge in a connection.`

\+ Type `SupSolutionTemplateConnection` was added

Δ Object type `SupSolutionTemplateConnection` has description `A connection to a list of items.`

\+ Type `SupSolutionTemplateEdge` was added

Δ Object type `SupSolutionTemplateEdge` has description `An edge in a connection.`

\+ Type `SupEvalKitFilterInput` was added

Δ Object type `SupEvalKitFilterInput` has description `Input for filtering evaluation kits by additional conditions.`

\+ Type `SupEvalKitSearchFilterInput` was added

Δ Object type `SupEvalKitSearchFilterInput` has description `Represents the filter for searching evaluation kits.`

\+ Type `SupEvalKitSortInput` was added

Δ Object type `SupEvalKitSortInput` has description `Input type for sorting.`

\+ Type `SupSolutionTemplateSearchFilterInput` was added

Δ Object type `SupSolutionTemplateSearchFilterInput` has description `Represents the filter for searching solution templates.`

\+ Type `SupSolutionTemplateSortInput` was added

Δ Object type `SupSolutionTemplateSortInput` has description `Input type for solution template sorting.`

###### Fields

\+ Field `edges` was added to object type `SupEvalKitConnection`

\+ Field `nodes` was added to object type `SupEvalKitConnection`

\+ Field `pageInfo` was added to object type `SupEvalKitConnection`

\+ Field `totalCount` was added to object type `SupEvalKitConnection`

\+ Field `cursor` was added to object type `SupEvalKitEdge`

\+ Field `node` was added to object type `SupEvalKitEdge`

\+ Field `edges` was added to object type `SupSolutionTemplateConnection`

\+ Field `nodes` was added to object type `SupSolutionTemplateConnection`

\+ Field `pageInfo` was added to object type `SupSolutionTemplateConnection`

\+ Field `totalCount` was added to object type `SupSolutionTemplateConnection`

\+ Field `cursor` was added to object type `SupSolutionTemplateEdge`

\+ Field `node` was added to object type `SupSolutionTemplateEdge`

\+ Field `publisherId` was added to object type `SupEvalKit`

Δ Field `SupEvalKit.createdAt` changed type from `DateTime` to `DateTime!`

Δ Field `SupEvalKit.updatedAt` changed type from `DateTime` to `DateTime!`

\+ Field `publisherId` was added to object type `SupSolutionTemplate`

Δ Field `SupSolutionTemplate.createdAt` changed type from `DateTime` to `DateTime!`

Δ Field `SupSolutionTemplate.updatedAt` changed type from `DateTime` to `DateTime!`

###### Input / Payload

\+ Input field `publisherIds` of type `[String!]` was added to input object type `SupEvalKitFilterInput`

\+ Input field `description` of type `String` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `partIds` of type `[String!]` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `refDesignIds` of type `[ID!]` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `title` of type `String` was added to input object type `SupEvalKitSearchFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `SupEvalKitSortInput`

\+ Input field `title` of type `SortEnumType` was added to input object type `SupEvalKitSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `SupEvalKitSortInput`

\+ Input field `aiModelIds` of type `[String!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `description` of type `String` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `hasAIModels` of type `Boolean` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `q` of type `String` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `stableNames` of type `[String!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `statuses` of type `[SupSolutionTemplateStatus!]` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `title` of type `String` was added to input object type `SupSolutionTemplateSearchFilterInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `SupSolutionTemplateSortInput`

\+ Input field `stableName` of type `SortEnumType` was added to input object type `SupSolutionTemplateSortInput`

\+ Input field `title` of type `SortEnumType` was added to input object type `SupSolutionTemplateSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `SupSolutionTemplateSortInput`

\+ Input field `publisherId` of type `String` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `publisherIds` of type `[String!]` was added to input object type `SupSolutionTemplateFilterInput`

\+ Input field `publisherId` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

##### System Design

###### Fields

\+ Field `owner` was added to object type `SysEsdDocument`

\+ Field `permissions` was added to object type `SysEsdDocument`

### 20-Jan-2026

#### ✅ Non-Breaking Changes (8)

##### Platform

###### 🔍 Query

\+ Field `solSolutionsByPagev2` was added to object type `Query`

\+ Argument `pageNumber: Int!` added to `Query.solSolutionsByPagev2`

\+ Argument `pageSize: Int!` added to `Query.solSolutionsByPagev2`

Δ Field `Query.solSolutionsByPage` is deprecated

Δ Directive `deprecated` was added to `Query.solSolutionsByPage`

###### Types

\+ Type `SolSolutionsByPagePayload` was added

###### Fields

\+ Field `solutions` was added to object type `SolSolutionsByPagePayload`

\+ Field `totalCount` was added to object type `SolSolutionsByPagePayload`

### 19-Jan-2026

#### 🔴 Breaking Changes (6)

##### Design

###### Fields

Δ Field `DesUpdateFolderPermissionsPayload.folderId` changed type from `String!` to `ID!`

###### Input / Payload

Δ Input field `DesCreateFootprintInput.folderId` changed type from `String!` to `ID!`

Δ Input field `DesCreateSymbolInput.folderId` changed type from `String!` to `ID!`

Δ Input field `DesReleaseComponentInput.componentParentFolderId` changed type from `String` to `ID`

Δ Input field `DesUpdateFolderPermissionsInput.folderId` changed type from `String!` to `ID!`

Δ Input field `DesUploadProjectInput.parentFolderId` changed type from `String!` to `ID!`

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

Δ `DesFolder` object implements `Node` interface

#### ✅ Non-Breaking Changes (25)

##### Design

###### 🔍 Query

\+ Field `desFolderById` was added to object type `Query`

Δ Field `Query.desFolderById` is deprecated

\+ Argument `id: ID!` added to `Query.desFolderById`

Δ Directive `deprecated` was added to `Query.desFolderById`

###### Fields

\+ Field `id` was added to object type `DesCreateFolderPayload`

Δ Field `DesCreateFolderPayload.id` is deprecated

Δ Directive `deprecated` was added to `DesCreateFolderPayload.id`

\+ Field `id` was added to object type `DesFolder`

Δ Field `DesFolder.id` is deprecated

Δ Directive `deprecated` was added to `DesFolder.id`

Δ Field `DesUpdateFolderPermissionsPayload.folderId` is deprecated

Δ Directive `deprecated` was added to `DesUpdateFolderPermissionsPayload.folderId`

###### Input / Payload

\+ Input field `parentId` of type `ID` was added to input object type `DesCreateFolderInput`

Δ Directive `deprecated` was added to input field `parentId` in input object `DesCreateFolderInput`

\+ Input field `id` of type `ID` was added to input object type `DesDeleteFolderInput`

Δ Directive `deprecated` was added to input field `id` in input object `DesDeleteFolderInput`

Δ Input field `DesDeleteFolderInput.folderId` changed type from `String!` to `String`

\+ Input field `id` of type `ID` was added to input object type `DesMoveFolderInput`

Δ Directive `deprecated` was added to input field `id` in input object `DesMoveFolderInput`

\+ Input field `parentId` of type `ID` was added to input object type `DesMoveFolderInput`

Δ Directive `deprecated` was added to input field `parentId` in input object `DesMoveFolderInput`

Δ Input field `DesMoveFolderInput.folderId` changed type from `String!` to `String`

\+ Input field `id` of type `ID` was added to input object type `DesUpdateFolderInput`

Δ Directive `deprecated` was added to input field `id` in input object `DesUpdateFolderInput`

Δ Input field `DesUpdateFolderInput.folderId` changed type from `String!` to `String`

### 16-Jan-2026

#### 🔴 Breaking Changes (18)

##### Design

###### 🔍 Query

− Field `desFolderById` (deprecated) was removed from object type `Query`

###### Types

Δ `DesFolder` object type no longer implements `Node` interface

###### Fields

− Field `id` (deprecated) was removed from object type `DesCreateFolderPayload`

− Field `id` (deprecated) was removed from object type `DesFolder`

Δ Field `DesUpdateFolderPermissionsPayload.folderId` changed type from `ID!` to `String!`

###### Input / Payload

− Input field `parentId` (deprecated) was removed from input object type `DesCreateFolderInput`

Δ Input field `DesCreateFootprintInput.folderId` changed type from `ID!` to `String!`

Δ Input field `DesCreateSymbolInput.folderId` changed type from `ID!` to `String!`

− Input field `id` (deprecated) was removed from input object type `DesDeleteFolderInput`

Δ Input field `DesDeleteFolderInput.folderId` changed type from `String` to `String!`

− Input field `id` (deprecated) was removed from input object type `DesMoveFolderInput`

− Input field `parentId` (deprecated) was removed from input object type `DesMoveFolderInput`

Δ Input field `DesMoveFolderInput.folderId` changed type from `String` to `String!`

Δ Input field `DesReleaseComponentInput.componentParentFolderId` changed type from `ID` to `String`

− Input field `id` (deprecated) was removed from input object type `DesUpdateFolderInput`

Δ Input field `DesUpdateFolderInput.folderId` changed type from `String` to `String!`

Δ Input field `DesUpdateFolderPermissionsInput.folderId` changed type from `ID!` to `String!`

Δ Input field `DesUploadProjectInput.parentFolderId` changed type from `ID!` to `String!`

#### ✅ Non-Breaking Changes (2)

##### Design

###### Fields

Δ Field `DesUpdateFolderPermissionsPayload.folderId` is no longer deprecated

Δ Directive `deprecated` was removed from field `DesUpdateFolderPermissionsPayload.folderId`

### 15-Jan-2026

#### ✅ Non-Breaking Changes (6)

##### Renesas (preview)

###### Fields

\+ Field `updatedById` was added to object type `SupSoftwareProject`

\+ Field `updatedByName` was added to object type `SupSoftwareProject`

##### Supply

###### Fields

\+ Field `updatedById` was added to object type `SupEvalKit`

\+ Field `updatedByName` was added to object type `SupEvalKit`

\+ Field `updatedById` was added to object type `SupSolutionTemplate`

\+ Field `updatedByName` was added to object type `SupSolutionTemplate`

### 14-Jan-2026

#### 🔴 Breaking Changes (1)

##### Design

###### Fields

Δ Field `DesProject.latestRevision` changed type from `DesVcsRevision!` to `DesVcsRevision`

#### ✅ Non-Breaking Changes (22)

##### Design

###### Fields

\+ Field `revisionId` was added to object type `DesComponent`

##### Library Management

###### 🔍 Query

\+ Field `desPartSearchByManufacturerPartIds` was added to object type `Query`

\+ Argument `items: [DesPartManufacturerPartIdInput!]!` added to `Query.desPartSearchByManufacturerPartIds`

\+ Argument `options: DesPartSearchByManufacturerPartIdsOptionsInput` added to `Query.desPartSearchByManufacturerPartIds`

###### Types

\+ Type `DesPartManufacturerPartId` was added

Δ Object type `DesPartManufacturerPartId` has description `Represents the part manufacturer name and part number.`

\+ Type `DesPartSearchByManufacturerPartIdsResultItem` was added

Δ Object type `DesPartSearchByManufacturerPartIdsResultItem` has description `Represents a search result item.`

\+ Type `DesPartManufacturerPartIdInput` was added

Δ Object type `DesPartManufacturerPartIdInput` has description `Represents the part manufacturer name and part number.`

\+ Type `DesPartSearchByManufacturerPartIdsOptionsInput` was added

Δ Object type `DesPartSearchByManufacturerPartIdsOptionsInput` has description `Represents the search options.`

###### Fields

\+ Field `manufacturerName` was added to object type `DesPartManufacturerPartId`

\+ Field `mpn` was added to object type `DesPartManufacturerPartId`

\+ Field `part` was added to object type `DesPartSearchByManufacturerPartIdsResultItem`

\+ Field `requested` was added to object type `DesPartSearchByManufacturerPartIdsResultItem`

\+ Field `clickUrl` was added to object type `DesPartCompanyOffer`

\+ Field `overallHealthCheckStatuses` was added to object type `DesPartSearchFixedFacets`

###### Input / Payload

\+ Input field `manufacturerName` of type `String!` was added to input object type `DesPartManufacturerPartIdInput`

\+ Input field `mpn` of type `String!` was added to input object type `DesPartManufacturerPartIdInput`

\+ Input field `partProvidersFilter` of type `DesPartPartProvidersFilterInput` was added to input object type `DesPartSearchByManufacturerPartIdsOptionsInput`

\+ Input field `hasComponentsUsages` of type `Boolean` was added to input object type `DesPartSearchFilterInput`

### 13-Jan-2026

#### ⚠️ Dangerous Changes (2)

##### Renesas (preview)

###### 🔍 Query

\+ Argument `order: [SupSoftwareProjectOrderInput!]` added to `Query.supSoftwareProjects`

##### Supply

###### 🔍 Query

\+ Argument `order: [SupEvalKitOrderInput!]` added to `Query.supEvalKits`

#### ✅ Non-Breaking Changes (25)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectOrderDirection` was added

\+ Enum value `ASC` was added to enum `SupSoftwareProjectOrderDirection`

\+ Enum value `DESC` was added to enum `SupSoftwareProjectOrderDirection`

\+ Type `SupSoftwareProjectOrderField` was added

\+ Enum value `CREATED_AT` was added to enum `SupSoftwareProjectOrderField`

\+ Enum value `DESCRIPTION` was added to enum `SupSoftwareProjectOrderField`

\+ Enum value `TITLE` was added to enum `SupSoftwareProjectOrderField`

\+ Enum value `TYPE` was added to enum `SupSoftwareProjectOrderField`

\+ Enum value `UPDATED_AT` was added to enum `SupSoftwareProjectOrderField`

\+ Type `SupSoftwareProjectOrderInput` was added

Δ Object type `SupSoftwareProjectOrderInput` has description `Input type for ordering.`

###### Input / Payload

\+ Input field `direction` of type `SupSoftwareProjectOrderDirection!` was added to input object type `SupSoftwareProjectOrderInput`

\+ Input field `field` of type `SupSoftwareProjectOrderField!` was added to input object type `SupSoftwareProjectOrderInput`

##### Supply

###### Types

\+ Type `SupEvalKitOrderDirection` was added

\+ Enum value `ASC` was added to enum `SupEvalKitOrderDirection`

\+ Enum value `DESC` was added to enum `SupEvalKitOrderDirection`

\+ Type `SupEvalKitOrderField` was added

\+ Enum value `CREATED_AT` was added to enum `SupEvalKitOrderField`

\+ Enum value `DESCRIPTION` was added to enum `SupEvalKitOrderField`

\+ Enum value `TITLE` was added to enum `SupEvalKitOrderField`

\+ Enum value `UPDATED_AT` was added to enum `SupEvalKitOrderField`

\+ Type `SupEvalKitOrderInput` was added

Δ Object type `SupEvalKitOrderInput` has description `Input type for ordering.`

###### Input / Payload

\+ Input field `direction` of type `SupEvalKitOrderDirection!` was added to input object type `SupEvalKitOrderInput`

\+ Input field `field` of type `SupEvalKitOrderField!` was added to input object type `SupEvalKitOrderInput`

### 23-Dec-2025

#### 🔴 Breaking Changes (1)

##### Renesas (preview)

###### Input / Payload

\+ Input field `projectSources` of type `[SupSoftwareProjectEvalKitProjectSourceInput!]!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

#### ✅ Non-Breaking Changes (73)

##### Design

###### Types

Δ Object type `DesSetProjectRequirementsBlockPayload` has description `Payload for setting the requirements block of a project.`

Δ Object type `DesUnionPayload` has description `Union type for various payloads.`

Δ Object type `DesCadBoardCollaborationFlag` has description `Board option flags.`

Δ Object type `DesCadBoardComponentPlacement` has description `Component placement kind.`

Δ Object type `DesCadBoardCopperExportFeature` has description `Specifies which copper features to include when exporting board copper data.`

Δ Object type `DesCadBoardCopperRegionType` has description `Specifies the type of copper region.`

Δ Object type `DesCadBoardLayerCategory` has description `Category of the board layer.`

Δ Object type `DesCadBoardLayerComponentPlacement` has description `Component placement for the signal layer.`

Δ Object type `DesCadBoardLayerDielectricType` has description `Dielectric type for the dielectric layer.`

Δ Object type `DesCadBoardLayerPhysicalCategory` has description `Physical category of the board layer.`

Δ Object type `DesCadBoardLayerPosition` has description `Position of the board layer within the stackup.`

Δ Object type `DesCadBoardLayerType` has description `Type of the board layer.`

Δ Object type `DesCadBoardObjectType` has description `The type of the board object.`

Δ Object type `DesCadComponentVariationKind` has description `The kind of component variation in a CAD design.`

Δ Object type `DesCadCounterType` has description `The type of the hole.`

Δ Object type `DesCadHoleType` has description `The type of the hole.`

Δ Object type `DesCadLayersExportMode` has description `The mode for exporting layers in a design.`

Δ Object type `DesCadWorkflowState` has description `The workflow state for proposed changes.`

Δ Object type `DesCommentContextType` has description `The comment context type.`

Δ Object type `DesDocumentType` has description `The document type.`

Δ Object type `DesFolderFilterMatchMode` has description `The filter match mode.`

Δ Object type `DesLayerType` has description `The type of PCB layer.`

Δ Object type `DesLifeCycleStateTransitionKind` has description `The kind of life cycle state transition.`

Δ Object type `DesParameterType` has description `Component parameter type.`

Δ Object type `DesPinElectricalType` has description `The electrical type of a pin.`

Δ Object type `DesRevisionNamingPolicy` has description `Describes the naming policy for design revisions.`

Δ Object type `DesTaskPriority` has description `Priority levels for a task.`

Δ Object type `DesTaskStatus` has description `Status values for a task.`

Δ Object type `DesUserPictureSize` has description `Sizes for user profile pictures.`

Δ Object type `DesComponentStringOperationFilterInput` has description `String operation filter input type for components.`

Δ Object type `DesComponentUpgradeFilterInput` has description `Filter input type for component upgrades.`

Δ Object type `DesFolderFilterInput` has description `Input type for filtering folders in the design library.`

Δ Object type `DesLifecycleStateUpgradeOperationFilterInput` has description `Filter input type for lifecycle state names.`

Δ Object type `DesProjectsRequirementsBlockFilterInput` has description `Filter for requirements blocks in projects.`

Δ Object type `DesSetProjectRequirementsBlockInput` has description `Sets the requirements block for a project.`

Δ Object type `DesStringUpgradeOperationFilterInput` has description `String filter input type for component upgrades.`

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectEvalKitProjectSource` was added

\+ Type `SupSoftwareProjectEvalKitProjectSourceType` was added

\+ Enum value `CMAKE` was added to enum `SupSoftwareProjectEvalKitProjectSourceType`

\+ Enum value `E2STUDIO` was added to enum `SupSoftwareProjectEvalKitProjectSourceType`

\+ Type `SupSoftwareProjectCreateEvalKitSourceInput` was added

\+ Type `SupSoftwareProjectEvalKitProjectSourceInput` was added

\+ Type `SupSoftwareProjectRemoveEvalKitSourceInput` was added

\+ Type `SupSoftwareProjectUpdateEvalKitSourceInput` was added

###### Arguments

\+ Argument `types: [SupSoftwareProjectEvalKitProjectSourceType]` added to `SupSoftwareProjectEvalKitSource.projectSources`

###### Fields

\+ Field `configXmlUrl` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `sourceUrl` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `type` was added to object type `SupSoftwareProjectEvalKitProjectSource`

\+ Field `compatibleEvalKitId` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `projectSources` was added to object type `SupSoftwareProjectEvalKitSource`

###### Input / Payload

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupSoftwareProjectCreateEvalKitSourceInput`

\+ Input field `projectSources` of type `[SupSoftwareProjectEvalKitProjectSourceInput!]!` was added to input object type `SupSoftwareProjectCreateEvalKitSourceInput`

\+ Input field `configXmlUrl` of type `String!` was added to input object type `SupSoftwareProjectEvalKitProjectSourceInput`

\+ Input field `sourceFile` of type `SupSoftwareProjectFileInput` was added to input object type `SupSoftwareProjectEvalKitProjectSourceInput`

\+ Input field `sourceUrl` of type `String` was added to input object type `SupSoftwareProjectEvalKitProjectSourceInput`

\+ Input field `type` of type `SupSoftwareProjectEvalKitProjectSourceType!` was added to input object type `SupSoftwareProjectEvalKitProjectSourceInput`

\+ Input field `compatibleEvalKitId` of type `String!` was added to input object type `SupSoftwareProjectRemoveEvalKitSourceInput`

\+ Input field `compatibleEvalKitId` of type `String!` was added to input object type `SupSoftwareProjectUpdateEvalKitSourceInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupSoftwareProjectUpdateEvalKitSourceInput`

\+ Input field `newProjectSources` of type `[SupSoftwareProjectEvalKitProjectSourceInput!]` was added to input object type `SupSoftwareProjectUpdateEvalKitSourceInput`

Δ Input field `SupSoftwareProjectEvalKitSourceInput.configUrl` changed type from `String!` to `String`

Δ Directive `deprecated` was added to input field `configUrl` in input object `SupSoftwareProjectEvalKitSourceInput`

Δ Input field `SupSoftwareProjectEvalKitSourceInput.configXmlUrl` changed type from `String!` to `String`

Δ Directive `deprecated` was added to input field `configXmlUrl` in input object `SupSoftwareProjectEvalKitSourceInput`

Δ Input field `SupSoftwareProjectEvalKitSourceInput.readmeUrl` changed type from `String!` to `String`

Δ Directive `deprecated` was added to input field `readmeUrl` in input object `SupSoftwareProjectEvalKitSourceInput`

Δ Directive `deprecated` was added to input field `sourceFile` in input object `SupSoftwareProjectEvalKitSourceInput`

Δ Directive `deprecated` was added to input field `sourceUrl` in input object `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `addCompatibleEvalKits` of type `[SupSoftwareProjectCreateEvalKitSourceInput!]` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `removeCompatibleEvalKits` of type `[SupSoftwareProjectRemoveEvalKitSourceInput!]` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `updateCompatibleEvalKits` of type `[SupSoftwareProjectUpdateEvalKitSourceInput!]` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

Δ Input field `SupSoftwareProjectUpdateSoftwareProjectInput.newCompatibleEvalKits` changed type from `[SupSoftwareProjectEvalKitSourceInput!]!` to `[SupSoftwareProjectEvalKitSourceInput!]`

Δ Directive `deprecated` was added to input field `newCompatibleEvalKits` in input object `SupSoftwareProjectUpdateSoftwareProjectInput`

### 19-Dec-2025

#### ✅ Non-Breaking Changes (19)

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `dmExecuteDeviceEvaluationFromESDv2` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceEvaluationFromESDv2Input!` added to `Mutation.dmExecuteDeviceEvaluationFromESDv2`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromESD` is deprecated

Δ Directive `deprecated` was added to `Mutation.dmExecuteDeviceEvaluationFromESD`

###### Types

\+ Type `DmEsdResolverResult` was added

Δ Object type `DmEsdResolverResult` has description `**Experimental** Resolver results for a specific functional block within ESD.`

\+ Type `DmEsdResolverSummary` was added

Δ Object type `DmEsdResolverSummary` has description `**Experimental** Summary of running device model evaluation for an ESD document. This includes all found MCUs with per-device results. Each MCU has associated session ID that can be used to retrieve the results at a later time`

\+ Type `DmExecuteDeviceEvaluationFromESDv2Payload` was added

Δ Object type `DmExecuteDeviceEvaluationFromESDv2Payload` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationFromESDv2Input` was added

Δ Object type `DmExecuteDeviceEvaluationFromESDv2Input` has description `**Experimental**`

###### Fields

\+ Field `functionalBlockId` was added to object type `DmEsdResolverResult`

\+ Field `resolverSummary` was added to object type `DmEsdResolverResult`

\+ Field `sessionId` was added to object type `DmEsdResolverResult`

\+ Field `functionalBlocks` was added to object type `DmEsdResolverSummary`

\+ Field `dmEsdResolverSummary` was added to object type `DmExecuteDeviceEvaluationFromESDv2Payload`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromESDv2Input`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromESDv2Input`

### 18-Dec-2025

#### 🔴 Breaking Changes (12)

##### Platform

###### Input / Payload

− Input field `absoluteRefreshTokenLifetime` was removed from input object type `GloOAuthClientSortInput`

− Input field `accessTokenLifetime` was removed from input object type `GloOAuthClientSortInput`

− Input field `authorizationCodeLifetime` was removed from input object type `GloOAuthClientSortInput`

− Input field `clientSecret` was removed from input object type `GloOAuthClientSortInput`

− Input field `identityTokenLifetime` was removed from input object type `GloOAuthClientSortInput`

− Input field `requireConsent` was removed from input object type `GloOAuthClientSortInput`

− Input field `requirePkce` was removed from input object type `GloOAuthClientSortInput`

− Input field `requireSecret` was removed from input object type `GloOAuthClientSortInput`

− Input field `slidingRefreshTokenLifetime` was removed from input object type `GloOAuthClientSortInput`

##### Renesas (preview)

###### Fields

− Field `revisionIds` (deprecated) was removed from object type `SftDevCfgDeviceConfiguration`

− Field `softwareProjectId` was removed from object type `SftDevCfgDeviceConfiguration`

− Field `deviceConfigurationId` (deprecated) was removed from object type `SftSoftwareProject`

#### ✅ Non-Breaking Changes (2)

##### Renesas (preview)

###### Fields

\+ Field `latestRevision` was added to object type `SftDevCfgDeviceConfiguration`

Δ Field `SftDevCfgDeviceConfigurationRevision.deviceConfiguration` changed type from `SftDevCfgDeviceConfiguration` to `SftDevCfgDeviceConfiguration!`

### 17-Dec-2025

#### ✅ Non-Breaking Changes (11)

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingWithEmptyEsd` was added to object type `Mutation`

###### Types

\+ Type `SolBldScaffoldingWithEmptyEsdPayload` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingWithEmptyEsdPayload`

##### Supply

###### Types

Δ Object type `SupRefApplicationBucket` has description `Aggregation bucket for reference design applications with application identifier + counts.`

Δ Object type `SupRefCategoryBucket` has description `Aggregation bucket for reference design categories with category identifier + counts.`

Δ Object type `SupRefDesignTypeBucket` has description `Aggregation bucket for reference design types with type + counts.`

Δ Object type `SupRefPublisherBucket` has description `Aggregation bucket for reference design publishers with company identifier + counts.`

Δ Object type `SupRefTagBucket` has description `Aggregation bucket for reference design tags with name + counts.`

Δ Object type `SupRefDesignFilterInput` has description `Input for filtering reference designs by additional conditions.`

###### Fields

Δ Field `SupRefDesign.createdAt` changed type from `DateTime` to `DateTime!`

Δ Field `SupRefDesign.updatedAt` changed type from `DateTime` to `DateTime!`

### 16-Dec-2025

#### 🔴 Breaking Changes (2)

##### Platform

###### Input / Payload

Δ Input field `GloAddAppRedirectUriInput.redirectUri` changed type from `URL!` to `String!`

Δ Input field `GloRemoveAppRedirectUriInput.redirectUri` changed type from `URL!` to `String!`

#### ✅ Non-Breaking Changes (2)

##### Platform

###### 🔍 Query

\+ Field `gloOrganizationById` was added to object type `Query`

\+ Argument `organizationId: ID!` added to `Query.gloOrganizationById`

### 10-Dec-2025

#### ⚠️ Dangerous Changes (1)

##### Supply

###### 🔍 Query

\+ Argument `q: String` added to `Query.supSolutionTemplateApplications`

#### ✅ Non-Breaking Changes (11)

##### Design

###### Types

Δ Object type `DesComponentDetails` has description `Detailed component information.`

Δ Object type `DesMesh3D` has description `3D mesh information.`

Δ Object type `DesModel3D` has description `3D model information.`

Δ Object type `DesSystemDiagram` has description `System diagram information.`

Δ Object type `DesContentTypeKind` has description `Kinds of content types stored in the library.`

Δ Object type `DesFolderType` has description `Folder category used in the library.`

Δ Object type `DesLifeCycleManagementType` has description `Type of lifecycle management strategy.`

Δ Object type `DesPadType` has description `Pad type: SMD or free.`

Δ Object type `DesPermissionScope` has description `Scope for permission checks (user, group, organisation, etc.).`

Δ Object type `DesPrimitiveShape` has description `Shape of a PCB primitive.`

Δ Object type `DesProjectType` has description `Type of project.`

### 09-Dec-2025

#### ⚠️ Dangerous Changes (2)

##### Design

###### 🔍 Query

\+ Argument `args: DesLibraryArgsInput` added to `Query.desLibrary`

###### Arguments

\+ Argument `args: DesLibraryArgsInput` added to `DesWorkspace.library`

#### ✅ Non-Breaking Changes (3)

##### Design

###### Types

\+ Type `DesLibraryArgsInput` was added

Δ Object type `DesLibraryArgsInput` has description `` `desLibrary` extra arguments. ``

###### Input / Payload

\+ Input field `allComponentRevisions` of type `Boolean` was added to input object type `DesLibraryArgsInput`

### 08-Dec-2025

#### ✅ Non-Breaking Changes (1)

##### Renesas (preview)

###### Fields

\+ Field `deviceModel` was added to object type `SftDevCfgDeviceConfigurationRevision`

### 06-Dec-2025

#### ✅ Non-Breaking Changes (1)

##### System Design

###### Fields

\+ Field `previewUrl` was added to object type `SysEsdDocument`

### 05-Dec-2025

#### 🔴 Breaking Changes (4)

##### Library Management

###### 🔍 Query

− Argument `partId: String!` was removed from field `Query.desPartById`

\+ Argument `id: ID!` added to `Query.desPartById`

###### Fields

− Field `partId` was removed from object type `DesPart`

− Field `partSourceName` was removed from object type `DesPartSellerWithOffers`

#### ✅ Non-Breaking Changes (128)

##### Common

###### Types

Δ Object type `SortEnumType` has description `Represents the sort direction.`

##### Library Management

###### 🔍 Query

\+ Field `desPartByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desPartByIds`

\+ Field `desPartSearch` was added to object type `Query`

\+ Argument `after: String` added to `Query.desPartSearch`

\+ Argument `before: String` added to `Query.desPartSearch`

\+ Argument `first: Int` added to `Query.desPartSearch`

\+ Argument `last: Int` added to `Query.desPartSearch`

\+ Argument `order: [DesPartSortInput!]` added to `Query.desPartSearch`

\+ Argument `where: DesPartSearchFilterInput` added to `Query.desPartSearch`

###### Types

\+ Type `DesPartBomUsage` was added

Δ Object type `DesPartBomUsage` has description `Represents a BOM usage.`

\+ Type `DesPartComponentUsage` was added

Δ Object type `DesPartComponentUsage` has description `Represents a component usage.`

\+ Type `DesPartFacetRange` was added

Δ Object type `DesPartFacetRange` has description `Represents a facet range.`

\+ Type `DesPartProjectUsage` was added

Δ Object type `DesPartProjectUsage` has description `Represents a project usage.`

\+ Type `DesPartSearchAttributeFacet` was added

Δ Object type `DesPartSearchAttributeFacet` has description `Represents an attribute facet.`

\+ Type `DesPartSearchConnection` was added

Δ Object type `DesPartSearchConnection` has description `A connection to a list of items.`

\+ Type `DesPartSearchEdge` was added

Δ Object type `DesPartSearchEdge` has description `An edge in a connection.`

\+ Type `DesPartSearchFacets` was added

Δ Object type `DesPartSearchFacets` has description `Represents the search facets.`

\+ Type `DesPartSearchFacetValue` was added

Δ Object type `DesPartSearchFacetValue` has description `Represents a search facet value.`

\+ Type `DesPartSearchFixedFacets` was added

Δ Object type `DesPartSearchFixedFacets` has description `Represents fixed search facets.`

\+ Type `DesPartSource` was added

Δ Object type `DesPartSource` has description `Represents a part source.`

\+ Type `DesPartUsages` was added

Δ Object type `DesPartUsages` has description `Represents the usages of a part.`

\+ Type `DesPartAttributeSortInput` was added

Δ Object type `DesPartAttributeSortInput` has description `Represents the input for sorting by attribute.`

\+ Type `DesPartPartProvidersFilterInput` was added

Δ Object type `DesPartPartProvidersFilterInput` has description `Represents the filter for part providers.`

\+ Type `DesPartSearchAttributeFilterInput` was added

Δ Object type `DesPartSearchAttributeFilterInput` has description `Represents the filter for searching by attribute.`

\+ Type `DesPartSearchFilterInput` was added

Δ Object type `DesPartSearchFilterInput` has description `Represents the filter for searching parts.`

\+ Type `DesPartSearchUsagesFilterInput` was added

Δ Object type `DesPartSearchUsagesFilterInput` has description `Represents the filter for searching by usages.`

\+ Type `DesPartSortInput` was added

Δ Object type `DesPartSortInput` has description `Represents the input for sorting parts.`

Δ Object type `DesPartAttribute` has description `Represents a part attribute.`

Δ Object type `DesPartCategory` has description `Represents a part category.`

Δ Object type `DesPartCompany` has description `Represents a company.`

Δ Object type `DesPartCompanyOffer` has description `Represents a company offer.`

Δ Object type `DesPartDocument` has description `Represents a part document.`

Δ Object type `DesPartDocumentCollection` has description `Represents a collection of part documents.`

Δ Object type `DesPartPricePoint` has description `The price points of the offer, sorted by minimum order quantity.`

Δ Object type `DesPartProviderPart` has description `Represents a provider part.`

Δ Object type `DesPartSellerWithOffers` has description `Represents a seller with offers.`

Δ Object type `DesPartSpec` has description `Represents a part specification.`

Δ Object type `DesPartSupplyPart` has description `Represents a supply part.`

###### Fields

\+ Field `designators` was added to object type `DesPartBomUsage`

\+ Field `elementIds` was added to object type `DesPartBomUsage`

\+ Field `id` was added to object type `DesPartBomUsage`

\+ Field `linkedComponentsIds` was added to object type `DesPartBomUsage`

\+ Field `id` was added to object type `DesPartComponentUsage`

\+ Field `partChoiceIds` was added to object type `DesPartComponentUsage`

\+ Field `from` was added to object type `DesPartFacetRange`

\+ Field `to` was added to object type `DesPartFacetRange`

\+ Field `designators` was added to object type `DesPartProjectUsage`

\+ Field `elementIds` was added to object type `DesPartProjectUsage`

\+ Field `id` was added to object type `DesPartProjectUsage`

\+ Field `linkedComponentsIds` was added to object type `DesPartProjectUsage`

\+ Field `variantId` was added to object type `DesPartProjectUsage`

\+ Field `attributeId` was added to object type `DesPartSearchAttributeFacet`

\+ Field `range` was added to object type `DesPartSearchAttributeFacet`

\+ Field `values` was added to object type `DesPartSearchAttributeFacet`

\+ Field `edges` was added to object type `DesPartSearchConnection`

\+ Field `nodes` was added to object type `DesPartSearchConnection`

\+ Field `pageInfo` was added to object type `DesPartSearchConnection`

\+ Field `searchFacets` was added to object type `DesPartSearchConnection`

\+ Field `totalCount` was added to object type `DesPartSearchConnection`

\+ Field `cursor` was added to object type `DesPartSearchEdge`

\+ Field `node` was added to object type `DesPartSearchEdge`

\+ Field `attributeFacets` was added to object type `DesPartSearchFacets`

\+ Field `fixedFacets` was added to object type `DesPartSearchFacets`

\+ Field `count` was added to object type `DesPartSearchFacetValue`

\+ Field `value` was added to object type `DesPartSearchFacetValue`

\+ Field `categoryNames` was added to object type `DesPartSearchFixedFacets`

\+ Field `hasBomOrProjectUsages` was added to object type `DesPartSearchFixedFacets`

\+ Field `manufacturerNames` was added to object type `DesPartSearchFixedFacets`

\+ Field `name` was added to object type `DesPartSource`

\+ Field `partSourceGuid` was added to object type `DesPartSource`

\+ Field `assemblyVariants` was added to object type `DesPartUsages`

\+ Field `bomReleaseUsages` was added to object type `DesPartUsages`

\+ Field `componentUsages` was added to object type `DesPartUsages`

\+ Field `consolidatedBomReleasesUsages` was added to object type `DesPartUsages`

\+ Field `projectUsages` was added to object type `DesPartUsages`

\+ Field `wipBomUsages` was added to object type `DesPartUsages`

\+ Field `wipConsolidatedBomUsages` was added to object type `DesPartUsages`

\+ Field `id` was added to object type `DesPart`

\+ Field `usages` was added to object type `DesPart`

\+ Field `customPartSource` was added to object type `DesPartSellerWithOffers`

###### Input / Payload

\+ Input field `attributeId` of type `String!` was added to input object type `DesPartAttributeSortInput`

\+ Input field `direction` of type `SortEnumType!` was added to input object type `DesPartAttributeSortInput`

\+ Input field `hasAltiumPartProvider` of type `Boolean` was added to input object type `DesPartPartProvidersFilterInput`

\+ Input field `hasCustomPartProvider` of type `Boolean` was added to input object type `DesPartPartProvidersFilterInput`

\+ Input field `hasSiliconExpertPartProvider` of type `Boolean` was added to input object type `DesPartPartProvidersFilterInput`

\+ Input field `hasZ2DataPartProvider` of type `Boolean` was added to input object type `DesPartPartProvidersFilterInput`

\+ Input field `attributeId` of type `String!` was added to input object type `DesPartSearchAttributeFilterInput`

\+ Input field `values` of type `[String!]!` was added to input object type `DesPartSearchAttributeFilterInput`

\+ Input field `attributes` of type `[DesPartSearchAttributeFilterInput!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `categoryName` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `customPartSourceName` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `hasBomOrProjectsUsages` of type `Boolean` was added to input object type `DesPartSearchFilterInput`

\+ Input field `keyword` of type `String` was added to input object type `DesPartSearchFilterInput`

\+ Input field `manufacturerName` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `mpn` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `partProviders` of type `DesPartPartProvidersFilterInput` was added to input object type `DesPartSearchFilterInput`

\+ Input field `supplierName` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `supplierPartNumber` of type `[String!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `usages` of type `[DesPartSearchUsagesFilterInput!]` was added to input object type `DesPartSearchFilterInput`

\+ Input field `id` of type `ID!` was added to input object type `DesPartSearchUsagesFilterInput`

\+ Input field `variantId` of type `String` was added to input object type `DesPartSearchUsagesFilterInput`

\+ Input field `attribute` of type `DesPartAttributeSortInput` was added to input object type `DesPartSortInput`

\+ Input field `categoryName` of type `SortEnumType` was added to input object type `DesPartSortInput`

\+ Input field `manufacturerName` of type `SortEnumType` was added to input object type `DesPartSortInput`

\+ Input field `mpn` of type `SortEnumType` was added to input object type `DesPartSortInput`

##### Supply

###### 🔍 Query

\+ Field `supSolutionTemplateApplications` was added to object type `Query`

\+ Argument `limit: Int!` (with default value) added to `Query.supSolutionTemplateApplications`

\+ Argument `start: Int!` (with default value) added to `Query.supSolutionTemplateApplications`

###### Input / Payload

\+ Input field `hasAIModels` of type `Boolean` was added to input object type `SupSolutionTemplateFilterInput`

### 04-Dec-2025

#### 🔴 Breaking Changes (18)

##### Design

###### Types

Δ `DesUserGroup` object type no longer implements `Node` interface

###### Fields

− Field `id` was removed from object type `DesCreateUserGroupPayload`

− Field `id` was removed from object type `DesUserGroup`

###### Input / Payload

− Input field `id` was removed from input object type `DesAddUsersToGroupInput`

\+ Input field `groupId` of type `String!` was added to input object type `DesAddUsersToGroupInput`

\+ Input field `workspaceUrl` of type `String!` was added to input object type `DesAddUsersToGroupInput`

− Input field `id` was removed from input object type `DesDeleteUserGroupInput`

\+ Input field `groupId` of type `String!` was added to input object type `DesDeleteUserGroupInput`

\+ Input field `workspaceUrl` of type `String!` was added to input object type `DesDeleteUserGroupInput`

Δ Input field `DesLifeCycleStateTransitionControllerInput.groupId` changed type from `ID` to `String`

− Input field `id` was removed from input object type `DesRemoveUsersFromGroupInput`

\+ Input field `groupId` of type `String!` was added to input object type `DesRemoveUsersFromGroupInput`

\+ Input field `workspaceUrl` of type `String!` was added to input object type `DesRemoveUsersFromGroupInput`

Δ Input field `DesUpdateFolderPermissionInput.groupId` changed type from `ID` to `String`

Δ Input field `DesUpdateProjectPermissionInput.groupId` changed type from `ID` to `String`

− Input field `id` was removed from input object type `DesUpdateUserGroupInput`

\+ Input field `groupId` of type `String!` was added to input object type `DesUpdateUserGroupInput`

\+ Input field `workspaceUrl` of type `String!` was added to input object type `DesUpdateUserGroupInput`

#### ✅ Non-Breaking Changes (46)

##### Design

###### Fields

\+ Field `userGroupId` was added to object type `DesCreateUserGroupPayload`

\+ Field `userGroupId` was added to object type `DesUserGroup`

##### Platform

###### Types

\+ Type `GloOAuthClientFilterInput` was added

Δ Object type `GloOAuthClientFilterInput` has description `Represents an *OAuth 2.0 client*.`

\+ Type `GloOAuthClientSortInput` was added

Δ Object type `GloOAuthClientSortInput` has description `Represents an *OAuth 2.0 client*.`

###### Input / Payload

\+ Input field `and` of type `[GloOAuthClientFilterInput!]` was added to input object type `GloOAuthClientFilterInput`

\+ Input field `clientId` of type `StringOperationFilterInput` was added to input object type `GloOAuthClientFilterInput`

\+ Input field `or` of type `[GloOAuthClientFilterInput!]` was added to input object type `GloOAuthClientFilterInput`

\+ Input field `absoluteRefreshTokenLifetime` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `accessTokenLifetime` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `authorizationCodeLifetime` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `clientId` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `clientSecret` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `identityTokenLifetime` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `requireConsent` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `requirePkce` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `requireSecret` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `slidingRefreshTokenLifetime` of type `SortEnumType` was added to input object type `GloOAuthClientSortInput`

\+ Input field `oAuthClient` of type `GloOAuthClientFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `oAuthClient` of type `GloOAuthClientSortInput` was added to input object type `GloAppSortInput`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `dmExecuteDeviceExtractionFromConfiguration` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceExtractionFromConfigurationInput!` added to `Mutation.dmExecuteDeviceExtractionFromConfiguration`

###### Types

\+ Type `DmExecuteDeviceExtractionFromConfigurationPayload` was added

Δ Object type `DmExecuteDeviceExtractionFromConfigurationPayload` has description `**Experimental**`

\+ Type `DmStackContext` was added

Δ Object type `DmStackContext` has description `**Experimental** An FSP configuration context grouping stack elements for a context ID.`

\+ Type `DmStackElement` was added

Δ Object type `DmStackElement` has description `**Experimental** A single FSP stack element including its module and dependency relationships.`

\+ Type `DmStackModel` was added

Δ Object type `DmStackModel` has description `**Experimental** FSP stack containing one or more configuration contexts.`

\+ Type `DmExecuteDeviceExtractionFromConfigurationInput` was added

Δ Object type `DmExecuteDeviceExtractionFromConfigurationInput` has description `**Experimental**`

###### Fields

\+ Field `dmDeviceModelAsConfigured` was added to object type `DmExecuteDeviceExtractionFromConfigurationPayload`

\+ Field `contextId` was added to object type `DmStackContext`

\+ Field `stackElements` was added to object type `DmStackContext`

\+ Field `dependencies` was added to object type `DmStackElement`

\+ Field `module` was added to object type `DmStackElement`

\+ Field `moduleId` was added to object type `DmStackElement`

\+ Field `requires` was added to object type `DmStackElement`

\+ Field `contexts` was added to object type `DmStackModel`

\+ Field `softwareStack` was added to object type `DmDeviceModelAsConfigured`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DmExecuteDeviceExtractionFromConfigurationInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceExtractionFromConfigurationInput`

##### Supply

###### Types

Δ Object type `SupSolutionTemplateParameterBundle` has description 'The parameter bundle\`s list of values.\`

###### Input / Payload

\+ Input field `aiModelIds` of type `[String!]` was added to input object type `SupSolutionTemplateFilterInput`

### 02-Dec-2025

#### 🔴 Breaking Changes (2)

##### Platform

###### Types

− Type `DesProjectGuestPermission` was removed

###### Fields

− Field `id` was removed from object type `DesProjectGuest`

#### ✅ Non-Breaking Changes (15)

##### Design

###### Types

\+ Type `DesExternalUserPermission` was added

Δ `DesExternalUserPermission` object implements `DesPermission` interface

###### Fields

\+ Field `availableActions` was added to object type `DesExternalUserPermission`

\+ Field `trusteeId` was added to object type `DesExternalUserPermission`

\+ Field `trusteePermissions` was added to object type `DesExternalUserPermission`

\+ Field `user` was added to object type `DesExternalUserPermission`

##### Platform

###### 🔍 Query

\+ Field `gloUserById` was added to object type `Query`

\+ Argument `userId: ID!` added to `Query.gloUserById`

\+ Field `gloUsersByIds` was added to object type `Query`

\+ Argument `userIds: [ID!]!` added to `Query.gloUsersByIds`

##### Renesas (preview)

###### Fields

\+ Field `pinName` was added to object type `DmModePinConfig`

\+ Field `pinValue` was added to object type `DmModePinConfig`

\+ Field `channel` was added to object type `DmPeripheralInstance`

\+ Field `softwareDriverId` was added to object type `DmPeripheralInstance`

\+ Field `softwareDriverIds` was added to object type `DmPeripheralInstance`

### 01-Dec-2025

#### 🔴 Breaking Changes (3)

##### Design

###### 🔍 Query

− Field `desBomById` (deprecated) was removed from object type `Query`

###### Types

Δ `DesBom` object type no longer implements `Node` interface

###### Fields

− Field `id` (deprecated) was removed from object type `DesBom`

#### ⚠️ Dangerous Changes (1)

##### Supply

###### 🔍 Query

\+ Argument `filter: SupSolutionTemplateFilterInput` added to `Query.supSolutionTemplates`

#### ✅ Non-Breaking Changes (537)

##### Common

###### 🔍 Query

Δ Field `Query.kgNode` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.kgNode`

###### Types

− Deprecation reason was removed from enum value `KgRelationSemantic.DERIVES_FROM`

− Deprecation reason was removed from enum value `KgRelationSemantic.DERIVES_INTO`

− Deprecation reason was removed from enum value `KgRelationSemantic.HAS_INPUT`

− Deprecation reason was removed from enum value `KgRelationSemantic.HAS_OUTPUT`

− Deprecation reason was removed from enum value `KgRelationSemantic.HAS_PART`

− Deprecation reason was removed from enum value `KgRelationSemantic.INFORMED_BY`

− Deprecation reason was removed from enum value `KgRelationSemantic.INFORMS`

− Deprecation reason was removed from enum value `KgRelationSemantic.INPUT_OF`

− Deprecation reason was removed from enum value `KgRelationSemantic.OUTPUT_OF`

− Deprecation reason was removed from enum value `KgRelationSemantic.PART_OF`

###### Fields

Δ Field `KgAnchorNode.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgAnchorNode.id`

Δ Field `KgAnchorNode.relatedNodes` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgAnchorNode.relatedNodes`

Δ Field `KgAnchorNode.relations` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgAnchorNode.relations`

Δ Field `KgNodeQueries.usedBy` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgNodeQueries.usedBy`

Δ Field `KgNodeQueries.uses` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgNodeQueries.uses`

Δ Field `KgRelation.object` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgRelation.object`

Δ Field `KgRelation.semantic` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgRelation.semantic`

Δ Field `KgRelation.subject` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgRelation.subject`

Δ Field `KgRelationQueries.all` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgRelationQueries.all`

Δ Field `KgNode.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgNode.id`

Δ Field `KgNode.relatedNodes` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgNode.relatedNodes`

Δ Field `KgNode.relations` is no longer deprecated

Δ Directive `deprecated` was removed from field `KgNode.relations`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.DERIVES_FROM`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.DERIVES_INTO`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.HAS_INPUT`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.HAS_OUTPUT`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.HAS_PART`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.INFORMED_BY`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.INFORMS`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.INPUT_OF`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.OUTPUT_OF`

Δ Directive `deprecated` was removed from enum value `KgRelationSemantic.PART_OF`

##### Platform

###### ✏️ Mutation

\+ Field `gloAddAppClientSecret` was added to object type `Mutation`

\+ Argument `input: GloAddAppClientSecretInput!` added to `Mutation.gloAddAppClientSecret`

\+ Field `gloRemoveAppClientSecret` was added to object type `Mutation`

\+ Argument `input: GloRemoveAppClientSecretInput!` added to `Mutation.gloRemoveAppClientSecret`

\+ Field `gloRestoreApp` was added to object type `Mutation`

\+ Argument `input: GloRestoreAppInput!` added to `Mutation.gloRestoreApp`

###### Types

\+ Type `GloAddAppClientSecretPayload` was added

\+ Type `GloAppClientSecretNotAddedError` was added

Δ `GloAppClientSecretNotAddedError` object implements `Error` interface

Δ Object type `GloAppClientSecretNotAddedError` has description ``Error that occurs when attempting to add a client secret to a `GloApp` *OAuth client* but the secret could not be added.``

\+ Type `GloAppClientSecretNotRemovedError` was added

Δ `GloAppClientSecretNotRemovedError` object implements `Error` interface

Δ Object type `GloAppClientSecretNotRemovedError` has description ``Error that occurs when the *OAuth client* secret was not removed as expected from a `GloApp`.``

\+ Type `GloAppOAuthClientNotRestoredError` was added

Δ `GloAppOAuthClientNotRestoredError` object implements `Error` interface

Δ Object type `GloAppOAuthClientNotRestoredError` has description `Error that occurs when an *OAuth client* cannot be restored.`

\+ Type `GloRemoveAppClientSecretPayload` was added

\+ Type `GloRestoreAppPayload` was added

\+ Type `GloAddAppClientSecretError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloAddAppClientSecretError`

\+ Member `GloAppMissingOAuthClientError` was added to Union type `GloAddAppClientSecretError`

\+ Member `GloAppDeletedError` was added to Union type `GloAddAppClientSecretError`

\+ Member `GloAppClientSecretNotAddedError` was added to Union type `GloAddAppClientSecretError`

\+ Type `GloRemoveAppClientSecretError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloRemoveAppClientSecretError`

\+ Member `GloAppDeletedError` was added to Union type `GloRemoveAppClientSecretError`

\+ Member `GloAppClientSecretNotRemovedError` was added to Union type `GloRemoveAppClientSecretError`

\+ Type `GloRestoreAppError` was added

\+ Member `GloAppOAuthClientNotRestoredError` was added to Union type `GloRestoreAppError`

\+ Member `GloAppMissingOAuthClientError` was added to Union type `GloRestoreAppError`

\+ Member `GloAppNotFoundError` was added to Union type `GloRestoreAppError`

\+ Member `GloAppNotDeletedError` was added to Union type `GloRestoreAppError`

\+ Type `GloAddAppClientSecretInput` was added

\+ Type `GloRemoveAppClientSecretInput` was added

\+ Type `GloRestoreAppInput` was added

###### Fields

\+ Field `errors` was added to object type `GloAddAppClientSecretPayload`

\+ Field `gloApp` was added to object type `GloAddAppClientSecretPayload`

\+ Field `message` was added to object type `GloAppClientSecretNotAddedError`

\+ Field `message` was added to object type `GloAppClientSecretNotRemovedError`

\+ Field `message` was added to object type `GloAppOAuthClientNotRestoredError`

\+ Field `errors` was added to object type `GloRemoveAppClientSecretPayload`

\+ Field `gloApp` was added to object type `GloRemoveAppClientSecretPayload`

\+ Field `errors` was added to object type `GloRestoreAppPayload`

\+ Field `gloApp` was added to object type `GloRestoreAppPayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `GloAddAppClientSecretInput`

\+ Input field `clientSecret` of type `String!` was added to input object type `GloRemoveAppClientSecretInput`

\+ Input field `id` of type `ID!` was added to input object type `GloRemoveAppClientSecretInput`

\+ Input field `id` of type `ID!` was added to input object type `GloRestoreAppInput`

##### Renesas (preview)

###### 🔍 Query

Δ Field `Query.dmConfiguredDeviceModel` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmConfiguredDeviceModel`

Δ Field `Query.dmConfiguredDeviceModelAllDevices` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmConfiguredDeviceModelAllDevices`

Δ Field `Query.dmFamilyPartModel` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmFamilyPartModel`

Δ Field `Query.dmFullStackDeviceModel` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmFullStackDeviceModel`

Δ Field `Query.dmFullStackDeviceModelAllDevices` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmFullStackDeviceModelAllDevices`

Δ Field `Query.dmFullStackDeviceModelReport` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmFullStackDeviceModelReport`

Δ Field `Query.dmFullStackDeviceModelReportAllDevices` is no longer deprecated

Δ Directive `deprecated` was removed from field `Query.dmFullStackDeviceModelReportAllDevices`

###### ✏️ Mutation

Δ Field `Mutation.dmExecuteDeviceEvaluation` is no longer deprecated

Δ Directive `deprecated` was removed from field `Mutation.dmExecuteDeviceEvaluation`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromConfiguration` is no longer deprecated

Δ Directive `deprecated` was removed from field `Mutation.dmExecuteDeviceEvaluationFromConfiguration`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromESD` is no longer deprecated

Δ Directive `deprecated` was removed from field `Mutation.dmExecuteDeviceEvaluationFromESD`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromXml` is no longer deprecated

Δ Directive `deprecated` was removed from field `Mutation.dmExecuteDeviceEvaluationFromXml`

###### Fields

Δ Field `DmAddressBlock.dataSource` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.dataSource`

Δ Field `DmAddressBlock.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.description`

Δ Field `DmAddressBlock.memories` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.memories`

Δ Field `DmAddressBlock.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.name`

Δ Field `DmAddressBlock.peripheralInstance` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.peripheralInstance`

Δ Field `DmAddressBlock.registers` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.registers`

Δ Field `DmAddressBlock.size` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.size`

Δ Field `DmAddressBlock.sizeHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.sizeHex`

Δ Field `DmAddressBlock.startAddress` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.startAddress`

Δ Field `DmAddressBlock.startAddressHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.startAddressHex`

Δ Field `DmAddressBlock.type` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.type`

Δ Field `DmAddressBlock.upperAddress` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.upperAddress`

Δ Field `DmAddressBlock.upperAddressHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressBlock.upperAddressHex`

Δ Field `DmAddressMapModel.addressSegments` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressMapModel.addressSegments`

Δ Field `DmAddressSegment.blocks` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.blocks`

Δ Field `DmAddressSegment.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.description`

Δ Field `DmAddressSegment.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.name`

Δ Field `DmAddressSegment.nameAliases` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.nameAliases`

Δ Field `DmAddressSegment.peripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.peripherals`

Δ Field `DmAddressSegment.size` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.size`

Δ Field `DmAddressSegment.sizeHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.sizeHex`

Δ Field `DmAddressSegment.startAddress` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.startAddress`

Δ Field `DmAddressSegment.startAddressHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAddressSegment.startAddressHex`

Δ Field `DmAmFieldEnum.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmFieldEnum.description`

Δ Field `DmAmFieldEnum.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmFieldEnum.name`

Δ Field `DmAmFieldEnum.value` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmFieldEnum.value`

Δ Field `DmAmMemory.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmMemory.name`

Δ Field `DmAmMemory.sizeHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmMemory.sizeHex`

Δ Field `DmAmMemory.type` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmMemory.type`

Δ Field `DmAmRegister.access` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.access`

Δ Field `DmAmRegister.addressOffset` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.addressOffset`

Δ Field `DmAmRegister.addressOffsetHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.addressOffsetHex`

Δ Field `DmAmRegister.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.description`

Δ Field `DmAmRegister.fields` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.fields`

Δ Field `DmAmRegister.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.name`

Δ Field `DmAmRegister.resetMask` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.resetMask`

Δ Field `DmAmRegister.resetValue` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.resetValue`

Δ Field `DmAmRegister.size` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.size`

Δ Field `DmAmRegister.sizeHex` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegister.sizeHex`

Δ Field `DmAmRegisterField.access` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.access`

Δ Field `DmAmRegisterField.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.description`

Δ Field `DmAmRegisterField.enums` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.enums`

Δ Field `DmAmRegisterField.lsb` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.lsb`

Δ Field `DmAmRegisterField.msb` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.msb`

Δ Field `DmAmRegisterField.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmAmRegisterField.name`

Δ Field `DmConfigDependency.altRef` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.altRef`

Δ Field `DmConfigDependency.configRef` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.configRef`

Δ Field `DmConfigDependency.functionName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.functionName`

Δ Field `DmConfigDependency.gpioMode` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.gpioMode`

Δ Field `DmConfigDependency.peripheralInstanceName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.peripheralInstanceName`

Δ Field `DmConfigDependency.port` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.port`

Δ Field `DmConfigDependency.portMode` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigDependency.portMode`

Δ Field `DmConfigEnumValue.configDependencies` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigEnumValue.configDependencies`

Δ Field `DmConfigEnumValue.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigEnumValue.display`

Δ Field `DmConfigEnumValue.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigEnumValue.id`

Δ Field `DmConfigEnumValue.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmConfigEnumValue.name`

Δ Field `DmDependencyPinConfig.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDependencyPinConfig.display`

Δ Field `DmDependencyPinConfig.pinDependencyName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDependencyPinConfig.pinDependencyName`

Δ Field `DmDependencyPinConfig.pinDependencyValue` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDependencyPinConfig.pinDependencyValue`

Δ Field `DmDeviceModelAsConfigured.deviceInterfaces` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceModelAsConfigured.deviceInterfaces`

Δ Field `DmDeviceModelAsConfigured.deviceMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceModelAsConfigured.deviceMpn`

Δ Field `DmDeviceModelAsConfigured.devicePeripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceModelAsConfigured.devicePeripherals`

Δ Field `DmDeviceModelAsConfigured.devicePorts` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceModelAsConfigured.devicePorts`

Δ Field `DmDeviceModelAsConfigured.familyPart` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceModelAsConfigured.familyPart`

Δ Field `DmDeviceToPeripheralOptionsModel.deviceToPeripheralElements` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmDeviceToPeripheralOptionsModel.deviceToPeripheralElements`

Δ Field `DmExecuteDeviceEvaluationFromConfigurationPayload.dmResolverSummary` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmExecuteDeviceEvaluationFromConfigurationPayload.dmResolverSummary`

Δ Field `DmExecuteDeviceEvaluationFromESDPayload.dmResolverSummary` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmExecuteDeviceEvaluationFromESDPayload.dmResolverSummary`

Δ Field `DmExecuteDeviceEvaluationFromXmlPayload.dmResolverSummary` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmExecuteDeviceEvaluationFromXmlPayload.dmResolverSummary`

Δ Field `DmExecuteDeviceEvaluationPayload.dmResolverSummary` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmExecuteDeviceEvaluationPayload.dmResolverSummary`

Δ Field `DmFamilyPart.concrete` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.concrete`

Δ Field `DmFamilyPart.description` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.description`

Δ Field `DmFamilyPart.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.display`

Δ Field `DmFamilyPart.friendlyPartialMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.friendlyPartialMpn`

Δ Field `DmFamilyPart.level` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.level`

Δ Field `DmFamilyPart.manufacturer` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.manufacturer`

Δ Field `DmFamilyPart.partialMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.partialMpn`

Δ Field `DmFamilyPart.raPartDetails` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPart.raPartDetails`

Δ Field `DmFamilyPartModel.familyParts` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFamilyPartModel.familyParts`

Δ Field `DmFspModule.category` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspModule.category`

Δ Field `DmFspModule.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspModule.id`

Δ Field `DmFspModule.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspModule.name`

Δ Field `DmFspModule.provides` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspModule.provides`

Δ Field `DmFspModule.requires` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspModule.requires`

Δ Field `DmFspProvides.external` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspProvides.external`

Δ Field `DmFspProvides.instances` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspProvides.instances`

Δ Field `DmFspProvides.interface` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspProvides.interface`

Δ Field `DmFspProvides.interfaceBase` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspProvides.interfaceBase`

Δ Field `DmFspRequires.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFspRequires.id`

Δ Field `DmFullStackDeviceModel.deviceAddressMap` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.deviceAddressMap`

Δ Field `DmFullStackDeviceModel.deviceInterfaces` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.deviceInterfaces`

Δ Field `DmFullStackDeviceModel.deviceMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.deviceMpn`

Δ Field `DmFullStackDeviceModel.devicePeripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.devicePeripherals`

Δ Field `DmFullStackDeviceModel.devicePorts` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.devicePorts`

Δ Field `DmFullStackDeviceModel.deviceToPeripheralOptions` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.deviceToPeripheralOptions`

Δ Field `DmFullStackDeviceModel.familyPart` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.familyPart`

Δ Field `DmFullStackDeviceModel.softwareToDeviceOptions` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackDeviceModel.softwareToDeviceOptions`

Δ Field `DmFullStackModelReport.deviceMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackModelReport.deviceMpn`

Δ Field `DmFullStackModelReport.reports` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmFullStackModelReport.reports`

Δ Field `DmInstanceSelection.groupName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmInstanceSelection.groupName`

Δ Field `DmInstanceSelection.instanceName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmInstanceSelection.instanceName`

Δ Field `DmInstanceSelection.modeName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmInstanceSelection.modeName`

Δ Field `DmInstanceSelection.pins` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmInstanceSelection.pins`

Δ Field `DmModePinConfig.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmModePinConfig.display`

Δ Field `DmModePinConfig.pinFunction` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmModePinConfig.pinFunction`

Δ Field `DmModePinConfig.port` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmModePinConfig.port`

Δ Field `DmModePinConfig.portName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmModePinConfig.portName`

Δ Field `DmOpMode.connectionSetRefId` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.connectionSetRefId`

Δ Field `DmOpMode.dependencyPinConfigs` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.dependencyPinConfigs`

Δ Field `DmOpMode.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.display`

Δ Field `DmOpMode.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.id`

Δ Field `DmOpMode.idConfig` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.idConfig`

Δ Field `DmOpMode.modePinConfigs` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.modePinConfigs`

Δ Field `DmOpMode.pinSummary` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmOpMode.pinSummary`

Δ Field `DmPeripheral.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheral.id`

Δ Field `DmPeripheral.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheral.name`

Δ Field `DmPeripheral.peripheralInstances` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheral.peripheralInstances`

Δ Field `DmPeripheral.peripheralProperties` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheral.peripheralProperties`

Δ Field `DmPeripheralInstance.addressBlocks` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralInstance.addressBlocks`

Δ Field `DmPeripheralInstance.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralInstance.id`

Δ Field `DmPeripheralInstance.modes` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralInstance.modes`

Δ Field `DmPeripheralInstance.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralInstance.name`

Δ Field `DmPeripheralMode.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralMode.display`

Δ Field `DmPeripheralMode.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralMode.name`

Δ Field `DmPeripheralMode.opModes` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralMode.opModes`

Δ Field `DmPeripheralModel.peripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralModel.peripherals`

Δ Field `DmPeripheralPortCoverageItem.functionName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.functionName`

Δ Field `DmPeripheralPortCoverageItem.modeName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.modeName`

Δ Field `DmPeripheralPortCoverageItem.opModeId` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.opModeId`

Δ Field `DmPeripheralPortCoverageItem.peripheralInstanceName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.peripheralInstanceName`

Δ Field `DmPeripheralPortCoverageItem.peripheralName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.peripheralName`

Δ Field `DmPeripheralPortCoverageItem.portName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageItem.portName`

Δ Field `DmPeripheralPortCoverageReport.coveragePercent` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageReport.coveragePercent`

Δ Field `DmPeripheralPortCoverageReport.covered` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageReport.covered`

Δ Field `DmPeripheralPortCoverageReport.notCovered` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageReport.notCovered`

Δ Field `DmPeripheralPortCoverageReport.peripheralName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageReport.peripheralName`

Δ Field `DmPeripheralPortCoverageReport.total` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralPortCoverageReport.total`

Δ Field `DmPeripheralProperty.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPeripheralProperty.display`

Δ Field `DmPin.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPin.name`

Δ Field `DmPinAssignment.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPinAssignment.display`

Δ Field `DmPinAssignment.functionName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPinAssignment.functionName`

Δ Field `DmPinAssignment.portName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPinAssignment.portName`

Δ Field `DmPort.comment` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.comment`

Δ Field `DmPort.configurations` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.configurations`

Δ Field `DmPort.connections` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.connections`

Δ Field `DmPort.functions` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.functions`

Δ Field `DmPort.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.id`

Δ Field `DmPort.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.name`

Δ Field `DmPort.pin` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.pin`

Δ Field `DmPort.symbolicName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPort.symbolicName`

Δ Field `DmPortConfiguration.enumValues` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortConfiguration.enumValues`

Δ Field `DmPortConfiguration.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortConfiguration.id`

Δ Field `DmPortConfiguration.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortConfiguration.name`

Δ Field `DmPortConnection.id` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortConnection.id`

Δ Field `DmPortConnection.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortConnection.name`

Δ Field `DmPortFunction.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortFunction.name`

Δ Field `DmPortFunction.peripheralInstanceName` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortFunction.peripheralInstanceName`

Δ Field `DmPortModel.ports` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmPortModel.ports`

Δ Field `DmRaPartNumberModel.application` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.application`

Δ Field `DmRaPartNumberModel.device` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.device`

Δ Field `DmRaPartNumberModel.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.display`

Δ Field `DmRaPartNumberModel.family` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.family`

Δ Field `DmRaPartNumberModel.featureSet` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.featureSet`

Δ Field `DmRaPartNumberModel.flashMemorySizeKB` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.flashMemorySizeKB`

Δ Field `DmRaPartNumberModel.groupNumber` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.groupNumber`

Δ Field `DmRaPartNumberModel.package` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.package`

Δ Field `DmRaPartNumberModel.packing` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.packing`

Δ Field `DmRaPartNumberModel.partNumber` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.partNumber`

Δ Field `DmRaPartNumberModel.performance` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.performance`

Δ Field `DmRaPartNumberModel.pinCount` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.pinCount`

Δ Field `DmRaPartNumberModel.pitchMm` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.pitchMm`

Δ Field `DmRaPartNumberModel.qualityGrade` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.qualityGrade`

Δ Field `DmRaPartNumberModel.romCode` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.romCode`

Δ Field `DmRaPartNumberModel.temperatureRange` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.temperatureRange`

Δ Field `DmRaPartNumberModel.xMm` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.xMm`

Δ Field `DmRaPartNumberModel.yMm` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRaPartNumberModel.yMm`

Δ Field `DmRequestedPeripheral.count` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequestedPeripheral.count`

Δ Field `DmRequestedPeripheral.name` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequestedPeripheral.name`

Δ Field `DmRequiresProvidesMapping.provides` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequiresProvidesMapping.provides`

Δ Field `DmRequiresProvidesMapping.requires` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequiresProvidesMapping.requires`

Δ Field `DmRequiresProvidesResolution.requiresModule` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequiresProvidesResolution.requiresModule`

Δ Field `DmRequiresProvidesResolution.requiresToProvidesMapping` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmRequiresProvidesResolution.requiresToProvidesMapping`

Δ Field `DmResolverResult.completedAt` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.completedAt`

Δ Field `DmResolverResult.completedOpModeGroups` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.completedOpModeGroups`

Δ Field `DmResolverResult.configuredModel` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.configuredModel`

Δ Field `DmResolverResult.deviceFamily` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.deviceFamily`

Δ Field `DmResolverResult.deviceMpn` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.deviceMpn`

Δ Field `DmResolverResult.durationSeconds` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.durationSeconds`

Δ Field `DmResolverResult.errors` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.errors`

Δ Field `DmResolverResult.isFeasible` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.isFeasible`

Δ Field `DmResolverResult.isOptimal` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.isOptimal`

Δ Field `DmResolverResult.logs` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.logs`

Δ Field `DmResolverResult.objectiveValue` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.objectiveValue`

Δ Field `DmResolverResult.requestedPeripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.requestedPeripherals`

Δ Field `DmResolverResult.requestedTotalCount` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.requestedTotalCount`

Δ Field `DmResolverResult.selections` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.selections`

Δ Field `DmResolverResult.solverStatus` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.solverStatus`

Δ Field `DmResolverResult.startedAt` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.startedAt`

Δ Field `DmResolverResult.wallTimeSeconds` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.wallTimeSeconds`

Δ Field `DmResolverResult.warnings` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverResult.warnings`

Δ Field `DmResolverSummary.percentResolvedSuccess` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverSummary.percentResolvedSuccess`

Δ Field `DmResolverSummary.requiredPeripherals` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverSummary.requiredPeripherals`

Δ Field `DmResolverSummary.results` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmResolverSummary.results`

Δ Field `DmSoftwareToDeviceOptionsModel.softwareToDeviceElements` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmSoftwareToDeviceOptionsModel.softwareToDeviceElements`

Δ Field `DmTemperatureRange.display` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmTemperatureRange.display`

Δ Field `DmTemperatureRange.max` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmTemperatureRange.max`

Δ Field `DmTemperatureRange.min` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmTemperatureRange.min`

Δ Field `DmTemperatureRange.tempType` is no longer deprecated

Δ Directive `deprecated` was removed from field `DmTemperatureRange.tempType`

###### Input / Payload

Δ Directive `deprecated` was removed from input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationFromConfigurationInput`

Δ Directive `deprecated` was removed from input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationFromXmlInput`

Δ Directive `deprecated` was removed from input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationInput`

Δ Directive `deprecated` was removed from input field `optionalDeviceMpn` in input object `DmExecuteDeviceEvaluationInput`

##### Supply

###### Types

\+ Type `SupSolutionTemplateFilterInput` was added

Δ Object type `SupSolutionTemplateFilterInput` has description `Input for filtering solution templates by additional conditions.`

###### Input / Payload

\+ Input field `statuses` of type `[SupSolutionTemplateStatus!]` was added to input object type `SupSolutionTemplateFilterInput`

### 30-Nov-2025

#### 🔴 Breaking Changes (1)

##### Design

###### 🔍 Query

− Field `desProjectsByGrids` (deprecated) was removed from object type `Query`

### 28-Nov-2025

#### 🔴 Breaking Changes (1)

##### Supply

###### Input / Payload

\+ Input field `stableName` of type `String!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

#### ⚠️ Dangerous Changes (1)

##### Supply

###### Types

\+ Enum value `SUP_SOLUTION_TEMPLATE_STABLE_NAME_IS_EXISTED` was added to enum `SupSolutionTemplateErrorCode`

#### ✅ Non-Breaking Changes (139)

##### Insights

###### 🔍 Query

\+ Field `desWorkspaceInsNotificationSettings` was added to object type `Query`

\+ Field `desWorkspaceInsSettings` was added to object type `Query`

###### ✏️ Mutation

\+ Field `desWorkspaceInsUnsubscribeFromNotifications` was added to object type `Mutation`

\+ Argument `input: DesWorkspaceInsUnsubscribeFromNotificationsInput!` added to `Mutation.desWorkspaceInsUnsubscribeFromNotifications`

\+ Field `desWorkspaceInsUpdateNotificationSettings` was added to object type `Mutation`

\+ Argument `input: DesWorkspaceInsNotificationSettingsInput!` added to `Mutation.desWorkspaceInsUpdateNotificationSettings`

\+ Field `desWorkspaceInsUpdateSettings` was added to object type `Mutation`

\+ Argument `input: DesWorkspaceInsUserSettingsInput!` added to `Mutation.desWorkspaceInsUpdateSettings`

###### Types

\+ Type `DesWorkspaceInsNotificationRecipientSettings` was added

Δ Object type `DesWorkspaceInsNotificationRecipientSettings` has description `Recipients configuration applied to insight notifications.`

\+ Type `DesWorkspaceInsNotificationSettings` was added

Δ Object type `DesWorkspaceInsNotificationSettings` has description `Notification settings defined for the current user.`

\+ Type `DesWorkspaceInsProjectsSettings` was added

Δ Object type `DesWorkspaceInsProjectsSettings` has description `Project-level preferences affecting insight generation and visibility.`

\+ Type `DesWorkspaceInsRecipientGroup` was added

Δ Object type `DesWorkspaceInsRecipientGroup` has description `Group recipient for notifications.`

\+ Type `DesWorkspaceInsRecipientUser` was added

Δ Object type `DesWorkspaceInsRecipientUser` has description `User recipient for notifications.`

\+ Type `DesWorkspaceInsUpdateNotificationSettingsPayload` was added

Δ Object type `DesWorkspaceInsUpdateNotificationSettingsPayload` has description `Payload returned after updating notification settings.`

\+ Type `DesWorkspaceInsUserSettings` was added

Δ Object type `DesWorkspaceInsUserSettings` has description `User settings related to insights.`

\+ Type `DesWorkspaceInsUserSettingsPayload` was added

Δ Object type `DesWorkspaceInsUserSettingsPayload` has description `Payload returning user settings for insight notifications and filters.`

\+ Type `DesWorkspaceInsNotificationRecipientSettingsInput` was added

Δ Object type `DesWorkspaceInsNotificationRecipientSettingsInput` has description `Recipients configuration for insight notifications.`

\+ Type `DesWorkspaceInsNotificationSettingsInput` was added

Δ Object type `DesWorkspaceInsNotificationSettingsInput` has description `Notification settings that control delivery of insight updates.`

\+ Type `DesWorkspaceInsProjectSettingsInput` was added

Δ Object type `DesWorkspaceInsProjectSettingsInput` has description `User-level project filtering preferences for insights.`

\+ Type `DesWorkspaceInsRecipientGroupInput` was added

Δ Object type `DesWorkspaceInsRecipientGroupInput` has description `Group recipient reference for notifications.`

\+ Type `DesWorkspaceInsRecipientUserInput` was added

Δ Object type `DesWorkspaceInsRecipientUserInput` has description `User recipient reference for notifications.`

\+ Type `DesWorkspaceInsUnsubscribeFromNotificationsInput` was added

Δ Object type `DesWorkspaceInsUnsubscribeFromNotificationsInput` has description `Input for removing a user from insight notifications.`

\+ Type `DesWorkspaceInsUserSettingsInput` was added

Δ Object type `DesWorkspaceInsUserSettingsInput` has description `User-specific settings that control insight experience.`

Δ Object type `DesWorkspaceInsInitializeInsightsIfRequiredPayload` has description `Payload returned when initializing insights on first use.`

Δ Object type `DesWorkspaceInsInsight` has description `Insight aggregated from workspace signals and related resources.`

Δ Object type `DesWorkspaceInsInsightAssemblyVariantLink` has description `Link to an assembly variant associated with the insight.`

Δ Object type `DesWorkspaceInsInsightBomLink` has description `Link to a work-in-progress BOM associated with the insight.`

Δ Object type `DesWorkspaceInsInsightBomReleaseLink` has description `Link to a released BOM associated with the insight.`

Δ Object type `DesWorkspaceInsInsightComponentLink` has description `Link to a component associated with the insight.`

Δ Object type `DesWorkspaceInsInsightComponentRevisionLink` has description `Link to a component revision associated with the insight.`

Δ Object type `DesWorkspaceInsInsightConsolidatedBomLink` has description `Link to a consolidated BOM associated with the insight.`

Δ Object type `DesWorkspaceInsInsightConsolidatedBomReleaseLink` has description `Link to a consolidated BOM release associated with the insight.`

Δ Object type `DesWorkspaceInsInsightDataChangedAction` has description 'History entry capturing changes to an insight\`s data payloads.\`

Δ Object type `DesWorkspaceInsInsightEntityLinksChangedAction` has description `History entry capturing changes to linked entities.`

Δ Object type `DesWorkspaceInsInsightErrorPayload` has description `Standard error payload returned by insight mutations.`

Δ Object type `DesWorkspaceInsInsightHistoryTransaction` has description `A point-in-time collection of actions recorded for an insight.`

Δ Object type `DesWorkspaceInsInsightPartLink` has description `Link to a part associated with the insight.`

Δ Object type `DesWorkspaceInsInsightPartRequestLinkGql` has description `Link to a part request task associated with the insight.`

Δ Object type `DesWorkspaceInsInsightProjectLink` has description `Link to a project associated with the insight.`

Δ Object type `DesWorkspaceInsInsightSeverityChangedAction` has description `History entry representing a severity change on an insight.`

Δ Object type `DesWorkspaceInsInsightStatusChangedAction` has description `History entry representing a status change on an insight.`

Δ Object type `DesWorkspaceInsInsightTaskLinkGql` has description `Link to a task associated with the insight.`

Δ Object type `DesWorkspaceInsInsightTaskLinksChangedAction` has description `History entry capturing changes to linked tasks.`

Δ Object type `DesWorkspaceInsRelatedEntities` has description `Entities linked to an insight across the workspace.`

Δ Object type `DesWorkspaceInsRelatedTasks` has description `Tasks and task-like items related to an insight.`

Δ Object type `DesWorkspaceInsUpdateInsightByIdPayload` has description `Payload produced after updating an insight by identifier.`

Δ Object type `DesWorkspaceInsUpsertInsightByKeyPayload` has description `Payload produced when upserting an insight using a deduplication key.`

Δ Object type `DesWorkspaceInsUserActionTimestamp` has description `Timestamp information including the user responsible for an action.`

Δ Object type `DesWorkspaceInsInsightHistoryAction` has description 'Union marker for actions recorded in an insight\`s history.\`

Δ Object type `DesWorkspaceInsInsightFilterInput` has description `Input for filtering insights based on various criteria.`

Δ Object type `DesWorkspaceInsInsightUserActionInput` has description `User action parameters applied to an insight update.`

Δ Object type `DesWorkspaceInsOrderingInput` has description `Sorting configuration for insight queries.`

Δ Object type `DesWorkspaceInsUpdateInsightByIdInput` has description `Input for updating an existing insight by its identifier.`

Δ Object type `DesWorkspaceInsUpsertInsightByKeyInput` has description `Input for creating or updating an insight identified by a deduplication key.`

Δ Object type `DesWorkspaceInsUpsertInsightInput` has description `Input payload for creating or updating an insight.`

###### Fields

\+ Field `groups` was added to object type `DesWorkspaceInsNotificationRecipientSettings`

\+ Field `sendToOwners` was added to object type `DesWorkspaceInsNotificationRecipientSettings`

\+ Field `users` was added to object type `DesWorkspaceInsNotificationRecipientSettings`

\+ Field `enabled` was added to object type `DesWorkspaceInsNotificationSettings`

\+ Field `recipientSettings` was added to object type `DesWorkspaceInsNotificationSettings`

\+ Field `unsubscribedUserIds` was added to object type `DesWorkspaceInsNotificationSettings`

\+ Field `excludedAssemblyVariants` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludedBomReleases` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludedConsolidatedBomReleases` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludedConsolidatedBoms` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludedProjects` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludedWipBoms` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `excludeNonActiveProjects` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `projectInactivityThresholdDays` was added to object type `DesWorkspaceInsProjectsSettings`

\+ Field `id` was added to object type `DesWorkspaceInsRecipientGroup`

\+ Field `id` was added to object type `DesWorkspaceInsRecipientUser`

\+ Field `errors` was added to object type `DesWorkspaceInsUpdateNotificationSettingsPayload`

\+ Field `settings` was added to object type `DesWorkspaceInsUpdateNotificationSettingsPayload`

\+ Field `projectsSettings` was added to object type `DesWorkspaceInsUserSettings`

\+ Field `errors` was added to object type `DesWorkspaceInsUserSettingsPayload`

\+ Field `userSettings` was added to object type `DesWorkspaceInsUserSettingsPayload`

###### Input / Payload

\+ Input field `groups` of type `[DesWorkspaceInsRecipientGroupInput!]!` was added to input object type `DesWorkspaceInsNotificationRecipientSettingsInput`

\+ Input field `sendToOwners` of type `Boolean!` was added to input object type `DesWorkspaceInsNotificationRecipientSettingsInput`

\+ Input field `users` of type `[DesWorkspaceInsRecipientUserInput!]!` was added to input object type `DesWorkspaceInsNotificationRecipientSettingsInput`

\+ Input field `enabled` of type `Boolean!` was added to input object type `DesWorkspaceInsNotificationSettingsInput`

\+ Input field `recipientSettings` of type `DesWorkspaceInsNotificationRecipientSettingsInput` was added to input object type `DesWorkspaceInsNotificationSettingsInput`

\+ Input field `unsubscribedUserIds` of type `[ID!]` was added to input object type `DesWorkspaceInsNotificationSettingsInput`

\+ Input field `excludedEntities` of type `[ID!]!` was added to input object type `DesWorkspaceInsProjectSettingsInput`

\+ Input field `excludeNonActiveProjects` of type `Boolean!` was added to input object type `DesWorkspaceInsProjectSettingsInput`

\+ Input field `projectInactivityThresholdDays` of type `Int!` was added to input object type `DesWorkspaceInsProjectSettingsInput`

\+ Input field `id` of type `ID!` was added to input object type `DesWorkspaceInsRecipientGroupInput`

\+ Input field `id` of type `ID!` was added to input object type `DesWorkspaceInsRecipientUserInput`

\+ Input field `userId` of type `ID!` was added to input object type `DesWorkspaceInsUnsubscribeFromNotificationsInput`

\+ Input field `projectsSettings` of type `DesWorkspaceInsProjectSettingsInput` was added to input object type `DesWorkspaceInsUserSettingsInput`

##### Renesas (preview)

###### Types

\+ Type `DmDependencyPinConfig` was added

Δ Object type `DmDependencyPinConfig` has description `**Experimental** Pin dependecy to port mapping entry within an operation mode.`

###### Fields

\+ Field `display` was added to object type `DmDependencyPinConfig`

Δ Field `DmDependencyPinConfig.display` is deprecated

Δ Directive `deprecated` was added to `DmDependencyPinConfig.display`

\+ Field `pinDependencyName` was added to object type `DmDependencyPinConfig`

Δ Field `DmDependencyPinConfig.pinDependencyName` is deprecated

Δ Directive `deprecated` was added to `DmDependencyPinConfig.pinDependencyName`

\+ Field `pinDependencyValue` was added to object type `DmDependencyPinConfig`

Δ Field `DmDependencyPinConfig.pinDependencyValue` is deprecated

Δ Directive `deprecated` was added to `DmDependencyPinConfig.pinDependencyValue`

\+ Field `deviceInterfaces` was added to object type `DmDeviceModelAsConfigured`

Δ Field `DmDeviceModelAsConfigured.deviceInterfaces` is deprecated

Δ Directive `deprecated` was added to `DmDeviceModelAsConfigured.deviceInterfaces`

\+ Field `dependencyPinConfigs` was added to object type `DmOpMode`

Δ Field `DmOpMode.dependencyPinConfigs` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.dependencyPinConfigs`

\+ Field `idConfig` was added to object type `DmOpMode`

Δ Field `DmOpMode.idConfig` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.idConfig`

##### Supply

###### 🔍 Query

\+ Field `supSolutionTemplateByName` was added to object type `Query`

\+ Argument `name: String!` added to `Query.supSolutionTemplateByName`

###### Types

\+ Type `SupSolutionTemplateStatus` was added

\+ Enum value `ACTIVE` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `DRAFT` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `INACTIVE` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `ON_HOLD` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `REJECTED` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `REVIEWING` was added to enum `SupSolutionTemplateStatus`

\+ Enum value `SUBMITTED` was added to enum `SupSolutionTemplateStatus`

###### Fields

\+ Field `stableName` was added to object type `SupSolutionTemplate`

\+ Field `status` was added to object type `SupSolutionTemplate`

###### Input / Payload

\+ Input field `stableName` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `status` of type `SupSolutionTemplateStatus` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

Δ Input field `SupSolutionTemplateUpdateSolutionTemplateInput.title` changed type from `String!` to `String`

### 27-Nov-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

\+ Enum value `AI_MODEL` was added to enum `DesContentTypeKind`

#### ✅ Non-Breaking Changes (14)

##### Platform

###### Fields

Δ Field `SolSolution.hardwareProjects` changed type from `[DesProject]!` to `[DesProject!]!`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `dmExecuteDeviceEvaluationFromESD` was added to object type `Mutation`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromESD` is deprecated

\+ Argument `input: DmExecuteDeviceEvaluationFromESDInput!` added to `Mutation.dmExecuteDeviceEvaluationFromESD`

Δ Directive `deprecated` was added to `Mutation.dmExecuteDeviceEvaluationFromESD`

###### Types

\+ Type `DmExecuteDeviceEvaluationFromESDPayload` was added

Δ Object type `DmExecuteDeviceEvaluationFromESDPayload` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationFromESDInput` was added

Δ Object type `DmExecuteDeviceEvaluationFromESDInput` has description `**Experimental**`

###### Fields

\+ Field `dmResolverSummary` was added to object type `DmExecuteDeviceEvaluationFromESDPayload`

Δ Field `DmExecuteDeviceEvaluationFromESDPayload.dmResolverSummary` is deprecated

Δ Directive `deprecated` was added to `DmExecuteDeviceEvaluationFromESDPayload.dmResolverSummary`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromESDInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromESDInput`

### 26-Nov-2025

#### ✅ Non-Breaking Changes (15)

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingByConfiguration` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingByConfigurationInput!` added to `Mutation.solBldScaffoldingByConfiguration`

###### Types

\+ Type `SolBldScaffoldingByConfigurationPayload` was added

\+ Type `SolBldScaffoldingByConfigurationInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingByConfigurationPayload`

\+ Field `absoluteRefreshTokenLifetime` was added to object type `GloOAuthClient`

\+ Field `accessTokenLifetime` was added to object type `GloOAuthClient`

\+ Field `authorizationCodeLifetime` was added to object type `GloOAuthClient`

\+ Field `identityTokenLifetime` was added to object type `GloOAuthClient`

\+ Field `slidingRefreshTokenLifetime` was added to object type `GloOAuthClient`

\+ Field `flowType` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `configurationFileId` of type `String!` was added to input object type `SolBldScaffoldingByConfigurationInput`

\+ Input field `name` of type `String!` was added to input object type `SolBldScaffoldingByConfigurationInput`

\+ Input field `flowType` of type `String` was added to input object type `SolCreateSolutionInput`

\+ Input field `flowType` of type `String` was added to input object type `SolUpdateSolutionInput`

### 25-Nov-2025

#### 🔴 Breaking Changes (3)

##### Renesas (preview)

###### Fields

− Field `display` was removed from object type `DmPortConfiguration`

− Field `display` was removed from object type `DmPortConnection`

− Field `display` was removed from object type `DmPortFunction`

#### ✅ Non-Breaking Changes (590)

##### Common

###### 🔍 Query

Δ Field `Query.kgNode` is deprecated

Δ Directive `deprecated` was added to `Query.kgNode`

###### Types

\+ Type `Upload` was added

Δ Object type `Upload` has description ``The `Upload` scalar type represents a file upload.``

Δ Object type `KgAnchorNode` has description `**Experimental**`

Δ Object type `KgNodeQueries` has description `**Experimental**`

Δ Object type `KgRelation` has description `**Experimental**`

Δ Object type `KgRelationQueries` has description `**Experimental**`

Δ Object type `KgNode` has description `**Experimental**`

Δ Enum value `KgRelationSemantic.DERIVES_FROM` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.DERIVES_INTO` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.HAS_INPUT` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.HAS_OUTPUT` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.HAS_PART` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.INFORMED_BY` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.INFORMS` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.INPUT_OF` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.OUTPUT_OF` was deprecated with reason `Experimental`

Δ Enum value `KgRelationSemantic.PART_OF` was deprecated with reason `Experimental`

###### Fields

Δ Field `KgAnchorNode.id` is deprecated

Δ Directive `deprecated` was added to `KgAnchorNode.id`

Δ Field `KgAnchorNode.relatedNodes` is deprecated

Δ Directive `deprecated` was added to `KgAnchorNode.relatedNodes`

Δ Field `KgAnchorNode.relations` is deprecated

Δ Directive `deprecated` was added to `KgAnchorNode.relations`

Δ Field `KgNodeQueries.usedBy` is deprecated

Δ Directive `deprecated` was added to `KgNodeQueries.usedBy`

Δ Field `KgNodeQueries.uses` is deprecated

Δ Directive `deprecated` was added to `KgNodeQueries.uses`

Δ Field `KgRelation.object` is deprecated

Δ Directive `deprecated` was added to `KgRelation.object`

Δ Field `KgRelation.semantic` is deprecated

Δ Directive `deprecated` was added to `KgRelation.semantic`

Δ Field `KgRelation.subject` is deprecated

Δ Directive `deprecated` was added to `KgRelation.subject`

Δ Field `KgRelationQueries.all` is deprecated

Δ Directive `deprecated` was added to `KgRelationQueries.all`

Δ Field `KgNode.id` is deprecated

Δ Directive `deprecated` was added to `KgNode.id`

Δ Field `KgNode.relatedNodes` is deprecated

Δ Directive `deprecated` was added to `KgNode.relatedNodes`

Δ Field `KgNode.relations` is deprecated

Δ Directive `deprecated` was added to `KgNode.relations`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.DERIVES_FROM`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.DERIVES_INTO`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.HAS_INPUT`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.HAS_OUTPUT`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.HAS_PART`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.INFORMED_BY`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.INFORMS`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.INPUT_OF`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.OUTPUT_OF`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.PART_OF`

##### Renesas (preview)

###### 🔍 Query

Δ Field `Query.dmConfiguredDeviceModel` is deprecated

Δ Directive `deprecated` was added to `Query.dmConfiguredDeviceModel`

Δ Field `Query.dmConfiguredDeviceModelAllDevices` is deprecated

Δ Directive `deprecated` was added to `Query.dmConfiguredDeviceModelAllDevices`

Δ Field `Query.dmFamilyPartModel` is deprecated

Δ Directive `deprecated` was added to `Query.dmFamilyPartModel`

Δ Field `Query.dmFullStackDeviceModel` is deprecated

Δ Directive `deprecated` was added to `Query.dmFullStackDeviceModel`

Δ Field `Query.dmFullStackDeviceModelAllDevices` is deprecated

Δ Directive `deprecated` was added to `Query.dmFullStackDeviceModelAllDevices`

Δ Field `Query.dmFullStackDeviceModelReport` is deprecated

Δ Directive `deprecated` was added to `Query.dmFullStackDeviceModelReport`

Δ Field `Query.dmFullStackDeviceModelReportAllDevices` is deprecated

Δ Directive `deprecated` was added to `Query.dmFullStackDeviceModelReportAllDevices`

###### ✏️ Mutation

\+ Field `dmExecuteDeviceEvaluationFromConfiguration` was added to object type `Mutation`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromConfiguration` is deprecated

\+ Argument `input: DmExecuteDeviceEvaluationFromConfigurationInput!` added to `Mutation.dmExecuteDeviceEvaluationFromConfiguration`

Δ Directive `deprecated` was added to `Mutation.dmExecuteDeviceEvaluationFromConfiguration`

\+ Field `dmExecuteDeviceEvaluationFromXml` was added to object type `Mutation`

Δ Field `Mutation.dmExecuteDeviceEvaluationFromXml` is deprecated

\+ Argument `input: DmExecuteDeviceEvaluationFromXmlInput!` added to `Mutation.dmExecuteDeviceEvaluationFromXml`

Δ Directive `deprecated` was added to `Mutation.dmExecuteDeviceEvaluationFromXml`

Δ Field `Mutation.dmExecuteDeviceEvaluation` is deprecated

Δ Directive `deprecated` was added to `Mutation.dmExecuteDeviceEvaluation`

###### Types

\+ Type `DmAddressBlock` was added

Δ Object type `DmAddressBlock` has description `**Experimental** Address block with start, size, and optional registers and peripherals.`

\+ Type `DmAddressMapModel` was added

Δ Object type `DmAddressMapModel` has description `**Experimental** Address map for the device including memory and peripheral regions.`

\+ Type `DmAddressSegment` was added

Δ Object type `DmAddressSegment` has description `**Experimental** Address segment which can contain child blocks and has a total segment size.`

\+ Type `DmAmFieldEnum` was added

Δ Object type `DmAmFieldEnum` has description `**Experimental** Enumerated value for a register field.`

\+ Type `DmAmMemory` was added

Δ Object type `DmAmMemory` has description `**Experimental** Memory entry with name, size and type.`

\+ Type `DmAmRegister` was added

Δ Object type `DmAmRegister` has description `**Experimental** Register entry within an address block.`

\+ Type `DmAmRegisterField` was added

Δ Object type `DmAmRegisterField` has description `**Experimental** Bit field within a register.`

\+ Type `DmConfigDependency` was added

Δ Object type `DmConfigDependency` has description `**Experimental** Dependency describing how a configuration value maps to GPIO or alternate function usage.`

\+ Type `DmConfigEnumValue` was added

Δ Object type `DmConfigEnumValue` has description `**Experimental** Configuration enumeration value for a port setting.`

\+ Type `DmExecuteDeviceEvaluationFromConfigurationPayload` was added

Δ Object type `DmExecuteDeviceEvaluationFromConfigurationPayload` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationFromXmlPayload` was added

Δ Object type `DmExecuteDeviceEvaluationFromXmlPayload` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationFromConfigurationInput` was added

Δ Object type `DmExecuteDeviceEvaluationFromConfigurationInput` has description `**Experimental**`

\+ Type `DmExecuteDeviceEvaluationFromXmlInput` was added

Δ Object type `DmExecuteDeviceEvaluationFromXmlInput` has description `**Experimental**`

Δ Object type `DmExecuteDeviceEvaluationPayload` has description `**Experimental**`

Δ Object type `DmFullStackModelReport` has description `**Experimental**`

Δ Object type `DmPeripheralPortCoverageItem` has description `**Experimental**`

Δ Object type `DmPeripheralPortCoverageReport` has description `**Experimental**`

Δ Object type `DmPin` has description `**Experimental**`

Δ Object type `DmExecuteDeviceEvaluationInput` has description `**Experimental**`

Δ Object type `DmRequiredPeripheralPayloadInput` has description `**Experimental**`

###### Fields

\+ Field `dataSource` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.dataSource` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.dataSource`

\+ Field `description` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.description` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.description`

\+ Field `memories` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.memories` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.memories`

\+ Field `name` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.name` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.name`

\+ Field `peripheralInstance` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.peripheralInstance` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.peripheralInstance`

\+ Field `registers` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.registers` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.registers`

\+ Field `size` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.size` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.size`

\+ Field `sizeHex` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.sizeHex` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.sizeHex`

\+ Field `startAddress` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.startAddress` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.startAddress`

\+ Field `startAddressHex` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.startAddressHex` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.startAddressHex`

\+ Field `type` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.type` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.type`

\+ Field `upperAddress` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.upperAddress` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.upperAddress`

\+ Field `upperAddressHex` was added to object type `DmAddressBlock`

Δ Field `DmAddressBlock.upperAddressHex` is deprecated

Δ Directive `deprecated` was added to `DmAddressBlock.upperAddressHex`

\+ Field `addressSegments` was added to object type `DmAddressMapModel`

Δ Field `DmAddressMapModel.addressSegments` is deprecated

Δ Directive `deprecated` was added to `DmAddressMapModel.addressSegments`

\+ Field `blocks` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.blocks` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.blocks`

\+ Field `description` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.description` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.description`

\+ Field `name` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.name` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.name`

\+ Field `nameAliases` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.nameAliases` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.nameAliases`

\+ Field `peripherals` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.peripherals` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.peripherals`

\+ Field `size` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.size` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.size`

\+ Field `sizeHex` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.sizeHex` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.sizeHex`

\+ Field `startAddress` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.startAddress` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.startAddress`

\+ Field `startAddressHex` was added to object type `DmAddressSegment`

Δ Field `DmAddressSegment.startAddressHex` is deprecated

Δ Directive `deprecated` was added to `DmAddressSegment.startAddressHex`

\+ Field `description` was added to object type `DmAmFieldEnum`

Δ Field `DmAmFieldEnum.description` is deprecated

Δ Directive `deprecated` was added to `DmAmFieldEnum.description`

\+ Field `name` was added to object type `DmAmFieldEnum`

Δ Field `DmAmFieldEnum.name` is deprecated

Δ Directive `deprecated` was added to `DmAmFieldEnum.name`

\+ Field `value` was added to object type `DmAmFieldEnum`

Δ Field `DmAmFieldEnum.value` is deprecated

Δ Directive `deprecated` was added to `DmAmFieldEnum.value`

\+ Field `name` was added to object type `DmAmMemory`

Δ Field `DmAmMemory.name` is deprecated

Δ Directive `deprecated` was added to `DmAmMemory.name`

\+ Field `sizeHex` was added to object type `DmAmMemory`

Δ Field `DmAmMemory.sizeHex` is deprecated

Δ Directive `deprecated` was added to `DmAmMemory.sizeHex`

\+ Field `type` was added to object type `DmAmMemory`

Δ Field `DmAmMemory.type` is deprecated

Δ Directive `deprecated` was added to `DmAmMemory.type`

\+ Field `access` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.access` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.access`

\+ Field `addressOffset` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.addressOffset` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.addressOffset`

\+ Field `addressOffsetHex` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.addressOffsetHex` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.addressOffsetHex`

\+ Field `description` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.description` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.description`

\+ Field `fields` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.fields` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.fields`

\+ Field `name` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.name` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.name`

\+ Field `resetMask` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.resetMask` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.resetMask`

\+ Field `resetValue` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.resetValue` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.resetValue`

\+ Field `size` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.size` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.size`

\+ Field `sizeHex` was added to object type `DmAmRegister`

Δ Field `DmAmRegister.sizeHex` is deprecated

Δ Directive `deprecated` was added to `DmAmRegister.sizeHex`

\+ Field `access` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.access` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.access`

\+ Field `description` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.description` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.description`

\+ Field `enums` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.enums` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.enums`

\+ Field `lsb` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.lsb` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.lsb`

\+ Field `msb` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.msb` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.msb`

\+ Field `name` was added to object type `DmAmRegisterField`

Δ Field `DmAmRegisterField.name` is deprecated

Δ Directive `deprecated` was added to `DmAmRegisterField.name`

\+ Field `altRef` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.altRef` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.altRef`

\+ Field `configRef` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.configRef` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.configRef`

\+ Field `functionName` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.functionName` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.functionName`

\+ Field `gpioMode` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.gpioMode` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.gpioMode`

\+ Field `peripheralInstanceName` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.peripheralInstanceName` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.peripheralInstanceName`

\+ Field `port` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.port` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.port`

\+ Field `portMode` was added to object type `DmConfigDependency`

Δ Field `DmConfigDependency.portMode` is deprecated

Δ Directive `deprecated` was added to `DmConfigDependency.portMode`

\+ Field `configDependencies` was added to object type `DmConfigEnumValue`

Δ Field `DmConfigEnumValue.configDependencies` is deprecated

Δ Directive `deprecated` was added to `DmConfigEnumValue.configDependencies`

\+ Field `display` was added to object type `DmConfigEnumValue`

Δ Field `DmConfigEnumValue.display` is deprecated

Δ Directive `deprecated` was added to `DmConfigEnumValue.display`

\+ Field `id` was added to object type `DmConfigEnumValue`

Δ Field `DmConfigEnumValue.id` is deprecated

Δ Directive `deprecated` was added to `DmConfigEnumValue.id`

\+ Field `name` was added to object type `DmConfigEnumValue`

Δ Field `DmConfigEnumValue.name` is deprecated

Δ Directive `deprecated` was added to `DmConfigEnumValue.name`

\+ Field `dmResolverSummary` was added to object type `DmExecuteDeviceEvaluationFromConfigurationPayload`

Δ Field `DmExecuteDeviceEvaluationFromConfigurationPayload.dmResolverSummary` is deprecated

Δ Directive `deprecated` was added to `DmExecuteDeviceEvaluationFromConfigurationPayload.dmResolverSummary`

\+ Field `dmResolverSummary` was added to object type `DmExecuteDeviceEvaluationFromXmlPayload`

Δ Field `DmExecuteDeviceEvaluationFromXmlPayload.dmResolverSummary` is deprecated

Δ Directive `deprecated` was added to `DmExecuteDeviceEvaluationFromXmlPayload.dmResolverSummary`

Δ Field `DmDeviceModelAsConfigured.deviceMpn` is deprecated

Δ Directive `deprecated` was added to `DmDeviceModelAsConfigured.deviceMpn`

Δ Field `DmDeviceModelAsConfigured.devicePeripherals` is deprecated

Δ Directive `deprecated` was added to `DmDeviceModelAsConfigured.devicePeripherals`

Δ Field `DmDeviceModelAsConfigured.devicePorts` is deprecated

Δ Directive `deprecated` was added to `DmDeviceModelAsConfigured.devicePorts`

Δ Field `DmDeviceModelAsConfigured.familyPart` is deprecated

Δ Directive `deprecated` was added to `DmDeviceModelAsConfigured.familyPart`

Δ Field `DmDeviceToPeripheralOptionsModel.deviceToPeripheralElements` is deprecated

Δ Directive `deprecated` was added to `DmDeviceToPeripheralOptionsModel.deviceToPeripheralElements`

Δ Field `DmExecuteDeviceEvaluationPayload.dmResolverSummary` is deprecated

Δ Directive `deprecated` was added to `DmExecuteDeviceEvaluationPayload.dmResolverSummary`

Δ Field `DmFamilyPart.concrete` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.concrete`

Δ Field `DmFamilyPart.description` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.description`

Δ Field `DmFamilyPart.display` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.display`

Δ Field `DmFamilyPart.friendlyPartialMpn` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.friendlyPartialMpn`

Δ Field `DmFamilyPart.level` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.level`

Δ Field `DmFamilyPart.manufacturer` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.manufacturer`

Δ Field `DmFamilyPart.partialMpn` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.partialMpn`

Δ Field `DmFamilyPart.raPartDetails` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPart.raPartDetails`

Δ Field `DmFamilyPartModel.familyParts` is deprecated

Δ Directive `deprecated` was added to `DmFamilyPartModel.familyParts`

Δ Field `DmFspModule.category` is deprecated

Δ Directive `deprecated` was added to `DmFspModule.category`

Δ Field `DmFspModule.id` is deprecated

Δ Directive `deprecated` was added to `DmFspModule.id`

Δ Field `DmFspModule.name` is deprecated

Δ Directive `deprecated` was added to `DmFspModule.name`

Δ Field `DmFspModule.provides` is deprecated

Δ Directive `deprecated` was added to `DmFspModule.provides`

Δ Field `DmFspModule.requires` is deprecated

Δ Directive `deprecated` was added to `DmFspModule.requires`

Δ Field `DmFspProvides.external` is deprecated

Δ Directive `deprecated` was added to `DmFspProvides.external`

Δ Field `DmFspProvides.instances` is deprecated

Δ Directive `deprecated` was added to `DmFspProvides.instances`

Δ Field `DmFspProvides.interface` is deprecated

Δ Directive `deprecated` was added to `DmFspProvides.interface`

Δ Field `DmFspProvides.interfaceBase` is deprecated

Δ Directive `deprecated` was added to `DmFspProvides.interfaceBase`

Δ Field `DmFspRequires.id` is deprecated

Δ Directive `deprecated` was added to `DmFspRequires.id`

\+ Field `deviceAddressMap` was added to object type `DmFullStackDeviceModel`

Δ Field `DmFullStackDeviceModel.deviceAddressMap` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.deviceAddressMap`

Δ Field `DmFullStackDeviceModel.deviceInterfaces` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.deviceInterfaces`

Δ Field `DmFullStackDeviceModel.deviceMpn` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.deviceMpn`

Δ Field `DmFullStackDeviceModel.devicePeripherals` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.devicePeripherals`

Δ Field `DmFullStackDeviceModel.devicePorts` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.devicePorts`

Δ Field `DmFullStackDeviceModel.deviceToPeripheralOptions` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.deviceToPeripheralOptions`

Δ Field `DmFullStackDeviceModel.familyPart` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.familyPart`

Δ Field `DmFullStackDeviceModel.softwareToDeviceOptions` is deprecated

Δ Directive `deprecated` was added to `DmFullStackDeviceModel.softwareToDeviceOptions`

Δ Field `DmFullStackModelReport.deviceMpn` is deprecated

Δ Directive `deprecated` was added to `DmFullStackModelReport.deviceMpn`

Δ Field `DmFullStackModelReport.reports` is deprecated

Δ Directive `deprecated` was added to `DmFullStackModelReport.reports`

Δ Field `DmInstanceSelection.groupName` is deprecated

Δ Directive `deprecated` was added to `DmInstanceSelection.groupName`

Δ Field `DmInstanceSelection.instanceName` is deprecated

Δ Directive `deprecated` was added to `DmInstanceSelection.instanceName`

Δ Field `DmInstanceSelection.modeName` is deprecated

Δ Directive `deprecated` was added to `DmInstanceSelection.modeName`

Δ Field `DmInstanceSelection.pins` is deprecated

Δ Directive `deprecated` was added to `DmInstanceSelection.pins`

\+ Field `port` was added to object type `DmModePinConfig`

Δ Field `DmModePinConfig.port` is deprecated

Δ Directive `deprecated` was added to `DmModePinConfig.port`

Δ Field `DmModePinConfig.display` is deprecated

Δ Directive `deprecated` was added to `DmModePinConfig.display`

Δ Field `DmModePinConfig.pinFunction` is deprecated

Δ Directive `deprecated` was added to `DmModePinConfig.pinFunction`

Δ Field `DmModePinConfig.portName` is deprecated

Δ Directive `deprecated` was added to `DmModePinConfig.portName`

Δ Field `DmOpMode.connectionSetRefId` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.connectionSetRefId`

Δ Field `DmOpMode.display` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.display`

Δ Field `DmOpMode.id` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.id`

Δ Field `DmOpMode.modePinConfigs` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.modePinConfigs`

Δ Field `DmOpMode.pinSummary` is deprecated

Δ Directive `deprecated` was added to `DmOpMode.pinSummary`

Δ Field `DmPeripheral.id` is deprecated

Δ Directive `deprecated` was added to `DmPeripheral.id`

Δ Field `DmPeripheral.name` is deprecated

Δ Directive `deprecated` was added to `DmPeripheral.name`

Δ Field `DmPeripheral.peripheralInstances` is deprecated

Δ Directive `deprecated` was added to `DmPeripheral.peripheralInstances`

Δ Field `DmPeripheral.peripheralProperties` is deprecated

Δ Directive `deprecated` was added to `DmPeripheral.peripheralProperties`

\+ Field `addressBlocks` was added to object type `DmPeripheralInstance`

Δ Field `DmPeripheralInstance.addressBlocks` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralInstance.addressBlocks`

Δ Field `DmPeripheralInstance.id` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralInstance.id`

Δ Field `DmPeripheralInstance.modes` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralInstance.modes`

Δ Field `DmPeripheralInstance.name` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralInstance.name`

Δ Field `DmPeripheralMode.display` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralMode.display`

Δ Field `DmPeripheralMode.name` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralMode.name`

Δ Field `DmPeripheralMode.opModes` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralMode.opModes`

Δ Field `DmPeripheralModel.peripherals` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralModel.peripherals`

Δ Field `DmPeripheralPortCoverageItem.functionName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.functionName`

Δ Field `DmPeripheralPortCoverageItem.modeName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.modeName`

Δ Field `DmPeripheralPortCoverageItem.opModeId` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.opModeId`

Δ Field `DmPeripheralPortCoverageItem.peripheralInstanceName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.peripheralInstanceName`

Δ Field `DmPeripheralPortCoverageItem.peripheralName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.peripheralName`

Δ Field `DmPeripheralPortCoverageItem.portName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageItem.portName`

Δ Field `DmPeripheralPortCoverageReport.coveragePercent` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageReport.coveragePercent`

Δ Field `DmPeripheralPortCoverageReport.covered` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageReport.covered`

Δ Field `DmPeripheralPortCoverageReport.notCovered` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageReport.notCovered`

Δ Field `DmPeripheralPortCoverageReport.peripheralName` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageReport.peripheralName`

Δ Field `DmPeripheralPortCoverageReport.total` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralPortCoverageReport.total`

Δ Field `DmPeripheralProperty.display` is deprecated

Δ Directive `deprecated` was added to `DmPeripheralProperty.display`

Δ Field `DmPin.name` is deprecated

Δ Directive `deprecated` was added to `DmPin.name`

Δ Field `DmPinAssignment.display` is deprecated

Δ Directive `deprecated` was added to `DmPinAssignment.display`

Δ Field `DmPinAssignment.functionName` is deprecated

Δ Directive `deprecated` was added to `DmPinAssignment.functionName`

Δ Field `DmPinAssignment.portName` is deprecated

Δ Directive `deprecated` was added to `DmPinAssignment.portName`

Δ Field `DmPort.comment` is deprecated

Δ Directive `deprecated` was added to `DmPort.comment`

Δ Field `DmPort.configurations` is deprecated

Δ Directive `deprecated` was added to `DmPort.configurations`

Δ Field `DmPort.connections` is deprecated

Δ Directive `deprecated` was added to `DmPort.connections`

Δ Field `DmPort.functions` is deprecated

Δ Directive `deprecated` was added to `DmPort.functions`

Δ Field `DmPort.id` is deprecated

Δ Directive `deprecated` was added to `DmPort.id`

Δ Field `DmPort.name` is deprecated

Δ Directive `deprecated` was added to `DmPort.name`

Δ Field `DmPort.pin` is deprecated

Δ Directive `deprecated` was added to `DmPort.pin`

Δ Field `DmPort.symbolicName` is deprecated

Δ Directive `deprecated` was added to `DmPort.symbolicName`

\+ Field `enumValues` was added to object type `DmPortConfiguration`

Δ Field `DmPortConfiguration.enumValues` is deprecated

Δ Directive `deprecated` was added to `DmPortConfiguration.enumValues`

\+ Field `id` was added to object type `DmPortConfiguration`

Δ Field `DmPortConfiguration.id` is deprecated

Δ Directive `deprecated` was added to `DmPortConfiguration.id`

\+ Field `name` was added to object type `DmPortConfiguration`

Δ Field `DmPortConfiguration.name` is deprecated

Δ Directive `deprecated` was added to `DmPortConfiguration.name`

\+ Field `id` was added to object type `DmPortConnection`

Δ Field `DmPortConnection.id` is deprecated

Δ Directive `deprecated` was added to `DmPortConnection.id`

\+ Field `name` was added to object type `DmPortConnection`

Δ Field `DmPortConnection.name` is deprecated

Δ Directive `deprecated` was added to `DmPortConnection.name`

\+ Field `name` was added to object type `DmPortFunction`

Δ Field `DmPortFunction.name` is deprecated

Δ Directive `deprecated` was added to `DmPortFunction.name`

\+ Field `peripheralInstanceName` was added to object type `DmPortFunction`

Δ Field `DmPortFunction.peripheralInstanceName` is deprecated

Δ Directive `deprecated` was added to `DmPortFunction.peripheralInstanceName`

Δ Field `DmPortModel.ports` is deprecated

Δ Directive `deprecated` was added to `DmPortModel.ports`

Δ Field `DmRaPartNumberModel.application` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.application`

Δ Field `DmRaPartNumberModel.device` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.device`

Δ Field `DmRaPartNumberModel.display` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.display`

Δ Field `DmRaPartNumberModel.family` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.family`

Δ Field `DmRaPartNumberModel.featureSet` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.featureSet`

Δ Field `DmRaPartNumberModel.flashMemorySizeKB` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.flashMemorySizeKB`

Δ Field `DmRaPartNumberModel.groupNumber` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.groupNumber`

Δ Field `DmRaPartNumberModel.package` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.package`

Δ Field `DmRaPartNumberModel.packing` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.packing`

Δ Field `DmRaPartNumberModel.partNumber` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.partNumber`

Δ Field `DmRaPartNumberModel.performance` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.performance`

Δ Field `DmRaPartNumberModel.pinCount` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.pinCount`

Δ Field `DmRaPartNumberModel.pitchMm` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.pitchMm`

Δ Field `DmRaPartNumberModel.qualityGrade` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.qualityGrade`

Δ Field `DmRaPartNumberModel.romCode` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.romCode`

Δ Field `DmRaPartNumberModel.temperatureRange` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.temperatureRange`

Δ Field `DmRaPartNumberModel.xMm` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.xMm`

Δ Field `DmRaPartNumberModel.yMm` is deprecated

Δ Directive `deprecated` was added to `DmRaPartNumberModel.yMm`

Δ Field `DmRequestedPeripheral.count` is deprecated

Δ Directive `deprecated` was added to `DmRequestedPeripheral.count`

Δ Field `DmRequestedPeripheral.name` is deprecated

Δ Directive `deprecated` was added to `DmRequestedPeripheral.name`

Δ Field `DmRequiresProvidesMapping.provides` is deprecated

Δ Directive `deprecated` was added to `DmRequiresProvidesMapping.provides`

Δ Field `DmRequiresProvidesMapping.requires` is deprecated

Δ Directive `deprecated` was added to `DmRequiresProvidesMapping.requires`

Δ Field `DmRequiresProvidesResolution.requiresModule` is deprecated

Δ Directive `deprecated` was added to `DmRequiresProvidesResolution.requiresModule`

Δ Field `DmRequiresProvidesResolution.requiresToProvidesMapping` is deprecated

Δ Directive `deprecated` was added to `DmRequiresProvidesResolution.requiresToProvidesMapping`

Δ Field `DmResolverResult.completedAt` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.completedAt`

Δ Field `DmResolverResult.completedOpModeGroups` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.completedOpModeGroups`

Δ Field `DmResolverResult.configuredModel` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.configuredModel`

Δ Field `DmResolverResult.deviceFamily` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.deviceFamily`

Δ Field `DmResolverResult.deviceMpn` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.deviceMpn`

Δ Field `DmResolverResult.durationSeconds` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.durationSeconds`

Δ Field `DmResolverResult.errors` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.errors`

Δ Field `DmResolverResult.isFeasible` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.isFeasible`

Δ Field `DmResolverResult.isOptimal` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.isOptimal`

Δ Field `DmResolverResult.logs` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.logs`

Δ Field `DmResolverResult.objectiveValue` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.objectiveValue`

Δ Field `DmResolverResult.requestedPeripherals` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.requestedPeripherals`

Δ Field `DmResolverResult.requestedTotalCount` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.requestedTotalCount`

Δ Field `DmResolverResult.selections` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.selections`

Δ Field `DmResolverResult.solverStatus` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.solverStatus`

Δ Field `DmResolverResult.startedAt` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.startedAt`

Δ Field `DmResolverResult.wallTimeSeconds` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.wallTimeSeconds`

Δ Field `DmResolverResult.warnings` is deprecated

Δ Directive `deprecated` was added to `DmResolverResult.warnings`

\+ Field `requiredPeripherals` was added to object type `DmResolverSummary`

Δ Field `DmResolverSummary.requiredPeripherals` is deprecated

Δ Directive `deprecated` was added to `DmResolverSummary.requiredPeripherals`

Δ Field `DmResolverSummary.percentResolvedSuccess` is deprecated

Δ Directive `deprecated` was added to `DmResolverSummary.percentResolvedSuccess`

Δ Field `DmResolverSummary.results` is deprecated

Δ Directive `deprecated` was added to `DmResolverSummary.results`

Δ Field `DmSoftwareToDeviceOptionsModel.softwareToDeviceElements` is deprecated

Δ Directive `deprecated` was added to `DmSoftwareToDeviceOptionsModel.softwareToDeviceElements`

Δ Field `DmTemperatureRange.display` is deprecated

Δ Directive `deprecated` was added to `DmTemperatureRange.display`

Δ Field `DmTemperatureRange.max` is deprecated

Δ Directive `deprecated` was added to `DmTemperatureRange.max`

Δ Field `DmTemperatureRange.min` is deprecated

Δ Directive `deprecated` was added to `DmTemperatureRange.min`

Δ Field `DmTemperatureRange.tempType` is deprecated

Δ Directive `deprecated` was added to `DmTemperatureRange.tempType`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromConfigurationInput`

\+ Input field `onlyFeasible` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationFromConfigurationInput`

Δ Directive `deprecated` was added to input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationFromConfigurationInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromConfigurationInput`

\+ Input field `onlyFeasible` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationFromXmlInput`

Δ Directive `deprecated` was added to input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationFromXmlInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationFromXmlInput`

\+ Input field `xmlUpload` of type `Upload!` was added to input object type `DmExecuteDeviceEvaluationFromXmlInput`

\+ Input field `onlyFeasible` of type `Boolean` was added to input object type `DmExecuteDeviceEvaluationInput`

Δ Directive `deprecated` was added to input field `onlyFeasible` in input object `DmExecuteDeviceEvaluationInput`

Δ Directive `deprecated` was added to input field `optionalDeviceMpn` in input object `DmExecuteDeviceEvaluationInput`

### 24-Nov-2025

#### ✅ Non-Breaking Changes (3)

##### Design

###### Fields

\+ Field `isScaffolding` was added to object type `DesProject`

##### Platform

###### Fields

\+ Field `isScaffolding` was added to object type `SolSolution`

##### System Design

###### Fields

\+ Field `isScaffolding` was added to object type `SysEsdDocument`

### 21-Nov-2025

#### ✅ Non-Breaking Changes (23)

##### Design

###### 🔍 Query

\+ Field `desComparisonHealthcheck` was added to object type `Query`

Δ Field `Query.desComparisonHealthcheck` is deprecated

Δ Directive `deprecated` was added to `Query.desComparisonHealthcheck`

###### ✏️ Mutation

\+ Field `desCompareReleases` was added to object type `Mutation`

\+ Argument `input: DesComparisonRunInput!` added to `Mutation.desCompareReleases`

###### Types

\+ Type `DesComparisonRunPayload` was added

\+ Type `DesComparisonMode` was added

\+ Enum value `BOM` was added to enum `DesComparisonMode`

\+ Enum value `PCB` was added to enum `DesComparisonMode`

\+ Enum value `SCHEMATIC` was added to enum `DesComparisonMode`

\+ Type `DesComparisonRunInput` was added

###### Fields

\+ Field `comparisonUrl` was added to object type `DesComparisonRunPayload`

###### Input / Payload

\+ Input field `mode` of type `DesComparisonMode!` was added to input object type `DesComparisonRunInput`

\+ Input field `sourceReleaseId` of type `ID!` was added to input object type `DesComparisonRunInput`

\+ Input field `targetReleaseId` of type `ID!` was added to input object type `DesComparisonRunInput`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `sftSoftwareUpdateProjectConfiguration` was added to object type `Mutation`

\+ Argument `input: SftSoftwareUpdateProjectConfigrationInput!` added to `Mutation.sftSoftwareUpdateProjectConfiguration`

###### Types

\+ Type `SftSoftwareProjectUpdateConfigurationPayload` was added

\+ Type `SftSoftwareUpdateProjectConfigrationInput` was added

###### Fields

\+ Field `data` was added to object type `SftSoftwareProjectUpdateConfigurationPayload`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `SftSoftwareUpdateProjectConfigrationInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareUpdateProjectConfigrationInput`

\+ Input field `message` of type `String` was added to input object type `SftSoftwareUpdateProjectConfigrationInput`

### 20-Nov-2025

#### ✅ Non-Breaking Changes (76)

##### Design

###### 🔍 Query

\+ Field `desReleaseVariantByVariantName` was added to object type `Query`

\+ Argument `releaseId: ID!` added to `Query.desReleaseVariantByVariantName`

\+ Argument `variantName: String!` added to `Query.desReleaseVariantByVariantName`

Δ Field `Query.desReleaseVariantById` is deprecated

Δ Directive `deprecated` was added to `Query.desReleaseVariantById`

###### ✏️ Mutation

\+ Field `desUpdatePermissions` was added to object type `Mutation`

\+ Argument `input: DesUpdatePermissionsInput!` added to `Mutation.desUpdatePermissions`

###### Types

\+ Type `DesOrganizationPermission` was added

Δ `DesOrganizationPermission` object implements `DesPermission` interface

\+ Type `DesOwnerPermission` was added

Δ `DesOwnerPermission` object implements `DesPermission` interface

\+ Type `DesPermissionAvailableActions` was added

\+ Type `DesTrusteePermissions` was added

\+ Type `DesUpdatePermissionsPayload` was added

\+ Type `DesWorkspaceMembersPermission` was added

Δ `DesWorkspaceMembersPermission` object implements `DesPermission` interface

\+ Type `DesPermission` was added

\+ Type `DesPermissionUpsertInput` was added

\+ Type `DesUpdatePermissionsInput` was added

###### Fields

\+ Field `availableActions` was added to object type `DesOrganizationPermission`

\+ Field `organization` was added to object type `DesOrganizationPermission`

\+ Field `trusteeId` was added to object type `DesOrganizationPermission`

\+ Field `trusteePermissions` was added to object type `DesOrganizationPermission`

\+ Field `availableActions` was added to object type `DesOwnerPermission`

\+ Field `owner` was added to object type `DesOwnerPermission`

\+ Field `trusteeId` was added to object type `DesOwnerPermission`

\+ Field `trusteePermissions` was added to object type `DesOwnerPermission`

\+ Field `canBeRemoved` was added to object type `DesPermissionAvailableActions`

\+ Field `canBeSetToReadOnly` was added to object type `DesPermissionAvailableActions`

\+ Field `canEdit` was added to object type `DesTrusteePermissions`

\+ Field `isUpdated` was added to object type `DesUpdatePermissionsPayload`

\+ Field `availableActions` was added to object type `DesWorkspaceMembersPermission`

\+ Field `trusteeId` was added to object type `DesWorkspaceMembersPermission`

\+ Field `trusteePermissions` was added to object type `DesWorkspaceMembersPermission`

Δ Field `availableActions` was added to interface `DesPermission`

Δ Field `trusteeId` was added to interface `DesPermission`

Δ Field `trusteePermissions` was added to interface `DesPermission`

\+ Field `releaseId` was added to object type `DesReleaseVariant`

Δ Field `DesReleaseVariant.releaseId` is deprecated

Δ Directive `deprecated` was added to `DesReleaseVariant.releaseId`

Δ Field `DesReleaseVariant.id` is deprecated

Δ Directive `deprecated` was added to `DesReleaseVariant.id`

###### Input / Payload

\+ Input field `canEdit` of type `Boolean!` was added to input object type `DesPermissionUpsertInput`

\+ Input field `email` of type `String` was added to input object type `DesPermissionUpsertInput`

\+ Input field `trusteeId` of type `ID` was added to input object type `DesPermissionUpsertInput`

\+ Input field `entityId` of type `ID!` was added to input object type `DesUpdatePermissionsInput`

\+ Input field `permissionsToRemove` of type `[ID!]!` was added to input object type `DesUpdatePermissionsInput`

\+ Input field `permissionsToUpsert` of type `[DesPermissionUpsertInput!]!` was added to input object type `DesUpdatePermissionsInput`

\+ Input field `replaceExisiting` of type `Boolean!` was added to input object type `DesUpdatePermissionsInput`

##### Platform

###### Types

\+ Type `DesProjectGuestPermission` was added

Δ `DesProjectGuestPermission` object implements `DesPermission` interface

\+ Type `DesWorkspaceGroupPermission` was added

Δ `DesWorkspaceGroupPermission` object implements `DesPermission` interface

\+ Type `DesWorkspaceUserPermission` was added

Δ `DesWorkspaceUserPermission` object implements `DesPermission` interface

###### Fields

\+ Field `availableActions` was added to object type `DesProjectGuestPermission`

\+ Field `externalUser` was added to object type `DesProjectGuestPermission`

\+ Field `trusteeId` was added to object type `DesProjectGuestPermission`

\+ Field `trusteePermissions` was added to object type `DesProjectGuestPermission`

\+ Field `availableActions` was added to object type `DesWorkspaceGroupPermission`

\+ Field `group` was added to object type `DesWorkspaceGroupPermission`

\+ Field `trusteeId` was added to object type `DesWorkspaceGroupPermission`

\+ Field `trusteePermissions` was added to object type `DesWorkspaceGroupPermission`

\+ Field `availableActions` was added to object type `DesWorkspaceUserPermission`

\+ Field `trusteeId` was added to object type `DesWorkspaceUserPermission`

\+ Field `trusteePermissions` was added to object type `DesWorkspaceUserPermission`

\+ Field `user` was added to object type `DesWorkspaceUserPermission`

\+ Field `id` was added to object type `DesProjectGuest`

\+ Field `owner` was added to object type `SolSolution`

\+ Field `permissions` was added to object type `SolSolution`

##### Renesas (preview)

###### Fields

\+ Field `owner` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `permissions` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `owner` was added to object type `SftSimSimulation`

\+ Field `permissions` was added to object type `SftSimSimulation`

\+ Field `owner` was added to object type `SftSoftwareProject`

\+ Field `permissions` was added to object type `SftSoftwareProject`

### 19-Nov-2025

#### ✅ Non-Breaking Changes (12)

##### Platform

###### 🔍 Query

\+ Field `solBldEntityScaffoldingStatus` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.solBldEntityScaffoldingStatus`

###### Types

\+ Type `SolBldEntityScaffoldingStatusPayload` was added

###### Fields

\+ Field `isScaffolding` was added to object type `SolBldEntityScaffoldingStatusPayload`

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectFileInput` was added

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `SupSoftwareProjectFileInput`

\+ Input field `fileName` of type `String!` was added to input object type `SupSoftwareProjectFileInput`

\+ Input field `fileType` of type `String!` was added to input object type `SupSoftwareProjectFileInput`

\+ Input field `sourceFile` of type `SupSoftwareProjectFileInput` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

Δ Input field `SupSoftwareProjectEvalKitSourceInput.sourceUrl` changed type from `String!` to `String`

##### Supply

###### Input / Payload

\+ Input field `sourceFile` of type `SupEvalKitFileInput` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `sourceFile` of type `SupEvalKitFileInput` was added to input object type `SupEvalKitUpdateEvalKitInput`

### 18-Nov-2025

#### ✅ Non-Breaking Changes (13)

##### Common

###### Directives

Δ Location `QUERY` was added to directive `experimental`

Δ Location `MUTATION` was added to directive `experimental`

Δ Location `SUBSCRIPTION` was added to directive `experimental`

Δ Location `FIELD` was added to directive `experimental`

Δ Location `FRAGMENT_DEFINITION` was added to directive `experimental`

Δ Location `FRAGMENT_SPREAD` was added to directive `experimental`

Δ Location `INLINE_FRAGMENT` was added to directive `experimental`

Δ Location `VARIABLE_DEFINITION` was added to directive `experimental`

Δ Location `SCALAR` was added to directive `experimental`

Δ Location `ARGUMENT_DEFINITION` was added to directive `experimental`

Δ Location `UNION` was added to directive `experimental`

Δ Location `ENUM_VALUE` was added to directive `experimental`

Δ Location `INPUT_FIELD_DEFINITION` was added to directive `experimental`

### 17-Nov-2025

#### ⚠️ Dangerous Changes (12)

##### Renesas (preview)

###### Types

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectDeleteSoftwareProjectError`

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectUpdateSoftwareProjectError`

\+ Enum value `OPERATION_FAILED` was added to enum `SupSoftwareProjectErrorCode`

##### Supply

###### Types

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitDeleteEvalKitError`

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitUpdateEvalKitError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateCreateSolutionTemplateApplicationError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateDeleteSolutionTemplateApplicationError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateDeleteSolutionTemplateError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateApplicationError`

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateError`

\+ Enum value `OPERATION_FAILED` was added to enum `SupEvalKitErrorCode`

\+ Enum value `OPERATION_FAILED` was added to enum `SupSolutionTemplateErrorCode`

#### ✅ Non-Breaking Changes (25)

##### Renesas (preview)

###### Types

\+ Type `DmPin` was added

\+ Type `SupSoftwareProjectOperationFailedError` was added

Δ `SupSoftwareProjectOperationFailedError` object implements `Error` interface

\+ Type `SupSoftwareProjectCreateSoftwareProjectError` was added

\+ Member `SupSoftwareProjectOperationFailedError` was added to Union type `SupSoftwareProjectCreateSoftwareProjectError`

###### Fields

\+ Field `name` was added to object type `DmPin`

\+ Field `errorCode` was added to object type `SupSoftwareProjectOperationFailedError`

\+ Field `message` was added to object type `SupSoftwareProjectOperationFailedError`

\+ Field `pin` was added to object type `DmPort`

\+ Field `isScaffolding` was added to object type `SftSoftwareProject`

\+ Field `errors` was added to object type `SupSoftwareProjectCreateSoftwareProjectPayload`

##### Supply

###### Types

\+ Type `SupEvalKitOperationFailedError` was added

Δ `SupEvalKitOperationFailedError` object implements `Error` interface

\+ Type `SupSolutionTemplateOperationFailedError` was added

Δ `SupSolutionTemplateOperationFailedError` object implements `Error` interface

\+ Type `SupEvalKitCreateEvalKitError` was added

\+ Member `SupEvalKitOperationFailedError` was added to Union type `SupEvalKitCreateEvalKitError`

\+ Type `SupSolutionTemplateCreateSolutionTemplateError` was added

\+ Member `SupSolutionTemplateOperationFailedError` was added to Union type `SupSolutionTemplateCreateSolutionTemplateError`

###### Fields

\+ Field `errorCode` was added to object type `SupEvalKitOperationFailedError`

\+ Field `message` was added to object type `SupEvalKitOperationFailedError`

\+ Field `errorCode` was added to object type `SupSolutionTemplateOperationFailedError`

\+ Field `message` was added to object type `SupSolutionTemplateOperationFailedError`

\+ Field `errors` was added to object type `SupEvalKitCreateEvalKitPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateCreateSolutionTemplatePayload`

### 14-Nov-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### Arguments

\+ Argument `where: DesFolderFilterInput` added to `DesLibrary.folders`

#### ✅ Non-Breaking Changes (226)

##### Common

###### Directives

Δ Location `INPUT_OBJECT` was added to directive `experimental`

##### Design

###### Types

\+ Type `DesFolderFilterMatchMode` was added

\+ Enum value `AND` was added to enum `DesFolderFilterMatchMode`

\+ Enum value `OR` was added to enum `DesFolderFilterMatchMode`

\+ Type `DesFolderFilterInput` was added

###### Input / Payload

\+ Input field `folderType` of type `DesFolderType` was added to input object type `DesFolderFilterInput`

\+ Input field `matchMode` of type `DesFolderFilterMatchMode` was added to input object type `DesFolderFilterInput`

\+ Input field `name` of type `String` was added to input object type `DesFolderFilterInput`

\+ Input field `parentFolderGuid` of type `String` was added to input object type `DesFolderFilterInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `dmConfiguredDeviceModel` was added to object type `Query`

\+ Argument `deviceMpn: String!` added to `Query.dmConfiguredDeviceModel`

\+ Argument `sessionId: String!` added to `Query.dmConfiguredDeviceModel`

\+ Field `dmConfiguredDeviceModelAllDevices` was added to object type `Query`

\+ Argument `sessionId: String!` added to `Query.dmConfiguredDeviceModelAllDevices`

\+ Field `dmFamilyPartModel` was added to object type `Query`

\+ Field `dmFullStackDeviceModel` was added to object type `Query`

\+ Argument `deviceMpn: String!` added to `Query.dmFullStackDeviceModel`

\+ Field `dmFullStackDeviceModelAllDevices` was added to object type `Query`

\+ Field `dmFullStackDeviceModelReport` was added to object type `Query`

\+ Argument `deviceMpn: String!` added to `Query.dmFullStackDeviceModelReport`

\+ Field `dmFullStackDeviceModelReportAllDevices` was added to object type `Query`

###### ✏️ Mutation

\+ Field `dmExecuteDeviceEvaluation` was added to object type `Mutation`

\+ Argument `input: DmExecuteDeviceEvaluationInput!` added to `Mutation.dmExecuteDeviceEvaluation`

###### Types

\+ Type `DmDeviceModelAsConfigured` was added

Δ Object type `DmDeviceModelAsConfigured` has description `GraphQL type that exposes the device model as configured, typically after user or tool selections.`

\+ Type `DmDeviceToPeripheralOptionsModel` was added

Δ Object type `DmDeviceToPeripheralOptionsModel` has description `Options describing how device interfaces map onto physical peripherals.`

\+ Type `DmExecuteDeviceEvaluationPayload` was added

\+ Type `DmFamilyPart` was added

Δ Object type `DmFamilyPart` has description `Represents a single device family part variant.`

\+ Type `DmFamilyPartModel` was added

Δ Object type `DmFamilyPartModel` has description `Root GraphQL type exposing the collection of device family part definitions.`

\+ Type `DmFspModule` was added

Δ Object type `DmFspModule` has description `Firmware Support Package (FSP) module that represents a device interface, including its requirements and provided interfaces.`

\+ Type `DmFspProvides` was added

Δ Object type `DmFspProvides` has description `Represents an interface provided by an FSP module.`

\+ Type `DmFspRequires` was added

Δ Object type `DmFspRequires` has description `Represents an interface requirement of an FSP module.`

\+ Type `DmFullStackDeviceModel` was added

Δ Object type `DmFullStackDeviceModel` has description `Root GraphQL type that exposes the full device model, including interfaces, peripherals, and ports.`

\+ Type `DmFullStackModelReport` was added

\+ Type `DmInstanceSelection` was added

Δ Object type `DmInstanceSelection` has description `Selected instance details and its pin assignments.`

\+ Type `DmModePinConfig` was added

Δ Object type `DmModePinConfig` has description `Pin function to port mapping entry within an operation mode.`

\+ Type `DmOpMode` was added

Δ Object type `DmOpMode` has description `Concrete operation mode configuration containing pin function assignments.`

\+ Type `DmPeripheral` was added

Δ Object type `DmPeripheral` has description `A single peripheral definition, including its instances and properties.`

\+ Type `DmPeripheralInstance` was added

Δ Object type `DmPeripheralInstance` has description `A concrete instance of a peripheral (e.g., SCI0), including available modes.`

\+ Type `DmPeripheralMode` was added

Δ Object type `DmPeripheralMode` has description `An operational mode for a peripheral instance that groups one or more operation mode configurations.`

\+ Type `DmPeripheralModel` was added

Δ Object type `DmPeripheralModel` has description `Peripheral model for the device, including all available peripherals.`

\+ Type `DmPeripheralPortCoverageItem` was added

\+ Type `DmPeripheralPortCoverageReport` was added

\+ Type `DmPeripheralProperty` was added

Δ Object type `DmPeripheralProperty` has description `Peripheral property or metadata entry.`

\+ Type `DmPinAssignment` was added

Δ Object type `DmPinAssignment` has description `Pin mapping entry from function name to a concrete port.`

\+ Type `DmPort` was added

Δ Object type `DmPort` has description `A single device port with its functions, configurations, and connections.`

\+ Type `DmPortConfiguration` was added

Δ Object type `DmPortConfiguration` has description `A configuration option for a port (display-only in this schema).`

\+ Type `DmPortConnection` was added

Δ Object type `DmPortConnection` has description `A connection associated with a port (display-only in this schema).`

\+ Type `DmPortFunction` was added

Δ Object type `DmPortFunction` has description `A function that a port can perform (display-only in this schema).`

\+ Type `DmPortModel` was added

Δ Object type `DmPortModel` has description `Port model describing all device ports and their details.`

\+ Type `DmRaPartNumberModel` was added

Δ Object type `DmRaPartNumberModel` has description `RA part number details parsed into structured properties.`

\+ Type `DmRequestedPeripheral` was added

Δ Object type `DmRequestedPeripheral` has description `Requested peripheral entry with its required count.`

\+ Type `DmRequiresProvidesMapping` was added

Δ Object type `DmRequiresProvidesMapping` has description `Mapping of a single required interface to the interface that provides it.`

\+ Type `DmRequiresProvidesResolution` was added

Δ Object type `DmRequiresProvidesResolution` has description `Resolution details mapping FSP module requirements to provided interfaces.`

\+ Type `DmResolverResult` was added

Δ Object type `DmResolverResult` has description `Resolver outcome and details for a single device.`

\+ Type `DmResolverSummary` was added

Δ Object type `DmResolverSummary` has description `Summary of all resolver runs including per-device results.`

\+ Type `DmSoftwareToDeviceOptionsModel` was added

Δ Object type `DmSoftwareToDeviceOptionsModel` has description `Options describing how software requirements map onto device interfaces.`

\+ Type `DmTemperatureRange` was added

Δ Object type `DmTemperatureRange` has description `Operating temperature range with units and measurement reference.`

\+ Type `DmExecuteDeviceEvaluationInput` was added

\+ Type `DmRequiredPeripheralPayloadInput` was added

###### Fields

\+ Field `deviceMpn` was added to object type `DmDeviceModelAsConfigured`

\+ Field `devicePeripherals` was added to object type `DmDeviceModelAsConfigured`

\+ Field `devicePorts` was added to object type `DmDeviceModelAsConfigured`

\+ Field `familyPart` was added to object type `DmDeviceModelAsConfigured`

\+ Field `deviceToPeripheralElements` was added to object type `DmDeviceToPeripheralOptionsModel`

\+ Field `dmResolverSummary` was added to object type `DmExecuteDeviceEvaluationPayload`

\+ Field `concrete` was added to object type `DmFamilyPart`

\+ Field `description` was added to object type `DmFamilyPart`

\+ Field `display` was added to object type `DmFamilyPart`

\+ Field `friendlyPartialMpn` was added to object type `DmFamilyPart`

\+ Field `level` was added to object type `DmFamilyPart`

\+ Field `manufacturer` was added to object type `DmFamilyPart`

\+ Field `partialMpn` was added to object type `DmFamilyPart`

\+ Field `raPartDetails` was added to object type `DmFamilyPart`

\+ Field `familyParts` was added to object type `DmFamilyPartModel`

\+ Field `category` was added to object type `DmFspModule`

\+ Field `id` was added to object type `DmFspModule`

\+ Field `name` was added to object type `DmFspModule`

\+ Field `provides` was added to object type `DmFspModule`

\+ Field `requires` was added to object type `DmFspModule`

\+ Field `external` was added to object type `DmFspProvides`

\+ Field `instances` was added to object type `DmFspProvides`

\+ Field `interface` was added to object type `DmFspProvides`

\+ Field `interfaceBase` was added to object type `DmFspProvides`

\+ Field `id` was added to object type `DmFspRequires`

\+ Field `deviceInterfaces` was added to object type `DmFullStackDeviceModel`

\+ Field `deviceMpn` was added to object type `DmFullStackDeviceModel`

\+ Field `devicePeripherals` was added to object type `DmFullStackDeviceModel`

\+ Field `devicePorts` was added to object type `DmFullStackDeviceModel`

\+ Field `deviceToPeripheralOptions` was added to object type `DmFullStackDeviceModel`

\+ Field `familyPart` was added to object type `DmFullStackDeviceModel`

\+ Field `softwareToDeviceOptions` was added to object type `DmFullStackDeviceModel`

\+ Field `deviceMpn` was added to object type `DmFullStackModelReport`

\+ Field `reports` was added to object type `DmFullStackModelReport`

\+ Field `groupName` was added to object type `DmInstanceSelection`

\+ Field `instanceName` was added to object type `DmInstanceSelection`

\+ Field `modeName` was added to object type `DmInstanceSelection`

\+ Field `pins` was added to object type `DmInstanceSelection`

\+ Field `display` was added to object type `DmModePinConfig`

\+ Field `pinFunction` was added to object type `DmModePinConfig`

\+ Field `portName` was added to object type `DmModePinConfig`

\+ Field `connectionSetRefId` was added to object type `DmOpMode`

\+ Field `display` was added to object type `DmOpMode`

\+ Field `id` was added to object type `DmOpMode`

\+ Field `modePinConfigs` was added to object type `DmOpMode`

\+ Field `pinSummary` was added to object type `DmOpMode`

\+ Field `id` was added to object type `DmPeripheral`

\+ Field `name` was added to object type `DmPeripheral`

\+ Field `peripheralInstances` was added to object type `DmPeripheral`

\+ Field `peripheralProperties` was added to object type `DmPeripheral`

\+ Field `id` was added to object type `DmPeripheralInstance`

\+ Field `modes` was added to object type `DmPeripheralInstance`

\+ Field `name` was added to object type `DmPeripheralInstance`

\+ Field `display` was added to object type `DmPeripheralMode`

\+ Field `name` was added to object type `DmPeripheralMode`

\+ Field `opModes` was added to object type `DmPeripheralMode`

\+ Field `peripherals` was added to object type `DmPeripheralModel`

\+ Field `functionName` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `modeName` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `opModeId` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `peripheralInstanceName` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `peripheralName` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `portName` was added to object type `DmPeripheralPortCoverageItem`

\+ Field `coveragePercent` was added to object type `DmPeripheralPortCoverageReport`

\+ Field `covered` was added to object type `DmPeripheralPortCoverageReport`

\+ Field `notCovered` was added to object type `DmPeripheralPortCoverageReport`

\+ Field `peripheralName` was added to object type `DmPeripheralPortCoverageReport`

\+ Field `total` was added to object type `DmPeripheralPortCoverageReport`

\+ Field `display` was added to object type `DmPeripheralProperty`

\+ Field `display` was added to object type `DmPinAssignment`

\+ Field `functionName` was added to object type `DmPinAssignment`

\+ Field `portName` was added to object type `DmPinAssignment`

\+ Field `comment` was added to object type `DmPort`

\+ Field `configurations` was added to object type `DmPort`

\+ Field `connections` was added to object type `DmPort`

\+ Field `functions` was added to object type `DmPort`

\+ Field `id` was added to object type `DmPort`

\+ Field `name` was added to object type `DmPort`

\+ Field `symbolicName` was added to object type `DmPort`

\+ Field `display` was added to object type `DmPortConfiguration`

\+ Field `display` was added to object type `DmPortConnection`

\+ Field `display` was added to object type `DmPortFunction`

\+ Field `ports` was added to object type `DmPortModel`

\+ Field `application` was added to object type `DmRaPartNumberModel`

\+ Field `device` was added to object type `DmRaPartNumberModel`

\+ Field `display` was added to object type `DmRaPartNumberModel`

\+ Field `family` was added to object type `DmRaPartNumberModel`

\+ Field `featureSet` was added to object type `DmRaPartNumberModel`

\+ Field `flashMemorySizeKB` was added to object type `DmRaPartNumberModel`

\+ Field `groupNumber` was added to object type `DmRaPartNumberModel`

\+ Field `package` was added to object type `DmRaPartNumberModel`

\+ Field `packing` was added to object type `DmRaPartNumberModel`

\+ Field `partNumber` was added to object type `DmRaPartNumberModel`

\+ Field `performance` was added to object type `DmRaPartNumberModel`

\+ Field `pinCount` was added to object type `DmRaPartNumberModel`

\+ Field `pitchMm` was added to object type `DmRaPartNumberModel`

\+ Field `qualityGrade` was added to object type `DmRaPartNumberModel`

\+ Field `romCode` was added to object type `DmRaPartNumberModel`

\+ Field `temperatureRange` was added to object type `DmRaPartNumberModel`

\+ Field `xMm` was added to object type `DmRaPartNumberModel`

\+ Field `yMm` was added to object type `DmRaPartNumberModel`

\+ Field `count` was added to object type `DmRequestedPeripheral`

\+ Field `name` was added to object type `DmRequestedPeripheral`

\+ Field `provides` was added to object type `DmRequiresProvidesMapping`

\+ Field `requires` was added to object type `DmRequiresProvidesMapping`

\+ Field `requiresModule` was added to object type `DmRequiresProvidesResolution`

\+ Field `requiresToProvidesMapping` was added to object type `DmRequiresProvidesResolution`

\+ Field `completedAt` was added to object type `DmResolverResult`

\+ Field `completedOpModeGroups` was added to object type `DmResolverResult`

\+ Field `configuredModel` was added to object type `DmResolverResult`

\+ Field `deviceFamily` was added to object type `DmResolverResult`

\+ Field `deviceMpn` was added to object type `DmResolverResult`

\+ Field `durationSeconds` was added to object type `DmResolverResult`

\+ Field `errors` was added to object type `DmResolverResult`

\+ Field `isFeasible` was added to object type `DmResolverResult`

\+ Field `isOptimal` was added to object type `DmResolverResult`

\+ Field `logs` was added to object type `DmResolverResult`

\+ Field `objectiveValue` was added to object type `DmResolverResult`

\+ Field `requestedPeripherals` was added to object type `DmResolverResult`

\+ Field `requestedTotalCount` was added to object type `DmResolverResult`

\+ Field `selections` was added to object type `DmResolverResult`

\+ Field `solverStatus` was added to object type `DmResolverResult`

\+ Field `startedAt` was added to object type `DmResolverResult`

\+ Field `wallTimeSeconds` was added to object type `DmResolverResult`

\+ Field `warnings` was added to object type `DmResolverResult`

\+ Field `percentResolvedSuccess` was added to object type `DmResolverSummary`

\+ Field `results` was added to object type `DmResolverSummary`

\+ Field `softwareToDeviceElements` was added to object type `DmSoftwareToDeviceOptionsModel`

\+ Field `display` was added to object type `DmTemperatureRange`

\+ Field `max` was added to object type `DmTemperatureRange`

\+ Field `min` was added to object type `DmTemperatureRange`

\+ Field `tempType` was added to object type `DmTemperatureRange`

###### Input / Payload

\+ Input field `optionalDeviceMpn` of type `String` was added to input object type `DmExecuteDeviceEvaluationInput`

\+ Input field `payload` of type `[DmRequiredPeripheralPayloadInput!]!` was added to input object type `DmExecuteDeviceEvaluationInput`

\+ Input field `sessionId` of type `String!` was added to input object type `DmExecuteDeviceEvaluationInput`

\+ Input field `name` of type `String!` was added to input object type `DmRequiredPeripheralPayloadInput`

\+ Input field `quantity` of type `Int!` was added to input object type `DmRequiredPeripheralPayloadInput`

### 13-Nov-2025

#### ✅ Non-Breaking Changes (147)

##### Common

###### 🔍 Query

\+ Field `kgNode` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.kgNode`

###### Types

\+ Type `KgAnchorNode` was added

Δ `KgAnchorNode` object implements `KgNode` interface

\+ Type `KgNodeQueries` was added

\+ Type `KgRelation` was added

\+ Type `KgRelationQueries` was added

\+ Type `KgNode` was added

\+ Type `KgRelationSemantic` was added

\+ Enum value `DERIVES_FROM` was added to enum `KgRelationSemantic`

\+ Enum value `DERIVES_INTO` was added to enum `KgRelationSemantic`

\+ Enum value `HAS_INPUT` was added to enum `KgRelationSemantic`

\+ Enum value `HAS_OUTPUT` was added to enum `KgRelationSemantic`

\+ Enum value `HAS_PART` was added to enum `KgRelationSemantic`

\+ Enum value `INFORMED_BY` was added to enum `KgRelationSemantic`

\+ Enum value `INFORMS` was added to enum `KgRelationSemantic`

\+ Enum value `INPUT_OF` was added to enum `KgRelationSemantic`

\+ Enum value `OUTPUT_OF` was added to enum `KgRelationSemantic`

\+ Enum value `PART_OF` was added to enum `KgRelationSemantic`

\+ Enum value `UNKNOWN` was added to enum `KgRelationSemantic`

Δ Enum value `KgRelationSemantic.UNKNOWN` was deprecated with reason 'Primarily here for backward compatibility with Vault. Don\`t use in the new code.\`

Δ Object type `KgRelationSemantic` has description 'Defines the semantic meaning of the relation. See net/wiki/spaces/GE/pages/3358752783/Relation+types for details.'

###### Fields

\+ Field `id` was added to object type `KgAnchorNode`

\+ Field `relatedNodes` was added to object type `KgAnchorNode`

\+ Field `relations` was added to object type `KgAnchorNode`

\+ Field `usedBy` was added to object type `KgNodeQueries`

\+ Field `uses` was added to object type `KgNodeQueries`

\+ Field `object` was added to object type `KgRelation`

\+ Field `semantic` was added to object type `KgRelation`

\+ Field `subject` was added to object type `KgRelation`

\+ Field `all` was added to object type `KgRelationQueries`

Δ Field `id` was added to interface `KgNode`

Δ Field `relatedNodes` was added to interface `KgNode`

Δ Field `relations` was added to interface `KgNode`

Δ Directive `deprecated` was added to enum value `KgRelationSemantic.UNKNOWN`

###### Directives

\+ Directive `experimental` was added

Δ Location `OBJECT` was added to directive `experimental`

Δ Location `FIELD_DEFINITION` was added to directive `experimental`

Δ Location `INTERFACE` was added to directive `experimental`

Δ Location `ENUM` was added to directive `experimental`

##### Platform

###### Types

\+ Type `SolParameterBundleValue` was added

###### Fields

\+ Field `key` was added to object type `SolParameterBundleValue`

\+ Field `value` was added to object type `SolParameterBundleValue`

\+ Field `parameterBundleValues` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `runScaffolding` of type `Boolean` was added to input object type `SolCreateSolutionInput`

\+ Input field `runScaffolding` of type `Boolean` was added to input object type `SolUpdateSolutionInput`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `supSoftwareProjectCreateSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectCreateSoftwareProjectInput!` added to `Mutation.supSoftwareProjectCreateSoftwareProject`

\+ Field `supSoftwareProjectDeleteSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectDeleteSoftwareProjectInput!` added to `Mutation.supSoftwareProjectDeleteSoftwareProject`

\+ Field `supSoftwareProjectUpdateSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SupSoftwareProjectUpdateSoftwareProjectInput!` added to `Mutation.supSoftwareProjectUpdateSoftwareProject`

###### Types

\+ Type `SupSoftwareProjectCreateSoftwareProjectPayload` was added

Δ Object type `SupSoftwareProjectCreateSoftwareProjectPayload` has description `Payload associated with creating a software project.`

\+ Type `SupSoftwareProjectDeleteSoftwareProjectPayload` was added

Δ Object type `SupSoftwareProjectDeleteSoftwareProjectPayload` has description `Payload associated with deleting a software project.`

\+ Type `SupSoftwareProjectNotFoundError` was added

Δ `SupSoftwareProjectNotFoundError` object implements `Error` interface

\+ Type `SupSoftwareProjectUpdateSoftwareProjectPayload` was added

Δ Object type `SupSoftwareProjectUpdateSoftwareProjectPayload` has description `Payload associated with updating a software project.`

\+ Type `SupSoftwareProjectDeleteSoftwareProjectError` was added

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectDeleteSoftwareProjectError`

\+ Type `SupSoftwareProjectUpdateSoftwareProjectError` was added

\+ Member `SupSoftwareProjectNotFoundError` was added to Union type `SupSoftwareProjectUpdateSoftwareProjectError`

\+ Type `SupSoftwareProjectErrorCode` was added

\+ Enum value `SUP_SOFTWARE_PROJECT_NOT_FOUND` was added to enum `SupSoftwareProjectErrorCode`

\+ Type `SupSoftwareProjectCreateSoftwareProjectInput` was added

Δ Object type `SupSoftwareProjectCreateSoftwareProjectInput` has description `Input for software project creation.`

\+ Type `SupSoftwareProjectDeleteSoftwareProjectInput` was added

Δ Object type `SupSoftwareProjectDeleteSoftwareProjectInput` has description `Input for software project delete.`

\+ Type `SupSoftwareProjectEvalKitSourceInput` was added

\+ Type `SupSoftwareProjectUpdateSoftwareProjectInput` was added

Δ Object type `SupSoftwareProjectUpdateSoftwareProjectInput` has description `Input for software project update.`

###### Fields

\+ Field `id` was added to object type `SupSoftwareProjectCreateSoftwareProjectPayload`

\+ Field `errors` was added to object type `SupSoftwareProjectDeleteSoftwareProjectPayload`

\+ Field `errorCode` was added to object type `SupSoftwareProjectNotFoundError`

\+ Field `message` was added to object type `SupSoftwareProjectNotFoundError`

\+ Field `errors` was added to object type `SupSoftwareProjectUpdateSoftwareProjectPayload`

###### Input / Payload

\+ Input field `compatibleEvalKits` of type `[SupSoftwareProjectEvalKitSourceInput!]` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

\+ Input field `description` of type `String` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

\+ Input field `title` of type `String!` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

\+ Input field `type` of type `SupSoftwareProjectType!` was added to input object type `SupSoftwareProjectCreateSoftwareProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSoftwareProjectDeleteSoftwareProjectInput`

\+ Input field `configUrl` of type `String!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `configXmlUrl` of type `String!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `readmeUrl` of type `String!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `sourceUrl` of type `String!` was added to input object type `SupSoftwareProjectEvalKitSourceInput`

\+ Input field `description` of type `String` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `newCompatibleEvalKits` of type `[SupSoftwareProjectEvalKitSourceInput!]!` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `title` of type `String` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

\+ Input field `type` of type `SupSoftwareProjectType` was added to input object type `SupSoftwareProjectUpdateSoftwareProjectInput`

##### Supply

###### ✏️ Mutation

\+ Field `supEvalKitCreateEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitCreateEvalKitInput!` added to `Mutation.supEvalKitCreateEvalKit`

\+ Field `supEvalKitDeleteEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitDeleteEvalKitInput!` added to `Mutation.supEvalKitDeleteEvalKit`

\+ Field `supEvalKitUpdateEvalKit` was added to object type `Mutation`

\+ Argument `input: SupEvalKitUpdateEvalKitInput!` added to `Mutation.supEvalKitUpdateEvalKit`

###### Types

\+ Type `SupEvalKitCreateEvalKitPayload` was added

Δ Object type `SupEvalKitCreateEvalKitPayload` has description `Payload associated with creating a evaluation kit.`

\+ Type `SupEvalKitDeleteEvalKitPayload` was added

Δ Object type `SupEvalKitDeleteEvalKitPayload` has description `Payload associated with deleting a evaluation kit.`

\+ Type `SupEvalKitNotFoundError` was added

Δ `SupEvalKitNotFoundError` object implements `Error` interface

\+ Type `SupEvalKitUpdateEvalKitPayload` was added

Δ Object type `SupEvalKitUpdateEvalKitPayload` has description `Payload associated with updating a evaluation kit.`

\+ Type `SupEvalKitDeleteEvalKitError` was added

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitDeleteEvalKitError`

\+ Type `SupEvalKitUpdateEvalKitError` was added

\+ Member `SupEvalKitNotFoundError` was added to Union type `SupEvalKitUpdateEvalKitError`

\+ Type `SupEvalKitErrorCode` was added

\+ Enum value `SUP_EVAL_KIT_NOT_FOUND` was added to enum `SupEvalKitErrorCode`

\+ Type `SupEvalKitCreateEvalKitInput` was added

Δ Object type `SupEvalKitCreateEvalKitInput` has description `Input for evaluation kit creation.`

\+ Type `SupEvalKitDeleteEvalKitInput` was added

Δ Object type `SupEvalKitDeleteEvalKitInput` has description `Input for evaluation kit delete.`

\+ Type `SupEvalKitFileInput` was added

\+ Type `SupEvalKitUpdateEvalKitInput` was added

Δ Object type `SupEvalKitUpdateEvalKitInput` has description `Input for evaluation kit update.`

###### Fields

\+ Field `id` was added to object type `SupEvalKitCreateEvalKitPayload`

\+ Field `errors` was added to object type `SupEvalKitDeleteEvalKitPayload`

\+ Field `errorCode` was added to object type `SupEvalKitNotFoundError`

\+ Field `message` was added to object type `SupEvalKitNotFoundError`

\+ Field `errors` was added to object type `SupEvalKitUpdateEvalKitPayload`

###### Input / Payload

\+ Input field `compatibleSoftwareProjectIds` of type `[ID!]` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `description` of type `String` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `partIds` of type `[String!]` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `previewImages` of type `[SupEvalKitFileInput!]!` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `refDesignIds` of type `[ID!]` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `sourceUrl` of type `String` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `title` of type `String!` was added to input object type `SupEvalKitCreateEvalKitInput`

\+ Input field `id` of type `ID!` was added to input object type `SupEvalKitDeleteEvalKitInput`

\+ Input field `fileId` of type `String!` was added to input object type `SupEvalKitFileInput`

\+ Input field `fileName` of type `String!` was added to input object type `SupEvalKitFileInput`

\+ Input field `fileType` of type `String!` was added to input object type `SupEvalKitFileInput`

\+ Input field `addCompatibleSoftwareProjectIds` of type `[ID!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `addPartIds` of type `[String!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `addRefDesignIds` of type `[ID!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `description` of type `String` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `id` of type `ID!` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `newPreviewImages` of type `[SupEvalKitFileInput!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `removeCompatibleSoftwareProjectIds` of type `[ID!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `removePartIds` of type `[String!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `removeRefDesignIds` of type `[ID!]` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `sourceUrl` of type `String` was added to input object type `SupEvalKitUpdateEvalKitInput`

\+ Input field `title` of type `String` was added to input object type `SupEvalKitUpdateEvalKitInput`

### 12-Nov-2025

#### ✅ Non-Breaking Changes (204)

##### Design

###### 🔍 Query

\+ Field `desFolderByFolderId` was added to object type `Query`

\+ Argument `folderId: String!` added to `Query.desFolderByFolderId`

\+ Argument `workspaceUrl: String!` added to `Query.desFolderByFolderId`

Δ Field `Query.desFolderById` is deprecated

Δ Directive `deprecated` was added to `Query.desFolderById`

###### Types

\+ Type `DesDatasheetConnection` was added

Δ Object type `DesDatasheetConnection` has description `A connection to a list of items.`

\+ Type `DesDatasheetEdge` was added

Δ Object type `DesDatasheetEdge` has description `An edge in a connection.`

\+ Type `DesDatasheetFilterInput` was added

Δ Object type `DesDatasheetFilterInput` has description `A component datasheet.`

###### Arguments

\+ Argument `after: String` added to `DesLibrary.datasheets`

\+ Argument `before: String` added to `DesLibrary.datasheets`

\+ Argument `first: Int` added to `DesLibrary.datasheets`

\+ Argument `last: Int` added to `DesLibrary.datasheets`

\+ Argument `where: DesDatasheetFilterInput` added to `DesLibrary.datasheets`

###### Fields

\+ Field `edges` was added to object type `DesDatasheetConnection`

\+ Field `nodes` was added to object type `DesDatasheetConnection`

\+ Field `pageInfo` was added to object type `DesDatasheetConnection`

\+ Field `totalCount` was added to object type `DesDatasheetConnection`

\+ Field `cursor` was added to object type `DesDatasheetEdge`

\+ Field `node` was added to object type `DesDatasheetEdge`

\+ Field `folderId` was added to object type `DesCreateFolderPayload`

Δ Field `DesCreateFolderPayload.id` is deprecated

Δ Directive `deprecated` was added to `DesCreateFolderPayload.id`

Δ Field `DesFolder.id` is deprecated

Δ Directive `deprecated` was added to `DesFolder.id`

\+ Field `datasheets` was added to object type `DesLibrary`

Δ Field `DesUpdateFolderPermissionsPayload.folderId` is deprecated

Δ Directive `deprecated` was added to `DesUpdateFolderPermissionsPayload.folderId`

###### Input / Payload

\+ Input field `and` of type `[DesDatasheetFilterInput!]` was added to input object type `DesDatasheetFilterInput`

\+ Input field `comment` of type `StringOperationFilterInput` was added to input object type `DesDatasheetFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `DesDatasheetFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `DesDatasheetFilterInput`

\+ Input field `or` of type `[DesDatasheetFilterInput!]` was added to input object type `DesDatasheetFilterInput`

\+ Input field `parentFolderId` of type `String` was added to input object type `DesCreateFolderInput`

Δ Directive `deprecated` was added to input field `parentId` in input object `DesCreateFolderInput`

\+ Input field `folderId` of type `String` was added to input object type `DesDeleteFolderInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesDeleteFolderInput`

Δ Input field `DesDeleteFolderInput.id` changed type from `ID!` to `ID`

Δ Directive `deprecated` was added to input field `id` in input object `DesDeleteFolderInput`

\+ Input field `folderId` of type `String` was added to input object type `DesMoveFolderInput`

\+ Input field `parentFolderId` of type `String` was added to input object type `DesMoveFolderInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesMoveFolderInput`

Δ Input field `DesMoveFolderInput.id` changed type from `ID!` to `ID`

Δ Directive `deprecated` was added to input field `id` in input object `DesMoveFolderInput`

Δ Directive `deprecated` was added to input field `parentId` in input object `DesMoveFolderInput`

\+ Input field `folderId` of type `String` was added to input object type `DesUpdateFolderInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesUpdateFolderInput`

Δ Input field `DesUpdateFolderInput.id` changed type from `ID!` to `ID`

Δ Directive `deprecated` was added to input field `id` in input object `DesUpdateFolderInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesUpdateFolderPermissionsInput`

##### Platform

###### Input / Payload

\+ Input field `clientId` of type `String` was added to input object type `GloCreateAppOAuthClientInput`

##### Supply

###### ✏️ Mutation

\+ Field `supSolutionTemplateCreateSolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateCreateSolutionTemplateInput!` added to `Mutation.supSolutionTemplateCreateSolutionTemplate`

\+ Field `supSolutionTemplateCreateSolutionTemplateApplication` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateCreateSolutionTemplateApplicationInput!` added to `Mutation.supSolutionTemplateCreateSolutionTemplateApplication`

\+ Field `supSolutionTemplateDeleteSolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateDeleteSolutionTemplateInput!` added to `Mutation.supSolutionTemplateDeleteSolutionTemplate`

\+ Field `supSolutionTemplateDeleteSolutionTemplateApplication` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateDeleteSolutionTemplateApplicationInput!` added to `Mutation.supSolutionTemplateDeleteSolutionTemplateApplication`

\+ Field `supSolutionTemplateUpdateSolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateUpdateSolutionTemplateInput!` added to `Mutation.supSolutionTemplateUpdateSolutionTemplate`

\+ Field `supSolutionTemplateUpdateSolutionTemplateApplication` was added to object type `Mutation`

\+ Argument `input: SupSolutionTemplateUpdateSolutionTemplateApplicationInput!` added to `Mutation.supSolutionTemplateUpdateSolutionTemplateApplication`

###### Types

\+ Type `SupSolutionTemplateApplicationIsExistedError` was added

Δ `SupSolutionTemplateApplicationIsExistedError` object implements `Error` interface

\+ Type `SupSolutionTemplateApplicationNotFoundError` was added

Δ `SupSolutionTemplateApplicationNotFoundError` object implements `Error` interface

\+ Type `SupSolutionTemplateCreateSolutionTemplateApplicationPayload` was added

Δ Object type `SupSolutionTemplateCreateSolutionTemplateApplicationPayload` has description `Payload associated with creating a solution template application.`

\+ Type `SupSolutionTemplateCreateSolutionTemplatePayload` was added

Δ Object type `SupSolutionTemplateCreateSolutionTemplatePayload` has description `Payload associated with creating a solution template.`

\+ Type `SupSolutionTemplateDeleteSolutionTemplateApplicationPayload` was added

Δ Object type `SupSolutionTemplateDeleteSolutionTemplateApplicationPayload` has description `Payload associated with deleting a solution template application.`

\+ Type `SupSolutionTemplateDeleteSolutionTemplatePayload` was added

Δ Object type `SupSolutionTemplateDeleteSolutionTemplatePayload` has description `Payload associated with deleting a solution template.`

\+ Type `SupSolutionTemplateNotFoundError` was added

Δ `SupSolutionTemplateNotFoundError` object implements `Error` interface

\+ Type `SupSolutionTemplateUpdateSolutionTemplateApplicationPayload` was added

Δ Object type `SupSolutionTemplateUpdateSolutionTemplateApplicationPayload` has description `Payload associated with updating a solution template application.`

\+ Type `SupSolutionTemplateUpdateSolutionTemplatePayload` was added

Δ Object type `SupSolutionTemplateUpdateSolutionTemplatePayload` has description `Payload associated with updating a solution template.`

\+ Type `SupSolutionTemplateCreateSolutionTemplateApplicationError` was added

\+ Member `SupSolutionTemplateApplicationIsExistedError` was added to Union type `SupSolutionTemplateCreateSolutionTemplateApplicationError`

\+ Type `SupSolutionTemplateDeleteSolutionTemplateApplicationError` was added

\+ Member `SupSolutionTemplateApplicationNotFoundError` was added to Union type `SupSolutionTemplateDeleteSolutionTemplateApplicationError`

\+ Type `SupSolutionTemplateDeleteSolutionTemplateError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateDeleteSolutionTemplateError`

\+ Type `SupSolutionTemplateUpdateSolutionTemplateApplicationError` was added

\+ Member `SupSolutionTemplateApplicationNotFoundError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateApplicationError`

\+ Type `SupSolutionTemplateUpdateSolutionTemplateError` was added

\+ Member `SupSolutionTemplateNotFoundError` was added to Union type `SupSolutionTemplateUpdateSolutionTemplateError`

\+ Type `SupSolutionTemplateErrorCode` was added

\+ Enum value `SUP_SOLUTION_TEMPLATE_APPLICATION_IS_EXISTED` was added to enum `SupSolutionTemplateErrorCode`

\+ Enum value `SUP_SOLUTION_TEMPLATE_APPLICATION_NOT_FOUND` was added to enum `SupSolutionTemplateErrorCode`

\+ Enum value `SUP_SOLUTION_TEMPLATE_NOT_FOUND` was added to enum `SupSolutionTemplateErrorCode`

\+ Type `SupSolutionTemplateApplicationCreateParameterBundleInput` was added

\+ Type `SupSolutionTemplateApplicationRemoveParameterBundleInput` was added

\+ Type `SupSolutionTemplateApplicationUpdateParameterBundleInput` was added

\+ Type `SupSolutionTemplateCompatibleEvalKitInput` was added

\+ Type `SupSolutionTemplateCreateParameterInfoInput` was added

\+ Type `SupSolutionTemplateCreateParameterInput` was added

\+ Type `SupSolutionTemplateCreateParameterValueInput` was added

\+ Type `SupSolutionTemplateCreateSolutionTemplateApplicationInput` was added

\+ Type `SupSolutionTemplateCreateSolutionTemplateInput` was added

Δ Object type `SupSolutionTemplateCreateSolutionTemplateInput` has description `Input for solution template creation.`

\+ Type `SupSolutionTemplateDeleteSolutionTemplateApplicationInput` was added

Δ Object type `SupSolutionTemplateDeleteSolutionTemplateApplicationInput` has description `Input for solution template application delete.`

\+ Type `SupSolutionTemplateDeleteSolutionTemplateInput` was added

Δ Object type `SupSolutionTemplateDeleteSolutionTemplateInput` has description `Input for solution template delete.`

\+ Type `SupSolutionTemplateEsdSourceInput` was added

\+ Type `SupSolutionTemplateFileInput` was added

\+ Type `SupSolutionTemplateParameterBundleInput` was added

\+ Type `SupSolutionTemplateParameterInput` was added

\+ Type `SupSolutionTemplateParameterValueInput` was added

\+ Type `SupSolutionTemplateUpdateParameterInfoInput` was added

\+ Type `SupSolutionTemplateUpdateParameterInput` was added

\+ Type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput` was added

\+ Type `SupSolutionTemplateUpdateSolutionTemplateInput` was added

Δ Object type `SupSolutionTemplateUpdateSolutionTemplateInput` has description `Input for solution template update.`

###### Fields

\+ Field `errorCode` was added to object type `SupSolutionTemplateApplicationIsExistedError`

\+ Field `message` was added to object type `SupSolutionTemplateApplicationIsExistedError`

\+ Field `errorCode` was added to object type `SupSolutionTemplateApplicationNotFoundError`

\+ Field `message` was added to object type `SupSolutionTemplateApplicationNotFoundError`

\+ Field `errors` was added to object type `SupSolutionTemplateCreateSolutionTemplateApplicationPayload`

\+ Field `id` was added to object type `SupSolutionTemplateCreateSolutionTemplateApplicationPayload`

\+ Field `id` was added to object type `SupSolutionTemplateCreateSolutionTemplatePayload`

\+ Field `errors` was added to object type `SupSolutionTemplateDeleteSolutionTemplateApplicationPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateDeleteSolutionTemplatePayload`

\+ Field `errorCode` was added to object type `SupSolutionTemplateNotFoundError`

\+ Field `message` was added to object type `SupSolutionTemplateNotFoundError`

\+ Field `errors` was added to object type `SupSolutionTemplateUpdateSolutionTemplateApplicationPayload`

\+ Field `errors` was added to object type `SupSolutionTemplateUpdateSolutionTemplatePayload`

\+ Field `aiModelIds` was added to object type `SupSolutionTemplate`

Δ Field `SupSolutionTemplate.evalKitIds` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplate.evalKitIds`

Δ Field `SupSolutionTemplate.evalKits` is deprecated

Δ Directive `deprecated` was added to `SupSolutionTemplate.evalKits`

###### Input / Payload

\+ Input field `order` of type `Int!` was added to input object type `SupSolutionTemplateApplicationCreateParameterBundleInput`

\+ Input field `parameter` of type `SupSolutionTemplateCreateParameterInput!` was added to input object type `SupSolutionTemplateApplicationCreateParameterBundleInput`

\+ Input field `question` of type `String!` was added to input object type `SupSolutionTemplateApplicationCreateParameterBundleInput`

\+ Input field `required` of type `Boolean!` was added to input object type `SupSolutionTemplateApplicationCreateParameterBundleInput`

\+ Input field `values` of type `[SupSolutionTemplateCreateParameterValueInput!]!` was added to input object type `SupSolutionTemplateApplicationCreateParameterBundleInput`

\+ Input field `parameterTitle` of type `String!` was added to input object type `SupSolutionTemplateApplicationRemoveParameterBundleInput`

\+ Input field `newValues` of type `[SupSolutionTemplateCreateParameterValueInput!]` was added to input object type `SupSolutionTemplateApplicationUpdateParameterBundleInput`

\+ Input field `order` of type `Int` was added to input object type `SupSolutionTemplateApplicationUpdateParameterBundleInput`

\+ Input field `parameter` of type `SupSolutionTemplateUpdateParameterInput!` was added to input object type `SupSolutionTemplateApplicationUpdateParameterBundleInput`

\+ Input field `question` of type `String!` was added to input object type `SupSolutionTemplateApplicationUpdateParameterBundleInput`

\+ Input field `required` of type `Boolean` was added to input object type `SupSolutionTemplateApplicationUpdateParameterBundleInput`

\+ Input field `evalKitId` of type `ID!` was added to input object type `SupSolutionTemplateCompatibleEvalKitInput`

\+ Input field `parameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateCompatibleEvalKitInput`

\+ Input field `description` of type `String!` was added to input object type `SupSolutionTemplateCreateParameterInfoInput`

\+ Input field `imageUrl` of type `String` was added to input object type `SupSolutionTemplateCreateParameterInfoInput`

\+ Input field `summary` of type `String` was added to input object type `SupSolutionTemplateCreateParameterInfoInput`

\+ Input field `info` of type `SupSolutionTemplateCreateParameterInfoInput` was added to input object type `SupSolutionTemplateCreateParameterInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateCreateParameterInput`

\+ Input field `info` of type `SupSolutionTemplateCreateParameterInfoInput` was added to input object type `SupSolutionTemplateCreateParameterValueInput`

\+ Input field `name` of type `String!` was added to input object type `SupSolutionTemplateCreateParameterValueInput`

\+ Input field `value` of type `String!` was added to input object type `SupSolutionTemplateCreateParameterValueInput`

\+ Input field `applicationId` of type `String!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateApplicationInput`

\+ Input field `description` of type `String` was added to input object type `SupSolutionTemplateCreateSolutionTemplateApplicationInput`

\+ Input field `parameters` of type `[SupSolutionTemplateApplicationCreateParameterBundleInput!]!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateApplicationInput`

\+ Input field `applicationIds` of type `[String!]` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `compatibleEvalKits` of type `[SupSolutionTemplateCompatibleEvalKitInput!]` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `description` of type `String` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `esdSource` of type `SupSolutionTemplateEsdSourceInput!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `parameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `previewImages` of type `[SupSolutionTemplateFileInput!]!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `softwareProjectIds` of type `[ID!]` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateCreateSolutionTemplateInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSolutionTemplateDeleteSolutionTemplateApplicationInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSolutionTemplateDeleteSolutionTemplateInput`

\+ Input field `compileModel` of type `SupSolutionTemplateFileInput` was added to input object type `SupSolutionTemplateEsdSourceInput`

\+ Input field `documentFile` of type `SupSolutionTemplateFileInput!` was added to input object type `SupSolutionTemplateEsdSourceInput`

\+ Input field `fileId` of type `String!` was added to input object type `SupSolutionTemplateFileInput`

\+ Input field `fileName` of type `String!` was added to input object type `SupSolutionTemplateFileInput`

\+ Input field `fileType` of type `String!` was added to input object type `SupSolutionTemplateFileInput`

\+ Input field `parameter` of type `SupSolutionTemplateParameterInput!` was added to input object type `SupSolutionTemplateParameterBundleInput`

\+ Input field `values` of type `[SupSolutionTemplateParameterValueInput!]!` was added to input object type `SupSolutionTemplateParameterBundleInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateParameterInput`

\+ Input field `name` of type `String!` was added to input object type `SupSolutionTemplateParameterValueInput`

\+ Input field `value` of type `String!` was added to input object type `SupSolutionTemplateParameterValueInput`

\+ Input field `description` of type `String!` was added to input object type `SupSolutionTemplateUpdateParameterInfoInput`

\+ Input field `imageUrl` of type `String` was added to input object type `SupSolutionTemplateUpdateParameterInfoInput`

\+ Input field `summary` of type `String` was added to input object type `SupSolutionTemplateUpdateParameterInfoInput`

\+ Input field `info` of type `SupSolutionTemplateUpdateParameterInfoInput` was added to input object type `SupSolutionTemplateUpdateParameterInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateUpdateParameterInput`

\+ Input field `addParameters` of type `[SupSolutionTemplateApplicationCreateParameterBundleInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput`

\+ Input field `description` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput`

\+ Input field `removeParameters` of type `[SupSolutionTemplateApplicationRemoveParameterBundleInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput`

\+ Input field `updateParameters` of type `[SupSolutionTemplateApplicationUpdateParameterBundleInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateApplicationInput`

\+ Input field `addApplicationIds` of type `[String!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `addSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `description` of type `String` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `id` of type `ID!` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `newCompatibleEvalKits` of type `[SupSolutionTemplateCompatibleEvalKitInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `newEsdSource` of type `SupSolutionTemplateEsdSourceInput` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `newParameters` of type `[SupSolutionTemplateParameterBundleInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `newPreviewImages` of type `[SupSolutionTemplateFileInput!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `removeApplicationIds` of type `[String!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `removeSoftwareProjectIds` of type `[ID!]` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

\+ Input field `title` of type `String!` was added to input object type `SupSolutionTemplateUpdateSolutionTemplateInput`

### 11-Nov-2025

#### ✅ Non-Breaking Changes (14)

##### Design

###### 🔍 Query

\+ Field `desRevisionDetailsByRevisionId` was added to object type `Query`

\+ Argument `revisionId: String!` added to `Query.desRevisionDetailsByRevisionId`

\+ Argument `workspaceUrl: String!` added to `Query.desRevisionDetailsByRevisionId`

Δ Field `Query.desRevisionDetailsById` is deprecated

Δ Directive `deprecated` was added to `Query.desRevisionDetailsById`

###### Fields

\+ Field `componentTypeId` was added to object type `DesComponentType`

Δ Field `DesComponentType.id` is deprecated

Δ Directive `deprecated` was added to `DesComponentType.id`

\+ Field `revisionId` was added to object type `DesRevision`

Δ Field `DesRevision.id` is deprecated

Δ Directive `deprecated` was added to `DesRevision.id`

\+ Field `revisionId` was added to object type `DesRevisionDetails`

Δ Field `DesRevisionDetails.id` is deprecated

Δ Directive `deprecated` was added to `DesRevisionDetails.id`

### 07-Nov-2025

#### 🔴 Breaking Changes (2)

##### Design

###### 🔍 Query

Δ Type for argument `args` on field `Query.desProjects` changed from `DesProjectArgsInput` to `DesProjectsInput`

###### Types

− Type `DesProjectArgsInput` was removed

#### ✅ Non-Breaking Changes (106)

##### Design

###### 🔍 Query

Δ Field `Query.desDesignItemById` is deprecated

Δ Directive `deprecated` was added to `Query.desDesignItemById`

###### Types

\+ Type `DesProjectsInput` was added

Δ Object type `DesProjectsInput` has description `` `desProjects` extra arguments. ``

###### Fields

\+ Field `pcbId` was added to object type `DesDesignItem`

\+ Field `schId` was added to object type `DesDesignItem`

Δ Field `DesDesignItem.id` is deprecated

Δ Directive `deprecated` was added to `DesDesignItem.id`

###### Input / Payload

\+ Input field `hasLayers` of type `Boolean` was added to input object type `DesProjectsInput`

\+ Input field `itemAsDesignItemPcbUniqueId` of type `String` was added to input object type `DesCreateCommentThreadInput`

\+ Input field `itemAsDesignItemSchUniqueId` of type `String` was added to input object type `DesCreateCommentThreadInput`

Δ Directive `deprecated` was added to input field `itemAsDesignItemId` in input object `DesCreateCommentThreadInput`

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingByExistingEsd` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingByExistingEsdInput!` added to `Mutation.solBldScaffoldingByExistingEsd`

###### Types

\+ Type `SolBldScaffoldingByExistingEsdPayload` was added

\+ Type `SolBldScaffoldingByExistingEsdInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingByExistingEsdPayload`

\+ Field `aiModels` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldScaffoldingByExistingEsdInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `sftAIModelById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftAIModelById`

\+ Field `sftAIModels` was added to object type `Query`

\+ Field `sftAIModelsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sftAIModelsByIds`

###### ✏️ Mutation

\+ Field `sftAIModelCreate` was added to object type `Mutation`

\+ Argument `input: SftAIModelCreateInput!` added to `Mutation.sftAIModelCreate`

\+ Field `sftAIModelCreateCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftAIModelCreatePropertiesInput!` added to `Mutation.sftAIModelCreateCustomProperties`

\+ Field `sftAIModelDelete` was added to object type `Mutation`

\+ Argument `input: SftAIModelDeleteInput!` added to `Mutation.sftAIModelDelete`

\+ Field `sftAIModelDeleteCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftAIModelDeletePropertiesInput!` added to `Mutation.sftAIModelDeleteCustomProperties`

\+ Field `sftAIModelUpdate` was added to object type `Mutation`

\+ Argument `input: SftAIModelUpdateInput!` added to `Mutation.sftAIModelUpdate`

\+ Field `sftAIModelUpdateCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftAIModelUpdatePropertiesInput!` added to `Mutation.sftAIModelUpdateCustomProperties`

###### Types

\+ Type `SftAIModel` was added

\+ Type `SftAIModelCreatePayload` was added

\+ Type `SftAIModelCreatePropertiesPayload` was added

\+ Type `SftAIModelCustomProperty` was added

\+ Type `SftAIModelDeletePayload` was added

\+ Type `SftAIModelDeletePropertiesPayload` was added

\+ Type `SftAIModelUpdatePayload` was added

\+ Type `SftAIModelUpdatePropertiesPayload` was added

\+ Type `SftAIModelCreateInput` was added

\+ Type `SftAIModelCreatePropertiesInput` was added

\+ Type `SftAIModelCustomPropertyInput` was added

\+ Type `SftAIModelDeleteInput` was added

\+ Type `SftAIModelDeletePropertiesInput` was added

\+ Type `SftAIModelUpdateInput` was added

\+ Type `SftAIModelUpdatePropertiesInput` was added

###### Fields

\+ Field `createdAt` was added to object type `SftAIModel`

\+ Field `createdBy` was added to object type `SftAIModel`

\+ Field `customProperties` was added to object type `SftAIModel`

\+ Field `description` was added to object type `SftAIModel`

\+ Field `folderId` was added to object type `SftAIModel`

\+ Field `id` was added to object type `SftAIModel`

\+ Field `modifiedAt` was added to object type `SftAIModel`

\+ Field `modifiedBy` was added to object type `SftAIModel`

\+ Field `name` was added to object type `SftAIModel`

\+ Field `previewUrl` was added to object type `SftAIModel`

\+ Field `url` was added to object type `SftAIModel`

\+ Field `data` was added to object type `SftAIModelCreatePayload`

\+ Field `customProperties` was added to object type `SftAIModelCreatePropertiesPayload`

\+ Field `id` was added to object type `SftAIModelCreatePropertiesPayload`

\+ Field `key` was added to object type `SftAIModelCustomProperty`

\+ Field `value` was added to object type `SftAIModelCustomProperty`

\+ Field `isDeleted` was added to object type `SftAIModelDeletePayload`

\+ Field `deletedParametersCount` was added to object type `SftAIModelDeletePropertiesPayload`

\+ Field `id` was added to object type `SftAIModelDeletePropertiesPayload`

\+ Field `data` was added to object type `SftAIModelUpdatePayload`

\+ Field `customProperties` was added to object type `SftAIModelUpdatePropertiesPayload`

\+ Field `id` was added to object type `SftAIModelUpdatePropertiesPayload`

###### Input / Payload

\+ Input field `customProperties` of type `[SftAIModelCustomPropertyInput!]` was added to input object type `SftAIModelCreateInput`

\+ Input field `description` of type `String` was added to input object type `SftAIModelCreateInput`

\+ Input field `fileToken` of type `String` was added to input object type `SftAIModelCreateInput`

\+ Input field `folderId` of type `String!` was added to input object type `SftAIModelCreateInput`

\+ Input field `name` of type `String!` was added to input object type `SftAIModelCreateInput`

\+ Input field `customProperties` of type `[SftAIModelCustomPropertyInput!]!` was added to input object type `SftAIModelCreatePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftAIModelCreatePropertiesInput`

\+ Input field `key` of type `String!` was added to input object type `SftAIModelCustomPropertyInput`

\+ Input field `value` of type `String` was added to input object type `SftAIModelCustomPropertyInput`

\+ Input field `id` of type `ID!` was added to input object type `SftAIModelDeleteInput`

\+ Input field `customPropertyNames` of type `[String!]!` was added to input object type `SftAIModelDeletePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftAIModelDeletePropertiesInput`

\+ Input field `description` of type `String` was added to input object type `SftAIModelUpdateInput`

\+ Input field `id` of type `ID!` was added to input object type `SftAIModelUpdateInput`

\+ Input field `name` of type `String` was added to input object type `SftAIModelUpdateInput`

\+ Input field `customProperties` of type `[SftAIModelCustomPropertyInput!]!` was added to input object type `SftAIModelUpdatePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftAIModelUpdatePropertiesInput`

##### Supply

###### Types

\+ Type `SupRefDesignStatus` was added

\+ Enum value `ACTIVE` was added to enum `SupRefDesignStatus`

\+ Enum value `DRAFT` was added to enum `SupRefDesignStatus`

\+ Enum value `INACTIVE` was added to enum `SupRefDesignStatus`

\+ Enum value `ON_HOLD` was added to enum `SupRefDesignStatus`

\+ Enum value `REJECTED` was added to enum `SupRefDesignStatus`

\+ Enum value `REVIEWING` was added to enum `SupRefDesignStatus`

\+ Enum value `SUBMITTED` was added to enum `SupRefDesignStatus`

###### Fields

\+ Field `status` was added to object type `SupRefDesign`

###### Input / Payload

\+ Input field `statuses` of type `[SupRefDesignStatus!]` was added to input object type `SupRefDesignFilterInput`

##### System Design

###### ✏️ Mutation

\+ Field `sysEsdExportDocument` was added to object type `Mutation`

\+ Argument `input: SysEsdExportDocumentInput!` added to `Mutation.sysEsdExportDocument`

###### Types

\+ Type `SysEsdExportDocumentPayload` was added

\+ Type `SysEsdExportDocumentInput` was added

###### Fields

\+ Field `esdDocumentJson` was added to object type `SysEsdExportDocumentPayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `SysEsdExportDocumentInput`

### 05-Nov-2025

#### 🔴 Breaking Changes (1)

##### Supply

###### Fields

Δ Field `SupSolutionTemplateApplication.description` changed type from `String!` to `String`

#### ⚠️ Dangerous Changes (4)

##### Supply

###### Arguments

\+ Argument `limit: Int!` (with default value) added to `SupEvalKit.compatibleSoftwareProjectIds`

\+ Argument `start: Int!` (with default value) added to `SupEvalKit.compatibleSoftwareProjectIds`

\+ Argument `limit: Int!` (with default value) added to `SupEvalKit.compatibleSoftwareProjects`

\+ Argument `start: Int!` (with default value) added to `SupEvalKit.compatibleSoftwareProjects`

#### ✅ Non-Breaking Changes (16)

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `sftSoftwareUpdateProjectFirmware` was added to object type `Mutation`

\+ Argument `input: SftSoftwareUpdateProjectFirmwareInput!` added to `Mutation.sftSoftwareUpdateProjectFirmware`

###### Types

\+ Type `SftSoftwareProjectUpdateFirmwarePayload` was added

\+ Type `SftSoftwareUpdateProjectFirmwareInput` was added

###### Fields

\+ Field `data` was added to object type `SftSoftwareProjectUpdateFirmwarePayload`

\+ Field `firmwareUrl` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `SftSoftwareUpdateProjectFirmwareInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareUpdateProjectFirmwareInput`

##### Supply

###### Fields

Δ Field `SupEvalKit.compatibleSoftwareProjectIds` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.compatibleSoftwareProjectIds`

Δ Field `SupEvalKit.partIds` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.partIds`

Δ Field `SupEvalKit.refDesignIds` is deprecated

Δ Directive `deprecated` was added to `SupEvalKit.refDesignIds`

\+ Field `bestPreviewImage` was added to object type `SupSolutionTemplate`

\+ Field `required` was added to object type `SupSolutionTemplateApplicationParameterBundle`

### 31-Oct-2025

#### 🔴 Breaking Changes (2)

##### Supply

###### Types

− Enum value `DEMOSTRATION` was removed from enum `SupRefDesignType`

###### Fields

Δ Field `SupRefDesign.subtitle` changed type from `String!` to `String`

#### ⚠️ Dangerous Changes (2)

##### Supply

###### Types

\+ Enum value `DEMONSTRATION` was added to enum `SupRefDesignType`

###### Arguments

\+ Argument `extensions: [String!]` added to `SupRefDesign.designFiles`

#### ✅ Non-Breaking Changes (1)

##### Supply

###### Fields

\+ Field `defaultSchematicFile` was added to object type `SupRefDesign`

### 30-Oct-2025

#### ✅ Non-Breaking Changes (8)

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingBySoftwareProjectAndEvalKit` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingBySoftwareProjectAndEvalKitInput!` added to `Mutation.solBldScaffoldingBySoftwareProjectAndEvalKit`

###### Types

\+ Type `SolBldScaffoldingBySoftwareProjectAndEvalKitPayload` was added

\+ Type `SolBldScaffoldingBySoftwareProjectAndEvalKitInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingBySoftwareProjectAndEvalKitPayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID!` was added to input object type `SolBldScaffoldingBySoftwareProjectAndEvalKitInput`

\+ Input field `parameterBundle` of type `String` was added to input object type `SolBldScaffoldingBySoftwareProjectAndEvalKitInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SolBldScaffoldingBySoftwareProjectAndEvalKitInput`

### 29-Oct-2025

#### ⚠️ Dangerous Changes (1)

##### Renesas (preview)

###### 🔍 Query

\+ Argument `filter: SupSoftwareProjectFilterInput` added to `Query.supSoftwareProjects`

#### ✅ Non-Breaking Changes (15)

##### Renesas (preview)

###### Types

\+ Type `SupSoftwareProjectType` was added

\+ Enum value `APPLICATION` was added to enum `SupSoftwareProjectType`

\+ Enum value `EXAMPLE` was added to enum `SupSoftwareProjectType`

\+ Type `SupSoftwareProjectFilterInput` was added

###### Fields

\+ Field `type` was added to object type `SupSoftwareProject`

###### Input / Payload

\+ Input field `types` of type `[SupSoftwareProjectType!]` was added to input object type `SupSoftwareProjectFilterInput`

##### Supply

###### Fields

\+ Field `compatibleSoftwareProjectIds` was added to object type `SupEvalKit`

\+ Field `compatibleSoftwareProjects` was added to object type `SupEvalKit`

##### System Design

###### ✏️ Mutation

\+ Field `sysEsdImportDocument` was added to object type `Mutation`

\+ Argument `input: SysEsdImportDocumentInput!` added to `Mutation.sysEsdImportDocument`

###### Types

\+ Type `SysEsdImportDocumentPayload` was added

\+ Type `SysEsdImportDocumentInput` was added

###### Fields

\+ Field `isImported` was added to object type `SysEsdImportDocumentPayload`

###### Input / Payload

\+ Input field `esdDocumentJson` of type `String!` was added to input object type `SysEsdImportDocumentInput`

\+ Input field `id` of type `String!` was added to input object type `SysEsdImportDocumentInput`

### 28-Oct-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

Δ `DesProjectTemplateRevision` object implements `Node` interface

#### ✅ Non-Breaking Changes (7)

##### Design

###### 🔍 Query

\+ Field `desProjectTemplateRevisionById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desProjectTemplateRevisionById`

###### Fields

\+ Field `id` was added to object type `DesProjectTemplateRevision`

##### Supply

###### Types

\+ Type `SupEvalKitESDSource` was added

###### Fields

\+ Field `compileModelUrl` was added to object type `SupEvalKitESDSource`

\+ Field `documentFileUrl` was added to object type `SupEvalKitESDSource`

\+ Field `esdSource` was added to object type `SupEvalKit`

### 24-Oct-2025

#### ⚠️ Dangerous Changes (1)

##### Platform

###### Types

\+ Member `GloAppNameNotUpdatedError` was added to Union type `GloUpdateAppNameError`

#### ✅ Non-Breaking Changes (40)

##### Design

###### 🔍 Query

Δ Field `Query.desManufacturePackageById` is deprecated

Δ Directive `deprecated` was added to `Query.desManufacturePackageById`

###### Fields

Δ Field `DesManufacturePackage.id` is deprecated

Δ Directive `deprecated` was added to `DesManufacturePackage.id`

##### Platform

###### 🔍 Query

\+ Field `desWorkspaceGroupById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desWorkspaceGroupById`

\+ Field `desWorkspaceGroupsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desWorkspaceGroupsByIds`

###### ✏️ Mutation

\+ Field `gloAddAppGrantType` was added to object type `Mutation`

\+ Argument `input: GloAddAppGrantTypeInput!` added to `Mutation.gloAddAppGrantType`

\+ Field `gloRemoveAppGrantType` was added to object type `Mutation`

\+ Argument `input: GloRemoveAppGrantTypeInput!` added to `Mutation.gloRemoveAppGrantType`

###### Types

\+ Type `GloAddAppGrantTypePayload` was added

\+ Type `GloAppGrantTypeNotUpdatedError` was added

Δ `GloAppGrantTypeNotUpdatedError` object implements `Error` interface

Δ Object type `GloAppGrantTypeNotUpdatedError` has description ``Error that occurs when updating the grant type for a `GloApp` is unsuccessful.``

\+ Type `GloAppNameNotUpdatedError` was added

Δ `GloAppNameNotUpdatedError` object implements `Error` interface

Δ Object type `GloAppNameNotUpdatedError` has description ``Error that occurs when updating the name for a `GloApp` is unsuccessful.``

\+ Type `GloRemoveAppGrantTypePayload` was added

\+ Type `GloAddAppGrantTypeError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloAddAppGrantTypeError`

\+ Member `GloAppDeletedError` was added to Union type `GloAddAppGrantTypeError`

\+ Member `GloAppGrantTypeNotUpdatedError` was added to Union type `GloAddAppGrantTypeError`

\+ Type `GloRemoveAppGrantTypeError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloRemoveAppGrantTypeError`

\+ Member `GloAppDeletedError` was added to Union type `GloRemoveAppGrantTypeError`

\+ Member `GloAppGrantTypeNotUpdatedError` was added to Union type `GloRemoveAppGrantTypeError`

\+ Type `GloAddAppGrantTypeInput` was added

\+ Type `GloRemoveAppGrantTypeInput` was added

###### Fields

\+ Field `errors` was added to object type `GloAddAppGrantTypePayload`

\+ Field `gloApp` was added to object type `GloAddAppGrantTypePayload`

\+ Field `message` was added to object type `GloAppGrantTypeNotUpdatedError`

\+ Field `message` was added to object type `GloAppNameNotUpdatedError`

\+ Field `errors` was added to object type `GloRemoveAppGrantTypePayload`

\+ Field `gloApp` was added to object type `GloRemoveAppGrantTypePayload`

###### Input / Payload

\+ Input field `grantType` of type `String!` was added to input object type `GloAddAppGrantTypeInput`

\+ Input field `id` of type `ID!` was added to input object type `GloAddAppGrantTypeInput`

\+ Input field `grantType` of type `String!` was added to input object type `GloRemoveAppGrantTypeInput`

\+ Input field `id` of type `ID!` was added to input object type `GloRemoveAppGrantTypeInput`

### 23-Oct-2025

#### ✅ Non-Breaking Changes (10)

##### Design

###### 🔍 Query

\+ Field `desWipVariantByVariantName` was added to object type `Query`

\+ Argument `projectId: ID!` added to `Query.desWipVariantByVariantName`

\+ Argument `variantName: String!` added to `Query.desWipVariantByVariantName`

Δ Field `Query.desWipVariantById` is deprecated

Δ Directive `deprecated` was added to `Query.desWipVariantById`

###### Fields

\+ Field `projectId` was added to object type `DesWipVariant`

Δ Field `DesWipVariant.projectId` is deprecated

Δ Directive `deprecated` was added to `DesWipVariant.projectId`

Δ Field `DesWipVariant.id` is deprecated

Δ Directive `deprecated` was added to `DesWipVariant.id`

### 22-Oct-2025

#### ✅ Non-Breaking Changes (40)

##### Renesas (preview)

###### Fields

\+ Field `parentSolutions` was added to object type `SftSoftwareProject`

\+ Field `repositoryType` was added to object type `SftSoftwareProject`

##### Supply

###### 🔍 Query

\+ Field `supSolutionTemplateApplicationByApplicationId` was added to object type `Query`

\+ Argument `id: String!` added to `Query.supSolutionTemplateApplicationByApplicationId`

\+ Field `supSolutionTemplateApplicationById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supSolutionTemplateApplicationById`

\+ Field `supSolutionTemplatesByApplicationId` was added to object type `Query`

\+ Argument `id: String!` added to `Query.supSolutionTemplatesByApplicationId`

###### Types

\+ Type `SupSolutionTemplateApplication` was added

\+ Type `SupSolutionTemplateApplicationParameterBundle` was added

\+ Type `SupSolutionTemplateCompatibleEvalKit` was added

\+ Type `SupSolutionTemplateParameter` was added

\+ Type `SupSolutionTemplateParameterBundle` was added

\+ Type `SupSolutionTemplateParameterInfo` was added

\+ Type `SupSolutionTemplateParameterValue` was added

###### Fields

\+ Field `applicationId` was added to object type `SupSolutionTemplateApplication`

\+ Field `description` was added to object type `SupSolutionTemplateApplication`

\+ Field `id` was added to object type `SupSolutionTemplateApplication`

\+ Field `parameters` was added to object type `SupSolutionTemplateApplication`

\+ Field `order` was added to object type `SupSolutionTemplateApplicationParameterBundle`

\+ Field `parameter` was added to object type `SupSolutionTemplateApplicationParameterBundle`

\+ Field `question` was added to object type `SupSolutionTemplateApplicationParameterBundle`

\+ Field `values` was added to object type `SupSolutionTemplateApplicationParameterBundle`

\+ Field `evalKit` was added to object type `SupSolutionTemplateCompatibleEvalKit`

\+ Field `evalKitId` was added to object type `SupSolutionTemplateCompatibleEvalKit`

\+ Field `parameters` was added to object type `SupSolutionTemplateCompatibleEvalKit`

\+ Field `info` was added to object type `SupSolutionTemplateParameter`

\+ Field `title` was added to object type `SupSolutionTemplateParameter`

\+ Field `parameter` was added to object type `SupSolutionTemplateParameterBundle`

\+ Field `values` was added to object type `SupSolutionTemplateParameterBundle`

\+ Field `description` was added to object type `SupSolutionTemplateParameterInfo`

\+ Field `imageUrl` was added to object type `SupSolutionTemplateParameterInfo`

\+ Field `summary` was added to object type `SupSolutionTemplateParameterInfo`

\+ Field `info` was added to object type `SupSolutionTemplateParameterValue`

\+ Field `name` was added to object type `SupSolutionTemplateParameterValue`

\+ Field `value` was added to object type `SupSolutionTemplateParameterValue`

\+ Field `applicationIds` was added to object type `SupSolutionTemplate`

\+ Field `compatibleEvalKits` was added to object type `SupSolutionTemplate`

\+ Field `parameters` was added to object type `SupSolutionTemplate`

\+ Field `previewImages` was added to object type `SupSolutionTemplate`

### 21-Oct-2025

#### 🔴 Breaking Changes (1)

##### Design

###### Input / Payload

− Input field `hasVariants` was removed from input object type `DesProjectArgsInput`

#### ✅ Non-Breaking Changes (3)

##### Platform

###### Input / Payload

\+ Input field `parameterBundle` of type `String` was added to input object type `SolBldScaffoldingBySolutionTemplateInput`

\+ Input field `parameterBundle` of type `String` was added to input object type `SolBldScaffoldingExistingSolutionBySolutionTemplateInput`

\+ Input field `parameterBundle` of type `String` was added to input object type `SolBldScaffoldingInput`

### 17-Oct-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### 🔍 Query

\+ Argument `args: DesProjectArgsInput` added to `Query.desProjects`

#### ✅ Non-Breaking Changes (7)

##### Design

###### Types

\+ Type `DesProjectArgsInput` was added

###### Fields

\+ Field `variantCount` was added to object type `DesProject`

###### Input / Payload

\+ Input field `hasLayers` of type `Boolean` was added to input object type `DesProjectArgsInput`

\+ Input field `hasVariants` of type `Boolean` was added to input object type `DesProjectArgsInput`

##### Platform

###### Fields

\+ Field `parameterBundle` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `parameterBundle` of type `String` was added to input object type `SolCreateSolutionInput`

\+ Input field `parameterBundle` of type `String` was added to input object type `SolUpdateSolutionInput`

### 16-Oct-2025

#### 🔴 Breaking Changes (3)

##### Common

###### Types

− Type `Date` was removed

##### Procurement

###### Fields

Δ Field `BomProduction.dueDate` changed type from `Date` to `LocalDate`

###### Input / Payload

Δ Input field `BomCreateBomProductionSettingsInput.dueDate` changed type from `Date` to `LocalDate`

#### ✅ Non-Breaking Changes (56)

##### Common

###### Types

\+ Type `LocalDate` was added

Δ Object type `LocalDate` has description ``The `LocalDate` scalar type represents a ISO date string, represented as UTF-8 character sequences YYYY-MM-DD. The scalar follows the specification defined in RFC3339``

##### Procurement

###### 🔍 Query

\+ Field `bomBomById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.bomBomById`

Δ Field `Query.bomBom` is deprecated

Δ Directive `deprecated` was added to `Query.bomBom`

Δ Field `Query.bomBomRelease` is deprecated

Δ Directive `deprecated` was added to `Query.bomBomRelease`

###### ✏️ Mutation

\+ Field `bomExportBomById` was added to object type `Mutation`

\+ Argument `input: BomExportBomByIdInput!` added to `Mutation.bomExportBomById`

Δ Field `Mutation.bomExportBom` is deprecated

Δ Directive `deprecated` was added to `Mutation.bomExportBom`

Δ Field `Mutation.bomExportBomRelease` is deprecated

Δ Directive `deprecated` was added to `Mutation.bomExportBomRelease`

###### Types

\+ Type `BomOctopartOfferReference` was added

Δ Object type `BomOctopartOfferReference` has description `A reference to an offer in Octopart.`

\+ Type `BomPartCatalogOfferReference` was added

Δ Object type `BomPartCatalogOfferReference` has description `A reference to an offer in Part Catalog.`

\+ Type `BomSelectedElementOffer` was added

Δ Object type `BomSelectedElementOffer` has description `Selected element offer.`

\+ Type `BomSelectedElementOfferItem` was added

Δ Object type `BomSelectedElementOfferItem` has description 'Selected element offer\`s item.\`

\+ Type `BomOfferReference` was added

\+ Member `BomOctopartOfferReference` was added to Union type `BomOfferReference`

\+ Member `BomPartCatalogOfferReference` was added to Union type `BomOfferReference`

Δ Object type `BomOfferReference` has description `A reference to an offer.`

\+ Type `BomExportBomByIdInput` was added

###### Fields

\+ Field `offerId` was added to object type `BomOctopartOfferReference`

\+ Field `manufacturer` was added to object type `BomPartCatalogOfferReference`

\+ Field `mpn` was added to object type `BomPartCatalogOfferReference`

\+ Field `sourceName` was added to object type `BomPartCatalogOfferReference`

\+ Field `supplier` was added to object type `BomPartCatalogOfferReference`

\+ Field `supplierPartNumber` was added to object type `BomPartCatalogOfferReference`

\+ Field `items` was added to object type `BomSelectedElementOffer`

\+ Field `surplus` was added to object type `BomSelectedElementOffer`

\+ Field `totalOrderQuantity` was added to object type `BomSelectedElementOffer`

\+ Field `totalPrice` was added to object type `BomSelectedElementOffer`

\+ Field `offerId` was added to object type `BomSelectedElementOfferItem`

\+ Field `offerReference` was added to object type `BomSelectedElementOfferItem`

\+ Field `orderQuantity` was added to object type `BomSelectedElementOfferItem`

\+ Field `sku` was added to object type `BomSelectedElementOfferItem`

\+ Field `subtotalPrice` was added to object type `BomSelectedElementOfferItem`

\+ Field `supplierName` was added to object type `BomSelectedElementOfferItem`

\+ Field `supplierOfferUrl` was added to object type `BomSelectedElementOfferItem`

Δ Field `BomItem.componentReference` is deprecated

Δ Directive `deprecated` was added to `BomItem.componentReference`

\+ Field `partId` was added to object type `BomItemAlternate`

\+ Field `selectedOffer` was added to object type `BomItemAlternate`

\+ Field `partId` was added to object type `BomItemSubstitute`

\+ Field `selectedOffer` was added to object type `BomItemSubstitute`

\+ Field `id` was added to object type `BomRelease`

\+ Field `id` was added to object type `BomWip`

Δ Field `id` was added to interface `Bom`

Δ Field `partId` was added to interface `BomItemElement`

Δ Field `selectedOffer` was added to interface `BomItemElement`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `BomExportBomByIdInput`

### 10-Oct-2025

#### ✅ Non-Breaking Changes (267)

##### Common

###### Types

\+ Type `Error` was added

###### Fields

Δ Field `message` was added to interface `Error`

##### Platform

###### 🔍 Query

\+ Field `gloAppByClientId` was added to object type `Query`

\+ Argument `clientId: String!` added to `Query.gloAppByClientId`

\+ Field `gloAppById` was added to object type `Query`

\+ Argument `appId: ID!` added to `Query.gloAppById`

\+ Field `gloApps` was added to object type `Query`

\+ Argument `after: String` added to `Query.gloApps`

\+ Argument `before: String` added to `Query.gloApps`

\+ Argument `first: Int` added to `Query.gloApps`

\+ Argument `last: Int` added to `Query.gloApps`

\+ Argument `order: [GloAppSortInput!]` added to `Query.gloApps`

\+ Argument `where: GloAppFilterInput` added to `Query.gloApps`

###### ✏️ Mutation

\+ Field `gloAddAppRedirectUri` was added to object type `Mutation`

\+ Argument `input: GloAddAppRedirectUriInput!` added to `Mutation.gloAddAppRedirectUri`

\+ Field `gloAddAppScope` was added to object type `Mutation`

\+ Argument `input: GloAddAppScopeInput!` added to `Mutation.gloAddAppScope`

\+ Field `gloCreateApp` was added to object type `Mutation`

\+ Argument `input: GloCreateAppInput!` added to `Mutation.gloCreateApp`

\+ Field `gloCreateAppFromOAuthClient` was added to object type `Mutation`

\+ Argument `input: GloCreateAppFromOAuthClientInput!` added to `Mutation.gloCreateAppFromOAuthClient`

\+ Field `gloDeleteApp` was added to object type `Mutation`

\+ Argument `input: GloDeleteAppInput!` added to `Mutation.gloDeleteApp`

\+ Field `gloRemoveAppRedirectUri` was added to object type `Mutation`

\+ Argument `input: GloRemoveAppRedirectUriInput!` added to `Mutation.gloRemoveAppRedirectUri`

\+ Field `gloRemoveAppScope` was added to object type `Mutation`

\+ Argument `input: GloRemoveAppScopeInput!` added to `Mutation.gloRemoveAppScope`

\+ Field `gloUpdateAppContactEmail` was added to object type `Mutation`

\+ Argument `input: GloUpdateAppContactEmailInput!` added to `Mutation.gloUpdateAppContactEmail`

\+ Field `gloUpdateAppDescription` was added to object type `Mutation`

\+ Argument `input: GloUpdateAppDescriptionInput!` added to `Mutation.gloUpdateAppDescription`

\+ Field `gloUpdateAppHrid` was added to object type `Mutation`

\+ Argument `input: GloUpdateAppHridInput!` added to `Mutation.gloUpdateAppHrid`

\+ Field `gloUpdateAppName` was added to object type `Mutation`

\+ Argument `input: GloUpdateAppNameInput!` added to `Mutation.gloUpdateAppName`

###### Types

\+ Type `GloAddAppRedirectUriPayload` was added

\+ Type `GloAddAppScopePayload` was added

\+ Type `GloApp` was added

Δ Object type `GloApp` has description `Represents an Altium application.`

\+ Type `GloAppClientExistsError` was added

Δ `GloAppClientExistsError` object implements `Error` interface

Δ Object type `GloAppClientExistsError` has description ``Error that occurs when attempting to create a new `GloApp` with an *OAuth client* that is already associated with another `GloApp`.``

\+ Type `GloAppDeletedError` was added

Δ `GloAppDeletedError` object implements `Error` interface

Δ Object type `GloAppDeletedError` has description ``Error that occurs when attempting to update a deleted `GloApp`.``

\+ Type `GloAppHridExistsError` was added

Δ `GloAppHridExistsError` object implements `Error` interface

Δ Object type `GloAppHridExistsError` has description `Error that occurs when the input hrid already exists.`

\+ Type `GloAppInvalidEmailError` was added

Δ `GloAppInvalidEmailError` object implements `Error` interface

Δ Object type `GloAppInvalidEmailError` has description `Error that occurs when the input email is invalid.`

\+ Type `GloAppInvalidHridError` was added

Δ `GloAppInvalidHridError` object implements `Error` interface

Δ Object type `GloAppInvalidHridError` has description `Error that occurs when the input hrid is invalid.`

\+ Type `GloAppInvalidOAuthError` was added

Δ `GloAppInvalidOAuthError` object implements `Error` interface

Δ Object type `GloAppInvalidOAuthError` has description `Error that occurs when an *OAuth client* is invalid.`

\+ Type `GloAppMissingOAuthClientError` was added

Δ `GloAppMissingOAuthClientError` object implements `Error` interface

Δ Object type `GloAppMissingOAuthClientError` has description `Error that occurs when an *OAuth client* is missing.`

\+ Type `GloAppNotDeletedError` was added

Δ `GloAppNotDeletedError` object implements `Error` interface

Δ Object type `GloAppNotDeletedError` has description ``Error that occurs when a `GloApp` cannot be deleted.``

\+ Type `GloAppNotFoundError` was added

Δ `GloAppNotFoundError` object implements `Error` interface

Δ Object type `GloAppNotFoundError` has description ``Error that occurs when a `GloApp` is not found.``

\+ Type `GloAppOAuthClientNotDeletedError` was added

Δ `GloAppOAuthClientNotDeletedError` object implements `Error` interface

Δ Object type `GloAppOAuthClientNotDeletedError` has description `Error that occurs when an *OAuth client* cannot be deleted.`

\+ Type `GloAppRedirectUriNotUpdatedError` was added

Δ `GloAppRedirectUriNotUpdatedError` object implements `Error` interface

Δ Object type `GloAppRedirectUriNotUpdatedError` has description ``Error that occurs when updating the redirect URI for a `GloApp` is unsuccessful.``

\+ Type `GloAppsConnection` was added

Δ Object type `GloAppsConnection` has description `A connection to a list of items.`

\+ Type `GloAppScopeNotUpdatedError` was added

Δ `GloAppScopeNotUpdatedError` object implements `Error` interface

Δ Object type `GloAppScopeNotUpdatedError` has description ``Error that occurs when updating the scope for a `GloApp` is unsuccessful.``

\+ Type `GloAppsEdge` was added

Δ Object type `GloAppsEdge` has description `An edge in a connection.`

\+ Type `GloCreateAppFromOAuthClientPayload` was added

\+ Type `GloCreateAppPayload` was added

\+ Type `GloDeleteAppPayload` was added

\+ Type `GloOAuthClient` was added

Δ Object type `GloOAuthClient` has description `Represents an *OAuth 2.0 client*.`

\+ Type `GloRemoveAppRedirectUriPayload` was added

\+ Type `GloRemoveAppScopePayload` was added

\+ Type `GloUpdateAppContactEmailPayload` was added

\+ Type `GloUpdateAppDescriptionPayload` was added

\+ Type `GloUpdateAppHridPayload` was added

\+ Type `GloUpdateAppNamePayload` was added

\+ Type `GloAddAppRedirectUriError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloAddAppRedirectUriError`

\+ Member `GloAppDeletedError` was added to Union type `GloAddAppRedirectUriError`

\+ Member `GloAppRedirectUriNotUpdatedError` was added to Union type `GloAddAppRedirectUriError`

\+ Type `GloAddAppScopeError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloAddAppScopeError`

\+ Member `GloAppDeletedError` was added to Union type `GloAddAppScopeError`

\+ Member `GloAppScopeNotUpdatedError` was added to Union type `GloAddAppScopeError`

\+ Type `GloCreateAppError` was added

\+ Member `GloAppInvalidOAuthError` was added to Union type `GloCreateAppError`

\+ Member `GloAppHridExistsError` was added to Union type `GloCreateAppError`

\+ Member `GloAppInvalidHridError` was added to Union type `GloCreateAppError`

\+ Member `GloAppInvalidEmailError` was added to Union type `GloCreateAppError`

\+ Type `GloCreateAppFromOAuthClientError` was added

\+ Member `GloAppMissingOAuthClientError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Member `GloAppHridExistsError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Member `GloAppInvalidHridError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Member `GloAppInvalidEmailError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Member `GloAppClientExistsError` was added to Union type `GloCreateAppFromOAuthClientError`

\+ Type `GloDeleteAppError` was added

\+ Member `GloAppOAuthClientNotDeletedError` was added to Union type `GloDeleteAppError`

\+ Member `GloAppNotDeletedError` was added to Union type `GloDeleteAppError`

\+ Type `GloRemoveAppRedirectUriError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloRemoveAppRedirectUriError`

\+ Member `GloAppDeletedError` was added to Union type `GloRemoveAppRedirectUriError`

\+ Member `GloAppRedirectUriNotUpdatedError` was added to Union type `GloRemoveAppRedirectUriError`

\+ Type `GloRemoveAppScopeError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloRemoveAppScopeError`

\+ Member `GloAppDeletedError` was added to Union type `GloRemoveAppScopeError`

\+ Member `GloAppScopeNotUpdatedError` was added to Union type `GloRemoveAppScopeError`

\+ Type `GloUpdateAppContactEmailError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloUpdateAppContactEmailError`

\+ Member `GloAppDeletedError` was added to Union type `GloUpdateAppContactEmailError`

\+ Member `GloAppInvalidEmailError` was added to Union type `GloUpdateAppContactEmailError`

\+ Type `GloUpdateAppDescriptionError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloUpdateAppDescriptionError`

\+ Member `GloAppDeletedError` was added to Union type `GloUpdateAppDescriptionError`

\+ Type `GloUpdateAppHridError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloUpdateAppHridError`

\+ Member `GloAppDeletedError` was added to Union type `GloUpdateAppHridError`

\+ Member `GloAppHridExistsError` was added to Union type `GloUpdateAppHridError`

\+ Member `GloAppInvalidHridError` was added to Union type `GloUpdateAppHridError`

\+ Type `GloUpdateAppNameError` was added

\+ Member `GloAppNotFoundError` was added to Union type `GloUpdateAppNameError`

\+ Member `GloAppDeletedError` was added to Union type `GloUpdateAppNameError`

\+ Type `GloAddAppRedirectUriInput` was added

\+ Type `GloAddAppScopeInput` was added

\+ Type `GloAppFilterInput` was added

Δ Object type `GloAppFilterInput` has description `Represents an Altium application.`

\+ Type `GloAppSortInput` was added

Δ Object type `GloAppSortInput` has description `Represents an Altium application.`

\+ Type `GloCreateAppFromOAuthClientInput` was added

Δ Object type `GloCreateAppFromOAuthClientInput` has description ``Input for creating a new `GloApp`.``

\+ Type `GloCreateAppInput` was added

Δ Object type `GloCreateAppInput` has description ``Input for creating a new `GloApp`.``

\+ Type `GloCreateAppOAuthClientInput` was added

Δ Object type `GloCreateAppOAuthClientInput` has description `Input for creating a new *OAuth 2.0 client*.`

\+ Type `GloDeleteAppInput` was added

\+ Type `GloRemoveAppRedirectUriInput` was added

\+ Type `GloRemoveAppScopeInput` was added

\+ Type `GloUpdateAppContactEmailInput` was added

\+ Type `GloUpdateAppDescriptionInput` was added

\+ Type `GloUpdateAppHridInput` was added

\+ Type `GloUpdateAppNameInput` was added

###### Fields

\+ Field `errors` was added to object type `GloAddAppRedirectUriPayload`

\+ Field `gloApp` was added to object type `GloAddAppRedirectUriPayload`

\+ Field `errors` was added to object type `GloAddAppScopePayload`

\+ Field `gloApp` was added to object type `GloAddAppScopePayload`

\+ Field `contactEmail` was added to object type `GloApp`

\+ Field `createdAt` was added to object type `GloApp`

\+ Field `createdById` was added to object type `GloApp`

\+ Field `deletedAt` was added to object type `GloApp`

\+ Field `deletedById` was added to object type `GloApp`

\+ Field `description` was added to object type `GloApp`

\+ Field `hrid` was added to object type `GloApp`

\+ Field `id` was added to object type `GloApp`

\+ Field `name` was added to object type `GloApp`

\+ Field `oAuthClient` was added to object type `GloApp`

\+ Field `updatedAt` was added to object type `GloApp`

\+ Field `updatedById` was added to object type `GloApp`

\+ Field `message` was added to object type `GloAppClientExistsError`

\+ Field `message` was added to object type `GloAppDeletedError`

\+ Field `message` was added to object type `GloAppHridExistsError`

\+ Field `message` was added to object type `GloAppInvalidEmailError`

\+ Field `message` was added to object type `GloAppInvalidHridError`

\+ Field `message` was added to object type `GloAppInvalidOAuthError`

\+ Field `message` was added to object type `GloAppMissingOAuthClientError`

\+ Field `message` was added to object type `GloAppNotDeletedError`

\+ Field `message` was added to object type `GloAppNotFoundError`

\+ Field `message` was added to object type `GloAppOAuthClientNotDeletedError`

\+ Field `message` was added to object type `GloAppRedirectUriNotUpdatedError`

\+ Field `edges` was added to object type `GloAppsConnection`

\+ Field `nodes` was added to object type `GloAppsConnection`

\+ Field `pageInfo` was added to object type `GloAppsConnection`

\+ Field `message` was added to object type `GloAppScopeNotUpdatedError`

\+ Field `cursor` was added to object type `GloAppsEdge`

\+ Field `node` was added to object type `GloAppsEdge`

\+ Field `errors` was added to object type `GloCreateAppFromOAuthClientPayload`

\+ Field `gloApp` was added to object type `GloCreateAppFromOAuthClientPayload`

\+ Field `errors` was added to object type `GloCreateAppPayload`

\+ Field `gloApp` was added to object type `GloCreateAppPayload`

\+ Field `errors` was added to object type `GloDeleteAppPayload`

\+ Field `id` was added to object type `GloDeleteAppPayload`

\+ Field `clientId` was added to object type `GloOAuthClient`

\+ Field `clientSecret` was added to object type `GloOAuthClient`

\+ Field `grantTypes` was added to object type `GloOAuthClient`

\+ Field `redirectUris` was added to object type `GloOAuthClient`

\+ Field `requireConsent` was added to object type `GloOAuthClient`

\+ Field `requirePkce` was added to object type `GloOAuthClient`

\+ Field `requireSecret` was added to object type `GloOAuthClient`

\+ Field `scopes` was added to object type `GloOAuthClient`

\+ Field `errors` was added to object type `GloRemoveAppRedirectUriPayload`

\+ Field `gloApp` was added to object type `GloRemoveAppRedirectUriPayload`

\+ Field `errors` was added to object type `GloRemoveAppScopePayload`

\+ Field `gloApp` was added to object type `GloRemoveAppScopePayload`

\+ Field `errors` was added to object type `GloUpdateAppContactEmailPayload`

\+ Field `gloApp` was added to object type `GloUpdateAppContactEmailPayload`

\+ Field `errors` was added to object type `GloUpdateAppDescriptionPayload`

\+ Field `gloApp` was added to object type `GloUpdateAppDescriptionPayload`

\+ Field `errors` was added to object type `GloUpdateAppHridPayload`

\+ Field `gloApp` was added to object type `GloUpdateAppHridPayload`

\+ Field `errors` was added to object type `GloUpdateAppNamePayload`

\+ Field `gloApp` was added to object type `GloUpdateAppNamePayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `GloAddAppRedirectUriInput`

\+ Input field `redirectUri` of type `URL!` was added to input object type `GloAddAppRedirectUriInput`

\+ Input field `id` of type `ID!` was added to input object type `GloAddAppScopeInput`

\+ Input field `scope` of type `String!` was added to input object type `GloAddAppScopeInput`

\+ Input field `and` of type `[GloAppFilterInput!]` was added to input object type `GloAppFilterInput`

\+ Input field `contactEmail` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `createdAt` of type `DateTimeOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `createdById` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `deletedAt` of type `DateTimeOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `deletedById` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `hrid` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `or` of type `[GloAppFilterInput!]` was added to input object type `GloAppFilterInput`

\+ Input field `updatedAt` of type `DateTimeOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `updatedById` of type `StringOperationFilterInput` was added to input object type `GloAppFilterInput`

\+ Input field `contactEmail` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `createdById` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `deletedAt` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `deletedById` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `description` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `hrid` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `updatedAt` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `updatedById` of type `SortEnumType` was added to input object type `GloAppSortInput`

\+ Input field `clientId` of type `String!` was added to input object type `GloCreateAppFromOAuthClientInput`

\+ Input field `contactEmail` of type `String!` was added to input object type `GloCreateAppFromOAuthClientInput`

\+ Input field `description` of type `String!` was added to input object type `GloCreateAppFromOAuthClientInput`

\+ Input field `hrid` of type `String!` was added to input object type `GloCreateAppFromOAuthClientInput`

\+ Input field `name` of type `String` was added to input object type `GloCreateAppFromOAuthClientInput`

\+ Input field `contactEmail` of type `String!` was added to input object type `GloCreateAppInput`

\+ Input field `description` of type `String!` was added to input object type `GloCreateAppInput`

\+ Input field `hrid` of type `String!` was added to input object type `GloCreateAppInput`

\+ Input field `name` of type `String!` was added to input object type `GloCreateAppInput`

\+ Input field `oAuthClient` of type `GloCreateAppOAuthClientInput!` was added to input object type `GloCreateAppInput`

\+ Input field `grantTypes` of type `[String!]!` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `redirectUris` of type `[String!]!` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `requireConsent` of type `Boolean!` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `requireSecret` of type `Boolean!` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `scopes` of type `[String!]!` was added to input object type `GloCreateAppOAuthClientInput`

\+ Input field `id` of type `ID!` was added to input object type `GloDeleteAppInput`

\+ Input field `id` of type `ID!` was added to input object type `GloRemoveAppRedirectUriInput`

\+ Input field `redirectUri` of type `URL!` was added to input object type `GloRemoveAppRedirectUriInput`

\+ Input field `id` of type `ID!` was added to input object type `GloRemoveAppScopeInput`

\+ Input field `scope` of type `String!` was added to input object type `GloRemoveAppScopeInput`

\+ Input field `contactEmail` of type `String!` was added to input object type `GloUpdateAppContactEmailInput`

\+ Input field `id` of type `ID!` was added to input object type `GloUpdateAppContactEmailInput`

\+ Input field `description` of type `String!` was added to input object type `GloUpdateAppDescriptionInput`

\+ Input field `id` of type `ID!` was added to input object type `GloUpdateAppDescriptionInput`

\+ Input field `hrid` of type `String!` was added to input object type `GloUpdateAppHridInput`

\+ Input field `id` of type `ID!` was added to input object type `GloUpdateAppHridInput`

\+ Input field `id` of type `ID!` was added to input object type `GloUpdateAppNameInput`

\+ Input field `name` of type `String!` was added to input object type `GloUpdateAppNameInput`

### 09-Oct-2025

#### ✅ Non-Breaking Changes (14)

##### Design

###### ✏️ Mutation

\+ Field `desUpgradeComponentsToLatestFootprint` was added to object type `Mutation`

\+ Argument `input: DesUpgradeComponentsToLatestFootprintInput!` added to `Mutation.desUpgradeComponentsToLatestFootprint`

###### Types

\+ Type `DesUpgradeComponentsToLatestFootprintPayload` was added

Δ Object type `DesUpgradeComponentsToLatestFootprintPayload` has description `Payload for upgrading components to use the latest footprint revision.`

\+ Type `DesUpgradeComponentsToLatestFootprintInput` was added

Δ Object type `DesUpgradeComponentsToLatestFootprintInput` has description `Input for upgrading components to use the latest footprint revision.`

###### Fields

\+ Field `errors` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

\+ Field `failedComponentIds` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

\+ Field `failedCount` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

\+ Field `totalProcessed` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

\+ Field `upgradedComponentIds` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

\+ Field `upgradedCount` was added to object type `DesUpgradeComponentsToLatestFootprintPayload`

###### Input / Payload

\+ Input field `componentFilter` of type `DesComponentUpgradeFilterInput` was added to input object type `DesUpgradeComponentsToLatestFootprintInput`

\+ Input field `footprintId` of type `ID!` was added to input object type `DesUpgradeComponentsToLatestFootprintInput`

### 08-Oct-2025

#### ✅ Non-Breaking Changes (77)

##### Design

###### Fields

\+ Field `releaseDate` was added to object type `DesRevisionDetails`

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingExistingSolutionBySolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingExistingSolutionBySolutionTemplateInput!` added to `Mutation.solBldScaffoldingExistingSolutionBySolutionTemplate`

###### Types

\+ Type `SolBldScaffoldingExistingSolutionBySolutionTemplatePayload` was added

\+ Type `SolBldScaffoldingExistingSolutionBySolutionTemplateInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingExistingSolutionBySolutionTemplatePayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID` was added to input object type `SolBldScaffoldingExistingSolutionBySolutionTemplateInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolBldScaffoldingExistingSolutionBySolutionTemplateInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SolBldScaffoldingExistingSolutionBySolutionTemplateInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `supSoftwareProjectById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supSoftwareProjectById`

\+ Field `supSoftwareProjects` was added to object type `Query`

\+ Argument `limit: Int!` (with default value) added to `Query.supSoftwareProjects`

\+ Argument `q: String` added to `Query.supSoftwareProjects`

\+ Argument `start: Int!` (with default value) added to `Query.supSoftwareProjects`

\+ Field `supSoftwareProjectsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supSoftwareProjectsByIds`

###### Types

\+ Type `SupSoftwareProject` was added

\+ Type `SupSoftwareProjectEvalKitSource` was added

###### Arguments

\+ Argument `id: ID!` added to `SupSoftwareProject.compatibleEvalKit`

###### Fields

\+ Field `compatibleEvalKit` was added to object type `SupSoftwareProject`

\+ Field `compatibleEvalKits` was added to object type `SupSoftwareProject`

\+ Field `createdAt` was added to object type `SupSoftwareProject`

\+ Field `description` was added to object type `SupSoftwareProject`

\+ Field `id` was added to object type `SupSoftwareProject`

\+ Field `title` was added to object type `SupSoftwareProject`

\+ Field `updatedAt` was added to object type `SupSoftwareProject`

\+ Field `configUrl` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `configXmlUrl` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `evalKit` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `evalKitId` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `readmeUrl` was added to object type `SupSoftwareProjectEvalKitSource`

\+ Field `sourceUrl` was added to object type `SupSoftwareProjectEvalKitSource`

##### Supply

###### 🔍 Query

\+ Field `supEvalKitById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supEvalKitById`

\+ Field `supEvalKits` was added to object type `Query`

\+ Argument `limit: Int!` (with default value) added to `Query.supEvalKits`

\+ Argument `q: String` added to `Query.supEvalKits`

\+ Argument `start: Int!` (with default value) added to `Query.supEvalKits`

\+ Field `supEvalKitsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supEvalKitsByIds`

\+ Field `supSolutionTemplateById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supSolutionTemplateById`

\+ Field `supSolutionTemplates` was added to object type `Query`

\+ Argument `limit: Int!` (with default value) added to `Query.supSolutionTemplates`

\+ Argument `q: String` added to `Query.supSolutionTemplates`

\+ Argument `start: Int!` (with default value) added to `Query.supSolutionTemplates`

\+ Field `supSolutionTemplatesByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supSolutionTemplatesByIds`

###### Types

\+ Type `SupEvalKit` was added

\+ Type `SupSolutionTemplate` was added

\+ Type `SupSolutionTemplateESDSource` was added

###### Arguments

\+ Argument `id: ID` added to `SupSolutionTemplate.evalKits`

###### Fields

\+ Field `bestPreviewImage` was added to object type `SupEvalKit`

\+ Field `createdAt` was added to object type `SupEvalKit`

\+ Field `description` was added to object type `SupEvalKit`

\+ Field `id` was added to object type `SupEvalKit`

\+ Field `partIds` was added to object type `SupEvalKit`

\+ Field `previewImages` was added to object type `SupEvalKit`

\+ Field `refDesignIds` was added to object type `SupEvalKit`

\+ Field `refDesigns` was added to object type `SupEvalKit`

\+ Field `sourceUrl` was added to object type `SupEvalKit`

\+ Field `title` was added to object type `SupEvalKit`

\+ Field `updatedAt` was added to object type `SupEvalKit`

\+ Field `createdAt` was added to object type `SupSolutionTemplate`

\+ Field `description` was added to object type `SupSolutionTemplate`

\+ Field `esdSource` was added to object type `SupSolutionTemplate`

\+ Field `evalKitIds` was added to object type `SupSolutionTemplate`

\+ Field `evalKits` was added to object type `SupSolutionTemplate`

\+ Field `id` was added to object type `SupSolutionTemplate`

\+ Field `softwareProjectIds` was added to object type `SupSolutionTemplate`

\+ Field `softwareProjects` was added to object type `SupSolutionTemplate`

\+ Field `solutionSourceUrl` was added to object type `SupSolutionTemplate`

\+ Field `title` was added to object type `SupSolutionTemplate`

\+ Field `updatedAt` was added to object type `SupSolutionTemplate`

\+ Field `compileModelUrl` was added to object type `SupSolutionTemplateESDSource`

\+ Field `documentFileUrl` was added to object type `SupSolutionTemplateESDSource`

### 07-Oct-2025

#### ✅ Non-Breaking Changes (7)

##### Platform

###### ✏️ Mutation

\+ Field `solBldScaffoldingBySolutionTemplate` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingBySolutionTemplateInput!` added to `Mutation.solBldScaffoldingBySolutionTemplate`

###### Types

\+ Type `SolBldScaffoldingBySolutionTemplatePayload` was added

\+ Type `SolBldScaffoldingBySolutionTemplateInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingBySolutionTemplatePayload`

###### Input / Payload

\+ Input field `evalKitId` of type `ID` was added to input object type `SolBldScaffoldingBySolutionTemplateInput`

\+ Input field `solutionTemplateId` of type `ID!` was added to input object type `SolBldScaffoldingBySolutionTemplateInput`

### 06-Oct-2025

#### ✅ Non-Breaking Changes (6)

##### Platform

###### Fields

\+ Field `evalKitId` was added to object type `SolSolution`

\+ Field `solutionTemplateId` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `evalKitId` of type `ID` was added to input object type `SolCreateSolutionInput`

\+ Input field `solutionTemplateId` of type `ID` was added to input object type `SolCreateSolutionInput`

\+ Input field `evalKitId` of type `ID` was added to input object type `SolUpdateSolutionInput`

\+ Input field `solutionTemplateId` of type `ID` was added to input object type `SolUpdateSolutionInput`

### 01-Oct-2025

#### ⚠️ Dangerous Changes (5)

##### Supply

###### 🔍 Query

\+ Argument `limit: Int!` (with default value) added to `Query.supRefParts`

\+ Argument `start: Int!` (with default value) added to `Query.supRefParts`

###### Arguments

\+ Argument `limit: Int!` (with default value) added to `SupRefDesign.parts`

\+ Argument `start: Int!` (with default value) added to `SupRefDesign.parts`

\+ Argument `types: [SupRefPartType]` added to `SupRefDesign.parts`

#### ✅ Non-Breaking Changes (1)

##### Supply

###### Fields

Δ Directive `deprecated` was added to argument `type` of field `parts` in type `SupRefDesign`

### 27-Sep-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### 🔍 Query

− Argument `reason` was removed from `@deprecated`

#### ✅ Non-Breaking Changes (3)

##### Design

###### 🔍 Query

\+ Field `desProjectsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desProjectsByIds`

Δ Deprecation reason on field `Query.desProjectsByGrids` has changed from `To be replaced by desProjectsByIds in the future.` to `Use desProjectsByIds instead.`

### 26-Sep-2025

#### ✅ Non-Breaking Changes (2)

##### Platform

###### Fields

\+ Field `uploadedAt` was added to object type `SolAttachment`

\+ Field `uploadedBy` was added to object type `SolAttachment`

### 25-Sep-2025

#### ✅ Non-Breaking Changes (12)

##### Design

###### ✏️ Mutation

\+ Field `desUpdateFootprint` was added to object type `Mutation`

\+ Argument `input: DesUpdateFootprintInput!` added to `Mutation.desUpdateFootprint`

###### Types

\+ Type `DesUpdateFootprintPayload` was added

Δ Object type `DesUpdateFootprintPayload` has description `Payload of updating a footprint.`

\+ Type `DesUpdateFootprintInput` was added

Δ Object type `DesUpdateFootprintInput` has description `Input for updating a footprint.`

###### Fields

\+ Field `errors` was added to object type `DesUpdateFootprintPayload`

\+ Field `id` was added to object type `DesUpdateFootprintPayload`

###### Input / Payload

\+ Input field `comment` of type `String` was added to input object type `DesUpdateFootprintInput`

\+ Input field `description` of type `String` was added to input object type `DesUpdateFootprintInput`

\+ Input field `footprintId` of type `ID!` was added to input object type `DesUpdateFootprintInput`

\+ Input field `releaseNote` of type `String` was added to input object type `DesUpdateFootprintInput`

### 22-Sep-2025

#### ✅ Non-Breaking Changes (3)

##### Design

###### 🔍 Query

\+ Field `desReuseBlockRevisionsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desReuseBlockRevisionsByIds`

###### Fields

\+ Field `lifeCycleState` was added to object type `DesReuseBlockRevision`

### 17-Sep-2025

#### ✅ Non-Breaking Changes (239)

##### Common

###### Types

\+ Type `JSON` was added

##### Design

###### 🔍 Query

\+ Field `desReuseBlocksByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desReuseBlocksByIds`

###### ✏️ Mutation

\+ Field `desUpgradeComponentsToLatestSymbol` was added to object type `Mutation`

\+ Argument `input: DesUpgradeComponentsToLatestSymbolInput!` added to `Mutation.desUpgradeComponentsToLatestSymbol`

###### Types

\+ Type `DesFootprintConnection` was added

Δ Object type `DesFootprintConnection` has description `A connection to a list of items.`

\+ Type `DesFootprintEdge` was added

Δ Object type `DesFootprintEdge` has description `An edge in a connection.`

\+ Type `DesSymbolConnection` was added

Δ Object type `DesSymbolConnection` has description `A connection to a list of items.`

\+ Type `DesSymbolEdge` was added

Δ Object type `DesSymbolEdge` has description `An edge in a connection.`

\+ Type `DesUpgradeComponentsToLatestSymbolPayload` was added

Δ Object type `DesUpgradeComponentsToLatestSymbolPayload` has description `Payload for upgrading components to use the latest symbol revision.`

\+ Type `DesComponentUpgradeFilterInput` was added

\+ Type `DesFootprintFilterInput` was added

Δ Object type `DesFootprintFilterInput` has description `Provides filter options for a list of footprints.`

\+ Type `DesLifecycleStateUpgradeOperationFilterInput` was added

\+ Type `DesStringUpgradeOperationFilterInput` was added

\+ Type `DesSymbolFilterInput` was added

Δ Object type `DesSymbolFilterInput` has description `A component symbol. These represent the body and the pins on the physical component.`

\+ Type `DesUpgradeComponentsToLatestSymbolInput` was added

Δ Object type `DesUpgradeComponentsToLatestSymbolInput` has description `Input for upgrading components to use the latest symbol revision.`

###### Arguments

\+ Argument `after: String` added to `DesLibrary.footprints`

\+ Argument `before: String` added to `DesLibrary.footprints`

\+ Argument `first: Int` added to `DesLibrary.footprints`

\+ Argument `last: Int` added to `DesLibrary.footprints`

\+ Argument `where: DesFootprintFilterInput` added to `DesLibrary.footprints`

\+ Argument `after: String` added to `DesLibrary.symbols`

\+ Argument `before: String` added to `DesLibrary.symbols`

\+ Argument `first: Int` added to `DesLibrary.symbols`

\+ Argument `last: Int` added to `DesLibrary.symbols`

\+ Argument `where: DesSymbolFilterInput` added to `DesLibrary.symbols`

###### Fields

\+ Field `edges` was added to object type `DesFootprintConnection`

\+ Field `nodes` was added to object type `DesFootprintConnection`

\+ Field `pageInfo` was added to object type `DesFootprintConnection`

\+ Field `totalCount` was added to object type `DesFootprintConnection`

\+ Field `cursor` was added to object type `DesFootprintEdge`

\+ Field `node` was added to object type `DesFootprintEdge`

\+ Field `edges` was added to object type `DesSymbolConnection`

\+ Field `nodes` was added to object type `DesSymbolConnection`

\+ Field `pageInfo` was added to object type `DesSymbolConnection`

\+ Field `totalCount` was added to object type `DesSymbolConnection`

\+ Field `cursor` was added to object type `DesSymbolEdge`

\+ Field `node` was added to object type `DesSymbolEdge`

\+ Field `errors` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `failedComponentIds` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `failedCount` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `totalProcessed` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `upgradedComponentIds` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `upgradedCount` was added to object type `DesUpgradeComponentsToLatestSymbolPayload`

\+ Field `createdBy` was added to object type `DesComponent`

\+ Field `footprints` was added to object type `DesLibrary`

\+ Field `symbols` was added to object type `DesLibrary`

###### Input / Payload

\+ Input field `comment` of type `DesStringUpgradeOperationFilterInput` was added to input object type `DesComponentUpgradeFilterInput`

\+ Input field `description` of type `DesStringUpgradeOperationFilterInput` was added to input object type `DesComponentUpgradeFilterInput`

\+ Input field `lifeCycleStateName` of type `DesLifecycleStateUpgradeOperationFilterInput` was added to input object type `DesComponentUpgradeFilterInput`

\+ Input field `name` of type `DesStringUpgradeOperationFilterInput` was added to input object type `DesComponentUpgradeFilterInput`

\+ Input field `and` of type `[DesFootprintFilterInput!]` was added to input object type `DesFootprintFilterInput`

\+ Input field `comment` of type `StringOperationFilterInput` was added to input object type `DesFootprintFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `DesFootprintFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `DesFootprintFilterInput`

\+ Input field `or` of type `[DesFootprintFilterInput!]` was added to input object type `DesFootprintFilterInput`

\+ Input field `eq` of type `String` was added to input object type `DesLifecycleStateUpgradeOperationFilterInput`

\+ Input field `in` of type `[String!]` was added to input object type `DesLifecycleStateUpgradeOperationFilterInput`

\+ Input field `neq` of type `String` was added to input object type `DesLifecycleStateUpgradeOperationFilterInput`

\+ Input field `notIn` of type `[String!]` was added to input object type `DesLifecycleStateUpgradeOperationFilterInput`

\+ Input field `contains` of type `String` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `endsWith` of type `String` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `eq` of type `String` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `in` of type `[String!]` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `neq` of type `String` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `notIn` of type `[String!]` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `startsWith` of type `String` was added to input object type `DesStringUpgradeOperationFilterInput`

\+ Input field `and` of type `[DesSymbolFilterInput!]` was added to input object type `DesSymbolFilterInput`

\+ Input field `comment` of type `StringOperationFilterInput` was added to input object type `DesSymbolFilterInput`

\+ Input field `description` of type `StringOperationFilterInput` was added to input object type `DesSymbolFilterInput`

\+ Input field `name` of type `StringOperationFilterInput` was added to input object type `DesSymbolFilterInput`

\+ Input field `or` of type `[DesSymbolFilterInput!]` was added to input object type `DesSymbolFilterInput`

\+ Input field `componentFilter` of type `DesComponentUpgradeFilterInput` was added to input object type `DesUpgradeComponentsToLatestSymbolInput`

\+ Input field `symbolId` of type `ID!` was added to input object type `DesUpgradeComponentsToLatestSymbolInput`

##### Insights

###### 🔍 Query

\+ Field `desWorkspaceInsInsightById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desWorkspaceInsInsightById`

\+ Field `desWorkspaceInsInsightByName` was added to object type `Query`

\+ Argument `name: String!` added to `Query.desWorkspaceInsInsightByName`

\+ Field `desWorkspaceInsInsights` was added to object type `Query`

\+ Argument `after: String` added to `Query.desWorkspaceInsInsights`

\+ Argument `before: String` added to `Query.desWorkspaceInsInsights`

\+ Argument `filter: DesWorkspaceInsInsightFilterInput` added to `Query.desWorkspaceInsInsights`

\+ Argument `first: Int` added to `Query.desWorkspaceInsInsights`

\+ Argument `last: Int` added to `Query.desWorkspaceInsInsights`

\+ Argument `sorting: DesWorkspaceInsOrderingInput` added to `Query.desWorkspaceInsInsights`

\+ Field `desWorkspaceInsInsightSeverities` was added to object type `Query`

\+ Field `desWorkspaceInsInsightSortingFields` was added to object type `Query`

\+ Field `desWorkspaceInsInsightStatuses` was added to object type `Query`

\+ Field `desWorkspaceInsInsightTypes` was added to object type `Query`

###### ✏️ Mutation

\+ Field `desWorkspaceInsInitializeInsightsIfRequired` was added to object type `Mutation`

\+ Field `desWorkspaceInsUpdateInsightById` was added to object type `Mutation`

\+ Argument `input: DesWorkspaceInsUpdateInsightByIdInput!` added to `Mutation.desWorkspaceInsUpdateInsightById`

\+ Field `desWorkspaceInsUpsertInsightByKey` was added to object type `Mutation`

\+ Argument `input: DesWorkspaceInsUpsertInsightByKeyInput!` added to `Mutation.desWorkspaceInsUpsertInsightByKey`

###### Types

\+ Type `DesWorkspaceInsInitializeInsightsIfRequiredPayload` was added

\+ Type `DesWorkspaceInsInsight` was added

\+ Type `DesWorkspaceInsInsightAssemblyVariantLink` was added

\+ Type `DesWorkspaceInsInsightBomLink` was added

\+ Type `DesWorkspaceInsInsightBomReleaseLink` was added

\+ Type `DesWorkspaceInsInsightComponentLink` was added

\+ Type `DesWorkspaceInsInsightComponentRevisionLink` was added

\+ Type `DesWorkspaceInsInsightConsolidatedBomLink` was added

\+ Type `DesWorkspaceInsInsightConsolidatedBomReleaseLink` was added

\+ Type `DesWorkspaceInsInsightDataChangedAction` was added

\+ Type `DesWorkspaceInsInsightEntityLinksChangedAction` was added

\+ Type `DesWorkspaceInsInsightErrorPayload` was added

\+ Type `DesWorkspaceInsInsightHistoryTransaction` was added

\+ Type `DesWorkspaceInsInsightPartLink` was added

\+ Type `DesWorkspaceInsInsightPartRequestLinkGql` was added

\+ Type `DesWorkspaceInsInsightProjectLink` was added

\+ Type `DesWorkspaceInsInsightsConnection` was added

Δ Object type `DesWorkspaceInsInsightsConnection` has description `A connection to a list of items.`

\+ Type `DesWorkspaceInsInsightsEdge` was added

Δ Object type `DesWorkspaceInsInsightsEdge` has description `An edge in a connection.`

\+ Type `DesWorkspaceInsInsightSeverityChangedAction` was added

\+ Type `DesWorkspaceInsInsightStatusChangedAction` was added

\+ Type `DesWorkspaceInsInsightTaskLinkGql` was added

\+ Type `DesWorkspaceInsInsightTaskLinksChangedAction` was added

\+ Type `DesWorkspaceInsRelatedEntities` was added

\+ Type `DesWorkspaceInsRelatedTasks` was added

\+ Type `DesWorkspaceInsUpdateInsightByIdPayload` was added

\+ Type `DesWorkspaceInsUpsertInsightByKeyPayload` was added

\+ Type `DesWorkspaceInsUserActionTimestamp` was added

\+ Type `DesWorkspaceInsInsightHistoryAction` was added

\+ Member `DesWorkspaceInsInsightSeverityChangedAction` was added to Union type `DesWorkspaceInsInsightHistoryAction`

\+ Member `DesWorkspaceInsInsightEntityLinksChangedAction` was added to Union type `DesWorkspaceInsInsightHistoryAction`

\+ Member `DesWorkspaceInsInsightStatusChangedAction` was added to Union type `DesWorkspaceInsInsightHistoryAction`

\+ Member `DesWorkspaceInsInsightTaskLinksChangedAction` was added to Union type `DesWorkspaceInsInsightHistoryAction`

\+ Member `DesWorkspaceInsInsightDataChangedAction` was added to Union type `DesWorkspaceInsInsightHistoryAction`

\+ Type `DesWorkspaceInsInsightFilterInput` was added

\+ Type `DesWorkspaceInsInsightUserActionInput` was added

\+ Type `DesWorkspaceInsOrderingInput` was added

\+ Type `DesWorkspaceInsUpdateInsightByIdInput` was added

\+ Type `DesWorkspaceInsUpsertInsightByKeyInput` was added

\+ Type `DesWorkspaceInsUpsertInsightInput` was added

###### Fields

\+ Field `errors` was added to object type `DesWorkspaceInsInitializeInsightsIfRequiredPayload`

\+ Field `isSuccess` was added to object type `DesWorkspaceInsInitializeInsightsIfRequiredPayload`

\+ Field `created` was added to object type `DesWorkspaceInsInsight`

\+ Field `data` was added to object type `DesWorkspaceInsInsight`

\+ Field `history` was added to object type `DesWorkspaceInsInsight`

\+ Field `id` was added to object type `DesWorkspaceInsInsight`

\+ Field `isAck` was added to object type `DesWorkspaceInsInsight`

\+ Field `name` was added to object type `DesWorkspaceInsInsight`

\+ Field `relatedEntities` was added to object type `DesWorkspaceInsInsight`

\+ Field `relatedTasks` was added to object type `DesWorkspaceInsInsight`

\+ Field `severity` was added to object type `DesWorkspaceInsInsight`

\+ Field `shortData` was added to object type `DesWorkspaceInsInsight`

\+ Field `status` was added to object type `DesWorkspaceInsInsight`

\+ Field `type` was added to object type `DesWorkspaceInsInsight`

\+ Field `updated` was added to object type `DesWorkspaceInsInsight`

\+ Field `created` was added to object type `DesWorkspaceInsInsightAssemblyVariantLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightAssemblyVariantLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightBomLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightBomLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightBomReleaseLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightBomReleaseLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightComponentLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightComponentLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightComponentRevisionLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightComponentRevisionLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightConsolidatedBomLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightConsolidatedBomLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightConsolidatedBomReleaseLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightConsolidatedBomReleaseLink`

\+ Field `newData` was added to object type `DesWorkspaceInsInsightDataChangedAction`

\+ Field `newShortData` was added to object type `DesWorkspaceInsInsightDataChangedAction`

\+ Field `oldData` was added to object type `DesWorkspaceInsInsightDataChangedAction`

\+ Field `oldShortData` was added to object type `DesWorkspaceInsInsightDataChangedAction`

\+ Field `newEntities` was added to object type `DesWorkspaceInsInsightEntityLinksChangedAction`

\+ Field `removedEntities` was added to object type `DesWorkspaceInsInsightEntityLinksChangedAction`

\+ Field `message` was added to object type `DesWorkspaceInsInsightErrorPayload`

\+ Field `actions` was added to object type `DesWorkspaceInsInsightHistoryTransaction`

\+ Field `created` was added to object type `DesWorkspaceInsInsightHistoryTransaction`

\+ Field `created` was added to object type `DesWorkspaceInsInsightPartLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightPartLink`

\+ Field `created` was added to object type `DesWorkspaceInsInsightPartRequestLinkGql`

\+ Field `id` was added to object type `DesWorkspaceInsInsightPartRequestLinkGql`

\+ Field `created` was added to object type `DesWorkspaceInsInsightProjectLink`

\+ Field `id` was added to object type `DesWorkspaceInsInsightProjectLink`

\+ Field `edges` was added to object type `DesWorkspaceInsInsightsConnection`

\+ Field `nodes` was added to object type `DesWorkspaceInsInsightsConnection`

\+ Field `pageInfo` was added to object type `DesWorkspaceInsInsightsConnection`

\+ Field `totalCount` was added to object type `DesWorkspaceInsInsightsConnection`

\+ Field `cursor` was added to object type `DesWorkspaceInsInsightsEdge`

\+ Field `node` was added to object type `DesWorkspaceInsInsightsEdge`

\+ Field `newSeverity` was added to object type `DesWorkspaceInsInsightSeverityChangedAction`

\+ Field `oldSeverity` was added to object type `DesWorkspaceInsInsightSeverityChangedAction`

\+ Field `newStatus` was added to object type `DesWorkspaceInsInsightStatusChangedAction`

\+ Field `oldStatus` was added to object type `DesWorkspaceInsInsightStatusChangedAction`

\+ Field `created` was added to object type `DesWorkspaceInsInsightTaskLinkGql`

\+ Field `id` was added to object type `DesWorkspaceInsInsightTaskLinkGql`

\+ Field `newTasks` was added to object type `DesWorkspaceInsInsightTaskLinksChangedAction`

\+ Field `assemblyVariants` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `bomReleases` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `boms` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `componentRevisions` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `components` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `consolidatedBomReleases` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `consolidatedBoms` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `parts` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `projects` was added to object type `DesWorkspaceInsRelatedEntities`

\+ Field `partRequests` was added to object type `DesWorkspaceInsRelatedTasks`

\+ Field `tasks` was added to object type `DesWorkspaceInsRelatedTasks`

\+ Field `errors` was added to object type `DesWorkspaceInsUpdateInsightByIdPayload`

\+ Field `insight` was added to object type `DesWorkspaceInsUpdateInsightByIdPayload`

\+ Field `errors` was added to object type `DesWorkspaceInsUpsertInsightByKeyPayload`

\+ Field `insight` was added to object type `DesWorkspaceInsUpsertInsightByKeyPayload`

\+ Field `timestamp` was added to object type `DesWorkspaceInsUserActionTimestamp`

\+ Field `userId` was added to object type `DesWorkspaceInsUserActionTimestamp`

###### Input / Payload

\+ Input field `linkedEntities` of type `[ID!]` was added to input object type `DesWorkspaceInsInsightFilterInput`

\+ Input field `name` of type `[String!]` was added to input object type `DesWorkspaceInsInsightFilterInput`

\+ Input field `severity` of type `[String!]` was added to input object type `DesWorkspaceInsInsightFilterInput`

\+ Input field `status` of type `[String!]` was added to input object type `DesWorkspaceInsInsightFilterInput`

\+ Input field `type` of type `[String!]` was added to input object type `DesWorkspaceInsInsightFilterInput`

\+ Input field `isAck` of type `Boolean` was added to input object type `DesWorkspaceInsInsightUserActionInput`

\+ Input field `newTaskIds` of type `[ID!]` was added to input object type `DesWorkspaceInsInsightUserActionInput`

\+ Input field `status` of type `String` was added to input object type `DesWorkspaceInsInsightUserActionInput`

\+ Input field `field` of type `String` was added to input object type `DesWorkspaceInsOrderingInput`

\+ Input field `isDesc` of type `Boolean` was added to input object type `DesWorkspaceInsOrderingInput`

\+ Input field `id` of type `ID!` was added to input object type `DesWorkspaceInsUpdateInsightByIdInput`

\+ Input field `userAction` of type `DesWorkspaceInsInsightUserActionInput!` was added to input object type `DesWorkspaceInsUpdateInsightByIdInput`

\+ Input field `insight` of type `DesWorkspaceInsUpsertInsightInput!` was added to input object type `DesWorkspaceInsUpsertInsightByKeyInput`

\+ Input field `insightDedupKey` of type `String!` was added to input object type `DesWorkspaceInsUpsertInsightByKeyInput`

\+ Input field `data` of type `JSON!` was added to input object type `DesWorkspaceInsUpsertInsightInput`

\+ Input field `relatedEntityIds` of type `[ID!]!` was added to input object type `DesWorkspaceInsUpsertInsightInput`

\+ Input field `severity` of type `String!` was added to input object type `DesWorkspaceInsUpsertInsightInput`

\+ Input field `shortData` of type `JSON!` was added to input object type `DesWorkspaceInsUpsertInsightInput`

\+ Input field `status` of type `String` was added to input object type `DesWorkspaceInsUpsertInsightInput`

\+ Input field `type` of type `String!` was added to input object type `DesWorkspaceInsUpsertInsightInput`

##### Supply

###### 🔍 Query

\+ Field `supRefDesignByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supRefDesignByIds`

### 15-Sep-2025

#### ✅ Non-Breaking Changes (90)

##### Supply

###### 🔍 Query

\+ Field `supPartGroupById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supPartGroupById`

\+ Field `supPartGroupByPartId` was added to object type `Query`

\+ Argument `partId: ID!` added to `Query.supPartGroupByPartId`

\+ Field `supPartGroupsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.supPartGroupsByIds`

###### Types

\+ Type `SupPartFamily` was added

Δ `SupPartFamily` object implements `SupPartFamilyEntity` interface

Δ Object type `SupPartFamily` has description '`SupPartFamily` contains the relevant information related to a part family. It exists in a hierarchy of other part families, they can contain children which represent other part families or `partGroups` which represent the leaves of the hierarchy tree.'

\+ Type `SupPartFamilyDocument` was added

Δ Object type `SupPartFamilyDocument` has description '`SupPartFamilyDocument` contains the details for the documentation provided for a Part Family. `url` contains a link to the given document. `updatedAt` is the time we last updated this document.'

\+ Type `SupPartFamilyFeatureMetadata` was added

Δ Object type `SupPartFamilyFeatureMetadata` has description `` `SupPartFamilyFeatureMetadata` contains additional information about a given feature. ``

\+ Type `SupPartFamilyKeyFeature` was added

Δ Object type `SupPartFamilyKeyFeature` has description `` `SupPartFamilyKeyFeature` contains the key details for a Part Family feature. ``

\+ Type `SupPartFamilyTag` was added

Δ Object type `SupPartFamilyTag` has description `` `SupPartFamilyTag` represents additional metadata for a Part Family. ``

\+ Type `SupPartGroup` was added

Δ `SupPartGroup` object implements `SupPartFamilyEntity` interface

Δ Object type `SupPartGroup` has description '`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.'

\+ Type `SupPartFamilyEntity` was added

Δ Object type `SupPartFamilyEntity` has description ``Shared Fields between `SupPartFamily` and `SupPartGroup`.``

\+ Type `SupPartFamilyDocumentType` was added

\+ Enum value `APPLICATION_NOTE` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `BROCHURE` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `DATASHEET` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `FLYER` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `GUIDE` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `MANUAL` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `OTHER` was added to enum `SupPartFamilyDocumentType`

\+ Enum value `REPORT` was added to enum `SupPartFamilyDocumentType`

Δ Object type `SupPartFamilyDocumentType` has description `Valid document types for Part Family documentation.`

\+ Type `SupPartFamilyFeatureValueType` was added

\+ Enum value `ENUMERATION` was added to enum `SupPartFamilyFeatureValueType`

\+ Enum value `RANGE` was added to enum `SupPartFamilyFeatureValueType`

\+ Enum value `SCALAR` was added to enum `SupPartFamilyFeatureValueType`

\+ Enum value `STRING` was added to enum `SupPartFamilyFeatureValueType`

Δ Object type `SupPartFamilyFeatureValueType` has description `Valid types a features value can take.`

###### Arguments

\+ Argument `type: SupPartFamilyDocumentType` added to `SupPartGroup.documents`

###### Fields

\+ Field `applicationIDs` was added to object type `SupPartFamily`

\+ Field `categoryID` was added to object type `SupPartFamily`

\+ Field `children` was added to object type `SupPartFamily`

\+ Field `familyType` was added to object type `SupPartFamily`

\+ Field `id` was added to object type `SupPartFamily`

\+ Field `keyFeatures` was added to object type `SupPartFamily`

\+ Field `manufacturerID` was added to object type `SupPartFamily`

\+ Field `overview` was added to object type `SupPartFamily`

\+ Field `parent` was added to object type `SupPartFamily`

\+ Field `partGroups` was added to object type `SupPartFamily`

\+ Field `siblings` was added to object type `SupPartFamily`

\+ Field `subtitle` was added to object type `SupPartFamily`

\+ Field `tags` was added to object type `SupPartFamily`

\+ Field `title` was added to object type `SupPartFamily`

\+ Field `description` was added to object type `SupPartFamilyDocument`

\+ Field `type` was added to object type `SupPartFamilyDocument`

\+ Field `updatedAt` was added to object type `SupPartFamilyDocument`

\+ Field `url` was added to object type `SupPartFamilyDocument`

\+ Field `name` was added to object type `SupPartFamilyFeatureMetadata`

\+ Field `value` was added to object type `SupPartFamilyFeatureMetadata`

\+ Field `group` was added to object type `SupPartFamilyKeyFeature`

\+ Field `metadata` was added to object type `SupPartFamilyKeyFeature`

\+ Field `name` was added to object type `SupPartFamilyKeyFeature`

\+ Field `units` was added to object type `SupPartFamilyKeyFeature`

\+ Field `value` was added to object type `SupPartFamilyKeyFeature`

\+ Field `valueType` was added to object type `SupPartFamilyKeyFeature`

\+ Field `type` was added to object type `SupPartFamilyTag`

\+ Field `value` was added to object type `SupPartFamilyTag`

\+ Field `applicationIDs` was added to object type `SupPartGroup`

\+ Field `categoryID` was added to object type `SupPartGroup`

\+ Field `documents` was added to object type `SupPartGroup`

\+ Field `id` was added to object type `SupPartGroup`

\+ Field `keyFeatures` was added to object type `SupPartGroup`

\+ Field `manufacturerID` was added to object type `SupPartGroup`

\+ Field `overview` was added to object type `SupPartGroup`

\+ Field `parent` was added to object type `SupPartGroup`

\+ Field `partIDs` was added to object type `SupPartGroup`

\+ Field `referenceDesignIDs` was added to object type `SupPartGroup`

\+ Field `siblings` was added to object type `SupPartGroup`

\+ Field `subtitle` was added to object type `SupPartGroup`

\+ Field `tags` was added to object type `SupPartGroup`

\+ Field `title` was added to object type `SupPartGroup`

Δ Field `applicationIDs` was added to interface `SupPartFamilyEntity`

Δ Field `categoryID` was added to interface `SupPartFamilyEntity`

Δ Field `id` was added to interface `SupPartFamilyEntity`

Δ Field `keyFeatures` was added to interface `SupPartFamilyEntity`

Δ Field `manufacturerID` was added to interface `SupPartFamilyEntity`

Δ Field `overview` was added to interface `SupPartFamilyEntity`

Δ Field `subtitle` was added to interface `SupPartFamilyEntity`

Δ Field `tags` was added to interface `SupPartFamilyEntity`

Δ Field `title` was added to interface `SupPartFamilyEntity`

### 12-Sep-2025

#### 🔴 Breaking Changes (1)

##### Renesas (preview)

###### 🔍 Query

− Field `sftSimSimulation` (deprecated) was removed from object type `Query`

#### ⚠️ Dangerous Changes (2)

##### Platform

###### Fields

− Argument `reason` was removed from `@deprecated`

− Argument `reason` was removed from `@deprecated`

#### ✅ Non-Breaking Changes (10)

##### Platform

###### Fields

Δ Deprecation reason on field `SolSolution.createdById` has changed from `Field plays a technical role for schema stitching purposes.` to `Fields play a technical role for schema stitching purposes.`

Δ Field `SolSolution.esdDocuments` changed type from `[SysEsdDocument]!` to `[SysEsdDocument!]!`

Δ Deprecation reason on field `SolSolution.modifiedById` has changed from `Field plays a technical role for schema stitching purposes.` to `Fields play a technical role for schema stitching purposes.`

Δ Field `SolSolution.sharedWith` changed type from `[DesWorkspaceUser]!` to `[DesWorkspaceUser!]!`

Δ Field `SolSolution.simulations` changed type from `[SftSimSimulation]!` to `[SftSimSimulation!]!`

Δ Field `SolSolution.softwareProjects` changed type from `[SftSoftwareProject]!` to `[SftSoftwareProject!]!`

##### Renesas (preview)

###### Fields

\+ Field `revisions` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `softwareProject` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `deviceConfiguration` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `deviceConfiguration` was added to object type `SftSoftwareProject`

### 09-Sep-2025

#### ✅ Non-Breaking Changes (51)

##### Platform

###### 🔍 Query

\+ Field `solBldScaffoldingStatus` was added to object type `Query`

\+ Argument `jobId: ID!` added to `Query.solBldScaffoldingStatus`

\+ Field `solSolutionsByPage` was added to object type `Query`

\+ Argument `pageNumber: Int!` added to `Query.solSolutionsByPage`

\+ Argument `pageSize: Int!` added to `Query.solSolutionsByPage`

###### ✏️ Mutation

\+ Field `solBldScaffolding` was added to object type `Mutation`

\+ Argument `input: SolBldScaffoldingInput!` added to `Mutation.solBldScaffolding`

###### Types

\+ Type `SolBldScaffoldingPayload` was added

\+ Type `SolBldScaffoldingStatusPayload` was added

\+ Type `SolBldScaffoldingInput` was added

###### Fields

\+ Field `jobId` was added to object type `SolBldScaffoldingPayload`

\+ Field `solutionId` was added to object type `SolBldScaffoldingStatusPayload`

\+ Field `status` was added to object type `SolBldScaffoldingStatusPayload`

\+ Field `simulationIds` was added to object type `SolSolution`

Δ Field `SolSolution.simulationIds` is deprecated

Δ Directive `deprecated` was added to `SolSolution.simulationIds`

Δ Field `SolSolution.createdById` is deprecated

Δ Directive `deprecated` was added to `SolSolution.createdById`

Δ Field `SolSolution.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SolSolution.modifiedById`

###### Input / Payload

\+ Input field `documentFileId` of type `String!` was added to input object type `SolBldScaffoldingInput`

\+ Input field `previewFileId` of type `String` was added to input object type `SolBldScaffoldingInput`

##### Supply

###### Types

\+ Type `SupRefCategoryBucket` was added

\+ Type `SupRefDesignTypeBucket` was added

\+ Type `SupRefEvaluationKit` was added

\+ Type `SupRefDesignType` was added

\+ Enum value `DEMOSTRATION` was added to enum `SupRefDesignType`

\+ Enum value `DEVELOPMENT` was added to enum `SupRefDesignType`

\+ Enum value `EVALUATION` was added to enum `SupRefDesignType`

\+ Enum value `EXPANSION` was added to enum `SupRefDesignType`

\+ Enum value `REFERENCE_DESIGN` was added to enum `SupRefDesignType`

\+ Enum value `STARTER` was added to enum `SupRefDesignType`

\+ Enum value `SYSTEM` was added to enum `SupRefDesignType`

###### Arguments

\+ Argument `size: Int` (with default value) added to `SupRefDesignResultSet.categoryAgg`

\+ Argument `size: Int` (with default value) added to `SupRefDesignResultSet.typeAgg`

###### Fields

\+ Field `categoryId` was added to object type `SupRefCategoryBucket`

\+ Field `count` was added to object type `SupRefCategoryBucket`

\+ Field `count` was added to object type `SupRefDesignTypeBucket`

\+ Field `type` was added to object type `SupRefDesignTypeBucket`

\+ Field `partId` was added to object type `SupRefEvaluationKit`

\+ Field `previewImages` was added to object type `SupRefEvaluationKit`

\+ Field `title` was added to object type `SupRefEvaluationKit`

\+ Field `evaluationKits` was added to object type `SupRefDesign`

\+ Field `type` was added to object type `SupRefDesign`

Δ Field `SupRefDesign.evaluationKitIds` is deprecated

Δ Directive `deprecated` was added to `SupRefDesign.evaluationKitIds`

\+ Field `categoryAgg` was added to object type `SupRefDesignResultSet`

\+ Field `typeAgg` was added to object type `SupRefDesignResultSet`

\+ Field `html` was added to object type `SupRefKeyFeature`

\+ Field `revisionDate` was added to object type `SupRefResource`

###### Input / Payload

\+ Input field `types` of type `[SupRefDesignType!]` was added to input object type `SupRefDesignFilterInput`

### 08-Sep-2025

#### ⚠️ Dangerous Changes (2)

##### Design

###### Types

\+ Enum value `DEVICE_CONFIGURATION` was added to enum `DesContentTypeKind`

\+ Enum value `SIMULATION` was added to enum `DesContentTypeKind`

#### ✅ Non-Breaking Changes (192)

##### Design

###### ✏️ Mutation

\+ Field `desAddFootprintToComponent` was added to object type `Mutation`

\+ Argument `input: DesAddFootprintToComponentInput!` added to `Mutation.desAddFootprintToComponent`

\+ Field `desRemoveFootprintFromComponent` was added to object type `Mutation`

\+ Argument `input: DesRemoveFootprintFromComponentInput!` added to `Mutation.desRemoveFootprintFromComponent`

###### Types

\+ Type `DesAddFootprintToComponentPayload` was added

Δ Object type `DesAddFootprintToComponentPayload` has description `Payload associated with adding a footprint to a component.`

\+ Type `DesRemoveFootprintFromComponentPayload` was added

Δ Object type `DesRemoveFootprintFromComponentPayload` has description `Payload associated with removing a footprint from a component.`

\+ Type `DesAddFootprintToComponentInput` was added

Δ Object type `DesAddFootprintToComponentInput` has description `Input for adding a footprint to a component.`

\+ Type `DesRemoveFootprintFromComponentInput` was added

Δ Object type `DesRemoveFootprintFromComponentInput` has description `Input for removing a footprint from a component.`

###### Fields

\+ Field `errors` was added to object type `DesAddFootprintToComponentPayload`

\+ Field `errors` was added to object type `DesRemoveFootprintFromComponentPayload`

###### Input / Payload

\+ Input field `addAtIndex` of type `Int` was added to input object type `DesAddFootprintToComponentInput`

\+ Input field `componentId` of type `ID!` was added to input object type `DesAddFootprintToComponentInput`

\+ Input field `footprintId` of type `ID!` was added to input object type `DesAddFootprintToComponentInput`

\+ Input field `componentId` of type `ID!` was added to input object type `DesRemoveFootprintFromComponentInput`

\+ Input field `footprintId` of type `ID!` was added to input object type `DesRemoveFootprintFromComponentInput`

##### Platform

###### 🔍 Query

\+ Field `desWorkspaceUserById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desWorkspaceUserById`

\+ Field `desWorkspaceUsersByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.desWorkspaceUsersByIds`

###### Fields

\+ Field `id` was added to object type `DesWorkspaceGroup`

\+ Field `id` was added to object type `DesWorkspaceUser`

\+ Field `createdBy` was added to object type `SolSolution`

\+ Field `esdDocuments` was added to object type `SolSolution`

\+ Field `modifiedBy` was added to object type `SolSolution`

\+ Field `sharedWith` was added to object type `SolSolution`

\+ Field `simulations` was added to object type `SolSolution`

\+ Field `softwareProjects` was added to object type `SolSolution`

##### Renesas (preview)

###### 🔍 Query

\+ Field `sftDevCfgDeviceConfigurationRevisionById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftDevCfgDeviceConfigurationRevisionById`

\+ Field `sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId`

\+ Field `sftDevCfgDeviceConfigurationRevisionsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sftDevCfgDeviceConfigurationRevisionsByIds`

\+ Field `sftSimSimulation` was added to object type `Query`

Δ Field `Query.sftSimSimulation` is deprecated

Δ Directive `deprecated` was added to `Query.sftSimSimulation`

\+ Field `sftSimSimulationById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftSimSimulationById`

\+ Field `sftSimSimulations` was added to object type `Query`

\+ Field `sftSimSimulationsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sftSimSimulationsByIds`

###### ✏️ Mutation

\+ Field `sftDevCfgLinkDeviceConfigurationRevisionToHardwareProject` was added to object type `Mutation`

\+ Argument `input: SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectInput!` added to `Mutation.sftDevCfgLinkDeviceConfigurationRevisionToHardwareProject`

\+ Field `sftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProject` was added to object type `Mutation`

\+ Argument `input: SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectInput!` added to `Mutation.sftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProject`

\+ Field `sftSimSimulationCreate` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationCreateInput!` added to `Mutation.sftSimSimulationCreate`

\+ Field `sftSimSimulationCreateCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationCreatePropertiesInput!` added to `Mutation.sftSimSimulationCreateCustomProperties`

\+ Field `sftSimSimulationDelete` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationDeleteInput!` added to `Mutation.sftSimSimulationDelete`

\+ Field `sftSimSimulationDeleteCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationDeletePropertiesInput!` added to `Mutation.sftSimSimulationDeleteCustomProperties`

\+ Field `sftSimSimulationUpdate` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationUpdateInput!` added to `Mutation.sftSimSimulationUpdate`

\+ Field `sftSimSimulationUpdateCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSimSimulationUpdatePropertiesInput!` added to `Mutation.sftSimSimulationUpdateCustomProperties`

###### Types

\+ Type `SftDevCfgDeviceConfigurationRevision` was added

\+ Type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectPayload` was added

\+ Type `SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectPayload` was added

\+ Type `SftSimSimulation` was added

\+ Type `SftSimSimulationCreatePayload` was added

\+ Type `SftSimSimulationCreatePropertiesPayload` was added

\+ Type `SftSimSimulationCustomProperty` was added

\+ Type `SftSimSimulationDeletePayload` was added

\+ Type `SftSimSimulationDeletePropertiesPayload` was added

\+ Type `SftSimSimulationUpdatePayload` was added

\+ Type `SftSimSimulationUpdatePropertiesPayload` was added

\+ Type `SftSimSimulationRepositoryType` was added

\+ Enum value `EXTERNAL` was added to enum `SftSimSimulationRepositoryType`

\+ Enum value `INTERNAL` was added to enum `SftSimSimulationRepositoryType`

\+ Type `SftSimSimulationType` was added

\+ Enum value `MATLAB` was added to enum `SftSimSimulationType`

\+ Enum value `UNKNOWN` was added to enum `SftSimSimulationType`

\+ Type `SftSoftwareRepositoryType` was added

\+ Enum value `EXTERNAL` was added to enum `SftSoftwareRepositoryType`

\+ Enum value `INTERNAL` was added to enum `SftSoftwareRepositoryType`

\+ Type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectInput` was added

\+ Type `SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectInput` was added

\+ Type `SftSimSimulationCreateInput` was added

\+ Type `SftSimSimulationCreatePropertiesInput` was added

\+ Type `SftSimSimulationCustomPropertyInput` was added

\+ Type `SftSimSimulationDeleteInput` was added

\+ Type `SftSimSimulationDeletePropertiesInput` was added

\+ Type `SftSimSimulationUpdateInput` was added

\+ Type `SftSimSimulationUpdatePropertiesInput` was added

###### Fields

\+ Field `commitId` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `createdAt` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `createdBy` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `createdById` was added to object type `SftDevCfgDeviceConfigurationRevision`

Δ Field `SftDevCfgDeviceConfigurationRevision.createdById` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfigurationRevision.createdById`

\+ Field `description` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `deviceConfigurationId` was added to object type `SftDevCfgDeviceConfigurationRevision`

Δ Field `SftDevCfgDeviceConfigurationRevision.deviceConfigurationId` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfigurationRevision.deviceConfigurationId`

\+ Field `hardwareProjectId` was added to object type `SftDevCfgDeviceConfigurationRevision`

Δ Field `SftDevCfgDeviceConfigurationRevision.hardwareProjectId` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfigurationRevision.hardwareProjectId`

\+ Field `id` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `modifiedAt` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `modifiedBy` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `modifiedById` was added to object type `SftDevCfgDeviceConfigurationRevision`

Δ Field `SftDevCfgDeviceConfigurationRevision.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfigurationRevision.modifiedById`

\+ Field `name` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `url` was added to object type `SftDevCfgDeviceConfigurationRevision`

\+ Field `isSuccess` was added to object type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectPayload`

\+ Field `isSuccess` was added to object type `SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectPayload`

\+ Field `createdAt` was added to object type `SftSimSimulation`

\+ Field `createdBy` was added to object type `SftSimSimulation`

\+ Field `createdById` was added to object type `SftSimSimulation`

Δ Field `SftSimSimulation.createdById` is deprecated

Δ Directive `deprecated` was added to `SftSimSimulation.createdById`

\+ Field `customProperties` was added to object type `SftSimSimulation`

\+ Field `description` was added to object type `SftSimSimulation`

\+ Field `folderId` was added to object type `SftSimSimulation`

\+ Field `id` was added to object type `SftSimSimulation`

\+ Field `modifiedAt` was added to object type `SftSimSimulation`

\+ Field `modifiedBy` was added to object type `SftSimSimulation`

\+ Field `modifiedById` was added to object type `SftSimSimulation`

Δ Field `SftSimSimulation.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SftSimSimulation.modifiedById`

\+ Field `name` was added to object type `SftSimSimulation`

\+ Field `previewUrl` was added to object type `SftSimSimulation`

\+ Field `repositoryUrl` was added to object type `SftSimSimulation`

\+ Field `type` was added to object type `SftSimSimulation`

\+ Field `data` was added to object type `SftSimSimulationCreatePayload`

\+ Field `customProperties` was added to object type `SftSimSimulationCreatePropertiesPayload`

\+ Field `id` was added to object type `SftSimSimulationCreatePropertiesPayload`

\+ Field `key` was added to object type `SftSimSimulationCustomProperty`

\+ Field `value` was added to object type `SftSimSimulationCustomProperty`

\+ Field `isDeleted` was added to object type `SftSimSimulationDeletePayload`

\+ Field `deletedParametersCount` was added to object type `SftSimSimulationDeletePropertiesPayload`

\+ Field `id` was added to object type `SftSimSimulationDeletePropertiesPayload`

\+ Field `data` was added to object type `SftSimSimulationUpdatePayload`

\+ Field `customProperties` was added to object type `SftSimSimulationUpdatePropertiesPayload`

\+ Field `id` was added to object type `SftSimSimulationUpdatePropertiesPayload`

\+ Field `createdBy` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `modifiedBy` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `revisionIds` was added to object type `SftDevCfgDeviceConfiguration`

Δ Field `SftDevCfgDeviceConfiguration.revisionIds` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfiguration.revisionIds`

Δ Field `SftDevCfgDeviceConfiguration.createdById` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfiguration.createdById`

Δ Field `SftDevCfgDeviceConfiguration.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SftDevCfgDeviceConfiguration.modifiedById`

\+ Field `createdBy` was added to object type `SftSoftwareProject`

\+ Field `modifiedBy` was added to object type `SftSoftwareProject`

Δ Field `SftSoftwareProject.createdById` is deprecated

Δ Directive `deprecated` was added to `SftSoftwareProject.createdById`

Δ Field `SftSoftwareProject.deviceConfigurationId` is deprecated

Δ Directive `deprecated` was added to `SftSoftwareProject.deviceConfigurationId`

Δ Field `SftSoftwareProject.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SftSoftwareProject.modifiedById`

###### Input / Payload

\+ Input field `deviceConfigurationId` of type `ID!` was added to input object type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectInput`

\+ Input field `hardwareProjectId` of type `ID!` was added to input object type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectInput`

\+ Input field `revisionId` of type `ID!` was added to input object type `SftDevCfgLinkDeviceConfigurationRevisionToHardwareProjectInput`

\+ Input field `deviceConfigurationId` of type `ID!` was added to input object type `SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectInput`

\+ Input field `hardwareProjectId` of type `ID!` was added to input object type `SftDevCfgUnlinkDeviceConfigurationRevisionFromHardwareProjectInput`

\+ Input field `customProperties` of type `[SftSimSimulationCustomPropertyInput!]` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `description` of type `String` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `folderId` of type `String!` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `name` of type `String!` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `repositoryType` of type `SftSimSimulationRepositoryType` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `type` of type `SftSimSimulationType!` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `url` of type `String` was added to input object type `SftSimSimulationCreateInput`

\+ Input field `customProperties` of type `[SftSimSimulationCustomPropertyInput!]!` was added to input object type `SftSimSimulationCreatePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSimSimulationCreatePropertiesInput`

\+ Input field `key` of type `String!` was added to input object type `SftSimSimulationCustomPropertyInput`

\+ Input field `value` of type `String` was added to input object type `SftSimSimulationCustomPropertyInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSimSimulationDeleteInput`

\+ Input field `customPropertyNames` of type `[String!]!` was added to input object type `SftSimSimulationDeletePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSimSimulationDeletePropertiesInput`

\+ Input field `folderId` of type `String` was added to input object type `SftSimSimulationUpdateInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSimSimulationUpdateInput`

\+ Input field `name` of type `String` was added to input object type `SftSimSimulationUpdateInput`

\+ Input field `url` of type `String` was added to input object type `SftSimSimulationUpdateInput`

\+ Input field `customProperties` of type `[SftSimSimulationCustomPropertyInput!]!` was added to input object type `SftSimSimulationUpdatePropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSimSimulationUpdatePropertiesInput`

\+ Input field `repositoryType` of type `SftSoftwareRepositoryType` was added to input object type `SftSoftwareCreateProjectInput`

Δ Input field `SftSoftwareCreateProjectInput.url` changed type from `String!` to `String`

##### System Design

###### Fields

\+ Field `createdBy` was added to object type `SysEsdDocument`

\+ Field `modifiedBy` was added to object type `SysEsdDocument`

Δ Field `SysEsdDocument.createdById` is deprecated

Δ Directive `deprecated` was added to `SysEsdDocument.createdById`

Δ Field `SysEsdDocument.modifiedById` is deprecated

Δ Directive `deprecated` was added to `SysEsdDocument.modifiedById`

### 20-Aug-2025

#### 🔴 Breaking Changes (4)

##### Common

###### Types

− Type `Any` was removed

− Type `Map` was removed

− Type `Time` was removed

##### Platform

###### 🔍 Query

− Field `gloNtfHealth` (deprecated) was removed from object type `Query`

### 18-Aug-2025

#### 🔴 Breaking Changes (10)

##### Common

###### 🔍 Query

− Field `nodes` was removed from object type `Query`

###### Types

− Type `MultiplierPath` was removed

###### Directives

− Directive `delegate` was removed

− Directive `skipWhenNull` was removed

− Directive `source` was removed

##### Platform

###### Fields

− Field `esdDocuments` was removed from object type `SolSolution`

− Field `softwareProjects` was removed from object type `SolSolution`

Δ Field `SolSolution.hardwareProjects` changed type from `[DesProject!]!` to `[DesProject]!`

##### Renesas (preview)

###### Fields

− Field `softwareProject` was removed from object type `SftDevCfgDeviceConfiguration`

− Field `deviceConfiguration` was removed from object type `SftSoftwareProject`

#### ⚠️ Dangerous Changes (1)

##### Design

###### Arguments

\+ Argument `isDirectLink: Boolean!` (with default value) added to `DesProject.previewUrl`

#### ✅ Non-Breaking Changes (27)

##### Common

###### Types

\+ Type `Any` was added

\+ Type `Map` was added

\+ Type `Time` was added

##### Design

###### ✏️ Mutation

\+ Field `desUpdateComponentSymbol` was added to object type `Mutation`

\+ Argument `input: DesUpdateComponentSymbolInput!` added to `Mutation.desUpdateComponentSymbol`

###### Types

\+ Type `DesComponentType` was added

Δ `DesComponentType` object implements `Node` interface

Δ Object type `DesComponentType` has description `Represents a component type classification in the component library.`

\+ Type `DesUpdateComponentSymbolPayload` was added

Δ Object type `DesUpdateComponentSymbolPayload` has description `Payload associated with updating the symbol of a component.`

\+ Type `DesUpdateComponentSymbolInput` was added

Δ Object type `DesUpdateComponentSymbolInput` has description `Input for updating the symbol of a component.`

###### Fields

\+ Field `createdAt` was added to object type `DesComponentType`

\+ Field `createdBy` was added to object type `DesComponentType`

\+ Field `id` was added to object type `DesComponentType`

\+ Field `name` was added to object type `DesComponentType`

\+ Field `parent` was added to object type `DesComponentType`

\+ Field `updatedAt` was added to object type `DesComponentType`

\+ Field `updatedBy` was added to object type `DesComponentType`

\+ Field `errors` was added to object type `DesUpdateComponentSymbolPayload`

\+ Field `componentType` was added to object type `DesComponent`

###### Input / Payload

\+ Input field `componentId` of type `ID!` was added to input object type `DesUpdateComponentSymbolInput`

\+ Input field `symbolId` of type `ID` was added to input object type `DesUpdateComponentSymbolInput`

##### Platform

###### 🔍 Query

\+ Field `gloNtfHealth` was added to object type `Query`

Δ Field `Query.gloNtfHealth` is deprecated

Δ Directive `deprecated` was added to `Query.gloNtfHealth`

###### Types

Δ Object type `ApplyPolicy` has description `Defines when a policy shall be executed.`

### 30-Jul-2025

#### ✅ Non-Breaking Changes (3)

##### Platform

###### Input / Payload

Δ Directive `deprecated` was added to input field `previewUrl` in input object `SolCreateSolutionInput`

Δ Directive `deprecated` was added to input field `previewUrl` in input object `SolUpdateSolutionInput`

##### Renesas (preview)

###### Fields

\+ Field `previewUrl` was added to object type `SftSoftwareProject`

### 29-Jul-2025

#### ✅ Non-Breaking Changes (12)

##### Design

###### Fields

Δ Field `DesProject.tasks` changed type from `[DesTask!]` to `[DesTask!]!`

Δ Field `DesWorkspace.tasks` changed type from `[DesTask!]` to `[DesTask!]!`

##### Platform

###### ✏️ Mutation

\+ Field `solUpdateSolution` was added to object type `Mutation`

\+ Argument `input: SolUpdateSolutionInput!` added to `Mutation.solUpdateSolution`

###### Types

\+ Type `SolUpdateSolutionPayload` was added

\+ Type `SolUpdateSolutionInput` was added

###### Fields

\+ Field `data` was added to object type `SolUpdateSolutionPayload`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `SolUpdateSolutionInput`

\+ Input field `name` of type `String` was added to input object type `SolUpdateSolutionInput`

\+ Input field `previewUrl` of type `String` was added to input object type `SolUpdateSolutionInput`

\+ Input field `description` of type `String` was added to input object type `SolUpdateSolutionInput`

Δ Input field `SolCreateSolutionInput.previewUrl` changed type from `String!` to `String`

### 23-Jul-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

Δ Field `SolSolution.description` changed type from `String!` to `String`

#### ⚠️ Dangerous Changes (1)

##### Supply

###### Arguments

\+ Argument `type: String` added to `SupRefDesign.designFiles`

#### ✅ Non-Breaking Changes (16)

##### Design

###### ✏️ Mutation

\+ Field `desUpdateSymbol` was added to object type `Mutation`

\+ Argument `input: DesUpdateSymbolInput!` added to `Mutation.desUpdateSymbol`

###### Types

\+ Type `DesUpdateSymbolPayload` was added

Δ Object type `DesUpdateSymbolPayload` has description `Payload of updating a symbol.`

\+ Type `DesUpdateSymbolInput` was added

Δ Object type `DesUpdateSymbolInput` has description `Input for updating a symbol.`

###### Fields

\+ Field `errors` was added to object type `DesUpdateSymbolPayload`

\+ Field `id` was added to object type `DesUpdateSymbolPayload`

###### Input / Payload

\+ Input field `symbolId` of type `ID!` was added to input object type `DesUpdateSymbolInput`

\+ Input field `comment` of type `String` was added to input object type `DesUpdateSymbolInput`

\+ Input field `description` of type `String` was added to input object type `DesUpdateSymbolInput`

\+ Input field `releaseNote` of type `String` was added to input object type `DesUpdateSymbolInput`

##### Platform

###### Input / Payload

Δ Input field `SolCreateSolutionInput.description` changed type from `String!` to `String`

##### Renesas (preview)

###### Fields

\+ Field `description` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `description` of type `String` was added to input object type `SftSoftwareCreateProjectInput`

##### Supply

###### Fields

\+ Field `refDesignFileId` was added to object type `SupRefDesignFile`

### 22-Jul-2025

#### 🔴 Breaking Changes (9)

##### Platform

###### Fields

− Field `createdBy` was removed from object type `SolSolution`

− Field `modifiedBy` was removed from object type `SolSolution`

− Field `sharedWith` was removed from object type `SolSolution`

##### Renesas (preview)

###### Fields

− Field `createdBy` was removed from object type `SftDevCfgDeviceConfiguration`

− Field `modifiedBy` was removed from object type `SftDevCfgDeviceConfiguration`

− Field `createdBy` was removed from object type `SftSoftwareProject`

− Field `modifiedBy` was removed from object type `SftSoftwareProject`

##### System Design

###### Fields

− Field `createdBy` was removed from object type `SysEsdDocument`

− Field `modifiedBy` was removed from object type `SysEsdDocument`

#### ✅ Non-Breaking Changes (11)

##### Platform

###### Fields

\+ Field `createdById` was added to object type `SolSolution`

\+ Field `modifiedById` was added to object type `SolSolution`

\+ Field `sharedWithIds` was added to object type `SolSolution`

Δ Field `SolSolution.sharedWithIds` is deprecated

Δ Directive `deprecated` was added to `SolSolution.sharedWithIds`

##### Renesas (preview)

###### Fields

\+ Field `createdById` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `modifiedById` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `createdById` was added to object type `SftSoftwareProject`

\+ Field `modifiedById` was added to object type `SftSoftwareProject`

##### System Design

###### Fields

\+ Field `createdById` was added to object type `SysEsdDocument`

\+ Field `modifiedById` was added to object type `SysEsdDocument`

### 21-Jul-2025

#### ✅ Non-Breaking Changes (1)

##### Design

###### Fields

\+ Field `folderId` was added to object type `DesFolder`

### 18-Jul-2025

#### ✅ Non-Breaking Changes (48)

##### Common

###### Directives

\+ Directive `skipWhenNull` was added

Δ Directive `skipWhenNull` added repeatable.

Δ Location `FIELD_DEFINITION` was added to directive `skipWhenNull`

Δ Argument `field` was added to directive `skipWhenNull`

##### Renesas (preview)

###### 🔍 Query

\+ Field `sftDevCfgDeviceConfigurationById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftDevCfgDeviceConfigurationById`

\+ Field `sftDevCfgDeviceConfigurations` was added to object type `Query`

\+ Field `sftDevCfgDeviceConfigurationsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sftDevCfgDeviceConfigurationsByIds`

###### ✏️ Mutation

\+ Field `sftDevCfgCreateDeviceConfiguration` was added to object type `Mutation`

\+ Argument `input: SftDevCfgCreateDeviceConfigurationInput!` added to `Mutation.sftDevCfgCreateDeviceConfiguration`

\+ Field `sftDevCfgDeleteDeviceConfiguration` was added to object type `Mutation`

\+ Argument `input: SftDevCfgDeleteDeviceConfigurationInput!` added to `Mutation.sftDevCfgDeleteDeviceConfiguration`

\+ Field `sftDevCfgLinkDeviceConfigurationToSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SftDevCfgLinkDeviceConfigurationToSoftwareProjectInput!` added to `Mutation.sftDevCfgLinkDeviceConfigurationToSoftwareProject`

\+ Field `sftDevCfgUnlinkDeviceConfigurationFromSoftwareProject` was added to object type `Mutation`

\+ Argument `input: SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectInput!` added to `Mutation.sftDevCfgUnlinkDeviceConfigurationFromSoftwareProject`

###### Types

\+ Type `SftDevCfgCreateDeviceConfigurationPayload` was added

\+ Type `SftDevCfgDeleteDeviceConfigurationPayload` was added

\+ Type `SftDevCfgDeviceConfiguration` was added

\+ Type `SftDevCfgLinkDeviceConfigurationToSoftwareProjectPayload` was added

\+ Type `SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectPayload` was added

\+ Type `SftDevCfgCreateDeviceConfigurationInput` was added

\+ Type `SftDevCfgDeleteDeviceConfigurationInput` was added

\+ Type `SftDevCfgLinkDeviceConfigurationToSoftwareProjectInput` was added

\+ Type `SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectInput` was added

###### Fields

\+ Field `data` was added to object type `SftDevCfgCreateDeviceConfigurationPayload`

\+ Field `isDeleted` was added to object type `SftDevCfgDeleteDeviceConfigurationPayload`

\+ Field `createdAt` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `createdBy` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `folderId` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `id` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `modifiedAt` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `modifiedBy` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `name` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `softwareProject` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `softwareProjectId` was added to object type `SftDevCfgDeviceConfiguration`

\+ Field `isSuccess` was added to object type `SftDevCfgLinkDeviceConfigurationToSoftwareProjectPayload`

\+ Field `isSuccess` was added to object type `SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectPayload`

\+ Field `deviceConfiguration` was added to object type `SftSoftwareProject`

\+ Field `deviceConfigurationId` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SftDevCfgCreateDeviceConfigurationInput`

\+ Input field `folderId` of type `String!` was added to input object type `SftDevCfgCreateDeviceConfigurationInput`

\+ Input field `id` of type `ID!` was added to input object type `SftDevCfgDeleteDeviceConfigurationInput`

\+ Input field `deviceConfigurationId` of type `ID!` was added to input object type `SftDevCfgLinkDeviceConfigurationToSoftwareProjectInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SftDevCfgLinkDeviceConfigurationToSoftwareProjectInput`

\+ Input field `deviceConfigurationId` of type `ID!` was added to input object type `SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectInput`

\+ Input field `softwareProjectId` of type `ID!` was added to input object type `SftDevCfgUnlinkDeviceConfigurationFromSoftwareProjectInput`

### 17-Jul-2025

#### ✅ Non-Breaking Changes (25)

##### Design

###### ✏️ Mutation

\+ Field `desCreateFootprint` was added to object type `Mutation`

\+ Argument `input: DesCreateFootprintInput!` added to `Mutation.desCreateFootprint`

###### Types

\+ Type `DesCreateFootprintPayload` was added

Δ Object type `DesCreateFootprintPayload` has description `Payload associated with creating footprint.`

\+ Type `DesCreateFootprintFileInput` was added

Δ Object type `DesCreateFootprintFileInput` has description `Input for creating a footprint file.`

\+ Type `DesCreateFootprintInput` was added

Δ Object type `DesCreateFootprintInput` has description `Input for creating a footprint.`

###### Fields

\+ Field `errors` was added to object type `DesCreateFootprintPayload`

\+ Field `footprintId` was added to object type `DesCreateFootprintPayload`

Δ Field `DesLayer.copperArea` is deprecated

Δ Directive `deprecated` was added to `DesLayer.copperArea`

Δ Field `DesLayer.copperRatio` is deprecated

Δ Directive `deprecated` was added to `DesLayer.copperRatio`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DesCreateFootprintFileInput`

\+ Input field `relativePath` of type `String!` was added to input object type `DesCreateFootprintFileInput`

\+ Input field `workspaceUrl` of type `String` was added to input object type `DesCreateFootprintInput`

\+ Input field `folderId` of type `ID!` was added to input object type `DesCreateFootprintInput`

\+ Input field `name` of type `String` was added to input object type `DesCreateFootprintInput`

\+ Input field `files` of type `[DesCreateFootprintFileInput!]!` was added to input object type `DesCreateFootprintInput`

\+ Input field `revisionNamingSchemeId` of type `ID` was added to input object type `DesCreateFootprintInput`

\+ Input field `lifeCycleDefinitionId` of type `ID` was added to input object type `DesCreateFootprintInput`

\+ Input field `comment` of type `String` was added to input object type `DesCreateFootprintInput`

\+ Input field `description` of type `String` was added to input object type `DesCreateFootprintInput`

\+ Input field `parameters` of type `[DesRevisionParameterInput!]` was added to input object type `DesCreateFootprintInput`

### 16-Jul-2025

#### ✅ Non-Breaking Changes (129)

##### Platform

###### Fields

Δ Field `SolSolution.esdDocumentIds` is deprecated

Δ Directive `deprecated` was added to `SolSolution.esdDocumentIds`

Δ Field `SolSolution.hardwareProjectIds` is deprecated

Δ Directive `deprecated` was added to `SolSolution.hardwareProjectIds`

Δ Field `SolSolution.softwareProjectIds` is deprecated

Δ Directive `deprecated` was added to `SolSolution.softwareProjectIds`

##### Supply

###### 🔍 Query

\+ Field `supRefDesignById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.supRefDesignById`

\+ Field `supRefDesignByName` was added to object type `Query`

\+ Argument `name: String!` added to `Query.supRefDesignByName`

\+ Field `supRefDesigns` was added to object type `Query`

\+ Argument `q: String!` added to `Query.supRefDesigns`

\+ Argument `filter: SupRefDesignFilterInput` added to `Query.supRefDesigns`

\+ Argument `start: Int!` (with default value) added to `Query.supRefDesigns`

\+ Argument `limit: Int!` (with default value) added to `Query.supRefDesigns`

\+ Field `supRefParts` was added to object type `Query`

\+ Argument `refDesignId: ID!` added to `Query.supRefParts`

\+ Argument `designators: [String!]` added to `Query.supRefParts`

###### Types

\+ Type `SupDocument` was added

\+ Type `SupImage` was added

\+ Type `SupRefApplicationBucket` was added

\+ Type `SupRefDesign` was added

Δ Object type `SupRefDesign` has description `A reference design model aggregates the relevant documents, files and parts.`

\+ Type `SupRefDesignFile` was added

Δ Object type `SupRefDesignFile` has description `Represents a design file belonging to a reference design.`

\+ Type `SupRefDesignNote` was added

Δ Object type `SupRefDesignNote` has description `Represents a note attached to a reference design file.`

\+ Type `SupRefDesignResultSet` was added

Δ Object type `SupRefDesignResultSet` has description `Reference designs with pagination, aggregation information.`

\+ Type `SupRefFaq` was added

Δ Object type `SupRefFaq` has description `Represents a frequently asked question for a reference design.`

\+ Type `SupRefKeyFeature` was added

Δ Object type `SupRefKeyFeature` has description `Represents a key feature of a reference design.`

\+ Type `SupRefPart` was added

\+ Type `SupRefPoint2D` was added

Δ Object type `SupRefPoint2D` has description `Represents a 2D point for a file note.`

\+ Type `SupRefPublisherBucket` was added

\+ Type `SupRefResource` was added

Δ Object type `SupRefResource` has description `Represents a resource related to a reference design.`

\+ Type `SupRefTag` was added

Δ Object type `SupRefTag` has description `Represents a tag for categorizing a reference design.`

\+ Type `SupRefTagBucket` was added

\+ Type `SupRefPartType` was added

\+ Enum value `PRIMARY` was added to enum `SupRefPartType`

\+ Enum value `KEY` was added to enum `SupRefPartType`

\+ Enum value `OTHER` was added to enum `SupRefPartType`

\+ Type `SupRefDesignFilterInput` was added

###### Arguments

\+ Argument `designators: [String!]` added to `SupRefDesign.parts`

\+ Argument `type: SupRefPartType` added to `SupRefDesign.parts`

\+ Argument `size: Int` (with default value) added to `SupRefDesignResultSet.applicationAgg`

\+ Argument `size: Int` (with default value) added to `SupRefDesignResultSet.publisherAgg`

\+ Argument `size: Int` (with default value) added to `SupRefDesignResultSet.tagAgg`

###### Fields

\+ Field `createdAt` was added to object type `SupDocument`

\+ Field `creditString` was added to object type `SupDocument`

\+ Field `creditUrl` was added to object type `SupDocument`

\+ Field `mimeType` was added to object type `SupDocument`

\+ Field `name` was added to object type `SupDocument`

\+ Field `pageCount` was added to object type `SupDocument`

\+ Field `url` was added to object type `SupDocument`

\+ Field `creditString` was added to object type `SupImage`

\+ Field `creditUrl` was added to object type `SupImage`

\+ Field `url` was added to object type `SupImage`

\+ Field `applicationId` was added to object type `SupRefApplicationBucket`

\+ Field `count` was added to object type `SupRefApplicationBucket`

\+ Field `applicationIds` was added to object type `SupRefDesign`

\+ Field `bomId` was added to object type `SupRefDesign`

\+ Field `createdAt` was added to object type `SupRefDesign`

\+ Field `description` was added to object type `SupRefDesign`

\+ Field `designFiles` was added to object type `SupRefDesign`

\+ Field `documentations` was added to object type `SupRefDesign`

\+ Field `evaluationKitIds` was added to object type `SupRefDesign`

\+ Field `faqs` was added to object type `SupRefDesign`

\+ Field `hasEvalBoard` was added to object type `SupRefDesign`

\+ Field `id` was added to object type `SupRefDesign`

\+ Field `isVerified` was added to object type `SupRefDesign`

\+ Field `keyFeatures` was added to object type `SupRefDesign`

\+ Field `parts` was added to object type `SupRefDesign`

\+ Field `previewImages` was added to object type `SupRefDesign`

\+ Field `publisherId` was added to object type `SupRefDesign`

\+ Field `softwares` was added to object type `SupRefDesign`

\+ Field `sourceUrl` was added to object type `SupRefDesign`

\+ Field `stableName` was added to object type `SupRefDesign`

\+ Field `subtitle` was added to object type `SupRefDesign`

\+ Field `tags` was added to object type `SupRefDesign`

\+ Field `title` was added to object type `SupRefDesign`

\+ Field `updatedAt` was added to object type `SupRefDesign`

\+ Field `extension` was added to object type `SupRefDesignFile`

\+ Field `name` was added to object type `SupRefDesignFile`

\+ Field `notes` was added to object type `SupRefDesignFile`

\+ Field `type` was added to object type `SupRefDesignFile`

\+ Field `url` was added to object type `SupRefDesignFile`

\+ Field `attachment` was added to object type `SupRefDesignNote`

\+ Field `description` was added to object type `SupRefDesignNote`

\+ Field `objectId` was added to object type `SupRefDesignNote`

\+ Field `points` was added to object type `SupRefDesignNote`

\+ Field `title` was added to object type `SupRefDesignNote`

\+ Field `applicationAgg` was added to object type `SupRefDesignResultSet`

\+ Field `hits` was added to object type `SupRefDesignResultSet`

\+ Field `publisherAgg` was added to object type `SupRefDesignResultSet`

\+ Field `results` was added to object type `SupRefDesignResultSet`

\+ Field `tagAgg` was added to object type `SupRefDesignResultSet`

\+ Field `answer` was added to object type `SupRefFaq`

\+ Field `question` was added to object type `SupRefFaq`

\+ Field `description` was added to object type `SupRefKeyFeature`

\+ Field `name` was added to object type `SupRefKeyFeature`

\+ Field `designators` was added to object type `SupRefPart`

\+ Field `partId` was added to object type `SupRefPart`

\+ Field `type` was added to object type `SupRefPart`

\+ Field `type` was added to object type `SupRefPoint2D`

\+ Field `x` was added to object type `SupRefPoint2D`

\+ Field `y` was added to object type `SupRefPoint2D`

\+ Field `count` was added to object type `SupRefPublisherBucket`

\+ Field `publisherId` was added to object type `SupRefPublisherBucket`

\+ Field `description` was added to object type `SupRefResource`

\+ Field `downloadText` was added to object type `SupRefResource`

\+ Field `downloadUrl` was added to object type `SupRefResource`

\+ Field `note` was added to object type `SupRefResource`

\+ Field `otherResources` was added to object type `SupRefResource`

\+ Field `title` was added to object type `SupRefResource`

\+ Field `category` was added to object type `SupRefTag`

\+ Field `value` was added to object type `SupRefTag`

\+ Field `count` was added to object type `SupRefTagBucket`

\+ Field `name` was added to object type `SupRefTagBucket`

###### Input / Payload

\+ Input field `isVerified` of type `Boolean` was added to input object type `SupRefDesignFilterInput`

\+ Input field `hasEvalBoard` of type `Boolean` was added to input object type `SupRefDesignFilterInput`

\+ Input field `applicationIds` of type `[String!]` was added to input object type `SupRefDesignFilterInput`

\+ Input field `categoryIds` of type `[String!]` was added to input object type `SupRefDesignFilterInput`

\+ Input field `publisherIds` of type `[String!]` was added to input object type `SupRefDesignFilterInput`

\+ Input field `tags` of type `[String!]` was added to input object type `SupRefDesignFilterInput`

### 14-Jul-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

− Field `lastModified` was removed from object type `SolSolution`

#### ✅ Non-Breaking Changes (15)

##### Platform

###### ✏️ Mutation

\+ Field `solLinkItemsToSolution` was added to object type `Mutation`

\+ Argument `input: SolLinkItemsToSolutionInput!` added to `Mutation.solLinkItemsToSolution`

###### Types

\+ Type `SolLinkItemsToSolutionPayload` was added

\+ Type `SolLinkItemsToSolutionInput` was added

###### Fields

\+ Field `isSuccess` was added to object type `SolLinkItemsToSolutionPayload`

\+ Field `createdAt` was added to object type `SolSolution`

\+ Field `createdBy` was added to object type `SolSolution`

\+ Field `modifiedAt` was added to object type `SolSolution`

\+ Field `modifiedBy` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `solutionId` of type `ID!` was added to input object type `SolLinkItemsToSolutionInput`

\+ Input field `itemIds` of type `[ID!]!` was added to input object type `SolLinkItemsToSolutionInput`

##### Renesas (preview)

###### Fields

\+ Field `createdAt` was added to object type `SftSoftwareProject`

\+ Field `createdBy` was added to object type `SftSoftwareProject`

\+ Field `modifiedAt` was added to object type `SftSoftwareProject`

\+ Field `modifiedBy` was added to object type `SftSoftwareProject`

### 11-Jul-2025

#### ✅ Non-Breaking Changes (4)

##### System Design

###### Fields

\+ Field `createdAt` was added to object type `SysEsdDocument`

\+ Field `createdBy` was added to object type `SysEsdDocument`

\+ Field `modifiedAt` was added to object type `SysEsdDocument`

\+ Field `modifiedBy` was added to object type `SysEsdDocument`

### 09-Jul-2025

#### 🔴 Breaking Changes (1)

##### System Design

###### 🔍 Query

Δ Type for argument `id` on field `Query.sysEsdDocumentById` changed from `String!` to `ID!`

### 08-Jul-2025

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Fields

\+ Field `esdDocuments` was added to object type `SolSolution`

### 07-Jul-2025

#### ⚠️ Dangerous Changes (2)

##### Platform

###### Arguments

\+ Argument `filter: DesProjectGuestFilterInput` added to `DesWorkspaceTeam.projectGuests`

\+ Argument `filter: DesWorkspaceUserFilterInput` added to `DesWorkspaceTeam.workspaceUsers`

#### ✅ Non-Breaking Changes (46)

##### Platform

###### Types

\+ Type `DesProjectGuestFilterInput` was added

Δ Object type `DesProjectGuestFilterInput` has description `Specifies the filtering criteria for the project guest list.`

\+ Type `DesWorkspaceUserFilterInput` was added

Δ Object type `DesWorkspaceUserFilterInput` has description `Specifies the filtering criteria for the workspace user list.`

###### Arguments

\+ Argument `size: DesWorkspaceUserProfilePictureSize!` (with default value) added to `DesProjectGuest.profilePicture`

###### Fields

\+ Field `displayName` was added to object type `DesProjectGuest`

\+ Field `email` was added to object type `DesProjectGuest`

\+ Field `firstName` was added to object type `DesProjectGuest`

\+ Field `isOnline` was added to object type `DesProjectGuest`

\+ Field `lastName` was added to object type `DesProjectGuest`

\+ Field `profilePicture` was added to object type `DesProjectGuest`

###### Input / Payload

\+ Input field `globalUserIds` of type `[String!]` was added to input object type `DesProjectGuestFilterInput`

\+ Input field `text` of type `String` was added to input object type `DesProjectGuestFilterInput`

\+ Input field `userIds` of type `[String!]` was added to input object type `DesWorkspaceUserFilterInput`

\+ Input field `text` of type `String` was added to input object type `DesWorkspaceUserFilterInput`

\+ Input field `userType` of type `DesWorkspaceUserType` was added to input object type `DesWorkspaceUserFilterInput`

##### System Design

###### 🔍 Query

\+ Field `sysEsdDocumentById` was added to object type `Query`

\+ Argument `id: String!` added to `Query.sysEsdDocumentById`

\+ Field `sysEsdDocuments` was added to object type `Query`

\+ Field `sysEsdDocumentsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sysEsdDocumentsByIds`

###### ✏️ Mutation

\+ Field `sysEsdCreateDocument` was added to object type `Mutation`

\+ Argument `input: SysEsdCreateDocumentInput!` added to `Mutation.sysEsdCreateDocument`

\+ Field `sysEsdDeleteDocument` was added to object type `Mutation`

\+ Argument `input: SysEsdDeleteDocumentInput!` added to `Mutation.sysEsdDeleteDocument`

\+ Field `sysEsdUpdateDocument` was added to object type `Mutation`

\+ Argument `input: SysEsdUpdateDocumentInput!` added to `Mutation.sysEsdUpdateDocument`

###### Types

\+ Type `SysEsdCreateDocumentPayload` was added

\+ Type `SysEsdDeleteDocumentPayload` was added

\+ Type `SysEsdDocument` was added

\+ Type `SysEsdUpdateDocumentPayload` was added

\+ Type `SysEsdCreateDocumentInput` was added

\+ Type `SysEsdDeleteDocumentInput` was added

\+ Type `SysEsdUpdateDocumentInput` was added

###### Fields

\+ Field `data` was added to object type `SysEsdCreateDocumentPayload`

\+ Field `isDeleted` was added to object type `SysEsdDeleteDocumentPayload`

\+ Field `folderId` was added to object type `SysEsdDocument`

\+ Field `id` was added to object type `SysEsdDocument`

\+ Field `name` was added to object type `SysEsdDocument`

\+ Field `data` was added to object type `SysEsdUpdateDocumentPayload`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SysEsdCreateDocumentInput`

\+ Input field `folderId` of type `String!` was added to input object type `SysEsdCreateDocumentInput`

\+ Input field `id` of type `ID!` was added to input object type `SysEsdDeleteDocumentInput`

\+ Input field `id` of type `ID!` was added to input object type `SysEsdUpdateDocumentInput`

\+ Input field `name` of type `String!` was added to input object type `SysEsdUpdateDocumentInput`

\+ Input field `folderId` of type `String!` was added to input object type `SysEsdUpdateDocumentInput`

### 04-Jul-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

− Field `esdProjectIds` was removed from object type `SolSolution`

#### ✅ Non-Breaking Changes (16)

##### Design

###### Fields

\+ Field `folders` was added to object type `DesPcbFabrication`

Δ Field `DesPcbFabrication.gerber` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.gerber`

Δ Field `DesPcbFabrication.gerberX2` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.gerberX2`

Δ Field `DesPcbFabrication.ipc2581` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.ipc2581`

Δ Field `DesPcbFabrication.ncDrill` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.ncDrill`

Δ Field `DesPcbFabrication.odb` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.odb`

Δ Field `DesPcbFabrication.testPoints` is deprecated

Δ Directive `deprecated` was added to `DesPcbFabrication.testPoints`

##### Platform

###### Fields

\+ Field `esdDocumentIds` was added to object type `SolSolution`

\+ Field `hardwareProjects` was added to object type `SolSolution`

\+ Field `softwareProjects` was added to object type `SolSolution`

### 03-Jul-2025

#### ✅ Non-Breaking Changes (4)

##### Design

###### 🔍 Query

\+ Field `desProjectsByGrids` was added to object type `Query`

Δ Field `Query.desProjectsByGrids` is deprecated

\+ Argument `grids: [String!]!` added to `Query.desProjectsByGrids`

Δ Directive `deprecated` was added to `Query.desProjectsByGrids`

### 30-Jun-2025

#### 🔴 Breaking Changes (4)

##### Common

###### Types

− Type `ComponentStringOperationFilterInput` was removed

##### Design

###### Input / Payload

Δ Input field `DesComponentFilterInput.name` changed type from `ComponentStringOperationFilterInput` to `DesComponentStringOperationFilterInput`

Δ Input field `DesComponentFilterInput.comment` changed type from `ComponentStringOperationFilterInput` to `DesComponentStringOperationFilterInput`

Δ Input field `DesComponentFilterInput.description` changed type from `ComponentStringOperationFilterInput` to `DesComponentStringOperationFilterInput`

#### ✅ Non-Breaking Changes (2)

##### Design

###### Types

\+ Type `DesComponentStringOperationFilterInput` was added

###### Input / Payload

\+ Input field `eq` of type `String` was added to input object type `DesComponentStringOperationFilterInput`

### 27-Jun-2025

#### 🔴 Breaking Changes (2)

##### Platform

###### Fields

− Field `id` was removed from object type `SolAttachment`

##### Renesas (preview)

###### Fields

− Field `url` was removed from object type `SftSoftwareProject`

#### ✅ Non-Breaking Changes (34)

##### Platform

###### Fields

\+ Field `attachmentId` was added to object type `SolAttachment`

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `sftSoftwareCreateProjectCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSoftwareCreateProjectPropertiesInput!` added to `Mutation.sftSoftwareCreateProjectCustomProperties`

\+ Field `sftSoftwareDeleteProjectCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSoftwareDeleteProjectPropertiesInput!` added to `Mutation.sftSoftwareDeleteProjectCustomProperties`

\+ Field `sftSoftwareUpdateProjectCustomProperties` was added to object type `Mutation`

\+ Argument `input: SftSoftwareUpdateProjectPropertiesInput!` added to `Mutation.sftSoftwareUpdateProjectCustomProperties`

###### Types

\+ Type `SftSoftwareCreateProjectPropertiesPayload` was added

\+ Type `SftSoftwareDeleteProjectPropertiesPayload` was added

\+ Type `SftSoftwareProjectCustomProperty` was added

\+ Type `SftSoftwareUpdateProjectPropertiesPayload` was added

\+ Type `SftSoftwareCreateProjectPropertiesInput` was added

\+ Type `SftSoftwareDeleteProjectPropertiesInput` was added

\+ Type `SftSoftwareProjectCustomPropertyInput` was added

\+ Type `SftSoftwareUpdateProjectPropertiesInput` was added

###### Fields

\+ Field `customProperties` was added to object type `SftSoftwareCreateProjectPropertiesPayload`

\+ Field `id` was added to object type `SftSoftwareCreateProjectPropertiesPayload`

\+ Field `deletedParametersCount` was added to object type `SftSoftwareDeleteProjectPropertiesPayload`

\+ Field `id` was added to object type `SftSoftwareDeleteProjectPropertiesPayload`

\+ Field `key` was added to object type `SftSoftwareProjectCustomProperty`

\+ Field `value` was added to object type `SftSoftwareProjectCustomProperty`

\+ Field `customProperties` was added to object type `SftSoftwareUpdateProjectPropertiesPayload`

\+ Field `id` was added to object type `SftSoftwareUpdateProjectPropertiesPayload`

\+ Field `customProperties` was added to object type `SftSoftwareProject`

\+ Field `repositoryUrl` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareCreateProjectPropertiesInput`

\+ Input field `customProperties` of type `[SftSoftwareProjectCustomPropertyInput!]!` was added to input object type `SftSoftwareCreateProjectPropertiesInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareDeleteProjectPropertiesInput`

\+ Input field `customPropertyNames` of type `[String!]!` was added to input object type `SftSoftwareDeleteProjectPropertiesInput`

\+ Input field `key` of type `String!` was added to input object type `SftSoftwareProjectCustomPropertyInput`

\+ Input field `value` of type `String` was added to input object type `SftSoftwareProjectCustomPropertyInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareUpdateProjectPropertiesInput`

\+ Input field `customProperties` of type `[SftSoftwareProjectCustomPropertyInput!]!` was added to input object type `SftSoftwareUpdateProjectPropertiesInput`

\+ Input field `customProperties` of type `[SftSoftwareProjectCustomPropertyInput!]` was added to input object type `SftSoftwareCreateProjectInput`

### 24-Jun-2025

#### ✅ Non-Breaking Changes (24)

##### Platform

###### ✏️ Mutation

\+ Field `solAddAttachment` was added to object type `Mutation`

\+ Argument `input: SolAddAttachmentInput!` added to `Mutation.solAddAttachment`

\+ Field `solDeleteAttachment` was added to object type `Mutation`

\+ Argument `input: SolDeleteAttachmentInput!` added to `Mutation.solDeleteAttachment`

###### Types

\+ Type `SolAddAttachmentPayload` was added

\+ Type `SolAttachment` was added

\+ Type `SolDeleteAttachmentPayload` was added

\+ Type `SolAddAttachmentInput` was added

\+ Type `SolDeleteAttachmentInput` was added

###### Fields

\+ Field `data` was added to object type `SolAddAttachmentPayload`

\+ Field `id` was added to object type `SolAttachment`

\+ Field `name` was added to object type `SolAttachment`

\+ Field `size` was added to object type `SolAttachment`

\+ Field `type` was added to object type `SolAttachment`

\+ Field `url` was added to object type `SolAttachment`

\+ Field `isDeleted` was added to object type `SolDeleteAttachmentPayload`

\+ Field `attachments` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `solutionId` of type `ID!` was added to input object type `SolAddAttachmentInput`

\+ Input field `name` of type `String!` was added to input object type `SolAddAttachmentInput`

\+ Input field `type` of type `String!` was added to input object type `SolAddAttachmentInput`

\+ Input field `fileToken` of type `String!` was added to input object type `SolAddAttachmentInput`

\+ Input field `fileName` of type `String!` was added to input object type `SolAddAttachmentInput`

\+ Input field `id` of type `String!` was added to input object type `SolDeleteAttachmentInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolDeleteAttachmentInput`

### 23-Jun-2025

#### 🔴 Breaking Changes (3)

##### Platform

###### Fields

− Field `esdProjects` was removed from object type `SolSolution`

− Field `projects` was removed from object type `SolSolution`

− Field `softwareProjects` was removed from object type `SolSolution`

#### ✅ Non-Breaking Changes (217)

##### Platform

###### 🔍 Query

\+ Field `gloOrganization` was added to object type `Query`

\+ Argument `organizationId: String` added to `Query.gloOrganization`

\+ Field `gloUserGroups` was added to object type `Query`

\+ Argument `filter: GloUserGroupInputFilterInput` added to `Query.gloUserGroups`

\+ Argument `first: Int` added to `Query.gloUserGroups`

\+ Argument `after: String` added to `Query.gloUserGroups`

\+ Argument `last: Int` added to `Query.gloUserGroups`

\+ Argument `before: String` added to `Query.gloUserGroups`

\+ Argument `order: [GloUserGroupSortInput!]` added to `Query.gloUserGroups`

\+ Field `gloUsers` was added to object type `Query`

\+ Argument `filter: GloUserInputFilterInput` added to `Query.gloUsers`

\+ Argument `first: Int` added to `Query.gloUsers`

\+ Argument `after: String` added to `Query.gloUsers`

\+ Argument `last: Int` added to `Query.gloUsers`

\+ Argument `before: String` added to `Query.gloUsers`

\+ Argument `order: [GloUserSortInput!]` added to `Query.gloUsers`

###### ✏️ Mutation

\+ Field `gloAddUsersToGroup` was added to object type `Mutation`

\+ Argument `input: GloAddUsersToGroupInput!` added to `Mutation.gloAddUsersToGroup`

\+ Field `gloCreateUser` was added to object type `Mutation`

\+ Argument `input: GloCreateUserInput!` added to `Mutation.gloCreateUser`

\+ Field `gloCreateUserGroup` was added to object type `Mutation`

\+ Argument `input: GloCreateUserGroupInput!` added to `Mutation.gloCreateUserGroup`

\+ Field `gloRemoveUsersFromGroup` was added to object type `Mutation`

\+ Argument `input: GloRemoveUsersFromGroupInput!` added to `Mutation.gloRemoveUsersFromGroup`

###### Types

\+ Type `GloAddress` was added

\+ Type `GloAddUsersToGroupPayload` was added

Δ Object type `GloAddUsersToGroupPayload` has description `Represents output value for add user to group.`

\+ Type `GloCreateUserGroupPayload` was added

Δ Object type `GloCreateUserGroupPayload` has description `Represents output value for creation of a new group.`

\+ Type `GloCreateUserPayload` was added

Δ Object type `GloCreateUserPayload` has description `Represents output value for creating new user.`

\+ Type `GloOrganization` was added

\+ Type `GloParameter` was added

\+ Type `GloRemoveUsersFromGroupPayload` was added

Δ Object type `GloRemoveUsersFromGroupPayload` has description `Represents output value for remove users from group.`

\+ Type `GloSamlSettings` was added

\+ Type `GloUser` was added

\+ Type `GloUserConnection` was added

Δ Object type `GloUserConnection` has description `A connection to a list of items.`

\+ Type `GloUserEdge` was added

Δ Object type `GloUserEdge` has description `An edge in a connection.`

\+ Type `GloUserGroup` was added

\+ Type `GloUserGroupConnection` was added

Δ Object type `GloUserGroupConnection` has description `A connection to a list of items.`

\+ Type `GloUserGroupEdge` was added

Δ Object type `GloUserGroupEdge` has description `An edge in a connection.`

\+ Type `GloUserSpace` was added

\+ Type `GloAccountType` was added

\+ Enum value `BUSINESS` was added to enum `GloAccountType`

\+ Enum value `PERSONAL` was added to enum `GloAccountType`

\+ Type `GloAuthType` was added

\+ Enum value `AT_NATIVE` was added to enum `GloAuthType`

\+ Enum value `AT_WINDOWS` was added to enum `GloAuthType`

\+ Enum value `AT_LDAP` was added to enum `GloAuthType`

\+ Type `GloAddUsersToGroupInput` was added

Δ Object type `GloAddUsersToGroupInput` has description `Represents input value for adding user into group.`

\+ Type `GloCreateUserGroupInput` was added

Δ Object type `GloCreateUserGroupInput` has description `Represents input value for creation of a new group.`

\+ Type `GloCreateUserInput` was added

Δ Object type `GloCreateUserInput` has description `Represents input value for creating new user.`

\+ Type `GloParameterInput` was added

\+ Type `GloRemoveUsersFromGroupInput` was added

Δ Object type `GloRemoveUsersFromGroupInput` has description `Represents input value for removing user from group.`

\+ Type `GloUserGroupInputFilterInput` was added

\+ Type `GloUserGroupSortInput` was added

\+ Type `GloUserInputFilterInput` was added

\+ Type `GloUserSortInput` was added

###### Fields

\+ Field `city` was added to object type `GloAddress`

\+ Field `country` was added to object type `GloAddress`

\+ Field `postalCode` was added to object type `GloAddress`

\+ Field `state` was added to object type `GloAddress`

\+ Field `street` was added to object type `GloAddress`

\+ Field `status` was added to object type `GloAddUsersToGroupPayload`

\+ Field `userGroup` was added to object type `GloCreateUserGroupPayload`

\+ Field `userId` was added to object type `GloCreateUserPayload`

\+ Field `accountType` was added to object type `GloOrganization`

\+ Field `active` was added to object type `GloOrganization`

\+ Field `allowDisplayUsers` was added to object type `GloOrganization`

\+ Field `billingAddress` was added to object type `GloOrganization`

\+ Field `currency` was added to object type `GloOrganization`

\+ Field `customerNumber` was added to object type `GloOrganization`

\+ Field `description` was added to object type `GloOrganization`

\+ Field `fax` was added to object type `GloOrganization`

\+ Field `groups` was added to object type `GloOrganization`

\+ Field `id` was added to object type `GloOrganization`

\+ Field `isPublic` was added to object type `GloOrganization`

\+ Field `name` was added to object type `GloOrganization`

\+ Field `organizationId` was added to object type `GloOrganization`

\+ Field `organizationParameters` was added to object type `GloOrganization`

\+ Field `phone` was added to object type `GloOrganization`

\+ Field `picture` was added to object type `GloOrganization`

\+ Field `samlSettings` was added to object type `GloOrganization`

\+ Field `shippingAddress` was added to object type `GloOrganization`

\+ Field `users` was added to object type `GloOrganization`

\+ Field `webSite` was added to object type `GloOrganization`

\+ Field `name` was added to object type `GloParameter`

\+ Field `parameterId` was added to object type `GloParameter`

\+ Field `value` was added to object type `GloParameter`

\+ Field `status` was added to object type `GloRemoveUsersFromGroupPayload`

\+ Field `config` was added to object type `GloSamlSettings`

\+ Field `enabled` was added to object type `GloSamlSettings`

\+ Field `scimEnabled` was added to object type `GloSamlSettings`

\+ Field `activationStatus` was added to object type `GloUser`

\+ Field `active` was added to object type `GloUser`

\+ Field `authType` was added to object type `GloUser`

\+ Field `autoSync` was added to object type `GloUser`

\+ Field `badges` was added to object type `GloUser`

\+ Field `country` was added to object type `GloUser`

\+ Field `currentPosition` was added to object type `GloUser`

\+ Field `displayName` was added to object type `GloUser`

\+ Field `domain` was added to object type `GloUser`

\+ Field `email` was added to object type `GloUser`

\+ Field `exampleWork` was added to object type `GloUser`

\+ Field `experience` was added to object type `GloUser`

\+ Field `firstName` was added to object type `GloUser`

\+ Field `groups` was added to object type `GloUser`

\+ Field `hideEmail` was added to object type `GloUser`

\+ Field `hostName` was added to object type `GloUser`

\+ Field `id` was added to object type `GloUser`

\+ Field `lastName` was added to object type `GloUser`

\+ Field `locale` was added to object type `GloUser`

\+ Field `organization` was added to object type `GloUser`

\+ Field `parameters` was added to object type `GloUser`

\+ Field `phone` was added to object type `GloUser`

\+ Field `profilePicture` was added to object type `GloUser`

\+ Field `salutation` was added to object type `GloUser`

\+ Field `spaces` was added to object type `GloUser`

\+ Field `specialties` was added to object type `GloUser`

\+ Field `timezone` was added to object type `GloUser`

\+ Field `userId` was added to object type `GloUser`

\+ Field `userName` was added to object type `GloUser`

\+ Field `website` was added to object type `GloUser`

\+ Field `edges` was added to object type `GloUserConnection`

\+ Field `nodes` was added to object type `GloUserConnection`

\+ Field `pageInfo` was added to object type `GloUserConnection`

\+ Field `totalCount` was added to object type `GloUserConnection`

\+ Field `cursor` was added to object type `GloUserEdge`

\+ Field `node` was added to object type `GloUserEdge`

\+ Field `groupMemberCount` was added to object type `GloUserGroup`

\+ Field `id` was added to object type `GloUserGroup`

\+ Field `name` was added to object type `GloUserGroup`

\+ Field `organization` was added to object type `GloUserGroup`

\+ Field `userGroupId` was added to object type `GloUserGroup`

\+ Field `users` was added to object type `GloUserGroup`

\+ Field `edges` was added to object type `GloUserGroupConnection`

\+ Field `nodes` was added to object type `GloUserGroupConnection`

\+ Field `pageInfo` was added to object type `GloUserGroupConnection`

\+ Field `totalCount` was added to object type `GloUserGroupConnection`

\+ Field `cursor` was added to object type `GloUserGroupEdge`

\+ Field `node` was added to object type `GloUserGroupEdge`

\+ Field `defaultLanguage` was added to object type `GloUserSpace`

\+ Field `domain` was added to object type `GloUserSpace`

\+ Field `id` was added to object type `GloUserSpace`

\+ Field `isPublic` was added to object type `GloUserSpace`

\+ Field `name` was added to object type `GloUserSpace`

\+ Field `userSpaceId` was added to object type `GloUserSpace`

\+ Field `esdProjectIds` was added to object type `SolSolution`

\+ Field `hardwareProjectIds` was added to object type `SolSolution`

\+ Field `softwareProjectIds` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `groupId` of type `String` was added to input object type `GloAddUsersToGroupInput`

\+ Input field `userIds` of type `[String]` was added to input object type `GloAddUsersToGroupInput`

\+ Input field `groupName` of type `String` was added to input object type `GloCreateUserGroupInput`

\+ Input field `organizationId` of type `String` was added to input object type `GloCreateUserGroupInput`

\+ Input field `organisationId` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `userName` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `firstName` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `lastName` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `email` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `domain` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `authType` of type `GloAuthType!` was added to input object type `GloCreateUserInput`

\+ Input field `activationStatus` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `password` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `autoSync` of type `Boolean!` was added to input object type `GloCreateUserInput`

\+ Input field `hostName` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `salutation` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `phone` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `fax` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `webSite` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `country` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `badges` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `exampleWork` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `experience` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `specialties` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `currentPosition` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `profilePicture` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `timezone` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `languageLocale` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `hideEmail` of type `Boolean!` was added to input object type `GloCreateUserInput`

\+ Input field `displayName` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `hrid` of type `String` was added to input object type `GloCreateUserInput`

\+ Input field `parameters` of type `[GloParameterInput]` was added to input object type `GloCreateUserInput`

\+ Input field `spaceIds` of type `[String]` was added to input object type `GloCreateUserInput`

\+ Input field `groupsIds` of type `[String]` was added to input object type `GloCreateUserInput`

\+ Input field `sendEmail` of type `Boolean!` was added to input object type `GloCreateUserInput`

\+ Input field `parameterId` of type `String` was added to input object type `GloParameterInput`

\+ Input field `name` of type `String` was added to input object type `GloParameterInput`

\+ Input field `value` of type `String` was added to input object type `GloParameterInput`

\+ Input field `groupId` of type `String` was added to input object type `GloRemoveUsersFromGroupInput`

\+ Input field `userIds` of type `[String]` was added to input object type `GloRemoveUsersFromGroupInput`

\+ Input field `userGroupIds` of type `[String]` was added to input object type `GloUserGroupInputFilterInput`

\+ Input field `organizationId` of type `String` was added to input object type `GloUserGroupInputFilterInput`

\+ Input field `userGroupName` of type `String` was added to input object type `GloUserGroupInputFilterInput`

\+ Input field `isGlobal` of type `Boolean` was added to input object type `GloUserGroupInputFilterInput`

\+ Input field `userGroupId` of type `SortEnumType` was added to input object type `GloUserGroupSortInput`

\+ Input field `name` of type `SortEnumType` was added to input object type `GloUserGroupSortInput`

\+ Input field `organizationId` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `userName` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `userEmail` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `activationStatus` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `userIds` of type `[String]` was added to input object type `GloUserInputFilterInput`

\+ Input field `emailDomain` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `fullName` of type `String` was added to input object type `GloUserInputFilterInput`

\+ Input field `userId` of type `SortEnumType` was added to input object type `GloUserSortInput`

\+ Input field `userName` of type `SortEnumType` was added to input object type `GloUserSortInput`

\+ Input field `email` of type `SortEnumType` was added to input object type `GloUserSortInput`

##### Renesas (preview)

###### 🔍 Query

\+ Field `sftSoftwareProjectsByIds` was added to object type `Query`

\+ Argument `ids: [ID!]!` added to `Query.sftSoftwareProjectsByIds`

### 18-Jun-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

− Field `items` was removed from object type `SolSolution`

#### ✅ Non-Breaking Changes (3)

##### Platform

###### Fields

\+ Field `esdProjects` was added to object type `SolSolution`

\+ Field `projects` was added to object type `SolSolution`

\+ Field `softwareProjects` was added to object type `SolSolution`

### 17-Jun-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Fields

Δ Field `SolSolution.items` changed type from `[String!]!` to `[ID!]!`

#### ✅ Non-Breaking Changes (15)

##### Platform

###### ✏️ Mutation

\+ Field `solLinkItemToSolution` was added to object type `Mutation`

\+ Argument `input: SolLinkItemToSolutionInput!` added to `Mutation.solLinkItemToSolution`

\+ Field `solUnlinkItemFromSolution` was added to object type `Mutation`

\+ Argument `input: SolUnlinkItemFromSolutionInput!` added to `Mutation.solUnlinkItemFromSolution`

###### Types

\+ Type `SolLinkItemToSolutionPayload` was added

\+ Type `SolUnlinkItemFromSolutionPayload` was added

\+ Type `SolLinkItemToSolutionInput` was added

\+ Type `SolUnlinkItemFromSolutionInput` was added

###### Fields

\+ Field `isSuccess` was added to object type `SolLinkItemToSolutionPayload`

\+ Field `isSuccess` was added to object type `SolUnlinkItemFromSolutionPayload`

Δ Field `SolSolution.sharedWith` changed type from `[String!]` to `[String!]!`

###### Input / Payload

\+ Input field `solutionId` of type `ID!` was added to input object type `SolLinkItemToSolutionInput`

\+ Input field `itemId` of type `ID!` was added to input object type `SolLinkItemToSolutionInput`

\+ Input field `solutionId` of type `ID!` was added to input object type `SolUnlinkItemFromSolutionInput`

\+ Input field `itemId` of type `ID!` was added to input object type `SolUnlinkItemFromSolutionInput`

### 16-Jun-2025

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Fields

\+ Field `items` was added to object type `SolSolution`

### 12-Jun-2025

#### 🔴 Breaking Changes (1)

##### Platform

###### Input / Payload

\+ Input field `folderId` of type `String!` was added to input object type `SolCreateSolutionInput`

#### ✅ Non-Breaking Changes (1)

##### Platform

###### Fields

\+ Field `folderId` was added to object type `SolSolution`

### 11-Jun-2025

#### ⚠️ Dangerous Changes (3)

##### Design

###### Types

\+ Enum value `ESD_PROJECT` was added to enum `DesContentTypeKind`

\+ Enum value `SOLUTION` was added to enum `DesContentTypeKind`

\+ Enum value `SOFTWARE_PROJECT` was added to enum `DesContentTypeKind`

### 06-Jun-2025

#### 🔴 Breaking Changes (1)

##### Renesas (preview)

###### Input / Payload

\+ Input field `folderId` of type `String!` was added to input object type `SftSoftwareCreateProjectInput`

#### ✅ Non-Breaking Changes (4)

##### Renesas (preview)

###### Fields

\+ Field `folderId` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `folderId` of type `String` was added to input object type `SftSoftwareUpdateProjectInput`

Δ Input field `SftSoftwareUpdateProjectInput.name` changed type from `String!` to `String`

Δ Input field `SftSoftwareUpdateProjectInput.url` changed type from `String!` to `String`

### 05-Jun-2025

#### ✅ Non-Breaking Changes (25)

##### Platform

###### 🔍 Query

\+ Field `solSolutionById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.solSolutionById`

\+ Field `solSolutions` was added to object type `Query`

###### ✏️ Mutation

\+ Field `solCreateSolution` was added to object type `Mutation`

\+ Argument `input: SolCreateSolutionInput!` added to `Mutation.solCreateSolution`

\+ Field `solDeleteSolution` was added to object type `Mutation`

\+ Argument `input: SolDeleteSolutionInput!` added to `Mutation.solDeleteSolution`

###### Types

\+ Type `SolCreateSolutionPayload` was added

\+ Type `SolDeleteSolutionPayload` was added

\+ Type `SolSolution` was added

\+ Type `SolCreateSolutionInput` was added

\+ Type `SolDeleteSolutionInput` was added

###### Fields

\+ Field `data` was added to object type `SolCreateSolutionPayload`

\+ Field `isDeleted` was added to object type `SolDeleteSolutionPayload`

\+ Field `description` was added to object type `SolSolution`

\+ Field `id` was added to object type `SolSolution`

\+ Field `lastModified` was added to object type `SolSolution`

\+ Field `name` was added to object type `SolSolution`

\+ Field `previewUrl` was added to object type `SolSolution`

\+ Field `sharedWith` was added to object type `SolSolution`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SolCreateSolutionInput`

\+ Input field `previewUrl` of type `String!` was added to input object type `SolCreateSolutionInput`

\+ Input field `description` of type `String!` was added to input object type `SolCreateSolutionInput`

\+ Input field `sharedWith` of type `[String!]` was added to input object type `SolCreateSolutionInput`

\+ Input field `id` of type `ID!` was added to input object type `SolDeleteSolutionInput`

### 04-Jun-2025

#### 🔴 Breaking Changes (9)

##### Renesas (preview)

###### ✏️ Mutation

− Field `sftSoftwareProjectCreate` was removed from object type `Mutation`

− Field `sftSoftwareProjectDeleteById` was removed from object type `Mutation`

− Field `sftSoftwareProjectUpdate` was removed from object type `Mutation`

###### Types

− Type `SftSoftwareProjectCreatePayload` was removed

− Type `SftSoftwareProjectDeletePayload` was removed

− Type `SftSoftwareProjectUpdatePayload` was removed

− Type `SftSoftwareProjectCreateInput` was removed

− Type `SftSoftwareProjectDeleteInput` was removed

− Type `SftSoftwareProjectUpdateInput` was removed

#### ✅ Non-Breaking Changes (22)

##### Renesas (preview)

###### ✏️ Mutation

\+ Field `sftSoftwareCreateProject` was added to object type `Mutation`

\+ Argument `input: SftSoftwareCreateProjectInput!` added to `Mutation.sftSoftwareCreateProject`

\+ Field `sftSoftwareDeleteProject` was added to object type `Mutation`

\+ Argument `input: SftSoftwareDeleteProjectInput!` added to `Mutation.sftSoftwareDeleteProject`

\+ Field `sftSoftwareUpdateProject` was added to object type `Mutation`

\+ Argument `input: SftSoftwareUpdateProjectInput!` added to `Mutation.sftSoftwareUpdateProject`

###### Types

\+ Type `SftSoftwareCreateProjectPayload` was added

\+ Type `SftSoftwareDeleteProjectPayload` was added

\+ Type `SftSoftwareUpdateProjectPayload` was added

\+ Type `SftSoftwareCreateProjectInput` was added

\+ Type `SftSoftwareDeleteProjectInput` was added

\+ Type `SftSoftwareUpdateProjectInput` was added

###### Fields

\+ Field `data` was added to object type `SftSoftwareCreateProjectPayload`

\+ Field `isDeleted` was added to object type `SftSoftwareDeleteProjectPayload`

\+ Field `data` was added to object type `SftSoftwareUpdateProjectPayload`

\+ Field `url` was added to object type `SftSoftwareProject`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SftSoftwareCreateProjectInput`

\+ Input field `url` of type `String!` was added to input object type `SftSoftwareCreateProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareDeleteProjectInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareUpdateProjectInput`

\+ Input field `name` of type `String!` was added to input object type `SftSoftwareUpdateProjectInput`

\+ Input field `url` of type `String!` was added to input object type `SftSoftwareUpdateProjectInput`

### 03-Jun-2025

#### ✅ Non-Breaking Changes (28)

##### Design

###### 🔍 Query

Δ Type for argument `workspaceUrl` on field `Query.desLibrary` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desLifeCycleDefinitionByContentTypeKind` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desLifeCycleDefinitions` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desProjectIdFromAfsId` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desProjects` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desRevisionNamingSchemeByContentTypeKind` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desRevisionNamingSchemes` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desSettings` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desTeam` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desUsers` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desWorkspaceConfiguration` changed from `String!` to `String`

Δ Type for argument `workspaceUrl` on field `Query.desWorkspaceTasks` changed from `String!` to `String`

###### Input / Payload

Δ Input field `DesCreateFolderInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateLifeCycleDefinitionInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateRevisionNamingSchemeInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateSymbolInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateUserGroupInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateUserInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesCreateWorkspaceTaskInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesDeleteUserInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesLaunchWorkflowInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesOnCommentUpdatedInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesReleaseComponentInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesReleaseComponentTemplateInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesTerminateWorkflowsInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesUpdateSettingInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesUpdateUserInput.workspaceUrl` changed type from `String!` to `String`

Δ Input field `DesUploadProjectInput.workspaceUrl` changed type from `String!` to `String`

### 02-Jun-2025

#### 🔴 Breaking Changes (1)

##### Supply

###### Types

− Type `SupErrorPayload` was removed

#### ✅ Non-Breaking Changes (33)

##### Design

###### Fields

\+ Field `createdBy` was added to object type `DesDatasheet`

\+ Field `updatedBy` was added to object type `DesDatasheet`

\+ Field `createdBy` was added to object type `DesFootprint`

\+ Field `updatedBy` was added to object type `DesFootprint`

\+ Field `createdBy` was added to object type `DesSimulation`

\+ Field `updatedBy` was added to object type `DesSimulation`

\+ Field `createdBy` was added to object type `DesSymbol`

\+ Field `updatedBy` was added to object type `DesSymbol`

##### Renesas (preview)

###### 🔍 Query

\+ Field `sftSoftwareProjectById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.sftSoftwareProjectById`

\+ Field `sftSoftwareProjects` was added to object type `Query`

###### ✏️ Mutation

\+ Field `sftSoftwareProjectCreate` was added to object type `Mutation`

\+ Argument `input: SftSoftwareProjectCreateInput!` added to `Mutation.sftSoftwareProjectCreate`

\+ Field `sftSoftwareProjectDeleteById` was added to object type `Mutation`

\+ Argument `input: SftSoftwareProjectDeleteInput!` added to `Mutation.sftSoftwareProjectDeleteById`

\+ Field `sftSoftwareProjectUpdate` was added to object type `Mutation`

\+ Argument `input: SftSoftwareProjectUpdateInput!` added to `Mutation.sftSoftwareProjectUpdate`

###### Types

\+ Type `SftSoftwareProject` was added

\+ Type `SftSoftwareProjectCreatePayload` was added

\+ Type `SftSoftwareProjectDeletePayload` was added

\+ Type `SftSoftwareProjectUpdatePayload` was added

\+ Type `SftSoftwareProjectCreateInput` was added

\+ Type `SftSoftwareProjectDeleteInput` was added

\+ Type `SftSoftwareProjectUpdateInput` was added

###### Fields

\+ Field `id` was added to object type `SftSoftwareProject`

\+ Field `name` was added to object type `SftSoftwareProject`

\+ Field `data` was added to object type `SftSoftwareProjectCreatePayload`

\+ Field `isDeleted` was added to object type `SftSoftwareProjectDeletePayload`

\+ Field `data` was added to object type `SftSoftwareProjectUpdatePayload`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `SftSoftwareProjectCreateInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareProjectDeleteInput`

\+ Input field `id` of type `ID!` was added to input object type `SftSoftwareProjectUpdateInput`

\+ Input field `name` of type `String!` was added to input object type `SftSoftwareProjectUpdateInput`

### 26-May-2025

#### ✅ Non-Breaking Changes (2)

##### Platform

###### Input / Payload

Δ Input field `GloNtfSendEmailInput.bcc` changed type from `[String!]!` to `[String!]`

Δ Input field `GloNtfSendEmailInput.cc` changed type from `[String!]!` to `[String!]`

### 22-May-2025

#### 🔴 Breaking Changes (2)

##### Design

###### Input / Payload

− Input field `folderPath` was removed from input object type `DesUploadProjectInput`

\+ Input field `parentFolderId` of type `ID!` was added to input object type `DesUploadProjectInput`

### 14-May-2025

#### ⚠️ Dangerous Changes (1)

##### Design

###### Types

\+ Enum value `ESD` was added to enum `DesCollaborationDomain`

### 13-May-2025

#### ✅ Non-Breaking Changes (101)

##### Platform

###### 🔍 Query

\+ Field `desWorkspaceTeamByAuth` was added to object type `Query`

###### Types

\+ Type `DesProjectGuest` was added

Δ Object type `DesProjectGuest` has description 'Represents a project guest (a user who is not registered to the workspace but has explicit share to one or more items in the workspace).'

\+ Type `DesProjectGuestConnection` was added

Δ Object type `DesProjectGuestConnection` has description `A connection to a list of items.`

\+ Type `DesProjectGuestEdge` was added

Δ Object type `DesProjectGuestEdge` has description `An edge in a connection.`

\+ Type `DesWorkspaceGroup` was added

Δ Object type `DesWorkspaceGroup` has description `The information about the workspace group.`

\+ Type `DesWorkspaceGroupConnection` was added

Δ Object type `DesWorkspaceGroupConnection` has description `A connection to a list of items.`

\+ Type `DesWorkspaceGroupEdge` was added

Δ Object type `DesWorkspaceGroupEdge` has description `An edge in a connection.`

\+ Type `DesWorkspaceTeam` was added

Δ Object type `DesWorkspaceTeam` has description `Represents a team of collaborators in a given workspace.`

\+ Type `DesWorkspaceUser` was added

Δ Object type `DesWorkspaceUser` has description `Represents a user registered in a workspace.`

\+ Type `DesWorkspaceUserConnection` was added

Δ Object type `DesWorkspaceUserConnection` has description `A connection to a list of items.`

\+ Type `DesWorkspaceUserEdge` was added

Δ Object type `DesWorkspaceUserEdge` has description `An edge in a connection.`

\+ Type `DesProjectGuestOrderBy` was added

\+ Enum value `GLOBAL_USER_ID` was added to enum `DesProjectGuestOrderBy`

\+ Enum value `EMAIL` was added to enum `DesProjectGuestOrderBy`

\+ Enum value `DISPLAY_NAME` was added to enum `DesProjectGuestOrderBy`

Δ Object type `DesProjectGuestOrderBy` has description `Specifies the sort order field for the result set of project guests.`

\+ Type `DesWorkspaceGroupOrderBy` was added

\+ Enum value `GROUP_ID` was added to enum `DesWorkspaceGroupOrderBy`

\+ Enum value `NAME` was added to enum `DesWorkspaceGroupOrderBy`

\+ Enum value `CREATED_AT` was added to enum `DesWorkspaceGroupOrderBy`

Δ Object type `DesWorkspaceGroupOrderBy` has description `Specifies the sort order field for the result set of workspace groups.`

\+ Type `DesWorkspaceTeamSortDirection` was added

\+ Enum value `ASC` was added to enum `DesWorkspaceTeamSortDirection`

\+ Enum value `DESC` was added to enum `DesWorkspaceTeamSortDirection`

Δ Object type `DesWorkspaceTeamSortDirection` has description `Specifies the sort direction that applies to the corresponding sort order field.`

\+ Type `DesWorkspaceUserOrderBy` was added

\+ Enum value `USER_ID` was added to enum `DesWorkspaceUserOrderBy`

\+ Enum value `EMAIL` was added to enum `DesWorkspaceUserOrderBy`

\+ Enum value `DISPLAY_NAME` was added to enum `DesWorkspaceUserOrderBy`

Δ Object type `DesWorkspaceUserOrderBy` has description `Specifies the sort order field for the result set of workspace members.`

\+ Type `DesWorkspaceUserProfilePictureSize` was added

\+ Enum value `SIZE48X48` was added to enum `DesWorkspaceUserProfilePictureSize`

\+ Enum value `SIZE70X70` was added to enum `DesWorkspaceUserProfilePictureSize`

\+ Enum value `SIZE128X128` was added to enum `DesWorkspaceUserProfilePictureSize`

\+ Enum value `ORIGINAL` was added to enum `DesWorkspaceUserProfilePictureSize`

\+ Type `DesWorkspaceUserType` was added

\+ Enum value `WORKSPACE_MEMBER` was added to enum `DesWorkspaceUserType`

\+ Enum value `WORKSPACE_GUEST` was added to enum `DesWorkspaceUserType`

Δ Object type `DesWorkspaceUserType` has description `Specifies the type of the user in the workspace.`

###### Arguments

\+ Argument `first: Int` added to `DesWorkspaceGroup.members`

\+ Argument `after: String` added to `DesWorkspaceGroup.members`

\+ Argument `orderBy: DesWorkspaceUserOrderBy` added to `DesWorkspaceGroup.members`

\+ Argument `sortDirection: DesWorkspaceTeamSortDirection` added to `DesWorkspaceGroup.members`

\+ Argument `first: Int` added to `DesWorkspaceTeam.projectGuests`

\+ Argument `after: String` added to `DesWorkspaceTeam.projectGuests`

\+ Argument `orderBy: DesProjectGuestOrderBy` added to `DesWorkspaceTeam.projectGuests`

\+ Argument `sortDirection: DesWorkspaceTeamSortDirection` added to `DesWorkspaceTeam.projectGuests`

\+ Argument `first: Int` added to `DesWorkspaceTeam.workspaceGroups`

\+ Argument `after: String` added to `DesWorkspaceTeam.workspaceGroups`

\+ Argument `orderBy: DesWorkspaceGroupOrderBy` added to `DesWorkspaceTeam.workspaceGroups`

\+ Argument `sortDirection: DesWorkspaceTeamSortDirection` added to `DesWorkspaceTeam.workspaceGroups`

\+ Argument `first: Int` added to `DesWorkspaceTeam.workspaceUsers`

\+ Argument `after: String` added to `DesWorkspaceTeam.workspaceUsers`

\+ Argument `orderBy: DesWorkspaceUserOrderBy` added to `DesWorkspaceTeam.workspaceUsers`

\+ Argument `sortDirection: DesWorkspaceTeamSortDirection` added to `DesWorkspaceTeam.workspaceUsers`

\+ Argument `size: DesWorkspaceUserProfilePictureSize!` (with default value) added to `DesWorkspaceUser.profilePicture`

###### Fields

\+ Field `globalUserId` was added to object type `DesProjectGuest`

\+ Field `edges` was added to object type `DesProjectGuestConnection`

\+ Field `nodes` was added to object type `DesProjectGuestConnection`

\+ Field `pageInfo` was added to object type `DesProjectGuestConnection`

\+ Field `totalCount` was added to object type `DesProjectGuestConnection`

\+ Field `cursor` was added to object type `DesProjectGuestEdge`

\+ Field `node` was added to object type `DesProjectGuestEdge`

\+ Field `groupId` was added to object type `DesWorkspaceGroup`

\+ Field `members` was added to object type `DesWorkspaceGroup`

\+ Field `name` was added to object type `DesWorkspaceGroup`

\+ Field `edges` was added to object type `DesWorkspaceGroupConnection`

\+ Field `nodes` was added to object type `DesWorkspaceGroupConnection`

\+ Field `pageInfo` was added to object type `DesWorkspaceGroupConnection`

\+ Field `totalCount` was added to object type `DesWorkspaceGroupConnection`

\+ Field `cursor` was added to object type `DesWorkspaceGroupEdge`

\+ Field `node` was added to object type `DesWorkspaceGroupEdge`

\+ Field `projectGuests` was added to object type `DesWorkspaceTeam`

\+ Field `workspaceGroups` was added to object type `DesWorkspaceTeam`

\+ Field `workspaceUsers` was added to object type `DesWorkspaceTeam`

\+ Field `displayName` was added to object type `DesWorkspaceUser`

\+ Field `email` was added to object type `DesWorkspaceUser`

\+ Field `firstName` was added to object type `DesWorkspaceUser`

\+ Field `globalUserId` was added to object type `DesWorkspaceUser`

\+ Field `groups` was added to object type `DesWorkspaceUser`

\+ Field `isOnline` was added to object type `DesWorkspaceUser`

\+ Field `lastName` was added to object type `DesWorkspaceUser`

\+ Field `profilePicture` was added to object type `DesWorkspaceUser`

\+ Field `type` was added to object type `DesWorkspaceUser`

\+ Field `userId` was added to object type `DesWorkspaceUser`

\+ Field `edges` was added to object type `DesWorkspaceUserConnection`

\+ Field `nodes` was added to object type `DesWorkspaceUserConnection`

\+ Field `pageInfo` was added to object type `DesWorkspaceUserConnection`

\+ Field `totalCount` was added to object type `DesWorkspaceUserConnection`

\+ Field `cursor` was added to object type `DesWorkspaceUserEdge`

\+ Field `node` was added to object type `DesWorkspaceUserEdge`

### 17-Apr-2025

#### ✅ Non-Breaking Changes (18)

##### Design

###### ✏️ Mutation

\+ Field `desCreateSymbol` was added to object type `Mutation`

\+ Argument `input: DesCreateSymbolInput!` added to `Mutation.desCreateSymbol`

###### Types

\+ Type `DesCreateSymbolPayload` was added

Δ Object type `DesCreateSymbolPayload` has description `Payload associated with creating a symbol.`

\+ Type `DesCreateSymbolFileInput` was added

Δ Object type `DesCreateSymbolFileInput` has description `Input for creating a symbol file.`

\+ Type `DesCreateSymbolInput` was added

Δ Object type `DesCreateSymbolInput` has description `Input for creating a symbol.`

###### Fields

\+ Field `errors` was added to object type `DesCreateSymbolPayload`

\+ Field `id` was added to object type `DesCreateSymbolPayload`

###### Input / Payload

\+ Input field `fileId` of type `String!` was added to input object type `DesCreateSymbolFileInput`

\+ Input field `relativePath` of type `String!` was added to input object type `DesCreateSymbolFileInput`

\+ Input field `workspaceUrl` of type `String!` was added to input object type `DesCreateSymbolInput`

\+ Input field `folderId` of type `ID!` was added to input object type `DesCreateSymbolInput`

\+ Input field `name` of type `String` was added to input object type `DesCreateSymbolInput`

\+ Input field `files` of type `[DesCreateSymbolFileInput!]!` was added to input object type `DesCreateSymbolInput`

\+ Input field `revisionNamingSchemeId` of type `ID` was added to input object type `DesCreateSymbolInput`

\+ Input field `lifeCycleDefinitionId` of type `ID` was added to input object type `DesCreateSymbolInput`

### 16-Apr-2025

#### ✅ Non-Breaking Changes (22)

##### Platform

###### ✏️ Mutation

\+ Field `gloNtfSendEmail` was added to object type `Mutation`

\+ Argument `input: GloNtfSendEmailInput!` added to `Mutation.gloNtfSendEmail`

###### Types

\+ Type `GloNtfPayloadError` was added

Δ `GloNtfPayloadError` object implements `GloNtfError` interface

Δ Object type `GloNtfPayloadError` has description `Represents the information about a payload error.`

\+ Type `GloNtfSendEmailPayload` was added

\+ Type `GloNtfError` was added

Δ Object type `GloNtfError` has description `Represents the information about an error.`

\+ Type `GloNtfBodyEmailFormat` was added

\+ Enum value `PLAIN` was added to enum `GloNtfBodyEmailFormat`

\+ Enum value `HTML` was added to enum `GloNtfBodyEmailFormat`

\+ Type `GloNtfSendEmailInput` was added

###### Fields

\+ Field `message` was added to object type `GloNtfPayloadError`

\+ Field `errors` was added to object type `GloNtfSendEmailPayload`

Δ Field `message` was added to interface `GloNtfError`

###### Input / Payload

\+ Input field `to` of type `[String!]!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `bcc` of type `[String!]!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `cc` of type `[String!]!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `subject` of type `String!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `body` of type `String!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `bodyFormat` of type `GloNtfBodyEmailFormat!` was added to input object type `GloNtfSendEmailInput`

\+ Input field `from` of type `String!` was added to input object type `GloNtfSendEmailInput`

### 15-Apr-2025

#### 🔴 Breaking Changes (4)

##### Common

###### Types

− Type `Error` was removed

##### Procurement

###### Types

− Type `BomLifecycleStateTransitionNotApplicableError` was removed

− Type `BomChangeBomReleaseLifecycleStateError` was removed

###### Fields

Δ Field `BomChangeBomReleaseLifecycleStatePayload.errors` changed type from `[BomChangeBomReleaseLifecycleStateError!]` to `[BomError!]!`

#### ✅ Non-Breaking Changes (101)

##### Procurement

###### ✏️ Mutation

\+ Field `bomCreateBom` was added to object type `Mutation`

\+ Argument `input: BomCreateBomInput!` added to `Mutation.bomCreateBom`

###### Types

\+ Type `BomCreateBomPayload` was added

\+ Type `BomInputValidationError` was added

Δ `BomInputValidationError` object implements `BomError` interface

Δ Object type `BomInputValidationError` has description `Describes a problem with the provided input (validation error).`

\+ Type `BomPayloadError` was added

Δ `BomPayloadError` object implements `BomError` interface

Δ Object type `BomPayloadError` has description `Describes an error occurred while executing a mutation.`

\+ Type `BomProjectReleaseSource` was added

Δ `BomProjectReleaseSource` object implements `BomSource` interface

Δ Object type `BomProjectReleaseSource` has description `Describes the source project release used to create the current BOM.`

\+ Type `BomError` was added

Δ Object type `BomError` has description `A common interface for all errors that might occur in mutations.`

\+ Type `BomPackagingType` was added

\+ Enum value `TAPE_AND_REEL` was added to enum `BomPackagingType`

\+ Enum value `BULK` was added to enum `BomPackagingType`

\+ Enum value `CUSTOM_REEL` was added to enum `BomPackagingType`

\+ Enum value `CUT_TAPE` was added to enum `BomPackagingType`

\+ Enum value `TAPE_AND_BOX` was added to enum `BomPackagingType`

\+ Enum value `TRAY` was added to enum `BomPackagingType`

\+ Type `BomCreateBomInput` was added

\+ Type `BomCreateBomItemElementAttributeDeclarationInput` was added

Δ Object type `BomCreateBomItemElementAttributeDeclarationInput` has description 'Describes a BOM item element\`s attribute.\`

\+ Type `BomCreateBomItemElementAttributeInput` was added

Δ Object type `BomCreateBomItemElementAttributeInput` has description `BOM item element attribute.`

\+ Type `BomCreateBomItemElementAttributeValueInput` was added

Δ Object type `BomCreateBomItemElementAttributeValueInput` has description 'BOM item element attribute\`s value.\`

\+ Type `BomCreateBomItemElementInput` was added

Δ Object type `BomCreateBomItemElementInput` has description `An element (part) that might be used for a particular BOM item.`

\+ Type `BomCreateBomItemInput` was added

Δ Object type `BomCreateBomItemInput` has description `BOM items are the components of a product.`

\+ Type `BomCreateBomOfferReferenceInput` was added

Δ Object type `BomCreateBomOfferReferenceInput` has description 'Describes an offer selected for an element. Only a single field must be specified.'

\+ Type `BomCreateBomPackagingPrioritiesSettingsInput` was added

Δ Object type `BomCreateBomPackagingPrioritiesSettingsInput` has description 'Specifies priorities of different packaging types. This affects the offer selection in the order list.'

\+ Type `BomCreateBomPartReferenceInput` was added

Δ Object type `BomCreateBomPartReferenceInput` has description 'Describes a part associated with an element. Only a single field must be specified.'

\+ Type `BomCreateBomProductionSettingsInput` was added

Δ Object type `BomCreateBomProductionSettingsInput` has description 'Production-related settings of a BOM (e.g., a \`production quantity\` or a \`due date\`).'

\+ Type `BomCreateBomSupplierReferenceInput` was added

Δ Object type `BomCreateBomSupplierReferenceInput` has description 'Describes a supplier used in a BOM. Only a single field must be specified.'

\+ Type `BomOctopartOfferReferenceInput` was added

Δ Object type `BomOctopartOfferReferenceInput` has description `A reference to an offer in Octopart.`

\+ Type `BomOctopartPartReferenceInput` was added

Δ Object type `BomOctopartPartReferenceInput` has description `A reference to a part in Octopart.`

\+ Type `BomOctopartSupplierReferenceInput` was added

Δ Object type `BomOctopartSupplierReferenceInput` has description `A reference to a supplier in Octopart.`

\+ Type `BomRawPartReferenceInput` was added

Δ Object type `BomRawPartReferenceInput` has description `A raw part descriptor (MPN + Manufacturer).`

###### Fields

\+ Field `bom` was added to object type `BomCreateBomPayload`

\+ Field `errors` was added to object type `BomCreateBomPayload`

\+ Field `message` was added to object type `BomInputValidationError`

\+ Field `path` was added to object type `BomInputValidationError`

\+ Field `message` was added to object type `BomPayloadError`

\+ Field `designId` was added to object type `BomProjectReleaseSource`

\+ Field `quantity` was added to object type `BomProjectReleaseSource`

\+ Field `sourceRevisionId` was added to object type `BomProjectReleaseSource`

Δ Field `message` was added to interface `BomError`

\+ Field `waivingToken` was added to object type `BomIssue`

###### Input / Payload

\+ Input field `name` of type `String!` was added to input object type `BomCreateBomInput`

\+ Input field `description` of type `String` was added to input object type `BomCreateBomInput`

\+ Input field `folderId` of type `String` was added to input object type `BomCreateBomInput`

\+ Input field `countryCode` of type `String` was added to input object type `BomCreateBomInput`

\+ Input field `currencyCode` of type `String` was added to input object type `BomCreateBomInput`

\+ Input field `production` of type `BomCreateBomProductionSettingsInput` was added to input object type `BomCreateBomInput`

\+ Input field `packagingPriorities` of type `BomCreateBomPackagingPrioritiesSettingsInput` was added to input object type `BomCreateBomInput`

\+ Input field `suppliers` of type `[BomCreateBomSupplierReferenceInput!]` was added to input object type `BomCreateBomInput`

\+ Input field `itemElementAttributes` of type `[BomCreateBomItemElementAttributeDeclarationInput!]` was added to input object type `BomCreateBomInput`

\+ Input field `items` of type `[BomCreateBomItemInput!]!` was added to input object type `BomCreateBomInput`

\+ Input field `tolerateMissingReferences` of type `Boolean!` with default value `false` was added to input object type `BomCreateBomInput`

\+ Input field `attributeId` of type `String!` was added to input object type `BomCreateBomItemElementAttributeDeclarationInput`

\+ Input field `name` of type `String!` was added to input object type `BomCreateBomItemElementAttributeDeclarationInput`

\+ Input field `type` of type `BomItemElementCustomAttributeType!` was added to input object type `BomCreateBomItemElementAttributeDeclarationInput`

\+ Input field `attributeId` of type `String!` was added to input object type `BomCreateBomItemElementAttributeInput`

\+ Input field `value` of type `BomCreateBomItemElementAttributeValueInput!` was added to input object type `BomCreateBomItemElementAttributeInput`

\+ Input field `stringValue` of type `String` was added to input object type `BomCreateBomItemElementAttributeValueInput`

\+ Input field `integerValue` of type `Long` was added to input object type `BomCreateBomItemElementAttributeValueInput`

\+ Input field `floatValue` of type `Float` was added to input object type `BomCreateBomItemElementAttributeValueInput`

\+ Input field `part` of type `BomCreateBomPartReferenceInput!` was added to input object type `BomCreateBomItemElementInput`

\+ Input field `offer` of type `BomCreateBomOfferReferenceInput` was added to input object type `BomCreateBomItemElementInput`

\+ Input field `name` of type `String` was added to input object type `BomCreateBomItemElementInput`

\+ Input field `description` of type `String` was added to input object type `BomCreateBomItemElementInput`

\+ Input field `attributeValues` of type `[BomCreateBomItemElementAttributeInput!]` was added to input object type `BomCreateBomItemElementInput`

\+ Input field `quantity` of type `Int!` was added to input object type `BomCreateBomItemInput`

\+ Input field `extraQuantity` of type `Int` was added to input object type `BomCreateBomItemInput`

\+ Input field `designators` of type `[String!]!` was added to input object type `BomCreateBomItemInput`

\+ Input field `elements` of type `[BomCreateBomItemElementInput!]!` was added to input object type `BomCreateBomItemInput`

\+ Input field `octopart` of type `BomOctopartOfferReferenceInput` was added to input object type `BomCreateBomOfferReferenceInput`

\+ Input field `enabled` of type `Boolean!` was added to input object type `BomCreateBomPackagingPrioritiesSettingsInput`

\+ Input field `order` of type `[BomPackagingType!]!` was added to input object type `BomCreateBomPackagingPrioritiesSettingsInput`

\+ Input field `raw` of type `BomRawPartReferenceInput` was added to input object type `BomCreateBomPartReferenceInput`

\+ Input field `octopart` of type `BomOctopartPartReferenceInput` was added to input object type `BomCreateBomPartReferenceInput`

\+ Input field `quantity` of type `Int!` was added to input object type `BomCreateBomProductionSettingsInput`

\+ Input field `dueDate` of type `Date` was added to input object type `BomCreateBomProductionSettingsInput`

\+ Input field `octopart` of type `BomOctopartSupplierReferenceInput` was added to input object type `BomCreateBomSupplierReferenceInput`

\+ Input field `offerId` of type `String!` was added to input object type `BomOctopartOfferReferenceInput`

\+ Input field `partId` of type `String!` was added to input object type `BomOctopartPartReferenceInput`

\+ Input field `supplierId` of type `String!` was added to input object type `BomOctopartSupplierReferenceInput`

\+ Input field `mpn` of type `String` was added to input object type `BomRawPartReferenceInput`

\+ Input field `manufacturer` of type `String` was added to input object type `BomRawPartReferenceInput`

### 09-Apr-2025

#### 🔴 Breaking Changes (1)

##### Design

###### Fields

Δ Field `DesCollaborationRevision.design` changed type from `DesCadDesign!` to `DesCadDesign`

### 03-Apr-2025

#### ✅ Non-Breaking Changes (12)

##### Design

###### Types

\+ Type `DesProjectType` was added

\+ Enum value `NONE` was added to enum `DesProjectType`

\+ Enum value `PCB_PROJECT` was added to enum `DesProjectType`

\+ Enum value `SYSTEM_DESIGN` was added to enum `DesProjectType`

\+ Enum value `HARNESS_DESIGN` was added to enum `DesProjectType`

\+ Type `DesProjectTypeOperationFilterInput` was added

###### Fields

\+ Field `projectType` was added to object type `DesProject`

###### Input / Payload

\+ Input field `eq` of type `DesProjectType` was added to input object type `DesProjectTypeOperationFilterInput`

\+ Input field `neq` of type `DesProjectType` was added to input object type `DesProjectTypeOperationFilterInput`

\+ Input field `in` of type `[DesProjectType!]` was added to input object type `DesProjectTypeOperationFilterInput`

\+ Input field `nin` of type `[DesProjectType!]` was added to input object type `DesProjectTypeOperationFilterInput`

\+ Input field `projectType` of type `DesProjectTypeOperationFilterInput` was added to input object type `DesProjectFilterInput`

### 31-Mar-2025

#### 🔴 Breaking Changes (1)

##### Design

###### Fields

− Field `projectTemplates` was removed from object type `DesLibrary`

#### ✅ Non-Breaking Changes (10)

##### Design

###### 🔍 Query

\+ Field `desWorkspaceConfiguration` was added to object type `Query`

\+ Argument `workspaceUrl: String!` added to `Query.desWorkspaceConfiguration`

###### Types

\+ Type `DesWorkspaceConfiguration` was added

Δ Object type `DesWorkspaceConfiguration` has description `Information about workspace configuration.`

###### Arguments

\+ Argument `first: Int` added to `DesWorkspaceConfiguration.projectTemplates`

\+ Argument `after: String` added to `DesWorkspaceConfiguration.projectTemplates`

\+ Argument `last: Int` added to `DesWorkspaceConfiguration.projectTemplates`

\+ Argument `before: String` added to `DesWorkspaceConfiguration.projectTemplates`

###### Fields

\+ Field `projectTemplates` was added to object type `DesWorkspaceConfiguration`

\+ Field `configuration` was added to object type `DesWorkspace`

### 17-Mar-2025

#### ✅ Non-Breaking Changes (2)

##### Platform

###### Input / Payload

\+ Input field `name` of type `String` was added to input object type `GloEvtCreateWebhookSubscriptionInput`

Δ Input field `GloEvtCreateWebhookSubscriptionInput.filter` changed type from `String!` to `String`

### 10-Mar-2025

#### ✅ Non-Breaking Changes (53)

##### Platform

###### 🔍 Query

\+ Field `gloEvtSubscriptionById` was added to object type `Query`

\+ Argument `subscriptionId: String!` added to `Query.gloEvtSubscriptionById`

###### ✏️ Mutation

\+ Field `gloEvtCreateWebhookSubscription` was added to object type `Mutation`

\+ Argument `input: GloEvtCreateWebhookSubscriptionInput!` added to `Mutation.gloEvtCreateWebhookSubscription`

\+ Field `gloEvtDeleteSubscription` was added to object type `Mutation`

\+ Argument `input: GloEvtDeleteSubscriptionInput!` added to `Mutation.gloEvtDeleteSubscription`

\+ Field `gloEvtPublishEvent` was added to object type `Mutation`

\+ Argument `input: GloEvtPublishEventInput!` added to `Mutation.gloEvtPublishEvent`

###### Types

\+ Type `GloEvtCreateSubscriptionPayload` was added

Δ Object type `GloEvtCreateSubscriptionPayload` has description `Represents the result of subscription creation operation.`

\+ Type `GloEvtDeleteSubscriptionPayload` was added

Δ Object type `GloEvtDeleteSubscriptionPayload` has description `Represents the result of subscription deletion operation.`

\+ Type `GloEvtError` was added

Δ Object type `GloEvtError` has description `Represents the information about an error.`

\+ Type `GloEvtPublishEventPayload` was added

Δ Object type `GloEvtPublishEventPayload` has description `Represents the result of event publishing operation.`

\+ Type `GloEvtWebhookSubscription` was added

Δ `GloEvtWebhookSubscription` object implements `GloEvtSubscription` interface

Δ Object type `GloEvtWebhookSubscription` has description `Represents the webhook-based subscription.`

\+ Type `GloEvtSubscription` was added

Δ Object type `GloEvtSubscription` has description `Represents the application subscription to some events.`

\+ Type `GloEvtSubscriptionState` was added

\+ Enum value `INACTIVE` was added to enum `GloEvtSubscriptionState`

\+ Enum value `ACTIVE` was added to enum `GloEvtSubscriptionState`

Δ Object type `GloEvtSubscriptionState` has description `Represents the state of the subscription.`

\+ Type `GloEvtCreateWebhookSubscriptionInput` was added

Δ Object type `GloEvtCreateWebhookSubscriptionInput` has description `Represents the information required to create a webhook-based subscription.`

\+ Type `GloEvtDeleteSubscriptionInput` was added

Δ Object type `GloEvtDeleteSubscriptionInput` has description `Information required to delete a subscription.`

\+ Type `GloEvtPublishEventInput` was added

Δ Object type `GloEvtPublishEventInput` has description `Represents the information about an event to be dispatched to consumers.`

###### Fields

\+ Field `errors` was added to object type `GloEvtCreateSubscriptionPayload`

\+ Field `subscription` was added to object type `GloEvtCreateSubscriptionPayload`

\+ Field `errors` was added to object type `GloEvtDeleteSubscriptionPayload`

\+ Field `message` was added to object type `GloEvtError`

\+ Field `errors` was added to object type `GloEvtPublishEventPayload`

\+ Field `eventTypes` was added to object type `GloEvtWebhookSubscription`

\+ Field `state` was added to object type `GloEvtWebhookSubscription`

\+ Field `subscriptionId` was added to object type `GloEvtWebhookSubscription`

\+ Field `webHookUrl` was added to object type `GloEvtWebhookSubscription`

Δ Field `subscriptionId` was added to interface `GloEvtSubscription`

Δ Field `eventTypes` was added to interface `GloEvtSubscription`

Δ Field `state` was added to interface `GloEvtSubscription`

###### Input / Payload

\+ Input field `eventTypes` of type `[String!]!` was added to input object type `GloEvtCreateWebhookSubscriptionInput`

\+ Input field `webhookUrl` of type `String!` was added to input object type `GloEvtCreateWebhookSubscriptionInput`

\+ Input field `filter` of type `String!` was added to input object type `GloEvtCreateWebhookSubscriptionInput`

\+ Input field `secretKey` of type `String!` was added to input object type `GloEvtCreateWebhookSubscriptionInput`

\+ Input field `subscriptionId` of type `String!` was added to input object type `GloEvtDeleteSubscriptionInput`

\+ Input field `eventId` of type `String!` was added to input object type `GloEvtPublishEventInput`

\+ Input field `eventType` of type `String!` was added to input object type `GloEvtPublishEventInput`

\+ Input field `source` of type `String!` was added to input object type `GloEvtPublishEventInput`

\+ Input field `subject` of type `String!` was added to input object type `GloEvtPublishEventInput`

\+ Input field `data` of type `String!` was added to input object type `GloEvtPublishEventInput`

### 27-Feb-2025

#### ✅ Non-Breaking Changes (16)

##### Design

###### Types

\+ Type `DesDatasheet` was added

Δ `DesDatasheet` object implements `Node` interface

Δ Object type `DesDatasheet` has description `A component datasheet.`

###### Fields

\+ Field `comment` was added to object type `DesDatasheet`

\+ Field `dataDownloadUrl` was added to object type `DesDatasheet`

\+ Field `description` was added to object type `DesDatasheet`

\+ Field `folder` was added to object type `DesDatasheet`

\+ Field `id` was added to object type `DesDatasheet`

\+ Field `itemInternalId` was added to object type `DesDatasheet`

\+ Field `name` was added to object type `DesDatasheet`

\+ Field `revisionInternalId` was added to object type `DesDatasheet`

\+ Field `datasheets` was added to object type `DesComponentDetails`

###### Input / Payload

\+ Input field `id` of type `ID` was added to input object type `DesReleaseComponentDatasheetInput`

Δ Input field `DesReleaseComponentDatasheetInput.file` changed type from `DesReleaseComponentFileInput!` to `DesReleaseComponentFileInput`

Δ Input field `DesReleaseComponentDatasheetInput.revisionNamingSchemeNodeId` changed type from `ID!` to `ID`

Δ Input field `DesReleaseComponentDatasheetInput.lifeCycleDefinitionNodeId` changed type from `ID!` to `ID`

### 18-Feb-2025

#### 🔴 Breaking Changes (2)

##### Library Management

###### Fields

− Field `descriptionUrl` was removed from object type `DesPart`

− Field `partNumber` was removed from object type `DesPart`

#### ✅ Non-Breaking Changes (67)

##### Library Management

###### Types

\+ Type `DesPartAttribute` was added

\+ Type `DesPartCategory` was added

\+ Type `DesPartCompany` was added

\+ Type `DesPartCompanyOffer` was added

\+ Type `DesPartDocument` was added

\+ Type `DesPartDocumentCollection` was added

\+ Type `DesPartPricePoint` was added

\+ Type `DesPartProviderPart` was added

\+ Type `DesPartSellerWithOffers` was added

\+ Type `DesPartSpec` was added

\+ Type `DesPartSupplyPart` was added

###### Fields

\+ Field `attributeId` was added to object type `DesPartAttribute`

\+ Field `group` was added to object type `DesPartAttribute`

\+ Field `name` was added to object type `DesPartAttribute`

\+ Field `shortname` was added to object type `DesPartAttribute`

\+ Field `unitsName` was added to object type `DesPartAttribute`

\+ Field `unitsSymbol` was added to object type `DesPartAttribute`

\+ Field `valueType` was added to object type `DesPartAttribute`

\+ Field `categoryId` was added to object type `DesPartCategory`

\+ Field `name` was added to object type `DesPartCategory`

\+ Field `parentCategoryId` was added to object type `DesPartCategory`

\+ Field `path` was added to object type `DesPartCategory`

\+ Field `companyId` was added to object type `DesPartCompany`

\+ Field `name` was added to object type `DesPartCompany`

\+ Field `eligibleRegion` was added to object type `DesPartCompanyOffer`

\+ Field `factoryLeadDays` was added to object type `DesPartCompanyOffer`

\+ Field `inventoryLevel` was added to object type `DesPartCompanyOffer`

\+ Field `moq` was added to object type `DesPartCompanyOffer`

\+ Field `offerId` was added to object type `DesPartCompanyOffer`

\+ Field `orderMultiple` was added to object type `DesPartCompanyOffer`

\+ Field `packaging` was added to object type `DesPartCompanyOffer`

\+ Field `prices` was added to object type `DesPartCompanyOffer`

\+ Field `sku` was added to object type `DesPartCompanyOffer`

\+ Field `updated` was added to object type `DesPartCompanyOffer`

\+ Field `mimeType` was added to object type `DesPartDocument`

\+ Field `name` was added to object type `DesPartDocument`

\+ Field `url` was added to object type `DesPartDocument`

\+ Field `documents` was added to object type `DesPartDocumentCollection`

\+ Field `name` was added to object type `DesPartDocumentCollection`

\+ Field `currency` was added to object type `DesPartPricePoint`

\+ Field `price` was added to object type `DesPartPricePoint`

\+ Field `quantity` was added to object type `DesPartPricePoint`

\+ Field `category` was added to object type `DesPartProviderPart`

\+ Field `documentCollections` was added to object type `DesPartProviderPart`

\+ Field `manufacturer` was added to object type `DesPartProviderPart`

\+ Field `mpn` was added to object type `DesPartProviderPart`

\+ Field `providerId` was added to object type `DesPartProviderPart`

\+ Field `sellers` was added to object type `DesPartProviderPart`

\+ Field `specs` was added to object type `DesPartProviderPart`

\+ Field `company` was added to object type `DesPartSellerWithOffers`

\+ Field `offers` was added to object type `DesPartSellerWithOffers`

\+ Field `partSourceName` was added to object type `DesPartSellerWithOffers`

\+ Field `attribute` was added to object type `DesPartSpec`

\+ Field `displayValue` was added to object type `DesPartSpec`

\+ Field `siValue` was added to object type `DesPartSpec`

\+ Field `units` was added to object type `DesPartSpec`

\+ Field `unitsName` was added to object type `DesPartSpec`

\+ Field `unitsSymbol` was added to object type `DesPartSpec`

\+ Field `value` was added to object type `DesPartSpec`

\+ Field `valueType` was added to object type `DesPartSpec`

\+ Field `supplyPartId` was added to object type `DesPartSupplyPart`

\+ Field `customPart` was added to object type `DesPart`

\+ Field `localSupplyPart` was added to object type `DesPart`

\+ Field `mpn` was added to object type `DesPart`

\+ Field `siliconExpertPart` was added to object type `DesPart`

\+ Field `supplyPart` was added to object type `DesPart`

\+ Field `z2DataPart` was added to object type `DesPart`

### 12-Feb-2025

#### 🔴 Breaking Changes (2)

##### Procurement

###### Types

− Type `BomError` was removed

Δ `BomLifecycleStateTransitionNotApplicableError` object type no longer implements `BomError` interface

#### ⚠️ Dangerous Changes (1)

##### Procurement

###### Types

Δ `BomLifecycleStateTransitionNotApplicableError` object implements `Error` interface

#### ✅ Non-Breaking Changes (2)

##### Common

###### Types

\+ Type `Error` was added

###### Fields

Δ Field `message` was added to interface `Error`

### 06-Feb-2025

#### 🔴 Breaking Changes (1)

##### Design

###### Input / Payload

− Input field `id` was removed from input object type `DesReleaseFilterInput`

#### ⚠️ Dangerous Changes (2)

##### Design

###### Types

Δ `DesReleaseVariant` object implements `Node` interface

Δ `DesWipVariant` object implements `Node` interface

#### ✅ Non-Breaking Changes (10)

##### Design

###### 🔍 Query

\+ Field `desReleaseVariantById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desReleaseVariantById`

\+ Field `desWipVariantById` was added to object type `Query`

\+ Argument `id: ID!` added to `Query.desWipVariantById`

Δ Field `Query.desBomById` is deprecated

Δ Directive `deprecated` was added to `Query.desBomById`

###### Fields

Δ Field `DesBom.id` is deprecated

Δ Directive `deprecated` was added to `DesBom.id`

\+ Field `id` was added to object type `DesReleaseVariant`

\+ Field `id` was added to object type `DesWipVariant`

### 03-Feb-2025

#### ✅ Non-Breaking Changes (83)

##### Procurement

###### ✏️ Mutation

\+ Field `bomChangeBomReleaseLifecycleState` was added to object type `Mutation`

\+ Argument `input: BomChangeBomReleaseLifecycleStateInput!` added to `Mutation.bomChangeBomReleaseLifecycleState`

###### Types

\+ Type `BomChangeBomReleaseLifecycleStatePayload` was added

\+ Type `BomDesignRevisionSource` was added

Δ `BomDesignRevisionSource` object implements `BomSource` interface

Δ Object type `BomDesignRevisionSource` has description `Describes the source design revision used to create the current BOM.`

\+ Type `BomHealthCheck` was added

Δ Object type `BomHealthCheck` has description `Health check description.`

\+ Type `BomHealthCheckCategory` was added

Δ Object type `BomHealthCheckCategory` has description `Information about the health check category (e.g., *Supply Chain*, *Manufacturer Lifecycles*).`

\+ Type `BomHealthCheckProvider` was added

Δ Object type `BomHealthCheckProvider` has description `Information about the health check provider.`

\+ Type `BomIssue` was added

Δ Object type `BomIssue` has description `Issue details.`

\+ Type `BomLifecycleStateTransitionNotApplicableError` was added

Δ `BomLifecycleStateTransitionNotApplicableError` object implements `BomError` interface

\+ Type `BomSnapshotSource` was added

Δ `BomSnapshotSource` object implements `BomSource` interface

Δ Object type `BomSnapshotSource` has description `Describes the source BOM snapshot used to create the current BOM.`

\+ Type `BomError` was added

\+ Type `BomChangeBomReleaseLifecycleStateError` was added

\+ Member `BomLifecycleStateTransitionNotApplicableError` was added to Union type `BomChangeBomReleaseLifecycleStateError`

\+ Type `BomHealthCheckSeverity` was added

\+ Enum value `FATAL` was added to enum `BomHealthCheckSeverity`

\+ Enum value `ERROR` was added to enum `BomHealthCheckSeverity`

\+ Enum value `WARNING` was added to enum `BomHealthCheckSeverity`

\+ Enum value `INFORMATION` was added to enum `BomHealthCheckSeverity`

\+ Enum value `SILENT` was added to enum `BomHealthCheckSeverity`

\+ Type `BomIssueSeverity` was added

\+ Enum value `FATAL` was added to enum `BomIssueSeverity`

\+ Enum value `ERROR` was added to enum `BomIssueSeverity`

\+ Enum value `WARNING` was added to enum `BomIssueSeverity`

\+ Enum value `INFORMATION` was added to enum `BomIssueSeverity`

\+ Type `BomChangeBomReleaseLifecycleStateInput` was added

###### Fields

\+ Field `bomRelease` was added to object type `BomChangeBomReleaseLifecycleStatePayload`

\+ Field `errors` was added to object type `BomChangeBomReleaseLifecycleStatePayload`

\+ Field `designId` was added to object type `BomDesignRevisionSource`

\+ Field `quantity` was added to object type `BomDesignRevisionSource`

\+ Field `sourceRevisionId` was added to object type `BomDesignRevisionSource`

\+ Field `variantName` was added to object type `BomDesignRevisionSource`

\+ Field `category` was added to object type `BomHealthCheck`

\+ Field `description` was added to object type `BomHealthCheck`

\+ Field `group` was added to object type `BomHealthCheck`

\+ Field `healthCheckId` was added to object type `BomHealthCheck`

\+ Field `howToFix` was added to object type `BomHealthCheck`

\+ Field `label` was added to object type `BomHealthCheck`

\+ Field `provider` was added to object type `BomHealthCheck`

\+ Field `severity` was added to object type `BomHealthCheck`

\+ Field `categoryId` was added to object type `BomHealthCheckCategory`

\+ Field `name` was added to object type `BomHealthCheckCategory`

\+ Field `name` was added to object type `BomHealthCheckProvider`

\+ Field `providerId` was added to object type `BomHealthCheckProvider`

\+ Field `description` was added to object type `BomIssue`

\+ Field `healthCheck` was added to object type `BomIssue`

\+ Field `healthcheckDefinitionId` was added to object type `BomIssue`

Δ Field `BomIssue.healthcheckDefinitionId` is deprecated

Δ Directive `deprecated` was added to `BomIssue.healthcheckDefinitionId`

\+ Field `howToFix` was added to object type `BomIssue`

\+ Field `severity` was added to object type `BomIssue`

\+ Field `waived` was added to object type `BomIssue`

\+ Field `message` was added to object type `BomLifecycleStateTransitionNotApplicableError`

\+ Field `bomId` was added to object type `BomSnapshotSource`

\+ Field `quantity` was added to object type `BomSnapshotSource`

\+ Field `snapshotId` was added to object type `BomSnapshotSource`

Δ Field `message` was added to interface `BomError`

\+ Field `issues` was added to object type `BomItem`

\+ Field `issues` was added to object type `BomItemAlternate`

\+ Field `issues` was added to object type `BomItemSubstitute`

\+ Field `healthChecks` was added to object type `BomRelease`

\+ Field `incompleteHealthChecks` was added to object type `BomRelease`

\+ Field `issues` was added to object type `BomRelease`

\+ Field `lifeCycleDefinitionId` was added to object type `BomRelease`

\+ Field `lifeCycleStateId` was added to object type `BomRelease`

\+ Field `healthChecks` was added to object type `BomWip`

\+ Field `incompleteHealthChecks` was added to object type `BomWip`

\+ Field `issues` was added to object type `BomWip`

Δ Field `issues` was added to interface `Bom`

Δ Field `healthChecks` was added to interface `Bom`

Δ Field `incompleteHealthChecks` was added to interface `Bom`

Δ Field `issues` was added to interface `BomItemElement`

###### Input / Payload

\+ Input field `bomId` of type `String!` was added to input object type `BomChangeBomReleaseLifecycleStateInput`

\+ Input field `releaseId` of type `String!` was added to input object type `BomChangeBomReleaseLifecycleStateInput`

\+ Input field `transitionId` of type `String!` was added to input object type `BomChangeBomReleaseLifecycleStateInput`

### 28-Jan-2025

#### ✅ Non-Breaking Changes (13)

##### Library Management

###### 🔍 Query

\+ Field `desSearchComponentsByMpns` was added to object type `Query`

\+ Argument `input: [DesSearchComponentByMpnInput!]!` added to `Query.desSearchComponentsByMpns`

###### Types

\+ Type `DesSearchComponentResult` was added

Δ Object type `DesSearchComponentResult` has description `Result of desSearchComponentsByMpns query.`

\+ Type `DesSearchComponentByMpnInput` was added

Δ Object type `DesSearchComponentByMpnInput` has description `Input parameter for desSearchComponentsByMpns query.`

###### Fields

\+ Field `componentId` was added to object type `DesSearchComponentResult`

\+ Field `itemId` was added to object type `DesSearchComponentResult`

\+ Field `itemName` was added to object type `DesSearchComponentResult`

\+ Field `revisionId` was added to object type `DesSearchComponentResult`

\+ Field `revisionName` was added to object type `DesSearchComponentResult`

###### Input / Payload

\+ Input field `mpn` of type `String!` was added to input object type `DesSearchComponentByMpnInput`

\+ Input field `manufacturerName` of type `String` was added to input object type `DesSearchComponentByMpnInput`

### 24-Jan-2025

#### ✅ Non-Breaking Changes (4)

##### Customization

###### Types

\+ Type `GloCusPredefinedValue` was added

###### Fields

\+ Field `displayText` was added to object type `GloCusPredefinedValue`

\+ Field `value` was added to object type `GloCusPredefinedValue`

\+ Field `predefinedValues` was added to object type `GloCusExtensionPointParameter`

### 23-Jan-2025

#### 🔴 Breaking Changes (75)

##### Customization

###### 🔍 Query

− Field `gloCusExtensionPointDefinitions` was removed from object type `Query`

− Field `gloCusExtensionPointScript` was removed from object type `Query`

− Field `gloCusExtensionPointScriptTemplate` was removed from object type `Query`

Δ Field `Query.gloCusExtensionPoints` changed type from `GloCusExtensionPointConnection` to `[GloCusExtensionPoint!]!`

− Argument `first: Int` was removed from field `Query.gloCusExtensionPoints`

− Argument `after: String` was removed from field `Query.gloCusExtensionPoints`

− Argument `last: Int` was removed from field `Query.gloCusExtensionPoints`

− Argument `before: String` was removed from field `Query.gloCusExtensionPoints`

###### ✏️ Mutation

− Field `gloCusCreateExtensionPoint` was removed from object type `Mutation`

− Field `gloCusDeleteExtensionPoint` was removed from object type `Mutation`

− Field `gloCusExecuteDryRun` (deprecated) was removed from object type `Mutation`

− Field `gloCusExecuteExtensionPoint` was removed from object type `Mutation`

− Field `gloCusUpdateExtensionPointAssignment` was removed from object type `Mutation`

− Field `gloCusUpdateExtensionPointConfiguration` (deprecated) was removed from object type `Mutation`

− Field `gloCusUpdateExtensionPointConfigurations` was removed from object type `Mutation`

###### Types

− Type `GloCusCreateExtensionPointPayload` was removed

− Type `GloCusDeleteExtensionPointPayload` was removed

− Type `GloCusExecuteDryRunPayload` was removed

− Type `GloCusExecuteExtensionPointPayload` was removed

− Type `GloCusExtensionPointConfigurationParameter` was removed

− Type `GloCusExtensionPointConnection` was removed

− Type `GloCusExtensionPointDefinition` was removed

− Type `GloCusExtensionPointDefinitionConnection` was removed

− Type `GloCusExtensionPointDefinitionEdge` was removed

− Type `GloCusExtensionPointDefinitionScriptTemplate` was removed

− Type `GloCusExtensionPointEdge` was removed

− Type `GloCusExtensionPointParameterDefinition` was removed

− Type `GloCusGetExtensionPointScriptTemplatePayload` was removed

− Type `GloCusGetExtensionScriptPointPayload` was removed

− Type `GloCusUpdateExtensionPointAssignmentPayload` was removed

− Type `GloCusUpdateExtensionPointConfigurationPayload` was removed

− Type `GloCusUpdateExtensionPointConfigurationsPayload` was removed

− Type `GloCusCreateExtensionPointInput` was removed

− Type `GloCusDeleteExtensionPointInput` was removed

− Type `GloCusExecuteDryRunInput` was removed

− Type `GloCusExecuteExtensionPointInput` was removed

− Type `GloCusExecuteExtensionPointInputModelInput` was removed

− Type `GloCusExecuteScriptFileInput` was removed

− Type `GloCusExtensionPointConfigurationParameterInput` was removed

− Type `GloCusExtensionPointDefinitionFilterInput` was removed

− Type `GloCusExtensionPointDefinitionSortInput` was removed

− Type `GloCusExtensionPointScriptParameterInput` was removed

− Type `GloCusGetExtensionPointScriptInput` was removed

− Type `GloCusGetExtensionPointScriptTemplateInput` was removed

− Type `GloCusStringOperationFilterInput` was removed

− Type `GloCusUpdateExtensionPointAssignmentInput` was removed

− Type `GloCusUpdateExtensionPointConfigurationInput` was removed

− Type `GloCusUpdateExtensionPointConfigurationsInput` was removed

− Type `GloCusUpdateWithExistingScriptInput` was removed

− Type `GloCusUpdateWithScriptFileInput` was removed

− Type `GloCusUpdateWithWorkflowAssignmentInput` was removed

Δ `GloCusAssignment` kind changed from `ObjectTypeDefinition` to `InterfaceTypeDefinition`

###### Fields

− Field `assignment` was removed from object type `GloCusExtensionPoint`

− Field `createdAt` was removed from object type `GloCusExtensionPoint`

− Field `definitionId` was removed from object type `GloCusExtensionPoint`

− Field `updatedAt` was removed from object type `GloCusExtensionPoint`

Δ Field `GloCusExtensionPoint.configurationParameters` changed type from `[GloCusExtensionPointConfigurationParameter]` to `[GloCusExtensionPointParameter!]!`

Δ Field `GloCusScriptExecutionInfo.status` changed type from `String!` to `GloCusScriptExecutionStatus!`

###### Input / Payload

− Input field `description` was removed from input object type `GloCusAssignmentFilterInput`

Δ Input field `GloCusAssignmentFilterInput.assignmentId` changed type from `GloCusStringOperationFilterInput` to `GloCusStringTypeFilterInput`

Δ Input field `GloCusAssignmentFilterInput.name` changed type from `GloCusStringOperationFilterInput` to `GloCusStringTypeFilterInput`

− Input field `description` was removed from input object type `GloCusAssignmentSortInput`

− Input field `definitionId` was removed from input object type `GloCusExtensionPointFilterInput`

− Input field `createdAt` was removed from input object type `GloCusExtensionPointFilterInput`

− Input field `updatedAt` was removed from input object type `GloCusExtensionPointFilterInput`

− Input field `assignment` was removed from input object type `GloCusExtensionPointFilterInput`

− Input field `definitionId` was removed from input object type `GloCusExtensionPointSortInput`

− Input field `createdAt` was removed from input object type `GloCusExtensionPointSortInput`

− Input field `updatedAt` was removed from input object type `GloCusExtensionPointSortInput`

− Input field `assignment` was removed from input object type `GloCusExtensionPointSortInput`

− Input field `extensionPointId` was removed from input object type `GloCusUpdateWithScriptAssignmentInput`

− Input field `scriptAssignmentId` was removed from input object type `GloCusUpdateWithScriptAssignmentInput`

\+ Input field `scriptId` of type `String!` was added to input object type `GloCusUpdateWithScriptAssignmentInput`

\+ Input field `scriptVersionId` of type `String!` was added to input object type `GloCusUpdateWithScriptAssignmentInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusUpdateWithScriptAssignmentInput`

#### ⚠️ Dangerous Changes (1)

##### Customization

###### Types

\+ Enum value `DEFAULT` was added to enum `GloCusAssignmentType`

#### ✅ Non-Breaking Changes (178)

##### Customization

###### ✏️ Mutation

\+ Field `gloCusAddAssignment` was added to object type `Mutation`

\+ Argument `input: GloCusAddAssignmentInput!` added to `Mutation.gloCusAddAssignment`

\+ Field `gloCusDeleteAssignment` was added to object type `Mutation`

\+ Argument `input: GloCusDeleteAssignmentInput!` added to `Mutation.gloCusDeleteAssignment`

\+ Field `gloCusExecuteAssignment` was added to object type `Mutation`

\+ Argument `input: GloCusExecuteAssignmentInput!` added to `Mutation.gloCusExecuteAssignment`

\+ Field `gloCusUpdateAssignment` was added to object type `Mutation`

\+ Argument `input: GloCusUpdateAssignmentInput!` added to `Mutation.gloCusUpdateAssignment`

\+ Field `gloCusUpdateAssignmentConfigurations` was added to object type `Mutation`

\+ Argument `input: GloCusUpdateAssignmentConfigurationsInput!` added to `Mutation.gloCusUpdateAssignmentConfigurations`

###### Types

\+ Type `GloCusAddAssignmentPayload` was added

Δ Object type `GloCusAddAssignmentPayload` has description `Represents output value for extension point assignment creation.`

\+ Type `GloCusAssignmentConfigurationParameter` was added

\+ Type `GloCusAssignmentConnection` was added

Δ Object type `GloCusAssignmentConnection` has description `A connection to a list of items.`

\+ Type `GloCusAssignmentEdge` was added

Δ Object type `GloCusAssignmentEdge` has description `An edge in a connection.`

\+ Type `GloCusAssignmentParameter` was added

Δ Object type `GloCusAssignmentParameter` has description `Parameter for the assignment.`

\+ Type `GloCusDefaultAssignment` was added

Δ `GloCusDefaultAssignment` object implements `GloCusAssignment` interface

\+ Type `GloCusDeleteAssignmentPayload` was added

Δ Object type `GloCusDeleteAssignmentPayload` has description `Represents output value for assignment deletion.`

\+ Type `GloCusExecuteAssignmentPayload` was added

Δ Object type `GloCusExecuteAssignmentPayload` has description `Represents output value for assignment execution.`

\+ Type `GloCusExtensionPointParameter` was added

\+ Type `GloCusJsonArrayOfAssignmentConfigurationParameter` was added

\+ Type `GloCusScriptAssignment` was added

Δ `GloCusScriptAssignment` object implements `GloCusAssignment` interface

\+ Type `GloCusUpdateAssignmentConfigurationsPayload` was added

\+ Type `GloCusUpdateAssignmentPayload` was added

Δ Object type `GloCusUpdateAssignmentPayload` has description `Represents output value for updating extension point assignment.`

\+ Type `GloCusWorkflowAssignment` was added

Δ `GloCusWorkflowAssignment` object implements `GloCusAssignment` interface

\+ Type `GloCusScriptExecutionStatus` was added

\+ Enum value `UNKNOWN` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `PENDING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `RUNNING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `STOPPING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `STOPPED` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `PROVISIONING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `DEPROVISIONING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `ACTIVATING` was added to enum `GloCusScriptExecutionStatus`

\+ Enum value `DEACTIVATING` was added to enum `GloCusScriptExecutionStatus`

\+ Type `GloCusAddAssignmentInput` was added

Δ Object type `GloCusAddAssignmentInput` has description `Represents input value for extension point assignment creation.`

\+ Type `GloCusAssignmentExecutionParameterInput` was added

\+ Type `GloCusAssignmentParameterInput` was added

Δ Object type `GloCusAssignmentParameterInput` has description `Parameter for the assignment.`

\+ Type `GloCusBooleanOperationFilterInput` was added

\+ Type `GloCusDeleteAssignmentInput` was added

Δ Object type `GloCusDeleteAssignmentInput` has description `Represents input value for assignment deletion.`

\+ Type `GloCusExecuteAssignmentInput` was added

Δ Object type `GloCusExecuteAssignmentInput` has description `Represents input value for assignment execution.`

\+ Type `GloCusUpdateAssignmentConfigurationInput` was added

Δ Object type `GloCusUpdateAssignmentConfigurationInput` has description `Represents input value for updating assignment configuration.`

\+ Type `GloCusUpdateAssignmentConfigurationsInput` was added

Δ Object type `GloCusUpdateAssignmentConfigurationsInput` has description `Represents input value for updating multiple eassignment configuration.`

\+ Type `GloCusUpdateAssignmentInput` was added

Δ Object type `GloCusUpdateAssignmentInput` has description `Represents input value for extension point assignment update.`

\+ Type `GloCusUpdateWithScriptFileAssignmentInput` was added

Δ Object type `GloCusUpdateWithScriptFileAssignmentInput` has description `Represents input value for updating with script file assignment.`

\+ Type `GloCusUpdateWorkflowAssignmentInput` was added

Δ Object type `GloCusUpdateWorkflowAssignmentInput` has description `Represents input value for updating with workflow assignment.`

− Description `Assignment represents a link between extension point and script that will be executed.` was removed from object type `GloCusAssignment`

− Description `Extension point is a place in the system which can be extended with custom behaviour.` was removed from object type `GloCusExtensionPoint`

− Description `Type of the assignment.` was removed from object type `GloCusAssignmentType`

− Description `Assignment represents a link between extension point and script that will be executed.` was removed from object type `GloCusAssignmentFilterInput`

− Description `Assignment represents a link between extension point and script that will be executed.` was removed from object type `GloCusAssignmentSortInput`

− Description `Extension point is a place in the system which can be extended with custom behaviour.` was removed from object type `GloCusExtensionPointFilterInput`

− Description `Extension point is a place in the system which can be extended with custom behaviour.` was removed from object type `GloCusExtensionPointSortInput`

###### Arguments

\+ Argument `first: Int` added to `GloCusExtensionPoint.assignments`

\+ Argument `after: String` added to `GloCusExtensionPoint.assignments`

\+ Argument `last: Int` added to `GloCusExtensionPoint.assignments`

\+ Argument `before: String` added to `GloCusExtensionPoint.assignments`

\+ Argument `where: GloCusAssignmentFilterInput` added to `GloCusExtensionPoint.assignments`

\+ Argument `order: [GloCusAssignmentSortInput!]` added to `GloCusExtensionPoint.assignments`

###### Fields

\+ Field `assignmentId` was added to object type `GloCusAddAssignmentPayload`

\+ Field `name` was added to object type `GloCusAssignmentConfigurationParameter`

\+ Field `value` was added to object type `GloCusAssignmentConfigurationParameter`

\+ Field `edges` was added to object type `GloCusAssignmentConnection`

\+ Field `nodes` was added to object type `GloCusAssignmentConnection`

\+ Field `pageInfo` was added to object type `GloCusAssignmentConnection`

\+ Field `totalCount` was added to object type `GloCusAssignmentConnection`

\+ Field `cursor` was added to object type `GloCusAssignmentEdge`

\+ Field `node` was added to object type `GloCusAssignmentEdge`

\+ Field `name` was added to object type `GloCusAssignmentParameter`

\+ Field `value` was added to object type `GloCusAssignmentParameter`

\+ Field `active` was added to object type `GloCusDefaultAssignment`

\+ Field `assignmentId` was added to object type `GloCusDefaultAssignment`

\+ Field `configurationParameters` was added to object type `GloCusDefaultAssignment`

\+ Field `configurationParams` was added to object type `GloCusDefaultAssignment`

\+ Field `createdAt` was added to object type `GloCusDefaultAssignment`

\+ Field `createdBy` was added to object type `GloCusDefaultAssignment`

\+ Field `description` was added to object type `GloCusDefaultAssignment`

\+ Field `lastModifiedAt` was added to object type `GloCusDefaultAssignment`

\+ Field `lastModifiedBy` was added to object type `GloCusDefaultAssignment`

\+ Field `name` was added to object type `GloCusDefaultAssignment`

\+ Field `type` was added to object type `GloCusDefaultAssignment`

\+ Field `assignmentId` was added to object type `GloCusDeleteAssignmentPayload`

\+ Field `scriptExecutionId` was added to object type `GloCusExecuteAssignmentPayload`

\+ Field `description` was added to object type `GloCusExtensionPointParameter`

\+ Field `name` was added to object type `GloCusExtensionPointParameter`

\+ Field `gloCusValue` was added to object type `GloCusJsonArrayOfAssignmentConfigurationParameter`

\+ Field `json` was added to object type `GloCusJsonArrayOfAssignmentConfigurationParameter`

\+ Field `active` was added to object type `GloCusScriptAssignment`

\+ Field `assignmentId` was added to object type `GloCusScriptAssignment`

\+ Field `configurationParameters` was added to object type `GloCusScriptAssignment`

\+ Field `createdAt` was added to object type `GloCusScriptAssignment`

\+ Field `createdBy` was added to object type `GloCusScriptAssignment`

\+ Field `description` was added to object type `GloCusScriptAssignment`

\+ Field `lastModifiedAt` was added to object type `GloCusScriptAssignment`

\+ Field `lastModifiedBy` was added to object type `GloCusScriptAssignment`

\+ Field `name` was added to object type `GloCusScriptAssignment`

\+ Field `scriptFileToken` was added to object type `GloCusScriptAssignment`

\+ Field `scriptId` was added to object type `GloCusScriptAssignment`

\+ Field `scriptVersionId` was added to object type `GloCusScriptAssignment`

\+ Field `type` was added to object type `GloCusScriptAssignment`

\+ Field `success` was added to object type `GloCusUpdateAssignmentConfigurationsPayload`

\+ Field `assignmentId` was added to object type `GloCusUpdateAssignmentPayload`

\+ Field `type` was added to object type `GloCusUpdateAssignmentPayload`

\+ Field `active` was added to object type `GloCusWorkflowAssignment`

\+ Field `assignmentId` was added to object type `GloCusWorkflowAssignment`

\+ Field `configurationParameters` was added to object type `GloCusWorkflowAssignment`

\+ Field `configurationParams` was added to object type `GloCusWorkflowAssignment`

\+ Field `createdAt` was added to object type `GloCusWorkflowAssignment`

\+ Field `createdBy` was added to object type `GloCusWorkflowAssignment`

\+ Field `description` was added to object type `GloCusWorkflowAssignment`

\+ Field `lastModifiedAt` was added to object type `GloCusWorkflowAssignment`

\+ Field `lastModifiedBy` was added to object type `GloCusWorkflowAssignment`

\+ Field `name` was added to object type `GloCusWorkflowAssignment`

\+ Field `type` was added to object type `GloCusWorkflowAssignment`

\+ Field `workflowId` was added to object type `GloCusWorkflowAssignment`

\+ Field `assignments` was added to object type `GloCusExtensionPoint`

\+ Field `description` was added to object type `GloCusExtensionPoint`

\+ Field `inputParameters` was added to object type `GloCusExtensionPoint`

\+ Field `outputParameters` was added to object type `GloCusExtensionPoint`

\+ Field `scriptDescription` was added to object type `GloCusExtensionPoint`

\+ Field `scriptName` was added to object type `GloCusExtensionPoint`

\+ Field `scriptText` was added to object type `GloCusExtensionPoint`

###### Input / Payload

\+ Input field `extensionPointId` of type `String!` was added to input object type `GloCusAddAssignmentInput`

\+ Input field `configurationParameters` of type `[GloCusAssignmentParameterInput!]!` was added to input object type `GloCusAddAssignmentInput`

\+ Input field `name` of type `String!` was added to input object type `GloCusAssignmentExecutionParameterInput`

\+ Input field `value` of type `String!` was added to input object type `GloCusAssignmentExecutionParameterInput`

\+ Input field `name` of type `String!` was added to input object type `GloCusAssignmentParameterInput`

\+ Input field `value` of type `String!` was added to input object type `GloCusAssignmentParameterInput`

\+ Input field `eq` of type `Boolean` was added to input object type `GloCusBooleanOperationFilterInput`

\+ Input field `neq` of type `Boolean` was added to input object type `GloCusBooleanOperationFilterInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusDeleteAssignmentInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusExecuteAssignmentInput`

\+ Input field `parameters` of type `[GloCusAssignmentExecutionParameterInput!]` was added to input object type `GloCusExecuteAssignmentInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusUpdateAssignmentConfigurationInput`

\+ Input field `configurationParameters` of type `[GloCusAssignmentParameterInput!]!` was added to input object type `GloCusUpdateAssignmentConfigurationInput`

\+ Input field `configurations` of type `[GloCusUpdateAssignmentConfigurationInput!]!` was added to input object type `GloCusUpdateAssignmentConfigurationsInput`

\+ Input field `script` of type `GloCusUpdateWithScriptAssignmentInput` was added to input object type `GloCusUpdateAssignmentInput`

\+ Input field `scriptFile` of type `GloCusUpdateWithScriptFileAssignmentInput` was added to input object type `GloCusUpdateAssignmentInput`

\+ Input field `workflow` of type `GloCusUpdateWorkflowAssignmentInput` was added to input object type `GloCusUpdateAssignmentInput`

\+ Input field `scriptFileToken` of type `String` was added to input object type `GloCusUpdateWithScriptFileAssignmentInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusUpdateWithScriptFileAssignmentInput`

\+ Input field `name` of type `String` was added to input object type `GloCusUpdateWithScriptFileAssignmentInput`

\+ Input field `description` of type `String` was added to input object type `GloCusUpdateWithScriptFileAssignmentInput`

\+ Input field `workflowId` of type `String` was added to input object type `GloCusUpdateWorkflowAssignmentInput`

\+ Input field `assignmentId` of type `String!` was added to input object type `GloCusUpdateWorkflowAssignmentInput`

\+ Input field `name` of type `String` was added to input object type `GloCusUpdateWorkflowAssignmentInput`

\+ Input field `description` of type `String` was added to input object type `GloCusUpdateWorkflowAssignmentInput`

\+ Input field `createdBy` of type `GloCusStringTypeFilterInput` was added to input object type `GloCusAssignmentFilterInput`

\+ Input field `lastModifiedBy` of type `GloCusStringTypeFilterInput` was added to input object type `GloCusAssignmentFilterInput`

\+ Input field `createdAt` of type `DateTimeOperationFilterInput` was added to input object type `GloCusAssignmentFilterInput`

\+ Input field `lastModifiedAt` of type `DateTimeOperationFilterInput` was added to input object type `GloCusAssignmentFilterInput`

\+ Input field `active` of type `GloCusBooleanOperationFilterInput` was added to input object type `GloCusAssignmentFilterInput`

\+ Input field `createdBy` of type `SortEnumType` was added to input object type `GloCusAssignmentSortInput`

\+ Input field `createdAt` of type `SortEnumType` was added to input object type `GloCusAssignmentSortInput`

\+ Input field `lastModifiedBy` of type `SortEnumType` was added to input object type `GloCusAssignmentSortInput`

\+ Input field `lastModifiedAt` of type `SortEnumType` was added to input object type `GloCusAssignmentSortInput`

\+ Input field `active` of type `SortEnumType` was added to input object type `GloCusAssignmentSortInput`

\+ Input field `name` of type `String` was added to input object type `GloCusUpdateWithScriptAssignmentInput`

\+ Input field `description` of type `String` was added to input object type `GloCusUpdateWithScriptAssignmentInput`

##### Design

###### Fields

\+ Field `downloadUrl` was added to object type `DesReleaseVariant`

### 15-Jan-2025

#### ✅ Non-Breaking Changes (12)

##### Design

###### Types

\+ Type `DesReleaseComponentFootprintInput` was added

Δ Object type `DesReleaseComponentFootprintInput` has description `Input for adding existing footprints to the release`

\+ Type `DesReleaseComponentSymbolInput` was added

Δ Object type `DesReleaseComponentSymbolInput` has description `Input for adding existing symbols to the release`

###### Input / Payload

\+ Input field `id` of type `ID!` was added to input object type `DesReleaseComponentFootprintInput`

\+ Input field `id` of type `ID!` was added to input object type `DesReleaseComponentSymbolInput`

\+ Input field `symbol` of type `DesReleaseComponentSymbolInput` was added to input object type `DesReleaseComponentInput`

\+ Input field `footprints` of type `[DesReleaseComponentFootprintInput!]` was added to input object type `DesReleaseComponentInput`

Δ Input field `DesReleaseComponentInput.symbolReleaseFolder` changed type from `String!` to `String`

Δ Input field `DesReleaseComponentInput.symbolFiles` changed type from `[DesReleaseComponentFileInput!]!` to `[DesReleaseComponentFileInput!]`

Δ Input field `DesReleaseComponentInput.footprintReleaseFolder` changed type from `String!` to `String`

Δ Input field `DesReleaseComponentInput.footprintFiles` changed type from `[DesReleaseComponentFileInput!]!` to `[DesReleaseComponentFileInput!]`

### 14-Jan-2025

#### ✅ Non-Breaking Changes (4)

##### Design

###### Fields

\+ Field `newComponentId` was added to object type `DesAddComponentPartChoicesPayload`

\+ Field `newComponentId` was added to object type `DesRemoveComponentPartChoicesPayload`

###### Input / Payload

\+ Input field `withRevisionControl` of type `Boolean` was added to input object type `DesAddComponentPartChoicesInput`

\+ Input field `withRevisionControl` of type `Boolean` was added to input object type `DesRemoveComponentPartChoicesInput`

### 09-Jan-2025

#### ⚠️ Dangerous Changes (2)

##### Design

###### Arguments

\+ Argument `withVariable: DesWorkflowFilterByVariableInput` added to `DesProject.workflows`

\+ Argument `withVariable: DesWorkflowFilterByVariableInput` added to `DesWorkspace.workflows`

#### ✅ Non-Breaking Changes (4)

##### Design

###### Types

\+ Type `DesWorkflowFilterByVariableInput` was added

Δ Object type `DesWorkflowFilterByVariableInput` has description `Filter workflows by a variable.`

###### Input / Payload

\+ Input field `name` of type `String` was added to input object type `DesWorkflowFilterByVariableInput`

\+ Input field `valueMatchesOneOf` of type `[String!]!` was added to input object type `DesWorkflowFilterByVariableInput`
