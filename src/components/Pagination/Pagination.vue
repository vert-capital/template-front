<template>
  <v-pagination
    :count="count"
    :size-default="sizeDefault"
    @onChangePagination="onHandleChange"
  ></v-pagination>
</template>
<script lang="ts">
import { VPagination } from '@vert-frame-core/design-system';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VdsPagination',
  components: {
    VPagination
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    sizeDefault: {
      type: Number,
      default: 5
    },
    onHandleChange: {
      type: Function,
      default: () => {}
    }
  }
});
</script>
