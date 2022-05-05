/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {

        for (let i = 0; i < 22; i++){
            if (Number.isInteger(Math.sqrt(i))){
                const resNode = document.getElementById("result")
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(i));
                resNode.appendChild(li);
            }
        }

    });

})();
