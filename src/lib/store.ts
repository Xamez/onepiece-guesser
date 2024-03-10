import { get, readonly, writable } from 'svelte/store';
import { type Character, EmptyCharacter } from '$lib/types';

export interface GameState {
	imageSrc: string;
	selectedCharacter: Character;
	tries: number;
	winStreak: number,
	looseStreak: number
}

export const DefaultGameState: GameState = {
	imageSrc: '',
	selectedCharacter: EmptyCharacter,
	tries: 0,
	winStreak: 0,
	looseStreak: 0
}

export const gameRules = writable({
	maxTries: 3,
	hints: true
})

export const getGameRules = () => get(gameRules);

export const gameStates = writable({
	state: new Map<string, GameState>()
});

export const getGameStates = (route: string) => get(gameStates).state.get(route) || DefaultGameState;

export const setGameState = (route: string, newGameState: GameState) => {
	gameStates.update((states) => {
		states.state.set(route, newGameState);
		return states;
	});
};