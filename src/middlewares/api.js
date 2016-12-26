import axios from 'axios';

export const api = (store) => (next) => (action) => {
  if (!Array.isArray(action.type)) {
    return next(action);
  }

  const { type: [REQUEST, SUCCESS, ERROR], payload } = action;
  const config = {
    method: 'get',
    headers: {},
  };

  next({ type: REQUEST, payload });

  return axios({ ...config, ...payload })
    .then(
      (response) => {
        next({ type: SUCCESS, payload: response });

        return Promise.resolve(response);
      },
      (error) => {
        next({ type: ERROR, payload: error });

        return Promise.reject(error);
      }
    );
};

export default api;
