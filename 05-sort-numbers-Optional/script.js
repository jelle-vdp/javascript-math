/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        const values = document.getElementById("numbers").value;
        const numArr = values.split(", ");

        numArr.sort((a, b) => a - b)

        const output = numArr.join(', ');

        document.getElementById("numbers").value = output;

    });

})();
