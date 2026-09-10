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
	const [streak, setStreak] = useState(0); // TODO

	function reset() {
		setIsCorrect(null);
		setBird(getRandomBird());
	}

	return (
		<AppShell
			className="gap-4 flex flex-col"
			header={
				<Box>
					<div className="flex items-center gap-2 justify-between">
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
							<Box className="bg-amber-500 flex-row items-center">
								<div className="bg-amber-300 -skew-x-6 px-1 py-1">
									<FlameIcon className="size-5 text-orange-600" />
								</div>
								<p className="font-medium space-x-1">
									<span>Sama tirppa oikein</span>
									<span className="bg-amber-300 text-orange-600 -skew-x-6 px-1 inline-block">
										{streak}
									</span>
									<span>kertaa putkeen!</span>
								</p>
							</Box>
						)}

						<Box className="bg-emerald-500">
							<p className="font-semibold text-2xl space-x-1">
								<span className="bg-emerald-100 -skew-x-3 px-1 inline-block">
									{bird.nameFi}
								</span>{" "}
								on oikein!
							</p>

							<p className="font-medium py-4">{bird.description.other}</p>

							<Button onClick={reset}>
								Seuraava
								<ArrowRightIcon />
							</Button>
						</Box>
					</div>
				) : isCorrect === false ? (
					<Box className="bg-rose-500">
						<p className="font-semibold text-2xl">Väärin!</p>

						<p className="font-medium space-x-1 py-2">
							<span>Oikea vastaus on</span>
							<span className="bg-rose-100 -skew-x-3 px-1 inline-block">
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
						<h1 className="font-bold tracking-tight text-xl text-center">
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
					<h1 className="font-bold tracking-tight text-4xl">{bird.nameFi}</h1>
					<div className="flex items-center gap-2 flex-row">
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
					className="w-full rounded-none bg-white! border-2"
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
