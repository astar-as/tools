import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="plain-page not-found">
        <p className="eyebrow">404</p>
        <h1>That tool is not here.</h1>
        <p>The directory is deliberately small. The page you followed may have moved.</p>
        <Link className="text-link" href="/">
          Return to the directory →
        </Link>
      </main>
    </div>
  );
}
