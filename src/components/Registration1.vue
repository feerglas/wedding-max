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

    <Input
      type="text"
      icon="user"
      :validation="$v.name"
      id="username"
      label="Dein Vorname & Nachname"
      autocomplete="username"
      :required="true"
      error-empty="Deinen Namen muss ich wissen..."
      :error-wrong="`Mindestens ${$v.name.$params.minLength.min} Zeichen`"
    />

    <Button
      text="Ich nehme gerne teil"
      @click="submit"
    />

    <Button
      text="Ich kann leider nicht teilnehmen"
      secondary
      @click="cancel"
    />
  </div>

</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Registration1',
  mixins: [validationMixin],
  components: {
    Input,
    Button,
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
