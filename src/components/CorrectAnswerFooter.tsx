import { ArrowRightIcon, FlameIcon } from "lucide-react";
import type { Bird } from "#/data/birds";
import { getStreak } from "#/utils/streak";
import { Box } from "./Box";
import { Button } from "./Button";

export type CorrectAnswerFooterProps = {
	bird: Bird;
	onNext: () => void;
};

export function CorrectAnswerFooter(props: CorrectAnswerFooterProps) {
	const streak = getStreak(props.bird);

	return (
		<div className="flex flex-col gap-2">
			{streak >= 2 && (
				<Box className="flex-row items-center bg-amber-500">
					<div className="-skew-x-6 bg-amber-300 px-1 py-1">
						<FlameIcon className="size-5 text-orange-600" />
					</div>
					<p className="space-x-1 font-medium">
						<span>Sama tirppa oikein</span>
						<span className="inline-block -skew-x-6 bg-amber-300 px-1 text-orange-600">
							{streak}
						</span>
						<span>kertaa putkeen!</span>
					</p>
				</Box>
			)}

			<Box className="bg-emerald-500">
				<p className="space-x-1 font-semibold text-2xl">
					<span className="inline-block -skew-x-3 bg-emerald-100 px-1">
						{props.bird.nameFi}
					</span>{" "}
					on oikein!
				</p>

				<div className="flex flex-row items-center gap-2">
					<p>{props.bird.nameSv}</p>
					<p>·</p>
					<p className="italic">({props.bird.scientificName})</p>
				</div>

				<p className="py-4 font-medium">{props.bird.description.other}</p>

				<Button onClick={props.onNext}>
					Seuraava
					<ArrowRightIcon />
				</Button>
			</Box>
		</div>
	);
}
