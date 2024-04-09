<script lang="ts">
	import wallpaper from '$assets/wallpaper-2.png'
	import gun from '$assets/gun.png'
	import pipe from '$assets/pipe.png'
	import watch from '$assets/watch.png'
	import gold1 from '$assets/gold-1.png'
	import gold2 from '$assets/gold-2.png'
	import parchment from '$assets/parchment.png'
	import longView from '$assets/long-view.png'
	import card from '$assets/card.png'
	import bannerParchment from '$assets/banner-parchment.png'
</script>

<div class="relative overflow-hidden">

	<h1 class="z-50 absolute w-full top-6 md:top-[30%] text-center text-amber-900 font-bold text-4xl lg:text-6xl pointer-events-none">One Piece Guesser</h1>

	<a href="/characters/all" class="z-20 absolute -rotate-6 w-64 md:w-72 left-16 top-24 group hover:scale-105">
		<div class="absolute border-amber-700 border-4 border-dashed w-full h-full hidden transition group-hover:scale-[1.1] group-hover:block"></div>
		<img src={card} class="w-64 md:w-72 backdrop-shadow cursor-pointer transition" alt="Pipe">
		<p class="z-10 absolute text-white text-3xl md:text-4xl font-bold -bottom-4 w-full text-center pointer-events-none">Personnages</p>
		<img src={bannerParchment} class="absolute -bottom-8 md:-bottom-10 left-6 md:left-4 h-16 md:h-20" alt="Banner Parchment">
	</a>
	<a href="/arcs/" class="z-20 absolute rotate-6 w-64 md:w-72 right-16 top-1/2 group hover:scale-105">
		<div class="absolute border-amber-700 border-4 border-dashed w-full h-full hidden transition group-hover:scale-[1.1] group-hover:block"></div>
		<img src={card} class="w-64 md:w-72 backdrop-shadow cursor-pointer transition" alt="Pipe">
		<p class="z-10 absolute text-white text-3xl md:text-4xl font-bold -bottom-4 w-full text-center pointer-events-none">Speed Run</p>
		<img src={bannerParchment} class="absolute -bottom-8 md:-bottom-10 left-6 md:left-4 h-16 md:h-20" alt="Banner Parchment">
	</a>

	<img src={parchment} class="absolute top-2/3 left-1/4 w-32 -rotate-12" alt="Parchment">
	<img src={watch} class="hidden lg:block absolute top-1/2 left-1/2 w-48" alt="Watch">
	<img src={gold1} class="z-10 absolute left-2/3 bottom-2/3 w-48" alt="Gold">
	<img src={gold2} class="z-10 absolute left-1/3 bottom-1/3 w-48" alt="Gold">
	<img src={pipe} class="z-30 absolute left-3/4 top-12 w-48" alt="Pipe">
	<img src={gun} class="z-30 absolute bottom-0 left-0 w-48" alt="Gun">
	<img src={longView} class="hidden md:block absolute top-0 left-1/2 w-24" alt="Long View">
	<img src={wallpaper} class="w-[100vw] h-[100vh]" alt="One Piece Wallpaper">
</div>

<style>
.backdrop-shadow {
	filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
}
</style>

<!--<div class="m-5">-->
<!--	<h1 class="text-center font-bold pb-4">Mode de jeux disponibles: </h1>-->
<!--	<div class="flex flex-row gap-5 items-center justify-center text-white font-bold">-->
<!--		<a href="/characters" class="relative hover:scale-105 transition">-->
<!--			<img class="w-72 rounded-lg shadow" src="{onePieceCharacters}" alt="One Piece Characters">-->
<!--			<div class="absolute w-full h-full top-0 lef-0 flex items-center justify-center">-->
<!--				<h2 class="text-shadow">Personnages One Piece</h2>-->
<!--			</div>-->
<!--		</a>-->
<!--		<a href="/arcs" class="relative hover:scale-105 transition">-->
<!--			<img class="w-72 rounded-lg shadow" src="{onePieceArcs}" alt="One Piece Arcs">-->
<!--			<div class="absolute w-full h-full top-0 lef-0 flex items-center justify-center">-->
<!--				<h2 class="text-shadow">Arcs One Piece</h2>-->
<!--			</div>-->
<!--		</a>-->
<!--	</div>-->
<!--</div>-->

