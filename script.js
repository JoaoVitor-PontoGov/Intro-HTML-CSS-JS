document.addEventListener("DOMContentLoaded", function () {
	const botao = document.getElementById("botao");


	botao.addEventListener("click", function () {
		const descricao = document.getElementById("descricao");

		descricao.innerHTML = "<p>Eu <strong>tento</strong> bastante</p>";
	})

	const botaoVisitante = document.getElementById("botaoVisitante");
	botaoVisitante.addEventListener("click", function () {
		const nome = document.getElementById("nome").value;
		const olaVisitante = document.getElementById("olaVisitante");

		olaVisitante.innerHTML = "<h2>Olá " + nome + "</h2>";
	})

})

