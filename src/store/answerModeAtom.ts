import { createAtom } from "@xstate/store";

export const ANSWER_MODES = ["options", "text"] as const;

export type AnswerMode = (typeof ANSWER_MODES)[number];

export const ANSWER_MODE_LABELS = {
	options: "Vaihtoehdoilla",
	text: "Kirjoitan itse",
} as const satisfies Record<AnswerMode, string>;

export const answerModeAtom = createAtom<AnswerMode>("options");
