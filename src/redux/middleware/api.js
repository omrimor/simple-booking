import axios from 'axios';

import { API } from 'redux/consts/action-types';
import { startNetwork, endNetwork } from 'redux/ui/actions';

const api = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success, name, preProcess, normalize, method } = action.payload;

  dispatch(startNetwork(name));

  axios({ method, url })
    .then(data => {
      // Extract the actual data from the axios response
      data = data.data;
      if (preProcess) {
        data = preProcess(data);
      }
      if (normalize) {
        data = normalize(data);
      }
      dispatch(success(data));
      dispatch(endNetwork(name));
    })
    .catch(err => {
      console.log(err);
      dispatch(endNetwork(name));
    });
};

export default api;
