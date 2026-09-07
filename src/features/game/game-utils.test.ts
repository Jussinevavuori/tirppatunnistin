import { describe, expect, it } from "bun:test";
import {
	normalizeAnswer,
	pointsForCorrectAnswer,
	scoreForBird,
	selectBirdsForRound,
} from "./game-utils";
import type { Attempt, Bird } from "./types";

const day = 24 * 60 * 60 * 1000;

const makeBird = (id: string, name = id): Bird => ({
	id,
	name,
	englishName: name,
	scientificName: name,
	image: "",
	wikipedia: "",
	wingspan: "",
	wingspanCm: 0,
	facts: [],
});

const makeAttempt = (
	birdId: string,
	timestamp: number,
	points = 1,
): Attempt => ({
	birdId,
	timestamp,
	gameMode: "image-name",
	answerMode: "text",
	guess: birdId,
	correctAnswer: birdId,
	wasCorrect: true,
	points,
});

describe("normalizeAnswer", () => {
	it("normalizes Finnish answers for comparison", () => {
		expect(normalizeAnswer("  Pääsky! ")).toBe("pääsky");
	});
});

describe("pointsForCorrectAnswer", () => {
	it("awards one point for a first correct answer", () => {
		expect(pointsForCorrectAnswer(undefined, 1000)).toBe(1);
	});

	it("awards five points after a week", () => {
		expect(pointsForCorrectAnswer(makeAttempt("bird", 0), 7 * day)).toBe(5);
	});
});

describe("scoreForBird", () => {
	it("adds correct points and halves the score for incorrect attempts", () => {
		const attempts = [
			makeAttempt("bird", 1, 4),
			{ ...makeAttempt("bird", 2), wasCorrect: false, points: 0 },
		];

		expect(scoreForBird("bird", attempts)).toBe(2);
	});
});

describe("selectBirdsForRound", () => {
	it("prioritizes birds that have not been guessed recently", () => {
		const birds = [makeBird("recent"), makeBird("overdue")];
		const selected = selectBirdsForRound(
			birds,
			[makeAttempt("recent", 6 * day)],
			1,
			7 * day,
			() => 0.99,
		);

		expect(selected[0]?.id).toBe("overdue");
	});

	it("gives common birds a modest boost when recency is equal", () => {
		const birds = [
			makeBird("common", "Peippo"),
			makeBird("unranked", "Harvinainen"),
		];
		const selected = selectBirdsForRound(birds, [], 1, 7 * day, () => 0.59);

		expect(selected[0]?.id).toBe("common");
	});

	it("does not select the same bird twice", () => {
		const birds = [makeBird("one"), makeBird("two"), makeBird("three")];
		const selected = selectBirdsForRound(birds, [], 3, 7 * day, () => 0.5);

		expect(selected).toHaveLength(3);
		expect(new Set(selected.map((bird) => bird.id)).size).toBe(3);
	});
});
