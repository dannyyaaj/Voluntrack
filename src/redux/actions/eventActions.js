export const EVENT_ACTIONS = {
  FETCH_EVENT_DATA: 'FETCH_EVENT_DATA',
  FETCH_UPCOMING_EVENTS: 'FETCH_UPCOMING_EVENTS',
  SET_UPCOMING_EVENT: 'SET_UPCOMING_EVENT',
  FETCH_PAST_EVENTS: 'FETCH_PAST_EVENTS',
  SET_PAST_EVENT: 'SET_PAST_EVENT',
  EVENT_DATA_FETCH_FAILED: 'EVENT_DATA_FETCH_FAILED',
  PUT_EVENT_DATA: 'PUT_EVENT_DATA',
  POST_EVENT: 'POST_EVENT',
  DELETE_EVENT: 'DELETE_EVENT'
}

export const triggerUpdateEvent = (eventId, newEventData) => ({
  type: EVENT_ACTIONS.PUT_EVENT_DATA,
  payload: [eventId, newEventData]
})
export const triggerDeleteEvent = (eventId) => ({
  type: EVENT_ACTIONS.DELETE_EVENT,
  payload: eventId
})