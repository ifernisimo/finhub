const REDUCER = "REDUCER";

let initialState = {};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case REDUCER: {
      return {
        ...state,
        todoArray: [{ ...action.payload }, ...state.todoArray],
      };
    }

    default:
      return state;
  }
};

//Action Creators

export const addNewTodo = () => ({
  type: REDUCER,
});

//Thunk Creators

export default mainReducer;
