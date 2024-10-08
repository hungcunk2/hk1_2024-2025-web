function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Vui lòng nhập số hợp lệ');
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Không thể chia cho 0');
                return;
            }
            result = num1 / num2;
            break;
        case 'modulus':
            if (num2 === 0) {
                alert('Không thể chia cho 0');
                return;
            }
            result = num1 % num2;
            break;
    }

    document.getElementById('result').value = result;
}