import { Link } from "@tanstack/react-router";
import { useAtom } from "@xstate/store-react";
import { ArrowRightIcon, BirdIcon } from "lucide-react";
import { answersAtom, birdsAtom, totalRoundsAtom } from "#/store/game.store";
import { getRandomBirds } from "#/utils/getRandomBird";
import { AppShell } from "./AppShell";
import { Box } from "./Box";
import { Button } from "./Button";
import { GameSettingsForm } from "./GameSettingsForm";

export function HomeScreen() {
	const totalRounds = useAtom(totalRoundsAtom);

	function start() {
		birdsAtom.set(getRandomBirds(totalRounds, { applyWeights: true }));
		answersAtom.set([]);
	}

	return (
		<AppShell
			className="flex flex-col items-center gap-16 py-32"
			footer={
				<Button className="h-14 w-full bg-emerald-500" onClick={start}>
					Aloita peli!
					<ArrowRightIcon />
				</Button>
			}
		>
			<Box className="h-10 w-10 items-center justify-center p-0">
				<BirdIcon />
			</Box>

			<div className="flex flex-col gap-2 text-center">
				<a
					href="https://www.jussinevavuori.com"
					className="font-semibold"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jussi Nevavuoren
				</a>
				<h1 className="font-bold text-5xl tracking-tight">Tirppatunnistin</h1>
				<p className="font-medium">Opi tunnistamaan Suomen tirpat!</p>
			</div>

			<GameSettingsForm />

			<div className="flex flex-row items-center justify-center gap-2">
				<a
					href="https://www.birdlife.fi/lintuharrastus/100lintulajia/opi-tuntemaan/"
					className="font-semibold text-blue-500 underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lähde: Birdlife
				</a>
				<span>·</span>
				<Link to="/browse" className="font-semibold text-blue-500 underline">
					Selaa tirppoja
				</Link>
			</div>
		</AppShell>
	);
}
