<template>
  <div>
    <h3>Annual income: <b>{{ income }} IDR</b></h3>
    <h3>Profile: <b>{{ profile }}</b></h3>
    <h3>Taxable income: <b>{{ taxableIncome }} IDR</b></h3>
    <h1>Projected Tax Amount: {{ tax }} IDR</h1>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "taxEstimation",
  data: function() {
    return {
      income: store.state.annualSalary,
      profile: store.state.profile,
      taxableIncome: store.state.taxableIncome,
      tax: store.state.taxToPay
    };
  }
};
</script>

<style scoped>

</style>