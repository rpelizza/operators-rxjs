import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
	selector: 'app-async-subject',
	templateUrl: './async-subject.component.html',
	styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
	constructor() {}

	/* Aqui está a explicação para o código abaixo:
	1. O AsyncSubject é um Subject que emite apenas o último valor que foi emitido,
	e completa somente quando o último valor é emitido.
	2. Isso é feito se inscrevendo e emitindo o último valor quando complete() é chamado.
	3. O método next() é usado para emitir um valor.
	4. O método complete() é usado para completar o fluxo e emitir o último valor. */
	private myAsyncSubject = new AsyncSubject<string>();

	ngOnInit(): void {
		this.myAsyncSubject.subscribe({
			next: (v) => console.log(v),
		});

		this.myAsyncSubject.next('First value');
		this.myAsyncSubject.next('Second value');
		this.myAsyncSubject.next('Third value');
		this.myAsyncSubject.complete();
	}
}
