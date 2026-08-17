# Graph Report - anti-api  (2026-08-17)

## Corpus Check
- 114 files · ~504,260 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1357 nodes · 2800 edges · 88 communities (79 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe20ad82`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- kiro/oauth.ts
- codex/chat.ts
- grok/chat.ts
- usage-tracker.ts
- quota-aggregator.ts
- antigravity/chat.ts
- models.ts
- tunnel-manager.ts
- main.rs
- openai/handler.ts
- account-manager.ts
- server.ts
- constants.ts
- createAccountCompletionStreamWithEntries
- ping.ts
- codex/oauth.ts
- zed/chat.ts
- store.ts
- routing/route.ts
- openai/types.ts
- router.ts
- compilerOptions
- main.ts
- updates.ts
- lib/translator.ts
- routing-copilot-sync-route.test.ts
- log-buffer.ts
- messages/handler.ts
- messages/types.ts
- dependencies
- getProviderModels
- language_server.ts
- copilot/chat.ts
- error.ts
- logger.ts
- schema.ts
- rust-proxy.ts
- encoder.ts
- Architecture / 架构设计
- API Reference / API 参考
- Anti-API
- UpstreamError
- ide-switch.ts
- createZedCompletion
- package.json
- Docker
- openai-adapter.ts
- routing-models-dynamic.test.ts
- Routing + Multi-Auth Plan (Anthropic Only)
- Common Issues / 常见问题
- 中文说明
- Anti-API Development Guide
- Authorized Multi-Account Management
- Security Boundaries
- router.test.ts
- devDependencies
- build-winget-package.ts
- Contributing
- scripts
- authStore
- update-winget-manifest.ts
- json-schema-cleaner.ts
- RateLimiter
- buildAnthropicRequest
- 支持的模型
- 快速开始
- ide-filter.ts
- credential-transfer-disabled.test.ts
- TestRateLimiter
- Supported Models
- rust-proxy-config.test.ts
- Smart Routing System (Beta)
- Remote Access
- 智能路由系统 (Beta)
- 远程访问
- a
- @connectrpc/connect
- @connectrpc/connect-web
- consola
- winget/README.md
- sync-winget-pkgs.sh

## God Nodes (most connected - your core abstractions)
1. `AccountManager` - 34 edges
2. `createAccountCompletionStreamWithEntries()` - 24 edges
3. `createFlowCompletionStreamWithEntries()` - 23 edges
4. `createCodexCompletion()` - 20 edges
5. `UpstreamError` - 19 edges
6. `authStore` - 18 edges
7. `ProviderAccount` - 18 edges
8. `writePrivateFile()` - 17 edges
9. `createAccountCompletionWithEntries()` - 17 edges
10. `getDataDir()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `getLocalHost()` --calls--> `isLoopbackAddress()`  [EXTRACTED]
  src/main.ts → src/lib/local-request.ts
- `getAuthDir()` --calls--> `getDataDir()`  [EXTRACTED]
  src/services/kiro/oauth.ts → src/lib/data-dir.ts
- `ensureDir()` --calls--> `getDataDir()`  [EXTRACTED]
  src/services/routing/config.ts → src/lib/data-dir.ts
- `saveAuth()` --calls--> `ensureDataDir()`  [EXTRACTED]
  src/services/antigravity/login.ts → src/lib/data-dir.ts
- `forwardError()` --calls--> `safeErrorMessage()`  [EXTRACTED]
  src/lib/error.ts → src/lib/redaction.ts

## Import Cycles
- None detected.

## Communities (88 total, 9 thin omitted)

### Community 0 - "kiro/oauth.ts"
Cohesion: 0.07
Nodes (52): ContentBlock, createKiroCompletion(), KIRO_STATIC_MODELS, KiroModelInfo, listKiroModelsForAccount(), mapKiroError(), messageText(), safeParseJson() (+44 more)

### Community 1 - "codex/chat.ts"
Cohesion: 0.09
Nodes (46): buildCompletionFromResponses(), cleanupUnsupportedCache(), CODEX_REASONING_EFFORTS, CODEX_RETRY_STATUSES, codexModelCache, CodexModelCacheEntry, codexModelInFlight, CodexModelsResponse (+38 more)

### Community 2 - "grok/chat.ts"
Cohesion: 0.09
Nodes (44): buildCompletionFromResponses(), cleanupUnsupportedCache(), createGrokCompletion(), getCachedGrokModels(), getGrokHeaders(), getRetryDelay(), GROK_MODEL_LABELS, GROK_RETRY_STATUSES (+36 more)

### Community 3 - "usage-tracker.ts"
Cohesion: 0.08
Nodes (39): ensureDataDir(), getDataDir(), commandCheck(), countFiles(), dataDirDiagnostics(), DiagnosticReport, DiagnosticStatus, envDiagnostics() (+31 more)

### Community 4 - "quota-aggregator.ts"
Cohesion: 0.11
Nodes (40): AccountBar, AccountQuotaView, buildAntigravityBars(), buildCachedViews(), buildMergedBar(), buildZedHostedBar(), defaultCodexBars(), defaultCopilotBars() (+32 more)

### Community 5 - "antigravity/chat.ts"
Cohesion: 0.11
Nodes (36): formatSuccessLine(), ANTIGRAVITY_BASE_URLS, buildAntigravityParts(), buildFunctionCallingConfig(), buildSafetySettings(), buildSystemInstruction(), ChatResponse, claudeToAntigravity() (+28 more)

### Community 6 - "models.ts"
Cohesion: 0.08
Nodes (28): CODEX_HIDDEN_MODELS, CODEX_MODELS, COPILOT_STATIC_MODELS, dynamicAntigravityModels, dynamicAntigravityModelsByAccount, dynamicCodexModels, dynamicCodexModelsByAccount, dynamicCopilotModels (+20 more)

### Community 7 - "tunnel-manager.ts"
Cohesion: 0.14
Nodes (26): getLegacyProjectDataDir(), getPublicGatewayPort(), start, remoteRouter, attemptNgrokReconnect(), clearSavedNgrokAuthtoken(), CONFIG_FILE, getAllTunnelStatus() (+18 more)

### Community 8 - "main.rs"
Cohesion: 0.12
Nodes (21): Arc, Client, HeaderMap, Instant, Mutex, Option, Request, Response (+13 more)

### Community 9 - "openai/handler.ts"
Cohesion: 0.24
Nodes (16): forwardError(), summarizeUpstreamError(), buildValidationReason(), extractReasoningEffort(), handleChatCompletion(), handleStreamCompletion(), normalizeChatPayload(), ReasoningEffort (+8 more)

### Community 10 - "account-manager.ts"
Cohesion: 0.05
Nodes (51): ensurePrivateDir(), tightenPrivateFile(), writePrivateFile(), State, authRouter, Account, AccountManager, defaultRateLimitMs() (+43 more)

### Community 11 - "server.ts"
Cohesion: 0.16
Nodes (19): AVAILABLE_MODELS, DEFAULT_PORT, isLoopbackAddress(), isLoopbackHost(), isLoopbackOrigin(), isLoopbackRequest(), isRemoteControlPlaneAllowed(), LOOPBACK_IPV4 (+11 more)

### Community 12 - "constants.ts"
Cohesion: 0.12
Nodes (21): DEFAULT_RATE_LIMIT_COOLDOWN_MS, EXPONENTIAL_BACKOFF_BASE_MS, EXPONENTIAL_BACKOFF_MAX_MS, MAX_ACCOUNT_ID_LENGTH, MAX_MESSAGES_PER_REQUEST, MAX_MODEL_NAME_LENGTH, MAX_RETRY_ATTEMPTS, MAX_SANITIZED_STRING_LENGTH (+13 more)

### Community 13 - "createAccountCompletionStreamWithEntries"
Cohesion: 0.22
Nodes (24): setRequestLogContext(), isCodexModelSupportedForAccount(), isCodexUnsupportedModelError(), advanceAccountCursor(), advanceFlowCursor(), applyFlowRateLimit(), createAccountCompletionStreamWithEntries(), createAccountCompletionWithEntries() (+16 more)

### Community 14 - "ping.ts"
Cohesion: 0.15
Nodes (22): DiagnosticCheck, AuthProvider, getAntigravityPingCandidates(), getRoutingModelsForAccount(), PING_MESSAGES, pingAccount(), AccountRoutingConfig, AccountRoutingEntry (+14 more)

### Community 15 - "codex/oauth.ts"
Cohesion: 0.08
Nodes (55): base64Url(), buildCodexAuthorizeUrl(), buildExpiredIso(), CODEX_OAUTH_CONFIG, CODEX_PROXY_REFRESH_URL, CodexCallbackResult, CodexCliLoginSession, codexCliSessions (+47 more)

### Community 16 - "zed/chat.ts"
Cohesion: 0.14
Nodes (22): appendText(), finalizeToolBlocks(), parseAnthropicEvents(), parseCompletionText(), parseGoogleEvents(), parseJsonSafe(), parseOpenAiChatEvents(), parseOpenAiResponsesEvents() (+14 more)

### Community 17 - "store.ts"
Cohesion: 0.07
Nodes (33): applyRetryDelay(), calculateRetryDelay(), determineRetryStrategy(), parseDurationMs(), parseRetryAfterHeader(), parseRetryDelay(), parseRetryDelayFromText(), RetryStrategy (+25 more)

### Community 18 - "routing/route.ts"
Cohesion: 0.10
Nodes (17): resolveAccountLabel(), routingRouter, syncAccountRoutingLabels(), syncFlowLabels(), clearAllDynamicAntigravityModelsByAccount(), clearAllDynamicCodexModelsByAccount(), clearAllDynamicCopilotModelsByAccount(), clearAllDynamicKiroModelsByAccount() (+9 more)

### Community 19 - "openai/types.ts"
Cohesion: 0.20
Nodes (9): OpenAIChatCompletionRequest, OpenAIChatCompletionResponse, OpenAIChoice, OpenAIMessage, OpenAIStreamChoice, OpenAIStreamChunk, OpenAITool, OpenAIToolCall (+1 more)

### Community 20 - "router.ts"
Cohesion: 0.15
Nodes (20): AccountStickyState, accountStickyStates, buildAutoEntriesForProvider(), buildOfficialModelIndex(), FALLBACK_STATUSES, FlowStickyState, flowStickyStates, getFlowKey() (+12 more)

### Community 21 - "compilerOptions"
Cohesion: 0.10
Nodes (19): bun-types, dist, node_modules, src/**/*, compilerOptions, declaration, esModuleInterop, forceConsistentCasingInFileNames (+11 more)

### Community 22 - "main.ts"
Cohesion: 0.11
Nodes (18): execAsync, findLanguageServerForWorkspace(), getLanguageServerInfo(), LanguageServerInfo, getPublicGatewayHost(), ANTIGRAVITY_DB_PATH, AntigravityAuthStatus, setupAntigravityToken() (+10 more)

### Community 23 - "updates.ts"
Cohesion: 0.21
Nodes (18): updatesRouter, applyUpdate(), checkForUpdates(), compareVersions(), fetchLatestVersion(), getCommandOutput(), getPackageManagerBlock(), gitInfo() (+10 more)

### Community 24 - "lib/translator.ts"
Cohesion: 0.13
Nodes (16): antigravityToClaudeSSE(), buildContentBlockStart(), buildContentBlockStop(), buildInputJsonDelta(), buildMessageDelta(), buildMessageStart(), buildMessageStop(), buildTextDelta() (+8 more)

### Community 25 - "routing-copilot-sync-route.test.ts"
Cohesion: 0.20
Nodes (6): accountsByProvider, codexRemoteModels, codexSyncedWithAccountIds, Provider, remoteModels, syncedWithAccountIds

### Community 26 - "log-buffer.ts"
Cohesion: 0.16
Nodes (15): appendLog(), buffer, getLogSnapshot(), initLogCapture(), isLogCaptureEnabled(), listeners, LogEntry, LogLevel (+7 more)

### Community 27 - "messages/handler.ts"
Cohesion: 0.20
Nodes (15): validateAnthropicRequest(), collectToolResultIds(), extractTools(), generateMessageId(), handleCompletion(), handleStreamCompletion(), translateMessages(), messageRoutes (+7 more)

### Community 28 - "messages/types.ts"
Cohesion: 0.11
Nodes (17): AnthropicContentBlock, AnthropicContentBlockDeltaEvent, AnthropicContentBlockStartEvent, AnthropicContentBlockStopEvent, AnthropicImageBlock, AnthropicMessage, AnthropicMessageDeltaEvent, AnthropicMessagesPayload (+9 more)

### Community 29 - "dependencies"
Cohesion: 0.12
Nodes (17): @aws/codewhisperer-streaming-client, better-sqlite3, @bufbuild/protobuf, citty, @connectrpc/connect-node, hono, dependencies, @aws/codewhisperer-streaming-client (+9 more)

### Community 30 - "getProviderModels"
Cohesion: 0.67
Nodes (4): flattenDynamicModelsByAccount(), getProviderModels(), getProviderModelsForAccount(), mergeModelOptions()

### Community 31 - "language_server.ts"
Cohesion: 0.27
Nodes (9): CascadeUserMessageItemData, createCascadeRequest(), encodeCascadeUserMessageItem(), encodeMetadata(), encodeSendUserCascadeMessageRequest(), MetadataData, ProtoWriter, SendUserCascadeMessageRequestData (+1 more)

### Community 32 - "copilot/chat.ts"
Cohesion: 0.20
Nodes (15): CopilotModelInfo, CopilotTokenResponse, createCopilotCompletion(), fetchCopilotModels(), fetchInsecureJson(), getCopilotApiToken(), InsecureResponse, listCopilotModelsForAccount() (+7 more)

### Community 33 - "error.ts"
Cohesion: 0.23
Nodes (7): AntigravityError, buildLogReason(), HTTPError, ParsedUpstreamError, parseUpstreamErrorBody(), summarizeUpstream429(), Upstream429Reason

### Community 34 - "logger.ts"
Cohesion: 0.14
Nodes (8): fallbackContext, formatLogTime(), getRequestLogContext(), PROVIDER_LABELS, PROVIDER_NAMES, requestContext, RequestLogContext, runWithRequestContext()

### Community 36 - "schema.ts"
Cohesion: 0.25
Nodes (9): CascadeConfig, CascadeUserMessageItem, DEFAULT_CASCADE_CONFIG, encodeItem(), encodeMetadata(), encodeRequest(), Metadata, ProtoEncoder (+1 more)

### Community 39 - "rust-proxy.ts"
Cohesion: 0.20
Nodes (12): healthCheck(), isRustProxyReady(), resolveRustProxyPath(), RustProxyResponse, sendViaRustProxy(), sidecarToken, startRustProxy(), stopRustProxy() (+4 more)

### Community 40 - "encoder.ts"
Cohesion: 0.22
Nodes (10): getAntigravityIdeVersion(), getAntigravityUserAgent(), buildCascadeConfig(), DEFAULT_CASCADE_CONFIG, encodeSendUserCascadeMessage(), encodeVarint(), getModelEnumValue(), MODEL_ENUM (+2 more)

### Community 41 - "Architecture / 架构设计"
Cohesion: 0.14
Nodes (13): Account Rotation / 账户轮换, Architecture / 架构设计, Core Modules / 核心模块, Data Files / 数据文件, Infrastructure / 基础设施, Key Design Decisions / 设计决策, Module Structure / 模块结构, Providers / 提供者 (+5 more)

### Community 42 - "API Reference / API 参考"
Cohesion: 0.15
Nodes (12): Anthropic Compatible API, API Reference / API 参考, Error Codes / 错误码, Local and Public Access / 本地与公开访问, Models / 支持的模型, OpenAI Compatible API, OpenAI Format, POST /v1/chat/completions (+4 more)

### Community 43 - "Anti-API"
Cohesion: 0.15
Nodes (13): Anti-API, API Endpoints, Architecture, Claude Code Configuration, Code Quality & Testing, Development, Features, License (+5 more)

### Community 44 - "UpstreamError"
Cohesion: 0.17
Nodes (7): UpstreamError, RoutingConfig, callCounts, callOrder, quotaErrorBody, routingConfig, currentConfig

### Community 45 - "ide-switch.ts"
Cohesion: 0.24
Nodes (11): DB_PATH_LINUX, DB_PATH_MACOS, execAsync, getIdeAuthStatus(), getIdeDbPath(), gracefullyCloseIde(), IDE_AUTH_KEYS, IdeAuthInfo (+3 more)

### Community 46 - "createZedCompletion"
Cohesion: 0.27
Nodes (13): buildZedCloudUrl(), buildZedUpstreamError(), createZedCompletion(), fetchWithTimeout(), getAccountAuthHeader(), getAccountKey(), getServerUrl(), getZedLlmToken() (+5 more)

### Community 47 - "package.json"
Cohesion: 0.17
Nodes (11): bugs, url, description, license, name, private, repository, type (+3 more)

### Community 48 - "Docker"
Cohesion: 0.17
Nodes (12): Data & migration, Development (hot reload), Docker, First login (once), Linux, macOS, Notes, Ports (+4 more)

### Community 49 - "openai-adapter.ts"
Cohesion: 0.24
Nodes (11): ClaudeContentBlock, collectText(), normalizeToolParameters(), OpenAIChatMessage, OpenAIToolDefinition, toOpenAIMessages(), toOpenAITools(), buildOpenAiChatRequest() (+3 more)

### Community 50 - "routing-models-dynamic.test.ts"
Cohesion: 0.29
Nodes (6): clearDynamicCodexModels(), clearDynamicCopilotModels(), clearDynamicKiroModels(), setDynamicCodexModels(), setDynamicCopilotModels(), setDynamicKiroModels()

### Community 51 - "Routing + Multi-Auth Plan (Anthropic Only)"
Cohesion: 0.18
Nodes (10): Anthropic Request Flow, Architecture, Credential Storage, Endpoints, Env Requirements, Goals, Limitations, Routing Config (+2 more)

### Community 52 - "Common Issues / 常见问题"
Cohesion: 0.18
Nodes (10): 1. 429 Rate Limit Errors / 429 限速错误, 2. Tunnel / Remote Access Issues / 远程隧道问题, 3. Quota Not Loading / 配额不显示, 4. OAuth Login Failed / OAuth 登录失败, 5. Streaming Not Working / 流式响应不工作, 6. Tool Calling Errors / 工具调用错误, 7. Server Won't Start / 服务无法启动, Common Issues / 常见问题 (+2 more)

### Community 53 - "中文说明"
Cohesion: 0.18
Nodes (10): API 端点, Zed 账号说明, 中文说明, 代码质量, 开发规范, 开源协议, 更新内容 (v3.1.0), 特性 (+2 more)

### Community 54 - "Anti-API Development Guide"
Cohesion: 0.20
Nodes (9): Anti-API Development Guide, API Compatibility, Grok (xAI), Key Files, Maintenance Notes, Model Selection, Overview, Providers (+1 more)

### Community 55 - "Authorized Multi-Account Management"
Cohesion: 0.20
Nodes (9): Add an Authorized Account, An account cannot authenticate, Authorized Multi-Account Management, Credential Import, Every authorized account is cooling down, Intended Use, List Accounts, Rate Limits and Quotas (+1 more)

### Community 56 - "Security Boundaries"
Cohesion: 0.20
Nodes (9): Credentials, Filesystem and process actions, Local control plane, Public inference gateway, Reporting a Vulnerability, Security Boundaries, Security Policy, Supported Version (+1 more)

### Community 57 - "router.test.ts"
Cohesion: 0.24
Nodes (7): FALLBACK_STATUSES, getFlowKey(), isEntryUsable(), normalizeEntries(), RoutingEntry, RoutingFlow, selectFlowEntries()

### Community 58 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, @types/better-sqlite3, @types/bun, @types/localtunnel, typescript, @types/better-sqlite3, @types/bun, @types/localtunnel (+1 more)

### Community 59 - "build-winget-package.ts"
Cohesion: 0.22
Nodes (8): archArg, bundleDir, bundleRoot, compile, exePath, proxyPath, repoRoot, version

### Community 61 - "Contributing"
Cohesion: 0.25
Nodes (7): Contributing, Formatting, Prerequisites, Reporting Security Issues, Security and Provider Boundaries, Setup, Tests

### Community 62 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, dev, start, test, winget:bundle, winget:manifest, winget:sync

### Community 63 - "authStore"
Cohesion: 0.43
Nodes (7): authStore, buildZedCloudBase(), fetchZedAuthenticatedUser(), importZedLocalAccount(), readZedKeychainAccessToken(), readZedKeychainAccountId(), runSecurity()

### Community 64 - "update-winget-manifest.ts"
Cohesion: 0.29
Nodes (5): arch, args, manifestRoot, repoRoot, version

### Community 65 - "json-schema-cleaner.ts"
Cohesion: 0.43
Nodes (6): cleanJsonSchemaForGemini(), cleanJsonSchemaRecursive(), extractTypeFromUnion(), flattenRefs(), HARD_REMOVE_FIELDS, VALIDATION_FIELDS

### Community 69 - "buildAnthropicRequest"
Cohesion: 0.40
Nodes (6): buildAnthropicMessages(), buildAnthropicRequest(), buildGoogleParts(), buildGoogleRequest(), mergeToolResultContent(), normalizeToolParameters()

### Community 70 - "支持的模型"
Cohesion: 0.40
Nodes (5): Antigravity, ChatGPT Codex, GitHub Copilot, Zed Hosted Models, 支持的模型

### Community 71 - "快速开始"
Cohesion: 0.40
Nodes (5): Docker, Linux, macOS, Windows, 快速开始

### Community 74 - "credential-transfer-disabled.test.ts"
Cohesion: 0.40
Nodes (4): LOCAL_HEADERS, serverPromise, tempDataDir, tempHome

### Community 77 - "Supported Models"
Cohesion: 0.50
Nodes (4): Antigravity, ChatGPT Codex, GitHub Copilot, Supported Models

### Community 78 - "rust-proxy-config.test.ts"
Cohesion: 0.50
Nodes (3): bridgeSource, repositoryRoot, rustSource

### Community 79 - "Smart Routing System (Beta)"
Cohesion: 0.67
Nodes (3): Configuration, How It Works, Smart Routing System (Beta)

### Community 80 - "Remote Access"
Cohesion: 0.67
Nodes (3): Remote Access, Setup, Supported Tunnels

### Community 81 - "智能路由系统 (Beta)"
Cohesion: 0.67
Nodes (3): 工作流程, 智能路由系统 (Beta), 配置方法

### Community 82 - "远程访问"
Cohesion: 0.67
Nodes (3): 设置方法, 远程访问, 隧道对比

## Knowledge Gaps
- **437 isolated node(s):** `name`, `version`, `description`, `type`, `dev` (+432 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AccountManager` connect `account-manager.ts` to `quota-aggregator.ts`, `antigravity/chat.ts`, `server.ts`, `ping.ts`, `routing/route.ts`, `router.ts`, `main.ts`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `ProviderAccount` connect `store.ts` to `copilot/chat.ts`, `codex/chat.ts`, `grok/chat.ts`, `kiro/oauth.ts`, `quota-aggregator.ts`, `codex/oauth.ts`, `zed/chat.ts`, `routing/route.ts`, `router.ts`, `routing-copilot-sync-route.test.ts`, `authStore`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `UpstreamError` connect `UpstreamError` to `copilot/chat.ts`, `error.ts`, `codex/chat.ts`, `grok/chat.ts`, `kiro/oauth.ts`, `antigravity/chat.ts`, `quota-aggregator.ts`, `openai/handler.ts`, `account-manager.ts`, `server.ts`, `ping.ts`, `zed/chat.ts`, `router.ts`, `messages/handler.ts`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _437 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `kiro/oauth.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `codex/chat.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08687943262411348 - nodes in this community are weakly interconnected._
- **Should `grok/chat.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08888888888888889 - nodes in this community are weakly interconnected._