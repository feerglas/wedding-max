<template>
    <article>
        <h1 class="title-1" id="hochzeitsfeier">Hochzeitfeier</h1>
        <dl class="event-info-list">
            <dt>Datum &amp; Ablauf</dt>
            <dd>Samstag 21.08.2021<br>
                1500 Trauzeremonie auf der Ferdinand Terrasse<br>
                1600 Apéro auf der Terrasse<br>
                ca. 19h Abendessen<br>
                Anschliessende Party</dd>
            <dt>Adresse</dt>
            <dd>CERVO Mountain Resorts<br>Riedweg 156<br>3920 Zermatt (Schweiz)</dd>
            <dt>Dresscode</dt>
            <dd>Sommerlich festlich</dd>
            <dt>Anmeldefrist</dt>
            <dd>Bitte gebt uns bis zum 15.05.2021 Bescheid ob ihr kommen könnt.</dd>
        </dl>
        <router-link to="/registration">
            <Button text="Anmelden" />
        </router-link>
        <InfoPanel text="Good to know: Wir bitten von Reden oder Spielen abzusehen." />
    </article>
</template>

<script>
import Button from '@/components/Button.vue';
import InfoPanel from '@/components/InfoPanel.vue';

export default {
  name: 'Wedding',
  components: {
    Button,
    InfoPanel,
  },
  props: {},
};
</script>
