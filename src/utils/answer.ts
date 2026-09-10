import { BIRDS, type Bird } from "#/data/birds";
import { type AnswerMode, answerModeAtom } from "#/store/game.store";
import {
	appendAnswersToStorage,
	getStoredAnswers,
	type StoredAnswer,
} from "./answerStorage";
import { LEVENSHTEIN_HINT_THRESHOLD } from "./consts";
import { getLevenshteinDistance } from "./getLevenshteinDistance";

export class Answer {
	/** Was considered correct? */
	public readonly isCorrect: boolean;

	/** Either raw text input or the selected option from a list */
	public readonly guessedName: string;

	/** Which bird was being guessed */
	public readonly bird: Bird;

	/** Timestamp */
	public readonly timestamp: number;

	/** Answer mode */
	public readonly answerMode: AnswerMode;

	/** Unique ID */
	public readonly id: string;

	/** Ensure only appended once */
	private isAppendedToStorage: boolean;

	/** Used image index */
	public readonly imageIndex: number;

	constructor(args: {
		bird: Bird;
		isCorrect: boolean;
		guessedName: string;
		imageIndex: number;
		timestamp?: number;
		answerMode?: AnswerMode;
		id?: string;
		isAppendedToStorage?: boolean;
	}) {
		this.id = args.id ?? crypto.randomUUID();
		this.bird = args.bird;
		this.isCorrect = args.isCorrect;
		this.guessedName = args.guessedName;
		this.timestamp = args.timestamp ?? Date.now();
		this.answerMode = args.answerMode ?? answerModeAtom.get();
		this.imageIndex = args.imageIndex;
		this.isAppendedToStorage = args.isAppendedToStorage ?? false;
	}

	/** Normalize a guess */
	public static normalize(guess: string): string {
		return guess.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	}

	/** Check if an answer is close enough for a hint; if so, return the distance */
	public static getHintDistance(bird: Bird, guess: string): number | null {
		const d = getLevenshteinDistance(
			Answer.normalize(guess),
			Answer.normalize(bird.nameFi),
		);

		if (d === 0) return null;
		if (d >= LEVENSHTEIN_HINT_THRESHOLD) return null;

		return d;
	}

	/** Check if an answer is correct */
	public static check(bird: Bird, imageIndex: number, guess: string) {
		return new Answer({
			isCorrect: Answer.normalize(guess) === Answer.normalize(bird.nameFi),
			guessedName: guess,
			bird,
			imageIndex,
		});
	}

	/** Serialize for storage */
	private serialize(): StoredAnswer {
		return {
			id: this.id,
			isCorrect: this.isCorrect,
			timestamp: this.timestamp,
			answerMode: this.answerMode,
			birdId: this.bird.id,
			correctName: this.bird.nameFi,
			guessedName: this.guessedName,
			imageIndex: this.imageIndex,
		};
	}

	/** Append to storage */
	public appendToStorage() {
		if (this.isAppendedToStorage) return;
		this.isAppendedToStorage = true;
		appendAnswersToStorage(this.serialize());
	}

	/** Deserialize a stored answer */
	private static deserialize(storedAnswer: StoredAnswer): Answer | null {
		try {
			// Require bird
			const bird = BIRDS.find((b) => b.id === storedAnswer.birdId);
			if (!bird) {
				throw new Error(`Bird with ID ${storedAnswer.birdId} not found`);
			}

			// Construct answer
			return new Answer({
				bird,
				id: storedAnswer.id,
				imageIndex: storedAnswer.imageIndex,
				isCorrect: storedAnswer.isCorrect,
				guessedName: storedAnswer.guessedName,
				timestamp: storedAnswer.timestamp,
				answerMode: storedAnswer.answerMode,
				isAppendedToStorage: true,
			});
		} catch (error) {
			console.error("Failed to deserialize stored answer:", error);
			return null;
		}
	}

	/** Get stored answers */
	public static getStoredAnswers(): Answer[] {
		const answers: Answer[] = [];
		for (const stored of getStoredAnswers()) {
			const answer = Answer.deserialize(stored);
			if (answer) answers.push(answer);
		}
		return answers;
	}
}
