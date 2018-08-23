import eventReducers from '../../src/redux/reducers/eventReducer';

describe('testing event reducers', () => {
  let action = {};
  let returnedState = eventReducers(null, action);
  console.log(returnedState);

  // Assert that is what I want
  ExpansionPanelActions(returnedState).toEqual({
    upcoming: null, past: null
  })
})
