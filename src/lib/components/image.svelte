<script lang="ts">
	import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
	import { afterUpdate, onMount } from 'svelte';
	import Fa from 'svelte-fa';

	export let portraitSrc = '';
	export let width = 'w-1/4'

	let lastPortraitSrc = '';
	let imageUrl = '';

	function getImageUrl(portraitSrc: string) {
		fetch('/api/image/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				url: portraitSrc
			})
		}).then(response => response.blob())
			.then(blob => imageUrl = URL.createObjectURL(blob))
			.catch(console.error);
	}

	afterUpdate(() => {
		if (portraitSrc === '' || portraitSrc !== lastPortraitSrc) {
			lastPortraitSrc = portraitSrc;
			getImageUrl(portraitSrc);
		}
	});

</script>

{#if imageUrl === ''}
	<Fa icon={faSpinner} class="text-6xl text-gray-800" spin/>
{:else}
	<img src="{imageUrl}" alt="" class={width}/>
{/if}
