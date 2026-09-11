import { ArrowRightIcon } from "lucide-react";
import type { Bird } from "#/data/birds";
import { Box } from "./Box";
import { Button } from "./Button";
import { StreakDetails } from "./StreakDetails";

export type WrongAnswerFooterProps = {
	bird: Bird;
	onNext: () => void;
};

export function WrongAnswerFooter(props: WrongAnswerFooterProps) {
	return (
		<Box className="relative bg-rose-500">
			<div className="absolute top-0 right-2 -translate-y-1/2">
				<StreakDetails bird={props.bird} />
			</div>

			<p className="font-semibold text-2xl">Väärin!</p>

			<p className="space-x-1 py-2 font-medium">
				<span>Oikea vastaus on</span>
				<span className="inline-block -skew-x-3 bg-rose-100 px-1">
					{props.bird.nameFi}
				</span>
			</p>

			<div className="flex flex-row items-center gap-2">
				<p>{props.bird.nameSv}</p>
				<p>·</p>
				<p className="italic">({props.bird.scientificName})</p>
			</div>

			<Button onClick={props.onNext}>
				Seuraava
				<ArrowRightIcon />
			</Button>
		</Box>
	);
}
