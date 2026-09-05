import { Directory } from "@/components/directory";
import { SiteFooter } from "@/components/site-footer";
import { tools } from "@/content/tools";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Astar Tools",
  description: "Tools for building AI that works.",
  numberOfItems: tools.length,
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: tool.url,
    name: tool.name,
  })),
};

export default function Home() {
  return (
    <div className="page-shell">
      <main>
        <header className="masthead">
          <div>
            <p className="site-name">tools.astar.sh</p>
            <h1>Tools for building AI that works.</h1>
          </div>
          <p className="collection-note">
            An open directory by <a href="https://astar.sh/">Astar</a> · {tools.length} {tools.length === 1 ? "tool" : "tools"}
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
