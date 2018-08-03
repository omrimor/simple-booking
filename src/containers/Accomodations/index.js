import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import AccmodationCard from 'components/AccmodationCard/AccmodationCard';
import AccomodationFilter from 'components/AccomodationFilter/AccomodationFilter';

import { fetchAccomodations, setFavorite } from 'redux/accomodations/actions';
import { setFilterByCountry, setFeatureFlag } from 'redux/ui/actions';
import { accomodationsSelector, accomodationsFilterSelector } from 'redux/accomodations/selectors';
import { selectRequestsCount, selectCountryFilter } from 'redux/ui/selectors';

class Accomodations extends React.Component {
  componentDidMount() {
    const { fetchAccomodations, accomodations, setFeatureFlag } = this.props;
    if (isEmpty(accomodations)) {
      fetchAccomodations();
    }
    // Simulate feature flag toggle
    setFeatureFlag('isFavoritesEnable', true);
  }

  setCards() {
    const {
      accomodations,
      filterOptions,
      setFilterByCountry,
      selectedFilter,
      setFavorite,
    } = this.props;
    return ([
      <AccomodationFilter
        handleFilterChange={(e) => setFilterByCountry(e.target.value)}
        options={filterOptions}
        selectedValue={selectedFilter}
        key='filter'
      />,
      <div key='cards' className="columns">
        {
          accomodations.map(acc =>
            <AccmodationCard
              key={acc.name}
              data={acc}
              handleFavoriteClick={() => setFavorite(acc.id)}
            />)
        }
      </div>
    ]);

  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? <div>im loading</div> : this.setCards();
  }
}

const mapStateToProps = (state) => ({
  accomodations: accomodationsSelector(state),
  filterOptions: accomodationsFilterSelector(state),
  selectedFilter: selectCountryFilter(state),
  isLoading: selectRequestsCount(state, 'accommodations') > 0
});

export default connect(mapStateToProps, { fetchAccomodations, setFilterByCountry, setFavorite, setFeatureFlag })(Accomodations);
