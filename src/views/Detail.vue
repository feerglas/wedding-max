<template>
<div class="container_center">
  <Nav />
  <main>
      <article>
          <h1 class="title-1" id="anreise">Anreise</h1>
          <p>Da Zermatt ein autofreies Bergdorf ist, endet die Anreise für Autofahrer
            in Täsch, 5km vor Zermatt. Von dort aus geht es weiter mit dem Zug-Shuttle.</p>
          <InfoPanel text="Parkhausreservierung Täsch sowie genaue Informationen
          zum Zugshuttle wie Fahrplan und Fahrkartenreservierung" />
      </article>
      <article>
         <h1 class="title-1" id="anreise">Übernachtung</h1>
          <p>Sehr gerne könnt ihr das Wochenende im Cervo Mountain Resort verbringen.
            Dafür steht euch ein von uns reserviertes Kontingent an Zimmern verschiedener
            Kategorien zur Verfügung, welche ihr auf eigene Kosten direkt beim Hotel buchen
            könnt. Bitte gebt dazu bei eurer Reservierung «Hochzeit Pröckl &amp; Hammes» an.</p>
          <CervoTeaser/>
          <h2 class="title-2">Weitere Hotelvorschläge in der Nähe</h2>
          <HotelTeasers/>
          <h3 class="title-3">Ansonsten gibt es noch viele weitere Möglichkeiten:</h3>
          <BookingTeasers/>
      </article>
      <article>
          <h2 class="title-1" id="geschenkideen">Geschenkideen</h2>
          <p>Die grösste Freude macht ihr uns, wenn ihr dieses einmalige Wochenende mit
            uns verbringt. Selbstverständlich erwarten wir insgeheim dennoch eine kleine
            Aufmerksamkeit von euch – ist doch logisch, oder? Wer uns darüber hinaus also
            etwas schenken möchte würde uns mit einem Beitrag zu unserer Hochzeitsreise
            eine Riesenfreude bereiten. Zudem steht mit der Neueinrichtung unserer Wohnung
            ein weiteres grosses Projekt an, welches wir schon bald in Angriff nehmen möchten.</p>
      </article>
      <GetTogether />
      <Wedding />
      <ContactItems />
  </main>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import InfoPanel from '@/components/InfoPanel.vue';
import CervoTeaser from '@/components/CervoTeaser.vue';
import HotelTeasers from '@/components/HotelTeasers.vue';
import BookingTeasers from '@/components/BookingTeasers.vue';
import ContactItems from '@/components/ContactItems.vue';
import GetTogether from '@/components/GetTogether.vue';
import Wedding from '@/components/Wedding.vue';

export default {
  name: 'Detail',
  components: {
    Nav,
    InfoPanel,
    CervoTeaser,
    HotelTeasers,
    BookingTeasers,
    ContactItems,
    GetTogether,
    Wedding,
  },
};

</script>

<style lang="scss">
@import '../scss/variables.scss';
@import '../scss/functions.scss';
@import '../scss/mixins.scss';

article:not(:last-child),
article:not(:only-child) {
  margin-bottom: pxToRem($interModuleSpacingMobile);
}

@media (min-width: $desktopWidth) {
  .container_center {
    display: flex;
  }

  main {
    display: flex;
    flex: 1 0 pxToRem(560);
    flex-direction: column;
  }

  article:not(:last-child),
  article:not(:only-child) {
    margin-bottom: pxToRem($interModuleSpacing);
  }

}
</style>
