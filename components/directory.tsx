import Image from "next/image";
import { categories, statusDefinitions, tools, type Tool } from "@/content/tools";

function toolSummary(tool: Tool) {
  return [
    tool.description,
    `Why included: ${tool.why}`,
    `Tags: ${tool.tags.join(", ")}.`,
    `Open source: ${tool.openSource.label}.`,
    `Self-hosting: ${tool.selfHosting.label}.`,
    `Astar status: ${tool.astarStatus}.`,
    `Last reviewed: ${tool.lastReviewed}.`,
  ].join(" ");
}

export function Directory() {
  return (
    <div className="directory" aria-label="Tool directory">
      {categories.map((category) => {
        const categoryTools = tools.filter((tool) => tool.category === category.id);

        return (
          <section className="category" key={category.id} aria-labelledby={`${category.id}-title`}>
            <h2 id={`${category.id}-title`}>{category.name}</h2>
            <ul>
              {categoryTools.map((tool) => {
                const summary = toolSummary(tool);
                const statusNote = "statusNote" in tool ? tool.statusNote : statusDefinitions[tool.astarStatus];

                return (
                  <li key={tool.id}>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      title={summary}
                      aria-describedby={`${tool.id}-details`}
                    >
                      <Image
                        className="tool-icon"
                        src={`/favicons/${tool.id}.png`}
                        alt=""
                        width={16}
                        height={16}
                        unoptimized
                      />
                      <span className="tool-name">{tool.name}</span>
                      <span
                        className="tool-status"
                        data-status={tool.astarStatus.toLowerCase()}
                        title={statusNote}
                      >
                        {tool.astarStatus}
                      </span>
                      <span className="external-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                    <span className="sr-only" id={`${tool.id}-details`}>
                      {summary}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
