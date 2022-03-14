import Bootcamp from "./lib/bootcamp";
import Student from "./lib/student";


const jcc = new Bootcamp("JCC")

jcc.createClass("Laravel", "beginner", "abduh")
jcc.createClass("React", "beginner", "abdul")

console.log(jcc.classes)

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
    let newStud = new Student(nama)
    let kelas = jcc.classes[index % 2].name
    jcc.register(kelas, newStud)
})

// menampilkan data kelas dan student nya
jcc.classes.forEach(kelas => {
    console.log(kelas)
});

jcc.runBatch()