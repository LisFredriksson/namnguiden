<script setup></script>

<script>
export default {
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 3 + 1),
      MessageOne: "Hitta ditt favoritnamn",
      MessageTwo: "Sök bland tusentals namn i vår namndatabas",
      MessageThree: "Astrid och William - populäraste namnen 2022",
    };
  },
};
</script>

<template>
  <div
    class="hero-text"
    Style="background: linear-gradient(#ffffff, #4f6754)"
    v-if="randomNumber === 1"
  >
    <h1>{{ MessageOne }}</h1>
    <a href="this$root.params"></a>
  </div>
  <div
    class="hero-text"
    Style="background: linear-gradient(#ffffff, #F5F47B)"
    v-if="randomNumber === 2"
  >
    <h1>{{ MessageTwo }}</h1>
  </div>
  <div
    class="hero-text"
    Style="background: linear-gradient(#ffffff, #AECEBB)"
    v-if="randomNumber === 3"
  >
    <h1>{{ MessageThree }}</h1>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .hero-text h1 {
    margin: 0 15px;
    margin-top: 10vh;
  }
}
.hero-text {
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4f6754;
  text-align: center;
}
.hero-text h1 {
  margin-top: 5vh;
}
</style>
