<template>
  <div class="slider">
    <h3>{{ title }}</h3>

    <span
      v-on:mouseover="scrollLeft()"
      v-on:mouseout="clearScroll()"
      class="handle handlePrev active"
    >
      <i class="fa fa-caret-left" aria-hidden="true"></i>
    </span>

    <div ref="scroller" class="row">
      <div class="row__inner">
        <Movie
          v-for="movie in movies"
          v-bind:key="movie.id"
          v-bind:title="movie.title"
          v-bind:image="movie.image"
        />
      </div>
    </div>

    <span
      v-on:mouseover="scrollRight()"
      v-on:mouseout="clearScroll()"
      class="handle handleNext active"
    >
      <i class="fa fa-caret-right" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
import Movie from "./Movie";
export default {
  name: "Category",
  components: {
    Movie,
  },
  props: ["title", "movies"],
  methods: {
    scrollRight() {
      //with "function", we need share the "this"
      const self = this;
      this.intervalo = setInterval(function () {
        self.$refs.scroller.scrollLeft += 1;
      }, 5);
    },
    scrollLeft() {
      //With arrow function, the "this" doesn´t is lost
      this.intervalo = setInterval(() => {
        this.$refs.scroller.scrollLeft -= 1;
      }, 5);
    },
    clearScroll() {
      clearInterval(this.intervalo);
    },
  },
};
</script>

<style scoped>
</style>