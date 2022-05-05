/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const performOperation = operation => {
        
        const resultNode = document.getElementById("result");
        const resultWrapperNode = document.getElementById("result-wrapper");
        
        let num1 = +document.getElementById("op-one").value;
        let num2 = +document.getElementById("op-two").value;

        const setResult = (res) => {
            resultNode.innerText = res;
            resultWrapperNode.style.display = "block";
            setTimeout(() => {
                resultWrapperNode.style.display = "none";
                document.getElementById("op-one").value = '';
                document.getElementById("op-two").value = '';
            }, 5000);
        };

        switch(operation) {
            case "addition":
                setResult(num1 + num2);
                break;
            case "substraction":
                setResult(num1 - num2);
                break;
            case "multiplication":
                setResult(num1 * num2);
                break;
            case "division":
                setResult(num1 / num2);
                break;
        };
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function(btn) {
        btn.addEventListener("click", function() {
            performOperation(btn.id);
        });
    });
})();
