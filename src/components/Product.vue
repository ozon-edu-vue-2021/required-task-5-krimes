<template>
  <div class="product">
    <product-image class="product__image"></product-image>
    <product-price :price="product.price"></product-price>
    <product-title class="product__title" :text="product.dish"></product-title>
    <product-cart
      class="product__cart"
      :count="countInCart"
      @addCart="pushToCart"
    ></product-cart>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductImage from "./product-image/ProductImage.vue";
import ProductTitle from "./product-title/ProductTitle.vue";
import ProductCart from "./product-cart/ProductCart.vue";
import ProductPrice from "./product-price/ProductPrice.vue";
export default {
  name: "Product",

  components: { ProductImage, ProductTitle, ProductCart, ProductPrice },

  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    ...mapGetters(["countProductInCart"]),

    countInCart() {
      const { product, countProductInCart } = this;

      return countProductInCart(product.uid);
    },
  },

  methods: {
    ...mapMutations(["addCart"]),

    pushToCart(count) {
      const { product } = this;

      this.addCart({ item: product, count });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  background-color: #fcf;
  padding: 15px;
  border-radius: 5px;
  height: auto;
  max-width: 100%;

  &__image {
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 10px;
  }
}
</style>
