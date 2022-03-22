const adicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const questList = document.getElementById('lista-tarefas');
const limparListaButton = document.getElementById('apaga-tudo');

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

function removeSlected() {
  for (let index = 0; index < questList.childNodes.length; index += 1) {
    if (questList.childNodes[index].classList.contains('selected')) {
      questList.childNodes[index].style.backgroundColor = '#ffffff';
      questList.childNodes[index].classList.remove('selected');
    }
  }
}

questList.addEventListener('dblclick', (event) => {
  const doubleClickTarget = event.target;
  if (doubleClickTarget.classList.contains('task')) {
    doubleClickTarget.classList.toggle('completed');
  }
});

questList.addEventListener('click', (event) => {
  const clickTarget = event.target;
  if (clickTarget.classList.contains('task')) {
    removeSlected();
    clickTarget.classList.toggle('selected');
    clickTarget.style.backgroundColor = 'gray';
  }
});

limparListaButton.addEventListener('click', () => {
  questList.innerHTML = null;
});
