<script>
  import Icon from "$lib/components/icon.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";
  import MdHelpOutline from "svelte-icons/md/MdHelpOutline.svelte";
  import MdAddShoppingCart from "svelte-icons/md/MdAddShoppingCart.svelte";
</script>

<header class="page-header">
  <a href="/" class="menu">
    <Icon height={24} width={24} />
    <span>MENU</span>
  </a>
  <div class="logo">DecaSvelte</div>
  <div class="spacer"></div>
  <form action="" class="global-search">
    <input type="text" placeholder="Search" />
    <button>
      <Icon icon={MdSearch} />
    </button>
  </form>
  <a href="/" class="menu">
    <Icon height={24} width={24} icon={MdAccountCircle} />
    <span>ACCOUNT</span>
  </a>
  <a href="/" class="menu">
    <Icon height={24} width={24} icon={MdHelpOutline} />
    <span>SUPPORT</span>
  </a>
  <a href="/" class="menu menu-cart">
    <div>
      <Icon height={24} width={24} icon={MdAddShoppingCart} />
      <span>CART</span>
    </div>
  </a>
</header>

<div class="container pt-20">
  <div class="hero" style="background-image: url('/cover.jpg');">
    hero section
  </div>
</div>

<div class="container py-10">
  <div class="categories">
    <a href="">Dames</a>
    <a href="">Heren</a>
    <a href="">Kinderen</a>
    <a href="">Accessoires</a>
    <a href="">Lifestyle</a>
    <a href="">Laatste kans </a>
  </div>
</div>

<div class="container">
  <div class="types-title">Onze selectie</div>
  <div class="types">
    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Kamperen </a>
    </div>

    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Fietsen </a>
    </div>

    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Zwemmen </a>
    </div>

    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Hardloopkleding </a>
    </div>

    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Fitnesskleding </a>
    </div>

    <div class="type">
      <div class="type-img" style="background-image: url('/sport.jpg');"></div>
      <a href="/"> Sportvoeding </a>
    </div>
  </div>
</div>

<div class="container">
  <div class="section">
    <div class="cover" style="background-image: url('/sport.jpg');">
      <div class="cover-title">Work Hard,<br /> Play Hard!</div>
    </div>
    <div class="items">
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
      <div class="item">
        <div
          class="item-img"
          style="background-image: url('/sport.jpg');"
        ></div>
        <div class="item-content">
          <span class="item-price"> €27,99 </span>
          <div class="item-make">Nike</div>
          <div class="item-title">Lorem ipsum dolor sit amet, ...</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .section {
    @apply flex py-12 gap-12 flex-col lg:flex-row;
  }

  .spacer {
    @apply flex-1;
  }

  .cover {
    @apply flex flex-1 items-center justify-center bg-cover relative;
    min-height: 500px;
  }

  .cover-title {
    @apply text-white text-4xl font-bold z-20;
  }

  .cover::after {
    content: "";
    @apply absolute bg-black/50 w-full h-full left-0 right-0 top-0 bottom-0;
  }

  .items {
    @apply grid gap-4 grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2;
  }
  .item {
    @apply bg-white flex flex-col border border-slate-200 relative;
    min-height: 230px;
  }

  .item-price {
    @apply bg-lemon-500 p-2 text-base font-bold;
  }

  .item-title {
    @apply text-sm mb-8;
  }

  .item-make {
    @apply uppercase font-bold text-sm pt-2;
  }

  .item-img {
    @apply bg-cover flex-1 py-32;
  }

  .item-content {
    @apply p-4;
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

  .page-header {
    @apply shadow-xl w-full fixed top-0 right-0 left-0 flex items-center pl-4 gap-4 bg-white;
    height: 66px;
  }

  .logo {
    @apply px-4 bg-lochmara-600 text-2xl flex items-center font-bold uppercase text-white;
    height: 40px;
  }

  .hero {
    @apply flex bg-lochmara-600 rounded-lg items-center justify-center text-white text-3xl;
    min-height: 481px;
  }

  .menu {
    @apply text-xs uppercase flex flex-col items-center border-r-slate-200 justify-center text-center;
    width: 60px;
    height: 60px;
  }

  .menu-cart {
    @apply text-xs uppercase flex flex-col items-center justify-center bg-lemon-400 px-8 text-center;
    height: 100%;
  }

  .container {
    @apply mx-auto px-4;
    width: 100%;
    max-width: 1200px;
  }

  .global-search {
    @apply border-slate-200 hidden md:flex flex-row w-full border items-stretch;
  }

  .global-search input {
    @apply flex-1 h-full px-4;
    min-height: 40px;
  }

  .global-search button {
    @apply px-4 bg-slate-100 border-l-slate-200;
  }

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
