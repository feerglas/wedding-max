<template>
  <div class="cervo-teaser">
    <figure class="cervo-teaser__image_wrapper">
      <img
        class="cervo-teaser__image"
        alt=""
        src="/img/hotels/img_cervo_mountain_resort.jpg"
        width="752"
        height="432"
        loading="lazy"
        aria-describedby="cervo-teaser__caption"
      >
    </figure>
    <figcaption id="cervo-teaser__caption" class="cervo-teaser__caption">
      <p>
        <span class="title-2">CERVO Mountain Resort</span><br>
        Riedweg 156<br>
        CH-3920 Zermatt (Schweiz)<br>
        <a href="https://www.cervo.swiss" target="_blank">
          <Icon name="ExternalLink" />
          Website
        </a>
        <br>
        <a href="mailto:info@cervo.swiss">
          <Icon name="Mail" class="icon-mail" />
          info@cervo.swiss
        </a>
      </p>
    </figcaption>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  name: 'CervoTeaser',
  props: {},
};
</script>

<style scoped lang="scss">
    $breakoutValueMobile: $offsetMobile;
    $breakOutValueDesktop: 96;

    .cervo-teaser {
      position: relative;
      margin-bottom: pxToRem($interModuleSpacingMobile);
    }

    .cervo-teaser .title-2 {
      display: inline-block;
      margin-bottom: pxToRem($gutterHeight * 1.5);
    }

    .cervo-teaser svg {
      @include link-icon();
      width: pxToRem(16);
    }

    .cervo-teaser__image_wrapper {
      position: relative;
      margin: 0 pxToRem(-$breakoutValueMobile);
      margin-bottom: pxToRem($gutterHeight * 2);
      overflow: hidden;
    }

    .cervo-teaser__image_wrapper:after {
      content: '';
      display: block;
      height: 0;
      width: 100%;
      padding-bottom: 57.33%;
    }

    .cervo-teaser__image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }

    @include mq-desktop {
      .cervo-teaser {
        margin-top: pxToRem($interModuleSpacingMobile);
        margin-right: pxToRem(-$breakOutValueDesktop);
        margin-bottom: pxToRem($interModuleSpacing);
        margin-left: pxToRem(-$breakOutValueDesktop);
      }

      .cervo-teaser__image_wrapper {
        margin: 0;
      }

      .cervo-teaser__image_wrapper:after {
        padding-bottom: 57.44%;
      }

      .cervo-teaser__caption {
        position: absolute;
        right: pxToRem($breakOutValueDesktop);
        bottom: pxToRem(-$gutterHeight * 7);
        padding: pxToRem($gutterHeight * 6);
        padding-right: pxToRem($gutterHeight * 11);
        background: $colorBride;
        box-shadow: 0 pxToRem(4) pxToRem(128) rgba(30, 67, 106, 0.08);
      }
    }

</style>
