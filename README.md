# Astar Tools

**Tools for building AI that works.**

Astar Tools is an open, deliberately curated directory of practical tools for building useful AI systems. It is not a marketplace or a generated list. The collection starts with one Astar-built tool and grows only through explicit approval.

Suggestions and pull requests are proposals. Every addition requires explicit Astar approval before merge or publication.

The public URL is `tools.astar.sh`.

## What is in the repository

- A statically generated Next.js App Router site
- A typed, pull-request-friendly tool catalogue in `content/tools.ts`
- A compact category-based index with no client-side application state
- Metadata, Open Graph image generation, sitemap and robots configuration
- An editorial policy, contribution guide and issue template
- No authentication, CMS, database or analytics
- One locally stored favicon per entry; no runtime vendor-logo hotlinks

## Data model

Each `Tool` entry contains:

| Field | Purpose |
| --- | --- |
| `name`, `url`, `sourceUrl` | Primary product/documentation and source links |
| `category` | One of the curated category identifiers |
| `description` | What the tool is useful for |
| `why` | Why the tool earns a place in this collection |
| `tags` | A small set of retrieval and scanning terms |
| `openSource` | Explicit state plus a human-readable licence label |
| `selfHosting` | Whether a complete or partial deployment can run under your control |
| `lastReviewed` | Per-entry ISO review date |

`unknown` is a real state. Do not convert missing evidence into `no`, or a public source repository into proof that a complete hosted service is open source.

## Local development

Requirements: Node.js 20.9 or newer and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Before opening a pull request:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before changing the collection and [EDITORIAL_POLICY.md](./EDITORIAL_POLICY.md) for the evidence and status rules. Use the **Suggest a tool** issue template for a non-code proposal.

## Licence

The site code and directory data are available under the [MIT License](./LICENSE). Plus Jakarta Sans is redistributed under the SIL Open Font License; see [LICENSES/Plus-Jakarta-Sans-OFL.txt](./LICENSES/Plus-Jakarta-Sans-OFL.txt).
