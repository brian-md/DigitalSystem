import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './serviceCard.css';

import Image from 'components/image';
import Title from 'components/title';
import Paragraph from 'components/paragraph';
import Button from 'components/button';

const ServiceCard = ({ service, flip }) => (
  <Container flip={flip}>
    <Image
      image={service.node.data.main_image.localFile.childImageSharp.fluid}
      circle
      style={{ gridArea: 'image' }}
    />

    <Content flip={flip}>
      <Title line align="left" as="h3">
        {service.node.data.service_name.text}
      </Title>
      <Paragraph>{service.node.data.short_description.text}</Paragraph>
      <Button to={`/services/${service.node.uid}`}>Learn More</Button>
    </Content>
  </Container>
);

ServiceCard.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.object,
  circle: PropTypes.bool,
  flip: PropTypes.bool,
  service: PropTypes.object,
};

export default ServiceCard;
