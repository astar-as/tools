import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contributing",
  description: "How to propose tools and contribute verified changes to Astar Tools.",
};

export default function ContributingPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="plain-page">
        <p className="eyebrow">Contributing</p>
        <h1>Improve the directory through evidence.</h1>
        <p>
          The collection is a typed file in the repository. Small, sourced pull requests are the preferred way to
          propose a tool, correct a fact or update a review date. A proposal is never publication: every addition
          requires explicit Astar approval before merge.
        </p>

        <div className="policy-grid">
          <section className="policy-section">
            <h2>Before proposing a tool</h2>
            <ol>
              <li>Check that it solves a concrete system-building problem.</li>
              <li>Find the official product, documentation and source links.</li>
              <li>Verify the licence and whether a complete deployment can be self-hosted.</li>
              <li>Do not infer an Astar status. Leave it Unverified unless maintainers provide evidence.</li>
            </ol>
          </section>
          <section className="policy-section">
            <h2>Open an issue</h2>
            <p>The suggestion template asks for the same facts used in the directory and is suitable for non-code contributions.</p>
            <p>
              <a
                className="text-link"
                href="https://github.com/astar-as/tools/issues/new?template=suggest-a-tool.yml"
                target="_blank"
                rel="noreferrer"
              >
                Suggest a tool ↗
              </a>
            </p>
          </section>
          <section className="policy-section">
            <h2>Make a pull request</h2>
            <ol>
              <li>Fork the repository and create a focused branch.</li>
              <li>Edit <code>content/tools.ts</code> and keep wording factual.</li>
              <li>Run <code>pnpm lint</code>, <code>pnpm typecheck</code> and <code>pnpm build</code>.</li>
              <li>Explain the primary sources and any remaining unknowns.</li>
            </ol>
          </section>
          <section className="policy-section">
            <h2>Review standard</h2>
            <p>
              Maintainers may decline correct entries to keep the collection small. Acceptance is an editorial
              decision; factual corrections are always welcome.
            </p>
            <p>
              <a className="text-link" href="https://github.com/astar-as/tools" target="_blank" rel="noreferrer">
                View the repository ↗
              </a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
