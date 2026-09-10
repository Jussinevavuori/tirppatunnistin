import { beforeEach, describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";
import { answerModeAtom } from "#/store/game.store";
import { Answer } from "#/utils/answer";
import { getStoredAnswers as getRawStoredAnswers } from "#/utils/answerStorage";

function setupMockLocalStorage() {
	const store = new Map<string, string>();
	const mockStorage: Storage = {
		getItem: (key: string) => store.get(key) ?? null,
		setItem: (key: string, value: string) => {
			store.set(key, value);
		},
		removeItem: (key: string) => {
			store.delete(key);
		},
		clear: () => {
			store.clear();
		},
		key: (index: number) => Array.from(store.keys())[index] ?? null,
		get length() {
			return store.size;
		},
	};
	globalThis.localStorage = mockStorage;
}

describe("Answer class", () => {
	const bird = BIRDS[0]; // First bird from dataset

	beforeEach(() => {
		setupMockLocalStorage();
		localStorage.clear();
		answerModeAtom.set("options");
	});

	describe("Answer.normalize", () => {
		it("should lowercase and strip non-alphanumeric characters", () => {
			expect(Answer.normalize("Talitiainen")).toBe("talitiainen");
			expect(Answer.normalize("  Sini-tiainen! ")).toBe("sinitiainen");
			expect(Answer.normalize("Harakka 123")).toBe("harakka123");
			expect(Answer.normalize("!!!")).toBe("");
		});
	});

	describe("Answer.getHintDistance", () => {
		it("should return null for exact match (distance = 0)", () => {
			expect(Answer.getHintDistance(bird, bird.nameFi)).toBeNull();
			expect(
				Answer.getHintDistance(bird, bird.nameFi.toUpperCase()),
			).toBeNull();
		});

		it("should return distance number when distance is below threshold (1 or 2)", () => {
			// Small typo in bird name
			const typoGuess1 = `${bird.nameFi}a`; // 1 extra char
			const distance1 = Answer.getHintDistance(bird, typoGuess1);
			expect(distance1).toBe(1);
		});

		it("should return null when distance is greater than or equal to threshold (>= 3)", () => {
			const wrongGuess = "Completely Different Name";
			expect(Answer.getHintDistance(bird, wrongGuess)).toBeNull();
		});
	});

	describe("Answer.check", () => {
		it("should return correct Answer instance when guess matches bird name", () => {
			const answer = Answer.check(bird, 0, bird.nameFi);

			expect(answer.isCorrect).toBeTrue();
			expect(answer.guessedName).toBe(bird.nameFi);
			expect(answer.bird).toBe(bird);
			expect(answer.imageIndex).toBe(0);
		});

		it("should return incorrect Answer instance when guess does not match", () => {
			const answer = Answer.check(bird, 1, "Väärä nimi");

			expect(answer.isCorrect).toBeFalse();
			expect(answer.guessedName).toBe("Väärä nimi");
			expect(answer.imageIndex).toBe(1);
		});
	});

	describe("appendToStorage and getStoredAnswers", () => {
		it("should append answer to storage only once", () => {
			const answer = Answer.check(bird, 0, bird.nameFi);

			answer.appendToStorage();
			expect(getRawStoredAnswers()).toHaveLength(1);

			// Calling appendToStorage again should be idempotent
			answer.appendToStorage();
			expect(getRawStoredAnswers()).toHaveLength(1);
		});

		it("should deserialize stored answers back to Answer instances", () => {
			const answer = new Answer({
				bird,
				isCorrect: true,
				guessedName: bird.nameFi,
				imageIndex: 0,
				id: "custom-id",
				timestamp: 123456789,
				answerMode: "text",
			});

			answer.appendToStorage();

			const retrieved = Answer.getStoredAnswers();
			expect(retrieved).toHaveLength(1);

			const first = retrieved[0];
			expect(first.id).toBe("custom-id");
			expect(first.bird.id).toBe(bird.id);
			expect(first.isCorrect).toBeTrue();
			expect(first.guessedName).toBe(bird.nameFi);
			expect(first.timestamp).toBe(123456789);
			expect(first.answerMode).toBe("text");
			expect(first.imageIndex).toBe(0);
		});

		it("should ignore stored answers with unknown bird ID during deserialization", () => {
			const originalConsoleError = console.error;
			console.error = () => {};

			const key = "tirppatunnistin:answers:v1.0";
			localStorage.setItem(
				key,
				JSON.stringify([
					{
						id: "bad-bird-ans",
						isCorrect: true,
						timestamp: 1000,
						answerMode: "options",
						birdId: "non-existent-bird-id",
						correctName: "Unknown",
						guessedName: "Unknown",
						imageIndex: 0,
					},
				]),
			);

			const answers = Answer.getStoredAnswers();
			expect(answers).toEqual([]);

			console.error = originalConsoleError;
		});
	});
});
