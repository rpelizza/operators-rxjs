import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-behavior-subject',
	templateUrl: './behavior-subject.component.html',
	styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit {
	constructor() {}

	/* Aqui está a explicação para o código abaixo:
	1. Primeiro, criamos uma nova instância da classe BehaviorSubject e passamos o valor inicial.
	2. Em seguida, criamos um subscription para o BehaviorSubject e passamos um objeto com uma função next.
	3. A próxima função registrará um aviso no console toda vez que o BehaviorSubject emitir um novo valor.
	4. Chamamos a função setTimeout que chamará o método next() no BehaviorSubject após 2000 milissegundos.
	5. Isso emitirá um novo valor para o BehaviorSubject que acionará a próxima função em nossa subscription.
	Podemos ver que a próxima função é chamada dentro da função setTimeout. */
	private myBehaviorSubject = new BehaviorSubject(0);

	ngOnInit(): void {
		this.myBehaviorSubject.subscribe({
			next: (value) => {
				console.warn(`BehaviorSubject: ${value}`);
			},
		});

		setTimeout(() => {
			this.myBehaviorSubject.next(1);
		}, 2000);
	}
}
