const AUTHORIZATION = "AUTHORIZATION";

let initialState = {
  authorizationStatus: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

//Action Creators

export const signIn = (phoneOrEmail, password) => ({
  type: AUTHORIZATION,
});

//Thunk Creators

export default authReducer;
