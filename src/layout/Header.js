import React from "react";
import scroll from "@threespot/freeze-scroll";
import HeaderNav from "../components/HeaderNav";
import HeaderScroll from "../helpers/HeaderScroll";
import CloseMenu from "../helpers/CloseMenu";

export default class Header extends React.Component {
  componentDidMount() {
    const overlay = document.querySelector(".content-overlay");
    const triggers = Array.from(document.querySelectorAll(".menu-trigger"));

    window.addEventListener("scroll", HeaderScroll);

    triggers.forEach(trigger => {
      const target = document.querySelector(trigger.dataset.target);

      trigger.addEventListener("click", function() {
        if (target.classList.contains("is-active")) {
          CloseMenu(trigger, target);
        } else {
          target.classList.add("is-active");
          this.setAttribute("aria-expanded", "true");
          this.classList.add("is-active");

          overlay.classList.add("is-active");
          scroll.freeze();
        }
      });

      overlay.addEventListener("click", function() {
        CloseMenu(trigger, target);
      });
    });
  }

  render() {
    const { siteStructure } = this.props;
    return (
      <header className="site-header">
        <HeaderNav siteStructure={siteStructure} />
      </header>
    );
  }
}
