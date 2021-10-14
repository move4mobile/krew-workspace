import { writable, derived } from 'svelte/store';

/** Store for your data.
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const newsItems = derived(apiData, ($apiData: any) => {
  // if ($apiData.example_items) {
  //   return $apiData.example_items.map(example_item => example_item.exampleProp);
  // }
  return apiData;
});
