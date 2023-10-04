interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        location: "New York"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 22,
        location: "Los Angeles"
    }
];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
headerRow.appendChild(firstNameHeader);
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
