<template>
    <article>
        <h1 class="title-1" id="hochzeitsfeier">Hochzeitsfeier</h1>
        <dl class="event-info-list">
            <dt><Icon name="Clock2" />Datum &amp; Ablauf</dt>
            <dd>Samstag 21.08.2021<br>
                1500 Trauzeremonie auf der Ferdinand Terrasse<br>
                1600 Apéro auf der Terrasse<br>
                1900 Abendessen<br>
                Anschliessende Party</dd>
            <dt><Icon name="Navigation" />Adresse</dt>
            <dd>CERVO Mountain Resort<br>Riedweg 156<br>3920 Zermatt (Schweiz)</dd>
            <dt><Icon name="Dress" />Dresscode</dt>
            <dd>Sommerlich festlich</dd>
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
        <InfoPanel text="Good to know: Wir bitten von Reden oder Spielen abzusehen." />
    </article>
</template>

<script>
import InfoPanel from '@/components/InfoPanel.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Wedding',
  components: {
    InfoPanel,
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
        width: pxToRem(20);
        margin: 0 pxToRem(8) pxToRem(-3) 0;
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
