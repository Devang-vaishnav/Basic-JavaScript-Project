

const inputTask = document.querySelector('input');
const button = document.querySelector('button');
const addTask = document.querySelector('.task');
const error = document.querySelector('.error');
let flag = false;

function addTaskMethod(msg){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const button = document.createElement('button');
    const p = document.createElement('p');

    img.src = "./asset/unchecked.png";
    p.innerHTML = msg;
    button.innerHTML = 'x';

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);

    addTask.appendChild(div);
}

button.addEventListener('click', () => {
    const msg = inputTask.value.trim();

    if(msg == ""){
        // error.innerHTML="Please Enter a Valid To-Do!";
        alert('You must write something!');
    }else{
        // error.innerHTML = "";
        addTaskMethod(msg);
    }

    inputTask.value = "";
    saveData();
});

addTask.addEventListener('click',(e) => {

    let ele = e.target;
    if(ele.tagName === 'IMG'){
        if(!flag){
            ele.setAttribute("src", "./asset/checked.png");
            ele.parentElement.children[1].style.textDecoration = 'line-through';
            flag = true;
        }else{
            ele.setAttribute("src", "./asset/unchecked.png");
            ele.parentElement.children[1].style.textDecoration = 'none';
            flag = false;
        }
        saveData();
    }else if(ele.tagName === 'BUTTON'){
        ele.parentElement.remove();
        saveData();
    }

});

function saveData(){
    localStorage.setItem("data", addTask.innerHTML);
}

function getData(){
    addTask.innerHTML = localStorage.getItem('data');
}

getData();