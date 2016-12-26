import createLogger from 'redux-logger';
import { Iterable } from 'immutable';

const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => (
    Object.keys(state).reduce((newState, key) => {
      const val = state[key];
      newState[key] = Iterable.isIterable(val) ? val.toJS() : val;

      return newState;
    }, {})
  ),
});

export default logger;
