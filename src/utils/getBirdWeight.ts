import type { Bird } from "#/data/birds";
import { clamp } from "./clamp";
import { getStreak } from "./streak";

/**
 * Returns the weights for random bird distribution such that...
 *
 * - Birds with higher streaks appear less frequently
 *
 * A higher weight means the bird is more likely to be selected. Max streak until penalty stops
 * is 4 times in a row. After that, the penalty does not increase further.
 */
export function getBirdWeight(bird: Bird) {
	const streak = clamp(getStreak(bird), 0, 4);
	return 10 / (streak + 1);
}
