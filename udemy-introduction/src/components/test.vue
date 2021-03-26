<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  name: "test",
  props: ["titulo"],
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>