const SET_LANGUAGE = "SET_LANGUAGE";

let initialState = {
  language: "RUSSIAN",
  registerAs: "borrower",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      };
    }

    default:
      return state;
  }
};

//Action Creators

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  language,
});

//Thunk Creators

export default mainReducer;
