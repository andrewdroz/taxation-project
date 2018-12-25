<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>
      Enter your annual salary below to find out your projected tax bill:
    </h4>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
