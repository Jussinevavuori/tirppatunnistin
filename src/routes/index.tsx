import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "#/components/AppShell";
import { GameScreen } from "#/features/game/components/GameScreen";
import { MainScreen } from "#/features/game/components/MainScreen";
import type { Game } from "#/features/game/utils/game";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [game, setGame] = useState<Game | null>(null);

	return (
		<AppShell>
			{game ? (
				<GameScreen game={game} onGameEnd={() => setGame(null)} />
			) : (
				<MainScreen onGameStart={(newGame) => setGame(newGame)} />
			)}
		</AppShell>
	);
}
