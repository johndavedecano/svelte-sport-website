<script>
  import Icon from "$lib/components/icon.svelte";
  import MdSearch from "svelte-icons/md/MdSearch.svelte";
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";
  import MdHelpOutline from "svelte-icons/md/MdHelpOutline.svelte";
  import MdAddShoppingCart from "svelte-icons/md/MdAddShoppingCart.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<header class="page-header">
  <a
    href="/"
    class="menu"
    on:click|preventDefault={() => dispatch("sidebar-open")}
  >
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
  <a href="/" class="menu menu-search">
    <Icon height={24} width={24} icon={MdSearch} />
    <span>SEARCH</span>
  </a>
  <a href="/" class="menu">
    <Icon height={24} width={24} icon={MdAccountCircle} />
    <span>ACCOUNT</span>
  </a>
  <a href="/" class="menu">
    <Icon height={24} width={24} icon={MdHelpOutline} />
    <span>SUPPORT</span>
  </a>
  <a href="/" class="menu menu-cart">
    <div class="menu-cart-content">
      <Icon height={24} width={24} icon={MdAddShoppingCart} />
      <span>CART</span>
    </div>
  </a>
</header>

<style>
  .page-header {
    @apply shadow-xl w-full fixed top-0 right-0 left-0 flex items-center pl-4 gap-4 bg-white z-30;
    height: 66px;
  }

  .logo {
    @apply px-4 bg-lochmara-600 text-2xl hidden md:flex items-center font-bold uppercase text-white;
    height: 40px;
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

  .menu-search {
    @apply flex md:hidden;
  }

  .menu-cart-content {
    @apply flex flex-col items-center;
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
