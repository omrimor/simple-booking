import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  activities: PropTypes.array.isRequired
};

const CardActivities = ({ activities }) => {
  return (
    <div className="tags">
      {activities.map(activity => <span key={activity} className="tag is-uppercase">{activity}</span>)}
    </div>
  );
};
CardActivities.propTypes = propTypes;

export default CardActivities;
