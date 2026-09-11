import { createFileRoute } from "@tanstack/react-router";
import { BirdIcon, XIcon } from "lucide-react";
import { AppShell } from "#/components/AppShell";
import { Box } from "#/components/Box";
import { LinkButton } from "#/components/LinkButton";
import { BIRDS } from "#/data/birds";

export const Route = createFileRoute("/browse/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<AppShell
			header={
				<Box>
					<div className="flex items-center justify-between gap-2">
						<div className="flex items-center gap-2">
							<BirdIcon />
							<p className="font-semibold">Tirppaselain</p>
						</div>

						<LinkButton to="/" className="w-10 px-0">
							<XIcon />
						</LinkButton>
					</div>
				</Box>
			}
		>
			<div className="flex flex-col gap-4">
				{BIRDS.map((bird, birdIndex) => (
					<LinkButton
						to="/browse/$id"
						params={{ id: bird.id }}
						key={bird.id}
						className="h-auto justify-start pl-0"
					>
						<img
							src={bird.imageUrls[0]}
							alt={bird.nameFi}
							className="mr-2 h-24 w-24 object-cover"
						/>
						<div>
							<p className="mr-1 font-mono text-sm">
								{String(birdIndex + 1).padStart(3, "0")}
							</p>
							<p className="font-bold text-2xl tracking-tight">{bird.nameFi}</p>

							<div className="flex flex-row items-center gap-1">
								<p className="text-sm">{bird.nameSv}</p>
								<p className="text-sm italic">({bird.scientificName})</p>
							</div>
						</div>
					</LinkButton>
				))}
			</div>
		</AppShell>
	);
}
