
JS
// Função para obter o nome do input
function obterNomeAluno() {
  return document.getElementById("alunoNome").value.trim();
}

// Função para armazenar o nome no localStorage
function salvarAluno(nome) {
  localStorage.setItem("alunoCadastrado", nome);
}

// Função para exibir a mensagem de sucesso
function mostrarMensagem(mensagem) {
  const msgDiv = document.getElementById("mensagemCadastro");
  msgDiv.textContent = mensagem;
}

// Função para limpar o campo de input
function limparFormulario() {
  document.getElementById("alunoNome").value = "";
}

// Função principal que controla o cadastro
function processarCadastro(evento) {
  evento.preventDefault();

  const nome = obterNomeAluno();
  if (nome === "") {
    mostrarMensagem("Por favor, preencha o nome do aluno.");
    return;
  }

  salvarAluno(nome);
  mostrarMensagem(`Aluno "${nome}" cadastrado com sucesso!`);
  limparFormulario();
}

// Adiciona o evento ao formulário
document.getElementById("cadastroForm").addEventListener("submit", processarCadastro);