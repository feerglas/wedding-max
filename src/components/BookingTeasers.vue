<template>
    <ul class="list list--booking-teasers">
        <li><a href="https://www.airbnb.ch/" target="_blank">Airbnb</a></li>
        <li><a href="https://www.booking.com/" target="_blank">Booking.com</a></li>
        <li><a href="https://www.tripadvisor.ch/" target="_blank">Tripadvisor</a></li>
    </ul>
</template>

<script>
export default {
  name: 'BookingTeasers',
  props: {},
};
</script>

<style scoped lang="scss">
    @import '../scss/variables.scss';
    @import '../scss/functions.scss';
    @import '../scss/mixins.scss';

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

</style>
