import { beforeEach, describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";
import { Answer } from "#/utils/answer";
import { getBirdWeight } from "#/utils/getBirdWeight";

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

describe("getBirdWeight", () => {
	const testBird = BIRDS[0];

	beforeEach(() => {
		setupMockLocalStorage();
		localStorage.clear();
	});

	it("should return weight of 10 when streak is 0", () => {
		expect(getBirdWeight(testBird)).toBe(10);
	});

	it("should decrease weight as streak increases", () => {
		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 1000,
		}).appendToStorage();

		// Streak = 1 -> 10 / (1 + 1) = 5
		expect(getBirdWeight(testBird)).toBe(5);
	});

	it("should cap penalty at streak of 4", () => {
		// Create 6 consecutive correct answers
		for (let i = 1; i <= 6; i++) {
			new Answer({
				bird: testBird,
				isCorrect: true,
				guessedName: testBird.nameFi,
				imageIndex: 0,
				timestamp: i * 1000,
			}).appendToStorage();
		}

		// Streak is 6, clamped to 4 -> 10 / (4 + 1) = 2
		expect(getBirdWeight(testBird)).toBe(2);
	});
});
