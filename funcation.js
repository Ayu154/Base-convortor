function convertBase() {
    const number = document.getElementById('number').value.trim();
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (!number) {
        resultElement.textContent = "Please enter a number!!";
        resultElement.style.color = '#B00000';
        return;
    }
    if (isNaN(fromBase) || isNaN(toBase) || fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
        resultElement.textContent = "Please select valid bases!!";
        resultElement.style.color = '#B00000';
        return;
    }

    try {
        const parsedNumber = parseInt(number, fromBase);
        if (isNaN(parsedNumber)) {
            throw new Error("Invalid number for the specified base!!");
        }
        const convertedNumber = parsedNumber.toString(toBase).toUpperCase();
        resultElement.textContent = convertedNumber;
        resultElement.style.color = '#007bff';
    } catch (e) {
        resultElement.textContent = "Error in conversion. Please check your inputs!!";
        resultElement.style.color = '#B00000';
    }
}
