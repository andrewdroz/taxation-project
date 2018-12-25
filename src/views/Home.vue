<template>
  <div class="home">
    <WelcomeMessage msg="Pajak Tax Calculator"/>
    <FormSalary></FormSalary>
    <br/>
    <FormReliefs></FormReliefs>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMessage from "@/components/WelcomeMessage.vue";
import FormSalary from "@/components/FormSalary.vue";
import FormReliefs from "@/components/FormReliefs.vue";

export default {
  name: "home",
  components: {
    WelcomeMessage,
    FormSalary,
    FormReliefs
  }
};
</script>
