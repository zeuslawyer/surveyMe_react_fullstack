const authReducer = (state = {}, action) => {
  console.log('ACTION OBJECT: ', action);
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
