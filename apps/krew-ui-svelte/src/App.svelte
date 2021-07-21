<script lang="ts">
  import { createKrewClient, NewsItem } from '@krew/api-client';
  import { onMount } from 'svelte';
  import { Link, Route, Router } from 'svelte-routing';
  import About from './routes/About.svelte';

  export let name: string;

  let url = '';
  let loading = true;

  let newsItems: NewsItem[];

  onMount(() => {
    const client = createKrewClient({ sandbox: true });
    client
      .auth()
      .login('', '')
      .then(auth => {
        loading = false;
        console.log(auth);
        client
          .news()
          .all()
          .then(news => (newsItems = news));
      });
  });
</script>

<main>
  <h1>Welcome to {name}!</h1>

  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>

    <Route path="/"><p>Hi there!</p></Route>
    <Route path="about" component={About} />
  </Router>

  {#if loading}
    <p>Loading...</p>
  {:else}
    <p>Loaded!</p>
    {JSON.stringify(newsItems)}
  {/if}
</main>

<style src="./app.scss" lang="scss"></style>
