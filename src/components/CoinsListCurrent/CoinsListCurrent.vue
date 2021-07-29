<template>
  <div class="coins-list__current">
    <div class="coins-list__current-desc">
      1 {{ currentCoin.CharCode }} = {{valute}} RUB
    </div>
    <coins-condition :condition="condition" :count="count"/>
  </div>
</template>

<script>
import CoinsCondition from "@/components/CoinsCondition/CoinsCondition";
export default {
  name: "CoinsListCurrent",
  components: {
    CoinsCondition,
  },
  props: {
    currentCoin: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    condition: function () {
      let condition= null;

      if(this.currentCoin.Previous < this.currentCoin.Value) {
        condition = false
      } else {
        condition = true
      }

      return condition
    },
    count: function () {
      let count = null;
      count = this.currentCoin.Value - this.currentCoin.Previous
      return count.toFixed(4)
    },
    valute: function () {
      return (this.currentCoin.Value / this.currentCoin.Nominal).toFixed(2)
    }
  }
};
</script>
