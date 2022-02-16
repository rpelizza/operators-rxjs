import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferCount, fromEvent, Subscription } from 'rxjs';

@Component({
	selector: 'app-buffer-count',
	templateUrl: './buffer-count.component.html',
	styleUrls: ['./buffer-count.component.scss'],
})
export class BufferCountComponent implements OnInit, OnDestroy {
	constructor() {}

	/* Aqui está a explicação para o código acima:
	1. Primeiro criamos um Observable que emite os cliques do mouse.
	2. Criamos um operador bufferCount que armazena em buffer os cliques do mouse até que haja 2 cliques no buffer.
	3. Em seguida, assinamos o operador bufferCount.
	4. Usamos o método subscribe() para assinar o operador bufferCount.
	5. Usamos o operador bufferCount para obter um Observable que emite os cliques armazenados em buffer.
	6. Usamos o método subscribe para assinar os cliques armazenados em buffer e imprimi-los no console. */
	private result: any = Subscription;
	ngOnInit(): void {
		const clicks = fromEvent(document, 'click');
		const buffered = clicks.pipe(bufferCount(2, 1));
		this.result = buffered.subscribe((x) => console.log(x));
	}

	ngOnDestroy(): void {
		this.result.unsubscribe();
	}
}
