<template>
  <div>
    <h4>Select your profile below to apply tax reliefs on your tax estimation:</h4>
    <form v-on:submit.prevent="dispatchUserSalary">
      <input type="radio" name="profile" id="TK0" value="TK0" v-model="profileSelection">
      <label for="TK0">TK0 - Single</label>
      <br/>

      <input type="radio" name="profile" id="K0" value="K0" v-model="profileSelection">
      <label for="K0">K0 - Married with no dependent</label>
      <br/>

      <input type="radio" name="profile" id="K1" value="K1" v-model="profileSelection">
      <label for="K1">K1 - Married with 1 dependent</label>
      <br/>

      <input type="radio" name="profile" id="K2" value="K2" v-model="profileSelection">
      <label for="K2">K2 - Married with 2 dependents</label>
      <br/>

      <input type="radio" name="profile" id="K3" value="K3" v-model="profileSelection">
      <label for="K3">K3 - Married with 3 dependents</label>
      <br/>
      <br/>
      
      <input type="submit" value="Update Profile" v-on:click.stop="dispatchProfile">
    </form>
    <h5>Current profile: {{ profileInStore }}</h5>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "FormReliefs",
  data: function() {
    return {
      profileSelection: "",
      profileInStore: store.state.profile
    };
  },
  methods: {
    dispatchProfile: function() {
      store.setProfile(this.profileSelection);
      this.profileInStore = this.profileSelection;
    }
  }
};
</script>

<style scoped>

</style>