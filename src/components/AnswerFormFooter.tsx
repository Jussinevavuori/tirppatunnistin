import type { Bird } from "#/data/birds";
import type { Answer } from "#/utils/answer";
import { AnswerForm } from "./AnswerForm";
import { Box } from "./Box";

export type AnswerFormFooterProps = {
	bird: Bird;
	imageIndex: number;
	onAnswer: (answer: Answer) => void;
};

export function AnswerFormFooter(props: AnswerFormFooterProps) {
	return (
		<Box>
			<h1 className="text-center font-bold text-xl tracking-tight">
				Ken on tämä tirppa?
			</h1>

			<AnswerForm
				bird={props.bird}
				imageIndex={props.imageIndex}
				onAnswer={props.onAnswer}
			/>
		</Box>
	);
}
