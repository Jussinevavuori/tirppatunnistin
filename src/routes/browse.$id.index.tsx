import { createFileRoute, redirect } from "@tanstack/react-router";
import { ArrowLeftIcon, ArrowRightIcon, BirdIcon, XIcon } from "lucide-react";
import { AppShell } from "#/components/AppShell";
import { BirdDetails } from "#/components/BirdDetails";
import { Box } from "#/components/Box";
import { LinkButton } from "#/components/LinkButton";
import { BIRDS } from "#/data/birds";

export const Route = createFileRoute("/browse/$id/")({
	component: RouteComponent,
	async loader({ params }) {
		const bird = BIRDS.find((b) => b.id === params.id);
		if (!bird) throw redirect({ to: "/browse" });
		return { bird };
	},
});

function getCurrentBirdIndex(currentId: string) {
	return BIRDS.findIndex((b) => b.id === currentId);
}

function getAdjacentBirdId(currentId: string, delta: number) {
	const currentIndex = getCurrentBirdIndex(currentId);
	const newIndex = (currentIndex + delta + BIRDS.length) % BIRDS.length;
	return BIRDS[newIndex].id;
}

function RouteComponent() {
	const { bird } = Route.useLoaderData();

	const index = getCurrentBirdIndex(bird.id);
	const nextBirdId = getAdjacentBirdId(bird.id, 1);
	const prevBirdId = getAdjacentBirdId(bird.id, -1);

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

						<LinkButton to="/browse" className="w-10 px-0">
							<XIcon />
						</LinkButton>
					</div>
				</Box>
			}
			footer={
				<Box className="flex flex-row items-center justify-between">
					<LinkButton
						to="/browse/$id"
						params={{ id: prevBirdId }}
						className="size-10 p-0"
					>
						<ArrowLeftIcon />
					</LinkButton>
					<LinkButton
						to="/browse/$id"
						params={{ id: nextBirdId }}
						className="size-10 p-0"
					>
						<ArrowRightIcon />
					</LinkButton>
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
