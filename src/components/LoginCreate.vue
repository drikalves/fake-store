<template>
  <section>
    <h2>Create account</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Create Account</button>
      <UserForm v-else>
        <button class="btn btn-form">Create account</button>
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
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
