<template>
  <section class="login">
    <h1>Log in</h1>
    <form>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="login.username">

      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="login.password">

      <button class="btn" @click.prevent="connect">Log In</button>
    </form>

    <p class="forgot">
      <a href="/" target="_blank">Forgot Password?</a>
    </p>

    <LoginCreate/>
  </section>
</template>

<script>
import LoginCreate from '@/components/LoginCreate.vue';

export default {
  name: 'Login',
  components: {
    LoginCreate,
  },
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

<style scoped>
.login {
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
}

h1 {
  color: #87f;
  font-size: 2rem;
  margin-top: 40px;
  text-align: center;
}

form {
  display: grid;
}

.btn {
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  width: 100%;
}
.forgot {
  margin: 20px auto 0 auto;
  text-align: center;
}
.forgot a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
