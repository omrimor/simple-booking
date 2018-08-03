import React from 'react';
import classNames from 'classnames';

import withFeatureFlag from 'components/enhancers/withFeatureFlag';

const FavoritesIcon = ({ handleFavoriteClick, isFavorite }) => {
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

export default withFeatureFlag('isFavoritesEnable')(FavoritesIcon)
