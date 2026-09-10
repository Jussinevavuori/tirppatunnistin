import cn from "cnfast";
import { BirdIcon, FlameIcon } from "lucide-react";
import type { Answer } from "#/utils/answer";
import { getStreak } from "#/utils/streak";
import { Box } from "./Box";

export type AnswerCardProps = {
	answer: Answer;
	index: number;
};

export function AnswerCard({ answer, index }: AnswerCardProps) {
	const streak = getStreak(answer.bird);

	return (
		<Box className="gap-0 p-0">
			<div className="flex items-center justify-between gap-2 bg-white p-2">
				<div className="flex items-center gap-1 bg-white">
					<BirdIcon className="size-5" />
					<p className="font-medium">Tirppa {index + 1}</p>
				</div>

				{streak > 1 ? (
					<div className="flex -skew-x-6 items-center gap-1 bg-amber-300 px-1 py-1">
						<FlameIcon className="size-5 text-orange-600" />
						<p className="font-medium">{streak}</p>
					</div>
				) : streak === 1 ? (
					<div className="flex items-center gap-1">
						<FlameIcon className="size-5 text-emerald-500" />
						<p className="font-medium text-emerald-500">{streak}</p>
					</div>
				) : (
					<div className="flex items-center gap-1">
						<FlameIcon className="size-5 text-gray-500" />
						<p className="font-medium text-gray-500">{streak}</p>
					</div>
				)}
			</div>
			<div className="flex flex-1 flex-col items-stretch justify-center border-y-2 bg-black">
				<img
					src={answer.bird.imageUrls[answer.imageIndex]}
					alt={answer.bird.nameFi}
				/>
			</div>
			<div
				className={cn(
					"p-2",
					answer.isCorrect ? "bg-emerald-500" : "bg-rose-500",
				)}
			>
				<p className="font-semibold text-xl">{answer.bird.nameFi}</p>
				{answer.isCorrect ? (
					<p>Oikein!</p>
				) : (
					<p className="font-medium">Ei {answer.guessedName}</p>
				)}
			</div>
		</Box>
	);
}
