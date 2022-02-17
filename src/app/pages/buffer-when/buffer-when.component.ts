import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferWhen, fromEvent, interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-buffer-when',
	templateUrl: './buffer-when.component.html',
	styleUrls: ['./buffer-when.component.scss'],
})
export class BufferWhenComponent implements OnInit, OnDestroy {
	constructor() {}

	private result$: Subscription = new Subscription();

	ngOnInit(): void {
		/* Aqui está a explicação para o código acima:
		1. Primeiro criamos um observável que emite os cliques do mouse.
		2. Em seguida, criamos outro observável que emite um valor a cada 1 segundo + número aleatório de segundos entre 0 e 4 segundos.
		3. Em seguida, usamos o operador bufferWhen() para armazenar em buffer os cliques do mouse e aguardar a emissão do observável especificado.
		4. Subscrevemos o resultado observável. */
		const clicks = fromEvent(document, 'click');
		const buffered = clicks.pipe(
			bufferWhen(() => interval(1000 + Math.random() * 4000))
		);
		this.result$ = buffered.subscribe((x) => console.log(x));
	}

	ngOnDestroy(): void {
		this.result$.unsubscribe();
	}
}
