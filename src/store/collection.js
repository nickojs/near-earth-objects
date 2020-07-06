const initState = [];

const collectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.object];
    case 'UPDATE':
      return action.collection;
    case 'CLEAR':
      return initState;
    default: return state;
  }
};

export default collectionReducer;
