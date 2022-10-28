<script lang="ts">
  import { MyCounterButton } from 'ui';
  import { createClient } from 'generated-wundergraph';

  export const client = createClient();

  let d = client.query({
    operationName: 'Countries'
  });

  console.log(d);
</script>

<h1>Web</h1>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await d}
  <span>Loading... please wait</span>
{:then data}
  <div>{data}</div>
{:catch error}
  <span>Something went wrong: {error.message} 🤕</span>
  {console.error(error)}
{/await}
