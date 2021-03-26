<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Detail</router-link> |
      <router-link to="/confirmation">Confirmation</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Registration</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
