# Contributing to Astar Tools

Thanks for helping improve the directory. The useful contribution is not a longer list; it is a clearer, better-sourced collection.

Every addition requires explicit Astar approval before merge. Opening an issue or pull request proposes a change; it does not place that change in the directory.

## Suggest a tool

Open a **Suggest a tool** issue and include:

1. The concrete problem the tool solves.
2. Official product or documentation links.
3. The canonical source repository, if one exists.
4. Licence and self-hosting evidence.
5. A short reason it belongs in this collection rather than a general directory.

Do not assign `Used` or `Tested` from public impressions. Those labels require evidence held by Astar maintainers. Use `Unverified` when the assessment is genuinely incomplete.

## Make a catalogue change

1. Fork the repository and create a focused branch.
2. Edit `content/tools.ts`.
3. Keep descriptions factual and concise.
4. Link to primary sources. Avoid affiliate, tracking and referral URLs.
5. Verify every changed external link.
6. Update `lastReviewed` only for entries you actually checked.
7. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
8. In the pull request, list the sources used and anything still unknown.

Maintainers may decline a valid tool to preserve the collection’s focus. Factual corrections are always welcome.

## Code changes

Keep dependencies and client-side JavaScript minimal. New UI should work with keyboard navigation, visible focus states, narrow screens, reduced-motion preferences and high text contrast.

## Conduct

Be precise, constructive and generous. Challenge claims and evidence, not people.
