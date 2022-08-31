<template>
  <main class="v-content">
    <div class="v-content__header">
      <slot name="header"></slot>
    </div>
    <div :class="{ 'v-content__body': paddingBody }">
      <slot></slot>
    </div>
    <div class="v-content__footer">
      <slot name="footer"></slot>
    </div>
  </main>
</template>

<style lang="scss">
.v-content {
  @extend %shadow-level-3;
  border: 1px solid $neutral-color-hight-extra-light;
  border-radius: 0.25rem;
  background-color: $neutral-color-hight-pure;
  margin-bottom: 1.5rem;
  &__header {
    padding: 1.5rem 2rem;
  }
  &__footer {
    padding: 1rem;
  }
  &__body {
    padding: 1rem;
  }
}
</style>
<script lang="ts">
export default {
  name: 'VContent',
  props: {
    paddingBody: { type: Boolean, default: false }
  }
};
</script>
