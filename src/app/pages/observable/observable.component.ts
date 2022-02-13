import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-observable',
	templateUrl: './observable.component.html',
	styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
	constructor() {}

	/* Explicação para o código abaixo:
	1. A palavra-chave 'new' é usada para criar um novo objeto observável.
	2. Dentro do objeto observável, passamos uma função que será chamada quando precisarmos assinar o objeto observável.
	3. Dentro da função, chamamos o método Observer.next() para enviar o próximo valor ao observador.
	4. O método Observer.next() aceita um parâmetro que será enviado ao observador. 
	5. O método Observer.error() é usado para enviar um erro ao observador.
	6. Chamamos o método Observer.complete() para dizer ao observador que não precisamos do observável para enviar mais valores.*/
	ngOnInit(): void {
		const myObservable = new Observable((observer) => {
			observer.next(1);
			observer.next(2);
			observer.next(3);
			observer.next(4);
			observer.next(5);
			observer.error('Foi chamado o error para interromper o código'); // Se o error for chamado, o observer.complete não será chamado
			observer.complete(); // Se não tivesse o error, o observer.complete seria chamado
		});

		/* Explicação para o código abaixo:
		1. Criamos um observável com uma função que recebe um observador como argumento.
		2. O objeto observador tem um método next() que é chamado sempre que o observável emite um novo valor.
		3. Assinamos o observável com o método subscribe(), que recebe um objeto observador como argumento.
		4. O método subscribe() chamará o método next() sempre que o observável emitir um novo valor.
		5. O método next() imprimirá o valor.
		6. O método error() será chamado se o observável lançar um erro.
		7. O método complete() será chamado quando o observável for concluído. */
		myObservable.subscribe({
			next: (v) => console.log(v),
			error: (e) => console.error(e),
			complete: () => console.info('complete'),
		});
	}
}
