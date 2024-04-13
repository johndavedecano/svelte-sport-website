<script>
  import Carousel from "$lib/components/carousel.svelte";
  import Categories from "$lib/components/categories.svelte";
  import Header from "$lib/components/header.svelte";
  import Products from "$lib/components/products.svelte";
  import Selections from "$lib/components/selections.svelte";
  import Slider from "$lib/components/slider.svelte";
  import WordHard from "$lib/components/word-hard.svelte";
</script>

<Header />

<div class="container pt-20">
  <Slider />
</div>

<div class="container py-10">
  <Categories />
</div>

<div class="container">
  <Selections />
</div>

<div class="container">
  <div class="section">
    <WordHard />
    <Products />
  </div>
</div>

<div class="container">
  <div class="section">
    <Products />
    <WordHard />
  </div>
</div>

<div class="container">
  <div class="section">
    <WordHard />
    <Products />
  </div>
</div>

<div class="container">
  <Carousel />
</div>

<footer class="footer">
  <div class="footer-bar"></div>
  <div class="container"></div>
</footer>

<style>
  .footer {
    @apply w-full;
    min-height: 600px;
    background-color: #eff1f3;
  }
  .footer-bar {
    @apply py-6 w-full bg-lochmara-600 text-white;
  }
</style>
