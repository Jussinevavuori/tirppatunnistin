/**
 * Given a list of items, each one associated with a weight, returns a random based on the weight
 * probability distribution.
 */
export function getWeightedRandom<T>(
	items: T[],
	getWeight: (t: T) => number,
): T {
	// Get the total weight and a random value between it and 0 for selection.
	const totalWeight = items.reduce((sum, item) => sum + getWeight(item), 0);
	const random = Math.random() * totalWeight;

	// Select a random item based on its weight.
	let cumulativeWeight = 0;
	for (const item of items) {
		cumulativeWeight += getWeight(item);
		if (random < cumulativeWeight) return item;
	}

	// Fallback in case of rounding errors
	return items[items.length - 1];
}
