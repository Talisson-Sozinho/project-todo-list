const adicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const questList = document.getElementById('lista-tarefas');

function adicionarNaLista(string) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = string;
  novaTarefa.className = 'task';
  return novaTarefa;
}

adicionarTarefa.addEventListener('click', () => {
  questList.appendChild(adicionarNaLista(inputText.value));
  inputText.value = '';
});

questList.addEventListener('click', (event) => {
  const clickTarget = event.target;
  if (clickTarget.className === 'task') {
    clickTarget.style.backgroundColor = 'gray';
  }
});
