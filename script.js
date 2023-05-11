let calculation = '';

function appendNumber(number) {
    calculation += number;
    updateResult();
}

function appendOperator(operator) {
    calculation += operator;
    updateResult();
}

function clearResult() {
    calculation = '';
    updateResult();
}

function calculate() {
    let result = eval(calculation);
    calculation = result.toString();
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = calculation;
}
