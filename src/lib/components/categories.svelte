<div class="categories">
  <a href="">Dames</a>
  <a href="">Heren</a>
  <a href="">Kinderen</a>
  <a href="">Accessoires</a>
  <a href="">Lifestyle</a>
  <a href="">Laatste kans </a>
</div>

<style>
  .categories {
    @apply grid grid-rows-3 grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-4;
  }

  .categories a {
    @apply flex items-center justify-center border border-gray-500 text-sm;
    height: 46px;
  }

  .categories a:last-child {
    @apply flex items-center justify-center border border-alizarin-600 bg-alizarin-600 text-white;
    height: 46px;
  }
</style>
