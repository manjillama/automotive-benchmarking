<script lang="ts">
	export let target: string;
	export let targetStyleClass = '';

	let isOpened = false;

	function camelize(str: string) {
		return str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, '');
	}
</script>

<div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => (isOpened = !isOpened)}
		data-te-collapse-init
		data-te-ripple-init
		data-te-ripple-color="light"
		data-te-target="#{camelize(target)}"
		aria-expanded="false"
		aria-controls={camelize(target)}
		class="w-full mb-2"
	>
		<div class="border p-4 {targetStyleClass} flex items-center bg-gray-200">
			<div class="mr-2">{target}</div>
			<i class="transition-all fas fa-chevron-down {isOpened && 'rotate-180'}" />
		</div>
	</div>
	<div class="!visible hidden" id={camelize(target)} data-te-collapse-item>
		<slot />
	</div>
</div>
