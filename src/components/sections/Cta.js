import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

class Cta extends React.Component {

  render() {
    const {
      className,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      split,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'cta section center-content-mobile',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'cta-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider',
      split && 'cta-split'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <div className="cta-slogan reveal-from-left">
              <h3 className="m-0">
                Nisi porta lorem mollis aliquam ut.
              </h3>
            </div>
            <div className="cta-action reveal-from-right">
              <Button tag="a" color="primary" wideMobile href="#0">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;