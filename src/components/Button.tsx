import cn from "cnfast";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"box-shadow flex h-10 shrink-0 cursor-pointer items-center justify-center border-2 bg-white px-4 font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
