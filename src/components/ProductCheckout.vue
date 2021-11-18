<template>
  <div class="product-cart">
    <product-image class="product-cart__image"></product-image>
    <product-title class="product-cart__title" :text="product.dish"></product-title>
    <product-price :price="product.price"></product-price>
    <div>
      <product-cart
        class="product-cart__cart"
        :count="countInCart"
        @addCart="pushToCart"
      ></product-cart>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductImage from "./product-image/ProductImage.vue";
import ProductTitle from "./product-title/ProductTitle.vue";
import ProductCart from "./product-cart/ProductCart.vue";
import ProductPrice from "./product-price/ProductPrice.vue";
export default {
  name: "ProductCheckout",

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
.product-cart {
  display: flex;
  padding: 15px;
  height: auto;
  max-width: 100%;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__image {
    height: 200px;
    margin-right: 20px;
  }

  &__title {
    margin-bottom: 10px;
  }
}
</style>
