import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { SET_ACCOMODATIONS, SET_FAVORITE } from 'redux/consts/action-types';

export const initialState = Immutable({});

export default handleActions({
  [SET_ACCOMODATIONS]: (accomodations, { payload }) => Immutable(payload.accommodations),
  [SET_FAVORITE]: (accomodations, { payload }) => accomodations.setIn([payload.id, 'isFavorite'], !accomodations[payload.id]['isFavorite'])
}, initialState);
