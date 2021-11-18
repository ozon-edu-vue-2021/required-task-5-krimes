export default {
  countProductInCart({ cart }) {
    return (productId) => {
      const productInCart = cart.find((product) => product.uid === productId) || { count: 0 };
      return Number(productInCart.count);
    };
  },

  countAllProduct({ cart }) {
    return cart.reduce((prev, product) => prev + Number(product.count), 0);
  },

  getCartTotal({cart}) {
    return cart.reduce((prev, product) => prev + (Number(product.count) * Number(product.price)), 0);
  }
};
