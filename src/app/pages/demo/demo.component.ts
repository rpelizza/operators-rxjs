import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { IRxjsList } from 'src/app/interfaces/IRxjsList.interface';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit, AfterViewInit {
	@ViewChild('iframe') iframe!: ElementRef;
	public gistUrl: any;

	public actualRxjs$: Subject<IRxjsList> = new BehaviorSubject<IRxjsList>({
		name: '',
		route: '',
		parameters: [],
		links: [],
		video: [],
		shortDescription: '',
		listOfDescription: [],
		tips: [],
		gistLink: '',
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
			),
			tap((data) => (this.gistUrl = data.gistLink))
		) as Subject<IRxjsList>;
	}

	ngAfterViewInit(): void {
		const doc =
			this.iframe.nativeElement.contentDocument ||
			this.iframe.nativeElement.contentElement.contentWindow;
		const content = `
				<html>
				<head>
				<base target="_parent">
				</head>
				<body>
				<script type="text/javascript" src="${this.gistUrl}"></script>
				</body>
			</html>
			`;
		doc.open();
		doc.write(content);
		doc.close();
	}

	sanitizeVideo(url: any): any {
		return this._sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
