import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
	selector: 'app-replay-subject',
	templateUrl: './replay-subject.component.html',
	styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
	constructor() {}

	/* Aqui está a explicação para o código abaixo:
	1. O ReplaySubject é um subject que permite reproduzir vários valores do passado para um novo subscriber.
	2. Criamos um novo ReplaySubject com um tamanho de buffer de 2.
	3. Disparamos para o ReplaySubject um valor 1.
	4. Disparamos para o ReplaySubject um valor 2.
	4. Nos inscrevemos no ReplaySubject com um observer que imprimirá o valor 1 e o valor 2
	5. Criamos um setTimeout de 2 segundos para disparar um valor 3.
	6. A primeira inscrição no ReplaySubject (ObserverA) irá imprimir o valor 1, o valor 2 e o valor 3.
	7. A segunda inscrição no ReplaySubject (ObserverB) irá imprimir o valor 2 e 3, descartando o valor 1.
	 */
	private _replaySubject: ReplaySubject<number> = new ReplaySubject<number>(
		2
	);

	ngOnInit(): void {
		this._replaySubject.next(1);
		this._replaySubject.next(2);

		this._replaySubject.subscribe({
			next: (v) => console.log('observerA: ' + v),
		});

		setTimeout(() => {
			this._replaySubject.next(3);

			this._replaySubject.subscribe({
				next: (v) => console.warn('observerB: ' + v),
			});
		}, 2000);
	}
}
