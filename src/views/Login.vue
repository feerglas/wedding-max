<template>

  <div class="wrapper">

    <div class="header">
      <Icon
        class="header-icon"
        name="Registration"
      />
    </div>

    <main class="content-container">
      <form @submit.prevent="submit">

        <Logo
          class=""
          :heart="false"
        />

        <Input
          type="text"
          icon="userMale"
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
import Logo from '@/components/Logo.vue';
import Icon from '@/components/Icon.vue';

export default {
  mixins: [validationMixin],
  name: 'Login',
  components: {
    Button,
    Input,
    Logo,
    Icon,
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

.wrapper {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  background: rgba(30, 76, 106, .03);

  @include mq-desktop {
    flex-wrap: nowrap;
  }

}

.content-container {
  display: flex;
  @include layout-column-main;
  margin: 0;
  margin-bottom: pxToRem($interModuleSpacingMobile * 2);
  overflow: visible;
  justify-content: center;

  @include mq-desktop {
    flex-direction: column;
    flex: 0 0 50%;
    align-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
  }

}

.content-container form {
  max-width: pxToRem(350);
}

.logo {
  flex-basis: 100%;

  @include mq-desktop {
    position: absolute;
    top: pxToRem(46);
    right: pxToRem(85);
  }

}

.logo-wrapper {
  @media (max-width: $desktopWidth - 1) {
    width: 90%;
    margin-bottom: pxToRem($interModuleSpacingMobile - 26);
  }
}

.header {
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  background: $gradient;
  margin-bottom: pxToRem($interModuleSpacingMobile);

  @include mq-desktop {
    flex-direction: column;
    width: 50%;
    flex: 0 0 50%;
    min-height: 100vh;
    margin-bottom: 0;
  }

}

.header-icon {
  height: pxToRem(174);
  margin: pxToRem($interModuleSpacingMobile) auto;

  @include mq-desktop {
    height: pxToRem(344);
    margin: 0;
  }

}

</style>
