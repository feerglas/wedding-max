<template>
    <footer class="info-panel">
        <p>{{text}}</p>
    </footer>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="scss">
    @import '../scss/variables.scss';
    @import '../scss/functions.scss';
    @import '../scss/mixins.scss';

    .info-panel {
        position: relative;
        padding-top: pxToRem($interElementSpacing);
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
