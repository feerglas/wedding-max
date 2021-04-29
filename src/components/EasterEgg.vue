<template>
  <ul class="image-container">
    <li v-for="(easterEggImage, index) in items.easterEggImages" :key="index">
      <img
        :class="{'is-visible': activeEasterEggImage == index}"
        :src="easterEggImage.src"
        alt=""
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'EasterEgg',
  props: {
    activeEasterEggImage: Number,
    items: Object,
  },
};
</script>

<style scoped lang="scss">
  .image-container {
    @include list-reset();
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
  }

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: opacity .2s ease-in;
    pointer-events: none;
    opacity: 0;
    border: 0;
    width: auto;
    min-height: 100vh;
    max-height: 100vh;

    @media (orientation: landscape) {
      min-height: 100vh;
      min-width: 100vw;
      max-height: none;
      height: auto;
    }

  }

  .is-visible {
    opacity: 1;
  }

</style>
