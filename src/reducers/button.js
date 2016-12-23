import { TOGGLE_JQUERY_BUTTON, TOGGLE_REACT_BUTTON } from '../constants';

const initialState = {
  jqueryActive: false,
  reactActive: false,
}

const button = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_JQUERY_BUTTON:
      return Object.assign({}, state, { jqueryActive: !state.jqueryActive });

    case TOGGLE_REACT_BUTTON:
      return Object.assign({}, state, { reactActive: !state.reactActive });

    default:
      return state;
  }
}

export default button;
