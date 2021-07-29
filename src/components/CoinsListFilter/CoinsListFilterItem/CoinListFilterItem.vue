<template>
  <div @click="onClickHandler()" class="coins-list__filter-item" v-show="coin.isActive">
    1 {{coin.CharCode}} = {{coin.Value}} RUB
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CoinsListFilterItem",
  props: {
    coin: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(['changeCurrentCoinAction']),
    onClickHandler: function () {
      this.changeCurrentCoinAction(this.coin)
    }
  },
  computed: {
    ...mapGetters([
      'DATA'
    ]),
  },
};
</script>
