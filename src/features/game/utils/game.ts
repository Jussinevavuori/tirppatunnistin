import { clamp } from "#/utils/clamp";
import type { GameAnswerMode } from "./answerMode";

/**
 * Immutable game class.
 */
export class Game {
	/**
	 * ID of game. Can not be changed after creation.
	 */
	public readonly id: string;

	/**
	 * Answer mode of game.
	 */
	public readonly answerMode: GameAnswerMode;

	/**
	 * Total rounds in game.
	 */
	public readonly totalRounds: number;

	/**
	 * Current game round.
	 */
	public readonly currentRoundIndex: number;

	constructor(args: {
		// Required args
		answerMode: GameAnswerMode;
		// Optional args
		totalRounds?: number;
		currentRoundIndex?: number;
		id?: string;
	}) {
		// Required
		this.answerMode = args.answerMode;

		// Optional with defaults
		this.id = args.id ?? crypto.randomUUID();
		this.totalRounds = args.totalRounds ?? 10;
		this.currentRoundIndex = clamp(
			Math.round(args.currentRoundIndex || 0),
			0,
			this.totalRounds,
		);
	}

	/**
	 * Immutable updater function.
	 */
	public update(args: {
		answerMode?: GameAnswerMode;
		totalRounds?: number;
		currentRoundIndex?: number;
	}) {
		return new Game({
			id: this.id,
			answerMode: args.answerMode ?? this.answerMode,
			totalRounds: args.totalRounds ?? this.totalRounds,
			currentRoundIndex: args.currentRoundIndex ?? this.currentRoundIndex,
		});
	}
}
