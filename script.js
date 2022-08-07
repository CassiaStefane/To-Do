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
    itemTarefa.addEventListener('click', () => completada(texto));

    const texto = document.createElement('p');
    texto.innerText = inputText.value;

    const deletar = document.createElement('i');
    deletar.classList.add('fa-solid');
    deletar.classList.add('fa-x');
    deletar.addEventListener('click', () => remover(itemTarefa, texto));

    itemTarefa.appendChild(texto);
    itemTarefa.appendChild(deletar);
    tasks.appendChild(itemTarefa);

    inputText.value = '';
    updateStorage()
};
 const completada = (texto)=>{
    const task = tasks.childNodes;
    for(const itemTask of task){
        if(itemTask.firstChild.isSameNode(texto)){
            itemTask.firstChild.classList.toggle('completa');
        }
    }
    updateStorage()
 }

 const remover = (itemTarefa, texto) => {
    const task = tasks.childNodes;
    for(const itemTask of task){
        if(itemTask.firstChild.isSameNode(texto)){
            itemTarefa.remove();
        }
    }
    updateStorage()
 }

 const change = () => {
    const valido = validate();
    if (valido){
        return inputText.classList.remove('erro');
    }
};

const updateStorage = () =>{
    const task = tasks.childNodes;

    const storageTasks = [...task].map(task => {
        const content = task.firstChild;
        const isCompleted = content.classList.contains('completed');

        return {description: content.innerText, isCompleted};
        
    })
    localStorage.setItem('task', JSON.stringify(storageTasks));
}

const refreshStorage = () =>{
    const taskStorage = JSON.parse(localStorage.getItem('task'));

    for (const task of taskStorage){
        const itemTarefa = document.createElement('div');
    itemTarefa.classList.add('todo');
    itemTarefa.addEventListener('click', () => completada(texto));

    const texto = document.createElement('p');
    texto.innerText = task.description;

    if(task.isCompleted){
        texto.classList.add('completed');
    }

    const deletar = document.createElement('i');
    deletar.classList.add('fa-solid');
    deletar.classList.add('fa-x');
    deletar.addEventListener('click', () => remover(itemTarefa, texto));

    itemTarefa.appendChild(texto);
    itemTarefa.appendChild(deletar);
    tasks.appendChild(itemTarefa);
    }
}
refreshStorage();

btn.addEventListener('click', () => addTarefa());
inputText.addEventListener('change', () => change());