<template>
  <div class="main-wrapper">
    <div class="main-content">
      <Nav />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>
