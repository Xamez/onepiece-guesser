export interface Character {
	portraitSrc: string;
	name: string;
	chapter: string;
	episode: string;
	year: string;
}

export const EmptyCharacter: Character = {
	portraitSrc: '',
	name: '',
	chapter: '',
	episode: '',
	year: ''
}