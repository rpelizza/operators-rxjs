import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IRxjsList } from './interfaces/IRxjsList.interface';
import { AppSettingsService } from './services/app-settings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	public title: string = 'operators-rxjs';
	public defaultSelected: string = '';

	public RxjsItems$ = new BehaviorSubject<IRxjsList[] | null>(null);

	constructor(private router: Router, private appSettingsService: AppSettingsService) {}

	ngOnInit(): void {
		this.appSettingsService
			.getLocalJson()
			.subscribe((x) => this.RxjsItems$.next(x));

		this.RxjsItems$.subscribe((val) => {
			val && (this.defaultSelected = val[0].route);
		});
	}

	selectRXJS(event: Event) {
		this.router.navigate([event]);
	}

	ngOnDestroy(): void {
		this.RxjsItems$.unsubscribe();
	}
}
