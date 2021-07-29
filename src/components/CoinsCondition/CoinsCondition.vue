<template>
  <div :class="!condition ? 'coins__condition': 'coins__condition coins__condition--red'">
    <div class="coins-condition__figure"></div>
    {{count}}
  </div>
</template>

<script>

export default {
  name: "CoinsCondition",
  props: {
    count: {
      type: String,
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
