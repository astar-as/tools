import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer navigation">
        <a href="https://astar.sh/" target="_blank" rel="noreferrer">
          Astar ↗
        </a>
        <a href="https://github.com/astar-as/tools" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <Link href="/contributing">Contributing</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
        <a
          href="https://github.com/astar-as/tools/issues/new?template=suggest-a-tool.yml"
          target="_blank"
          rel="noreferrer"
        >
          Suggest a tool ↗
        </a>
      </nav>
      <p>Additions require explicit Astar approval.</p>
    </footer>
  );
}
