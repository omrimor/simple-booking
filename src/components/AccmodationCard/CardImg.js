import React from 'react';

const CardImg = ({ image, name }) => {
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt={name} />
      </figure>
    </div>
  );
};

export default CardImg;
