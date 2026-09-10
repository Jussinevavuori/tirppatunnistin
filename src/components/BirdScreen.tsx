import { Link } from "@tanstack/react-router";
import {
	ArrowRightIcon,
	AudioLinesIcon,
	BinocularsIcon,
	BirdIcon,
	FlameIcon,
	MapIcon,
	RulerDimensionLine,
	XIcon,
} from "lucide-react";
import { useState } from "react";
import { BIRDS } from "#/data/birds";
import { AnswerForm } from "./AnswerForm";
import { AppShell } from "./AppShell";
import { Box } from "./Box";
import { Button } from "./Button";

function getRandomBird() {
	return BIRDS[Math.floor(Math.random() * BIRDS.length)];
}

export function BirdScreen() {
	const [guesses, setGuesses] = useState<
		{ isCorrect: boolean; guessedName: string }[]
	>([]);
	const [bird, setBird] = useState(getRandomBird);
	const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
	const [streak, _setStreak] = useState(0); // TODO

	function reset() {
		setIsCorrect(null);
		setBird(getRandomBird());
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
								Tirppa {guesses.length + (isCorrect === null ? 1 : 0)}
							</p>
						</div>

						<Link to="/">
							<Button className="w-10 px-0">
								<XIcon />
							</Button>
						</Link>
					</div>
				</Box>
			}
			footer={
				isCorrect === true ? (
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
									{bird.nameFi}
								</span>{" "}
								on oikein!
							</p>

							<p className="py-4 font-medium">{bird.description.other}</p>

							<Button onClick={reset}>
								Seuraava
								<ArrowRightIcon />
							</Button>
						</Box>
					</div>
				) : isCorrect === false ? (
					<Box className="bg-rose-500">
						<p className="font-semibold text-2xl">Väärin!</p>

						<p className="space-x-1 py-2 font-medium">
							<span>Oikea vastaus on</span>
							<span className="inline-block -skew-x-3 bg-rose-100 px-1">
								{bird.nameFi}
							</span>
						</p>

						<Button onClick={reset}>
							Seuraava
							<ArrowRightIcon />
						</Button>
					</Box>
				) : (
					<Box>
						<h1 className="text-center font-bold text-xl tracking-tight">
							Ken on tämä tirppa?
						</h1>

						<AnswerForm
							bird={bird}
							onAnswer={({ isCorrect, guessedName }) => {
								setIsCorrect(isCorrect);
								setGuesses([...guesses, { isCorrect, guessedName }]);
							}}
						/>
					</Box>
				)
			}
		>
			<img
				src={bird.imageUrl}
				alt={bird.nameFi}
				className="w-full border-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			/>

			{isCorrect !== null ? (
				<div className="flex flex-col gap-2 py-8">
					<h1 className="font-bold text-4xl tracking-tight">{bird.nameFi}</h1>
					<div className="flex flex-row items-center gap-2">
						<p>{bird.nameSv}</p>
						<p>·</p>
						<p className="italic">({bird.scientificName})</p>
					</div>
				</div>
			) : null}

			<Box>
				<div className="flex items-center gap-2">
					<AudioLinesIcon />
					<p className="font-medium">Ääni</p>
				</div>
				<p>{bird.description.sound}</p>

				{/* biome-ignore lint/a11y/useMediaCaption: Not available */}
				<audio
					key={bird.audioUrl}
					controls
					className="w-full rounded-none border-2 bg-white!"
					style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
				>
					<source src={bird.audioUrl} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
			</Box>
			<Box>
				<div className="flex items-center gap-2">
					<BinocularsIcon />
					<p className="font-medium">Ulkonäkö</p>
				</div>
				<p>{bird.description.appearance}</p>
			</Box>
			<Box>
				<div className="flex items-center gap-2">
					<RulerDimensionLine />
					<p>Koko</p>
				</div>
				<p>{bird.description.size}</p>
			</Box>
			<Box>
				<div className="flex items-center gap-2">
					<MapIcon />
					<p className="font-medium">Sijainti</p>
				</div>
				<p>{bird.description.location}</p>
			</Box>
		</AppShell>
	);
}
