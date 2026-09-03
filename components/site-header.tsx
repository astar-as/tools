import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Astar tools home">
        <span>tools.astar.sh</span>
      </Link>
      <nav className="top-nav" aria-label="Primary navigation">
        <Link href="/">Directory</Link>
        <a href="https://github.com/astar-as/tools" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
