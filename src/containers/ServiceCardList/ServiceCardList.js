import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ImageCard } from 'components';

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
    return (
      <>
        {this.spotlightServices
          .map((service, i) => (
            <ImageCard
              key={service.node.uid}
              flip={i % 2 !== 0}
              image={
                service.node.data.main_image.localFile.childImageSharp.fluid
              }
              title={service.node.data.service_name.text}
              description={service.node.data.short_description.text}
              cta={{ to: `/services/${service.node.uid}`, text: 'Learn More' }}
            />
          ))
          .concat(
            this.remainingServices.map((service, i) => (
              <ImageCard
                key={service.node.uid}
                flip={i % 2 == 0}
                image={
                  service.node.data.main_image.localFile.childImageSharp.fluid
                }
                title={service.node.data.service_name.text}
                description={service.node.data.short_description.text}
                cta={{
                  to: `/services/${service.node.uid}`,
                  text: 'Learn More',
                }}
                visible={this.state.showMore}
              />
            ))
          )}

        {!this.state.showMore && (
          <Button onClick={this.showToggle} size="tiny">
            Show More
          </Button>
        )}
      </>
    );
  }
}

ServiceCardList.propTypes = {
  services: PropTypes.array.isRequired,
  spotlight: PropTypes.array,
  image: PropTypes.object,
};

export { ServiceCardList };
