<script setup></script>

<script>
export default {
  data() {
    return {
      keyValueGirls: null,
      keyValueBoys: null,
      girlnames: {},
      boynames: {},
      boynameinput: "",
      girlnameinput: "",
    };
  },
  created() {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => {
        this.keyValueGirls = data.FLICKNAMN;
        this.keyValueBoys = data.POJKNAMN;
        this.girlnames = data.FLICKNAMN;
        this.boynames = data.POJKNAMN;
      });
  },
};
</script>

<template>
  <div class="d-flex justify-content-center" id="card-div">
    <div class="card" style="width: 18rem">
      <select v-model="boynameinput" name="boys" class="topTen">
        <option display selected value>VÄLJ ÅR</option>
        <option v-for="(value, key) in keyValueBoys">
          {{ key }}
        </option>
      </select>
      <img src="../assets/feet-619399_640.jpg" class="card-img-top" alt="baby feet" />
      <div class="card-body">
        <h1 class="card-text">POJKNAMN</h1>
        <h2>{{ boynameinput }}</h2>
        <div v-for="boyname in boynames[boynameinput]">
          <li class="list-item">{{ boyname }}</li>
        </div>
      </div>
    </div>
    <div class="card" style="width: 18rem">
      <select v-model="girlnameinput" name="girls" class="topTen">
        <option display selected value>VÄLJ ÅR</option>
        <option v-for="(value, key) in keyValueGirls">{{ key }}</option>
      </select>
      <img src="../assets/baby-6578335_640.jpg" class="card-img-top" alt="baby girl" />
      <div class="card-body">
        <h1 class="card-text">FLICKNAMN</h1>
        <h2>{{ girlnameinput }}</h2>
        <div id="list-div" v-for="girlname in girlnames[girlnameinput]">
          <li class="list-item">{{ girlname }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  #card-div {
    flex-direction: column;
  }
}
.topTen {
  width: 100%;
  font-weight: 500;
}

.card {
  margin: 20px 30px;
}

.list-item {
  list-style: none;
}
</style>
