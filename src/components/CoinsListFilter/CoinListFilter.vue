<template>
  <div :class="!isActive ? 'coins-list__filter' : 'coins-list__filter coins-list__filter--active'">
    <coin-list-filter-item v-for="coin, index in coins" :key="index" :coin="coin"/>
  </div>
</template>

<script>
import CoinListFilterItem from "@/components/CoinsListFilter/CoinsListFilterItem/CoinListFilterItem";
export default {
  name: "CoinsListFilter",
  components: {
    CoinListFilterItem,
  },
  props: {
    coins: {
      type: Array,
      default() {
        return [];
      },
    },
    isActive: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
};
</script>
