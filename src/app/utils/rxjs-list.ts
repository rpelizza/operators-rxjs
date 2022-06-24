import { CategoryEnum } from '../enums/category';
import { IRxjsList } from '../interfaces/IRxjsList.interface';

export const rxjsList: IRxjsList[] = [
	{
		name: 'Início',
		route: 'home',
		category: '',
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
		category: CategoryEnum.Observable,
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
		category: CategoryEnum.Subject,
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
		category: CategoryEnum.Subject,
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
		category: CategoryEnum.Subject,
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
		category: CategoryEnum.Subject,
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
		category: CategoryEnum.Filtering,
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
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'duration',
				default: '-',
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
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'closingNotifier',
				default: '-',
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
	{
		name: 'BufferCount',
		route: 'buffer-count',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'BufferSize',
				default: 'undefined',
				required: true,
				type: 'number',
				description: 'O tamanho máximo do buffer emitido',
			},
			{
				name: 'startBufferEvery',
				default: 'undefined',
				required: false,
				type: 'number',
				description:
					'Intervalo para iniciar um novo buffer. Por exemplo, se startBufferEvery for 2, um novo buffer será iniciado em todos os outros valores da origem. Um novo buffer é iniciado no início da origem por padrão.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/bufferCount',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffercount',
		],
		video: ['https://www.youtube.com/embed/kRNiSIAK1zs'],
		shortDescription:
			'Coleta valores do passado como um array e emite esse array somente quando seu tamanho atingir o bufferSize especificado.',
		listOfDescription: [
			'Armazena um número de valores da fonte Observable por bufferSize, em seguida, emite o buffer e o limpa, e inicia um novo buffer a cada valor startBufferEvery.',
			'O buffer é iniciado no início da origem por padrão.',
			'Se startBufferEvery não for fornecido ou for nulo, novos buffers serão iniciados imediatamente no início da origem e quando cada buffer for fechado e emitido.',
		],
		tips: [
			'buffer de valores emitidos por tamanho',
			'buffer de tamanho',
			'valor de tempo em tempo',
		],
		gistLink:
			'https://gist.github.com/rpelizza/0344fa09ad4a6e1e1b8bbcb3a64e3b44.js',
	},
	{
		name: 'BufferTime',
		route: 'buffer-time',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'bufferTimeSpan',
				default: 'undefined',
				required: true,
				type: 'number',
				description:
					'A quantidade de tempo para preencher cada array do buffer.',
			},
			{
				name: 'bufferCreationInterval',
				default: 'undefined',
				required: false,
				type: 'number',
				description: 'Tempo para a criaçao/inicialização do buffer.',
			},
			{
				name: 'maxBufferSize',
				default: 'undefined',
				required: false,
				type: 'number',
				description: 'Tamanho total do buffer.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/bufferTime',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertime',
			'https://indepth.dev/reference/rxjs/operators/buffer-time',
		],
		video: ['https://www.youtube.com/embed/M1Aw6GnUDH8'],
		shortDescription:
			'Coleta valores do passado como um array e emite esses arrays periodicamente.',
		listOfDescription: [
			'Armazena em buffer os valores durante uma duração de tempo específica informada no bufferTimeSpan',
			'A menos que o argumento opcional bufferCreationInterval seja fornecido, ele emite e redefine o buffer a cada milissegundos de acordo com o bufferTimeSpan',
			'Se bufferCreationInterval for fornecido, este operador abre o buffer a cada milissegundo (bufferCreationInterval) e fecha (emite e redefine) o buffer a cada milissegundo (bufferTimeSpan).',
			'Se maxBufferSize for fornecido, o buffer não pode exceder o tamanho máximo (maxBufferSize).',
			'Quando o argumento opcional maxBufferSize for especificado, o buffer será fechado após o tempo especificado em bufferTimeSpan ou quando contiver o máximo de elementos informados no maxBufferSize.',
			'Esse operador é semelhante ao buffer, mas em vez de usar um observável para indicação de quando liberar o buffer, ele usa um intervalo de tempo.',
			'Um comportamento interessante do operador bufferTime é que ele pode enviar um conjunto vazio de valores para o observer se o intervalo de tempo decorrer enquanto o cache estiver vazio.',
		],
		tips: [
			'buffer de valores emitidos por tempo',
			'buffer de tempo em tempo',
		],
		gistLink:
			'https://gist.github.com/rpelizza/f08886d8935d035323bf57377aa36f79.js',
	},
	{
		name: 'BufferToggle',
		route: 'buffer-toggle',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'openings',
				default: 'undefined',
				required: true,
				type: 'Observable',
				description:
					'Uma promise ou observable de notificação para iniciar o buffer',
			},
			{
				name: 'closingSelector',
				default: 'undefined',
				required: true,
				type: 'function',
				description:
					'Uma função que pega o valor emitido pelo observable openings e retorna um subscrible ou promise, que, ao emitir, sinaliza que o buffer deve ser emitido e limpo.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/bufferToggle',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffertoggle',
		],
		video: ['https://www.youtube.com/embed/vtLmd1avPrc'],
		shortDescription:
			'Ative para começar a capturar valores e desative para parar e emitir os valores armazezados no buffer.',
		listOfDescription: [
			'Começa a capturar somente quando o observable openings emitir um valor e chama a função do closingSelector para determinar quando o buffer deve ser fechado e limpo.',
		],
		tips: [
			'toggle para iniciar o buffer',
			'toggle para parar o buffer',
			'buffer de valores emitidos por toggle',
			'buffer de toggle',
		],
		gistLink:
			'https://gist.github.com/rpelizza/2d9c61bdddc6506915fcbe6236bb961b.js',
	},
	{
		name: 'BufferWhen',
		route: 'buffer-when',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'closingSelector',
				default: 'undefined',
				required: true,
				type: 'function',
				description:
					'Uma função que não recebe argumentos e retorna um Observable que sinaliza o fechamento do buffer.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/bufferWhen',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/bufferwhen',
			'https://indepth.dev/reference/rxjs/operators/buffer-when',
		],
		video: ['https://www.youtube.com/embed/D2Jo65eAdz8'],
		shortDescription:
			'Coleta todos os valores até o closingSelector ser chamado para determinar quando o buffer deve ser fechado.',
		listOfDescription: [
			'Coleta todos os valores do passado como um array. Quando começar a coletar, é chamado uma função (closingSelector) para determinar quando o buffer deve ser fechado e limpo e reiniciar a coleta.',
			'Coleta os valores emitidos da fonte observável para o cache sem passá-los para um observador até que o observável do notificador emita (buffering).',
			'O buffer então envia os valores armazenados em cache como um array, reinicia e inicia o buffer novamente até que o observável fornecido (closingSelector) seja emitido mais uma vez.',
			'Este operador é muito semelhante ao buffer, mas uma vez que o buffer é liberado, ele cancela a assinatura do observável do notificador e será reassinado assim que um novo valor chegar.',
			'Um comportamento interessante do operador bufferWhen é que ele pode enviar um conjunto vazio de valores para o observador se o observável notificador emitir um valor e o cache estiver vazio.',
			'Coleta valores do passado como um array. Quando ele começa a coletar valores, ele chama uma função que retorna um Observable que informa quando fechar o buffer e reiniciar a coleta.',
		],
		tips: [
			'buffer por um período de tempo',
			'até fechar',
			'buffer de valores emitidos por tempo',
		],
		gistLink:
			'https://gist.github.com/rpelizza/3b9f46674b16a206d47c301ba168f577.js',
	},
	{
		name: 'catchError',
		route: 'catch-error',
		category: CategoryEnum.ErrorHandling,
		parameters: [
			{
				name: 'selector',
				default: 'undefined',
				required: true,
				type: 'function',
				description:
					'Uma função que receber como argumento "err" e retorna um Observable.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/catchError',
			'https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch',
			'https://indepth.dev/reference/rxjs/operators/catch-error',
		],
		video: ['https://www.youtube.com/embed/yv_Qxk7u_YY'],
		shortDescription: 'Lide com erros em uma sequência observável',
		listOfDescription: [
			'Apenas ouve o canal de erro e ignora as notificações.',
			'Se o erro for capturado, o operador chama a função de seleção (selector) para gerar um novo Observable.',
			'Lida com erros do observável de origem e os mapeia para um novo observável.',
			'O erro também pode ser relançado ou um novo erro pode ser lançado para emitir um erro do resultado',
			'Espera-se que a função retorne um observável que substituirá o observável de origem original.',
		],
		tips: [
			'captura os erros e lança um novo erro',
			'gera um novo observable através do erro',
			'captura erro no observable',
		],
		gistLink:
			'https://gist.github.com/rpelizza/af181db39089dcb06b357d8e877537dd.js',
	},
	{
		name: 'CombineLatestAll',
		route: 'combine-latest-all',
		category: CategoryEnum.Combination,
		parameters: [
			{
				name: 'project',
				default: 'undefined',
				required: false,
				type: 'function',
				description:
					'Função opcional para mapear os valores mais recentes de cada Observable interno em um novo resultado. Recebe cada um dos valores mais recentes de cada Observável interno coletado como argumentos, em ordem.',
			},
		],
		links: ['https://rxjs.dev/api/operators/combineLatestAll'],
		video: ['https://www.youtube.com/embed/nwNrhW-rOKM'],
		shortDescription:
			'combineLatestAll pega um Observable de Observables e coleta todos os Observables dele.',
		listOfDescription: [
			'Depois que o Observable externo for concluído, ele se inscreverá em todos os Observables coletados e combinará seus valores usando a estratégia combineLatest, de modo que toda vez que um Observable interno emite, o Observable de saída emite',
			'O Observable de saída emitirá os valores mais recentes de cada Observable interno, em ordem.',
			'Quando o observável retornado emite, ele emite todos os valores mais recentes',
			'Se uma função de projeto é fornecida, ela é chamada com cada valor recente de cada Observable interno em qualquer ordem em que eles chegaram, e o resultado da função de projeto é o que é emitido pela saída Observable.',
			'Se não houver nenhuma função de projeto, um array de todos os valores mais recentes é emitida pela saída Observable.',
		],
		tips: ['Combina todos os valores de um Observable de Observables'],
		gistLink:
			'https://gist.github.com/rpelizza/7073988ba34cba1e63488c73e4770e83.js',
	},
	{
		name: 'combineLatestWith',
		route: 'combine-latest-with',
		category: CategoryEnum.Combination,
		parameters: [
			{
				name: 'otherSources',
				default: 'undefined',
				required: true,
				type: 'Observable',
				description:
					'O Observable que será combinado com o Observable de origem.',
			},
		],
		links: ['https://rxjs.dev/api/operators/combineLatestWith'],
		video: ['https://www.youtube.com/embed/yFGbzTXyDdY'],
		shortDescription:
			'Este é um operador útil para calcular valores com base em entradas alteradas.',
		listOfDescription: [
			'Retorna um observável que, quando inscrito, se inscreverá no observável de origem e todas as fontes fornecidas como argumentos.',
			'Quando qualquer um dos observáveis de origem emitir, o observável de saída emitirá os valores mais recentes de cada um deles.',
			'Assim que todas as fontes emitirem pelo menos um valor, todos os valores mais recentes serão emitidos como um array.',
		],
		tips: ['Combinação de valores com base em entradas alteradas'],
		gistLink:
			'https://gist.github.com/rpelizza/ea2b557476e2f05f0a526a323e6784c6.js',
	},
	{
		name: 'concatAll',
		route: 'concat-all',
		category: CategoryEnum.Combination,
		parameters: [],
		links: [
			'https://rxjs.dev/api/operators/concatAll',
			'https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall',
			'https://indepth.dev/reference/rxjs/operators/concat-all',
		],
		video: ['https://www.youtube.com/embed/vJHbjf4MTWM'],
		shortDescription:
			'Combina vários fluxos observáveis internos e emite sequencialmente todos os valores de cada fluxo de entrada fornecido.',
		listOfDescription: [
			'É semelhante ao concat, mas em vez de receber um conjunto de fluxos diretamente como entrada, ele usa uma fonte observável que produz outros fluxos (observáveis). Esses fluxos são frequentemente chamados de fluxos internos.',
			'Quando o observável de origem for inscrito, ele se inscreverá em todos os fluxos internos e emitirá todos os valores de todos os fluxos internos.',
			'Quando qualquer um dos fluxos internos emitir, o observável de saída emitirá todos os valores mais recentes de todos os fluxos internos.',
			'Se um fluxo interno emitir um erro, o observável de saída emitirá o erro e não continuará a emitir valores.',
			'Se um fluxo interno terminar, o observável de saída não continuará a emitir valores.',
			'O operador tem apenas uma assinatura ativa por vez, a partir da qual os valores são passados ​​para um observador. Uma vez que o fluxo ativo atual é concluído, ele se inscreve no próximo observável em uma sequência.',
			'À medida que os valores de qualquer sequência combinada são produzidos, esses valores são emitidos como parte da sequência resultante',
		],
		tips: [
			'combina vários fluxos',
			'emite sequencialmente todos os valores de cada fluxo de entrada fornecido',
			'combinação de valores com base em entradas alteradas',
		],
		gistLink:
			'https://gist.github.com/rpelizza/aee5d577edbaff62d6ed9dadf3a863ae.js',
	},
	{
		name: 'concatMap',
		route: 'concat-map',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'project',
				default: 'undefined',
				required: true,
				type: 'function',
				description:
					'Uma função que, quando aplicada a um item emitido pela fonte Observable, retorna um Observable.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/concatMap',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmap',
			'https://indepth.dev/reference/rxjs/operators/concat-map',
		],
		video: ['https://www.youtube.com/embed/pWUp4mu_0Hw'],
		shortDescription: 'Executa todas as solicitações em sequência',
		listOfDescription: [
			'Ao contrário do mergeMap, o concatMap permite executar todas as solicitações em uma sequência - somente quando a solicitação anterior é concluída, uma nova solicitação é iniciada via assinatura.',
			'Use este operador se a ordem das emissões for importante e você quiser ver primeiro os valores emitidos pelos fluxos que passam primeiro pelo operador.',
			'O operador concatMap é basicamente uma combinação de dois operadores - concat e map.',
			'A parte do mapa permite mapear um valor de uma fonte observável para um fluxo observável. Esses fluxos são frequentemente chamados de fluxos internos. A parte concat funciona como concatAll - ela combina todos os fluxos observáveis ​​internos retornados do mapa e emite sequencialmente todos os valores de cada fluxo de entrada.',
			'',
		],
		tips: [
			'Aplica uma função a cada valor emitido e retorna um Observable',
			'Aguarda a conclusão do observável anterior antes de executar o próximo',
		],
		gistLink:
			'https://gist.github.com/rpelizza/930e30d0936afac6eb8b647dc24c0d8f.js',
	},
	{
		name: 'concatMapTo',
		route: 'concat-map-to',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'innerObservable',
				default: 'undefined',
				required: true,
				type: 'Observable',
				description:
					'O Observable que será emitido quando o fluxo for concluído.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/concatMapTo',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmapto',
		],
		video: ['https://www.youtube.com/embed/ktvLt0mKJJY'],
		shortDescription:
			'É como concatMap, mas mapeia cada valor sempre para o mesmo Observable interno.',
		listOfDescription: [
			'Mapeia cada valor de origem para o Observable internalObservable fornecido, independentemente do valor de origem, e depois nivela os Observables resultantes em um único Observable, que é o Observable de saída.',
			'O operador concatMapTo é basicamente uma combinação de dois operadores - concat e mapTo.',
			'A parte do mapa permite mapear um valor de uma fonte observável para um fluxo observável. Esses fluxos são frequentemente chamados de fluxos internos. A parte concat funciona como concatAll - ela combina todos os fluxos observáveis ​​internos retornados do mapa e emite sequencialmente todos os valores de cada fluxo de entrada.',
			'Cada nova instância de innerObservable emitida na saída Observable é concatenada com a instância de innerObservable anterior.',
		],
		tips: ['parecido com concatMap'],
		gistLink:
			'https://gist.github.com/rpelizza/c673e3f6d6f157696b5673b9a94a1dfa.js',
	},
	{
		name: 'Debounce',
		route: 'debounce',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'durationSelector',
				default: 'undefined',
				required: true,
				type: 'function',
				description:
					'Uma função que retorna um valor numérico que representa o tempo de espera.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/debounce',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/debounce',
			'https://indepth.dev/reference/rxjs/operators/debounce',
		],
		video: ['https://www.youtube.com/embed/1yRTnsf4Ia0'],
		shortDescription:
			'Como debounceTime, este é um operador de limitação de taxa e também um operador de atraso',
		listOfDescription: [
			'debounce atrasa os valores emitidos por uma fonte até que a duração Observable emita um valor ou seja concluída.',
			'Se dentro desse tempo um novo valor chegar, o valor pendente anterior será descartado e a duração Observável será reassinada',
			'O operador debounce permite que você espere um tempo, baseado no tempo de duração do observable (durationSelector), antes de emitir um novo valor.',
			'Este operador é usado principalmente para eventos que podem ser acionados dezenas ou até centenas de vezes por segundo.',
			'Os exemplos mais comuns são eventos DOM, como rolagem, movimento do mouse e pressionamento de tecla. Ao usar o debouce, você só se preocupa com o estado final.',
			'Por exemplo, a posição de rolagem atual quando um usuário para de rolar ou um texto final em uma caixa de pesquisa depois que um usuário para de digitar caracteres.',
			'Além disso, você deve considerar envolver qualquer interação que acione cálculos excessivos ou chamadas de API com um debounce.',
		],
		tips: [
			'aguardar ação do usuário',
			'usar o debounce para eventos de teclado',
			'usar o debounce para eventos de mouse',
			'usar o debounce para eventos de scroll',
			'atrasar valores',
			'esperar ação do usuário',
		],
		gistLink:
			'https://gist.github.com/rpelizza/399670de0bc38a9f4b092dcbb0d56926.js',
	},
	{
		name: 'debounceTime',
		route: 'debounce-time',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'dueTime',
				default: 'undefined',
				required: true,
				type: 'number',
				description: 'O tempo de espera em milissegundos.',
			},
			{
				name: 'scheduler',
				default: 'undefined',
				required: false,
				type: 'Scheduler',
				description: 'O escalonador a ser usado.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/debounceTime',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/debouncetime',
			'https://indepth.dev/reference/rxjs/operators/debounce-time',
		],
		video: ['https://www.youtube.com/embed/FbX2yM3AyaU'],
		shortDescription:
			'debounceTime atrasa os valores emitidos por uma fonte para o prazo determinado.',
		listOfDescription: [
			'debounceTime atrasa as notificações emitidas pela fonte Observável, mas descarta as emissões atrasadas pendentes anteriores se uma nova notificação chegar na fonte Observável.',
			'O operador debounceTime permite que você espere um tempo, baseado no tempo de duração do observable (dueTime), antes de emitir um novo valor.',
			'Este operador é usado principalmente para eventos que podem ser acionados dezenas ou até centenas de vezes por segundo.',
			'Se um novo valor aparecer antes que ocorra o silêncio de dueTime, a notificação anterior será descartada e não será emitida e um novo dueTime será agendado.',
			'Se o evento de conclusão ocorrer durante o dueTime, a última notificação em cache será emitida antes que o evento de conclusão seja encaminhado para o observável de saída.',
			'Se o evento de erro ocorrer durante o dueTime ou depois dele somente o evento de erro é encaminhado para a saída observável. A notificação de cache não é emitida neste caso.',
			'Se dentro desse tempo um novo valor chegar, o valor pendente anterior será descartado e o cronômetro (dueTime) será reiniciado.',
			'Ao usar o debouceTime, você se preocupa apenas com o estado final.',
			'Por exemplo, a posição de rolagem atual quando um usuário para de rolar ou um texto final em uma caixa de pesquisa depois que um usuário para de digitar caracteres.',
		],
		tips: [
			'aguardar ação do usuário',
			'usar o debounceTime para eventos de teclado',
			'usar o debounceTime para eventos de mouse',
			'usar o debounceTime para eventos de scroll',
		],
		gistLink:
			'https://gist.github.com/rpelizza/e854ba123fa5aa9a57abe372c8f2a3ef.js',
	},
	{
		name: 'defaultIfEmpty',
		route: 'default-if-empty',
		category: CategoryEnum.Conditional,
		parameters: [
			{
				name: 'defaultValue',
				default: 'undefined',
				required: true,
				type: 'any',
				description:
					'O valor padrão a ser usado se o observable não emitir nenhum valor.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/defaultIfEmpty',
			'https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty',
		],
		video: ['https://www.youtube.com/embed/eTR1ng8rE6A'],
		shortDescription: 'Substitui valores nulos por um valor padrão.',
		listOfDescription: [
			'O operador defaultIfEmpty substitui valores nulos por um valor padrão.',
			'Emite determinado valor se nada for emitido antes da conclusão',
			'Se o observable não emitir nenhum valor, o operador defaultIfEmpty emitirá um valor padrão.',
			'Se o observable emitir um valor, o operador defaultIfEmpty não emitirá nada.',
		],
		tips: ['valor padrão', 'se não tiver valor'],
		gistLink:
			'https://gist.github.com/rpelizza/7975dcaf91d2a76098b4e805f0ddace1.js',
	},
	{
		name: 'Delay',
		route: 'delay',
		category: CategoryEnum.Utility,
		parameters: [
			{
				name: 'due',
				default: 'undefined',
				required: true,
				type: 'number',
				description: 'O tempo de espera em milissegundos.',
			},
			{
				name: 'scheduler',
				default: 'undefined',
				required: false,
				type: 'Scheduler',
				description: 'O escalonador a ser usado.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/delay',
			'https://www.learnrxjs.io/learn-rxjs/operators/utility/delay',
			'https://indepth.dev/reference/rxjs/operators/delay',
		],
		video: ['https://www.youtube.com/embed/tVVAvVd61zo'],
		shortDescription:
			'Atrasa (delay) valores emitidos por um tempo determinado.',
		listOfDescription: [
			'Delay desloca cada valor emitido da fonte observável por um período de tempo definido ou até uma determinada data.',
			'Delay é comumente usado para simular alguma atividade assíncrona, como requisições.',
		],
		tips: [
			'usar delay para simular uma requisição',
			'usar delay para simular uma atividade assíncrona',
			'atrasar resultado de uma requisição',
		],
		gistLink:
			'https://gist.github.com/rpelizza/78d7aa1f97dd211ac32e7963f7005996.js',
	},
	{
		name: 'delayWhen',
		route: 'delay-when',
		category: CategoryEnum.Utility,
		parameters: [
			{
				name: 'delayDurationSelector',
				default: 'undefined',
				required: true,
				type: 'function',
				description: 'A função que determina o tempo de espera.',
			},
			{
				name: 'subscriptionDelay',
				default: 'undefined',
				required: false,
				type: 'Observable',
				description: 'O observable que determina o tempo de espera.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/delayWhen',
			'https://www.learnrxjs.io/learn-rxjs/operators/utility/delaywhen',
		],
		video: ['https://www.youtube.com/embed/6h3euwJTIsA'],
		shortDescription:
			'Valores emitidos cm delay determinados pela função fornecida',
		listOfDescription: [
			'Quando a fonte emite um valor, a função delayDurationSelector é chamada com o valor da fonte como argumento e deve retornar um Observable, chamado de "duration" Observable.',
			'O operador delayWhen espera o tempo determinado pelo Observable duration, e em seguida, emite o valor da fonte.',
			'O operador delayWhen é usado para simular atividades assíncronas, como requisições.',
		],
		tips: [
			'usar delayWhen para simular uma requisição',
			'usar delayWhen para simular uma atividade assíncrona',
			'atrasar resultado de uma requisição',
		],
		gistLink:
			'https://gist.github.com/rpelizza/daa8bf3eabda8d1237876297f14a577d.js',
	},
	{
		name: 'Distinct',
		route: 'distinct',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'keySelector',
				default: 'undefined',
				required: false,
				type: 'function',
				description: 'A função que determina o valor a ser comparado.',
			},
			{
				name: 'flushes',
				default: 'undefined',
				required: false,
				type: 'Observable',
				description:
					'O observable que determina o valor a ser comparado.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/distinct',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinct',
		],
		video: ['https://www.youtube.com/embed/rRCFEpKUUA8'],
		shortDescription:
			'Emite itens emitidos que são distintos com base em qualquer item emitido anteriormente',
		listOfDescription: [
			'O operador distinct espera um valor a ser comparado com os valores emitidos anteriormente.',
			'O operador distinct é usado para filtrar valores repetidos.',
		],
		tips: ['filtra valores repetidos', 'compara os valores'],
		gistLink:
			'https://gist.github.com/rpelizza/59c234a327e4df789ee36ada3d83952f.js',
	},
	{
		name: 'distinctUntilChanged',
		route: 'distinct-until-changed',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'compare',
				default: 'undefined',
				required: false,
				type: 'function',
				description: 'A função que determina o valor a ser comparado.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/distinctUntilChanged',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged',
			'https://indepth.dev/reference/rxjs/operators/distinct-until-changed',
		],
		video: ['https://www.youtube.com/embed/9Z3hjL7etQg'],
		shortDescription: 'Só emite quando o valor atual é diferente do último',
		listOfDescription: [
			'emite todos os itens emitidos pela fonte observável que são distintos por comparação do item anterior',
			'O operador distinctUntilChanged é usado para filtrar valores repetidos.',
			'O operador usa uma função de comparação opcional que será chamada para testar se um item é diferente do item anterior',
		],
		tips: ['filtra valores repetidos', 'compara os valores'],
		gistLink:
			'https://gist.github.com/rpelizza/90e9400db37aab09efe2f0b1a42f0939.js',
	},
	{
		name: 'distinctUntilKeyChanged',
		route: 'distinct-until-key-changed',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'key',
				default: 'undefined',
				required: false,
				type: 'string',
				description: 'O nome da chave a ser comparada.',
			},
			{
				name: 'compare',
				default: 'undefined',
				required: false,
				type: 'function',
				description: 'A função que determina o valor a ser comparado.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/distinctUntilKeyChanged',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilkeychanged',
		],
		video: ['https://www.youtube.com/embed/Y1eQIKM43L8'],
		shortDescription:
			'só emite quando o valor da chave especificado foi alterado',
		listOfDescription: [
			'Se uma função de comparação for fornecida, ela será chamada para cada item para testar se esse valor deve ou não ser emitido.',
			'Se uma função de comparação não for fornecida, uma verificação de igualdade será usada por padrão.',
		],
		tips: ['compara valores de chave especificada'],
		gistLink:
			'https://gist.github.com/rpelizza/5ae2b55c901451c76d64268ebf204d8d.js',
	},
	{
		name: 'Every',
		route: 'every',
		category: CategoryEnum.Conditional,
		parameters: [
			{
				name: 'predicate',
				default: 'undefined',
				required: false,
				type: 'function',
				description: 'A função que determina se o item é válido.',
			},
			{
				name: 'thisArg',
				default: 'undefined',
				required: false,
				type: 'Any',
				description:
					'Objeto opcional a ser usado para o this no retorno da chamada.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/every',
			'https://www.learnrxjs.io/learn-rxjs/operators/conditional/every',
		],
		video: ['https://www.youtube.com/embed/908PDgRjlmc'],
		shortDescription:
			'Se todos os valores passarem o predicado antes da conclusão emitem true, senão false.',
		listOfDescription: [
			'Se todos os valores passarem o predicado antes da conclusão, o operador every emite true, senão false.',
			'O operador every é usado para verificar se todos os valores passam um predicado.',
		],
		tips: [
			'emite true se todos os valores passarem o predicado',
			'emite false se algum valor não passar o predicado',
		],
		gistLink:
			'https://gist.github.com/rpelizza/08434929748fcdbb66aa95b41f054be3.js',
	},
	{
		name: 'exhaustAll',
		route: 'exhaust-all',
		category: CategoryEnum.Transformation,
		parameters: [],
		links: ['https://rxjs.dev/api/operators/exhaustAll'],
		video: ['https://www.youtube.com/embed/zILQWE9u_3w'],
		shortDescription:
			'Converte um Observável de ordem superior em um Observável de primeira ordem descartando Observáveis internos enquanto o Observável interno anterior ainda não foi concluído.',
		listOfDescription: [
			'exaustorAll assina um Observable que emite Observables, também conhecido como Observable de ordem superior. Cada vez que observa um desses Observables internos emitidos, o Observable de saída começa a emitir os itens emitidos por esse Observable interno. Até agora, ele se comporta como mergeAll. No entanto, o escapeAll ignora cada novo Observável interno se o Observável anterior ainda não tiver sido concluído. Uma vez concluído, ele aceitará e nivelará o próximo Observável interno e repetirá esse processo.',
		],
		tips: [],
		gistLink:
			'https://gist.github.com/rpelizza/e8a5ddee67d2b5d5e5f1863ddf4cfe07.js',
	},
	{
		name: 'ExhaustMap',
		route: 'exhaust-map',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'project',
				default: 'undefined',
				required: false,
				type: 'function',
				description:
					'A função que determina o Observável a ser emitido.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/exhaustMap',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap',
			'https://indepth.dev/reference/rxjs/operators/exhaust-map',
		],
		video: ['https://www.youtube.com/embed/UZ3a17cuN1o'],
		shortDescription:
			'Projeta cada valor de origem para um Observável que é mesclado na saída Observável somente se o Observável projetado anterior tiver sido concluído',
		listOfDescription: [
			'permite mapear um valor de uma fonte observável de ordem superior para um fluxo observável interno',
			'A parte de exhaust que se inscreve em um observável interno e passa valores para um observador se já não houver uma assinatura ativa, caso contrário, apenas ignora novos observáveis internos',
			'tem apenas uma assinatura ativa por vez, a partir da qual os valores são passados para um observador',
			'o operador exhaustMap é um operador de transformação que permite que você projete um valor de entrada para um fluxo de saída, mesclando o fluxo de saída com o fluxo de entrada',
		],
		tips: [],
		gistLink:
			'https://gist.github.com/rpelizza/21d2a459fc036645e4fc0a2e8e9a54a5.js',
	},
	{
		name: 'Expand',
		route: 'expand',
		category: CategoryEnum.Transformation,
		parameters: [
			{
				name: 'project',
				default: 'undefined',
				required: false,
				type: 'function',
				description:
					'A função que determina o Observável a ser emitido.',
			},
			{
				name: 'concurrent',
				default: 'undefined',
				required: false,
				type: 'number',
				description:
					'O número máximo de observáveis internos que podem ser emitidos por vez.',
			},
			{
				name: 'scheduler',
				default: 'undefined',
				required: false,
				type: 'Scheduler',
				description:
					'O escalonador a ser usado para controlar o fluxo de saída.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/expand',
			'https://www.learnrxjs.io/learn-rxjs/operators/transformation/expand',
		],
		video: ['https://www.youtube.com/embed/6qw3d3eCIOA'],
		shortDescription: 'Chama recursivamente a função fornecida.',
		listOfDescription: [
			'expand é um operador de transformação que chama recursivamente a função fornecida e emite os resultados.',
			'É semelhante ao mergeMap, mas aplica a função de projeção a todos os valores de origem, bem como a todos os valores de saída. É recursivo.',
		],
		tips: [
			'recursivamente',
			'aplicação de função de projeção',
			'emissão de valores de saída',
		],
		gistLink:
			'https://gist.github.com/rpelizza/a84874edd970b384658f77a23f3fff17.js',
	},
	{
		name: 'Filter',
		route: 'filter',
		category: CategoryEnum.Filtering,
		parameters: [
			{
				name: 'predicate',
				default: 'undefined',
				required: false,
				type: 'function',
				description:
					'A função que determina se um valor de entrada deve ser filtrado.',
			},
			{
				name: 'thisArg',
				default: 'undefined',
				required: false,
				type: 'any',
				description:
					'O valor a ser usado como this na função de filtro.',
			},
		],
		links: [
			'https://rxjs.dev/api/operators/filter',
			'https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter',
			'https://indepth.dev/reference/rxjs/operators/filter',
		],
		video: [
			'https://www.youtube.com/embed/tk5x8By3yYk'
		],
		shortDescription: 'Filtra os valores de entrada.',
		listOfDescription: [
			'filtra os valores de entrada',
			'é um operador de filtragem que filtra os valores de entrada',
			'A ideia é muito semelhante ao método de filtro padrão no Array.',
			'Se você só precisa filtrar valores semelhantes consecutivos, pode usar distinctUntilChanged.',
		],
		tips: [
			'filtra os valores de entrada',
			'semelhante ao método filter',
		],
		gistLink: 'https://gist.github.com/rpelizza/04d8590daa5fc4402aca87da09551642.js',
	},
];
