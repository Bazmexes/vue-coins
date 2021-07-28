<template>
  <div class="coins-list-current">
    <div class="coins-list-current__desc">
      1 {{ currentCoin.CharCode }} = {{currentCoin.Value}} RUB
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
    condition() {
      let condition= null;

      if(this.currentCoin.Previous < this.currentCoin.Value) {
        condition = false
      } else {
        condition = true
      }

      return condition
    },
    count() {
      let count = null;
      count = this.currentCoin.Value - this.currentCoin.Previous
      return count.toFixed(4)
    }
  }
};
</script>
