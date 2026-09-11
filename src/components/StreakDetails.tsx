import cn from "cnfast";
import { CheckIcon, FlameIcon, XIcon } from "lucide-react";
import type { Bird } from "#/data/birds";
import { getStreak } from "#/utils/streak";

export type StreakDetailsProps = {
	bird: Bird;
};

export function StreakDetails({ bird, border }: StreakDetailsProps) {
	const streak = getStreak(bird, "correct-answers-current-consecutive");
	const corrects = getStreak(bird, "correct-answers-total");
	const incorrects = getStreak(bird, "wrong-answers-total");

	return (
		<div className="flex items-center gap-1">
			<div
				className={cn(
					"flex -skew-x-6 items-center gap-1 border-2 pr-1.5 pl-0.5",
					streak > 0 ? "bg-amber-300" : "bg-gray-200",
				)}
			>
				<FlameIcon
					className={cn(
						"size-5",
						streak > 0 ? "text-amber-600" : "text-gray-600",
					)}
				/>
				<p className="font-medium">{streak}</p>
			</div>
			<div
				className={cn(
					"flex -skew-x-6 items-center gap-1 border-2 pr-1.5 pl-0.5",
					corrects > 0 ? "bg-emerald-300" : "bg-gray-200",
				)}
			>
				<CheckIcon
					className={cn(
						"size-5",
						corrects > 0 ? "text-emerald-600" : "text-gray-600",
					)}
				/>
				<p className="font-medium">{corrects}</p>
			</div>
			<div
				className={cn(
					"flex -skew-x-6 items-center gap-1 border-2 pr-1.5 pl-0.5",
					incorrects > 0 ? "bg-rose-300" : "bg-gray-200",
				)}
			>
				<XIcon
					className={cn(
						"size-5",
						incorrects > 0 ? "text-rose-600" : "text-gray-600",
					)}
				/>
				<p className="font-medium">{incorrects}</p>
			</div>
		</div>
	);
}
