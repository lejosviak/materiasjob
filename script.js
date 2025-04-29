let disciplinaAtual = "Matemática";

const temasPorDisciplina = {
  "Matemática": ["Álgebra", "Geometria", "Funções"],
  "Física": ["Cinemática", "Dinâmica", "Ondulatória"],
  "Química": ["Tabelas periódicas", "Ligações químicas", "Reações químicas"]
};

const descricaoTemas = {
  "Álgebra": "A álgebra é um ramo essencial da Matemática caracterizado pelo uso de símbolos e letras para representar números e expressar relações entre eles.",
  "Geometria": "A geometria estuda as propriedades e relações das formas, tamanhos e posições no espaço.",
  "Funções": "Funções representam relações entre duas variáveis, onde cada entrada possui uma única saída.",
  "Cinemática": "A cinemática é o ramo da Física que estuda o movimento dos corpos sem considerar suas causas.",
  "Dinâmica": "A dinâmica estuda as causas do movimento com base nas leis de Newton.",
  "Ondulatória": "A ondulatória analisa os fenômenos das ondas, como som, luz e vibrações.",
  "Tabelas periódicas": "A tabela periódica organiza os elementos químicos conforme suas propriedades e número atômico.",
  "Ligações químicas": "As ligações químicas explicam como os átomos se combinam para formar substâncias.",
  "Reações químicas": "As reações químicas envolvem a transformação de substâncias em novas substâncias."
};

function mudarDisciplina(nome) {
  disciplinaAtual = nome;
  document.getElementById("disciplina").innerText = nome;
  document.getElementById("conteudo").innerHTML = `<p>Bem-vindo ao conteúdo de ${nome}.</p>`;
  mostrarTemas(nome);
}

function mostrarTemas(disciplina) {
  const temasDiv = document.getElementById("temas");
  const temas = temasPorDisciplina[disciplina];
  temasDiv.innerHTML = temas.map(tema => `<button class="tema-btn" onclick="mostrarTema('${tema}')">${tema}</button>`).join("");
}

function mostrarTema(tema) {
  document.getElementById("conteudo").innerHTML = `<h3>${tema}</h3><p>${descricaoTemas[tema]}</p>`;
}

function mostrarConteudo(tipo) {
  document.getElementById("conteudo").innerHTML = `<p>${tipo.charAt(0).toUpperCase() + tipo.slice(1)} de ${disciplinaAtual}.</p>`;
}

function toggleMenu() {
  const menu = document.getElementById("menuDisciplinas");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function pesquisarConteudo(termo) {
  const conteudo = document.getElementById("conteudo");
  if (termo.trim() === "") {
    conteudo.innerHTML = `<p>Bem-vindo ao conteúdo de ${disciplinaAtual}.</p>`;
  } else {
    conteudo.innerHTML = `<p>Resultados da pesquisa por: <strong>${termo}</strong></p>`;
  }
}

window.onload = () => mostrarTemas("Matemática");
