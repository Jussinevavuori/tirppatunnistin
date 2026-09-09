import { createFileRoute } from "@tanstack/react-router";
import { BirdScreen } from "#/components/BirdScreen";

export const Route = createFileRoute("/bird")({ component: Page });

function Page() {
	return <BirdScreen />;
}
