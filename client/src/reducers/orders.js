import { CREATE_ORDER, GET_ORDER, ORDER_ERROR, ORDER_RESET } from "../actions/actionTypes";

const initialState = {
  order: null,
  loading: false,
};

// switch case block and then returning data acc to the action type
export default function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };

    case ORDER_ERROR:
      return {
        ...state,
        order:null,
        loading: false,
      };

    case ORDER_RESET: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
}
