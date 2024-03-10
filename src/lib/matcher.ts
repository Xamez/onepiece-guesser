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

	return normalizedStr(handleTypos(str1)) === normalizedStr(handleTypos(str2));
}

function levenshtein(str1: string, str2: string): number {
	const an = str1 ? str1.length : 0;
	const bn = str2 ? str2.length : 0;
	if (an === 0) {
		return bn;
	}
	if (bn === 0) {
		return an;
	}
	const matrix = new Array<number[]>(bn + 1);
	for (let i = 0; i <= bn; ++i) {
		let row = matrix[i] = new Array<number>(an + 1);
		row[0] = i;
	}
	const firstRow = matrix[0];
	for (let j = 1; j <= an; ++j) {
		firstRow[j] = j;
	}
	for (let i = 1; i <= bn; ++i) {
		for (let j = 1; j <= an; ++j) {
			if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1], // substitution
					matrix[i][j - 1], // insertion
					matrix[i - 1][j] // deletion
				) + 1;
			}
		}
	}
	return matrix[bn][an];
}