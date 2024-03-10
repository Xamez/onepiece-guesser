import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({request, fetch}) => {
	const { characterName } = await request.json();
	const characterResponse = await fetch("https://onepiece.fandom.com/fr/wiki/" + characterName);
	// TODO FIX ME
	return new Response(characterResponse.body, characterResponse);
}