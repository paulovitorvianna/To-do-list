function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
        if (taskText === '') return;
    const li = document.createElement("li");
        li.textContent = taskText;
     input.value = '';
     document.querySelector("ul").appendChild(li)
}