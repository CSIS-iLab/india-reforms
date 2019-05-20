import React from "react";
import ValueToJSX from "./ValueToJSX";

export default function MarkdownToSections(markdown) {
  return markdown
    ? markdown.map(section => {
        return (
          <section
            key={section.key}
            id={section.key}
            className={
              "row " +
              (section.component === "cantilever" ? section.component : "")
            }
          >
            {section.title ? <h2>{section.title}</h2> : ""}

            <div
              className={
                "subsection " +
                (section.component !== "cantilever" ? section.component : "")
              }
            >
              {Object.entries(section.content).map(value => {
                return ValueToJSX(
                  value[1],
                  `${section.component}__${value[0]}`,
                  value[0]
                );
              })}
            </div>
          </section>
        );
      })
    : "";
}
