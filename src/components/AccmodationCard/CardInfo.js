import React from 'react';
import PropTypes from 'prop-types';

import './CardInfo.css';
import FavoritesIcon from './FavoritesIcon';

const propTypes = {
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
};

export const CardInfo = ({ name, isFavorite, handleFavoriteClick }) => {
  return (
    <div className="card-info-wrapper is-clearfix">
      <div className="is-pulled-left">
        <p className="title is-4 has-text-white is-uppercase has-text-weight-bold">
          {name}
        </p>
      </div>
      <div className="is-pulled-right">
        <FavoritesIcon handleFavoriteClick={handleFavoriteClick} isFavorite={isFavorite}/>
      </div>
    </div>
  );
};

CardInfo.propTypes = propTypes;

export default CardInfo;
