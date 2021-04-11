<template>
    <article>
        <h1
          v-if="items.title"
          class="title-1"
          id="kontakt"
        >{{items.title}}</h1>

        <div
          v-for="(section, index) in items.sections"
          :key="index"
        >
          <h2
            class="title-3"
            v-if="section.title"
          >{{section.title}}</h2>

          <ul class="list list--contact">
              <li
                v-for="(person, index2) in section.items"
                :key="index2"
              >
                  <p>
                    {{person.name}}<br>
                    <a :href="`tel:${person.phone}`">
                      <Icon name="Smartphone" />
                      {{person.phone}}
                    </a><br>
                    <a :href="`mailto:${person.mail}`">
                      <Icon name="Mail" />
                      E-Mail
                    </a>
                </p>
            </li>
          </ul>
        </div>

    </article>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'ContactItems',
  components: {
    Icon,
  },
  props: {
    items: Object,
  },
};
</script>

<style scoped lang="scss">
    $listItemVerticalSpacing: $gutterHeight * 6;

    .list--contact {
      display: flex;
      flex-direction: column;
      margin-top: pxToRem(-10);
      margin-bottom: pxToRem($interElementSpacing);
      @include text-1();
    }

    .list--contact p {
      margin: 0;
    }

    .list--contact svg {
      @include link-icon();
    }

    .list--contact li:not(:first-child) {
      position: relative;
      margin-top: pxToRem($listItemVerticalSpacing);
    }

    .list--contact li:not(:first-child):before {
      position: absolute;
      top: pxToRem(-($listItemVerticalSpacing / 2 + 1));
      left: 0;
      content: '';
      height: pxToRem(1);
      width: pxToRem(56);
      background: rgba($colorGroom, 0.2);
    }

    .list--contact li:not(:first-child):after {
      position: absolute;
      top: calc(-50% + #{pxToRem(14)});
      transform: translateY(-50%);
      left: pxToRem(16);
      content: '&';
      @include title-2;
      padding: 0 pxToRem(6) 0 pxToRem(7);
      color: rgba($colorGroom, .2);
      background: $colorBride;
      height: pxToRem(28);
      line-height: pxToRem(28);
    }

    @media (min-width: $desktopWidth) {
        .list--contact {
          flex-direction: row;
        }

        .list--contact li:not(:first-child) {
          margin-top: 0;
          margin-left: pxToRem(96);
        }

        .list--contact li:not(:first-child):before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: pxToRem(-48);
          height: pxToRem(48);
          width: pxToRem(1);
        }

        .list--contact li:not(:first-child):after {
          top: 50%;
          left: pxToRem(-54);
          padding: 0;
        }

    }

</style>
