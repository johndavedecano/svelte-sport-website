<script>
  import Carousel from "$lib/components/carousel.svelte";
  import Categories from "$lib/components/categories.svelte";
  import Footer from "$lib/components/footer.svelte";
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

<Footer />
