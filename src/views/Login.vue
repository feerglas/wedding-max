<template>

  <div class="wrapper">

    <div class="header">

      <div class="header-icon-wrapper">
        <Icon
          class="header-icon"
          name="RegistrationWithoutHeart"
        />

        <Icon
          class="heart"
          name="HeartOutlineSolid"
        />

        <Icon
          class="heart2"
          name="HeartOutlineSolid"
        />

        <Icon
          class="heart3"
          name="HeartOutlineSolid"
        />

      </div>
    </div>

    <main class="content-container">
      <form @submit.prevent="submit">

        <Logo
          class="logo"
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

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  background: $gradient;
  margin-bottom: pxToRem($interModuleSpacingMobile);

  @include mq-desktop {
    width: 50%;
    flex: 0 0 50%;
    min-height: 100vh;
    margin-bottom: 0;
  }

}

.header-icon-wrapper {
  position: relative;
  width: pxToRem(125);
  height: pxToRem(173);
  margin: pxToRem($interModuleSpacingMobile) 0;

  @include mq-desktop {
    width: pxToRem(240);
    height: pxToRem(333);
    margin: 0;
  }

}

.heart,
.heart2,
.heart3 {
  position: absolute;
  left: calc(50% - #{pxToRem(8)});
  top: pxToRem(13);
  width: pxToRem(16);

  @include mq-desktop {
    left: calc(50% - #{pxToRem(16)});
    top: pxToRem(26);
    width: unset;
    width: pxToRem(28);
  }
}

$animationDuration: 4s;

.heart {
  animation: pulse1 $animationDuration infinite;
}

.heart2 {
  animation: pulse2 $animationDuration infinite;
}

.heart3 {
  animation: pulse2 $animationDuration infinite;
  animation-delay: .9s;
}

.logo {
  width: pxToRem(264);

  @include mq-desktop {
    width: pxToRem(348);
  }
}

@keyframes pulse1 {
  0% {
    transform: scale(1);
  }

  2% {
    transform: scale(.9);
  }

  10% {
    transform: scale(1.2);
  }

  20% {
    transform: scale(1);
  }

  22% {
    transform: scale(.9);
  }

  30% {
    transform: scale(1.2);
  }

  40% {
    transform: scale(1);
  }
}

@keyframes pulse2 {
  2% {
    transform: scale(1);
    opacity: 0;
  }

  10% {
    opacity: 0.5;
    filter: blur(0px);
    filter: blur(1px);
  }

  20% {
    transform: scale(5);
    opacity: 0;
    filter: blur(2px);
  }

  90% {
    transform: scale(5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 0;
    filter: blur(0px);
  }
}

</style>
