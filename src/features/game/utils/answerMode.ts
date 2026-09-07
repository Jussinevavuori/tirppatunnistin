/**
 * Possible answer modes for games.
 */
export const GAME_ANSWER_MODES = ["select", "write"] as const;

/**
 * Type of an answer mode.
 */
export type GameAnswerMode = (typeof GAME_ANSWER_MODES)[number];

/**
 * Pre-defined labels for the answer modes.
 */
export const GAME_ANSWER_MODE_LABELS: Record<GameAnswerMode, string> = {
	select: "Vaihtoehdot",
	write: "Kirjoita",
};
