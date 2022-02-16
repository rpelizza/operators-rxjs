import { Component, OnDestroy, OnInit } from '@angular/core';
import { auditTime, fromEvent, Subscription } from 'rxjs';

@Component({
	selector: 'app-audit-time',
	templateUrl: './audit-time.component.html',
	styleUrls: ['./audit-time.component.scss'],
})
export class AuditTimeComponent implements OnInit, OnDestroy {
	constructor() {}
	
	/* Aqui está a explicação para o código acima:
	1. Primeiro, assinamos o evento 'click' do documento.
	2. Criamos um observável que emite um valor cada vez que o documento é clicado.
	3. Usamos o operador auditTime() para emitir o último valor emitido pelo Observable,
	após um tempo especificado (neste caso, 1000 milissegundos).
	4. Subscrevemos o resultado Observable, que neste caso é o último valor emitido do Observable anterior.
	5. Registramos o valor no console. */
	result: any = Subscription;

	ngOnInit(): void {
		const clicks = fromEvent(document, 'click');
		let result = clicks.pipe(auditTime(1000));
		this.result = result.subscribe(console.log);
	}

	ngOnDestroy(): void {
		this.result.unsubscribe();
	}
}
