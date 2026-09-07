import { useCallback, useState } from "react";
import { useWrapRef } from "#/hooks/useWrapRef";
import type { GameAnswerMode } from "../utils/answerMode";
import { Game } from "../utils/game";

/**
 * Hook for instantiating a new game.
 */
export function useGameForm(args: { onGameStart: (game: Game) => void }) {
	// Wrap in a stable ref for callbacks
	const onGameStartRef = useWrapRef(args.onGameStart);

	// Selected answer mode
	const [answerMode, setAnswerMode] = useState<GameAnswerMode>("select");

	// Start the game: Create Game instance from settings and invoke callback
	const startGame = useCallback(() => {
		const game = new Game({ answerMode });
		onGameStartRef.current(game);
	}, [answerMode, onGameStartRef]);

	return {
		answerMode,
		setAnswerMode,
		startGame,
	};
}
