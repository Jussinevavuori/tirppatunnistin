import type { Bird } from "#/data/birds";
import { Answer } from "./answer";

/**
 * Get the streak for a bird by bird object or id.
 */
export function getStreak(
	bird: Bird | string,
	streakType:
		| "wrong-answers-current-consecutive"
		| "correct-answers-current-consecutive"
		| "wrong-answers-max-consecutive"
		| "correct-answers-max-consecutive"
		| "correct-answers-total"
		| "wrong-answers-total" = "correct-answers-current-consecutive",
) {
	const birdId = typeof bird === "string" ? bird : bird.id;

	// All answers for this bird in oldest first
	const answers = Answer.getStoredAnswers()
		.filter((answer) => answer.bird.id === birdId)
		.sort((a, b) => a.timestamp - b.timestamp);

	switch (streakType) {
		case "correct-answers-total": {
			return answers.filter((answer) => answer.isCorrect).length;
		}

		case "wrong-answers-total": {
			return answers.filter((answer) => !answer.isCorrect).length;
		}

		case "correct-answers-current-consecutive": {
			let streak = 0;
			for (const answer of answers) {
				if (answer.isCorrect) streak++;
				else streak = 0;
			}
			return streak;
		}

		case "wrong-answers-current-consecutive": {
			let streak = 0;
			for (const answer of answers) {
				if (!answer.isCorrect) streak++;
				else streak = 0;
			}
			return streak;
		}

		case "correct-answers-max-consecutive": {
			let maxStreak = 0;
			let currentStreak = 0;
			for (const answer of answers) {
				if (answer.isCorrect) currentStreak++;
				else currentStreak = 0;
				if (currentStreak > maxStreak) maxStreak = currentStreak;
			}
			return maxStreak;
		}

		case "wrong-answers-max-consecutive": {
			let maxStreak = 0;
			let currentStreak = 0;
			for (const answer of answers) {
				if (!answer.isCorrect) currentStreak++;
				else currentStreak = 0;
				if (currentStreak > maxStreak) maxStreak = currentStreak;
			}
			return maxStreak;
		}
	}
}
