import { Component, OnDestroy, OnInit } from '@angular/core';
import { buffer, fromEvent, interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-buffer',
	templateUrl: './buffer.component.html',
	styleUrls: ['./buffer.component.scss'],
})
export class BufferComponent implements OnInit, OnDestroy {
	constructor() {}

	/* Aqui está a explicação para o código abaixo:
	1. Estamos usando fromEvent() para criar um observável que emite eventos de clique do documento.
	2. Estamos usando interval() para criar um observável que emite valores a cada 1000ms.
	3. Estamos usando buffer() para armazenar em buffer eventos de clique, para que possamos emitir uma matriz de todos os eventos de clique,
		toda vez que o evento de clique é emitido.
	4. Estamos usando o método subscribe() para assinar o observável armazenado em buffer, que emitirá
		uma matriz de todos os eventos de clique sempre que o evento de clique é emitido.
	5. Atribuímos o resultado do método buffer() à variável result.
	6. Usamos o método unsubscribe() para cancelar a assinatura do observável armazenado em buffer após o
		componente é destruído. */
	private result: any = Subscription;

	ngOnInit(): void {
		const clicks = fromEvent(document, 'click');
		const intervalEvents = interval(1000);

		const buffered = intervalEvents.pipe(buffer(clicks));

		this.result = buffered.subscribe((x) => console.log(x));
	}

	ngOnDestroy(): void {
		this.result.unsubscribe();
	}
}
