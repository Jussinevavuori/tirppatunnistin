import { useAtom } from "@xstate/store-react";
import { ArrowRightIcon } from "lucide-react";
import { answersAtom, birdsAtom, totalRoundsAtom } from "#/store/game.store";
import { getRandomBirds } from "#/utils/getRandomBird";
import { AnswerCard } from "./AnswerCard";
import { AppShell } from "./AppShell";
import { Box } from "./Box";
import { Button } from "./Button";

export function GameOverScreen() {
	const totalRounds = useAtom(totalRoundsAtom);
	const answers = useAtom(answersAtom);

	function exit() {
		birdsAtom.set([]);
		answersAtom.set([]);
	}

	function restart() {
		birdsAtom.set(getRandomBirds(totalRounds, { applyWeights: true }));
		answersAtom.set([]);
	}

	const correctCount = answers.filter((_) => _.isCorrect).length;
	const totalCount = answers.length;

	return (
		<AppShell
			className="flex flex-col items-center gap-16 py-32"
			footer={
				<Box>
					<Button onClick={exit}>Poistu</Button>
					<Button className="h-14 bg-emerald-500" onClick={restart}>
						Pelaa uudestaan!
						<ArrowRightIcon />
					</Button>
				</Box>
			}
		>
			<div className="flex flex-col gap-2 text-center">
				<p className="font-medium">Peli ohi!</p>
				<p className="font-semibold text-2xl">
					{correctCount === 0
						? "Et tunnistanut yhtään tirppaa!"
						: `Tunnistit ${correctCount} / ${totalCount} tirppaa!`}
				</p>
			</div>

			<div
				className="grid gap-4"
				style={{
					gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
				}}
			>
				{answers.map((answer, index) => (
					<AnswerCard key={answer.id} answer={answer} index={index} />
				))}
			</div>
		</AppShell>
	);
}
