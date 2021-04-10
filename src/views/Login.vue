<template>

  <div class="container_center container_center--login-screen">
    <div class="visual-wrapper">
      <div class="visual-placeholder"></div>
    </div>
    <main>
      <form @submit.prevent="submit">

        <Input
          type="text"
          icon="user"
          :validation="$v.name"
          id="username"
          label="Benutzername"
          autocomplete="username"
          :required="true"
          error-empty="Eine E-Mail musst du schon angeben... sonst klappts nicht..."
          :error-wrong="`Mindestens ${$v.name.$params.minLength.min} Zeichen`"
        />

        <Input
          type="password"
          icon="key2"
          :validation="$v.password"
          id="password"
          label="Passwort"
          autocomplete="password"
          :required="true"
          error-empty="Ohne Passwort kommste hier nicht rein..."
        />

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
    </main>
  </div>
</template>

<script>

import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
  mixins: [validationMixin],
  name: 'Login',
  components: {
    Button,
    Input,
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

$maxViewWidth: 1440;

body {
  background-color: #8fa9c5;
}

.container_center--login-screen {
  display: flex;
  flex-direction: row;
  min-width: 90%;
  max-width: pxToRem($maxViewWidth);
  height: calc(100vh - #{pxToRem($interModuleSpacing)});
}

.visual-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 50%;
  background-image: $gradient;
}

.visual-placeholder {
  width: pxToRem(240);
  height: pxToRem(334);
  border: 1px solid pink;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  height: 100%;
  background: $colorBride;
}

form {
  width: 48%;
}

</style>
