import { Parameter } from './parameter.interface';

export interface IRxjsList {
	name: string;
	route: string;
	parameters: Parameter[];
	links: string[];
	videos: string[];
	shortDescription: string;
	listOfDescription: string[];
	tips: string[];
	listOfImages: string[];
}
