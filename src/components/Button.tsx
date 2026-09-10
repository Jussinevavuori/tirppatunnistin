import cn from "cnfast";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"cursor-pointer flex-1 font-semibold w-full border-2 px-4 h-10 flex items-center justify-center bg-white",
				className,
			)}
			style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)" }}
		>
			{children}
		</button>
	);
}
