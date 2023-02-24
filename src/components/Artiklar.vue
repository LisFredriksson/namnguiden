<script setup></script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="this.myprops.img" class="card-img-top" alt="baby feet" />
    <div class="card-body">
      <h1 class="card-text">{{ myprops.title }}</h1>
      <a class="article-link" v-bind:href="this.myprops.url">Läs mer</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: this.myprops.img,
    };
  },
  props: {
    myprops: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  margin: 20px;
  text-align: center;
}
.article-link {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
}

.article:hover {
  color: #5b6f5f;
  font-weight: 500;
}
</style>
