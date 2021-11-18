<template>
  <div class="product-price">
    {{ formated(price) }} 
  </div>
</template>

<script>
const RUBLE = '\u20BD';
export default {
  name: "ProductPrice",

  props: {
    price: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    formated(price) {
      return `${price} ${RUBLE}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-price {
  font-size: 15px;
}
</style>
