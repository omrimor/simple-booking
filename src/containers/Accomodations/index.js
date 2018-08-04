import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty';

import AccmodationCard from 'components/AccmodationCard';
import AccomodationFilter from 'components/AccomodationFilter/AccomodationFilter';

import { fetchAccomodations, setFavorite } from 'redux/accomodations/actions';
import { setFilterByCountry, setFeatureFlag } from 'redux/ui/actions';
import { accomodationsSelector, accomodationsFilterSelector } from 'redux/accomodations/selectors';
import { selectRequestsCount, selectCountryFilter } from 'redux/ui/selectors';

class Accomodations extends React.Component {
  constructor(props){
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }
  componentDidMount() {
    const { fetchAccomodations, accomodations, setFeatureFlag } = this.props;
    if (isEmpty(accomodations)) {
      fetchAccomodations();
    }
    // Simulate feature flag toggle
    setFeatureFlag('isFavoritesEnable', true);
  }

  onCardClick(id, event) {
    const { history } = this.props;
    const width = event.currentTarget.offsetWidth;
    const height = event.currentTarget.offsetHeight;
    const x = event.currentTarget.offsetLeft;
    const y = event.currentTarget.offsetTop - window.scrollY;
    const location = {
      pathname: `/${id}`,
      state: {width, height, x, y}
    };
    history.push(location)
  }

  setCards() {
    const {
      accomodations,
      filterOptions,
      setFilterByCountry,
      selectedFilter,
      setFavorite,
    } = this.props;
    return (
      <div className="container">
        <AccomodationFilter
          handleFilterChange={(e) => setFilterByCountry(e.target.value)}
          options={filterOptions}
          selectedValue={selectedFilter}
        />
        <div className="columns">
          {
            accomodations.map(acc =>
              <AccmodationCard
                key={acc.id}
                data={acc}
                handleFavoriteClick={() => setFavorite(acc.id)}
                onCardClick={this.onCardClick}
              />)
          }
        </div>
      </div>
    );

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
export default compose(
  withRouter,
  connect(mapStateToProps, { fetchAccomodations, setFilterByCountry, setFavorite, setFeatureFlag })
)(Accomodations);
