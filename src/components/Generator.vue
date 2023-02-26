<script setup></script>

<script>
export default {
  data() {
    return {
      checkedGirl: false,
      checkedBoy: false,
      randomname: [],
      boyname: [],
      girlname: [],
      randomGirl: Math.floor(Math.random() * 100 + 1),
      randomBoy: Math.floor(Math.random() * 100 + 1),
    };
  },
  mounted() {
    this.generateName();
  },
  methods: {
    async generateName() {
      const res = await fetch("./searchnames.json")
      const val = await res.json();
      this.randomname = val;
      this.boyname = val.boynames[Math.floor(Math.random() * 11755 + 1)];
      this.girlname = val.girlnames[Math.floor(Math.random() * 13411 + 1)];
      this.$emit("generated-name", this.boyname, this.girlname);
    },
  },
};
</script>

<template>
  <div class="text-center">
    <label for="Flicka">Flicka</label>
    <input v-model="checkedGirl" type="checkbox" name="Flicka" id="Flicka" />
    <label for="Pojke">Pojke</label>
    <input v-model="checkedBoy" type="checkbox" name="Pojke" id="Pojke" /><br />
    <button
      variant="outline-dark"
      class="generate-button"
      @click="generateName"
    >
      GENERATE
    </button>
    <h1 id="header">Slumpa fram ditt favoritnamn</h1>
    <h2 id="girl-name" v-if="checkedGirl">Flicknamn: {{ girlname }}</h2>
    <h2 id="boy-name" v-if="checkedBoy">Pojknamn: {{ boyname }}</h2>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  #header {
    font-size: larger;
  }
}
.text-center {
  margin-top: 10vh;
  margin-bottom: 20vh;
}
#Pojke {
  margin: 10px;
}
#Flicka {
  margin: 10px;
}
.generate-button {
  color: black;
  border-radius: 8px;
  background-color: white;
  border: solid black;
  margin: 10px;
  padding: 5px 10px;
}
.generate-button:hover {
  background-color: rgb(242, 242, 242);
  font-weight: 500;
}
#girl-name {
  color: #4f6754;
  margin-top: 20px;
}
#boy-name {
  color: #4f6754;
  margin-top: 10px;
}
</style>
