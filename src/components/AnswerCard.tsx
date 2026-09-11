import cn from "cnfast";
import { BirdIcon } from "lucide-react";
import type { Answer } from "#/utils/answer";
import { Box } from "./Box";
import { StreakDetails } from "./StreakDetails";

export type AnswerCardProps = {
	answer: Answer;
	index: number;
};

export function AnswerCard({ answer, index }: AnswerCardProps) {
	return (
		<Box className="gap-0 p-0">
			<div className="flex items-center justify-between gap-2 bg-white p-2">
				<div className="flex items-center gap-1 bg-white">
					<BirdIcon className="size-5" />
					<p className="font-medium">Tirppa {index + 1}</p>
				</div>
			</div>
			<div className="relative flex border-y-2">
				<div className="absolute right-2 bottom-0 z-10 translate-y-2">
					<StreakDetails bird={answer.bird} />
				</div>
				<img
					src={answer.bird.imageUrls[answer.imageIndex]}
					alt={answer.bird.nameFi}
					className="aspect-square w-full object-cover"
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
