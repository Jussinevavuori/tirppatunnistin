import { Button } from "#/components/Button";
import { useGameForm } from "../hooks/useGameForm";
import {
	GAME_ANSWER_MODE_LABELS,
	GAME_ANSWER_MODES,
} from "../utils/answerMode";
import type { Game } from "../utils/game";

export type GameFormProps = {
	onGameStart: (game: Game) => void;
};

export function GameForm(props: GameFormProps) {
	const form = useGameForm({ onGameStart: props.onGameStart });

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h2 className="text-center">Mites tirpat tänään tunnistettaisiin?</h2>
				<div className="flex gap-2 flex-row">
					{GAME_ANSWER_MODES.map((mode) => (
						<Button
							key={mode}
							className="flex-1 shrink-0"
							onClick={() => form.setAnswerMode(mode)}
							variant={form.answerMode === mode ? "primary" : "secondary"}
						>
							{GAME_ANSWER_MODE_LABELS[mode]}
						</Button>
					))}
				</div>
			</div>

			<Button onClick={() => form.startGame()}>Aloita peli</Button>
		</div>
	);
}
