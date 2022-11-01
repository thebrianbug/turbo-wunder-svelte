<script lang="ts">
  import { MyCounterButton } from 'ui';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Web</h1>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data?.countries_countries as country}
  <div>{country.name}</div>
{/each}
