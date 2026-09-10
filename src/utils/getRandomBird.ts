import { BIRDS, type Bird } from "#/data/birds";
import { getBirdWeight } from "./getBirdWeight";
import { getUniformRandom } from "./getUniformRandom";
import { getWeightedRandom } from "./getWeightedRandom";
import { shuffleArray } from "./shuffleArray";

/**
 * Get a random bird from the selection.
 */
export function getRandomBird({
	birds = BIRDS,
	applyWeights = false,
}: {
	birds?: Bird[];
	applyWeights?: boolean;
} = {}) {
	if (birds.length === 0) {
		throw new Error("No birds available in the selection.");
	}

	// Weighted distribution
	if (applyWeights) return getWeightedRandom(birds, getBirdWeight);

	// Uniform distribution as default
	return getUniformRandom(birds);
}

/**
 * Get `count` unique random birds from the selection. Allows starting off with a selection
 * of pre-selected birds.
 */
export function getRandomBirds(
	count: number,
	{
		initial = [],
		birds = BIRDS,
		shuffle = true,
		applyWeights = false,
	}: {
		initial?: Bird[];
		birds?: Bird[];
		shuffle?: boolean;
		applyWeights?: boolean;
	} = {},
) {
	if (count > birds.length) {
		throw new Error(
			"Requested more unique birds than available in the selection.",
		);
	}

	// Start off result with initial birds
	const result: Bird[] = initial.slice(0, Math.max(initial.length, count));

	// Add random birds until done
	while (result.length < count) {
		const candidate = getRandomBird({ birds, applyWeights });
		if (result.includes(candidate)) continue;
		result.push(candidate);
	}

	// Return shuffled if required
	if (shuffle) return shuffleArray(result);

	// Return result
	return result;
}
