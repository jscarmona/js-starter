export default function api(client) {
  return (store) => (next) => (action) => {
    if (!Array.isArray(action.type)) {
      return next(action);
    }

    const { type: [REQUEST, SUCCESS, ERROR], payload } = action;
    const config = {
      method: 'GET',
      headers: {},
    };

    next({ type: REQUEST, payload });

    return client(Object.assign(config, payload))
      .then(
        (response) => next({ type: SUCCESS, payload: response }),
        (error) => next({ type: ERROR, payload: error })
      )
      .catch((error) => next({ type: ERROR, payload: error }));
  };
}