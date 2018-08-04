import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const CardImg = ({ image, name }) => {
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt={name} />
      </figure>
    </div>
  );
};

CardImg.propTypes = propTypes;

export default CardImg;
