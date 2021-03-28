<template>
    <figure class="cervo-teaser">
        <img
            class="cervo-teaser__image"
            alt=""
            src=""
            width="752"
            height="432"
            loading="lazy"
            >
        <figcaption class="cervo-teaser__caption">
            <p>
            <span class="title-2">CERVO Mountain Resort</span><br>
            Riedweg 156<br>
            CH-3920 Zermatt (Schweiz)<br>
            <a href="https://www.cervo.swiss" target="_blank">Website</a><br>
            <a href="mailto:info@cervo.swiss">info@cervo.swiss</a>
            </p>
        </figcaption>
    </figure>
</template>

<script>
export default {
  name: 'CervoTeaser',
  props: {},
};
</script>

<style scoped lang="scss">
    @import '../scss/variables.scss';
    @import '../scss/functions.scss';
    @import '../scss/mixins.scss';

    $outBreakValue: 96;

    .cervo-teaser {
        position: relative;
        background: lime;
        margin-bottom: pxToRem($interModuleSpacingMobile);
    }

    .cervo-teaser:after {
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
            margin: 0 pxToRem(-$outBreakValue);
            margin-bottom: pxToRem($interModuleSpacing);
        }

        .cervo-teaser__caption {
            position: absolute;
            right: pxToRem($outBreakValue);
            bottom: pxToRem(-$gutterHeight * 7);
            padding: pxToRem($gutterHeight * 6);
            background: $colorBride;
            box-shadow: 0px 4px 128px rgba(30, 67, 106, 0.08);
        }
    }

</style>
