import cn from "cnfast";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "primary" | "secondary";
};

export function Button({
	className,
	variant = "default",
	children,
	...ButtonProps
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"h-10 flex items-center justify-center px-2 rounded cursor-pointer font-semibold border-2",
				{
					default:
						"bg-emerald-50 text-emerald-700 border-emerald-50 hover:bg-white hover:text-emerald-600",
					primary:
						"bg-emerald-600 text-white border-emerald-50 hover:bg-emerald-500 hover:border-white",
					secondary:
						"bg-emerald-900 text-emerald-200 border-emerald-800 hover:bg-emerald-800 hover:border-emerald-700",
				}[variant],
				className,
			)}
			{...ButtonProps}
		>
			{children}
		</button>
	);
}
