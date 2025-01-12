let listaDeNumerosSorteados = [];
let numSecreto = gerarNumeroAleatorio();
let tentativa = 1;
let novoJogo = document.getElementById("reiniciar");

function exibirTextoNaTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;

    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate: 1.2})
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela(".texto__paragrafo", "Escolha um número entre 1 e 10");

function verificarChute() {
	let chute = parseInt(document.querySelector("input").value);

	if (numSecreto === chute) {
		let palavraTentativas = tentativa > 1 ? "tentativas" : "tentativa";

		exibirTextoNaTela("h1", "Acertou, parabéns!");
		exibirTextoNaTela(
			".texto__paragrafo",
			`Você acertou o número ${chute} em ${tentativa} ${palavraTentativas}.`
		);
		novoJogo.removeAttribute("disabled");
	} else {
		exibirTextoNaTela("h1", "Errou, tente novamente");

		if (numSecreto > chute) {
			exibirTextoNaTela(
				".texto__paragrafo",
				`O número secreto é maior que ${chute}.`
			);
		} else {
			exibirTextoNaTela(
				".texto__paragrafo",
				`O número secreto é menor que ${chute}.`
			);
		}
		limparCampo();
		tentativa++;
	}
}

function limparCampo() {
	let chute = document.querySelector("input");
	chute.value = "";
}

function gerarNumeroAleatorio() {
	let numSorteado = Math.floor(Math.random() * 10) + 1;
	let quatidadeDeElementos = listaDeNumerosSorteados.length;

	if (quatidadeDeElementos >= 10) {
		listaDeNumerosSorteados = [];
	}
	if (listaDeNumerosSorteados.includes(numSorteado)) {
		return gerarNumeroAleatorio();
	} else {
		listaDeNumerosSorteados.push(numSorteado);
		console.log(listaDeNumerosSorteados);
		return numSorteado;
	}
}

function reiniciarJogo() {
	numSecreto = gerarNumeroAleatorio();
	limparCampo();
	tentativa = 1;
	exibirTextoNaTela("h1", "Jogo do número secreto");
	exibirTextoNaTela(".texto__paragrafo", "Escolha um número entre 1 e 10");
}
