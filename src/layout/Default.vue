<template>
  <main class="main-container">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style lang="scss" scoped>
.main-container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  /**
  const screens = {
  mobileM: 'screen and (min-width: 480px)',
  mobileOnly: 'screen and (min-width: 0) and (max-width: 767px)',
  tablet: 'screen and (min-width: 768px)',
  tabletS: 'screen and (min-width: 800px)',
  tabletM: 'screen and (min-width: 990px)',
  tabletOnly: 'screen and (min-width: 768px) and (max-width: 1023px)',
  desktopS: 'screen and (min-width: 1024px)',
  desktopD: 'screen and (min-width: 1280px',
  desktopM: 'screen and (min-width: 1366px)',
  desktopL: 'screen and (min-width: 1600px)',
  }
   */
  @media screen and (min-width: 800px) {
    width: 800px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
}
</style>
