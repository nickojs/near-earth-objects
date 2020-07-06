const initState = {};

const requestReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SAVE':
      return action.request;
    default: return state;
  }
};

export default requestReducer;
