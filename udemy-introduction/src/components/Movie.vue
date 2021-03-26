<template>
  <div
    class="gui-card"
    v-bind:style="effectClick"
    v-on:click="clickEffect()"
    v-on:mouseout="removeEffect()"
  >
    <div class="gui-card__media">
      <img class="gui-card__img" v-bind:src="image" alt="" />
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      effectClick: null,
    };
  },
  props: ["title", "image"],
  methods: {
    clickEffect: function () {
      this.effectClick =
        "color: red; transform: scale(1.9); margin-right: 110px";
    },
    removeEffect: function () {
      this.effectClick = null;
    },
  },
};
</script>

<style scoped>
</style>