const inputText = document.querySelector('#input-element');
const btn = document.querySelector('#btn');
const tasks = document.querySelector('.tarefa-conteiner');

const validate = () => inputText.value.trim().length > 0;

const addTarefa = () => {
    const valido = validate();
    if (!valido){
        return inputText.classList.add('erro');
    }
    const itemTarefa = document.createElement('div');
    itemTarefa.classList.add('todo');

    const texto = document.createElement('p');
    texto.innerText = inputText.value;

    const deletar = document.createElement('i');
    deletar.classList.add('fa-solid');
    deletar.classList.add('fa-x');

    itemTarefa.appendChild(texto);
    itemTarefa.appendChild(deletar);
    tasks.appendChild(itemTarefa);
};

const change = () => {
    const valido = validate();
    if (valido){
        return inputText.classList.remove('erro');
    }
};
btn.addEventListener('click', () => addTarefa());
inputText.addEventListener('change', () => change());