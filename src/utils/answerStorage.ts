import z from "zod";
import { ANSWER_MODES } from "#/store/game.store";
import { getUniqueArrayByKey } from "./getUniqueArrayByKey";

/**
 * Key used to store answers in local storage
 */
const ANSWER_STORAGE_KEY = "tirppatunnistin:answers:v1.0";

/**
 * Schema for how an answer is stored
 */
const storedAnswerSchema = z.object({
	id: z.string(),
	isCorrect: z.boolean(),
	timestamp: z.number(),
	answerMode: z.enum(ANSWER_MODES),
	birdId: z.string(),
	correctName: z.string(),
	guessedName: z.string(),
	imageIndex: z.number(),
});
export type StoredAnswer = z.infer<typeof storedAnswerSchema>;

/**
 * Get all stored answers
 */
export function getStoredAnswers() {
	try {
		// Get data from local storage or return default empty array
		const value = localStorage.getItem(ANSWER_STORAGE_KEY);
		if (!value) return [];

		// Parse as JSON and as schema
		return storedAnswerSchema.array().parse(JSON.parse(value));
	} catch {
		// Delete faulty data
		localStorage.removeItem(ANSWER_STORAGE_KEY);
		return [];
	}
}

/**
 * Given an array of answers, append them to the stored answers in local storage.
 * Automatically dedupe by ID.
 */
export function appendAnswersToStorage(...answers: StoredAnswer[]) {
	const current = getStoredAnswers();
	const updated = [...current, ...answers];
	const deduped = getUniqueArrayByKey(updated, (answer) => answer.id);
	localStorage.setItem(ANSWER_STORAGE_KEY, JSON.stringify(deduped));
}
