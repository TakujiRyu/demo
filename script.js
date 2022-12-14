var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateFormData(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("stdList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = '<a onClick="onEdit(this)">Edit</a>';
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="onDelete(this)">Delete</a>';
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
}
    
function updateFormData(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.name;
}

function onDelete(td) {
    if (confirm('Are You Sure to DELETE this record')){
    row = td.parentElement.parentElement;
    document.getElementById("stdList").deleteRow(row.rowIndex);
    resetForm();
    }
}

function validate() {
    isValid = true;
    if(document.getElementById("name").value == ""){
    isValid = false;
    document.getElementById("nameValidationError").classList.remove("hide");
    }else{
    isValid = true;
    if(document.getElementById("nameValidationError").classList.contains("hide"));
    document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
    
    