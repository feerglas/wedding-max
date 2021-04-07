<template>
  <div class="logo"></div>
</template>

<script>
export default {
  name: 'Logo',
  props: {},
};
</script>

<style lang="scss">
$logoHeightMobile: 26;
$logoWidthMobile: 223;
$logoHeightDesktop: 35;
$logoWidthDesktop: 290;

.logo {
  display: flex;
  border: 1px solid pink;
  width: 100%;
  height: pxToRem($logoHeightMobile);
  margin-top: pxToRem($offsetMobile);
  margin-bottom: pxToRem($interModuleSpacingMobile);
}

.logo img {
  width: pxToRem($logoWidthMobile);
  height: pxToRem($logoHeightMobile);
}

@media (min-width: $desktopWidth) {
  .logo {
    position: sticky;
    top: pxToRem(46);
    left: 0;
    right: 0;
    height: pxToRem($logoHeightDesktop);
    margin-bottom: pxToRem(-$logoHeightDesktop);
  }

  .logo img {
    width: pxToRem($logoWidthDesktop);
    height: pxToRem($logoHeightDesktop);
  }

}

</style>
