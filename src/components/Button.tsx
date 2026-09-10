import cn from "cnfast";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, style, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"flex h-10 w-full flex-1 cursor-pointer items-center justify-center border-2 bg-white px-4 font-semibold",
				className,
			)}
			style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)", ...style }}
			{...props}
		>
			{children}
		</button>
	);
}
