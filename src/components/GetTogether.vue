<template>
    <article>
        <h1 class="title-1" id="gettogether">Get together</h1>
        <dl class="event-info-list">
            <dt><Icon name="Clock2" />Datum</dt>
            <dd>Freitag 20.08.2021, ab 1830</dd>
            <dt><Icon name="MapMarker" />Adresse</dt>
            <dd>Schali Lago by CERVO Zermatt<br>Schalisee<br>3929 Täsch (Schweiz)</dd>
            <dt><Icon name="Autobus" />Transfer Zermatt nach Täsch</dt>
            <dd>Der Transfer zwischen Zermatt und Täsch wird ab dem Parkhaus Urania in
                Zermatt von uns organisiert. Wir werden Nähere Informationen dazu später
                via WhatsApp kommunizieren.</dd>
            <dt><Icon name="Dress" />Dresscode</dt>
            <dd>Sommerlich</dd>
            <dt><Icon name="Agenda" />Anmeldefrist</dt>
            <dd>Bitte gebt uns bis zum 31.05.2021 Bescheid ob ihr kommen könnt.</dd>
        </dl>
        <router-link
          tag="button"
          type="button"
          to="/registration"
          class="button"
        >
          Anmelden
        </router-link>
    </article>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'GetTogether',
  components: {
    Icon,
  },
  props: {},
};
</script>

<style scoped lang="scss">
    .event-info-list {
        margin-bottom: pxToRem($interElementSpacing);
    }

    .event-info-list dt {
        @include title-3();
    }

     .event-info-list dt svg {
        width: pxToRem(15);
        margin: 0 pxToRem(8) pxToRem(-1) 0;
    }

    .event-info-list dd {
        @include text-1();
        margin-left: 0;
    }

    .event-info-list dd:not(:last-child) {
        margin-bottom: pxToRem($interElementSpacing);
    }

    .button {
      @include button();
    }

</style>
