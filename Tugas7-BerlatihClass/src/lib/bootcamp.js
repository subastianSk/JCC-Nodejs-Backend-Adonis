import Kelas from "./kelas";
import Student from "./student";

export default class Bootcamp {
    constructor(name) {
        this._name = name;
        this._kelas = []

    }
    get name() {
        return this._name
    }
    get classes() {
        return this._kelas
    }
    createClass(kelas, level, instructor) {
        var kelas = new Kelas(kelas, level, instructor)
        this._kelas.push(kelas)
    }
    register(kelas, newStud) {
        for (let i = 0; i < this._kelas.length; i++) {
            if (kelas === this._kelas[i]._name) {
                this._kelas[i]._students.push(newStud)
            }
        }
    }
    runBatch() {
        const jmlKelas = this._kelas.length
        for (let i = 0; i < jmlKelas; i++) {
            let kelas = this._kelas[i]
            let namaKelas = this._kelas[i]._name
            for (let j = 0; j < kelas._students.length; j++) {
                for (let k = 0; k < 4; k++) {
                    let nilai = Math.floor((Math.random() * 100) + 1);
                    kelas._students[j]._scores.push(nilai)
                }
                let finalScores = 0
                for (let k = 0; k < kelas._students[j]._scores.length; k++) {
                    finalScores = finalScores + kelas._students[j]._scores[k]
                }
                kelas._students[j]._finalScore = finalScores / kelas._students[j]._scores.length
            }
            console.log(`graduated from ${namaKelas}: `, Kelas.graduate(kelas))
        }
    }

}