<script setup>
import HeroText from "../components/HeroText.vue";
import Artiklar from "../components/Artiklar.vue";
</script>

<template>
  <HeroText />
  <div class="row justify-content-center">
    <Artiklar v-for="item in $store.state.articles" :key="id" :myprops="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style scoped>
</style>
