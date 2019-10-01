export function getMeetupsRequest() {
  return {
    type: '@meetup/GET_MEETUP_REQUEST',
  };
}

export function getMeetupsSuccess(meetups) {
  return {
    type: '@meetup/GET_MEETUP_SUCCESS',
    payload: { meetups },
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/MEETUP_FAILURE',
  };
}
