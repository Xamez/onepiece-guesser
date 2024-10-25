<script lang="ts">
	import type { Character } from '$lib/types.js';
	import { EmptyCharacter } from '$lib/types.js';
	import { onMount } from 'svelte';
	import Image from '$components/image.svelte';
	import Life from '$components/life.svelte';
	import Modal from '$components/modal.svelte';
	import { gameRules, gameStates, getGameRules, getGameStates, setGameState } from '$lib/store';
	import { stringMatcher } from '$lib/matcher';

	export let route: string;
	export let data: Character[];

	let userGuess: string = '';
	let hasWon: boolean | undefined = undefined;

	$: showModal = hasWon !== undefined;

	function pickRandomCharacter(): void {
		const selectedCharacter = getGameStates(route).selectedCharacter;
		let newCharacter = data[Math.floor(Math.random() * data.length)];
		if (newCharacter === selectedCharacter) {
			pickRandomCharacter();
			return;
		}
		setGameState(route, { ...getGameStates(route), selectedCharacter: newCharacter, tries: 0 });
	}

	function validateUserGuess() {
		if (userGuess.trim() === '') return;
		const gameState = getGameStates(route);
		if (!stringMatcher(gameState.selectedCharacter.name, userGuess)) {
			gameState.tries++;
			const maxTries = getGameRules().maxTries;
			if (gameState.tries >= maxTries) {
				gameState.winStreak = 0;
				gameState.looseStreak++;
				hasWon = false;
				pickRandomCharacter();
				console.log("called 1");
			}
		} else {
			gameState.winStreak++;
			gameState.looseStreak = 0;
			hasWon = true;
			pickRandomCharacter();
			console.log("called 2");
		}
		userGuess = '';
		setGameState(route, { ...gameState });
	}

	function handleClose() {
		hasWon = undefined;
		console.log("oui");
		// pickRandomCharacter();
	}

	onMount(async () => {
		const gameState = getGameStates(route);
		if (gameState.selectedCharacter === EmptyCharacter) pickRandomCharacter();
	});
</script>

<div class="flex flex-col items-center gap-2">

	<Image width="w-[85%] border-2 border-[#e7ddbd]" portraitSrc={$gameStates.state.get(route)?.selectedCharacter.portraitSrc} />

	<Life tries="{$gameStates.state.get(route)?.tries ?? 0}" maxTries="{$gameRules.maxTries ?? 0}" />

	<!-- Autocomplete input for userGuess -->
	<form on:submit|preventDefault="{() => validateUserGuess()}">
		<label for="userGuess">Nom:</label>
		<input
			class="focus:outline-none bg-transparent border-b-2"
			type="text"
			id="userGuess"
			bind:value="{userGuess}"
			list="characterNames"
		>
		<datalist id="characterNames">
			{#each data as character}
				<option value="{character.name}">{character.name}</option>
			{/each}
		</datalist>
	</form>
</div>

<Modal bind:showModal {handleClose}>
	<h2 slot="header" class="font-bold text-center mb-4">{hasWon ? "Bien joué !" : "Perdu !"}</h2>
	<Image width="w-[75%] mx-auto	" portraitSrc={$gameStates.state.get(route)?.selectedCharacter.portraitSrc} />
	<p class="text-center font-sans">{$gameStates.state.get(route)?.selectedCharacter.name}</p>
</Modal>
