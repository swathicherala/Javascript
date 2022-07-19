// console.log("Hello World")

// const convertPercentage = num => num / 100;
// console.log(convertPercentage(50));

// let i=0;
// while(i<10){
//     console.log(i)
//     i++;
// }

// const person=[
//     {
//         name:"Swathi",
//         age:25
//     },
//     {
//         name:"Sachin",
//         age:23
//     }
// ]

// // for(let i=0;i<person.length;i++){
// //     console.log(person[i])
// // }
// for(let people of person){
//     console.log(people)
// }

// person.forEach(people => console.log(people))

// const personName=person.map(people=>console.log(people.name))

// const calculateAge=person.filter(people => people.age > 23)
// console.log(calculateAge)


const newTask=document.querySelector('#new-task');
const btnAdd=document.querySelector('.btn-addTask');
const removeBtn=document.querySelector('.removeBtn');
const completeList=document.querySelector('.complete-list');
const taskList=document.querySelector('.task-template');
let id=1;

newTask.addEventListener('keyup',(e)=>{
    if(e.keyCode===13 && inputValid()){
        addTask();
    }
})

btnAdd.addEventListener('click',(e)=>{
    if(inputValid()){
        addTask();
    }
});

function inputValid(){
    return newTask.value !== ''
}

function addTask(){
    const taskTemplate=document.importNode
    (taskList.content,true);
    const checkbox=taskTemplate.querySelector('input');
    checkbox.id=id;
    const label=taskTemplate.querySelector('label');
    label.htmlFor=id;
    label.append(newTask.value);
    completeList.appendChild(taskTemplate);
    newTask.value='';
    id++;
}

removeBtn.addEventListener('click',()=>{
    const tasks= document.querySelectorAll('.task')
    tasks.forEach(task =>{
        const checked=task.querySelector('input').checked;
        if(checked){
            task.remove();
        }
    })
})