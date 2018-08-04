import React from 'react';
import PropTypes from 'prop-types';

import CardImg from './CardImg';
import CardInfo from './CardInfo';
import CardActivities from './CardActivities';
import './AccomodationCard.css';

const propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  activities: PropTypes.array,
  isFavorite: PropTypes.bool,
  image_urls: PropTypes.array,
  id: PropTypes.string,
  handleFavoriteClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

const AccmodationCard = ({
  data: {
    name,
    country,
    activities,
    isFavorite,
    image_urls,
    id
  },
  handleFavoriteClick,
  onCardClick
}) => {
  return (
    <div className='column'>
      <div style={{position: 'relative'}}>
        <CardInfo
          name={name}
          isFavorite={isFavorite}
          handleFavoriteClick={handleFavoriteClick}
        />
        <div className="card has-cursor" onClick={(event) => onCardClick(id, event)}>
          <CardImg
            image={image_urls[0]}
            name={name}
          />
          <div className="card-content">
            <CardActivities activities={activities}/>
          </div>
        </div>
      </div>
    </div>
  );
};

AccmodationCard.propTypes = propTypes;

export default AccmodationCard;
