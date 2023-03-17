<script lang="ts">
	export let descriptions: string[];
	export let nestedLevel: 0 | 1 = 0;
</script>

{#if descriptions}
	<div class="flex no-wrap py-2">
		<div
			style="width:{nestedLevel > 0 ? '204' : '252'}px"
			class="{nestedLevel > 0 ? 'ml-24' : 'ml-12'} shrink-0 font-semibold"
		>
			Description
		</div>
		{#each descriptions as description}
			<div style="width:450px" class="shrink-0 px-2 whitespace-pre-line">{description || 'NA'}</div>
		{/each}
	</div>
{/if}
