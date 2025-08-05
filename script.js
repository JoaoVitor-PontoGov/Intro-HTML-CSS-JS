document.addEventListener("DOMContentLoaded", function () {
	const botao = document.getElementById("botao");
	const botaoVisitante = document.getElementById("botaoVisitante");
	const modoDark = document.getElementById("modoDark");
	const botaoHobbie = document.getElementById("botaoHobbie");
	const nome = document.getElementById("nome");
	const hobbie = document.getElementById("campoHobbie")

	botao.addEventListener("click", function () {
		const descricao = document.getElementById("descricao");

		descricao.innerHTML = "<p>Eu <strong>tento</strong> bastante</p>";
	})

	botaoVisitante.addEventListener("click", function () {
		if (nome.value == "") {
		} else {
			const olaVisitante = document.getElementById("olaVisitante");
			olaVisitante.innerHTML = "<h2>Olá " + nome.value + "</h2>";
		}

	})

	modoDark.addEventListener("click", function () {
		document.body.classList.toggle("dark")
	})

	botaoHobbie.addEventListener("click", function () {
		if (hobbie.value == "") {
		} else {
			const hobbie = document.getElementById("campoHobbie")
			const tabela = document.getElementById("tabelaHobbie");
			const novalinha = document.createElement("tr");
			const novaData = document.createElement("td");
			novalinha.append(novaData)
			novaData.textContent = hobbie.value;
			tabela.append(novalinha);
		}
	})
})

