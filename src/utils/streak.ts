import type { Bird } from "#/data/birds";
import { Answer } from "./answer";

/**
 * Get the streak for a bird by bird object or id.
 */
export function getStreak(bird: Bird | string) {
	const birdId = typeof bird === "string" ? bird : bird.id;

	// All answers for this bird in oldest first
	const answers = Answer.getStoredAnswers()
		.filter((answer) => answer.bird.id === birdId)
		.sort((a, b) => a.timestamp - b.timestamp);

	// Calculate streak
	let streak = 0;
	for (const answer of answers) {
		if (answer.isCorrect) streak++;
		else streak = 0;
	}
	return streak;
}
