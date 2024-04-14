<script>
  import { getRandomBgImage } from "$lib/random-image";
</script>

<div class="cover" style={getRandomBgImage(400, 800)}>
  <div class="cover-title">
    <slot />
  </div>
</div>

<style>
  .cover {
    @apply flex flex-1 items-center justify-center bg-cover relative;
    min-height: 400px;
  }

  .cover-title {
    @apply text-white text-3xl font-bold z-20 text-center px-8;
  }

  .cover::after {
    content: "";
    @apply absolute bg-black/50 w-full h-full left-0 right-0 top-0 bottom-0;
  }
</style>
