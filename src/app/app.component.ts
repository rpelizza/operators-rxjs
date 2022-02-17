import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRxjsList } from './interfaces/IRxjsList.interface';
import { AppSettingsService } from './services/app-settings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
	}

	selectRXJS(event: Event) {
		this.router.navigate([event]);
	}
}
