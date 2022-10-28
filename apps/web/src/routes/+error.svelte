<script>
  import { page } from '$app/stores';
</script>

{#if $page.status == 404}
  <div>Can't find that!</div>
{:else}
  <h1>{$page.status} : {$page?.error?.message}</h1>
{/if}
