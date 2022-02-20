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
		gistLink: '',
	},
	{
		name: 'Observable',
		route: 'observable',
		parameters: [],
		links: ['https://rxjs.dev/guide/observable'],
		video: ['https://www.youtube.com/embed/0qdw9gK1AZ0'],
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
		gistLink:
			'https://gist.github.com/rpelizza/4bb512440f7ee8e7863649069283cce3.js',
	},
	{
		name: 'Subject',
		route: 'subject',
		parameters: [],
		links: [
			'https://rxjs.dev/guide/subject',
			'https://www.learnrxjs.io/learn-rxjs/subjects/subject',
		],
		video: ['https://www.youtube.com/embed/-7JPqeHeNRE'],
		shortDescription:
			'O Subject é um tipo especial de Observable, eles são especiais pois além de ser um Observable e um Observer, podem atuar como um EventEmitter.',
		listOfDescription: [
			'Um Subject é um tipo especial de Observable que permite que valores sejam disparados para muitos Observadores.',
			'Enquanto os Observables simples são unicast (cada Observer inscrito possui uma execução independente do Observable), os Subjects são multicast. Um Subject é como um Observável, mas pode transmitir para muitos Observadores.',
			'Um Subject é um objeto que pode ser observado, ou seja, pode ser notificado quando o valor muda',
			'Todo subject é um observable e você pode se inscrever nele',
			'Todo subject é um observer. É um objeto com os métodos next(v), error(e) e complete(). Para alimentar um novo valor para o Subject, basta chamar next(theValue), e ele será multicast para os Observadores cadastrados para escutar o Subject.',
			'O Subject é um tipo especial de Observable, eles são especiais pois além de ser um Observable e um Observer, podem atuar como um EventEmitter.',
		],
		tips: [
			'usado como um observable',
			'emitir mudanças',
			'notificar mudanças',
			'multicast',
			'notifica sempre que há mudanças',
			'eventEmitter',
		],
		gistLink:
			'https://gist.github.com/rpelizza/b6590a87725bad1551aebe144b5d1074.js',
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
		video: ['https://www.youtube.com/embed/vUC-ospC-t0'],
		shortDescription:
			'Um Behavior Subject é um tipo de subject que inicia com um valor inicial',
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
		gistLink:
			'https://gist.github.com/rpelizza/e43d46dd45f865241a4de73660847122.js',
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
		video: ['https://www.youtube.com/embed/NVeoUrU2VS0'],
		shortDescription:
			'Reproduz ou emite a quantidade de valores definida no buffer',
		listOfDescription: [
			'Um ReplaySubject é semelhante a um BehaviorSubject, pois pode enviar valores antigos para novos assinantes, mas também pode gravar uma parte da execução Observable',
			'Um ReplaySubject grava vários valores da execução Observable e os reproduz para novos assinantes.',
			'Reproduz ou emite valores antigos para novos assinantes',
			'O ReplaySubject precisa, obrigatoriamente, iniciar com um valor.',
			'Reproduz ou emite a quantidade de valores definida no buffer',
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
			'armazenar valores',
			'armazenar dados',
			'buffer',
			'salvar em cache',
		],
		gistLink:
			'https://gist.github.com/rpelizza/1af6d162f750141a80aaf08caa49f541.js',
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
		video: ['https://www.youtube.com/embed/LO9OyRg92yE'],
		shortDescription: 'Emite seu último valor na conclusão',
		listOfDescription: [
			'O AsyncSubject é um subject que armazena valores em uma fila interna, mas só emite o último valor que recebeu.',
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
			'esperar concluir a requisição',
			'esperar concluir a execução Observable',
			'aguardar conclusão',
			'aguardar conclusão da requisição',
			'aguardar conclusão da execução Observable',
		],
		gistLink:
			'https://gist.github.com/rpelizza/12e509519fce366da3c30e4f8cf7afdd.js',
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
		video: ['https://www.youtube.com/embed/tEZFFLp21-E'],
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
		gistLink:
			'https://gist.github.com/rpelizza/2ed7850d7b2d52b853208595ebff50b2.js',
	},
	{
		name: 'Audit Time',
		route: 'audit-time',
		parameters: [
			{
				name: 'duration',
				default: '',
				required: true,
				type: 'number',
				description:
					'Tempo de espera antes de emitir o valor de origem mais recente, medido em milissegundos ou a unidade de tempo determinada internamente pelo agendador opcional.',
			},
			{
				name: 'scheduler',
				default: 'async',
				required: false,
				type: 'Observable',
				description:
					'Um Observable que define o agendador de tempo para o tempo de espera.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/auditTime',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/audittime',
			'https://indepth.dev/reference/rxjs/operators/audit-time',
		],
		video: ['https://www.youtube.com/embed/m_YUeS8oTF4'],
		shortDescription:
			'Quando você estiver interessado em ignorar um observável de origem por um tempo, use o auditTime.',
		listOfDescription: [
			'O auditTime ignora os valores emitidos do observável de origem por uma duração conforme especificado por outro observável e quando essa duração termina, ele emite o valor mais recente do observável de origem.',
			'Ignora o valor da fonte por um período que é definida em milisegundos (ou a unidade de tempo determinada internamente pelo parmetro opcional scheduler), então emite o valor mais recente da fonte Observable, então repete o processo.',
			'Quando você estiver interessado em ignorar um observável de origem por um tempo, use o auditTime.',
			'AuditTime garante que os valores serão emitidos regularmente, mas não com uma frequência maior do que o intervalo configurado.',
			'Quando o primeiro valor é capturado, o timer é iniciado. Quando o timer é ativado, o valor mais recente é emitido e o timer é reiniciado.',
			'Os exemplos mais comuns de uso são eventos DOM, como  scrolling, resizing, eventos do mouse e teclas precionadas, e eventos de tempo, como o tempo de espera para uma requisição HTTP.',
		],
		tips: [
			'duração do silenciamento',
			'silenciamento',
			'silenciar durante um tempo',
			'valor mais recente',
			'cronômetro',
			'período de silenciamento',
			'agendador',
			'agendador de tempo',
			'agendador de tempo para o silenciamento',
			'tempo para o silenciamento',
		],
		gistLink:
			'https://gist.github.com/rpelizza/6f01960945e5c3d1f7bebdf1f5bdd4bc.js',
	},
	{
		name: 'Buffer',
		route: 'buffer',
		parameters: [
			{
				name: 'closingNotifier',
				default: '',
				required: true,
				type: 'Observable',
				description:
					'Um observable notifica o buffer para emitir o(s) valor(es) mais recente(s) armazenado(s) em cache. Emite como um array de valores.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/buffer',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffer',
			'https://indepth.dev/reference/rxjs/operators/buffer',
		],
		video: ['https://www.youtube.com/embed/LsSOiZH29js'],
		shortDescription:
			'Coleta valores emitidos da fonte observável no cache sem passá-los para um observer até que o observável notificador (closingNotifier) seja disparado (buffering).',
		listOfDescription: [
			'Um observable (closingNotifier) notifica o buffer para emitir o(s) valor(es) mais recente(s) armazenado(s) em cache. Emite como um array de valores.',
			'O buffer envia os valores armazenados em cache como um array, reinicia e inicia o buffer novamente até que o observable fornecido (closingNotifier) seja emitido mais uma vez.',
			'O buffer pode enviar um array vazio para o observer se o observable emissor (closingNotifier) emitir um valor e o cache estiver vazio.',
			'Coleta valores do passado como um array e emite esse array quando outro observable (closingNotifier) for emitido.',
		],
		tips: [
			'array de valores',
			'buffer',
			'buffer de valores',
			'buffer de valores emitidos',
		],
		gistLink:
			'https://gist.github.com/rpelizza/8b3b2a4e16e70cbb4ee79f11d222ec01.js',
	},
];
