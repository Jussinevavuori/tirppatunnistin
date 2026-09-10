import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon, ArrowRightIcon, BirdIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { BIRDS } from "#/data/birds";
import { AppShell } from "./AppShell";
import { BirdDetails } from "./BirdDetails";
import { Box } from "./Box";
import { Button } from "./Button";

export function BrowseScreen() {
	const [index, setIndex] = useState(0);
	const bird = BIRDS[index];

	function handleNext() {
		setIndex((prevIndex) => (prevIndex + 1) % BIRDS.length);
	}

	function handlePrev() {
		setIndex((prevIndex) => (prevIndex - 1 + BIRDS.length) % BIRDS.length);
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
								Tirppa {index + 1} / {BIRDS.length}
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
				<Box className="flex flex-row items-center justify-between">
					<Button onClick={handlePrev} className="size-10 p-0">
						<ArrowLeftIcon />
					</Button>
					<Button onClick={handleNext} className="size-10 p-0">
						<ArrowRightIcon />
					</Button>
				</Box>
			}
		>
			<div className="flex flex-col gap-2 py-8">
				<h1 className="font-bold text-4xl tracking-tight">{bird.nameFi}</h1>
				<div className="flex flex-row items-center gap-2">
					<p>{bird.nameSv}</p>
					<p>·</p>
					<p className="italic">({bird.scientificName})</p>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				{bird.imageUrls.map((url, _i) => (
					<img
						key={url}
						src={url}
						alt={bird.nameFi}
						className="box-shadow w-full border-2"
					/>
				))}
			</div>

			<BirdDetails bird={bird} />
		</AppShell>
	);
}
