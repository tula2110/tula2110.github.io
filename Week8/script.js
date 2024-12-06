function calculate() {
    const a = parseInt(document.getElementById("a_value").value);
    const b = parseInt(document.getElementById("b_value").value);
    const result = a + b;
    document.getElementById("result").textContent = "Result: " + result;
}
