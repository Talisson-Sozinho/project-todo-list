const adicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const questList = document.getElementById('lista-tarefas');

function adicionarNaLista(string) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = string;
  return novaTarefa;
}

adicionarTarefa.addEventListener('click', () => {
  questList.appendChild(adicionarNaLista(inputText.value));
  inputText.value = '';
});
