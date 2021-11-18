<template>
  <div class="listing">
    <div class="listing__cart">
      <router-link to="/cart">
        Корзина
        <span>{{ countAllProduct }}</span>
      </router-link>
    </div>
    <div class="listing__container">
      <template v-for="product of products">
        <product :key="product.uid" :product="product"></product>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Product from "../components/Product.vue";

export default {
  name: "Listing",

  components: { Product },

  data() {
    return {
      fetchProps: {
        size: 30,
      },
    };
  },

  mounted() {
    const { fetchProps } = this;
    this.loadProducts(fetchProps);
  },

  computed: {
    ...mapState(["products"]),
    ...mapGetters(["countAllProduct"]),
  },

  methods: {
    ...mapActions(["loadProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.listing {
  &__cart {
    text-align: end;
    margin-bottom: 20px;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 800px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
