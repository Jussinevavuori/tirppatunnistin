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

export function HomeScreen() {
	const answerMode = useAtom(answerModeAtom);

	return (
		<AppShell
			className="flex flex-col items-center py-32 gap-16"
			footer={
				<Link to="/bird">
					<button
						className="font-semibold w-full border-2 px-4 h-14 flex items-center justify-center bg-emerald-500"
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
				className="border-2 h-10 w-10 flex items-center justify-center"
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
				<h1 className="font-bold tracking-tight text-5xl">Tirppatunnistin</h1>
				<p className="font-medium">Opi tunnistamaan Suomen tirpat!</p>
			</div>

			<div
				className="p-4 border-2 w-full flex items-center flex-col gap-4"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<p className="font-medium">Miten tänään pelataan, tirppabongari?</p>
				<div className="flex items-center gap-4 w-full">
					{ANSWER_MODES.map((mode) => (
						<button
							key={mode}
							className={cn(
								"flex-1 font-semibold w-full border-2 px-4 h-14 flex items-center justify-center",
								mode === answerMode ? "bg-emerald-500" : "bg-white",
							)}
							type="button"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							onClick={() => answerModeAtom.set(mode)}
						>
							{ANSWER_MODE_LABELS[mode]}
						</button>
					))}
				</div>
			</div>

			<a
				href="https://www.birdlife.fi/lintuharrastus/100lintulajia/opi-tuntemaan/"
				className="underline font-semibold text-blue-500"
				target="_blank"
				rel="noopener noreferrer"
			>
				Lähde: Birdlife
			</a>
		</AppShell>
	);
}
