import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroPricing from '../components/sections/HeroPricing';
import Clients from '../components/sections/Clients';
import Team from '../components/sections/Team';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false,
    videoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  openVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeVideoModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }  

  render() {

    const genericSection01Header = {
      title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection02Header = {
      title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection03Header = {
      title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection04Header = {
      title: 'Modal - Lorem ipsum is placeholder text commonly used.'
    }

    const genericSection05Header = {
      title: 'Video - Lorem ipsum is placeholder text commonly used.'
    }

    return (
      <React.Fragment>
        <HeroPricing hasBgColor className="illustration-section-01" />
        <Team />
        <Clients topDivider bottomDivider />

        <GenericSection>
          <div className="container-xs">
            <h2 className="mt-0">Lorem ipsum is placeholder text commonly used in the graphic.</h2>
            <p>
              Lorem ipsum dolor sit amet, <a href="#0">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <figure>
              <Image
                className="image-larger"
                src={require('./../assets/images/image-placeholder.png')}
                alt="Placeholder"
                width={712}
                height={400} />
              <figcaption className="text-color-low">A super-nice image <span role="img" aria-label="mile">😀</span></figcaption>
            </figure>
            <h4>Flexibility</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </GenericSection>

        <GenericSection topDivider className="center-content">
          <div className="container">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <div className="button-group">
              <Button color="primary" wideMobile>Get started</Button>
              <Button color="secondary" wideMobile>Get started</Button>
              <Button color="dark" wideMobile>Get started</Button>
            </div>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection02Header} className="center-content" />
            <Accordion>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection03Header} className="center-content" />
            <form style={formStyle}>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="error"
                  hint="Something is wrong.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
              <div className="mb-24">
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden
                  status="success"
                  hint="You've done it.">
                  <Button color="primary">Early access</Button>
                </Input>
              </div>
            </form>
          </div>
        </GenericSection>

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
            <div className="center-content">
              <Button
                color="secondary"
                aria-controls="demo-modal"
                onClick={this.openModal}>Open modal</Button>
            </div>
            <Modal
              id="demo-modal"
              show={this.state.demoModalActive}
              handleClose={this.closeModal}
            >
              <div className="center-content">
                <h3 className="mt-0 mb-12">Nisi porta lorem mollis ut.</h3>
                <p className="mb-32">
                  Magnis dis parturient montes nascetur. Quam quisque id diam vel quam ultricies leo integer.
                </p>
              </div>
              <div>
                <Input
                  type="email"
                  label="This is a label"
                  placeholder="Your best email.."
                  formGroup="desktop"
                  labelHidden>
                  <Button color="primary">Subscribe</Button>
                </Input>
              </div>
            </Modal>
          </div >
        </GenericSection>

        <GenericSection topDivider className="center-content">
          <div className="container-xs">
            <SectionHeader data={genericSection05Header} />
          </div>
          <div className="container-sm">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={this.openVideoModal}
            >
              <Image
                className="has-shadow"
                src={require('./../assets/images/video-placeholder.png')}
                alt="Video"
                width={712}
                height={400} />
            </a>
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              handleClose={this.closeVideoModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe" />
          </div>
        </GenericSection>

        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

export default Secondary;