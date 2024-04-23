import { v4 as uuidv4 } from "uuid";
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	APPLIED: {
		name: "APPLIED",
		items: [
			{
				id: uuidv4(),
				title: "Job Application 1",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Job Application 2",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "low",
				deadline: 50,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	SCREEN: {
		name: "SCREEN",
		items: [
			{
				id: uuidv4(),
				title: "Job Application 3",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	INTERVIEWING: {
		name: "INTERVIEWING",
		items: [
			{
				id: uuidv4(),
				title: "Job Application 4",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Job Application 5",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	REJECTED: {
		name: "REJECTED",
		items: [
			{
				id: uuidv4(),
				title: "Job Application 6",
				description: "Lorem ipsum dolor sit amet ..",
				priority: "high",
				deadline: 50,
				alt: "task image",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
};
