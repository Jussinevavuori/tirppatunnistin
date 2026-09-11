import { useAtom } from "@xstate/store-react";
import { BirdIcon, XIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { Bird } from "#/data/birds";
import {
	answersAtom,
	birdsAtom,
	hideImageAtom,
	totalRoundsAtom,
} from "#/store/game.store";
import type { Answer } from "#/utils/answer";
import { AnswerFormFooter } from "./AnswerFormFooter";
import { AppShell } from "./AppShell";
import { BirdDetails } from "./BirdDetails";
import { Box } from "./Box";
import { Button } from "./Button";
import { CorrectAnswerFooter } from "./CorrectAnswerFooter";
import { WrongAnswerFooter } from "./WrongAnswerFooter";

export type GameScreenProps = {
	bird: Bird;
};

export function GameScreen({ bird }: GameScreenProps) {
	const totalRounds = useAtom(totalRoundsAtom);
	const answers = useAtom(answersAtom);
	const hideImage = useAtom(hideImageAtom);
	const [answer, setAnswer] = useState<null | Answer>(null);

	const [imageMode, setImageMode] = useState<"cover" | "contain">("cover");

	// Get a random image index for each bird
	const imageIndex = useMemo(
		() => Math.floor(Math.random() * bird.imageUrls.length),
		[bird],
	);

	function handleNext() {
		if (!answer) return;
		setAnswer(null);
		answersAtom.set([...answers, answer]);
	}

	function handleAnswer(answer: Answer) {
		answer.appendToStorage();
		setAnswer(answer);
	}

	function handleExitGame() {
		birdsAtom.set([]);
	}

	return (
		<AppShell
			className="flex flex-col gap-4"
			header={
				<Box>
					<div className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<BirdIcon />
							<p className="font-semibold">
								Tirppa {answers.length + 1} / {totalRounds}
							</p>
						</div>

						<Button className="w-10 px-0" onClick={handleExitGame}>
							<XIcon />
						</Button>
					</div>
				</Box>
			}
			footer={
				!answer ? (
					<AnswerFormFooter
						bird={bird}
						imageIndex={imageIndex}
						onAnswer={handleAnswer}
					/>
				) : answer.isCorrect ? (
					<CorrectAnswerFooter bird={bird} onNext={handleNext} />
				) : (
					<WrongAnswerFooter bird={bird} onNext={handleNext} />
				)
			}
		>
			{!hideImage && (
				<button
					type="button"
					className="box-shadow aspect-square w-full border-2 bg-black"
					onClick={() =>
						setImageMode(imageMode === "cover" ? "contain" : "cover")
					}
				>
					<img
						src={bird.imageUrls[imageIndex]}
						alt={bird.nameFi}
						className="size-full"
						style={{ objectFit: imageMode }}
					/>
				</button>
			)}

			{answer ? (
				<div className="flex flex-col gap-2 py-8">
					<h1 className="font-bold text-4xl tracking-tight">{bird.nameFi}</h1>
					<div className="flex flex-row items-center gap-2">
						<p>{bird.nameSv}</p>
						<p>·</p>
						<p className="italic">({bird.scientificName})</p>
					</div>
				</div>
			) : null}

			<BirdDetails bird={bird} />
		</AppShell>
	);
}
