export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddtoCart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove from Cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Change cart quantity": {
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.qty = action.payload.qty)
            : (qty = c.id)
        ),
      };
    }
    default:
      return state;
  }
};
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "sort by price":
      return {
        ...state,
        sort: action.payload,
      };
    case "filter by stock":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "filter by delivery":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
    case "filter by rating":
      return {
        ...state,
        byRating: action.payload,
      };
    case "filter by search":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "clear filters":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };

    default:
      return state;
  }
};
