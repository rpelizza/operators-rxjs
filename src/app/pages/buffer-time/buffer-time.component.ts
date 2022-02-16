import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferTime, fromEvent, Subscription } from 'rxjs';

@Component({
	selector: 'app-buffer-time',
	templateUrl: './buffer-time.component.html',
	styleUrls: ['./buffer-time.component.scss'],
})
export class BufferTimeComponent implements OnInit, OnDestroy {
	constructor() {}

	/* Aqui está a explicação para o código abaixo:
	1. Estamos criando um novo observável a partir do evento de um clique no documento.
	2. O operador bufferTime é usado para armazenar em buffer os eventos emitidos pelo observável.
	3. O operador recebe dois parâmetros, o tempo de buffer e a janela de tempo.
	4. O tempo do buffer é o tempo em milissegundos entre a emissão dos eventos e a emissão do buffer.
	5. A janela de tempo é o tempo em milissegundos durante o qual o buffer é válido.
	6. Estamos usando o operador bufferTime para armazenar em buffer o evento click e emitir o buffer somente quando a janela de tempo expirar.
	7. Estamos assinando o observável e armazenando a assinatura em uma variável.
	8. A variável result$ é usada para cancelar a assinatura do observável.
	9. Quando o componente é destruído, cancelamos a assinatura do observável. */
	private result$: any = Subscription;

	ngOnInit(): void {
		const clicks = fromEvent(document, 'click');
		const buffered = clicks.pipe(bufferTime(2000, 5000));
		this.result$ = buffered.subscribe((x) => console.log(x));
	}

	ngOnDestroy(): void {
		this.result$.unsubscribe();
	}
}
