<template>
    <ul class="list list--hotels">
        <li>
            <img
                class="img--hotel-small"
                src=""
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Alpenroyal</span><br>
                befindet sich direkt neben dem Cervo<br>
                <a href="https://www.alpenroyal.ch/" target="_blank" rel="external noopener nofollow">Website</a>
            </p>
        </li>
        <li>
            <img
                class="img--hotel-small"
                src=""
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Carina Zermatt</span><br>
                <a href="https://carinazermatt.ch" target="_blank" rel="external noopener nofollow">Website</a>
            </p>
        </li>
        <li>
            <img
                class="img--hotel-small"
                src=""
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Bella Vista Zermatt</span><br>
                <a href="https://bellavista-zermatt.ch" target="_blank" rel="external noopener nofollow">Website</a>
            </p>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'HotelTeasers',
  props: {},
};
</script>

<style scoped lang="scss">
    @import '../scss/variables.scss';
    @import '../scss/functions.scss';
    @import '../scss/mixins.scss';

    .list--hotels p {
        margin: 0;
    }

    .list--hotels li {
        display: flex;
        margin-bottom: pxToRem($interElementSpacing);
    }

    .list--hotels img {
        margin-right: pxToRem($interElementSpacing);
    }

</style>
