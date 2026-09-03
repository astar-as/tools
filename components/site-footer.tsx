import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        An open directory by <a href="https://astar.sh/">Astar</a>.
      </p>
      <nav aria-label="Footer navigation">
        <a href="https://github.com/astar-as/tools" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <Link href="/contributing">Contributing</Link>
        <Link href="/editorial-policy">Editorial policy</Link>
        <a
          href="https://github.com/astar-as/tools/issues/new?template=suggest-a-tool.yml"
          target="_blank"
          rel="noreferrer"
        >
          Suggest a tool <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </footer>
  );
}
