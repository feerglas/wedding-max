<template>
    <ul class="list list--booking-teasers">
        <li><a href="https://www.airbnb.ch/" target="_blank"><Icon name="LogoAirbnb" /></a></li>
        <li><a href="https://www.booking.com/" target="_blank"><Icon name="LogoBooking" /></a></li>
        <li><a href="https://www.tripadvisor.ch/" target="_blank"><Icon name="LogoTripadvisor" /></a></li>
    </ul>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  name: 'BookingTeasers',
  props: {},
};
</script>

<style scoped lang="scss">
    .list--booking-teasers li {
      position: relative;
      display: inline-block;
      margin-right: pxToRem($interElementSpacing);
    }

    .list--booking-teasers li:not(:first-child) {
      padding-left: pxToRem($interElementSpacing);
    }

    .list--booking-teasers li:not(:first-child):before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: pxToRem($gutterHeight * 2);
      width: pxToRem(1);
      content: '';
      background: rgba($colorGroom, .2);
    }

    .list--booking-teasers li:nth-child(2) {
      @media (max-width: 465px) {
        margin-right: pxToRem($interElementSpacing * 2);
      }
    }

    .list--booking-teasers li:last-child {
      margin-right: 0;

      @media (max-width: 465px) {
        margin-top: pxToRem($gutterHeight);
        padding-left: 0;

        &:before {
          display: none;
        }

      }

    }

    .list--booking-teasers li a {
      display: flex;
      color: $colorGroomsMan;
    }

    .list--booking-teasers li a:hover {
      color: $colorGroom;
    }

    .list--booking-teasers li svg {
      height: 1.5rem;
      width: auto;
      margin: 0;
    }

</style>
