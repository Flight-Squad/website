import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop'
    );

    const sectionHeader = {
      title: 'Meet Flight Squad',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-delay="200">
                    Message and Save
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="400">
                  Just send us your trip details and the Squad will get to work. We split the savings with you in comparison to the price advertised on Google Flights.
                  <br/><br/> Fair, easy, and simple, like it should be!
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-02 reveal-from-top',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  <div style={img01Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-01.png')}
                      alt="Features split top 01"
                      width={528}
                      height={396} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-right" data-reveal-delay="200">
                    Lock in the Price
                  </h3>
                  <p className="m-0 reveal-from-right" data-reveal-delay="400">
                    We will even book and lock in the best price for your flight <strong>risk-free</strong> for 24 hours! 
                    <br/> <br/> You never enter a credit card pay any fees until the right time to book.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-from-top',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-02.png')}
                      alt="Features split top 02"
                      width={528}
                      height={396} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-delay="200">
                    Careers @ Flight Squad
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="400">
                    Be a part of the squad that helps travelers explore the world for less.
                    <br/> <br/> Developers, data scientists, creative thinkers, problem solvers, travel junkies — you’ll fit right in.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04 reveal-from-top',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  <div style={img03Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.png')}
                      alt="Features split top 03"
                      width={528}
                      height={396} />
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

const img01Style = {
  position: 'absolute',
  bottom: '-12.4%'
}

const img02Style = {
  position: 'absolute',
  bottom: '-13.1%'
}

const img03Style = {
  position: 'absolute',
  bottom: '-16.1%',
  left: '-10.1%',
  right: '10.1%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;