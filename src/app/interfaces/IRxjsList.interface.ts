import { Parameter } from './parameter.interface';

export interface IRxjsList {
	name: string;
	route: string;
	parameters: Parameter[];
	links: string[];
	video: string[];
	shortDescription: string;
	listOfDescription: string[];
	tips: string[];
	gistLink: string;
}
