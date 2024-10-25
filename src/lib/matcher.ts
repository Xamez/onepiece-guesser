/**
 * Compare two strings and return a boolean indicating if they are simila
 * @param str1 The original string
 * @param str2 The string to compare with
 * @returns True if the strings are similar (1), false otherwise
 * (1) Two strings are similar if they are equal after being normalized and typos are handled:
 * - Normalization: The strings are converted to lowercase and accents are removed
 * - Typos: The following typos are handled:
 *    - '°', 'n°', '.' are removed
 *    - ''', '´', '-' are replaced by ' '
 * 		- 'y' is replaced by 'i'
 * 		- 'chi' is replaced by 'shi'
 * 		- 'xx' is replaced by 'x' (where x is 'l', 'n', 'm', 't', 'f', 'p', 'g', 'o')
 */
export function stringMatcher(str1: string, str2: string): boolean {
	const normalizedStr = (str: string) => str
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
	const handleTypos = (str: string) => str
		.replace(/[°´n°.]/g, '')
		.replace(/['´-]/g, ' ')
		.replace(/chi/g, 'shi')
		.replace(/y/g, 'i')
		.replace(/ll/g, 'l')
		.replace(/nn/g, 'n')
		.replace(/mm/g, 'm')
		.replace(/tt/g, 't')
		.replace(/ff/g, 't')
		.replace(/pp/g, 'p')
		.replace(/gg/g, 'g')
		.replace(/oo/g, 'o');

	console.log(normalizedStr(handleTypos(str1)), normalizedStr(handleTypos(str2)));

	return normalizedStr(handleTypos(str1)) === normalizedStr(handleTypos(str2));
}
