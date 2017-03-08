// @flow
import type { counterStateType } from '../reducers/counter';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}



export function incrementAsync(delay: number = 1000) {
  return (dispatch) => {

  }
}


export function incrementAsynclinux(delay: number = 1000) {
  return (dispatch: () => void) => {

  }
}
export function powerofflinux(delay: number = 1000) {
   return (dispatch: () => void) => {

  };
}

export function wifilinux(delay: number = 1000) {
   return (dispatch: () => void) => {

  };
}
