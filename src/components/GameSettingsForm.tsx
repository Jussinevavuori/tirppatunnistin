import { useAtom } from "@xstate/store-react";
import cn from "cnfast";
import {
	AudioLinesIcon,
	BirdIcon,
	CameraIcon,
	FeatherIcon,
	LayoutGridIcon,
} from "lucide-react";
import {
	ANSWER_MODES,
	answerModeAtom,
	hideImageAtom,
	totalRoundsAtom,
} from "#/store/game.store";
import { Box } from "./Box";
import { Button } from "./Button";

export function GameSettingsForm() {
	const totalRounds = useAtom(totalRoundsAtom);
	const answerMode = useAtom(answerModeAtom);
	const hideImage = useAtom(hideImageAtom);

	return (
		<Box className="w-full items-stretch gap-8">
			<div className="flex flex-col items-center gap-4">
				<p className="font-medium">Miten tänään pelataan, tirppabongari?</p>
				<div className="flex w-full items-center gap-4">
					{ANSWER_MODES.map((option) => (
						<Button
							key={option}
							className={cn(
								"flex-1 gap-2",
								option === answerMode ? "bg-emerald-500" : "",
							)}
							onClick={() => answerModeAtom.set(option)}
						>
							{
								{
									options: <LayoutGridIcon className="size-4" />,
									text: <FeatherIcon className="size-4" />,
								}[option]
							}
							{{ options: "Vaihtoehdoilla", text: "Kirjoitan itse" }[option]}
						</Button>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center gap-4">
				<p className="font-medium">Ja montako tirppaa saisi olla?</p>
				<div className="flex w-full items-center gap-4">
					{[5, 10, 20].map((option, index) => (
						<Button
							key={option}
							className={cn(
								"flex-1 gap-2",
								option === totalRounds ? "bg-emerald-500" : "",
							)}
							onClick={() => totalRoundsAtom.set(option)}
						>
							<div className="flex items-center">
								{new Array(index + 1).fill(null).map((_, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: This is OK
									<BirdIcon key={i} className="size-4" />
								))}
							</div>
							{option} tirppaa
						</Button>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center gap-4">
				<p className="font-medium">Ja saisiko olla lisähaastetta?</p>
				<div className="flex w-full items-center gap-4">
					{[true, false].map((option) => (
						<Button
							key={String(option)}
							className={cn(
								"flex-1 gap-2",
								option === hideImage ? "bg-emerald-500" : "",
							)}
							onClick={() => hideImageAtom.set(option)}
						>
							{option ? (
								<CameraIcon className="size-4" />
							) : (
								<AudioLinesIcon className="size-4" />
							)}
							{option ? <p>Kuvien kanssa</p> : <p>Vain äänellä</p>}
						</Button>
					))}
				</div>
			</div>
		</Box>
	);
}
