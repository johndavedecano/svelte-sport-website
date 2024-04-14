<script>
  import { browser } from "$app/environment";

  import Carousel from "svelte-carousel";

  import Product from "./product.svelte";

  let carousel; // for calling methods of the carousel instance

  let slides = Array.from(new Array(8));

  let show = 4;

  if (browser) {
    if (window && window.innerWidth <= 575.98) {
      show = 1;
    }
  }
</script>

<div class="slides">
  {#if browser}
    <Carousel
      bind:this={carousel}
      autoplay
      autoplayDuration={2000}
      particlesToShow={show}
      particlesToScroll={1}
    >
      {#each slides as item}
        <div class="carousel">
          <Product />
        </div>
      {/each}
    </Carousel>
  {/if}
</div>

<style>
  .slides {
    @apply mx-auto min-h-32 lg:min-h-80 pb-8;
  }
  .carousel {
    @apply px-2;
  }
</style>
