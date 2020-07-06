const initState = {
  request: []
};

const requestReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SAVE':
      return { request: action.request };
    default: return state;
  }
};

export default requestReducer;
