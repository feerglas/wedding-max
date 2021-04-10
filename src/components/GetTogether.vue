<template>
    <article>
        <h1 class="title-1" id="gettogether">Get together</h1>
        <dl class="event-info-list">
            <dt>Datum</dt>
            <dd>Freitag 20.08.2021, ab 1830</dd>
            <dt>Adresse</dt>
            <dd>Schali Lago by CERVO Zermatt<br>Schalisee<br>3929 Täsch (Schweiz)</dd>
            <dt>Transfer Zermatt nach Täsch</dt>
            <dd>Der Transfer zwischen Zermatt und Täsch wird ab dem Parkhaus Urania in
                Zermatt von uns organisiert. Wir werden Nähere Informationen dazu später
                via WhatsApp kommunizieren.</dd>
            <dt>Dresscode</dt>
            <dd>Sommerlich</dd>
            <dt>Anmeldefrist</dt>
            <dd>Bitte gebt uns bis zum 15.05.2021 Bescheid ob ihr kommen könnt.</dd>
        </dl>
        <router-link to="/registration">
            <Button text="Anmelden" />
        </router-link>
    </article>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'GetTogether',
  components: {
    Button,
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

    .event-info-list dd {
        @include text-1();
        margin-left: 0;
    }

    .event-info-list dd:not(:last-child) {
        margin-bottom: pxToRem($interElementSpacing);
    }

</style>
