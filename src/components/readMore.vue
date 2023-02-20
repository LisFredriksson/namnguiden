<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="d-flex justify-content-center" id="card-div">
    <div class="card-box">
      <div class="card" style="width: 18rem">
        <img src="../assets/baby-6578335_640.jpg" class="card-img-top" alt="baby feet" />
        <div class="card-body">
          <h1 class="card-text">Populäraste flicknamnen 2022</h1>
          <li v-for="item in $store.state.girls22">
            {{ item }}
          </li>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="../assets/baby-623417_640.jpg" class="card-img-top" alt="baby feet" />
        <div class="card-body">
          <h1 class="card-text">Populäraste pojknamnen 2022</h1>
          <li v-for="item in $store.state.boys22">
            {{ item }}
          </li>
        </div>
      </div>
    </div>
  </div>
  <div class="link-box">
    <h1 id="link-header">
      Se populäraste namn från tidigare år<RouterLink
        class="router-link"
        to="/namnguiden/Top10"
      >
        Här</RouterLink
      >
    </h1>
  </div>
  <RouterView />
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
.card-box {
  display: flex;
  justify-content: row;
}

@media only screen and (max-width: 600px) {
  .card-box {
    flex-direction: column;
  }

  #link-header {
    font-size: large;
  }
}

.card {
  margin: 20px 30px;
}
.card-body li {
  list-style: none;
  font-size: larger;
}
#link-header {
  margin-top: 50px;
  color: #4f6754;
}

.router-link {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
}

.router-link:hover {
  color: #5b6f5f;
  font-weight: 500;
}

.link-box {
  display: flex;
  justify-content: center;
}
</style>
