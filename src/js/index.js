function makeHtml(partials, tag) {
  return partials.map(x => `<${tag} style="text-align: justify">${x}</${tag}>`).reduce((x, y) => x + y + ``)
}

function getContent(fragmentId) {

	let partials = {
		i: [
			"1 - Existem dois caminhos: o caminho da vida e o caminho da morte. Há uma grande diferença entre os dois.",
			"2 - Este é o caminho da vida: primeiro, ame a Deus que o criou; segundo, ame a seu próximo como a si mesmo. Não faça ao outro aquilo que você não quer que façam a você.",
			"3 - Este é o ensinamento derivado dessas palavras: bendiga aqueles que o amaldiçoam, reze por seus inimigos e jejue por aqueles que o perseguem. Ora, se você ama aqueles que o amam, que graça você merece? Os pagãos também não fazem o mesmo? Quanto a você, ame aqueles que o odeiam e assim você não terá nenhum inimigo.",
			"4 - Não se deixe levar pelo instinto. Se alguém lhe bofeteia na face direita, ofereça-lhe também a outra face e assim você será perfeito. Se alguém o obriga a acompanhá-lo por um quilometro, acompanhe-o por dois. Se alguém lhe tira o manto, ofereça-lhe também a túnica. Se alguém toma alguma coisa que lhe pertence, não a peça de volta porque não é direito.",
			"5 - Dê a quem lhe pede e não peças de volta pois o Pai quer que os seus bens sejam dados a todos. Bem-aventurado aquele que dá conforme o mandamento pois será considerado inocente. Ai daquele que recebe: se pede por estar necessitado, será considerado inocente; mas se recebeu sem necessidade, prestará contas do motivo e da finalidade. Será posto na prisão e será intgerrogado sobre o que fez... e daí não sairá até que devolva o último centavo. 6Sobre isso também foi dito: que a sua esmola fique suando nas suas mãos até que você saiba para quem a está dando.",
		],
		ii: [
			"1 - O segundo mandamento da instrução é:",
			"2 - Não mate, não cometa adultério, não corrompa os jovens, não fornique, não roube, não pratique a magia nem a feitiçaria. Não mate a criança no seio de sua mãe e nem depois que ela tenha nascido.",
			"3 - Não cobice os bens alheios, não cometa falso juramento, nem preste falso testemunho, não seja maldoso, nem vingativo.",
			"4 - Não tenha duplo pensamento ou linguajar pois o duplo sentido é armadilha fatal.",
			"5 - A sua palavra não deve ser em vão, mas comprovada na prática.",
			"6 - Não seja avarento, nem ladrão, nem fingido, nem malicioso, nem soberbo. Não planeje o mal contra o seu próximo.",
			"7 - Não odeie a ninguém, mas corrija alguns, reze por outros e ame ainda aos outros, mais até do que a si mesmo."
		],
		iii: [
			"1 - Filho, procure evitar tudo aquilo que é mau e tudo que se parece com o mal.",
			"2 - Não seja colérico porque a ira conduz à morte. Não seja ciumento também, nem briguento ou violento, pois o homicídio nasce de todas essas coisas.",
			"3 - Filho, não cobice as mulheres pois a cobiça leva à fornicação. Evite falar palavras obscenas e olhar maliciosamente já que os adultérios surgem dessas coisas.",
			"4 - Filho, não se aproxime da adivinhação porque ela leva à idolatria. Não pratique encantamentos, astrologia ou purificações, nem queira ver ou ouvir sobre isso, pois disso tudo nasce a idolatria.",
			"5 - Filho, não seja mentiroso pois a mentira leva ao roubo. Não persiga o dinheiro nem cobice a fama porque os roubos nascem dessas coisas.",
			"6 - Filho, não fale demais pois falar muito leva à blasfêmia. Não seja insolente, nem tenha mente perversa porque as blasfêmias nascem dessas coisas.",
			"7 - Seja manso pois os mansos herdarão a terra.",
			"8 - Seja paciente, misericordioso, sem maldade, tranquilo e bondoso. Respeite sempre as palavras que você escutou.",
			"9 - Não louve a si mesmo, nem se entrege à insolência. Não se junte com os poderosos, mas aproxima dos justos e pobres.",
			"10 - Aceite tudo o que acontece contigo como coisa boa e saiba que nada acontece sem a permissão de Deus."
		],
		iv: [
			"1 - Filho, lembre-se dia e noite daquele que prega a Palavra de Deus para você. Honre-o como se fosse o próprio Senhor, pois Ele está presente onde a soberania do Senhor é anunciada.",
			"2 - Procure estar todos os dias na companhia dos fiéis para encontrar forças em suas palavras.",
			"3 - Não provoque divisão. Ao contrário, reconcilia aqueles que brigam entre si. Julgue de forma justa e corrija as culpas sem distinguir as pessoas.",
			"4 - Não hesite sobre o que vai acontecer.",
			"5 - Não te pareças com aqueles que dão a mão quando precisam e a retiram quando devem dar.",
			"6 - Se o trabalho de suas mãos te rendem algo, as ofereça como reparação pelos seus pecados.",
			"7 - Não hesite em dar, nem dê reclamando porque, na verdade, você sabe quem realmente pagou sua recompensa. reverência, como à própria imagem de Deus.",
			"8 - Não rejeite o necessitado. Compartilhe tudo com seu irmão e não diga que as coisas são apenas suas. Se vocês estão unidos nas coisas imortais, tanto mais estarão nas coisas perecíveis.",
			"9 - Não se descuide de seu filho ou filha. Muito pelo contrário, desde a infância instrua-os a temer a Deus.",
			"10 - Não dê ordens com rudeza ao seu escravo ou escrava pois eles também esperam no mesmo Deus que você; assim, não perderão o temor de Deus, que está acima de todos. Certamente Ele não virá chamar a pessoa pela aparência, mas somente aqueles que foram preparados pelo Espírito.",
			"11 - Quanto a vocês, escravos, obedeçam aos seus senhores, com todo o respeito e reverência, como à própria imagem de Deus.",
			"12 - Deteste toda a hipocrisia e tudo aquilo que não agrada o Senhor.",
			"13 - Não viole os mandamentos dos Senhor. Guarde tudo aquilo que você recebeu: não acrescente ou retire nada.",
			"14 - Confesse seus pecados na reunião dos fiéis e não comece a orar estando com má consciência. Este é o caminho da vida."
		],
		v: [
			"1 - Este é o caminho da morte: primeiro, é mau e cheio de maldições - homicídios, adultérios, paixões, fornicações, roubos, idolatria, magias, feitiçarias, rapinas, falsos testemunhos, hipocrisias, coração com duplo sentido, fraudes, orgulho, maldades, arrogância, avareza, palavras obscenas, ciúmes, insolência, altivez, ostentação e falta de temor de Deus.",
			"2 - Nesse caminho trilham os perseguidores dos justos, os inimigos da verdade, os amantes da mentira, os ignorantes da justiça, os que não desejam o bem nem o justo julgamento, os que não praticam o bem mas o mal. A calma e a paciência estão longe deles. Estes amam as coisas vãs, são ávidos por recompensas, não se compadecem com os pobres, não se importam com os perseguidos, não reconhecem o Criador. São também assassinos de crianças, corruptores da imagem de Deus, desprezam os necessitados, oprimem os aflitos, defendem os ricos, julgam injustamente os pobres e, finalmente, são pecadoresconsumados. Filho, afaste-se disso tudo.",
		],
		vi: [
			"1 - Fique atento para que ninguém o afaste do caminho da instrução, pois quem faz isso ensina coisas que não pertencem a Deus.",
			"2 - Você será perfeito se conseguir carregar todo o jugo do Senhor. Se isso não for possível, faça o que puder.",
			"3 - A respeito da comida, observe o que puder. Não coma nada do que é sacrificado aos ídolos pois esse culto é destinado a deuses mortos."
		],
		vii: [
			"1 - Quanto ao batismo, faça assim: depois de ditas todas essas coisas, batize em água corrente, em nome do Pai e do Filho e do Espírito Santo.",
			"2 - Se você não tiver água corrente, batize em outra água. Se não puder batizar com água fria, faça com água quente.",
			"3 - Na falta de uma ou outra, derrame água três vezes sobre a cabeça, em nome do Pai e do Filho e do Espírito Santo.",
			"4 - Antes de batizar, tanto aquele que batiza como o batizando, bem como aqueles que puderem, devem observar o jejum. Você deve ordenar ao batizando um jejum de um ou dois dias."
		],
		viii: [
			"1 - Os seus jejuns não devem coincidir com os dos hipócritas. Eles jejuam no segundo e no quinto dia da semana. Porém, você deve jejuar no quarto dia e no dia da preparação.",
			"2 - Não reze como os hipócritas, mas como o Senhor ordenou em seu Evangelho. Reze assim: 'Pai nosso que estás no céu, santificado seja o teu nome, venha o teu Reino, seja feita a tua vontade, assim na terra como no céu; o pão-nosso de cada dia nos dai hoje, perdoai nossa dívida, assim como também perdoamos os nossos devedores e não nos deixes cair em tentação, mas livrai-nos do mal porque teu é o poder e a glória para sempre'.",
			"3 - Rezem assim três vezes ao dia."
		],
		ix: [
			"1 - Celebre a Eucaristia assim:",
			"2 - Diga primeiro sobre o cálice: 'Nós te agradecemos, Pai nosso, por causa da santa vinha do teu servo Davi, que nos revelaste através do teu servo Jesus. A ti, glória para sempre'.",
			"3 - Depois diga sobre o pão partido: 'Nós te agradecemos, Pai nosso, por causa da vida e do conhecimento que nos revelaste através do teu servo Jesus. A ti, glória para sempre.",
			"4 - Da mesma forma como este pão partido havia sido semeado sobre as colinas e depois foi recolhido para se tornar um, assim também seja reunida a tua Igreja desde os confins da terra no teu Reino, porque teu é o poder e a glória, por Jesus Cristo, para sempre'.",
			"5 - Que ninguém coma nem beba da Eucaristia sem antes ter sido batizado em nome do Senhor pois sobre isso o Senhor disse: 'Não dêem as coisas santas aos cães'."
		],
		x: [
			"1 - Após ser saciado, agradeça assim:",
			"2 - 'Nós te agradecemos, Pai santo, por teu santo nome que fizeste habitar em nossos corações e pelo conhecimento, pela fé e imortalidade que nos revelaste através do teu servo Jesus. A ti, glória para sempre.",
			"3 - Tu, Senhor onipotente, criaste todas as coisas por causa do teu nome e deste aos homens o prazer do alimento e da bebida, para que te agradeçam. A nós, porém, deste uma comida e uma bebida espirituais e uma vida eterna através do teu servo.",
			"4 - Antes de tudo, te agradecemos porque és poderoso. A ti, glória para sempre.",
			"5 - Lembra-te, Senhor, da tua Igreja, livrando-a de todo o mal e aperfeiçoando-a no teu amor. Reúne dos quatro ventos esta Igreja santificada para o teu Reino que lhe preparaste, porque teu é o poder e a glória para sempre.",
			"6 - Que a tua graça venha e este mundo passe. Hosana ao Deus de Davi. Venha quem é fiel, converta-se quem é infiel. Maranatha. Amém.'",
			"7 - Deixe os profetas agradecerem à vontade."
		],
		xi: [
			"1 - Se vier alguém até você e ensinar tudo o que foi dito anteriormente, deve ser acolhido.",
			"2 - Mas se aquele que ensina é perverso e ensinar outra doutrina para te destruir, não lhe dê atenção. No entanto, se ele ensina para estabelecer a justiça e conhecimento do Senhor, você deve acolhê-lo como se fosse o Senhor.",
			"3 - Já quanto aos apóstolos e profetas, faça conforme o princípio do Evangelho.",
			"4 - Todo apóstolo que vem até você deve ser recebido como o próprio Senhor.",
			"5 - Ele não deve ficar mais que um dia ou, se necessário, mais outro. Se ficar três dias é um falso profeta.",
			"6 - Ao partir, o apóstolo não deve levar nada a não ser o pão necessário para chegar ao lugar onde deve parar. Se pedir dinheiro é um falso profeta.",
			"7 - Não ponha à prova nem julgue um profeta que fala tudo sob inspiração, pois todo pecado será perdoado, mas esse não será perdoado.",
			"8 - Nem todo aquele que fala inspirado é profeta, a não ser que viva como o Senhor. É desse modo que você reconhece o falso e o verdadeiro profeta.",
			"9 - Todo profeta que, sob inspiração, manda preparar a mesa não deve comer dela. Caso contrário, é um falso profeta.",
			"10 - Todo profeta que ensina a verdade mas não pratica o que ensina é um falso profeta.",
			"11 - Todo profeta comprovado e verdadeiro, que age pelo mistério terreno da Igreja, mas que não ensina a fazer como ele faz não deverá ser julgado por você; ele será julgado por Deus. Assim fizeram também os antigos profetas.",
			"12 - Se alguém disser sob inspiração: 'Dê-me dinheiro' ou qualquer outra coisa, não o escutem. Porém, se ele pedir para dar a outros necessitados, então ninguém o julgue."
		],
		xii: [
			"1 - Acolha toda aquele que vier em nome do Senhor. Depois, examine para conhecê-lo, pois você tem discernimento para distinguir a esquerda da direita.",
			"2 - Se o hóspede estiver de passagem, dê-lhe ajuda no que puder. Entretanto, ele não deve permanecer com você mais que dois ou três dias, se necessário.",
			"3 - Se quiser se estabelecer e tiver uma profissão, então que trabalhe para se sustentar.",
			"4 - Porém, se ele não tiver profissão, proceda de acordo com a prudência, para que um cristão não viva ociosamente em seu meio.",
			"5 - Se ele não aceitar isso, trata-se de um comerciante de Cristo. Tenha cuidado com essa gente!"
		],
		xiii: [
			"1 - Todo verdadeiro profeta que queira estabelecer-se em seu meio é digno do alimento.",
			"2 - Assim também o verdadeiro mestre é digno do seu alimento, como qualquer operário.",
			"3 - Assim, tome os primeiros frutos de todos os produtos da vinha e da eira, dos bois e das ovelhas, e os dê aos profetas, pois são eles os seus sumos-sacerdotes.",
			"4 - Porém, se você não tiver profetas, dê aos pobres.",
			"5 - Se você fizer pão, tome os primeiros e os dê conforme o preceito.",
			"6 - Da mesma maneira, ao abrir um recipiente de vinho ou óleo, tome a primeira parte e a dê aos profetas.",
			"7 - Tome uma parte de seu dinheiro, da sua roupa e de todas as suas posses, conforme lhe parecer oportuno, e os dê de acordo com o preceito."
		],
		xiv: [
			"1 - Reúna-se no dia do Senhor para partir o pão e agradecer após ter confessado seus pecados, para que o sacrifício seja puro.",
			"2 - Aquele que está brigado com seu companheiro não pode juntar-se antes de se reconciliar, para que o sacrifício oferecido não seja profanado.",
			"3 - Esse é o sacrifício do qual o Senhor disse: 'Em todo lugar e em todo tempo, seja oferecido um sacrifício puro porque sou um grande rei - diz o Senhor - e o meu nome é admirável entre as nações'."
		],
		xv: [
			"1 - Escolha bispos e diáconos dignos do Senhor. Eles devem ser homens mansos, desprendidos do dinheiro, verazes e provados pois também exercem para vocês o ministério dos profetas e dos mestres.",
			"2 - Não os despreze porque eles têm a mesma dignidade que os profetas e os mestres.",
			"3 - Corrija uns aos outros, não com ódio, mas com paz, como você tem no Evangelho. E ninguém fale com uma pessoa que tenha ofendido o próximo; que essa pessoa não escute uma só palavra sua até que tenha se arrependido.",
			"4 - Faça suas orações, esmolas e ações da forma que você tem no Evangelho de nosso Senhor."
		],
		xvi: [
			"1 - Vigie sobre a vida uns dos outros. Não deixe que sua lâmpada se apague, nem afrouxe o cinto dos rins. Fique preparado porque você não sabe a que horas nosso Senhor chegará.",
			"2 - Reúna-se com frequência para que, juntos, procurem o que convém a vocês; porque de nada lhe servirá todo o tempo que viveu a fé se no último instante não estiver perfeito.",
			"3 - De fato, nos últimos dias se multiplicarão os falsos profetas e os corruptores, as ovelhas se transformarão em lobos e o amor se converterá em ódio.",
			"4 - Aumentando a injustiça, os homens se odiarão, se perseguirão e se trairão mutuamente. Então o sedutor do mundo aparecerá, como se fosse o Filho de Deus, e fará sinais e prodígios. A terra será entregue em suas mãos e cometerá crimes como jamais foram cometidos desde o começo do mundo.",
			"5 - Então toda criatura humana passará pela prova de fogo e muitos, escandalizados, perecerão. No entanto, aqueles que permanecerem firmes na fé serão salvos por aquele que os outros amaldiçoam.",
			"6 - Então aparecerão os sinais da verdade: primeiro, o sinal da abertura no céu; depois, o sinal do toque da trombeta; e, em terceiro, a ressurreição dos mortos.",
			"7 - Sim, a ressurreição, mas não de todos, conforme foi dito: 'O Senhor virá e todos os santos estarão com ele'.",
			"8 - Então o mundo assistirá o Senhor chegando sobre as nuvens do céu."
		]
	}

	if(!partials[fragmentId]) {
		return new Error('Not Found');
	}

	return makeHtml(partials[fragmentId], "p");
};

function removeHashTagFragment(fragment) {
	return fragment.substr( 1 );
};

function navigate() {
	let contentDiv = document.querySelector( '.container' );
	let fragmentId = removeHashTagFragment( location.hash );

	let html = `
		<div class="row">
	    <div class="col">
	      <h2 class="text-center">Capítulo ${ fragmentId.toUpperCase() }</h2>
	      <hr />
				${ getContent( fragmentId ) }
	    </div>
	  </div>
	`;

	contentDiv.innerHTML = html;
}

!location.hash && ( location.hash = "#i");

navigate();

window.addEventListener('hashchange', navigate);