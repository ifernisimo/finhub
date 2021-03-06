const DEMO = "DEMO";

let initialState = {
  settings: {
    payday_loan: {
      min_term: 1,
      max_term: 30,
      min_amount: 1000,
      max_amount: 5000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 15,
      service_fee: 15,
      step_amount: 100,
      step_term: 1,
      range_term: 3,
      range_amount: 5,
    },
    expert_loan: {
      min_term: 90,
      max_term: 360,
      min_amount: 5100,
      max_amount: 30000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 4.5,
      service_fee: 10,
      step_amount: 100,
      step_term: 30,
      range_term: 4,
      range_amount: 5,
    },
    business_loan: {
      min_term: 90,
      max_term: 360,
      min_amount: 10000,
      max_amount: 50000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 2.5,
      service_fee: 10,
      step_amount: 100,
      step_term: 30,
      range_term: 4,
      range_amount: 6,
    },
  },
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMO: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

//Action Creators

export const demo = () => ({
  type: DEMO,
});

//Thunk Creators

export default calcReducer;
