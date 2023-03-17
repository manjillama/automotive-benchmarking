<script lang="ts">
	import { LightboxGallery, GalleryImage, GalleryThumbnail } from 'svelte-lightbox';
	export let productsMedias: { attributes: { url: string; mime: string } }[][];
	export let nestedLevel: 0 | 1 = 0;
	const id: any = null;

	function getGalleryThumbnail(attributes: { url: string; mime: string }) {
		if (!attributes || attributes.mime.includes('video'))
			return 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
		return attributes.url;
	}
</script>

{#if productsMedias}
	<div class="flex no-wrap py-2">
		<div
			style="width:{nestedLevel > 0 ? '204' : '252'}px"
			class="{nestedLevel > 0 ? 'ml-24' : 'ml-12'} shrink-0 font-semibold"
		>
			Media
		</div>
		{#each productsMedias as productMedias}
			<div style="width:450px" class="shrink-0 px-2">
				{#if productMedias}
					<LightboxGallery>
						<svelte:fragment slot="thumbnail">
							<div class="sample-class-1">
								<span class="text-sky-700 text-sm">{productMedias.length} total medias</span>

								<GalleryThumbnail {id}>
									<img src={getGalleryThumbnail(productMedias[0]?.attributes)} alt="" width="200" />
								</GalleryThumbnail>
							</div>
						</svelte:fragment>

						{#each productMedias as media}
							<GalleryImage>
								{#if media.attributes.mime.includes('video')}
									<!-- svelte-ignore a11y-media-has-caption -->
									<video controls>
										<source src={media.attributes.url} />
									</video>
								{:else}
									<img src={media.attributes.url} alt="Simple lightbox" />
								{/if}
							</GalleryImage>
						{/each}
					</LightboxGallery>
				{:else}
					<span class="text-sky-700 text-sm">No medias</span>
				{/if}
			</div>
		{/each}
	</div>
{/if}
