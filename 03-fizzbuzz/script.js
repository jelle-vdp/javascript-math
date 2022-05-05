/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    const btn = document.getElementById('btn');
    const resultNode = document.getElementById("result");
    const resultWrapperNode = document.getElementById("result-wrapper");

    const showAlert = () => {
        window.alert("You have to enter a number between 1 and 100");
        document.getElementById('fizzbuzz-num').value = "";
    };

    const setResult = (res) => {
        resultNode.innerText = resultNode.innerText + res;
        resultWrapperNode.style.display = "block";
        setTimeout(() => {
            document.getElementById('fizzbuzz-num').value = "";
            resultNode.innerText = "";
            resultWrapperNode.style.display = "none";
        }, 5000);
    };

    btn.addEventListener("click", () => {
        
        let num = +document.getElementById('fizzbuzz-num').value;
        

        if (num < 1 || num > 101 ){
            showAlert();
        } else {
            if (num % 3 === 0){
                setResult("fizz");
            }
    
            if (num % 5 === 0){
                setResult("buzz");
            }

            if (!(num % 3 === 0) && !(num % 5 === 0)){
                setResult(num);
            }
        }
    })

})();
