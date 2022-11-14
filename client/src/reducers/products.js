import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  PRODUCT_RESET,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false,
};

// switch case block and then returning data acc to the action type
export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        products:[],
        loading: false,
      };

    case PRODUCT_RESET: {
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
