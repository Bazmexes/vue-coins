<template>
  <div class="coins-list">
    <form class="coins-list__form" noValidate>
      <input class="coins-list__form-input" type="text" placeholder="Введите название валюты"/>
    </form>

    <coins-list-current :currentCoin="currentCoin"/>
  </div>
</template>

<script>
import CoinsListCurrent from "@/components/CoinsListCurrent/CoinsListCurrent";
export default {
  name: "CoinsList",
  components: {
    CoinsListCurrent,
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
