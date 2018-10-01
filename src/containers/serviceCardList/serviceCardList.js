import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from 'components/serviceCard';

class ServiceCardList extends Component {
  constructor(props) {
    super(props);
    const { services, spotlight } = this.props;
    const spotlightServices = services.filter(service =>
      spotlight.includes(service.node.uid)
    );
    const filteredServices = services.filter(
      service => !spotlight.includes(service.node.uid)
    );
    this.state = {
      services: [...spotlightServices, ...filteredServices],
    };
  }
  render() {
    return this.state.services.map((service, i) => (
      <ServiceCard
        service={service}
        key={service.node.uid}
        flip={i % 2 !== 0}
      />
    ));
  }
}

ServiceCardList.propTypes = {
  services: PropTypes.array.isRequired,
  spotlight: PropTypes.array,
  image: PropTypes.object,
};

export default ServiceCardList;
