<script>
  import { getRandomBgImage } from "$lib/random-image";
</script>

<div class="types-title">Onze selectie</div>
<div class="types">
  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Kamperen </a>
  </div>

  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Fietsen </a>
  </div>

  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Zwemmen </a>
  </div>

  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Hardloopkleding </a>
  </div>

  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Fitnesskleding </a>
  </div>

  <div class="type">
    <div class="type-img" style={getRandomBgImage()}></div>
    <a href="/"> Sportvoeding </a>
  </div>
</div>

<style>
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
    @apply bg-cover bg-no-repeat w-full py-32 rounded-lg overflow-hidden;
  }

  .type-item {
    @apply flex flex-1 flex-col gap-2;
  }
</style>
