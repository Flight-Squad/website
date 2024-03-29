import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

class HeroFull extends React.Component {
  render() {
    const {
      className,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-top"
                data-reveal-delay="300"
              >
                We do the work. You fly for less.
              </h1>
              <div className="container-xs">
                <p
                  className="mt-0 mb-32 reveal-from-top"
                  data-reveal-delay="400"
                  style={{color: '#dfdfdf'}}
                >
                  The Flight Squad will book and manage travel from your
                  favorite messaging platform.
                </p>
                <div className="reveal-from-top" data-reveal-delay="500">
                  <Button
                    tag="a"
                    color="primary"
                    href="#"
                    wideMobile
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="hero-figure illustration-element-01 reveal-from-top"
              data-reveal-delay="500"
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/hero-media.png")}
                width={896}
                height={504}
                alt="Hero"
              />
              <div style={imgStyle}>
                <Image
                  src={require("./../../assets/images/hero-image-top.png")}
                  width={896}
                  height={504}
                  alt="Hero top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const imgStyle = {
  position: "absolute",
  left: "-5.9%",
  right: "5.9%",
  top: "-12.74%"
};

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
