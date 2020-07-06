import themes from './themes.json';

const initState = {
  all: { ...themes },
  currentTheme: 'standard'
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, currentTheme: action.theme };
    default: return state;
  }
};

export default themeReducer;
