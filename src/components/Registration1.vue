<template>
  <div>
    <h1>Zur Feier anmelden</h1>
    <p>
      Wir möchten, dass ihr an unserem Hochzeitswochenende mindestens genauso ausgelassen feiern
      könnt wie wir. Wir sind ganz sicher, dass Ihr deswegen die Bitte, die wir an euch haben,
      verstehen werdet: "Nie ohne unsere Kinder ..." gilt an unserem Hochzeitswochenende
      ausnahmsweise einmal nicht. Wir möchten euch bitten, ohne euren süssen Anhang zu unserem
      Hochzeits-Fest zu kommen (mit Ausnahme natürlich die erst kürzlich geborenen
      Familienmitglieder).
    </p>

    <form>
      <Input
        type="text"
        icon="user"
        :validation="$v.name"
        id="username"
        label="Dein Vorname & Nachname"
        autocomplete="username"
        :required="true"
        error-empty="Deinen Namen muss ich wissen..."
      />

      <p
        v-if="reservationRequestError.length > 0"
        class="form-error"
      >{{reservationRequestError}}</p>

      <Button
        text="Ich nehme gerne teil"
        @click="submit"
        :disable="reservationRequestPending"
      />

      <Button
        text="Ich kann leider nicht teilnehmen"
        secondary
        @click="cancel"
        :disable="reservationRequestPending"
      />
    </form>

  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Registration1',
  mixins: [validationMixin],
  components: {
    Input,
    Button,
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.name1;
      },
      set(newValue) {
        this.$store.commit('setName1', newValue);
      },
    },
    reservationRequestPending() {
      return this.$store.getters.reservationRequestPending;
    },
    reservationRequestError() {
      return this.$store.getters.reservationRequestError;
    },
  },
  validations: {
    name: {
      required,
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit('submit');
      }
    },
    cancel(e) {
      e.preventDefault();

      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$emit('cancel');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-error {
  @include form-error;
  padding: pxToRem(10) 0 0;
}
</style>
