<template>
  <div>
    <p>Detail Page</p>
    <router-link to="/registration">
      <Button text="Link to Registration" />
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Detail',
  components: {
    Button,
  },
};

</script>
