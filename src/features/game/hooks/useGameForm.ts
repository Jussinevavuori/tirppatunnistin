import { useCallback, useState } from "react";
import { useWrapRef } from "#/hooks/useWrapRef";
import { Game, type GameAnswerMode } from "../utils/game";

export function useGameForm(args: { onGameStart: (game: Game) => void }) {
	const onGameStartRef = useWrapRef(args.onGameStart);

	const [answerMode, setAnswerMode] = useState<GameAnswerMode>("select");

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
