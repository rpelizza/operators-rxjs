import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { IRxjsList } from 'src/app/interfaces/IRxjsList.interface';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
	public actualRxjs$: Subject<IRxjsList> = new BehaviorSubject<IRxjsList>({
		name: '',
		route: '',
		parameters: [],
		links: [],
		video: [],
		shortDescription: '',
		listOfDescription: [],
		tips: [],
	});

	constructor(
		private route: ActivatedRoute,
		private appSettingsService: AppSettingsService,
		private _sanitizer: DomSanitizer
	) {}

	ngOnInit(): void {
		this.actualRxjs$ = this.route.queryParams.pipe(
			tap((data) => this.appSettingsService.notify(data['rxjs'])),
			switchMap((params) =>
				this.appSettingsService.getOneRxjs(params['rxjs'])
			)
		) as Subject<IRxjsList>;
	}

	sanitizeVideo(url: any): any {
		return this._sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
