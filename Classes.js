class Student {
    constructor(firstName, lastName, grade = "TBD") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
        this.average = 0
    }
    fullName() {
        return `your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return `YOU ARE EXPELLED`
            return `${this.firstName}${this.lastName} has been late ${this.tardies}`;
        }
        addScore(score) {
            this.scores.push(score);
            return this.scores
        }
        calculateAverage() {
            let sum = this.scores.reduce(function (a, b) { return a + b })
            return sum / this.scores.length;
        }
    static EnrollStudent() {
        return 'Enrolling Students!'
    }
}

let firstStudent = new Student('Ana', 'Gabriele');
let secondStudent = new Student('Nik', 'Sing')

secondStudent.addScore(34)
secondStudent.markLate()
secondStudent.addScore(34)
secondStudent.addScore(23)
