// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);

// CREATE AN ARRAY OF EMPLOYEES
let initialEmployees = [
  {
    id: 11111111,
    name: "aaa",
    extention: 1234,
    email: "abc@gmail.com",
    department: "Administrative",
  },
  {
    id: 22222222,
    name: "bbb",
    extention: 2345,
    email: "bbb@gmail.com",
    department: "Administrative",
  },
  {
    id: 33333333,
    name: "ccc",
    extention: 3456,
    email: "ccc@gmail.com",
    department: "Administrative",
  },
  {
    id: 44444444,
    name: "ddd",
    extention: 4567,
    email: "ddd@gmail.com",
    department: "Administrative",
  },
  {
    id: 55555555,
    name: "eee",
    extention: 5678,
    email: "eee@gmail.com",
    department: "Administrative",
  },
];

localStorage.setItem("employees", JSON.stringify(initialEmployees));
let empTable = $("empTable");

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let employees;
let storage = localStorage.getItem("employees");
if (storage.length > 0) {
  console.log(JSON.parse(localStorage.getItem("employees")));
  employees = JSON.parse(localStorage.getItem("employees"));
}

let empCount = $("empCount");
empCount.value = employees.length;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
let form = $("addForm");
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  let id = $("id").value;
  let name = $("name").value;
  let extension = $("extension").value;
  let email = $("email").value;
  let department = $("department").value;

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  employees.push({
    id: id,
    name: name,
    extention: extension,
    email: email,
    department: department,
  });

  console.log(employees);

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  //   localStorage.setItem("employees", employees);

  // BUILD THE GRID
  buildGrid();

  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  let idField = $("id");
  idField.focus();
});

// DELETE EMPLOYEE
// empTable.addEventListener("click", (e) => {
//   // CONFIRM THE DELETE
//   // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
//   // REMOVE EMPLOYEE FROM ARRAY
//   // BUILD THE GRID
// });
// DELETE EMPLOYEE
const deleteRow = (button) => {
  if (confirm("Are you sure you want to delete this employee?")) {
    let rowIndex = button.parentNode.parentNode.rowIndex;
    console.log(rowIndex);
    empTable.deleteRow(rowIndex);
    employees.splice(rowIndex - 1, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    buildGrid();
    empCount.value = employees.length;
    //   displayCount.value = employeeCount;
  }
};

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  //   empTable.remove();
  let tBodyRef = empTable.getElementsByTagName("tbody")[0];
  console.log(tBodyRef.innerHTML);
  tBodyRef.innerHTML = "";

  // REBUILD THE TBODY FROM SCRATCH
  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  employees.forEach((emp) => {
    let row = document.createElement("tr");

    let id = document.createElement("td");
    id.textContent = emp.id;
    row.appendChild(id);

    let name = document.createElement("td");
    name.textContent = emp.name;
    row.appendChild(name);

    let extension = document.createElement("td");
    extension.textContent = emp.extention;
    row.appendChild(extension);

    let email = document.createElement("td");
    email.textContent = emp.email;
    row.appendChild(email);

    let department = document.createElement("td");
    department.textContent = emp.department;
    row.appendChild(department);

    let deleteField = document.createElement("td");
    let deleteBtn = document.createElement("button");
    let span = document.createElement("span");
    span.innerHTML = "X";

    deleteBtn.setAttribute("class", "btn btn-danger btn-sm float-end delete");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.setAttribute("onClick", "deleteRow(this);");
    deleteBtn.appendChild(span);
    deleteField.appendChild(deleteBtn);
    row.appendChild(deleteField);

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    tBodyRef.appendChild(row);
  });

  // UPDATE EMPLOYEE COUNT
  empCount.value = employees.length;
  console.log(empCount);

  // STORE THE ARRAY IN STORAGE
  localStorage.setItem("employees", JSON.stringify(employees));
}
