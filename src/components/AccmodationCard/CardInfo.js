import React from 'react';
import './CardInfo.css';
// import classNames from 'classnames';
// import withFeatureFlag from 'components/enhancers/withFeatureFlag';
import FavoritesIcon from './FavoritesIcon';

const CardInfo = ({ name, isFavorite, handleFavoriteClick }) => {
  // const iconClass = classNames({
  //   ['icon']: true,
  //   ['has-text-grey-light']: !isFavorite,
  //   ['has-text-danger']: isFavorite
  // });
  // const onSuccess = () => (
  //   <a className="button" onClick={handleFavoriteClick}>
  //     <span className={iconClass}>
  //       <i className='fa-heart fas' />
  //     </span>
  //   </a>
  // );
  return (
    <div className="card-info-wrapper is-clearfix">
      <div className="is-pulled-left">
        <p className="title is-4">
          {name}
        </p>
      </div>
      <div className="is-pulled-right">
        <FavoritesIcon handleFavoriteClick={handleFavoriteClick} isFavorite={isFavorite}/>
        {/*{withFeatureFlag('isFavoritesEnable')(<FavoritesIcon handleFavoriteClick={handleFavoriteClick} isFavorite={isFavorite}/>, <div />)}*/}
      </div>
    </div>
  );
};

export default CardInfo;
