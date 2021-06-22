interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 76,
  location: "Tulsa",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 77,
  location: "Not Tulsa",
};

const allStudents: Array<Student> = [student1, student2];

const body: HTMLElement = document.getElementsByTagName('body')[0];
const table: HTMLElement = document.createElement('table');
for (let i = 0; i < allStudents.length; i++) {
  const tblR: HTMLElement = document.createElement('tr');
  const name: HTMLElement = document.createElement('td');
  name.innerHTML = allStudents[i].firstName;
  const location: HTMLElement = document.createElement('td');
  location.innerHTML = allStudents[i].location;
  tblR.appendChild(name);
  tblR.appendChild(location);
  table.appendChild(tblR);
};
body.appendChild(table);
