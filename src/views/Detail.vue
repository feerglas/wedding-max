<template>
<div>
  <Header class="header" />
  <div class="container_center">
    <Nav
      :items="navItemsData"
      :activeMenuItem="activeMenuItem"
      @scroll-to-id="handleScrollToId"
    />
    <main>
        <article>
            <h1 class="title-1" id="anreise">Anreise</h1>
            <p class="text-1">
              Da Zermatt ein autofreies Bergdorf ist, endet die Anreise für Autofahrer
              in Täsch, 5km vor Zermatt. Von dort aus geht es weiter mit dem Zug-Shuttle.</p>
            <InfoPanel text="Parkhausreservierung Täsch sowie genaue Informationen
            zum Zugshuttle wie Fahrplan und Fahrkartenreservierung" href="https://www.zermatt.ch/anreise/Matterhorn-Terminal-Taesch"/>
        </article>
        <article>
           <h1 class="title-1" id="uebernachtung">Übernachtung</h1>
            <p class="text-1">
              Sehr gerne könnt ihr das Wochenende im Cervo Mountain Resort verbringen.
              Dafür steht euch ein von uns reserviertes Kontingent an Zimmern verschiedener
              Kategorien zur Verfügung, welche ihr auf eigene Kosten direkt beim Hotel buchen
              könnt. Bitte gebt dazu bei eurer Reservierung «Hochzeit Pröckl &amp; Hammes» an.</p>
            <CervoTeaser/>
            <h2 class="title-2">Weitere Hotelvorschläge in der Nähe</h2>
            <HotelTeasers/>
            <h3 class="title-4">Ansonsten gibt es noch viele weitere Möglichkeiten:</h3>
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
</div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import navData from '@/data/navItems';
import InfoPanel from '@/components/InfoPanel.vue';
import CervoTeaser from '@/components/CervoTeaser.vue';
import HotelTeasers from '@/components/HotelTeasers.vue';
import BookingTeasers from '@/components/BookingTeasers.vue';
import ContactItems from '@/components/ContactItems.vue';
import GetTogether from '@/components/GetTogether.vue';
import Wedding from '@/components/Wedding.vue';
import Header from '@/components/Header.vue';
import contactData from '@/data/contactItems';

// helper to get kind of a callback when window.scrollTo() is finished
function scrollTo(offset, callback) {
  const fixedOffset = offset.toFixed();
  const onScroll = () => {
    if (window.pageYOffset.toFixed() === fixedOffset) {
      window.removeEventListener('scroll', onScroll);
      callback();
    }
  };

  window.addEventListener('scroll', onScroll);

  onScroll();

  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
}

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
    Header,
  },
  data() {
    return {
      navItemsData: navData,
      contactItemsData: {
        title: 'Kontakt',
        sections: [
          {
            title: 'Trauzeugen',
            items: [
              contactData.lenna,
              contactData.niklas,
            ],
          },
          {
            title: 'Brautpaar',
            items: [
              contactData.sarah,
              contactData.max,
            ],
          },
        ],
      },
      activeMenuItem: navData.navItems[0].hash,
      shouldObserve: true,
    };
  },
  mounted() {
    const targets = document.querySelectorAll('.title-1');

    const options = {
      root: null,
      rootMargin: '0% 0% -50% 0%',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    targets.forEach((target) => {
      observer.observe(target);
    });
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.shouldObserve) {
            this.activeMenuItem = entry.target.getAttribute('id');
          }
        }
      });
    },
    handleScrollToId(id) {
      this.shouldObserve = false;

      let elementsTop = document.querySelector(`#${id}`).offsetTop;

      // hacky... in real life, we would find a better solution to sync mediaqueries between
      // css and js
      if (window.innerWidth < 1140) {
        elementsTop -= 70;
      }

      this.activeMenuItem = id;
      scrollTo(elementsTop, () => {
        this.shouldObserve = true;
      });
    },
  },
};

</script>

<style scoped lang="scss">
.header {
  cursor: default;
  color: $colorBride;
}

main {
  @include layout-column-main;

  @include mq-desktop {
    overflow-x: visible;
  }

}

article:not(:last-child),
article:not(:only-child) {
  @include mq-until-desktop {
    margin-bottom: pxToRem($interModuleSpacingMobile);
  }

  @include mq-desktop {
    margin-bottom: pxToRem($interModuleSpacing);
  }
}

.container_center {
  @include mq-desktop {
    position: relative;
    width: pxToRem(960);
    margin: 0 auto;
    padding: 0 pxToRem(250);
  }
}

</style>
