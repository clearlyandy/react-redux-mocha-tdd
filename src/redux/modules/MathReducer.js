const MATH_REDUCER_ADD = 'MATH_REDUCER_ADD';
const MATH_REDUCER_SUBTRACT = 'MATH_REDUCER_SUBTRACT';
const MATH_REDUCER_MULTIPLY = 'MATH_REDUCER_SUBTRACT';

const initialState = {
  count: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MATH_REDUCER_ADD:
      return {
        count: state.count + 1
      }
    case MATH_REDUCER_SUBTRACT:
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

export function add() {
  return {
    type: MATH_REDUCER_ADD
  };
}

export function subtract() {
  return {
    type: MATH_REDUCER_SUBTRACT
  };
}

export function multiply() {
  return {
    type: MATH_REDUCER_MULTIPLY
  };
}