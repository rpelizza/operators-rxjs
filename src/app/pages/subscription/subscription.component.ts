import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-subscription',
	templateUrl: './subscription.component.html',
	styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit, OnDestroy {
	constructor() {}

	private mySubscription: Subscription = new Subscription;	

	ngOnInit(): void {
		/* Aqui está a explicação para o código abaixo:
		1. Primeiro criamos um objeto Observable usando o operador new e passamos um retorno de chamada como argumento.
		2. O callback é uma função que será executada toda vez que o observador assinar o Observable.
		3. A função callback retornará um objeto observador, que podemos usar para emitir valores.
		4. Usamos o objeto observador para emitir valores e, quando o observador estiver completo, limpamos o intervalo. */
		const myObservable = new Observable((observer) => {
			let count = 0;
			const interval = setInterval(() => {
				count++;
				observer.next(count);
				if (count === 5) {
					observer.complete();
					clearInterval(interval);
				}
			}, 1000);			
		});

		/* Aqui está a explicação para o código abaixo:
		1. O código abaixo cria um observável que emitirá um valor a cada segundo.
		2. O código abaixo cria uma assinatura para o observável.
		3. O código abaixo registra o valor emitido pelo observável.
		4. O código abaixo registra um erro se o observável emitir um erro.
		5. O código abaixo registra uma mensagem quando o observável é concluído. */
		this.mySubscription = myObservable.subscribe({
			next: (v) => console.log(v),
			error: (e) => console.error(e),
			complete: () => console.info('complete'),
		});
	}

	ngOnDestroy(): void {
		/* Aqui está a explicação para o código abaixo:
		1. Precisamos cancelar a assinatura do observável, caso contrário o observável continuará a emitir valores e será muito caro na memória.
		2. A assinatura precisa ser cancelada do observável.
		3. Quando a assinatura for descadastrada do observável, ela não emitirá mais valores. */
		this.mySubscription.unsubscribe();
	}
}
