<script>
  import { onMount } from 'svelte';

  // import { Sdk } from '@krew/client-sdk';

  // const ApiClient = new Sdk({
  //   apiKey: process.env.TOKEN,
  //   basePath: 'https://company-app.develop.m4mapp.com/api/',
  // });

  // create a prop
  export let newsItem;

  onMount(async () => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      // await ApiClient.getNewsItem('3a9d8d02-f34e-488e-8f10-aecbc41076d0')
      .then(r => r.json())
      .then(data => {
        console.log(data);
        newsItem = data;
      });
  });
</script>

<h3>About page!!!</h3>

<h3>{newsItem?.title}</h3>
