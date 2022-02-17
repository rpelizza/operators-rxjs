import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRxjsList } from '../interfaces/IRxjsList.interface';
import { rxjsList } from '../utils/rxjs-list';

@Injectable({
	providedIn: 'root',
})
export class AppSettingsService {
	constructor() {}

	getLocalJson(): Observable<IRxjsList[]> {
		return of(rxjsList);
	}
}
