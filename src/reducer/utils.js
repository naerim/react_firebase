export const stateAction = (state) => {
  const ACTION_REQUEST = `${state}_REQUEST`;
  const ACTION_SUCCESS = `${state}_SUCCESS`;
  const ACTION_FAILURE = `${state}_FAILURE`;

  return [ACTION_REQUEST, ACTION_SUCCESS, ACTION_FAILURE];
};