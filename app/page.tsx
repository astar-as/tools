import { Directory } from "@/components/directory";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { tools } from "@/content/tools";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Astar Tools",
  description: "A curated directory of tools for building AI that works.",
  url: "https://tools.astar.sh",
  isPartOf: {
    "@type": "WebSite",
    name: "Astar",
    url: "https://astar.sh",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: tool.url,
    })),
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">An open directory by Astar · {tools.length} tools</p>
            <h1 id="page-title">Tools for building AI that works.</h1>
          </div>
          <div className="hero-note">
            <p>
              A deliberately small collection for people who need to move from a promising demo to a useful,
              inspectable system.
            </p>
            <p>
              Inclusion is editorial judgment, not a blanket recommendation. Every status and unknown is stated
              plainly.
            </p>
          </div>
        </section>

        <Directory />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </div>
  );
}
