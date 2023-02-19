<script setup>
import HeroText from "../components/HeroText.vue";
import Generator from "../components/Generator.vue";
</script>

<template>
  <HeroText />
  <Generator @generated-name="onGeneratedName" />
</template>

<script>
export default {
  methods: {
    onGeneratedName(boyname, girlname) {
      console.log(
        `Namnen du slumpade fram blev ${boyname} & ${girlname}! - Men du ser bara dom namn du valt på hemsidan! Om du inte ser något - Välj Flicka eller Pojke.`
      );
    },
  },
};
</script>

<style scoped>
.link-div {
  background-color: red;
  height: 20vh;
}

#hejhejhej {
  height: 50vh;
  background-color: red;
}
</style>
