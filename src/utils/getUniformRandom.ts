/**
 * Get a random item from the list with uniform probability.
 */
export function getUniformRandom<T>(items: T[]): T {
	return items[Math.floor(Math.random() * items.length)];
}
