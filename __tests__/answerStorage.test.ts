import { beforeEach, describe, expect, it } from "bun:test";
import {
	appendAnswersToStorage,
	getStoredAnswers,
	type StoredAnswer,
} from "#/utils/answerStorage";

const ANSWER_STORAGE_KEY = "tirppatunnistin:answers:v1.0";

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

describe("answerStorage", () => {
	beforeEach(() => {
		setupMockLocalStorage();
		localStorage.clear();
	});

	const validAnswer: StoredAnswer = {
		id: "ans-1",
		isCorrect: true,
		timestamp: 1600000000000,
		answerMode: "options",
		birdId: "talitiainen",
		correctName: "Talitiainen",
		guessedName: "Talitiainen",
		imageIndex: 0,
	};

	it("should return empty array when local storage has no stored answers", () => {
		expect(getStoredAnswers()).toEqual([]);
	});

	it("should parse and return stored answers from local storage", () => {
		localStorage.setItem(ANSWER_STORAGE_KEY, JSON.stringify([validAnswer]));
		expect(getStoredAnswers()).toEqual([validAnswer]);
	});

	it("should clean up invalid JSON from local storage and return empty array", () => {
		localStorage.setItem(ANSWER_STORAGE_KEY, "{ invalid json }");
		expect(getStoredAnswers()).toEqual([]);
		expect(localStorage.getItem(ANSWER_STORAGE_KEY)).toBeNull();
	});

	it("should clean up schema-invalid data from local storage and return empty array", () => {
		localStorage.setItem(
			ANSWER_STORAGE_KEY,
			JSON.stringify([{ invalid: "data" }]),
		);
		expect(getStoredAnswers()).toEqual([]);
		expect(localStorage.getItem(ANSWER_STORAGE_KEY)).toBeNull();
	});

	it("should append answers to storage and deduplicate by id", () => {
		appendAnswersToStorage(validAnswer);
		expect(getStoredAnswers()).toHaveLength(1);

		// Append same answer again with duplicate ID
		appendAnswersToStorage(validAnswer);
		expect(getStoredAnswers()).toHaveLength(1);

		// Append another answer with a new ID
		const secondAnswer: StoredAnswer = {
			...validAnswer,
			id: "ans-2",
			birdId: "sinitiainen",
			correctName: "Sinitiainen",
			guessedName: "Sinitiainen",
		};
		appendAnswersToStorage(secondAnswer);

		const stored = getStoredAnswers();
		expect(stored).toHaveLength(2);
		expect(stored.map((a) => a.id)).toEqual(["ans-1", "ans-2"]);
	});
});
