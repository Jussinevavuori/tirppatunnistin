import type { Attempt, Bird } from "./types";

export const STORAGE_KEY = "tirppatunnistin-attempts";

export const normalizeAnswer = (value: string) =>
	value.toLocaleLowerCase("fi-FI").replace(/[\s\p{P}\p{S}]/gu, "");

export const levenshteinDistance = (source: string, target: string) => {
	const row = Array.from({ length: target.length + 1 }, (_, index) => index);
	for (let sourceIndex = 1; sourceIndex <= source.length; sourceIndex++) {
		let previous = row[0];
		row[0] = sourceIndex;
		for (let targetIndex = 1; targetIndex <= target.length; targetIndex++) {
			const current = row[targetIndex];
			row[targetIndex] = Math.min(
				row[targetIndex] + 1,
				row[targetIndex - 1] + 1,
				previous +
					(source[sourceIndex - 1] === target[targetIndex - 1] ? 0 : 1),
			);
			previous = current;
		}
	}
	return row[target.length];
};

export const scoreForBird = (birdId: string, attempts: Attempt[]) =>
	Math.round(
		attempts
			.filter((attempt) => attempt.birdId === birdId)
			.reduce(
				(score, attempt) =>
					attempt.wasCorrect ? score + attempt.points : score * 0.5,
				0,
			),
	);

export const selectBirdsForRound = (
	birds: Bird[],
	attempts: Attempt[],
	limit: number,
	now = Date.now(),
	random = Math.random,
) => {
	const day = 24 * 60 * 60 * 1000;
	const lastGuesses = new Map<string, number>();
	for (const attempt of attempts) {
		const previous = lastGuesses.get(attempt.birdId) ?? 0;
		if (attempt.timestamp > previous)
			lastGuesses.set(attempt.birdId, attempt.timestamp);
	}

	const remaining = [...birds];
	const selected: Bird[] = [];
	while (remaining.length > 0 && selected.length < limit) {
		const weights = remaining.map((bird) => {
			const lastGuess = lastGuesses.get(bird.id);
			const elapsedDays = lastGuess
				? Math.min(7, Math.max(0, (now - lastGuess) / day))
				: 7;
			return 1 + elapsedDays;
		});
		const weightTotal = weights.reduce((total, weight) => total + weight, 0);
		let target = random() * weightTotal;
		let selectedIndex = remaining.length - 1;
		for (let index = 0; index < weights.length; index++) {
			target -= weights[index];
			if (target < 0) {
				selectedIndex = index;
				break;
			}
		}
		selected.push(remaining.splice(selectedIndex, 1)[0]);
	}
	return selected;
};

export const pointsForCorrectAnswer = (
	previous: Attempt | undefined,
	now = Date.now(),
) => {
	if (!previous) return 1;
	const elapsed = now - previous.timestamp;
	const twelveHours = 12 * 60 * 60 * 1000;
	const week = 7 * 24 * 60 * 60 * 1000;
	if (elapsed < twelveHours) return 1;
	if (elapsed >= week) return 5;
	return Math.round(1 + 4 * ((elapsed - twelveHours) / (week - twelveHours)));
};

export const wingClass = (wingspanCm: number) =>
	wingspanCm < 30 ? "Tirppa" : wingspanCm < 100 ? "Suurtirppa" : "Megatirppa";
