/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    const resultNode = document.getElementById("result");
    const resultWrapperNode = document.getElementById("result-wrapper");

    const setResult = (res) => {
        resultNode.innerText = res;
        resultWrapperNode.style.display = "block";
        setTimeout(() => {
            resultWrapperNode.style.display = "none";
            document.getElementById("op-one").value = '';
            document.getElementById("op-two").value = '';
        }, 5000);
    }

    document.getElementById("addition").addEventListener("click", function() {
        let num1 = +document.getElementById("op-one").value;
        let num2 = +document.getElementById("op-two").value;
        setResult(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let num1 = +document.getElementById("op-one").value;
        let num2 = +document.getElementById("op-two").value;
        setResult(num1 - num2);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let num1 = +document.getElementById("op-one").value;
        let num2 = +document.getElementById("op-two").value;
        setResult(num1 * num2);
    });

    document.getElementById("division").addEventListener("click", function() {
        let num1 = +document.getElementById("op-one").value;
        let num2 = +document.getElementById("op-two").value;
        setResult(num1 / num2);
    });
})();
