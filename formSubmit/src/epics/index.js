import { fromPromise } from 'rxjs/observable/fromPromise';
import {combineEpics } from 'redux-observable';
import { startSubmit, spotSubmit } from 'redux-form';
async function submitToServer(data) {
  try {
    const response = await fetch('http://localhost:3030/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json();
  } catch(error) {
    return error;
  }
}

const registerEpic = (action$, { getState, dispatch }) =>
  action$.ofType('REQUEST_SUBMIT')

export default combineEpics(
  registerEpic,
)

// export const pingEpic = action$ =>
// action$.ofType('PING')
//   .delay(1000) // Asynchronously wait 1000ms then continue
//   .mapTo({ type: 'PONG' });
