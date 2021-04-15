<template>
  <article>
    <h2 class="title-2">Termine gleich exportieren und in den Kalender eintragen</h2>
    <ul class="list list--calendar-exports">
      <li>
        <a href="/downloads/lappes-wedding-get-together-20210820.ics" target="_blank" download>
          <Icon name="Agenda" />Get together
        </a>
      </li>
      <li>
        <a href="/downloads/lappes-wedding-hochzeitfeier-20210821.ics" target="_blank" download>
          <Icon name="Agenda" />Hochzeitsfeier
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  name: 'CalendarExports',
  props: {},
};
</script>

<style scoped lang="scss">

article {
  margin-bottom: pxToRem($interElementSpacing);
}

.list--calendar-exports svg {
  @include link-icon();
}

.list--calendar-exports li a {
  color: $colorGroomsMan;
}

.list--calendar-exports li a:hover {
  color: $colorGroom;
}

</style>
