<script lang="ts">
	export let medias: string[];
	export let nestedLevel: 0 | 1 = 0;
</script>

{#if medias}
	<div class="flex no-wrap py-2">
		<div style="width:{nestedLevel > 0 ? '204' : '252'}px" class="{nestedLevel > 0 ? 'ml-24' : 'ml-12'} shrink-0">
			Media
		</div>
		{#each medias as media, i}
			<div style="width:450px" class="shrink-0 px-2">{`Media ${i + 1}`}</div>
		{/each}
	</div>
{/if}
