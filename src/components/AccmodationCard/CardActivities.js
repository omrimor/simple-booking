import React from 'react';

const CardActivities = ({ activities }) => {
  return (
    <div className="tags">
      {activities.map(activity => <span key={activity} className="tag">{activity}</span>)}
    </div>
  );
};

export default CardActivities;
