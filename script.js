let list = document.getElementById("todoList");
let done = document.getElementById("finishedList");

document.getElementById("add").addEventListener("click", function () {
  let inputVal = document.getElementById("task").value;
  if (inputVal == "") {
    alert("Enter text");
  } else {
    let task = document.createElement("li");
    task.setAttribute("id", "false");
    task.innerText = inputVal;

    let finish = document.createElement("button");
    finish.setAttribute("id", "done");
    finish.setAttribute("type", "button");
    finish.setAttribute("onclick", "completedTask()");
    finish.innerHTML = `<img class ="responsive" src="checkmark.svg">`;

    let remove = document.createElement("button");
    remove.setAttribute("id", "trash");
    remove.setAttribute("type", "button");
    remove.setAttribute("onclick", "removeTask()");
    remove.innerHTML = `<img class ="responsive" src="trash.svg">`;

    task.appendChild(finish);
    task.appendChild(remove);

    list.appendChild(task);
  }
  document.getElementById("task").value = "";
});

function completedTask() {
  let li = event.target.closest("li");
  let originText = li.innerText;
  let originHTML = li.innerHTML;

  let finish = document.createElement("button");
  finish.setAttribute("id", "done");
  finish.setAttribute("type", "button");
  finish.setAttribute("onclick", "completedTask()");
  finish.innerHTML = `<img class ="responsive" src="checkmark.svg">`;

  let remove = document.createElement("button");
  remove.setAttribute("id", "trash");
  remove.setAttribute("type", "button");
  remove.setAttribute("onclick", "removeTask()");
  remove.innerHTML = `<img class ="responsive" src="trash.svg">`;

  if (originHTML.includes("<del>")) {
    // console.log("SUCCESS");
    done.removeChild(li);
    li.innerHTML = originText;
    li.appendChild(finish);
    li.appendChild(remove);
    list.appendChild(li);
  } else {
    // console.log("NOT THERE");
    list.removeChild(li);
    let completeTask = document.createElement("li");
    completeTask.innerHTML = `<del>${li.innerText}</del>`;

    let finish = document.createElement("button");
    finish.setAttribute("id", "done");
    finish.setAttribute("type", "button");
    finish.setAttribute("onclick", "completedTask()");
    finish.innerHTML = `<img class ="responsive" src="checkmark.svg">`;

    let remove = document.createElement("button");
    remove.setAttribute("id", "trash");
    remove.setAttribute("type", "button");
    remove.setAttribute("onclick", "removeTask()");
    remove.innerHTML = `<img class ="responsive" src="trash.svg">`;

    completeTask.appendChild(finish);
    completeTask.appendChild(remove);

    done.appendChild(completeTask);
  }
}

function removeTask() {
  let li = event.target.closest("li");
  let originHTML = li.innerHTML;

  if (originHTML.includes("<del>")) {
    done.removeChild(li);
  } else {
    list.removeChild(li);
  }
}
