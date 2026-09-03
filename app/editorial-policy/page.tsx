import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Editorial policy",
  description: "How Astar selects, verifies and labels entries in the Astar Tools directory.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="plain-page">
        <p className="eyebrow">Editorial policy · version 1.0</p>
        <h1>Judgment, with the evidence left visible.</h1>
        <p>
          Astar Tools is deliberately curated. Inclusion means the tool is relevant to building useful AI systems;
          it does not automatically mean Astar uses, endorses or recommends it. Every addition requires explicit
          Astar approval before publication.
        </p>

        <div className="policy-grid">
          <section className="policy-section">
            <h2>Selection</h2>
            <ul>
              <li>The tool solves a concrete problem in an AI system lifecycle.</li>
              <li>Its primary documentation or source is available for review.</li>
              <li>It adds something distinct to the collection instead of padding a category.</li>
              <li>Commercial tools may appear when their trade-offs are stated plainly.</li>
            </ul>
          </section>
          <section className="policy-section">
            <h2>Astar status</h2>
            <ul>
              <li><strong>Used:</strong> evidence exists that Astar uses it in ongoing work.</li>
              <li><strong>Tested:</strong> Astar completed a documented hands-on evaluation.</li>
              <li><strong>Watching:</strong> relevant and followed, without a usage or recommendation claim.</li>
              <li><strong>Unverified:</strong> assessment is incomplete; treat the entry as a lead.</li>
            </ul>
          </section>
          <section className="policy-section">
            <h2>Verification</h2>
            <ul>
              <li>Descriptions, licensing and deployment claims are checked against primary sources.</li>
              <li>Every entry carries its own last-reviewed date.</li>
              <li>Missing or ambiguous facts stay unknown; they are never converted into a positive claim.</li>
              <li>A hosted service and its open-source client are labelled separately when their terms differ.</li>
            </ul>
          </section>
          <section className="policy-section">
            <h2>Corrections</h2>
            <p>
              Open an issue with a primary source and the field that should change. Material corrections should be
              reviewed through a pull request so the history remains inspectable.
            </p>
            <p>
              <a
                className="text-link"
                href="https://github.com/astar-as/tools/issues/new?template=suggest-a-tool.yml"
                target="_blank"
                rel="noreferrer"
              >
                Suggest a change ↗
              </a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
