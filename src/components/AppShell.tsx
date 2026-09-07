export type AppShellProps = {
	children?: React.ReactNode;
};

export function AppShell(props: AppShellProps) {
	return (
		<main
			className="min-h-screen text-emerald-50"
			style={{
				background: `oklch(from var(--color-emerald-950) calc(l * 0.9) c h / 1)`,
			}}
		>
			<div className="max-w-xl p-4 mx-auto flex flex-col gap-4 bg-emerald-950 min-h-screen">
				{props.children}

				<a
					href="https://www.birdlife.fi/lintuharrastus/100lintulajia/opi-tuntemaan/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm opacity-50 text-center underline"
				>
					Lähde
				</a>
			</div>
		</main>
	);
}
