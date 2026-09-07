import type { FormEvent } from "react";
import { wingClass } from "./game-utils";
import type { AnswerMode, Attempt, Bird, GameMode } from "./types";

type SelectOption = readonly [string, string];

const panel = "bg-[#f4f0e8] text-[#17231d]";
const eyebrow =
	"text-[11px] font-bold uppercase tracking-[0.16em] text-[#ca624d]";
const primary =
	"flex min-h-14 w-full items-center justify-between bg-[#ca624d] px-5 text-left font-bold text-[#fffaf1] transition hover:-translate-y-0.5 hover:bg-[#ae4d3b]";

export function AppShell({ children }: { children: React.ReactNode }) {
	return (
		<main
			className={`mx-auto min-h-screen w-full max-w-165 overflow-hidden px-6 py-7 md:px-12 md:py-9 ${panel}`}
		>
			{children}
		</main>
	);
}

export function Masthead() {
	return (
		<header className="flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-[#6d756d]">
			<a
				className="font-bold text-[#17231d] no-underline"
				href="https://jussinevavuori.com"
				target="_blank"
				rel="noreferrer"
			>
				Jussi Nevavuori ↗
			</a>
			<span>v. 1.0 / metsänreuna</span>
		</header>
	);
}

export function TopBar({
	label,
	onBack,
}: {
	label: string;
	onBack: () => void;
}) {
	return (
		<header className="mb-11 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-[#687066]">
			<button
				type="button"
				className="grid h-10 w-10 place-items-center border border-[#c8c9bf] bg-transparent text-2xl text-[#17231d]"
				onClick={onBack}
			>
				←
			</button>
			<span>{label}</span>
			<span className="text-lg text-[#ca624d]">●</span>
		</header>
	);
}

export function Settings({
	gameMode,
	answerMode,
	onGameModeChange,
	onAnswerModeChange,
}: {
	gameMode: GameMode;
	answerMode: AnswerMode;
	onGameModeChange: (value: GameMode) => void;
	onAnswerModeChange: (value: AnswerMode) => void;
}) {
	return (
		<section className="py-8">
			<ChoiceGroup
				title="Mitä tunnistetaan?"
				value={gameMode}
				onChange={(value) => onGameModeChange(value as GameMode)}
				options={[
					["image-name", "Kuva → nimi"],
					["name-image", "Nimi → kuva"],
					["voice-name", "Ääni → nimi"],
					["name-voice", "Nimi → ääni"],
				]}
			/>
			<ChoiceGroup
				title="Miten vastataan?"
				value={answerMode}
				onChange={(value) => onAnswerModeChange(value as AnswerMode)}
				options={[
					["choices", "Neljä ehdotusta"],
					["text", "Kirjoita itse"],
				]}
			/>
		</section>
	);
}

function ChoiceGroup({
	title,
	options,
	value,
	onChange,
}: {
	title: string;
	options: SelectOption[];
	value: string;
	onChange: (value: string) => void;
}) {
	return (
		<div className="mb-6 last:mb-0">
			<h3 className="mb-3 text-xl font-normal">{title}</h3>
			<div className="grid grid-cols-2 gap-2">
				{options.map(([key, label]) => (
					<button
						type="button"
						className={`min-h-12 border px-2 text-sm transition ${value === key ? "border-[#17231d] bg-[#17231d] text-[#f4f0e8]" : "border-[#c8c9bf] bg-transparent text-[#59625a] hover:border-[#ca624d]"}`}
						key={key}
						onClick={() => onChange(key)}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
}

export function Progress({
	learned,
	total,
}: {
	learned: (threshold: number) => number;
	total: number;
}) {
	const tiers = [
		{ threshold: 10, label: "Ystävät", color: "bg-[#17231d]", zIndex: "z-40" },
		{ threshold: 6, label: "Kaverit", color: "bg-[#518275]", zIndex: "z-30" },
		{ threshold: 3, label: "Tutut", color: "bg-[#b4a45b]", zIndex: "z-20" },
		{ threshold: 1, label: "Nähdyt", color: "bg-[#ca624d]", zIndex: "z-10" },
	];
	return (
		<section className="border-y border-[#c8c9bf] py-5">
			<div className="mb-3 flex items-center justify-between text-base">
				<span>Oppimispolku</span>
				<strong className="text-xs font-normal text-[#59625a]">
					{learned(10)} / {total} ystävätirppaa
				</strong>
			</div>
			<div className="relative h-8 overflow-hidden bg-[#d7d6cc] p-1">
				{tiers.map(({ threshold, color, zIndex }) => (
					<i
						className={`absolute inset-y-1 left-1 block min-w-1 transition-all ${color} ${zIndex}`}
						key={threshold}
						style={{ width: `${(learned(threshold) / total) * 100}%` }}
					/>
				))}
			</div>
			<div className="mt-2 flex justify-between gap-1 text-[10px] uppercase tracking-[0.04em] text-[#74786f]">
				{tiers.map(({ threshold, label, color }) => (
					<span className="inline-flex items-center gap-1" key={threshold}>
						<i
							className={`h-2 w-2 shrink-0 rounded-full ${color}`}
							aria-hidden="true"
						/>
						{label}{" "}
						<b className="text-xs text-[#17231d]">{learned(threshold)}</b>
					</span>
				))}
			</div>
		</section>
	);
}

export function MenuScreen({
	gameMode,
	answerMode,
	learned,
	total,
	onStart,
	onGameModeChange,
	onAnswerModeChange,
}: {
	gameMode: GameMode;
	answerMode: AnswerMode;
	learned: (threshold: number) => number;
	total: number;
	onStart: () => void;
	onGameModeChange: (value: GameMode) => void;
	onAnswerModeChange: (value: AnswerMode) => void;
}) {
	return (
		<>
			<Masthead />
			<section className="py-20 pb-11">
				<p className={eyebrow}>TIRPPAKOULU</p>
				<h1 className="mb-4 text-[clamp(48px,14vw,82px)] font-normal leading-[0.87] tracking-[-0.055em]">
					Tirppatunnistin
				</h1>
				<p className="text-xl leading-[1.35] text-[#59625a]">
					Opi tunnistamaan Suomen linnut.
					<br />
					Yksi nokka kerrallaan.
				</p>
			</section>
			<Progress learned={learned} total={total} />
			<Settings
				gameMode={gameMode}
				answerMode={answerMode}
				onGameModeChange={onGameModeChange}
				onAnswerModeChange={onAnswerModeChange}
			/>
			<button type="button" className={primary} onClick={onStart}>
				Aloita kierros <span className="text-2xl font-normal">→</span>
			</button>
			<footer className="mt-12 text-[11px] text-[#777d73]">
				Lähde:{" "}
				<a
					className="font-bold text-[#17231d]"
					href="https://fi.wikipedia.org/wiki/Luettelo_Suomen_linnuista"
					target="_blank"
					rel="noreferrer"
				>
					Wikipedia
				</a>
			</footer>
		</>
	);
}

export function QuizScreen({
	bird,
	choices,
	round,
	score,
	gameMode,
	answerMode,
	guess,
	onGuessChange,
	onSubmit,
	onBack,
}: {
	bird: Bird;
	choices: Bird[];
	round: number;
	score: number;
	gameMode: GameMode;
	answerMode: AnswerMode;
	guess: string;
	onGuessChange: (value: string) => void;
	onSubmit: (value?: string) => void;
	onBack: () => void;
}) {
	const nameHint = gameMode === "name-image" || gameMode === "name-voice";
	const submit = (event: FormEvent) => {
		event.preventDefault();
		onSubmit();
	};
	return (
		<>
			<TopBar label={`Kierros ${round + 1} / 10`} onBack={onBack} />
			<section className="flex min-h-[calc(100vh-130px)] flex-col">
				<div className="mb-6 flex justify-between text-[11px] font-bold uppercase tracking-[0.15em] text-[#ca624d]">
					<span>NYT TUNNISTETAAN</span>
					<b className="font-normal tracking-normal text-[#687066]">
						{score} pistettä
					</b>
				</div>
				{nameHint ? (
					<div className="grid min-h-70 place-content-center bg-[#d5dfd0] p-8 text-center">
						<p className="mb-6 text-xs uppercase tracking-[0.12em] text-[#687066]">
							Kenelle kuuluu tämä nimi?
						</p>
						<h2 className="mb-2 text-5xl font-normal tracking-[-0.04em]">
							{bird.name}
						</h2>
						<span className="text-[#687066] italic">{bird.scientificName}</span>
					</div>
				) : gameMode === "image-name" ? (
					<img
						className="aspect-[1.16] w-full object-contain saturate-[.85]"
						src={bird.image}
						alt="Tunnistettava tirppa"
					/>
				) : (
					<div className="grid min-h-70 place-content-center justify-items-center bg-[#d5dfd0] text-center">
						<span className="text-5xl text-[#ca624d]">◖))</span>
						<h2 className="text-3xl font-normal">Kuuntele tirpan ääntä</h2>
						<audio controls src={bird.audio}>
							Selaimesi ei tue äänentoistoa.
							<track kind="captions" src="data:text/vtt,WEBVTT" />
						</audio>
					</div>
				)}
				<div className="mt-auto pt-7">
					<p className="mb-3 text-[17px] text-[#687066]">
						{gameMode === "image-name" || gameMode === "voice-name"
							? "Mikä tirppa tämä on?"
							: gameMode === "name-image"
								? "Valitse oikea kuva"
								: "Mikä ääni kuuluu tälle?"}
					</p>
					{answerMode === "text" ? (
						<form onSubmit={submit}>
							<input
								className="mb-2 min-h-14 w-full border border-[#c8c9bf] bg-[#f8f5ee] px-4 outline-none focus:border-[#17231d]"
								value={guess}
								onChange={(event) => onGuessChange(event.target.value)}
								placeholder="Kirjoita tirpan nimi"
							/>
							<button type="submit" className={primary}>
								Tarkista vastaus <span className="text-2xl font-normal">→</span>
							</button>
						</form>
					) : (
						<div className="grid grid-cols-2 gap-2">
							{choices.map((choice) => (
								<button
									type="button"
									className="relative min-h-16 border border-[#c8c9bf] bg-[#f8f5ee] px-4 py-3 text-left text-[17px] hover:border-[#ca624d]"
									key={choice.id}
									onClick={() => onSubmit(choice.name)}
								>
									{gameMode === "name-image" ? (
										<img
											className="-mx-4 -mt-3 mb-3 h-22 w-[calc(100%+2rem)] object-contain"
											src={choice.image}
											alt="Vastausvaihtoehto"
										/>
									) : (
										choice.name
									)}
									<i className="absolute right-2 top-3 text-[#ca624d] not-italic">
										↗
									</i>
								</button>
							))}
						</div>
					)}
				</div>
			</section>
		</>
	);
}

export function BirdCard({
	bird,
	score,
	points,
}: {
	bird: Bird;
	score: number;
	points: number;
}) {
	return (
		<article className="my-8 bg-[#dfe5da]">
			<img
				className="h-52.5 w-full object-contain"
				src={bird.image}
				alt={bird.name}
			/>
			<div className="p-5">
				<div className="flex items-start justify-between">
					<div>
						<p className={eyebrow}>{wingClass(bird.wingspanCm)}</p>
						<h2 className="my-1 text-[31px] font-normal">{bird.name}</h2>
						<p className="text-xs font-bold uppercase tracking-[0.08em] text-[#ca624d]">
							{score} / 10 pistettä (+{points})
						</p>
						<i className="text-xs text-[#687066]">
							{bird.englishName} / {bird.scientificName}
						</i>
					</div>
					<strong className="text-[13px] text-[#ca624d]">
						{bird.wingspan}
					</strong>
				</div>
				<ul className="my-4 list-disc pl-5 text-sm leading-6 text-[#59625a]">
					{bird.facts.map((fact) => (
						<li key={fact}>{fact}</li>
					))}
				</ul>
				<a
					className="text-xs font-bold text-[#17231d]"
					href={bird.wikipedia}
					target="_blank"
					rel="noreferrer"
				>
					Lue lisää Wikipediassa ↗
				</a>
			</div>
		</article>
	);
}

export function ResultScreen({
	bird,
	result,
	score,
	round,
	onNext,
	onBack,
}: {
	bird: Bird;
	result: Attempt;
	score: number;
	round: number;
	onNext: () => void;
	onBack: () => void;
}) {
	return (
		<>
			<TopBar label={`Kierros ${round + 1} / 10`} onBack={onBack} />
			<section>
				<div
					className={`mb-6 grid h-14 w-14 place-items-center rounded-full text-3xl ${result.wasCorrect ? "bg-[#d5dfd0] text-[#518275]" : "bg-[#f0d6ca] text-[#ca624d]"}`}
				>
					{result.wasCorrect ? "✓" : "×"}
				</div>
				<p className={eyebrow}>{result.wasCorrect ? "OIKEIN" : "EI IHAN"}</p>
				<h1 className="mb-4 text-[clamp(43px,12vw,67px)] font-normal leading-[0.9] tracking-tighter">
					{result.wasCorrect &&
					result.guess.toLocaleLowerCase("fi-FI") !==
						result.correctAnswer.toLocaleLowerCase("fi-FI")
						? "Melkein, mutta kelpaa."
						: result.wasCorrect
							? "Tarkka osuma."
							: "Tällä kertaa karkasi."}
				</h1>
				<p className="max-w-xl text-xl leading-[1.45] text-[#59625a]">
					Oikea vastaus on <strong>{bird.name}</strong>.{" "}
					{result.wasCorrect
						? `Ansaitsit ${result.points} pistettä linnulle ${bird.name}.`
						: "Pisteet puolittuivat, mutta seuraava tirppa on jo tulossa."}
				</p>
				<BirdCard bird={bird} score={score} points={result.points} />
				<button type="button" className={primary} onClick={onNext}>
					{round >= 9 ? "Katso yhteenveto" : "Seuraava tirppa"}
					<span className="text-2xl font-normal">→</span>
				</button>
			</section>
		</>
	);
}

export function SummaryScreen({
	attempts,
	onAgain,
	onEnd,
}: {
	attempts: Attempt[];
	onAgain: () => void;
	onEnd: () => void;
}) {
	return (
		<>
			<TopBar label="Kierros valmis" onBack={onEnd} />
			<section>
				<p className={eyebrow}>HYVÄ KIERROS</p>
				<h1 className="text-[clamp(43px,12vw,67px)] font-normal leading-[0.9] tracking-tighter">
					Puolustuslinja
					<br />
					pysyi kasassa.
				</h1>
				<p className="text-xl text-[#59625a]">
					Tässä on tämän kierroksen saalis.
				</p>
				<div className="my-7 flex items-baseline gap-2">
					<strong className="text-6xl font-normal">
						{attempts.filter((attempt) => attempt.wasCorrect).length} / 10
					</strong>
					<span className="text-[#687066]">oikein</span>
				</div>
				<div className="border-t border-[#c8c9bf]">
					{attempts.map((attempt) => (
						<div
							className="grid min-h-15 grid-cols-[32px_1fr_auto] items-center gap-2 border-b border-[#c8c9bf]"
							key={`${attempt.timestamp}-${attempt.birdId}`}
						>
							<span
								className={`grid h-6 w-6 place-items-center rounded-full text-sm font-bold ${attempt.wasCorrect ? "bg-[#d5dfd0] text-[#518275]" : "bg-[#f0d6ca] text-[#ca624d]"}`}
							>
								{attempt.wasCorrect ? "✓" : "×"}
							</span>
							<span>
								<b>{attempt.correctAnswer}</b>
								<small className="block text-[11px] text-[#8a8f86]">
									{attempt.guess}
								</small>
							</span>
							<strong className="text-[13px] text-[#518275]">
								{attempt.wasCorrect ? `+${attempt.points}` : "−"}
							</strong>
						</div>
					))}
				</div>
			</section>
			<div className="mt-8">
				<button type="button" className={primary} onClick={onAgain}>
					Pelaa uudestaan <span className="text-2xl font-normal">↗</span>
				</button>
				<button
					type="button"
					className="mt-4 w-full bg-transparent text-xs text-[#687066] underline"
					onClick={onEnd}
				>
					Lopeta peli
				</button>
			</div>
		</>
	);
}
