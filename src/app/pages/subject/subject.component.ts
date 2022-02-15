import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
	selector: 'app-subject',
	templateUrl: './subject.component.html',
	styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
	constructor(private subjectService: SubjectService) {}

	/* Aqui está a explicação para o código acima:
	1. Criamos um subjectService que é um serviço singleton, o que significa que estará disponível em toda a aplicação.
	2. Vamos assinar o subjectService.message, que é um Subscribe no subjectService.
	3. Vamos usar o método 'next' para enviar o valor do evento para o Subscribe.
	4. Vamos definir a propriedade message do componente para o valor que é enviado para o subject. */

	public message: string = '';

	ngOnInit() {
		this.subjectService.message.subscribe({
			next: (value) => {
				this.message = value;
			},
		});
	}

	setMessage(event: any) {
		this.subjectService.setMessage(event.value);
	}
}
