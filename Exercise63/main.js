const form = document.getElementById("member-registration-form");
const memberList = document.getElementById("member-list");

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const favorite = Array.from(
    document.querySelectorAll("input[name=favorite]:checked")
  )
    .map((item) => item.value)
    .join(",");
  const member = document.createElement("tr");
  member.addEventListener("mouseover", onMouseOver);
  member.addEventListener("mouseout", onMouseOut);
  member.innerHTML = `
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.gender}</td>
        <td>${data.day}/${data.month}/${data.year}</td>
        <td>${favorite}</td>
        <td>${data.favoriteColor}</td>
        `;

  memberList.appendChild(member);
}

function onReset(event) {
  document.getElementById("member-registration-form").reset();
  document.getElementById("name").focus();
}

function createSelectOptions(id, from, to) {
  select = document.getElementById(id);
  for (let i = from; i <= to; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    select.appendChild(option);
  }
}

function onMouseOver(event) {
  event.target.parentNode.style.backgroundColor = "yellow";
}

function onMouseOut(event) {
  event.target.parentNode.style.backgroundColor = "white";
}

form.addEventListener("submit", onSubmit);
form.addEventListener("reset", onReset);

createSelectOptions("year", 1900, 2020);
createSelectOptions("month", 1, 12);
createSelectOptions("day", 1, 31);
