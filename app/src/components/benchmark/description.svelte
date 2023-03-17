<script lang="ts">
	export let descriptions: string[];
	export let title: string = '';
	export let boldDescription = false;
</script>

{#if descriptions}
	<div class="flex no-wrap py-2">
		<div style="width:252px" class="ml-12 shrink-0">{title}</div>
		{#each descriptions as description}
			<div style="width:450px" class="shrink-0 px-2 {boldDescription && 'font-semibold'} whitespace-pre-line">
				{description || 'NA'}
			</div>
		{/each}
	</div>
{/if}
