import { createFileRoute } from "@tanstack/react-router";
import { birds } from "../features/game/birds";
import {
	AppShell,
	MenuScreen,
	QuizScreen,
	ResultScreen,
	SummaryScreen,
} from "../features/game/components";
import { useGame } from "../features/game/use-game";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const game = useGame();

	return (
		<AppShell>
			{game.screen === "menu" && (
				<MenuScreen
					gameMode={game.gameMode}
					answerMode={game.answerMode}
					learned={game.learned}
					total={birds.length}
					onStart={game.startGame}
					onGameModeChange={game.setGameMode}
					onAnswerModeChange={game.setAnswerMode}
				/>
			)}
			{game.screen === "game" && game.currentBird && (
				<QuizScreen
					bird={game.currentBird}
					choices={game.choices}
					round={game.round}
					score={game.scores[game.currentBird.id] ?? 0}
					gameMode={game.gameMode}
					answerMode={game.answerMode}
					guess={game.guess}
					onGuessChange={game.setGuess}
					onSubmit={game.submitGuess}
					onBack={() => game.setScreen("menu")}
				/>
			)}
			{game.screen === "result" && game.currentBird && game.lastResult && (
				<ResultScreen
					bird={game.currentBird}
					result={game.lastResult}
					round={game.round}
					onNext={game.nextRound}
					onBack={() => game.setScreen("menu")}
				/>
			)}
			{game.screen === "summary" && (
				<SummaryScreen
					attempts={game.attempts.slice(-10)}
					onAgain={game.startGame}
					onEnd={() => game.setScreen("menu")}
				/>
			)}
		</AppShell>
	);
}
