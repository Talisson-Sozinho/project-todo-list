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

function removeSlected() {
  for (let index = 0; index < questList.childNodes.length; index += 1) {
    if (questList.childNodes[index].className === 'task selected') {
      console.log('removing');
      questList.childNodes[index].style.backgroundColor = '#ffffff';
      questList.childNodes[index].className = 'task';
    }
  }
}

questList.addEventListener('click', (event) => {
  const clickTarget = event.target;
  if (clickTarget.className === 'task') {
    removeSlected();
    clickTarget.classList.add('selected');
    clickTarget.style.backgroundColor = 'gray';
  }
});
