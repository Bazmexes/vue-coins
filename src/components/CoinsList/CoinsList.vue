<template>
  <div class="coins-list">
    <form class="coins-list__form" noValidate>
      <input class="coins-list__form-input" type="text" placeholder="Введите название валюты"/>
    </form>
    <coins-list-current :currentCoin="currentCoin"/>
    <coin-list-filter :coins="coins" :is-active="isActive"/>
  </div>
</template>
<script>
import CoinsListCurrent from "@/components/CoinsListCurrent/CoinsListCurrent";
import CoinListFilter from "@/components/CoinsListFilter/CoinListFilter";
export default {
  name: "CoinsList",
  components: {
    CoinsListCurrent,
    CoinListFilter,
  },
  data: function () {
    return {
      isActive: false,
    }
  },
  props: {
    coins: {
      type: Array,
      default() {
        return [];
      },
    },
    currentCoin: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
