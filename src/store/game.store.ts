import { createAtom } from "@xstate/store";
import type { Bird } from "#/data/birds";
import type { Answer } from "#/utils/answer";

/**
 * Allowed answer modes
 */
export const ANSWER_MODES = ["options", "text"] as const;
export type AnswerMode = (typeof ANSWER_MODES)[number];

/**
 * Currently selected answer mode
 */
export const answerModeAtom = createAtom<AnswerMode>("options");

/**
 * Whether to hide or show image?
 */
export const hideImageAtom = createAtom<boolean>(false);

/**
 * All answers on current round. Matches to the birds by index.
 */
export const answersAtom = createAtom<Answer[]>([]);

/**
 * All birds in current game. If empty, no game is active.
 */
export const birdsAtom = createAtom<Bird[]>([]);

/**
 * How many birds are on each round?
 */
export const totalRoundsAtom = createAtom<number>(10);
