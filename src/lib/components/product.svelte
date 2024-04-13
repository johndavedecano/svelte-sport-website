<script>
  import StarRating from "svelte-star-rating";

  const rating = 3.35;
  const config = {
    emptyColor: "hsl(240, 80%, 85%)",
    fullColor: "#f05",
    showText: true,
    size: 42,
  };
  const style = "border: 1px solid firebrick;padding: 12px;";
</script>

<div class="item">
  <div class="item-img" style="background-image: url('/sport.jpg');">
    <div class="item-new">Niuew</div>
    <div class="item-discount">Korting</div>
  </div>
  <div class="item-content">
    <span class="item-price"> €27,99 </span>
    <div class="item-make">Nike</div>
    <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
    <StarRating {rating} />
  </div>
</div>

<style>
  .item {
    @apply bg-white flex flex-col border border-slate-200 relative;
    min-height: 200px;
  }

  .item-new {
    @apply py-1 px-2 bg-lochmara-600 text-white text-xs inline absolute top-2 left-2 rounded;
  }

  .item-discount {
    @apply py-1 px-2 bg-alizarin-600 text-white text-xs inline absolute top-2 right-2 rounded;
  }

  .item-price {
    @apply bg-lemon-400 p-2 text-base font-bold;
  }

  .item-title {
    @apply text-sm mb-8;
  }

  .item-make {
    @apply uppercase font-bold text-sm pt-2;
  }

  .item-img {
    @apply bg-cover flex-1 py-24 relative;
  }

  .item-content {
    @apply pt-6 px-4;
  }

  .types {
    @apply grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6;
  }

  .types-title {
    @apply text-3xl font-bold mb-8;
  }

  .type {
    @apply flex flex-col gap-4;
  }

  .type a {
    @apply text-center;
  }

  .type-img {
    @apply bg-cover bg-no-repeat w-full py-32;
  }

  .type-item {
    @apply flex flex-1 flex-col gap-2;
  }
</style>
