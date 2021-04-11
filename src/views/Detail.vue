<template>
<div class="container_center">
  <Logo class="logo-wrapper--detail-page"/>
  <Nav />
  <main>
      <article>
          <h1 class="title-1" id="anreise">Anreise</h1>
          <p class="text-1">Da Zermatt ein autofreies Bergdorf ist, endet die Anreise für Autofahrer
            in Täsch, 5km vor Zermatt. Von dort aus geht es weiter mit dem Zug-Shuttle.</p>
          <InfoPanel text="Parkhausreservierung Täsch sowie genaue Informationen
          zum Zugshuttle wie Fahrplan und Fahrkartenreservierung" />
      </article>
      <article>
         <h1 class="title-1" id="anreise">Übernachtung</h1>
          <p class="text-1">Sehr gerne könnt ihr das Wochenende im Cervo Mountain Resort verbringen.
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
          <p class="text-1">Die grösste Freude macht ihr uns, wenn ihr dieses einmalige Wochenende
            mit uns verbringt. Selbstverständlich erwarten wir insgeheim dennoch eine kleine
            Aufmerksamkeit von euch – ist doch logisch, oder? Wer uns darüber hinaus also
            etwas schenken möchte würde uns mit einem Beitrag zu unserer Hochzeitsreise
            eine Riesenfreude bereiten. Zudem steht mit der Neueinrichtung unserer Wohnung
            ein weiteres grosses Projekt an, welches wir schon bald in Angriff nehmen möchten.</p>
      </article>
      <GetTogether />
      <Wedding />
      <ContactItems :items="contactItemsData" />
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
import Logo from '@/components/Logo.vue';

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
    Logo,
  },
  data() {
    return {
      contactItemsData: {
        title: 'Kontakt',
        sections: [
          {
            title: 'Trauzeugen',
            items: [
              {
                name: 'Lenna Friedrich',
                phone: '+41 79 819 42 99',
                eMail: '',
              },
              {
                name: 'Niklas Bathke',
                phone: '+49 176 66613678',
                eMail: '',
              },
            ],
          },
          {
            title: 'Brautpaar',
            items: [
              {
                name: 'Sarah Pröckl',
                phone: '+41 76 611 77 61',
                eMail: '',
              },
              {
                name: 'Maximilian Hammes',
                phone: '+41 76 611 61 14',
                eMail: '',
              },
            ],
          },
        ],
      },
    };
  },
};

</script>

<style scoped lang="scss">

main {
  @include layout-column-main;

  @include mq-desktop {
    overflow-x: visible;
  }

}

article:not(:last-child),
article:not(:only-child) {
  @media (max-width: $desktopWidth - 1) {
    margin-bottom: pxToRem($interModuleSpacingMobile);
  }

  @media (min-width: $desktopWidth) {
    margin-bottom: pxToRem($interModuleSpacing);
  }
}

.container_center {
  @media (min-width: $desktopWidth) {
    position: relative;
    width: pxToRem(960);
    margin: 0 auto;
    padding: 0 pxToRem(250);
  }
}

</style>
