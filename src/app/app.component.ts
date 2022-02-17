import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { IRxjsList } from './interfaces/IRxjsList.interface';
import { AppSettingsService } from './services/app-settings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	myControl = new FormControl();
	filteredOptions: Observable<IRxjsList[]> | undefined;

	public title: string = 'operators-rxjs';
	public items: IRxjsList[] = [];
	public defaultSelected: string = '';

	constructor(
		private router: Router,
		private appSettingsService: AppSettingsService
	) {}

	ngOnInit(): void {
		this.appSettingsService.getLocalJson().subscribe({
			next: (data) => {
				this.items = data;
				this.defaultSelected = data[0].route;
			},
		});

		this.filteredOptions = this.myControl.valueChanges.pipe(
			map((value) =>
				value
					? this._filter(
							value
					  )
					: this.items.slice()
			)
		);
	}

	selectRXJS(event: Event) {
		this.router.navigate([event]);
	}

	displayFn(rxjs: IRxjsList): string {
		return rxjs && rxjs.name ? rxjs.name : '';
	}

	private _filter(text: any) {
		const filterValue = text.toLowerCase();
		return this.items.filter(
			(option) =>
				option.name.toLowerCase().includes(filterValue) ||
				option.shortDescription.toLowerCase().includes(filterValue) ||
				option.listOfDescription.filter((el) =>
					el.toLowerCase().includes(filterValue)
				).length > 0 ||
				option.tips.filter((el) =>
					el.toLowerCase().includes(filterValue)
				).length > 0
		);
	}
}
