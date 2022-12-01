export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add to cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove from cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "change quantity in the cart":
      return {
        ...state,
        cart: cart.filter((c) =>
          c.id === action.payload.id ? c.qty == action.payload.qty : qty == c.id
        ),
      };
  }
};
