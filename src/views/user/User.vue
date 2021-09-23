<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'User'}">Products</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Purchases'}">Purchases</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Sales'}">Sales</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserEdit'}">Edit User</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Logout</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'User',
};
</script>

<style scoped>
.user {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: minmax(140px, 200px) 1fr;
  margin: 40px auto;
  max-width: 900px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  background: #f4f7fc;
  border-radius: 4px;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  border: none;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-align: left;
  width: 100%;
}
</style>
