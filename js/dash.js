
const studentForm = document.getElementById("studentform");
const studentsContainer = document.querySelector(".students");

// Select the input fields
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

// Load students from localStorage or initialize as an empty array
const students = JSON.parse(localStorage.getItem("students")) || [];

// Function to add a student and update localStorage
const addStudent = (name, age, roll) => {
    const newStudent = { name, age, roll };
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));
    return newStudent;
};

// Function to create and append student element to the container
const createStudentElement = ({ name, age, roll }) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);
};

// Display existing students when the page loads
students.forEach(createStudentElement);

// Handle form submission
studentForm.addEventListener('submit', e => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value, // Use `.value` instead of `.Value`
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent);

    // Clear form fields
    studentForm.reset();
});
