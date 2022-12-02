export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddtoCart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove from cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Change cart quantity":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.qty = action.payload.qty)
            : (qty = c.id)
        ),
      };
  }
};
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "filter by rating":
      return {
        ...state,
        byRating: action.payload,
      };
  }
};
