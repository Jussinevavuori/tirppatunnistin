import { createFileRoute } from "@tanstack/react-router";
import { useAtom } from "@xstate/store-react";
import { BirdScreen } from "#/components/BirdScreen";
import { GameOverScreen } from "#/components/GameOverScreen";
import { HomeScreen } from "#/components/HomeScreen";
import { answersAtom, birdsAtom } from "#/store/game.store";

export const Route = createFileRoute("/")({ component: Page });

function Page() {
	const birds = useAtom(birdsAtom);
	const answers = useAtom(answersAtom);
	const bird = birds[answers.length];

	// Game ongoing and index within bounds: Round screen
	if (bird) return <BirdScreen bird={bird} />;

	// Game ongoing, but index out of bounds: End screen
	if (birds.length > 0 && !bird) return <GameOverScreen />;

	// No game ongoing
	return <HomeScreen />;
}
