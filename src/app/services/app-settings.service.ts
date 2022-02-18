import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IRxjsList } from '../interfaces/IRxjsList.interface';
import { rxjsList } from '../utils/rxjs-list';

@Injectable({
	providedIn: 'root',
})
export class AppSettingsService {

	public notification$ = new Subject<string>()

	constructor() {}

	getLocalJson(): Observable<IRxjsList[]> {
		return of(rxjsList);
	}

	getOneRxjs(route: string): Observable<any> {
		return of(rxjsList.find((el) => el.route === route));
	}

	notify(route: string) {
		this.notification$.next(route);
	}
}
