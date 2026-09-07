import { Button } from "#/components/Button";
import type { Game } from "../utils/game";

export type GameScreenProps = {
	game: Game;
	onGameEnd: () => void;
};

export function GameScreen(props: GameScreenProps) {
	return (
		<div>
			<header className="flex items-center justify-between">
				<p>Kierros 1 / {props.game.totalRounds}</p>
				<Button
					className="cursor-pointer size-10 rounded-full"
					onClick={() => props.onGameEnd()}
				>
					X
				</Button>
			</header>
		</div>
	);
}
