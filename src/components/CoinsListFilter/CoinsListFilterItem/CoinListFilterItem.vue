<template>
  <div class="coins-list__filter-item">
    1 {{coin.CharCode}} = {{coin.Value}} RUB
  </div>
</template>

<script>
export default {
  name: "CoinsListFilterItem",
  components: {
  },
  props: {
    coin: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
