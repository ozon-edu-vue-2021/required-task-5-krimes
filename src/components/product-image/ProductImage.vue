<template>
  <div class="product-image">
    <img class="product-image__item" :src="getRandomImage" />
  </div>
</template>

<script>
import images from "@/service/images";

export default {
  name: "ProductImage",

  computed: {
    getRandomImage() {
      return images.getRandomImagePath();
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.product-image {
  &__item {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
