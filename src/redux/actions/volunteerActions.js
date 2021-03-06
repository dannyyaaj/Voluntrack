export const VOLUNTEER_ACTIONS = {
  FETCH_NON_EVENT_VOLUNTEERS: 'FETCH_NON_EVENT_VOLUNTEERS',
  SET_NON_EVENT_VOLUNTEERS: 'SET_NON_EVENT_VOLUNTEERS',
  FETCH_ALL_VOLUNTEERS: 'FETCH_ALL_VOLUNTEERS',
  SET_ALL_VOLUNTEERS: 'SET_ALL_VOLUNTEERS',
  POST_VOLUNTEER: 'POST_VOLUNTEER_TO_EVENT',
  FETCH_EVENT_VOLUNTEERS: 'FETCH_EVENT_VOLUNTEERS',
  SET_EVENT_VOLUNTEER: 'SET_EVENT_VOLUNTEER',
  VOLUNTEER_DATA_FETCH_FAILED: 'VOLUNTEER_DATA_FETCH_FAILED',
  PUT_VOLUNTEER_TO_EVENT: 'PUT_VOLUNTEER_TO_EVENT',
  DELETE_VOLUNTEER: 'DELETE_VOLUNTEER'
}

export const addVolunteerToEvent = (volunteerId, eventId) => ({
  type: VOLUNTEER_ACTIONS.PUT_VOLUNTEER_TO_EVENT,
  payload: [volunteerId, eventId]
})

