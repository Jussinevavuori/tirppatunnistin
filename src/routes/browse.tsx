import { createFileRoute } from "@tanstack/react-router";
import { BrowseScreen } from "#/components/BrowseScreen";

export const Route = createFileRoute("/browse")({
	component: RouteComponent,
});

function RouteComponent() {
	return <BrowseScreen />;
}
