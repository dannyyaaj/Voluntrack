import eventReducers from '../redux/reducers/eventReducer';
import { EVENT_ACTIONS } from '../redux/actions/eventActions';

describe('testing upcoming reducer', () => {
  test('initial state should be', () => {
    let action = {
      type: EVENT_ACTIONS.SET_UPCOMING_EVENT,
      payload: 'hi'
    };
    let returnedState = eventReducers( undefined , action);
    console.log(returnedState, 'returned');

    // Assert that is what I want
    expect(returnedState).toEqual({ "past": null, "upcoming": 'hi' })
  })

  test('testing all reducers', () => {
    let action = {};
    let returnedState = eventReducers( undefined , action);
    console.log(returnedState, 'returned');

    // Assert that is what I want
    expect(returnedState).toEqual({ "past": null, "upcoming": null })
  })
})
