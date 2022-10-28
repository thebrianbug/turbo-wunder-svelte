<script lang="ts">
  import { MyCounterButton } from 'ui';
  import { createClient } from 'generated-wundergraph';

  export const client = createClient()

  console.log(client);
</script>

<h1>Web</h1>
<MyCounterButton />

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
