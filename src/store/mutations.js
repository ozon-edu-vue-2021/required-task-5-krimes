export default {
  setProducts(state, payload) {
    state.products = JSON.parse(payload).map((it) => ({
      ...it,
      price: Math.round(Math.random() * 10000, 2),
    }));
  },

  addCart(state, { item, count }) {
    const { cart } = state;

    if (count > 0) {
      const found = cart.find((product) => product.uid == item.uid);

      if (found) {
        found.count = count;
      } else {
        cart.push({ ...item, count: 1 });
      }
    } else {
      this.commit("removeFromCart", item);
    }
  },

  removeFromCart(state, item) {
    const index = state.cart.findIndex((product) => product.uid === item.uid);

    if (index > -1) {
      state.cart.splice(index, 1);
    }
  },
};
