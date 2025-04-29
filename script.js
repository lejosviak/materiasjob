function pesquisarConteudo(termo) {
    const conteudo = document.getElementById("conteudo");
    if (termo.trim() === "") {
        conteudo.innerHTML = `<p>Bem-vindo ao conteúdo de ${document.getElementById("disciplina").innerText}.</p>`;
    } else {
        conteudo.innerHTML = `<p>Resultados da pesquisa por: <strong>${termo}</strong></p>`;
    }
}
