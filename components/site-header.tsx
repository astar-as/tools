import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Astar tools home">
        <Image
          className="brand-mark"
          src="/astar-logo.png"
          alt=""
          width={489}
          height={618}
          priority
          sizes="22px"
        />
        <span>tools.astar.sh</span>
      </Link>
      <nav className="top-nav" aria-label="Primary navigation">
        <Link href="/editorial-policy">Policy</Link>
        <a href="https://github.com/astar-as/tools" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
