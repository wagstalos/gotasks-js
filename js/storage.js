function getTasks(){
    return JSON.stringify(localStorage.getItem('@GoTasks'));
}

function setTasks(tasks){
    localStorage.setItem('@GoTasks',JSON.stringify(tasks))
    
}