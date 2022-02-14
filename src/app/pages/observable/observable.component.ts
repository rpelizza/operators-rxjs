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
	1. O construtor Observable é chamado com a função Observer como parâmetro.
	2. A função de observer é chamada cada vez que o Observable é inscrito por um assinante.
	4. O objeto observer tem três métodos: next, error e complete.
	4. O método Observer.next() aceita um parâmetro e é chamado quando o Observable emite um valor. 
	5. O método Observer.error() é chamado quando o Observable emite um erro
	6. O método Observer.complete() para dizer ao observador que não precisamos do observável para enviar mais valores.*/
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
		1. Assinamos o observável com o método subscribe(), que recebe um objeto observador como argumento.
		2. O objeto observador tem um método next() que é chamado sempre que o observável emite um novo valor.		
		6. O método error() será chamado se o observável lançar um erro.
		7. O método complete() será chamado quando o observável for concluído. */
		myObservable.subscribe({
			next: (v) => console.log(v),
			error: (e) => console.error(e),
			complete: () => console.info('complete'),
		});
	}
}
