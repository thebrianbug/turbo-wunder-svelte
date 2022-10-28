<script lang="ts">
  import { MyCounterButton } from 'ui';
  import { page } from '$app/stores';

  const contries = $page.data.response?.data?.countries_countries;
</script>

<h1>Web</h1>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each contries as country}
  <div>{country.name}</div>
{/each}
