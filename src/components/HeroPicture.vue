<script>
export default {
  created() {
    fetch(
      "https://api.unsplash.com/photos/yjk8rGV2G3k?client_id=vXWC49BFMkDR-fPhC7h8-gvhmWMO96nXkuADxKfLWZg"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.HeroImageFetch = data.urls.regular;
      });
  },
  data() {
    return {
      HeroImageFetch: null,
    };
  },
};
</script>

<template>
  <div id="imageBox">
    <img id="heroImage" v-bind:src="HeroImageFetch" />
  </div>
</template>

<style scoped>
#imageBox {
  top: 0;
  left: 0;
  position: relative;
  width: 100%;
  height: 90vh;
}

#heroImage {
  height: 90vh;
  width: 100%;
  object-fit: cover;
}
</style>
