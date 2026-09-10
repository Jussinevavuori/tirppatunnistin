import { beforeEach, describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";
import { Answer } from "#/utils/answer";
import { getStreak } from "#/utils/streak";

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

describe("getStreak", () => {
	const testBird = BIRDS[0];

	beforeEach(() => {
		setupMockLocalStorage();
		localStorage.clear();
	});

	it("should return 0 when there are no stored answers for the bird", () => {
		expect(getStreak(testBird)).toBe(0);
		expect(getStreak(testBird.id)).toBe(0);
	});

	it("should calculate streak for consecutive correct answers", () => {
		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 1000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 2000,
		}).appendToStorage();

		expect(getStreak(testBird)).toBe(2);
		expect(getStreak(testBird.id)).toBe(2);
	});

	it("should reset streak to 0 on a wrong answer", () => {
		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 1000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: false,
			guessedName: "wrong",
			imageIndex: 0,
			timestamp: 2000,
		}).appendToStorage();

		expect(getStreak(testBird)).toBe(0);
	});

	it("should count correct answers after a reset", () => {
		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 1000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: false,
			guessedName: "wrong",
			imageIndex: 0,
			timestamp: 2000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 3000,
		}).appendToStorage();

		expect(getStreak(testBird)).toBe(1);
	});

	it("should sort answers chronologically before computing streak", () => {
		// Appended out of chronological order
		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 3000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: false,
			guessedName: "wrong",
			imageIndex: 0,
			timestamp: 2000,
		}).appendToStorage();

		new Answer({
			bird: testBird,
			isCorrect: true,
			guessedName: testBird.nameFi,
			imageIndex: 0,
			timestamp: 1000,
		}).appendToStorage();

		// Chronological order: t=1000 (correct), t=2000 (wrong -> streak reset to 0), t=3000 (correct -> streak 1)
		expect(getStreak(testBird)).toBe(1);
	});
});
