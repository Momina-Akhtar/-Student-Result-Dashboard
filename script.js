
const students = [

    {
        name: "Alaya",
        roll: 101,
        average: 81.78,
        passed: true
    },

    {
        name: "Ariyan",
        roll: 102,
        average: 79.10,
        passed: true
    },

    {
        name: "Zohan",
        roll: 103,
        average: 88.16,
        passed: true
    },

    {
        name: "Bisma",
        roll: 104,
        average: 96.21,
        passed: true
    },

    {
        name: "Shayan",
        roll: 105,
        average: 84.33,
        passed: true
    }

];


function grade(avg) {

    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";

    return "F";
}


function renderDashboard() {

    const total = students.length;

    const classAverage =
        students.reduce(
            (sum, student) => sum + student.average, 0
        ) / total;

    const topper = [...students].sort(
        (a, b) => b.average - a.average
    )[0];


    document.getElementById("totalStudents")
        .textContent = total;

    document.getElementById("overallAverage")
        .textContent = classAverage.toFixed(2) + "%";

    document.getElementById("overallGrade")
        .textContent = grade(classAverage);

    document.getElementById("passedCount")
        .textContent =
        students.filter(s => s.passed).length
        + " / " + total;


    document.getElementById("topperName")
        .textContent = topper.name;

    document.getElementById("topperAverage")
        .textContent = topper.average.toFixed(2) + "%";

    document.getElementById("topperGrade")
        .textContent = grade(topper.average);


    renderStudents();

}


function renderStudents() {

    const list = document.getElementById("studentsList");

    const sortValue =
        document.getElementById("sortSelect").value;

    const sortedStudents = [...students];


    if (sortValue === "high") {

        sortedStudents.sort(
            (a, b) => b.average - a.average
        );

    }

    else if (sortValue === "low") {

        sortedStudents.sort(
            (a, b) => a.average - b.average
        );

    }

    else if (sortValue === "name") {

        sortedStudents.sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    }


    list.innerHTML = "";


    sortedStudents.forEach(student => {

        const card = document.createElement("article");

        card.className = "student-card";


        card.innerHTML = `

            <div class="avatar">🎓</div>

            <div class="student-divider"></div>

            <div class="student-info">

                <h3>${student.name}</h3>

                <p>Roll No: ${student.roll}</p>

                <p>
                    Average: ${student.average.toFixed(2)}%
                    | Grade: ${grade(student.average)}
                </p>

            </div>

            <span class="pass-badge">
                ✓ Pass
            </span>

        `;


        list.appendChild(card);

    });

}


document.getElementById("sortSelect")
    .addEventListener("change", renderStudents);


renderDashboard();
