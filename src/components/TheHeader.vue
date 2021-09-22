<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img  src="@/assets/shopon.gif" alt="logo">
      </router-link>
      <router-link class="btn" to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
nav {
  align-items: center;
  box-shadow: 0 2px 4px rgb(30, 60, 90, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 120px;
}
</style>
