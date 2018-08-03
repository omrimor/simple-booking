export const selectRequestsCount = (state, type = 'global') => state.ui.requests[type] || 0;
export const selectCountryFilter = (state) => state.ui.filterByCountry;
export const selectFeatureFlag = (state, namespace) => state.ui.featureFlags[namespace];
