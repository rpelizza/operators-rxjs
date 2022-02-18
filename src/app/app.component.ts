import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
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
			map((value) => (value ? this._filter(value) : this.items.slice()))
		);

		this.appSettingsService.notification$.subscribe({
			next: (data) => {
				Promise.resolve().then(
					() =>
						(this.defaultSelected =
							this.items[this.getIndexByRouteName(data)].route)
				);
			},
		});
	}

	selectRXJS(route: string) {
		route === 'home'
			? this.router.navigate([''])
			: this.router.navigate(['demo'], { queryParams: { rxjs: route } });
	}

	selectOption(evt: any) {
		this.selectRXJS(evt.option.value.route);
	}

	getIndexByRouteName(routeName: string) {
		return this.items.findIndex((el) => el.route === routeName);
	}

	displayFn(rxjs: IRxjsList): string {
		return rxjs && rxjs.name ? rxjs.name : '';
	}

	private _filter(text: any) {
		const filterValue = this.replaceSpecialCharacters(
			text.toString().toLowerCase()
		);

		return this.items.filter(
			(option) =>
				this.replaceSpecialCharacters(
					option.name.toLowerCase()
				).includes(filterValue) ||
				this.replaceSpecialCharacters(
					option.shortDescription.toLowerCase()
				).includes(filterValue) ||
				option.listOfDescription.filter((el) =>
					this.replaceSpecialCharacters(el).includes(filterValue)
				).length > 0 ||
				option.tips.filter((el) =>
					this.replaceSpecialCharacters(el).includes(filterValue)
				).length > 0
		);
	}

	private replaceSpecialCharacters(text: string): string {
		return text
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/\s+/g, '-')
			.toLowerCase();
	}
}
