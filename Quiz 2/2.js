class OlahString {

    palindrome(str) {

        for (let i = 0; i < str.length / 2; i++) {

            if (str[i] !== str[str.length - 1 - i]) return false

        }

        return true

    }



    ubahKapital(str) {

        let newStr = str.split("")

        newStr[0] = newStr[0].toUpperCase()

        return newStr.join("")

    }

}



const olahstring = new OlahString("")



console.log(olahstring.palindrome('katak')); // Output: true



console.log(olahstring.palindrome('makan')); // Output: false



console.log(olahstring.palindrome('malam')); // Output : true



console.log(olahstring.ubahKapital('asep')); // Output : Asep



console.log(olahstring.ubahKapital('abduh')); // Output: Abduh
