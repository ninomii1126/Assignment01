// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm");
let employees = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;
let displayCount = document.getElementById("empCount");
displayCount.value = 0;

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let extension = document.getElementById("extension").value;
  let email = document.getElementById("email").value;
  let department = document.getElementById("department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let row = employees.insertRow(-1);

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = extension;
  cell4.innerHTML = email;
  cell5.innerHTML = department;

  // CREATE THE DELETE BUTTON
  let deleteBtn = document.createElement("button");
  let span = document.createElement("span");
  span.innerHTML = "X";

  deleteBtn.setAttribute("class", "btn btn-danger btn-sm float-end delete");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("id", "delete");
  deleteBtn.setAttribute("onClick", "deleteRow(this);");
  deleteBtn.appendChild(span);
  cell6.appendChild(deleteBtn);

  // RESET THE FORM
  form.reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  let idField = document.getElementById("id");
  idField.focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  employeeCount++;
  displayCount.value = employeeCount;
});

// DELETE EMPLOYEE
const deleteRow = (button) => {
  if (confirm("Are you sure you want to delete this employee?")) {
    let rowIndex = button.parentNode.parentNode.rowIndex;
    employees.deleteRow(rowIndex);
    employeeCount--;
    displayCount.value = employeeCount;
  }
};

