<template>
  <div class="product-title">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "ProductTitle",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.product-title {
  font-size: 18px;
  height: 100%;
}
</style>
