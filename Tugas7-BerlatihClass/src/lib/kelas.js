import Student from "./student"

export default class Kelas {
    constructor(name, level, instructor) {
        this._name = name;
        this._students = []
        this._level = level
        this._instructor = instructor
    }

    get name() {
        return this._name
    }
    set name(x) {
        this._name = x
    }
    get level() {
        return this._level
    }
    set level(x) {
        this._level = x
    }
    get instructor() {
        return this._instructor
    }
    set instructor(x) {
        this._instructor = x
    }
    static graduate(student, nilai) {
        const graduate = {
            participant: [],
            completed: [],
            mastered: []
        }

        for (let i = 0; i < student._students.length; i++) {
            const finalScore = student._students[i]._finalScore
            if (finalScore < 60) {
                graduate.participant.push(student._students[i])
            }
            if (finalScore >= 60 && finalScore <= 85) {
                graduate.completed.push(student._students[i])
            }
            if (finalScore > 85) {
                graduate.mastered.push(student._students[i])
            }
        }
        return graduate
    }
}