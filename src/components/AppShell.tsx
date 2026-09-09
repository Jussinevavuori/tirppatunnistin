import cn from "cnfast";

export type AppShellProps = {
	header?: React.ReactNode;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
};

export function AppShell(props: AppShellProps) {
	return (
		<div className="relative min-h-screen flex flex-col px-4 py-2 max-w-2xl mx-auto">
			<header
				className="-mx-2 sticky top-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				{props.header}
			</header>
			<main
				className={cn(
					"flex-1 py-16 overflow-y-auto overflow-x-hidden -mx-4 px-4",
					props.className,
				)}
			>
				{props.children}
			</main>
			<footer
				className="-mx-2 sticky bottom-2"
				style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
			>
				{props.footer}
			</footer>
		</div>
	);
}
