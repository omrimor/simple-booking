
import { combineReducers } from 'redux';
import accomodations from 'redux/accomodations/reducer';
import ui from 'redux/ui/reducer';

export default combineReducers({
  accomodations,
  ui
});
