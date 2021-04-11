<template>
  <div
    class="custom-select"
    @blur="blur"
  >

    <div
      class="selected"
      :class="{ open: open }"
      @click="clickElement"
    >
      {{ selected }}

      <Icon
        class="arrow"
        name="AngleDown"
      />
    </div>

    <div
      class="items"
      :class="{ selectHide: !open }"
    >

      <div
        v-for="(option, i) of options"
        :key="i"
        @click="clickItem(option, i)"
        :class="{ placeholder: i === 0 && placeholder }"
      >
        {{ option }}
      </div>

    </div>

  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Select',
  components: {
    Icon,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: Boolean,
  },
  data() {
    const checkSelected = () => {
      if (this.options.length > 0) {
        return this.options[0];
      }

      return null;
    };

    return {
      selected: checkSelected(),
      open: false,
    };
  },
  methods: {
    blur() {
      this.open = false;
    },
    clickElement() {
      this.open = !this.open;
    },
    clickItem(option, index) {
      if (index === 0 && this.placeholder) {
        return;
      }

      this.selected = option;
      this.open = false;
      this.$emit('input', option);
    },
  },
};
</script>

<style scoped lang="scss">

$selectHeight: 48;
$selectArrowHeight: 20;

.custom-select {
  position: relative;
  width: auto;
  text-align: left;
  outline: none;
  height: pxToRem($selectHeight);
  line-height: pxToRem($selectHeight);
}

.custom-select .selected {
  background-color: $colorBride;
  border-radius: pxToRem(2);
  border: 1px solid $colorGroomsMan;
  color: $colorGroomsMan;
  padding-left: pxToRem(18);
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid $colorGroom;
  border-radius: pxToRem(2) pxToRem(2) 0px 0px;
}

.custom-select .selected .arrow {
  position: absolute;
  top: calc(#{pxToRem($selectHeight / 2)} - #{pxToRem($selectArrowHeight / 2)});
  right: pxToRem(18);
  width: pxToRem($selectArrowHeight);
  height: pxToRem($selectArrowHeight);
  color: $colorGroomsMan;
}

.custom-select .selected.open .arrow {
  transform: rotate(180deg);
}

.custom-select .items {
  color: $colorGroom;
  border-radius: 0px 0px pxToRem(2) pxToRem(2);
  overflow: hidden;
  border-right: 1px solid $colorGroomsMan;
  border-left: 1px solid $colorGroomsMan;
  border-bottom: 1px solid $colorGroomsMan;
  position: absolute;
  background-color: $colorBride;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: $colorGroom;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items .placeholder {
  opacity: .5;
  cursor: default;
}

.custom-select .items div:not(.placeholder):hover {
  background-color: $colorGroom;
  color: $colorBride;
}

.selectHide {
  display: none;
}
</style>
