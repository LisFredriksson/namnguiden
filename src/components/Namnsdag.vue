<script setup></script>

<script>
export default {
  data() {
    return {
      namnsdagIdag: [],
    };
  },
  computed: {
    ingenNamnsdag() {
      return this.namnsdagIdag.length < 1 ? "Inga namnsdagar denna dag" : "";
    },
  },
  mounted() {
    this.generateName();
  },
  methods: {
    async generateName() {
      const res = await fetch("./namnsdagar.json");
      const val = await res.json();
      this.namnsdagIdag = val[this.$store.state.date];
    },
    async nextDay() {
      this.$store.commit("increment");
      const res = await fetch("./namnsdagar.json");
      const val = await res.json();
      this.namnsdagIdag = val[this.$store.state.date];
    },
    async previousDay() {
      this.$store.commit("previous");
      const res = await fetch("./namnsdagar.json");
      const val = await res.json();
      this.namnsdagIdag = val[this.$store.state.date];
    },
  },
};
</script>

<template>
  <div class="text-div">
    <h1>DAGENS NAMNSDAG</h1>
    <h2>{{ $store.state.datefixed }}</h2>
    <span class="namnsdag" v-for="namnsdag in namnsdagIdag">{{
      namnsdag
    }}</span>
    <h2>{{ ingenNamnsdag }}</h2>
    <div class="change-day-div">
      <span @click="previousDay"><i class="change-name left"></i></span>
      <span id="change-day-text">Ändra dag</span>
      <span @click="nextDay"><i class="change-name right"></i></span>
    </div>
  </div>
</template>

<style scoped>
.text-div {
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.namnsdag {
  font-style: italic;
  font-size: 30px;
  font-weight: 600;
  color: #4f6754;
  margin: 5px 10px;
}

#change-day-text {
  font-weight: 600;
  font-size: x-large;
}

.change-name {
  border: solid black;
  border-width: 0 3px 3px 0;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  padding: 3px;
}

.change-day-div {
  margin: 10px 0;
}

.change-name:hover {
  cursor: pointer;
  border: solid #4f6754;
  border-width: 0 3px 3px 0;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
