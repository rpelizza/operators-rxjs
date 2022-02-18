import { IRxjsList } from '../interfaces/IRxjsList.interface';

export const rxjsList: IRxjsList[] = [
	{
		name: 'Início',
		route: 'home',
		parameters: [],
		links: [],
		video: [],
		shortDescription: '',
		listOfDescription: [],
		tips: [],
	},
	{
		name: 'Observable',
		route: 'observable',
		parameters: [],
		links: ['https://rxjs.dev/guide/observable'],
		video: [
			'https://www.youtube.com/embed/0qdw9gK1AZ0',
		],
		shortDescription:
			'Um observable é um objeto único semelhante a uma promise que pode ajudar a gerenciar o código assíncrono',
		listOfDescription: [
			'Um observable é um objeto único semelhante a uma promise que pode ajudar a gerenciar o código assíncrono',
			'Um observable é um objeto que pode ser observado, ou seja, pode ser notificado quando o valor muda',
			'Com Observables, conseguimos lidar com transferência de dados assíncrona. Muitas vezes, seu uso é semelhante ao de Promises do Javascript, porém, podendo ser uma fonte de transferência de dados contínua, ou seja, o Observable poderá emitir dados várias vezes em momentos distintos de sua existência.',
			'Emite notificações sempre que ocorre uma mudança em um de seus itens e a partir disso podemos executar uma ação.',
			'Observables são uma forma de comunicação entre componentes, serviços e outros Observables.',
		],
		tips: ['custom observable', 'custom observer', 'observable próprio'],
	},
	{
		name: 'Subject',
		route: 'subject',
		parameters: [],
		links: [
			'https://rxjs.dev/guide/subject',
			'https://www.learnrxjs.io/learn-rxjs/subjects/subject',
		],
		video: [
			'https://www.youtube.com/embed/-7JPqeHeNRE',
		],
		shortDescription:
			'Um subject é um observable que pode ser subscrito e emitido',
		listOfDescription: [
			'Um Subject é um tipo especial de Observable que permite que valores sejam disparados para muitos Observadores.',
			'Enquanto os Observables simples são unicast (cada Observer inscrito possui uma execução independente do Observable), os Subjects são multicast. Um Subject é como um Observável, mas pode transmitir para muitos Observadores.',
			'Um Subject é um objeto que pode ser observado, ou seja, pode ser notificado quando o valor muda',
			'Todo subject é um observable e você pode se inscrever nele',
			'Todo subject é um observer. É um objeto com os métodos next(v), error(e) e complete(). Para alimentar um novo valor para o Subject, basta chamar next(theValue), e ele será multicast para os Observadores cadastrados para escutar o Subject.',
		],
		tips: [
			'usado como um observable',
			'emitir mudanças',
			'notificar mudanças',
			'multicast',
			'notifica sempre que há mudanças',
		],
	},
	{
		name: 'Behavior Subject',
		route: 'behavior-subject',
		parameters: [
			{
				name: 'Valor inicial',
				default: 'undefined',
				required: true,
				type: 'any',
				description: 'O valor inicial do BehaviorSubject',
			},
		],
		links: [
			'https://rxjs.dev/guide/subject',
			'https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject',
			'https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject',
			'https://indepth.dev/reference/rxjs/subjects/behavior-subject',
		],
		video: [
			'https://www.youtube.com/embed/vUC-ospC-t0',
		],
		shortDescription:
			'Um Behavior Subject é um subject que inicia com um valor inicial',
		listOfDescription: [
			'Em um Behavior Subject, o primeiro valor enviado é o valor inicial.',
			'Requer um valor inicial e emite o valor atual para novos subscribers.',
			'Quando um novo valor é enviado, o Behavior Subject retorna o novo valor, e os Observadores são notificados.',
			'O Behavior Subject precisa, obrigatoriamente, iniciar com um valor.',
			'É uma variação do subject, mas com um valor inicial.',
			"Ele armazena o último valor emitido para seus consumidores, e sempre que um novo Observer se inscrever, ele receberá imediatamente o 'valor atual' do BehaviorSubject.",
			"BehaviorSubjects são úteis para representar 'valores ao longo do tempo'. Por exemplo, um fluxo de eventos de aniversários é um subject, mas o fluxo da idade de uma pessoa seria um BehaviorSubject.",
		],
		tips: [
			'tem valor inicial',
			'emitir mudanças',
			'notificar mudanças',
			'multicast',
			'notifica sempre que há mudanças',
			'iniciar com um valor',
		],
	},
	{
		name: 'Replay Subject',
		route: 'replay-subject',
		parameters: [
			{
				name: 'BufferSize',
				default: 'Number.POSITIVE_INFINITY',
				required: false,
				type: 'number',
				description:
					'Isso determinará quantos itens são armazenados no buffer, o padrão é infinito (Quantidade máxima de valores a serem emitidos).',
			},
			{
				name: 'WindowTime',
				default: 'Number.POSITIVE_INFINITY (milisegundos)',
				required: false,
				type: 'number',
				description:
					'A quantidade de tempo para manter um valor no buffer antes de removê-lo do buffer.',
			},
		],
		links: [
			'https://rxjs.dev/guide/subject',
			'https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject',
			'https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject',
			'https://indepth.dev/reference/rxjs/subjects/replay-subject',
		],
		video: [
			'https://www.youtube.com/embed/NVeoUrU2VS0',
		],
		shortDescription:
			'Reproduz ou emite valores antigos para novos assinantes',
		listOfDescription: [
			'Um ReplaySubject é semelhante a um BehaviorSubject, pois pode enviar valores antigos para novos assinantes, mas também pode gravar uma parte da execução Observable',
			'Um ReplaySubject grava vários valores da execução Observable e os reproduz para novos assinantes.',
			'Reproduz ou emite valores antigos para novos assinantes',
			'O ReplaySubject é um subject que permite reproduzir vários valores do passado para um novo subscriber.',
			'ReplaySubject é uma variante de um Subject que mantém um cache de valores anteriores emitidos por uma fonte observável e os envia para todos os novos observadores imediatamente na assinatura.',
			'ReplaySubject irá reproduzir a sequência de valores em cache mesmo se o observador assinar muito mais tarde do que os valores foram armazenados em cache.',
			'ReplaySubject é semelhante ao BehaviorSubject na maneira como pode enviar valores em cache para novos assinantes, mas em vez de apenas um valor atual, ele pode gravar e reproduzir uma série inteira de valores.',
		],
		tips: [
			'valores em cache',
			'emitir valores antigos',
			'reproduzir valores antigos',
			'vida útil do buffer',
			'valores do passado',
			'buffer size',
		],
	},
	{
		name: 'Async Subject',
		route: 'async-subject',
		parameters: [],
		links: [
			'https://rxjs.dev/guide/subject',
			'https://rxjs-dev.firebaseapp.com/api/index/class/AsyncSubject',
			'https://www.learnrxjs.io/learn-rxjs/subjects/asyncsubject',
			'https://indepth.dev/reference/rxjs/subjects/async-subject',
		],
		video: [
			'https://www.youtube.com/embed/LO9OyRg92yE',
		],
		shortDescription: 'Emite seu último valor na conclusão',
		listOfDescription: [
			'AsyncSubject precisa esperar até que o observável de origem seja concluído antes de identificar o valor atual como o mais recente e só então emiti-lo para assinantes existentes ou futuros.',
			'Esse comportamento significa que você sempre pode obter diretamente o último valor emitido do AsyncSubject, mesmo que o assinante assine muito mais tarde do que o valor foi armazenado.',
			'Emite seu último valor na conclusão',
			'AsyncSubject é um subject que permite emitir um valor quando o observável de origem for concluído.',
			'O AsyncSubject é uma variante em que apenas o último valor da execução Observable é enviado para seus observadores e somente quando a execução é concluída.',
		],
		tips: [
			'último valor da execução Observable',
			'último valor da requisição',
			'esperar concluir',
		],
	},
	{
		name: 'Audit',
		route: 'audit',
		parameters: [
			{
				name: 'durationSelector',
				default: 'Number.POSITIVE_INFINITY',
				required: true,
				type: 'number',
				description:
					'Uma função que recebe um valor da fonte Observable, para calcular a duração do silenciamento, retornado como Observable ou Promise',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/audit',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/audit',
		],
		video: [
			'https://www.youtube.com/embed/tEZFFLp21-E',
		],
		shortDescription:
			'Emite o último valor da fonte Observable após um tempo de silêncio',
		listOfDescription: [
			'O audit ignora os valores emitidos do observável de origem por uma duração conforme especificado por outro observável e quando essa duração termina, ele emite o valor mais recente do observável de origem.',
			'Todos os valores anteriores emitidos pela fonte observável anterior ao valor mais recente são ignorados',
			'Uma coisa a observar aqui é que o parâmetro que determina a duração de ignorar os valores de origem deve ser um observável em si.',
			'Ignorar o tempo com base no observável fornecido e, em seguida, emitir o valor mais recente',
			'Ignora os valores de origem por uma duração determinada por outro Observável, em seguida emite o valor mais recente do Observável de origem e repete esse processo.',
			'Audit emite o valor mais recente da fonte Observable na saída Observable assim que seu cronômetro interno é desabilitado e ignora os valores de origem enquanto o cronômetro está habilitado.',
		],
		tips: [
			'duração do silenciamento',
			'silenciamento',
			'silenciar durante um tempo',
			'valor mais recente',
			'cronômetro',
		],
	},
];
