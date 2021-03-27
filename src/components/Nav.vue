<template>
  <div id="nav">
    <router-link to="/">Detail</router-link> |
    <router-link to="/registration">Registration</router-link> |
    <router-link to="/confirmation">Confirmation</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
