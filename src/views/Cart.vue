<template>
  <div class="cart">
    <div class="cart__products-container">
      <product-checkout
        v-for="product in cart"
        :key="product.uid"
        :product="product"
      ></product-checkout>
    </div>
    <div class="cart__offer">
      <div>Общая стоимость: {{ getCartTotal }}</div>
      <button @click="checkout">Заказать</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ProductCheckout from "@/components/ProductCheckout.vue";
export default {
  components: { ProductCheckout },
  name: "Cart",

  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getCartTotal"]),
  },

  methods: {
    checkout() {
      console.log(this.cart);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;

  &__products-container {
    width: 60%;
  }

  &__offer {
    margin-left: auto;
    width: 30%;
  }
}
</style>
