<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import About from './routes/About.svelte';

  export let name: string;

  export let url = '';
</script>

<main>
  <h1>Welcome {name}!</h1>
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>

    <Route path="/"><p>Hi there!</p></Route>
    <Route path="about" component={About} />
  </Router>
</main>

<style src="./app.scss" lang="scss"></style>
