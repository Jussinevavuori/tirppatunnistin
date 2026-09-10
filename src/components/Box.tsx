import cn from "cnfast";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export function Box({ children, className, style, ...props }: BoxProps) {
	return (
		<div
			className={cn("bg-white p-4 border-2 flex flex-col gap-2", className)}
			style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)", ...style }}
			{...props}
		>
			{children}
		</div>
	);
}
