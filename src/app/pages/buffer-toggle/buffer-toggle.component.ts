import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferToggle, interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-buffer-toggle',
	templateUrl: './buffer-toggle.component.html',
	styleUrls: ['./buffer-toggle.component.scss'],
})
export class BufferToggleComponent implements OnInit, OnDestroy {
	constructor() {}

	/* Aqui está a explicação para o código acima:
	1. Criamos uma fonte de intervalo (sourceInterval) que emite a cada segundo.
	2. Criamos outra fonte de intervalo (startInterval) que emite após 5 segundos.
	3. Criamos uma função (closingInterval) que retorna uma fonte de intervalo que emite a cada 3 segundos.
	4. Criamos um bufferToggle source (sourceInterval) que emite todos os valores do sourceInterval, e quando o startInterval emitir, ele emitirá o closureInterval.
	5. Assinamos a fonte bufferToggle e registramos os valores emitidos. */
	private result$: any = Subscription;

	ngOnInit(): void {
		const sourceInterval = interval(1000);
		const startInterval = interval(5000);
		const closingInterval = (val: any) => {
			console.log(
				`Valor ${val} emitido, iniciando buffer! Fechando em 3s!`
			);
			return interval(3000);
		};
		const bufferToggleInterval = sourceInterval.pipe(
			bufferToggle(startInterval, closingInterval)
		);
		this.result$ = bufferToggleInterval.subscribe((val) =>
			console.log('Emitted Buffer:', val)
		);
	}

	ngOnDestroy(): void {
		this.result$.unsubscribe();
	}
}
