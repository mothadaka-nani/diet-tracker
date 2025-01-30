
const todoList = JSON.parse(localStorage.getItem('todos')) || [];

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function rendertodo() {
    let toHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        const { name, dueDate } = todoList[i];

        let html = `
            <p class="showdiv">${name} ${dueDate}
                <button class="todo-del" style="display:inline"
                onclick="
                    todoList.splice(${i},1);
                    saveToLocalStorage();
                    rendertodo();
                ">❌ <span></span>
                </button>
            </p>`;
        toHtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = toHtml;
}

function addtodo() {
    const duedateinputElement = document.querySelector('.js-due-date-input');
    const dueDate = duedateinputElement.value;

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    if (name.trim() === ''){
        alert('Please enter a task.');
        return;
    }

    todoList.push({ name, dueDate });
    saveToLocalStorage();
    
    inputElement.value = '';
    duedateinputElement.value = '';

    rendertodo();
}

// Initial render
rendertodo();





// array and loops
// const myarray=[10,'hello',30,{name:'scoks'},[1,2,3,4]];
// console.log(myarray);
// console.log( myarray[1]);
// myarray[0]=23;
// console.log( myarray[0]);
// console.log( myarray[3]);
// console.log( myarray[4]);
// console.log(myarray.length);
// myarray.push(100);
// console.log( myarray[5]);
// myarray.splice(0,1)
// console.log(myarray);


// let i=1
// while(i<=5){
//     console.log(i);
//     i=i+1;
// }