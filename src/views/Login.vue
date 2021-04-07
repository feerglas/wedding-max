<template>

  <div class="container_center container_center--login-screen">
    <div class="visual-wrapper">
      <div class="visual-placeholder"></div>
    </div>
    <main>
      <form @submit.prevent="submit">

        <!-- Form Group - Username -->
        <div
          class="form-group"
          :class="{ 'form-group-error': $v.name.$error }"
        >

          <input
            id="username"
            class="input"
            autocomplete="username"
            name="username"
            label="Benutzername"
            type="text"
            required
            v-model.trim="$v.name.$model"
          />

          <label for="username" class="label">Benutzername</label>
          <div class="icon-placeholder">
          </div>

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

          <input
            id="password"
            class="input"
            autocomplete="password"
            name="password"
            label="Passwort"
            type="password"
            required
            v-model.trim="$v.password.$model"
          />

          <label for="password" class="label">Passwort</label>
          <div class="icon-placeholder">
          </div>

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
    </main>
  </div>
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

<style lang="scss">

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
