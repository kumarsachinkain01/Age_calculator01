let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    // If birth date is in the future (user hasn't been born yet)
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    // Adjust months and days
    if (month < 0) {
        month += 12;
    }
    if (day < 0) {
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        month--;
    }

    result.innerHTML = `You are <span>${age}</span> years, <span>${month}</span> months, and <span>${day}</span> days old.
    <br> <br>  This age calculator created by <h3>Sachin Kumar </h3>
    `;
}
