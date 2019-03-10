import {Actions, ADD_SETUP, LOAD_SETUP, LoadSetup} from '../actions/setup.actions';



export function reducer(state: Map<string, string[]>, action: Actions) {

  switch (action.type) {
    case ADD_SETUP:
      return state;
    case LOAD_SETUP:
      return state;
    default:
      return state;
  }
}
