<template>
  <section>
    <h2>Create New Account</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Create user</button>
      <UserForm v-else>
        <button class="btn btn-form" @click.prevent="createUser">Sign Up</button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  name: 'LoginCreate',
  components: {
    UserForm,
  },
  data() {
    return {
      create: false,
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch('createUser', this.$store.state.user);
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
  margin-top: 40px;
  text-align: center;
}

.btn {
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  width: 100%;
}

.btn-form {
  max-width: 100%;
}
</style>
