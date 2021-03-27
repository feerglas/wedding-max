<template>

  <form @submit.prevent="submit">

    <!-- Form Group - Username -->
    <div
      class="form-group"
      :class="{ 'form-group-error': $v.name.$error }"
    >

      <label class="label">Benutzername</label>

      <input
        class="input"
        autocomplete="username"
        name="username"
        label="Benutzername"
        type="text"
        v-model.trim="$v.name.$model"
      />

      <div
        class="input-error"
        v-if="!$v.name.required && $v.name.$dirty"
      >Eine E-Mail musst du schon angeben... sonst klappts nicht...</div>

      <div
        class="input-error"
        v-if="!$v.name.minLength"
      >Muss mindestens {{$v.name.$params.minLength.min}} Zeichen lang sein</div>

    </div>

    <!-- Form Group - Password -->
    <div
      class="form-group"
      :class="{ 'form-group-error': $v.password.$error }"
    >

      <label class="label">Passwort</label>

      <input
        class="input"
        autocomplete="password"
        name="password"
        label="Passwort"
        type="password"
        v-model.trim="$v.password.$model"
      />

      <div
        class="input-error"
        v-if="!$v.password.required && $v.password.$dirty"
      >Ohne Passwort kommste hier nicht rein...</div>

    </div>

    <Button
      text="Anmelden"
      type="submit"
      :disable="isLoginPending"
    />

    <p
      class="form-error"
      v-if="isLoginError"
    >Du solltest erst an der Hochzeit trinken! Bier weglegen und eine nochmals versuchen...</p>

    <p
      class="form-error"
      v-if="isLoginPending"
    >Moment...</p>

  </form>
</template>

<script>

import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import Button from '@/components/Button.vue';

export default {
  mixins: [validationMixin],
  name: 'Login',
  components: {
    Button,
  },
  computed: {
    isLoginPending() {
      return this.$store.getters.isLoginPending;
    },
    isLoginError() {
      return this.$store.getters.isLoginError;
    },
  },
  data() {
    return {
      name: '',
      password: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$store.dispatch('userLogin', {
          email: this.name,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">

</style>
