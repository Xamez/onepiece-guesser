<script lang="ts">
	import Game from '$components/Game.svelte';
	import data from '$assets/data.json';
	import { page } from '$app/stores';
	import wallpaper from '$assets/wallpaper-2.png'
	import wood from '$assets/wood.png'

	const route = $page.route.id || '';
</script>

<div class="relative overflow-hidden">

	<h1 class="z-50 absolute w-full top-6 text-center font-bold text-amber-900 text-4xl md:text-5xl pointer-events-none">One Piece Guesser</h1>

	<img src={wallpaper} class="h-[100vh] object-cover" alt="One Piece Wallpaper">

	<div class="absolute z-10 w-[55vw] text-[#e7ddbd] top-32 left-1/2 -translate-x-1/2">
		<div class="absolute w-1/2 top-12 left-1/2 -translate-x-1/2">
			<Game {data} {route} />
		</div>
		<img src={wood} class="h-[65vh] w-[40vw] -z-10 absolute rounded-2xl translate-x-[18%]" alt="One Piece Wallpaper">
	</div>

</div>