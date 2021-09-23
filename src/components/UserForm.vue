<template>
  <form>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" v-model="name">

    <label for="username">Username</label>
    <input id="username" name="username" type="text" v-model="username">

    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email">

    <label for="password">Password</label>
    <input id="password" name="password" type="password" v-model="password">

    <label for="city">City</label>
    <input id="city" name="city" type="text" v-model="city">

    <label for="street">Street</label>
    <input id="street" name="street" type="text" v-model="street">

    <label for="number">Number</label>
    <input id="number" name="number" type="text" v-model="number">

    <label for="zipcode">Zipcode</label>
    <input id="zipcode" name="zipcode" type="text" v-model="zipcode">

    <label for="phone">Phone</label>
    <input id="phone" name="phone" type="text" v-model="phone">

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  align-items: center;
  display: grid;
  grid-template-columns: 80px 1fr;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
