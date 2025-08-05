document.addEventListener("DOMContentLoaded", function () {
	const botao = document.getElementById("botao");

	botao.addEventListener("click", function () {
		const descricao = document.getElementById("descricao");

		descricao.innerHTML = "<p>Eu <strong>tento</strong> bastante</p>";
	})
})