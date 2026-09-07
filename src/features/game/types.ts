export type GameMode =
	| "image-name"
	| "name-image"
	| "voice-name"
	| "name-voice";
export type AnswerMode = "choices" | "text";
export type Screen = "menu" | "game" | "result" | "summary";

export type Bird = {
	id: string;
	name: string;
	englishName: string;
	scientificName: string;
	image: string;
	wikipedia: string;
	wingspan: string;
	wingspanCm: number;
	facts: string[];
	audio?: string;
};

export type Attempt = {
	birdId: string;
	timestamp: number;
	gameMode: GameMode;
	answerMode: AnswerMode;
	guess: string;
	correctAnswer: string;
	wasCorrect: boolean;
	points: number;
};
