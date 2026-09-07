import { useEffect, useMemo, useState } from "react";
import { birds } from "./birds";
import {
	levenshteinDistance,
	normalizeAnswer,
	pointsForCorrectAnswer,
	scoreForBird,
	selectBirdsForRound,
} from "./game-utils";
import { loadAttempts, saveAttempts } from "./storage";
import type { AnswerMode, Attempt, GameMode, Screen } from "./types";

export function useGame() {
	const [screen, setScreen] = useState<Screen>("menu");
	const [attempts, setAttempts] = useState<Attempt[]>([]);
	const [gameMode, setGameMode] = useState<GameMode>("image-name");
	const [answerMode, setAnswerMode] = useState<AnswerMode>("choices");
	const [round, setRound] = useState(0);
	const [gameBirds, setGameBirds] = useState(() => birds.slice(0, 10));
	const [guess, setGuess] = useState("");
	const [lastResult, setLastResult] = useState<Attempt | null>(null);

	useEffect(() => setAttempts(loadAttempts()), []);

	const scores = useMemo(
		() =>
			Object.fromEntries(
				birds.map((bird) => [bird.id, scoreForBird(bird.id, attempts)]),
			),
		[attempts],
	);
	const currentBird = gameBirds[round];
	const choices = useMemo(
		() =>
			currentBird
				? [
						currentBird,
						...birds
							.filter((bird) => bird.id !== currentBird.id)
							.sort((a, b) => (scores[a.id] ?? 0) - (scores[b.id] ?? 0))
							.slice(0, 3),
					]
				: [],
		[currentBird, scores],
	);
	const learned = (threshold: number) =>
		birds.filter((bird) => (scores[bird.id] ?? 0) >= threshold).length;

	const startGame = () => {
		setGameBirds(selectBirdsForRound(birds, attempts, 10));
		setRound(0);
		setGuess("");
		setScreen("game");
	};

	const submitGuess = (value = guess) => {
		if (!currentBird || !value.trim()) return;
		const correctAnswer = currentBird.name;
		const normalizedGuess = normalizeAnswer(value);
		const normalizedAnswer = normalizeAnswer(correctAnswer);
		const wasCorrect =
			normalizedGuess === "tirppa" ||
			normalizedGuess === normalizedAnswer ||
			levenshteinDistance(normalizedGuess, normalizedAnswer) <= 2;
		const previous = attempts
			.filter((attempt) => attempt.birdId === currentBird.id)
			.sort((a, b) => b.timestamp - a.timestamp)[0];
		const result: Attempt = {
			birdId: currentBird.id,
			timestamp: Date.now(),
			gameMode,
			answerMode,
			guess: value,
			correctAnswer,
			wasCorrect,
			points: wasCorrect ? pointsForCorrectAnswer(previous) : 0,
		};
		const nextAttempts = [...attempts, result];
		setAttempts(nextAttempts);
		saveAttempts(nextAttempts);
		setLastResult(result);
		setScreen("result");
	};

	const nextRound = () => {
		if (round >= 9) setScreen("summary");
		else {
			setRound((value) => value + 1);
			setGuess("");
			setScreen("game");
		}
	};

	return {
		screen,
		setScreen,
		attempts,
		gameMode,
		setGameMode,
		answerMode,
		setAnswerMode,
		round,
		currentBird,
		choices,
		guess,
		setGuess,
		lastResult,
		scores,
		learned,
		startGame,
		submitGuess,
		nextRound,
	};
}
