import * as consts from 'redux/consts/action-types';

export const startNetwork = (payload = 'global') => ({
  type: consts.START_NETWORK,
  payload
});

export const endNetwork = (payload = 'global') => ({
  type: consts.END_NETWORK,
  payload
});

export const setFilterByCountry = (filter) => ({
  type: consts.SET_FILTER_BY_COUNTRY,
  payload: {
    filter
  }
});

export const setFeatureFlag = (namespace, flag) => ({
  type: consts.SET_FEATURE_FLAG,
  payload: {
    namespace,
    flag
  }
});

