// Writing an interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string   
}

// Creating 2 students
const firstStudent: Student = {
    firstName: 'Paul',
    lastName: 'Fabulous',
    age: 90,
    location: 'Cameroom'
}

const secondStudent: Student = {
    firstName: 'Babe',
    lastName: 'Mine',
    age: 80,
    location: 'Limbe'
}

// creating an array for the 2 students' variables
const studentsList: Student[] = [firstStudent, secondStudent];

//redering table for each element using vanilla JS
const table = document.createElement('table');
const element = document.createElement('element');

table.appendChild(element);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('a');
    const row1 = document.createElement('b');
    const row2 = document.createElement('c');

    row1.textContent = student.firstName;
    row2.textContent = student.location;

    row.appendChild(row1);
    row.appendChild(row2);
    element.appendChild(row);
});

document.body.appendChild(table);
