import { useAtom } from "@xstate/store-react";
import { useMemo, useState } from "react";
import type { Bird } from "#/data/birds";
import { answerModeAtom } from "#/store/game.store";
import { Answer } from "#/utils/answer";
import { getRandomBirds } from "#/utils/getRandomBird";
import { Box } from "./Box";
import { Button } from "./Button";

export type AnswerFormProps = {
	bird: Bird;
	imageIndex: number;
	onAnswer: (answer: Answer) => void;
};

export function AnswerForm(props: AnswerFormProps) {
	const answerMode = useAtom(answerModeAtom);
	const [guess, setGuess] = useState("");
	const options = useMemo(
		() => getRandomBirds(4, { initial: [props.bird] }),
		[props.bird],
	);
	const [levenshteinHint, setLevenshteinHint] = useState<number | null>(null);

	switch (answerMode) {
		case "options": {
			return (
				<div className="grid grid-cols-2 gap-2">
					{options.map((option) => (
						<Button
							key={option.id}
							onClick={() =>
								props.onAnswer(
									Answer.check(props.bird, props.imageIndex, option.nameFi),
								)
							}
						>
							{option.nameFi}
						</Button>
					))}
				</div>
			);
		}

		case "text": {
			return (
				<div className="flex flex-col gap-2">
					<form
						onSubmit={(e) => {
							e.preventDefault();

							// Show hint if close enough
							const hintDistance = Answer.getHintDistance(props.bird, guess);
							if (hintDistance !== null) {
								return setLevenshteinHint(hintDistance);
							}

							// Correct or incorrect answer, not close
							props.onAnswer(Answer.check(props.bird, props.imageIndex, guess));
						}}
						className="flex items-center gap-2"
					>
						<input
							className="box-shadow h-10 flex-1 border-2 px-4 outline-none focus:bg-yellow-500"
							placeholder="Kirjoita tirpan nimi..."
							value={guess}
							onChange={(e) => setGuess(e.target.value)}
						/>
						<Button type="submit" disabled={!guess.trim()}>
							Lähetä
						</Button>
					</form>
					{levenshteinHint !== null && (
						<Box className="bg-red-500 py-2">
							Melkein! {levenshteinHint} kirjaimen päässä!
						</Box>
					)}
				</div>
			);
		}
	}
}
