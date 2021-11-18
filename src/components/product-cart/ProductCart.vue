<template>
  <div class="product-cart">
    <button v-if="count === 0" class="product-cart__button" @click="$emit('addCart', 1)">В Корзину</button>
    <template v-else>
      <button class="product-cart__button-decrement" @click="$emit('addCart', count - 1)">-</button>
      <span>{{ count }}</span>
      <button class="product-cart__button-increment" @click="$emit('addCart', count + 1)">+</button>
    </template>
  </div>
</template>

<script>
export default {
  name: "ProductCart",

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-cart {
  &__button {
    align-items: center;
    background-color: #005bff;
    border-radius: 6px;
    box-sizing: border-box;
    color: #fff;
    display: inline-flex;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    line-height: 1.29;
    min-height: 32px;
    min-width: 96px;
    padding: 0 12px;
    text-align: center;
    border: none;

    &:hover {
      background-color: #003ead;
    }
  }
}
</style>
