import request from 'superagent';

const fetchData = store => next => action => {
  next(action);
  switch (action.type) {
    case 'FETCH_ITEMS':
      const API_URL = 'localhost:3001/browse';
      request.get(API_URL).end((err, res) => {
        if (err) {
          return next({
            type: 'FETCH_ITEMS_ERROR',
            err
          });
        }
        const data = JSON.parse(res);
        next({
          type: 'FETCH_ITEMS_SUCCESSFUL',
          data
        });
      });
      break;

    default:
      break;
  }
};

export default fetchData;
