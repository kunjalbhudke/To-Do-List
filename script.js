const task = document.querySelector(".input-box");
const list = document.getElementById("list-container");
const Error = document.querySelector(".Error-Message");

// Function to add a new task
function AddTask() {
    if (task.value === "") {
        Error.classList.add("Errormessage");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
   
    task.value = "";
    SaveData();

}
task.addEventListener("focus", function(){
    Error.classList.remove("Errormessage");
});
task.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        AddTask();
    }
})
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();

    }
}, false);

function SaveData(){
    localStorage.setItem("data", list.innerHTML);
}
function ShowTask(){
    list.innerHTML = localStorage.getItem("data");
}
ShowTask();