const adicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const questList = document.getElementById('lista-tarefas');
const limparListaButton = document.getElementById('apaga-tudo');
const limparCompletedButton = document.getElementById('remover-finalizados');
const salvarListaButton = document.getElementById('salvar-tarefas');
const moveToNextButton = document.getElementById('mover-baixo');
const moveToPreviousButton = document.getElementById('mover-cima');

salvarListaButton.addEventListener('click', () => {
  localStorage.setItem('taskList', JSON.stringify(questList.innerHTML));
});

if (localStorage.getItem('taskList')) {
  questList.innerHTML = JSON.parse(localStorage.getItem('taskList'));
}

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

limparCompletedButton.addEventListener('click', () => {
  for (let index = 0; index < questList.children.length; index += 1) {
    if (questList.children[index].classList.contains('completed')) {
      questList.children[index].remove();
      index -= 1;
    }
  }
});

function moveItTo(event) {
  const newList = document.createElement('ol');
  const numItems = questList.childElementCount;
  for (let index = 0; index < numItems; index += 1) {
    if (
      index + 1 !== numItems
      && questList.children[event.target.value].classList.contains('selected')
    ) {
      newList.appendChild(questList.children[1]);
      newList.appendChild(questList.children[0]);
      index += 1;
    } else {
      newList.appendChild(questList.children[0]);
    }
  }
  questList.innerHTML = newList.innerHTML;
}

moveToNextButton.addEventListener('click', moveItTo);
moveToPreviousButton.addEventListener('click', moveItTo);
