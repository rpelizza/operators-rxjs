import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { IRxjsList } from 'src/app/interfaces/IRxjsList.interface';
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
			switchMap((params) => this.appSettingsService.getOneRxjs(params['rxjs']))
		);

		//! Remover depois
		this.actualRxjs$.subscribe((data: any) => {
			console.log(data);
		});
	}
}
