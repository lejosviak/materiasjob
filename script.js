let disciplinaAtual = "Matemática";

const temasPorDisciplina = {
  "Matemática": ["Álgebra", "Geometria", "Funções"],
  "Física": ["Cinemática", "Dinâmica", "Ondulatória"],
  "Química": ["Tabelas periódicas", "Ligações químicas", "Reações químicas"]
};

const descricaoTemas = {
  "Álgebra": "A álgebra é um ramo essencial da Matemática caracterizado pelo uso de símbolos e letras para representar números e expressar relações entre eles. Ela permite a formulação de expressões, resolução de equações e análise de padrões.",
  "Geometria": "A geometria estuda as propriedades e relações das formas, tamanhos e posições no espaço. Inclui figuras planas como triângulos e círculos, além de sólidos como cubos e esferas.",
  "Funções": "Funções representam relações entre duas variáveis, onde cada entrada possui uma única saída. São fundamentais para modelar fenômenos matemáticos e científicos.",
  "Cinemática": "A cinemática é o ramo da Física que estuda o movimento dos corpos sem considerar suas causas. Analisa conceitos como velocidade, aceleração e deslocamento.",
  "Dinâmica": "A dinâmica estuda as causas do movimento, baseando-se nas leis de Newton. Ela explica como forças afetam o comportamento dos corpos.",
  "Ondulatória": "A ondulatória analisa os fenômenos das ondas, como propagação, reflexão, interferência e ressonância. Aplica-se a ondas sonoras, luminosas e mecânicas.",
  "Tabelas periódicas": "A tabela periódica organiza os elementos químicos conforme suas propriedades e número atômico, facilitando o estudo de suas características e reações.",
  "Ligações químicas": "As ligações químicas explicam como átomos se unem para formar moléculas. Incluem ligações iônicas, covalentes e metálicas.",
  "Reações químicas": "As reações químicas descrevem transformações em que substâncias iniciais formam novas substâncias, com rearranjos de átomos e liberação ou absorção de energia."
};

function mudarDisciplina(nome) {
  disciplinaAtual = nome;
  document.getElementById("disciplina").innerText = nome;
  mostrarTemas(nome);
  document.getElementById("conteudo").innerHTML = `<p>Bem-vindo ao conteúdo de ${nome}.</p>`;
}

function mostrarTemas(disciplina) {
  const temasDiv = document.getElementById("temas");
  const temas = temasPorDisciplina[disciplina];
  temasDiv.innerHTML = temas.map(tema => `
    <button class="tema-btn" onclick="mostrarTema('${tema}')">${tema}</button>
  `).join("");
}

function mostrarTema(tema) {
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `<h3>${tema}</h3><
