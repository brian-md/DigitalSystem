import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { Container, Wrapper } from './Gallery.css';

const Gallery = ({ items }) => {
  const [mainImage, setMainImage] = useState(0);
  return (
    <Wrapper>
      <div className="main">
        <Item className="main" {...items[mainImage]} />
      </div>
      <Container role="listbox">
        {items.length > 0 &&
          items.map((item, i) => (
            <div
              role="option"
              aria-selected={mainImage === i ? 'true' : 'false'}
              className={mainImage === i ? 'selected' : ''}
              key={i}
              onClick={() => setMainImage(i)}
              onKeyPress={() => setMainImage(i)}
              tabIndex="0"
            >
              <Item {...item} action={() => setMainImage(i)} />
            </div>
          ))}
      </Container>
    </Wrapper>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Gallery };
