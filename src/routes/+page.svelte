<script lang="ts">
	import onePieceArcs from '$assets/one-piece-arcs.png'
	import onePieceCharacters from '$assets/one-piece-characters.png'
</script>

<div class="m-5">
	<h1 class="text-center font-bold pb-4">Mode de jeux disponibles: </h1>
	<div class="flex flex-row gap-5 items-center justify-center text-white font-bold">
		<a href="/characters" class="relative hover:scale-105 transition">
			<img class="w-72 rounded-lg shadow" src="{onePieceCharacters}" alt="One Piece Characters">
			<div class="absolute w-full h-full top-0 lef-0 flex items-center justify-center">
				<h2 class="text-shadow">Personnages One Piece</h2>
			</div>
		</a>
		<a href="/arcs" class="relative hover:scale-105 transition">
			<img class="w-72 rounded-lg shadow" src="{onePieceArcs}" alt="One Piece Arcs">
			<div class="absolute w-full h-full top-0 lef-0 flex items-center justify-center">
				<h2 class="text-shadow">Arcs One Piece</h2>
			</div>
		</a>
	</div>
</div>

