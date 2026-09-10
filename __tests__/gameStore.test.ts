import { beforeEach, describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";
import { answerModeAtom, answersAtom, birdsAtom } from "#/store/game.store";
import { Answer } from "#/utils/answer";

describe("game.store atoms", () => {
	beforeEach(() => {
		answerModeAtom.set("options");
		answersAtom.set([]);
		birdsAtom.set([]);
	});

	it("answerModeAtom should hold and update current answer mode", () => {
		expect(answerModeAtom.get()).toBe("options");

		answerModeAtom.set("text");
		expect(answerModeAtom.get()).toBe("text");

		answerModeAtom.set("options");
		expect(answerModeAtom.get()).toBe("options");
	});

	it("answersAtom should hold and update answers list", () => {
		expect(answersAtom.get()).toEqual([]);

		const testBird = BIRDS[0];
		const answer = Answer.check(testBird, 0, testBird.nameFi);

		answersAtom.set([answer]);
		expect(answersAtom.get()).toHaveLength(1);
		expect(answersAtom.get()[0]).toBe(answer);
	});

	it("birdsAtom should hold and update active round birds list", () => {
		expect(birdsAtom.get()).toEqual([]);

		const testBirds = BIRDS.slice(0, 3);
		birdsAtom.set(testBirds);

		expect(birdsAtom.get()).toHaveLength(3);
		expect(birdsAtom.get()).toEqual(testBirds);
	});
});
