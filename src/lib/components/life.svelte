<script lang="ts">

	import Heart from '$assets/heart.png'
	import DeadHeart from '$assets/dead-heart.png'

	export let width = 'w-8'

	export let tries: number;
	export let maxTries: number;

</script>

<div class="flex justify-end flex-row-reverse">
	{#each Array(maxTries).fill(0).map((_, i) => i) as heart}
		<img class="{width} {tries === 2 && heart === maxTries - 1 ? 'animate-pulse' : ''}" src={tries > heart ? DeadHeart : Heart} alt="heart" />
	{/each}
</div>