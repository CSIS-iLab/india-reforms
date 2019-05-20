import React from "react";

export default class ParagraphBlock extends React.PureComponent {
  constructor(props) {
    super(props);

    const exclude = ["TextRenderer", "text", "em", "strong", "blockquote"];

    const hasParagraphs = this.props.children.some(child => {
      const renderer = child.type.name || child.type;
      return exclude.includes(renderer);
    });

    this.state = {
      hasParagraphs: hasParagraphs
    };
  }

  render() {
    const { hasParagraphs } = this.state;

    return hasParagraphs ? <p>{this.props.children}</p> : this.props.children;
  }
}
