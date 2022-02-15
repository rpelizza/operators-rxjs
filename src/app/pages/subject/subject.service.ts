import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SubjectService {
	constructor() {}

	/* Aqui está a explicação para o código acima:
	1. Criamos um novo Subject.
	2. Criamos um método que emitirá uma mensagem.
	3. Emitimos uma mensagem */
	public message = new Subject<string>();
	setMessage(value: string) {
		this.message.next(value);
	}
}
