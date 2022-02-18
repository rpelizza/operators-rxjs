import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, tap } from 'rxjs';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
	public actualRxjs$: any = new Subject();

	constructor(
		private route: ActivatedRoute,
		private appSettingsService: AppSettingsService
	) {}

	ngOnInit(): void {
		this.actualRxjs$ = this.route.queryParams.pipe(
			tap((data) => this.appSettingsService.notify(data['rxjs'])),
			switchMap((params) =>
				this.appSettingsService.getOneRxjs(params['rxjs'])
			)
		);

		//! Remover depois
		this.actualRxjs$.subscribe((data: any) => {
			console.log(data);
		});
	}
}
