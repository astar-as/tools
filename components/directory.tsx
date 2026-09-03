"use client";

import { useMemo, useState } from "react";
import {
  categories,
  statusDefinitions,
  tools,
  type CategoryId,
  type Tool,
} from "@/content/tools";

type CategoryFilter = "all" | CategoryId;

function ExternalLink({ href, children, label }: { href: string; children: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}>
      {children}
    </a>
  );
}

function ToolEntry({ tool }: { tool: Tool }) {
  const sourceIsPrimaryLink = tool.sourceUrl === tool.url;

  return (
    <li className="tool-entry" id={tool.id}>
      <article>
        <div className="tool-heading">
          <h3>
            <ExternalLink href={tool.url} label={tool.name}>
              <span>{tool.name}</span>
              <span className="external-arrow" aria-hidden="true">
                ↗
              </span>
            </ExternalLink>
          </h3>
          <span className="astar-status" data-status={tool.astarStatus.toLowerCase()} title={tool.statusNote ?? statusDefinitions[tool.astarStatus]}>
            <span aria-hidden="true" />
            {tool.astarStatus}
          </span>
        </div>

        <p className="tool-description">{tool.description}</p>
        <p className="tool-why">
          <span>Why it is here</span>
          {tool.why}
        </p>

        <ul className="tool-tags" aria-label={`${tool.name} tags`}>
          {tool.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <dl className="tool-facts">
          <div>
            <dt>Open source</dt>
            <dd data-state={tool.openSource.state}>{tool.openSource.label}</dd>
          </div>
          <div>
            <dt>Self-host</dt>
            <dd data-state={tool.selfHosting.state}>{tool.selfHosting.label}</dd>
          </div>
          <div>
            <dt>Reviewed</dt>
            <dd>
              <time dateTime={tool.lastReviewed}>{tool.lastReviewed}</time>
            </dd>
          </div>
        </dl>

        {tool.sourceUrl && !sourceIsPrimaryLink ? (
          <ExternalLink href={tool.sourceUrl} label={`${tool.name} source`}>
            <span className="source-link">Source ↗</span>
          </ExternalLink>
        ) : null}
      </article>
    </li>
  );
}

export function Directory() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      if (categoryFilter !== "all" && tool.category !== categoryFilter) return false;
      if (!normalizedQuery) return true;

      const category = categories.find((item) => item.id === tool.category);
      const searchableText = [
        tool.name,
        tool.description,
        tool.why,
        tool.astarStatus,
        tool.openSource.label,
        tool.selfHosting.label,
        category?.name,
        ...tool.tags,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [categoryFilter, normalizedQuery]);

  const visibleCategories = categories
    .map((category) => ({
      ...category,
      tools: filteredTools.filter((tool) => tool.category === category.id),
    }))
    .filter((category) => category.tools.length > 0);

  const clearFilters = () => {
    setQuery("");
    setCategoryFilter("all");
  };

  return (
    <>
      <section className="directory-controls" aria-label="Filter the directory">
        <div className="search-field">
          <label htmlFor="tool-search">Find a tool</label>
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search names, tags or use cases"
            autoComplete="off"
          />
        </div>

        <div className="filter-row" aria-label="Filter by category">
          <button
            type="button"
            aria-pressed={categoryFilter === "all"}
            onClick={() => setCategoryFilter("all")}
          >
            All <span>{tools.length}</span>
          </button>
          {categories.map((category) => {
            const count = tools.filter((tool) => tool.category === category.id).length;
            return (
              <button
                type="button"
                key={category.id}
                aria-pressed={categoryFilter === category.id}
                onClick={() => setCategoryFilter(category.id)}
              >
                {category.name} <span>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="result-row">
          <p aria-live="polite">
            Showing {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
          </p>
          {query || categoryFilter !== "all" ? (
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </div>
      </section>

      <div className="category-grid">
        {visibleCategories.map((category, index) => (
          <section className="category-section" key={category.id} aria-labelledby={`${category.id}-title`}>
            <header className="category-heading">
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 id={`${category.id}-title`}>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </header>
            <ul className="tool-list">
              {category.tools.map((tool) => (
                <ToolEntry tool={tool} key={tool.id} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <section className="empty-state" aria-labelledby="empty-title">
          <p id="empty-title">Nothing in the current collection matches that search.</p>
          <button type="button" onClick={clearFilters}>
            Show all tools
          </button>
        </section>
      ) : null}
    </>
  );
}
