<script lang="ts">
  export let name: string;

</script>

<main>
  <h1>Welcome to {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <div>
    <img src="assets/example-logo.png" alt="favicon" />
  </div>
</main>

<style lang="scss">
  $brand01: hotpink;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: $brand01;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

</style>
