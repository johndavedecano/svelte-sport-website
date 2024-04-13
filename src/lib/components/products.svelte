<script>
  import Product from "./product.svelte";

  export let size = 6;
</script>

<div class="items">
  {#each Array.from(new Array(size)) as item}
    <Product />
  {/each}
</div>

<style>
  .items {
    @apply grid gap-4 grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2;
  }
</style>
