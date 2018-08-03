import React from 'react';

import CardImg from './CardImg';
import CardInfo from './CardInfo';
import CardActivities from './CardActivities';

const AccmodationCard = ({ data: { name, country, activities, isFavorite, image_urls }, handleFavoriteClick }) => {
  return (
    <div className='column'>
      <div className="card">
        <CardInfo
          name={name}
          isFavorite={isFavorite}
          handleFavoriteClick={handleFavoriteClick}
        />
        <CardImg image={image_urls[0]} name={name}/>
        <div className="card-content">
          <CardActivities activities={activities}/>
        </div>
      </div>
    </div>
  );
};

export default AccmodationCard;
