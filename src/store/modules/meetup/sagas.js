import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getMeetupsSuccess, meetupFailure } from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'organizing');

    yield put(getMeetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar os meetups, tente novamente mais tarde');

    yield put(meetupFailure());
  }
}

export default all([takeLatest('@meetup/GET_MEETUP_REQUEST', getMeetups)]);
