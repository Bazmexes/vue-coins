<template>
  <div :class="!condition ? 'coins-condition': 'coins-condition coins-condition--red'">
    <div class="coins-condition__figure"></div>
    {{count}}
  </div>
</template>

<script>

export default {
  name: "CoinsCondition",
  props: {
    count: {
      type: Number,
      default() {
        return 0;
      }
    },
    condition: {
      type: Boolean,
      default() {
        return true;
      }
    },
  },
};
</script>
