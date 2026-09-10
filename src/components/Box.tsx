import cn from "cnfast";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export function Box({ children, className, style, ...props }: BoxProps) {
	return (
		<div
			className={cn(
				"box-shadow flex flex-col gap-2 border-2 bg-white p-4",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}
