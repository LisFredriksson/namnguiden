<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="text-center text-lg-start bg-white text-muted" id="my-footer">
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3 text-secondary"></i>NAMNGUIDEN
            </h6>
            <p>
              En egengjord namnsida för att hitta inspiration, upptäcka nya namn
              eller kanske återupptäcka något gammalt namn du inte längre minns.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">LÄNKAR</h6>
            <p>
              <a href="/namnguiden/Inspiration" class="text-reset">Artiklar</a>
            </p>
            <p>
              <a href="/namnguiden/" class="text-reset">HEM</a>
            </p>
            <p>
              <a href="/namnguiden/Generator" class="text-reset"
                >Namngenerator</a
              >
            </p>
            <p>
              <a href="/namnguiden/Namnsdagar" class="text-reset"
                >Dagens namnsdagar</a
              >
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4"></h6>
            <p>
              <a
                href="https://www.linkedin.com/in/lis-fredriksson-78688893/"
                class="me-4 link-secondary"
              >
                <img class="fb-icon" src="linkedin.png" />
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/lis.fredriksson/"
                class="me-4 link-secondary"
              >
                <img class="fb-icon" src="facebook.png" />
              </a>
            </p>
            <p>
              <a href="#!" class="text-reset"></a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
            <p><i class="fas fa-home me-3 text-secondary"></i> Uppsala</p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              lisfredriksson@gmail.com
            </p>
            <p>
              <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright:
      <a
        class="text-reset fw-bold"
        href="https://www.linkedin.com/in/lis-fredriksson-78688893/"
        >Lis Fredriksson</a
      >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style>
.fb-icon {
  height: 30px;
}

#my-footer {
  margin-top: 30vh;
}
</style>
