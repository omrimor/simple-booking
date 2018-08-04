import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withFeatureFlag from 'components/enhancers/withFeatureFlag';

const propTypes = {
  handleFavoriteClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export const FavoritesIcon = ({ handleFavoriteClick, isFavorite }) => {
  const iconClass = classNames({
    'icon': true,
    'has-text-grey-light': !isFavorite,
    'has-text-danger': isFavorite
  });
  return (
    <a className="button" onClick={handleFavoriteClick}>
      <span className={iconClass}>
        <i className='fa-heart fas' />
      </span>
    </a>
  );
};

FavoritesIcon.propTypes = propTypes;

export default withFeatureFlag('isFavoritesEnable')(FavoritesIcon)
