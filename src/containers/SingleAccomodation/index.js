import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { singleAccomodationSelector } from 'redux/accomodations/selectors';

import AccomodationDetails from 'components/AccomodationDetails';
import CardActivities from 'components/AccmodationCard/CardActivities';

const SingleAccomodation = ({ location, accomodationItem }) => {
  return (
    <div>
      <AccomodationDetails
        item={accomodationItem}
        startingX={location.state.x}
        startingY={location.state.y}
        startingWidth={location.state.width}
        startingHeight={location.state.height}
      />
      <div className="container">
        <Link to="/">Back</Link>
        <h2 className="is-size-2 has-text-black has-text-weight-bold">{accomodationItem.name}</h2>
        <CardActivities activities={accomodationItem.activities} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  accomodationItem: singleAccomodationSelector(state, match.params.id)
});

export default connect(mapStateToProps, {})(SingleAccomodation);
