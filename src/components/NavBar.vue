<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">NAMNGUIDEN</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/Namnsdagar"
              >Namnsdagar</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Top10">Top10</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Generator">Generator</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Inspiration"
              >Inspiration</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
