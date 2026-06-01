// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    if(name === "" || email === ""){
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        message.style.color = "red";
        message.textContent = "Enter a valid email!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});


// To-Do List

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if(task === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete" onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
