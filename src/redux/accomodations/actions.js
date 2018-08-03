import * as consts from 'redux/consts/action-types';
import { v4 } from 'uuid';

const buildUrl = (type) =>
  `https://s3-us-west-2.amazonaws.com/selina-assignments/${type}.json`;

const prepareData = (data) =>
  data.accomodations.map(acc => ({ ...acc, isFavorite: false, id: v4() }));

const normalizeAccomodations = (data = []) => data.reduce((acc, currentValue) => {
    acc[currentValue.id] = currentValue;
    return acc;
  }, {});

const setAccomodations = (accommodations) => ({
  type: consts.SET_ACCOMODATIONS,
  payload: { accommodations },
});

export const setFavorite = (id) => ({
  type: consts.SET_FAVORITE,
  payload: {
    id
  }
});

export const fetchAccomodations = (type = 'accommodations') => ({
  type: consts.API,
  payload: {
    name: type,
    method: 'get',
    url: buildUrl(type),
    preProcess: prepareData,
    normalize: normalizeAccomodations,
    success: (data)=> [
      setAccomodations(data)
    ]
  }
});
