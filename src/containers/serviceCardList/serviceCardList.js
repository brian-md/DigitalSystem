import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageCard from 'components/imageCard';
import { Transition } from 'react-spring';

class ServiceCardList extends Component {
  constructor(props) {
    super(props);
    const { services, spotlight } = this.props;
    const spotlightServices = services.filter(service =>
      spotlight.includes(service.node.uid)
    );
    this.spotlightServices = spotlightServices;
    const filteredServices = services.filter(
      service => !spotlight.includes(service.node.uid)
    );
    this.remainingServices = filteredServices;
    this.state = {
      showMore: false,
    };
  }
  showMore = () => {
    this.setState({ showMore: true });
  };

  showLess = () => {
    this.setState({ showMore: false });
  };

  showToggle = () => {
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  };

  render() {
    const services = this.state.showMore
      ? [...this.spotlightServices, ...this.remainingServices]
      : [...this.spotlightServices];
    return (
      <>
        <Transition
          keys={services.map(service => service.node.uid)}
          from={{ opacity: 0, transform: 'translateX(-100px)' }}
          enter={{ opacity: 1, transform: 'translateX(0px)' }}
          leave={{ opacity: 0, transform: 'translateX(-100px)' }}
        >
          {services.map((service, i) => styles => (
            <ImageCard
              flip={i % 2 !== 0}
              wrapperStyle={{
                opacity: styles.opacity,
                transform: styles.transform,
              }}
              image={
                service.node.data.main_image.localFile.childImageSharp.fluid
              }
              title={service.node.data.service_name.text}
              description={service.node.data.short_description.text}
              cta={{ to: `/services/${service.node.uid}`, text: 'Learn More' }}
            />
          ))}
        </Transition>

        <button onClick={this.showToggle}>
          Show {this.state.showMore ? 'Less' : 'More'}
        </button>
      </>
    );
  }
}

ServiceCardList.propTypes = {
  services: PropTypes.array.isRequired,
  spotlight: PropTypes.array,
  image: PropTypes.object,
};

export default ServiceCardList;
