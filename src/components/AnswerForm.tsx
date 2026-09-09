import { useAtom } from "@xstate/store-react";
import { useMemo, useState } from "react";
import { BIRDS, type Bird } from "#/data/birds";
import { answerModeAtom } from "#/store/answerModeAtom";

export type AnswerFormProps = {
	bird: Bird;
	onAnswer: (guess: { isCorrect: boolean; guessedName: string }) => void;
};

const TOTAL_OPTIONS = 4;

function getRandomBird(): Bird {
	return BIRDS[Math.floor(Math.random() * BIRDS.length)];
}

function shuffle<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function getOptions(correctBird: Bird): Bird[] {
	const options = [correctBird];
	while (options.length < TOTAL_OPTIONS) {
		const randomBird = getRandomBird();
		if (!options.includes(randomBird)) {
			options.push(randomBird);
		}
	}
	return shuffle(options);
}

function levenshteinDistance(a: string, b: string): number {
	const matrix: number[][] = [];
	for (let i = 0; i <= b.length; i++) matrix[i] = [i];
	for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
	for (let i = 1; i <= b.length; i++) {
		for (let j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1,
					matrix[i][j - 1] + 1,
					matrix[i - 1][j] + 1,
				);
			}
		}
	}
	return matrix[b.length][a.length];
}

function normalizeTextGuess(text: string): string {
	return text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

export function AnswerForm(props: AnswerFormProps) {
	const answerMode = useAtom(answerModeAtom);
	const options = useMemo(() => getOptions(props.bird), [props.bird]);
	const [guess, setGuess] = useState("");
	const [levenshteinHint, setLevenshteinHint] = useState<number | null>(null);

	switch (answerMode) {
		case "options": {
			return (
				<div className="grid grid-cols-2 gap-2">
					{options.map((option) => (
						<button
							key={option.id}
							className="bg-white font-semibold border-2 px-4 h-10"
							type="button"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							onClick={() =>
								props.onAnswer({
									isCorrect: option.id === props.bird.id,
									guessedName: option.nameFi,
								})
							}
						>
							{option.nameFi}
						</button>
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

							const distance = levenshteinDistance(
								normalizeTextGuess(guess),
								normalizeTextGuess(props.bird.nameFi),
							);

							// On distance <= 2, give hint
							if (distance > 0 && distance <= 2) {
								setLevenshteinHint(distance);
							} else {
								props.onAnswer({
									guessedName: guess,
									isCorrect: distance === 0,
								});
							}
						}}
						className="flex items-center gap-2"
					>
						<input
							className="h-10 border-2 flex-1 px-4 outline-none focus:bg-yellow-500"
							placeholder="Kirjoita tirpan nimi..."
							value={guess}
							onChange={(e) => setGuess(e.target.value)}
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
						/>
						<button
							className="font-semibold border-2 px-4 h-10"
							type="submit"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							disabled={!guess.trim()}
						>
							Lähetä
						</button>
					</form>
					{levenshteinHint !== null && (
						<div
							className="bg-red-500 px-4 py-2 border-2"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
						>
							Melkein! {levenshteinHint} kirjaimen päässä!
						</div>
					)}
				</div>
			);
		}
	}
}
