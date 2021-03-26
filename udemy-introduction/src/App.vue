<template>
  <Home />
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      intervalo: null,
      categorys: null,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.$http.get("http://localhost:3000/categorys").then((response) => {
      this.categorys = response.data;
    });
  },
  beforeMount() {
    console.log("beforeMount");
  },
};
</script>

<style>
</style>
