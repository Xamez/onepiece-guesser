<script lang="ts">
	import Game from '$components/Game.svelte';
	import data from '$assets/data.json';
	import { page } from '$app/stores';

	const route = $page.route.id || '';

</script>

<!--<button class="bg-[#4864e2] p-2 rounded" on:click="{() => pickedCharacter = pickRandomCharacter()}">Pick another character</button>-->
<Game {data} {route} />

