import { Component, OnDestroy, OnInit } from '@angular/core';
import { audit, fromEvent, interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-audit',
	templateUrl: './audit.component.html',
	styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit, OnDestroy {
	constructor() {}

	result: any = Subscription;

	/* Aqui está a explicação para o código acima:
	1. Criamos uma variável chamada clicks, que é um Observable que emite cliques do mouse a partir do documento.
	2. Criamos uma variável chamada result, que é um Observável.
	3. Chamamos audit() em cliques, que retorna um Observable que emite quaisquer valores emitidos pela fonte Observable quando a
	   duração especificada tiver passado sem um novo clique.
	4. Chamamos subscribe() no resultado, que passa os valores emitidos para console.log(). */
	ngOnInit(): void {
		const clicks = fromEvent(document, 'click');
		const result = clicks.pipe(audit((ev) => interval(1000)));
		this.result = result.subscribe((x) => console.log(x));
	}

	ngOnDestroy(): void {
		this.result.unsubscribe();
	}
}
