<script>
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";

  let carousel; // for calling methods of the carousel instance

  let slides = Array.from(new Array(5));
</script>

<div class="slides">
  {#if browser}
    <Carousel bind:this={carousel} autoplay autoplayDuration={2000}>
      {#each slides as item}
        <div class="slider" style="background-image: url('/slide.jpg');"></div>
      {/each}
    </Carousel>
  {/if}
</div>

<style>
  .slides {
    @apply mx-auto min-h-32 lg:min-h-80;
  }
  .slider {
    @apply w-full py-32 lg:py-60 bg-cover bg-center;
  }
</style>
