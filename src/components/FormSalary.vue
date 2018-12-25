<template>
  <div>
    <form v-on:submit.prevent="dispatchUserSalary">
        <input type="text" placeholder="enter your annual income" v-model="userSalary">
        <input type="button" value="Submit" v-on:click.stop="dispatchUserSalary">
    </form>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "FormSalary",
  data: function() {
    return {
      userSalary: store.state.annualSalary
    };
  },
  methods: {
    dispatchUserSalary: function() {
      store.setAnnualSalary(this.userSalary);
      store.setTaxableIncome();
      store.setTaxAmount();
      this.$router.push("taxEstimation");
    }
  }
};
</script>

<style scoped>
</style>
