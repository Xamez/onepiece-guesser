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
		console.log("called");
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
			}
		} else {
			gameState.winStreak++;
			gameState.looseStreak = 0;
			hasWon = true;
		}
		userGuess = '';
		setGameState(route, { ...gameState });
	}

	function handleClose() {
		hasWon = undefined;
		pickRandomCharacter();
	}

	onMount(async () => {
		const gameState = getGameStates(route);
		if (gameState.selectedCharacter === EmptyCharacter) pickRandomCharacter();
	});
</script>

<div class="flex flex-col items-center gap-2">

	<Image width="w-full border-2 border-[#e7ddbd]" portraitSrc={$gameStates.state.get(route)?.selectedCharacter.portraitSrc} />

	<Life tries="{$gameStates.state.get(route)?.tries ?? 0}" maxTries="{$gameRules.maxTries ?? 0}" />

	<form on:submit|preventDefault="{() => validateUserGuess()}">
		<label for="userGuess">Nom:</label>
		<input type="text" id="userGuess" bind:value="{userGuess}">
	</form>
</div>

<!--TODO: DISPLAY MODAL WITH INFO ABOUT CHARACTER (from https://onepiece.fandom.com/fr/wiki/{NAME})-->

<Modal bind:showModal {handleClose}>
<!--<Modal showModal={true} {handleClose}>-->
	<h2 slot="header" class="font-bold text-center">{hasWon ? "Bien joué !" : "Perdu !"}</h2>
	<Image width="w-1/2" portraitSrc={$gameStates.state.get(route)?.selectedCharacter.portraitSrc} />
	<p>{$gameStates.state.get(route)?.selectedCharacter.name}</p>
	<p>Todo: description du personnage !</p>
</Modal>


