import { handleActions } from 'redux-actions';
import * as consts from 'redux/consts/action-types';
import Immutable from 'seamless-immutable';

export const initialState = Immutable({
  requests: {
    global: 0
  },
  filterByCountry: '',
  featureFlags: {
    isFavoritesEnable: true
  }
});

export default handleActions({
  [consts.START_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => (counter || 0) + 1),
  [consts.END_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => counter - 1),
  [consts.SET_FILTER_BY_COUNTRY]: (ui, { payload }) => ui.set('filterByCountry', payload.filter),
  [consts.SET_FEATURE_FLAG]: (ui, { payload }) => ui.setIn(['featureFlags', payload.namespace], payload.flag)
  // [consts.SET_LIST]: (ui, { payload }) => ui.setIn(['lists', payload.name], payload.list)
}, initialState);
