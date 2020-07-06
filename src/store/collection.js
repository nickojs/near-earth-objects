const initState = {
  collection: []
};

const collectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return { collection: [...state.collection, action.object] };
    case 'UPDATE':
      return { collection: action.collection };
    case 'CLEAR':
      return { collection: [...state.collection, action.collection] };
    default: return state;
  }
};

export default collectionReducer;
