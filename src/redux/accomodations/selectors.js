import { createSelector } from 'reselect';
import includes from 'lodash/includes';
import values from 'lodash/values';

import { selectCountryFilter } from 'redux/ui/selectors';

const accomodations = state => values(state.accomodations) || [];

export const singleAccomodationSelector = (state, id) => state.accomodations[id] || {};

export const accomodationsFilterSelector = state =>
  values(state.accomodations).reduce((acc, currentValue) => {
    (!includes(acc, currentValue.country)) && acc.push(currentValue.country);
    return acc;
  }, []);

export const accomodationsSelector = createSelector(
  [accomodations, selectCountryFilter],
  (accomodations, selectCountryFilter) =>
    selectCountryFilter === ''
      ? accomodations
      : accomodations.filter(acc => acc.country === selectCountryFilter)
);

