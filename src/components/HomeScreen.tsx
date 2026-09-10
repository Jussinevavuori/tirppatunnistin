import { Link } from "@tanstack/react-router";
import { useAtom } from "@xstate/store-react";
import cn from "cnfast";
import { ArrowRightIcon, BirdIcon } from "lucide-react";
import {
	ANSWER_MODE_LABELS,
	ANSWER_MODES,
	answerModeAtom,
} from "#/store/answerModeAtom";
import { AppShell } from "./AppShell";
import { Button } from "./Button";

export function HomeScreen() {
	const answerMode = useAtom(answerModeAtom);

	return (
		<AppShell
			className="flex flex-col items-center gap-16 py-32"
			footer={
				<Link to="/bird">
					<button
						className="flex h-14 w-full items-center justify-center border-2 bg-emerald-500 px-4 font-semibold"
						type="button"
						style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
					>
						Aloita peli!
						<ArrowRightIcon />
					</button>
				</Link>
			}
		>
			<div
				className="flex h-10 w-10 items-center justify-center border-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<BirdIcon />
			</div>

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

			<div
				className="flex w-full flex-col items-center gap-4 border-2 p-4"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<p className="font-medium">Miten tänään pelataan, tirppabongari?</p>
				<div className="flex w-full items-center gap-4">
					{ANSWER_MODES.map((mode) => (
						<Button
							key={mode}
							className={cn(
								"h-14",
								mode === answerMode ? "bg-emerald-500" : "",
							)}
							onClick={() => answerModeAtom.set(mode)}
						>
							{ANSWER_MODE_LABELS[mode]}
						</Button>
					))}
				</div>
			</div>

			<a
				href="https://www.birdlife.fi/lintuharrastus/100lintulajia/opi-tuntemaan/"
				className="font-semibold text-blue-500 underline"
				target="_blank"
				rel="noopener noreferrer"
			>
				Lähde: Birdlife
			</a>
		</AppShell>
	);
}
