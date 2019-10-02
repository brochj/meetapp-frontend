import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  getMeetupsSuccess,
  meetupFailure,
  createMeetupSuccess,
} from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'organizing');

    yield put(getMeetupsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar os meetups, tente novamente mais tarde');

    yield put(meetupFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { meetup } = payload;
    const response = yield call(api.post, 'meetups', meetup);

    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao criar os meetups, tente novamente mais tarde');

    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/GET_MEETUPS_REQUEST', getMeetups),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
]);
