import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from './services/app-settings.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'operators-rxjs';

	constructor(private appSettingsService: AppSettingsService) {}

	ngOnInit(): void {
		this.appSettingsService.getLocalJson().subscribe({
			next: (data) => {
				console.log(data);
			},
			error: (err) => {
				console.log(err);
			},
			complete: () => {
				console.log('complete');
			},
		});
	}
}
