const memberList = document.getElementById("member-list");

function insertLast() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const newMember = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.innerHTML = id;
    newMember.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.innerHTML = name;
    newMember.appendChild(nameCell);

    const deleteCell = document.createElement("td");
    deleteCell.innerHTML = "X";
    deleteCell.addEventListener("click", deleteRow);
    newMember.appendChild(deleteCell);

    memberList.appendChild(newMember);
}

function deleteRow(event) {
    const row = event.target.parentNode;
    row.parentNode.removeChild(row);
}