<template>
  <div class="coins-convector">
    <div class="container">
      <div class="content-wrapper">
        <coins-list :coins="DATA.coins" :currentCoin="DATA.currentCoin"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CoinsList from "@/components/CoinsList/CoinsList";

export default {
  name: "CoinsConvector",
  components: {
    CoinsList
  },
  methods: {
    ...mapActions(['getData']),
  },
  computed: {
    ...mapGetters([
      'DATA'
    ]),
  },
  mounted() {
    this.getData()
  },
};
</script>
