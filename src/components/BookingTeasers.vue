<template>
    <ul class="list list--booking-teasers">
        <li><a href="https://www.airbnb.ch/" target="_blank"><LogoAirbnb /></a></li>
        <li><a href="https://www.booking.com/" target="_blank"><LogoBooking /></a></li>
        <li><a href="https://www.tripadvisor.ch/" target="_blank"><LogoTripadvisor /></a></li>
    </ul>
</template>

<script>
import LogoAirbnb from '../../public/img/svg/logo_airbnb.svg';
import LogoBooking from '../../public/img/svg/logo_booking.svg';
import LogoTripadvisor from '../../public/img/svg/logo_tripadvisor.svg';

export default {
  components: {
    LogoAirbnb,
    LogoBooking,
    LogoTripadvisor,
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

    /* .list--booking-teasers li {
       text-indent: -9999px;
    } */

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

    .list--booking-teasers li a {
      color: $colorGroomsMan;
    }

    .list--booking-teasers li a:hover {
      color: $colorGroom;
    }

    .list--booking-teasers li svg {
      height: 1.5rem;
      fill: currentColor;
    }

</style>
