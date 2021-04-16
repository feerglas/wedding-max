<template>
    <ul class="list list--hotels">
        <li>
            <img
                class="img--hotel-small"
                src="/img/hotels/img_hotel_alpenroyal.jpg"
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Alpenroyal</span><br>
                befindet sich direkt neben dem Cervo<br>
                <a href="https://www.alpenroyal.ch/" target="_blank" rel="external noopener nofollow">
                    <Icon name="ExternalLink" />
                    Website
                </a>
            </p>
        </li>
        <li>
            <img
                class="img--hotel-small"
                src="/img/hotels/img_hotel_carina_zermatt.jpg"
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Carina Zermatt</span><br>
                <a href="https://carinazermatt.ch" target="_blank" rel="external noopener nofollow">
                    <Icon name="ExternalLink" />
                    Website
                </a>
            </p>
        </li>
        <li>
            <img
                class="img--hotel-small"
                src="/img/hotels/img_hotel_bella_vista.jpg"
                alt=""
                width="102"
                height="86"
                loading="lazy"
            >
            <p>
                <span class="title-4">Hotel Bella Vista Zermatt</span><br>
                <a href="https://bellavista-zermatt.ch" target="_blank" rel="external noopener nofollow">
                    <Icon name="ExternalLink" />
                    Website
                </a>
            </p>
        </li>
    </ul>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  name: 'HotelTeasers',
  props: {},
};
</script>

<style scoped lang="scss">
    .list--hotels p {
        margin: 0;
    }

    .list--hotels svg {
      @include link-icon();
      width: pxToRem(16);
    }

    .list--hotels li {
        display: flex;
        align-items: center;
        margin-bottom: pxToRem($interElementSpacing);
    }

    .list--hotels p {
      margin: 0;
    }

    .list--hotels img {
        width: pxToRem(102);
        margin-right: pxToRem($interElementSpacing);
    }

</style>
