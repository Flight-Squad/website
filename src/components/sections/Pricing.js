import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import PricingSwitcher from './partials/PricingSwitcher';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false
}

class Pricing extends React.Component {

  state = {
    pricingSwitchOn: true
  }

  handlePricingSwitch = (e) => {
    this.setState({ pricingSwitchOn: e.target.checked });
  }

  render() {

    const {
      className,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-03 reveal-from-top',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Supreme template pricing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
    };

    const pricingSwitchLabels = {
      type: 'Billing Period', // screen-reader text
      default: 'Billed Monthly',
      switchOn: 'Billed Annually'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {pricingSwitcher && <PricingSwitcher state={this.state.pricingSwitchOn} handlePricingSwitch={this.handlePricingSwitch} labels={pricingSwitchLabels} />}
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header center-content mb-24">
                      <div className="pricing-item-title text-xxs fw-500 pb-12">
                        Essential
                      </div>
                      <div className="pricing-item-price pt-24 pb-24">
                        <span className="pricing-item-price-currency text-color-high">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '29' : '35'}</span>/m
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        Top features
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-16">
                    <Button tag="a" color="secondary" wide href="http://cruip.com/">Free 14-day trial</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header center-content mb-24">
                      <div className="pricing-item-title text-xxs fw-500 pb-12">
                        Business
                      </div>
                      <div className="pricing-item-price pt-24 pb-24">
                        <span className="pricing-item-price-currency text-color-high">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '49' : '55'}</span>/m
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        Top features
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-16">
                    <Button tag="a" color="primary" wide href="http://cruip.com/">Free 14-day trial</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header center-content mb-24">
                      <div className="pricing-item-title text-xxs fw-500 pb-12">
                        Enterprise
                      </div>
                      <div className="pricing-item-price pt-24 pb-24">
                        <span className="pricing-item-price-currency text-color-high">$</span>
                        <span className="pricing-item-price-amount h1">{this.state.pricingSwitchOn ? '89' : '95'}</span>/m
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                        Top features
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs">
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                        <li className="is-checked">Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-16">
                    <Button tag="a" color="secondary" wide href="http://cruip.com/">Free 14-day trial</Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;