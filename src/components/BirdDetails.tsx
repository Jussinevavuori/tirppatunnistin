import {
	AudioLinesIcon,
	BinocularsIcon,
	MapIcon,
	RulerDimensionLine,
} from "lucide-react";
import type { Bird } from "#/data/birds";
import { Box } from "./Box";

export type BirdDetailsProps = {
	bird: Bird;
};

export function BirdDetails({ bird }: BirdDetailsProps) {
	return (
		<div className="flex flex-col gap-2">
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
					className="box-shadow w-full rounded-none border-2 bg-white!"
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
					<p className="font-medium">Koko</p>
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
		</div>
	);
}
