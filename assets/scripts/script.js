let button = document.querySelector("#push")
let task = document.querySelector("#tasks")

button.addEventListener("click", () => {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        task.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete")
        //or 
        // for (var i = 0; i < current_tasks.length; i++) {
        //     current_tasks[i].onclick = function () {
        //         this.parentNode.remove();
        //     }
        // }
        current_tasks.forEach(currentTask => {
            currentTask.addEventListener("click", () => {
                console.log("hi")
                currentTask.parentNode.remove()
            })
        })
       
    }
})


