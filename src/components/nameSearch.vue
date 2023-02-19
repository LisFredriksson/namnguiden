<script>
import { ref } from "vue";

export default {
  data() {
    return {
      boynames: [],
      girlnames: [],
      results: [],
      searchgirls: [],
      boyHeader: null,
      girlHeader: null,
      searchinput: "",
      answer: "Sök ett namn i vår namndatabas",
    };
  },
  watch: {
    searchinput(newValue, oldValue) {
      if (newValue.includes("?") || newValue.includes("!")) {
        this.answer = "Det går bara att söka på namn";
      } else if (newValue === "") {
        this.answer = "Sök ett namn i vår namndatabas";
      } else {
        this.answer = "söker...";
      }
    },
  },
  created() {
    this.generateName();
  },
  methods: {
    async generateName() {
      const res = await fetch("/searchnames.json");
      const val = await res.json();
      this.randomname = val;
      this.boynames = val.boynames;
      this.girlnames = val.girlnames;
      console.log(val);
    },
    onClick() {
      this.results = this.filteredList;
      this.searchgirls = this.filteredListTwo;
      this.searchinput = "";
      this.boyHeader = "POJKNAMN:";
      this.girlHeader = "FLICKNAMN:";
    },
  },
  computed: {
    filteredList() {
      return this.boynames.filter((data) => {
        return data.toLowerCase().includes(this.searchinput.toLowerCase());
      });
    },
    filteredListTwo() {
      return this.girlnames.filter((data) => {
        return data.toLowerCase().includes(this.searchinput.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <div class="search-container">
    <div class="search-div">
      <p>{{ answer }}</p>
      <div class="input-group rounded">
        <input
          type="search"
          v-model="searchinput"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          @keydown.enter="onClick"
        />
        <span
          class="input-group-text border-0"
          id="search-addon"
          @click="onClick"
        >
          <img src="search.png" id="search-icon" />
        </span>
      </div>
      <tr
        v-if="this.searchinput != ''"
        class="listdiv"
        v-for="data in filteredList"
        :key="data"
      >
        <td>{{ data }}</td>
      </tr>

      <tr
        v-if="this.searchinput != ''"
        class="listdiv"
        v-for="data in filteredListTwo"
        :key="data"
      >
        <td>{{ data }}</td>
      </tr>
    </div>
  </div>
  <div class="search-result-div">
    <div class="girl-div">
      <p>{{ boyHeader }}</p>
      <div v-for="result in results">
        <li>{{ result }}</li>
      </div>
    </div>
    <div class="boy-div">
      <p>{{ girlHeader }}</p>
      <div v-for="searchgirl in searchgirls">
        <li>{{ searchgirl }}</li>
      </div>
    </div>
  </div>
</template>

<style scoped>
#search-icon {
  height: 25px;
}

.search-div {
  margin-top: 10vh;
  height: 20vh;
  display: flex;
  width: 50vh;
  flex-direction: column;
}

.listdiv {
  background-color: rgb(223, 223, 223);
  width: 50vh;
  height: auto;
  z-index: 9999;
}

@media only screen and (max-width: 600px) {
  .search-div {
    width: 30vh;
  }
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.search-result-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.girl-div {
  margin: 0 20px;
}

.boy-div {
  margin: 0 20px;
}
</style>
