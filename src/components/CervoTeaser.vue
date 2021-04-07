<template>
  <div class="cervo-teaser">
    <figure class="cervo-teaser__image_wrapper">
      <img
        class="cervo-teaser__image"
        alt=""
        src=""
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
        <a href="https://www.cervo.swiss" target="_blank">Website</a><br>
        <a href="mailto:info@cervo.swiss">info@cervo.swiss</a>
      </p>
    </figcaption>
  </div>
</template>

<script>
export default {
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
      background: lime;
    }

    .cervo-teaser__image_wrapper {
      position: relative;
      background: pink;
      margin: 0 pxToRem(-$breakoutValueMobile);
      margin-bottom: pxToRem($gutterHeight * 2);
    }

    .cervo-teaser__image_wrapper:after {
      content: '';
      display: block;
      height: 0;
      width: 100%;
      padding-bottom: 56.25%;
    }

    .cervo-teaser__image {
      position: absolute;
      left: 0;
      top: 0;
    }

    @media (min-width: $desktopWidth) {
      .cervo-teaser {
        margin: 0 pxToRem(-$breakOutValueDesktop);
        margin-bottom: pxToRem($interModuleSpacing);
      }

      .cervo-teaser__image_wrapper {
        margin: 0;
      }

      .cervo-teaser__caption {
        position: absolute;
        right: pxToRem($breakOutValueDesktop);
        bottom: pxToRem(-$gutterHeight * 7);
        padding: pxToRem($gutterHeight * 6);
        background: $colorBride;
        box-shadow: 0 pxToRem(4) pxToRem(128) rgba(30, 67, 106, 0.08);
      }
    }

</style>
