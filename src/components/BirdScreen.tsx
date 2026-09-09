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

	return (
		<AppShell
			className="gap-4 flex flex-col"
			header={
				<div
					className="p-4 flex flex-col gap-2 border-2 bg-white"
					style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
				>
					<div className="flex items-center gap-2 justify-between">
						<div className="flex items-center gap-2">
							<BirdIcon />
							<p className="font-semibold">
								Tirppa {guesses.length + (isCorrect === null ? 1 : 0)}
							</p>
						</div>

						<Link to="/">
							<button
								className="font-semibold border-2 w-10 h-10 flex items-center justify-center"
								type="button"
								style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							>
								<XIcon />
							</button>
						</Link>
					</div>
				</div>
			}
			footer={
				isCorrect === true ? (
					<div className="flex flex-col gap-2">
						{streak >= 2 && (
							<div
								className="p-4 flex flex-col gap-2 border-2 bg-amber-500"
								style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							>
								<div className="flex items-center gap-2">
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
								</div>
							</div>
						)}

						<div
							className="p-4 flex flex-col gap-2 border-2 bg-emerald-500"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
						>
							<p className="font-semibold text-2xl space-x-1">
								<span className="bg-emerald-100 -skew-x-3 px-1 inline-block">
									{bird.nameFi}
								</span>{" "}
								on oikein!
							</p>

							<p className="font-medium py-4">{bird.description.other}</p>

							<button
								className="font-semibold border-2 px-4 bg-white h-10 flex items-center justify-center"
								type="button"
								style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
								onClick={() => {
									setIsCorrect(null);
									setBird(getRandomBird());
								}}
							>
								Seuraava
								<ArrowRightIcon />
							</button>
						</div>
					</div>
				) : isCorrect === false ? (
					<div
						className="p-4 flex flex-col gap-2 border-2 bg-rose-500"
						style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
					>
						<p className="font-semibold text-2xl">Väärin!</p>

						<p className="font-medium space-x-1 py-2">
							<span>Oikea vastaus on</span>
							<span className="bg-rose-100 -skew-x-3 px-1 inline-block">
								{bird.nameFi}
							</span>
						</p>

						<button
							className="font-semibold border-2 px-4 bg-white h-10 flex items-center justify-center"
							type="button"
							style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
							onClick={() => {
								setIsCorrect(null);
								setBird(getRandomBird());
							}}
						>
							Seuraava
							<ArrowRightIcon />
						</button>
					</div>
				) : (
					<div
						className="p-4 flex flex-col gap-4 border-2 bg-white"
						style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
					>
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
					</div>
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

			<div
				className="p-4 border-2 flex flex-col gap-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<div className="flex items-center gap-2">
					<AudioLinesIcon />
					<p className="font-medium">Ääni</p>
				</div>
				<p>{bird.description.sound}</p>

				{/* biome-ignore lint/a11y/useMediaCaption: Not available */}
				<audio
					controls
					className="w-full rounded-none bg-white! border-2"
					style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
				>
					<source src={bird.audioUrl} type="audio/mpeg" />
					Your browser does not support the audio element.
				</audio>
			</div>
			<div
				className="p-4 border-2 flex flex-col gap-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<div className="flex items-center gap-2">
					<BinocularsIcon />
					<p className="font-medium">Ulkonäkö</p>
				</div>
				<p>{bird.description.appearance}</p>
			</div>
			<div
				className="p-4 border-2 flex flex-col gap-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<div className="flex items-center gap-2">
					<RulerDimensionLine />
					<p>Koko</p>
				</div>
				<p>{bird.description.size}</p>
			</div>
			<div
				className="p-4 border-2 flex flex-col gap-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				<div className="flex items-center gap-2">
					<MapIcon />
					<p className="font-medium">Sijainti</p>
				</div>
				<p>{bird.description.location}</p>
			</div>
		</AppShell>
	);
}
