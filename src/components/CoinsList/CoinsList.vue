<template>
  <div class="coins-list">
    <form class="coins-list__form" noValidate>
      <input ref="inputFilter" @input="filterHandler()" @focus="isActive = true" @blur="closeFilterBox()" class="coins-list__form-input" type="text" placeholder="Введите название валюты"/>
    </form>
    <coins-list-current :currentCoin="currentCoin"/>
    <coin-list-filter :coins="coins" :is-active="isActive"/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
    }
  },
  methods: {
    ...mapActions(['filterAction']),
    closeFilterBox: function () {
      setTimeout(()=> {
        this.isActive = false
      }, 100)
    },
    filterHandler: function () {
      this.filterAction(this.$refs.inputFilter.value)
    },
  },
  computed: {
    ...mapGetters([
      'DATA'
    ]),
  },

};
</script>
