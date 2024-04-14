<footer class="footer">
  <div class="footer-bar">
    <div class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
  <div class="container">
    <div class="footer-list">
      <ul>
        <li>KLANTENSERVICE</li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
      </ul>
      <ul>
        <li>ONZE SERVICES</li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
      </ul>
      <ul>
        <li>OVER ONS</li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
      </ul>
      <ul>
        <li>POPULAIRE ARTIKELEN</li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
        <li><a href="/">Lorem Ipsum</a></li>
      </ul>
    </div>
  </div>
</footer>

<style>
  .footer {
    @apply w-full;
    min-height: 600px;
    background-color: #eff1f3;
  }
  .footer-bar {
    @apply py-6 w-full bg-lochmara-600 text-white;
  }

  .footer-list {
    @apply grid grid-cols-2 lg:grid-cols-4 gap-8 w-full pt-8;
  }

  .footer-list ul {
    @apply flex flex-col flex-1;
  }

  .footer-list ul li:first-child {
    @apply text-lochmara-600 uppercase font-bold text-sm italic mb-2;
  }

  .footer-list ul li a {
    @apply text-xs;
  }
</style>
