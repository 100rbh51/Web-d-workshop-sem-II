function calculateGrade(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += Number(marks[i]);
    }

    let average = total / 4;
    let grade = "";

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    return { total, average, grade };
}