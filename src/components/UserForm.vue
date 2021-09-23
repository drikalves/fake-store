<template>
  <form>
    <label for="firstname">First Name</label>
    <input id="firstname" name="firstname" type="text" v-model="firstname">

    <label for="lastname">Last Name</label>
    <input id="lastname" name="lastname" type="text" v-model="lastname">

    <label for="username">Username</label>
    <input id="username" name="username" type="text" v-model="username">

    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email">

    <label for="password">Password</label>
    <input id="password" name="password" type="password" v-model="password">

    <label for="zipcode">Zipcode</label>
    <input id="zipcode" name="zipcode" type="text" v-model="zipcode">

    <label for="city">City</label>
    <input id="city" name="city" type="text" v-model="city">

    <label for="street">Street</label>
    <input id="street" name="street" type="text" v-model="street">

    <label for="number">Number</label>
    <input id="number" name="number" type="text" v-model="number">

    <label for="phone">Phone</label>
    <input id="phone" name="phone" type="text" v-model="phone">

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import mapFields from '@/helpers';

export default {
  computed: {
    ...mapFields({
      fields: ['firstname', 'lastname', 'email', 'username', 'password', 'phone', 'zipcode', 'street', 'city', 'number'],
      base: 'user',
      mutation: 'UPDATE_USER',
    }),
  },
};
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
