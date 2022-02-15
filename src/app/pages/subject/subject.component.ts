import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-subject',
	templateUrl: './subject.component.html',
	styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
	constructor() {}

	
	/* Aqui está a explicação para o código acima:
	1. Criamos um subject.
	2. Nós o subscrevemos.
	3. Chamamos next para enviar um valor ao subject.
	4. O valor será registrado no console.
	A classe Subject é um Observable que permite que valores sejam multicast para muitos Observadores.
	Podemos assinar um Subject passando um objeto Observer.
	A classe Observer é um objeto simples que fornece um retorno de chamada para cada notificação. */ 
	private mySubject = new Subject<string>();

	ngOnInit() {
		this.mySubject.subscribe({
			next: (v) => console.log(v),
		});

		this.mySubject.next('First value');
	}
}
