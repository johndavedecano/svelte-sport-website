<script>
  import Carousel from "$lib/components/carousel.svelte";
  import Categories from "$lib/components/categories.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import Products from "$lib/components/products.svelte";
  import Selections from "$lib/components/selections.svelte";
  import Slider from "$lib/components/slider.svelte";
  import WordHard from "$lib/components/word-hard.svelte";
  import Sidebar from "$lib/components/sidebar.svelte";

  let sidebarOpen = false;
</script>

<Sidebar open={sidebarOpen} on:close={() => (sidebarOpen = false)} />

<Header on:sidebar-open={() => (sidebarOpen = true)} />

<div class="container pt-24">
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
    <WordHard>I just wanna do the work <br /> and get on with my life.</WordHard
    >
    <Products />
  </div>
</div>

<div class="container">
  <div class="section">
    <Products />
    <WordHard
      >This society is driven by fear.<br /> Do not forget to chill.</WordHard
    >
  </div>
</div>

<div class="container">
  <div class="section">
    <WordHard>If I do not make it,<br /> I am not less of a person.</WordHard>
    <Products />
  </div>
</div>

<div class="container">
  <Carousel />
</div>

<Footer />

<style>
  .sidebar {
    @apply w-full md:w-80 bg-lochmara-600 h-full fixed left-0 top-0 bottom-0 z-50 flex flex-col;
  }
  .sidebar-backdrop {
    @apply fixed bg-black/60 left-0 right-0 top-0 bottom-0 w-full h-full z-40;
  }

  .sidebar-top {
    @apply px-4 py-4 flex items-center justify-end;
  }

  .sidebar-close {
    @apply text-white;
  }

  .sidear-menu {
    @apply flex flex-col w-full;
  }

  .sidebar-menu li {
    @apply w-full;
  }

  .sidebar-menu li a {
    @apply flex items-center px-8 py-4 text-white font-bold text-ellipsis whitespace-nowrap text-sm;
    transition: all 250ms ease-in-out;
  }

  .sidebar-menu li a:hover {
    @apply bg-lochmara-700;
  }

  .sidebar-menu li a div:first-child {
    @apply flex-1;
  }
</style>
