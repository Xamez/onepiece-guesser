import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({request, fetch}) => {
	const { url } = await request.json();
	const imgResponse = await fetch(url);
	const imageBlob = await imgResponse.blob();
	return new Response(imageBlob, {
		status: 200,
		headers: {
			'Content-Type': imgResponse.headers.get('Content-Type') || 'application/octet-stream'
		}
	});
}