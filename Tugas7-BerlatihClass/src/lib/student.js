export default class Student {
    constructor(nama) {
        this._name = nama
        this._scores = []
        this._finalScore = 0
    }

    get finalscore() {
        return this._finalScore;
    }
    set finalscore(x) {
        this._finalScore = x;
    }
}