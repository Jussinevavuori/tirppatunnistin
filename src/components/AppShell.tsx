import cn from "cnfast";

export type AppShellProps = {
	header?: React.ReactNode;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
};

export function AppShell(props: AppShellProps) {
	return (
		<div className="relative mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-2">
			<header className="box-shadow sticky top-2 -mx-2">{props.header}</header>
			<main
				className={cn(
					"-mx-4 flex-1 overflow-y-auto overflow-x-hidden px-4 py-16",
					props.className,
				)}
			>
				{props.children}
			</main>
			<footer className="box-shadow sticky bottom-2 -mx-2">
				{props.footer}
			</footer>
		</div>
	);
}
