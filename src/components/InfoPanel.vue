<template>
    <footer class="info-panel">
        <Icon name="InfoHelp" />
        <p>{{text}}</p>
    </footer>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'InfoPanel',
  components: {
    Icon,
  },
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
    $paddingLeft: 32;
    $iconSize: 23;

    .info-panel {
        position: relative;
        padding-top: pxToRem($interElementSpacing);
        padding-left: pxToRem($paddingLeft);
    }

    .info-panel svg {
        float: left;
        width: pxToRem($iconSize);
        height: pxToRem($iconSize);
        margin-top: pxToRem(2);
        margin-left: pxToRem(-$paddingLeft);
    }

    .info-panel:last-child {
        margin-top: pxToRem($interElementSpacing);
    }

    .info-panel p {
        margin: 0;
    }

    .info-panel:before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        height: pxToRem(1);
        width: pxToRem(80);
        background: $colorBridesMaid;
    }

</style>
