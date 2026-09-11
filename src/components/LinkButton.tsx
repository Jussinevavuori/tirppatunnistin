import { Link, type LinkProps } from "@tanstack/react-router";
import cn from "cnfast";

export type LinkButtonProps = LinkProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({ children, className, ...props }: LinkButtonProps) {
	return (
		<Link
			className={cn(
				"box-shadow flex h-10 shrink-0 cursor-pointer items-center justify-center border-2 bg-white px-4 font-semibold",
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
