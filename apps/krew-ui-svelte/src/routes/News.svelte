<script>
  import { onMount } from 'svelte';
  // import { apiData, drinkNames } from '../core/store';

  onMount(async () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apiData.set(data);
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  });
</script>

<h3>News page!!!</h3>

<h1>Whiskey Drinks Menu</h1>
