import React from "react";

export default class ImageBlock extends React.PureComponent {
  render() {
    const src = this.props.src.split("/");

    const slug = src[src.length - 1];

    return (
      <figure className="component-image">
        <figure className="component-image__container">
          <img
            sizes="(max-width: 320px) 320px,(max-width: 375px) 335px,(max-width: 480px) 440px,(max-width: 675px) 635px,800px"
            srcSet={`https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_320/v1543522526/careers/{slug}  320w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_335/v1543522526/careers/${slug}  335w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_480/v1543522526/careers/${slug}  480w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,q_70,w_635/v1543522526/careers/${slug}  635w,https://res.cloudinary.com/csisideaslab/image/upload/f_auto,w_800/v1543522526/on-the-radar/${slug}  800w`}
            src={this.props.src}
            title={this.props.alt}
            alt={this.props.title}
          />
        </figure>
        <figcaption className="img-caption">{this.props.title}</figcaption>
      </figure>
    );
  }
}
