import { AppTitle } from "#/components/AppTitle";
import type { Game } from "../utils/game";
import { GameForm } from "./GameForm";

export type MainScreenProps = {
	onGameStart: (game: Game) => void;
};

export function MainScreen(props: MainScreenProps) {
	return (
		<div className="flex gap-8 flex-col items-stretch">
			<AppTitle />

			<p className="text-center">Opi tunnistamaan Suomen yleisimmät tirpat!</p>

			<hr className="opacity-10" />

			<GameForm onGameStart={props.onGameStart} />
		</div>
	);
}
