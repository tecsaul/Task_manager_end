var iconImportant = "fas fa-star";
var iconNonImportant = "far fa-star";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
  if (isImportant) {
    //should not be important
    $("#iImportant").removeClass(iconImportant);
    $("#iImportant").addClass(iconNonImportant);
    isImportant = false;
  } else {
    //should be important
    $("#iImportant").removeClass(iconNonImportant);
    $("#iImportant").addClass(iconImportant);
    isImportant = true;
  }
}

function toggleForm() {
  if (isVisible) {
    $(".form").hide();
    isVisible = false;
  } else {
    $(".form").show();
    isVisible = true;
  }
}

function saveTask() {
  let title = $("#txtTitle").val();
  let desc = $("#txtDesc").val();
  let priority = $("#selPriority").val();
  let dueDate = $("#txtDueDate").val();
  let contact = $("#txtContact").val();
  let participant = $("#txtParticipant").val();
  let color = $("#selColor").val();

  let task = new Task(isImportant, title, desc, priority, dueDate, contact, participant, color );
  // task.test();
  console.log(task);
  display(task);
  clearForm();// sholud clear all the input fields values
}

function clearForm() {
  $("#txtTitle").val("");
  $("#txtDesc").val("");
  $("#selPriority").val("");
  $("#txtDueDate").val("");
  $("#txtContact").val("");
  $("#txtParticipant").val("");
  $("#selColor").val("#000000");
}

function display(task) {
  console.log(task.title);

  let syntax = `<div class="task">
  <div>
  <h5>${task.title}</h5>
  <p>${task.description}</p>
  </div>

  <div class="middle">
  <p>${task.priority}</p>
  <p>${task.dueDate}</p>
  </div>

  <div class="tail">
  <p>${task.contact}</p>
  <p>${task.participant}</p>
    </div>
  </div>`;

  $("#task-list").append(syntax);
}

function init() {
  console.log("Task Manager");
  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(toggleImportant);
  $("#btnHideForm").click(toggleForm);
}

window.onload = init;

// call a display task funcion
// send the object to it
// fn recieve the task as parameter
// console log the title of the task
