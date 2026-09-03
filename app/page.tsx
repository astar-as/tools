import { Directory } from "@/components/directory";
import { SiteFooter } from "@/components/site-footer";
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
      <main className="home-page">
        <header className="home-intro">
          <p className="site-name">tools.astar.sh</p>
          <h1 id="page-title">Tools for building AI that works.</h1>
          <p>
            An open directory by <a href="https://astar.sh/">Astar</a> · {tools.length} tools.
          </p>
        </header>
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
