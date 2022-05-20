var btnclick = document.getElementById("submit");
btnclick.addEventListener("click", displayDetails);
var row = 1;
function displayDetails() {
  var rollno = document.getElementById("rollno").value;
  var name = document.getElementById("name").value;
  var branch = document.getElementById("branch").value;
  var year = document.getElementById("year").value;

  if (rollno == "" || rollno == null) {
    document.getElementById("rollerr").innerHTML = "Please Enter Roll Number";
    return;
  }
  if (name == "" || name == null) {
    document.getElementById("nameerr").innerHTML = "Please Enter Student Name";
    return;
  }
  if (branch == "" || branch == null) {
    document.getElementById("brancherr").innerHTML = "Please Select Branch";
    return;
  }
  if (year == "" || year == null) {
    document.getElementById("yearerr").innerHTML = "Please select Year";
    return;
  }

  var display = document.getElementById("display");
  var newRow = display.insertRow(row);
  var col1 = newRow.insertCell(0);
  var col2 = newRow.insertCell(1);
  var col3 = newRow.insertCell(2);
  var col4 = newRow.insertCell(3);

  col1.innerHTML = rollno;
  col2.innerHTML = name;
  col3.innerHTML = branch;
  col4.innerHTML = year;
}
