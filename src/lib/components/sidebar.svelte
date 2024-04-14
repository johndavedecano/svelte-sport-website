<script>
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import MdChevronRight from "svelte-icons/md/MdChevronRight.svelte";
  import { createEventDispatcher } from "svelte";
  import Icon from "./icon.svelte";
  import { browser } from "$app/environment";

  export let open = false;

  const dispatch = createEventDispatcher();

  $: if (browser) {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }
</script>

<div class={`sidebar ${open ? "sidebar-open" : ""}`}>
  <div class="sidebar-top">
    <a href="/" class="sidebar-close" on:click={() => dispatch("close")}>
      <Icon icon={MdClose} />
    </a>
  </div>
  <ul class="sidebar-menu">
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORTEN</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORTKLEDING</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORTSCHOENEN</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORT ACCESSOIRES</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORTVOEDING & SPORTDRANK</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>KAMPEREN</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>LAATSTE KANS</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>NIEUWE COLLECTIE</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>LIFESTYLE</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>MERKEN</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>SPORTADVIEZEN</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>BUYBACK</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>RENTAL</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>DUURZAAMHEID</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>ONZE INNOVATIES</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
    <li>
      <a href="/" on:click|preventDefault={() => {}}
        ><div>GIFTCARD</div>
        <Icon icon={MdChevronRight} /></a
      >
    </li>
  </ul>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={`sidebar-backdrop ${open ? "sidebar-backdrop-open" : ""}`}
  on:click={() => dispatch("close")}
></div>

<style>
  .sidebar {
    @apply w-full md:w-80 bg-lochmara-600 h-full fixed left-0 top-0 bottom-0 z-50 flex flex-col;
    transition: all 250ms ease-in-out;
    transform: translateX(-100%);
  }

  .sidebar-open {
    transform: translateX(0px);
  }

  .sidebar-backdrop {
    @apply fixed hidden bg-black/60 left-0 right-0 top-0 bottom-0 w-full h-full z-40;
    transition: all 100ms ease-in-out;
  }
  .sidebar-backdrop-open {
    @apply flex;
  }

  .sidebar-top {
    @apply px-4 py-4 flex items-center justify-end;
  }

  .sidebar-close {
    @apply text-white;
  }

  .sidebar-menu {
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
