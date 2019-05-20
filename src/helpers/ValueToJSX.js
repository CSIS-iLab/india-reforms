import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import ImageBlock from "./ImageBlock";
import ParagraphBlock from "../helpers/ParagraphBlock";

export default function ValueToJSX(source, className, key) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      unwrapDisallowed={true}
      key={key || ""}
      className={className || ""}
      source={source || ""}
      renderers={{
        image: ImageBlock,
        paragraph: ParagraphBlock
      }}
    />
  );
}
