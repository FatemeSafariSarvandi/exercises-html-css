let history1 = document.getElementById('history1');
let downHistory = document.getElementById('downHistory');
let show = document.getElementById('show');
let result = document.getElementById('result');
let number = document.getElementsByClassName('number');
let percentage = document.getElementById('percentage');
let squareRoot = document.getElementById('squareRoot');
let square = document.getElementById('square');
let cube = document.getElementById('cube');
let reverse = document.getElementById('reverse');
let CE = document.getElementById('CE');
let C = document.getElementById('C');
let backspace = document.getElementById('backspace');
let divide = document.getElementById('divide');
let mul = document.getElementById('mul');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let changeSign = document.getElementById('changeSign');
let dot = document.getElementById('dot');
let equal = document.getElementById('equals');
let trash = document.getElementsByClassName('trash');

let flag = 0;
let flag_equal = false;
let flag_num = 0;
let flag_dot = false;
let flag_One = false;
let flag_tow = false;
let flag_num2 = false;
let showElement;
let arrOfUserInput = [];
for (let i = 0; i < number.length; i++) {
    number[i].onclick = () => {
        arrOfUserInput.push(number[i].innerHTML);
        if (!flag_num2) {
            show.innerHTML = '';
        }
        if (flag_num === 0) {
            result.innerHTML = number[i].innerHTML;
        } else {
            result.innerHTML += number[i].innerHTML;
        }
        flag_num++;
        flag_num2 = true;
    };
}

trash[0].onclick = () => {
    if (flag_equal) {
        downHistory.innerHTML = '';
        history1.innerHTML = '';
    }
};
trash[1].onclick = () => {
    if (flag_equal) {
        history1.innerHTML = '';
        downHistory.innerHTML = '';
    }
};

percentage.onclick = () => {
    showElement = show.innerHTML;

    if (flag === 0 && flag_num > 0) {
        arrOfUserInput = [];
        flag = 0;
        flag_num = 0;
        flag_dot = false;
        flag_One = false;
        flag_tow = false;
        show.innerHTML = '';
        result.innerHTML = '0';
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('%');
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '%');
        arrOfUserInput.push('*');
        let t = computeFirstNumber(firstSign) * computeSecondNumber(firstSign);
        show.innerHTML += t + '';
        if (!flag_equal) history1.innerHTML = '';
        history1.innerHTML += show.innerHTML;
        arrOfUserInput.push(t + '');
        flag_dot = false;
        flag_tow = true;
    }
};
squareRoot.onclick = () => {
    showElement = show.innerHTML;
    if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('#');
        show.innerHTML += '√' + result.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, null);
        arrOfUserInput.pop();
        result.innerHTML = arrOfUserInput[0];
        flag++;
        flag_dot = false;
        flag_One = true;
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('#');
        show.innerHTML += '√' + result.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '#');
        flag_dot = false;
        flag_tow = true;
    }
};

square.onclick = () => {
    showElement = show.innerHTML;

    if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('^');
        show.innerHTML += 'sqr(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, null);
        arrOfUserInput.pop();
        result.innerHTML = arrOfUserInput[0];
        flag++;
        flag_dot = false;
        flag_One = true;
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('^');
        show.innerHTML += 'sqr(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '^');
        flag_dot = false;
        flag_tow = true;
    }
};
cube.onclick = () => {
    showElement = show.innerHTML;

    if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('^^');
        show.innerHTML += 'cube(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, null);
        arrOfUserInput.pop();
        result.innerHTML = arrOfUserInput[0];
        flag++;
        flag_dot = false;
        flag_One = true;
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('^^');
        show.innerHTML += 'cube(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '^^');
        flag_dot = false;
        flag_tow = true;
    }
};
reverse.onclick = () => {
    showElement = show.innerHTML;

    if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('1/x');
        show.innerHTML += '1/(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, null);
        arrOfUserInput.pop();
        result.innerHTML = arrOfUserInput[0];
        flag++;
        flag_dot = false;
        flag_One = true;
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('1/x');
        show.innerHTML += '1/(' + result.innerHTML + ')';
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '1/x');
        flag_dot = false;
        flag_tow = true;
    }
};
C.onclick = () => {
    arrOfUserInput = [];
    flag = 0;
    flag_num = 0;
    flag_dot = false;
    flag_One = false;
    flag_tow = false;
    show.innerHTML = '';
    result.innerHTML = '0';
};
CE.onclick = () => {
    for (
        let i = arrOfUserInput.length - 1;
        !isNaN(parseFloat(arrOfUserInput[arrOfUserInput.length - 1])) ||
        arrOfUserInput[arrOfUserInput.length - 1] === '.';
        i--
    ) {
        arrOfUserInput.pop();
        let temp = result.innerHTML;
        temp = temp.split('');
        temp.pop();
        result.innerHTML = '';
        if (temp.length === 0) {
            result.innerHTML = '';
        } else {
            temp.forEach((element) => {
                result.innerHTML += element;
            });
        }
    }
    if (flag_One) {
        arrOfUserInput = [];
        show.innerHTML = '';
        flag_One = false;
    }
    if (flag_tow) {
        show.innerHTML = showElement;
        flag_tow = false;
    }
    result.innerHTML = '0';
    flag_num = 0;
    flag_dot = false;
};
backspace.onclick = () => {
    showElement = show.innerHTML;

    if (
        !isNaN(parseFloat(arrOfUserInput[arrOfUserInput.length - 1])) ||
        arrOfUserInput[arrOfUserInput.length - 1] === '.'
    ) {
        arrOfUserInput.pop();
        let temp = result.innerHTML;
        temp = temp.split('');
        temp.pop();
        result.innerHTML = '';
        if (temp.length === 0) {
            result.innerHTML = '';
        } else {
            temp.forEach((element) => {
                result.innerHTML += element;
            });
        }
    }
};
divide.onclick = () => {
    showElement = show.innerHTML;

    if (flag_One) {
        flag_One = false;
        arrOfUserInput.push('/');
        show.innerHTML += divide.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag_tow) {
        show.innerHTML += divide.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '/');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    } else if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('/');
        show.innerHTML += result.innerHTML;
        show.innerHTML += divide.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag > 0 && flag_num > 0) {
        show.innerHTML += result.innerHTML;
        show.innerHTML += divide.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '/');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    }
};
mul.onclick = () => {
    showElement = show.innerHTML;

    if (flag_One) {
        flag_One = false;
        arrOfUserInput.push('*');
        show.innerHTML += mul.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag_tow) {
        show.innerHTML += mul.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '*');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    } else if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('*');
        show.innerHTML += result.innerHTML;
        show.innerHTML += mul.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag > 0 && flag_num > 0) {
        show.innerHTML += result.innerHTML;
        show.innerHTML += mul.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '*');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    }
};
minus.onclick = () => {
    showElement = show.innerHTML;

    if (flag_One) {
        flag_One = false;
        arrOfUserInput.push('-');
        show.innerHTML += minus.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag_tow) {
        show.innerHTML += minus.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '-');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    } else if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('-');
        show.innerHTML += result.innerHTML;
        show.innerHTML += minus.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag > 0 && flag_num > 0) {
        show.innerHTML += result.innerHTML;
        show.innerHTML += minus.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '-');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    }
};
plus.onclick = () => {
    showElement = show.innerHTML;

    if (flag_One) {
        flag_One = false;
        arrOfUserInput.push('+');
        show.innerHTML += plus.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag_tow) {
        show.innerHTML += plus.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '+');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    } else if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('+');
        show.innerHTML += result.innerHTML;
        show.innerHTML += plus.innerHTML;
        flag++;
        flag_num = 0;
        flag_dot = false;
    } else if (flag > 0 && flag_num > 0) {
        show.innerHTML += result.innerHTML;
        show.innerHTML += plus.innerHTML;
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '+');
        result.innerHTML = arrOfUserInput[0];
        flag_dot = false;
        flag_tow = false;
        flag_num = 0;
    }
};
equal.onclick = () => {
    showElement = show.innerHTML;

    if (flag_One) {
        flag_One = false;
        if (!flag_equal) {
            history1.innerHTML = '';
            downHistory.innerHTML = '';
        }
        history1.style.textAlign = 'right';
        downHistory.style.textAlign = 'right';
        history1.innerHTML += show.innerHTML + '=';
        result.innerHTML = arrOfUserInput[0];
        history1.innerHTML += '<h1>' + result.innerHTML + '<h1>' + '</br>';
        downHistory.innerHTML = history1.innerHTML;
        flag_num = 0;
        flag = 0;
        flag_dot = false;
        flag_equal = true;
        flag_One = false;
        flag_tow = false;
        flag_num2 = false;
    } else if (flag_tow) {
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '=');
        if (!flag_equal) {
            history1.innerHTML = '';
            downHistory.innerHTML = '';
        }
        history1.style.textAlign = 'right';
        downHistory.style.textAlign = 'right';
        history1.innerHTML += show.innerHTML + '=';
        result.innerHTML = arrOfUserInput[0];
        history1.innerHTML += '<h1>' + result.innerHTML + '<h1>' + '</br>';
        downHistory.innerHTML = history1.innerHTML;

        arrOfUserInput = [];
        flag_num = 0;
        flag = 0;
        flag_dot = false;
        flag_equal = true;
        flag_One = false;
        flag_tow = false;
        flag_num2 = false;
    } else if (flag > 0) {
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, '=');
        if (!flag_equal) {
            history1.innerHTML = '';
            downHistory.innerHTML = '';
        }
        history1.style.textAlign = 'right';
        downHistory.style.textAlign = 'right';
        history1.innerHTML += show.innerHTML + result.innerHTML + '=';
        show.innerHTML += result.innerHTML;
        result.innerHTML = arrOfUserInput[0];
        history1.innerHTML += '<h1>' + result.innerHTML + '<h1>' + '</br>';
        downHistory.innerHTML = history1.innerHTML;
        arrOfUserInput = [];
        flag_num = 0;
        flag = 0;
        flag_dot = false;
        flag_equal = true;
        flag_One = false;
        flag_tow = false;
        flag_num2 = false;
    }
};

changeSign.onclick = () => {
    showElement = show.innerHTML;
    if (flag === 0 && flag_num > 0) {
        arrOfUserInput.push('+/-');
        let firstSign = findFirstSign(arrOfUserInput);
        compute(firstSign, null);
        arrOfUserInput.pop();
        result.innerHTML = arrOfUserInput[0];
        show.innerHTML += result.innerHTML;
        flag++;
        flag_dot = false;
        flag_One = true;
    } else if (flag > 0 && flag_num > 0) {
        arrOfUserInput.push('+/-');
        let firstSign = findFirstSign(arrOfUserInput);
        computeWithOneNumber(firstSign, '+/-');
        result.innerHTML = arrOfUserInput[arrOfUserInput.length - 1];
        show.innerHTML += result.innerHTML;
        flag_dot = false;
        flag_tow = true;
    }
};
dot.onclick = () => {
    showElement = show.innerHTML;

    if (!flag_dot) {
        flag_dot = true;
        result.innerHTML += '.';
        arrOfUserInput.push('.');
    }
};

function compute(firstSign, secondSign) {
    let num1 = 0;
    let num2 = 0;
    let j = 0;
    for (let i = 0; arrOfUserInput[i] !== firstSign; i++) {
        if (arrOfUserInput[i] === '.') {
            let temp = calculateFloatPart(j, num1, firstSign);
            num1 = temp[0];
            j = temp[1];
            break;
        }
        num1 = num1 * 10 + parseFloat(arrOfUserInput[i]);
        j = i + 1;
    }
    //arrOfUserInput[j] === firstSign   and  arrOfUserInput[j++] === number
    j++;

    for (let i = j; i < arrOfUserInput.length; i++) {
        if (arrOfUserInput[i] === '.') {
            let temp2 = calculateFloatPart2(j, num2, arrOfUserInput.length);
            num2 = temp2[0];
            j = temp2[1];
            break;
        }
        num2 = num2 * 10 + parseFloat(arrOfUserInput[i]);
        j = i + 1;
    }
    // console.log(num1);
    // console.log(num2);
    arrOfUserInput = [];
    // console.log(arrOfUserInput);
    arrOfUserInput.push(operation(num1, num2, firstSign));
    arrOfUserInput.push(secondSign);
}

function calculateFloatPart(indexOfDot, num, sign) {
    let temp = indexOfDot;

    for (let i = 1 + indexOfDot; arrOfUserInput[i] !== sign; i++) {
        num += parseFloat(arrOfUserInput[i]) / Math.pow(10, i - temp);
        indexOfDot = i + 1;
    }

    return [num, indexOfDot];
}

function calculateFloatPart2(indexOfDot, num, len) {
    let temp = indexOfDot;

    for (let i = 1 + indexOfDot; i < len; i++) {
        num += parseFloat(arrOfUserInput[i]) / Math.pow(10, i - temp);

        indexOfDot = i + 1;
    }

    return [num, indexOfDot];
}

function findFirstSign(arr) {
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '+':
                return '+';
            case '-':
                return '-';
            case '*':
                return '*';
            case '/':
                return '/';
            case '#':
                return '#';
            case '^':
                return '^';
            case '^^':
                return '^^';
            case '1/x':
                return '1/x';
            case '+/-':
                return '+/-';
            case '%':
                return '%';
        }
    }
}
function operation(num1, num2, sign) {
    num1 *= 1000000;
    num2 *= 1000000;
    switch (sign) {
        case '+':
            return (num1 + num2) / 1000000;
        case '-':
            return (num1 - num2) / 1000000;
        case '*':
            return (num1 * num2) / 1000000000000;
        case '/':
            return num1 / num2;
        case '#':
            num1 /= 1000000;
            return Math.sqrt(num1);
        case '^':
            num1 /= 1000000;
            return Math.pow(num1, 2);
        case '^^':
            num1 /= 1000000;
            return Math.pow(num1, 3);
        case '1/x':
            num1 /= 1000000;
            return 1 / num1;
        case '+/-':
            num1 /= 1000000;
            return -1 * num1;
        case '%':
            return num1 / 100000000;
    }
}

function computeWithOneNumber(firstSign, secondSign) {
    let num1 = 0;
    let j = 0;
    let arr = [];
    for (let i = 0; arrOfUserInput[i] !== firstSign; i++) {
        arr[i] = arrOfUserInput[i];
        j = i + 1;
    }
    //arrOfUserInput[j] === firstSign   and  arrOfUserInput[j++] === number
    arr.push(firstSign);
    j++;

    for (let i = j; i < arrOfUserInput.length - 1; i++) {
        if (arrOfUserInput[i] === '.') {
            let temp2 = calculateFloatPart2(j, num1, arrOfUserInput.length - 1);
            num1 = temp2[0];
            j = temp2[1];
            break;
        }
        num1 = num1 * 10 + parseFloat(arrOfUserInput[i]);
        j = i + 1;
    }
    arrOfUserInput = [];
    arrOfUserInput = arr;
    arrOfUserInput.push(operation(num1, 0, secondSign) + '');
}

function computeFirstNumber(firstSign) {
    let num1 = 0;
    let j = 0;
    for (let i = 0; arrOfUserInput[i] !== firstSign; i++) {
        if (arrOfUserInput[i] === '.') {
            let temp = calculateFloatPart(j, num1, firstSign);
            num1 = temp[0];
            j = temp[1];
            break;
        }
        num1 = num1 * 10 + parseFloat(arrOfUserInput[i]);
        j = i + 1;
    }
    return num1;
}

function computeSecondNumber(firstSign) {
    let num1 = 0;
    let j = 0;
    let arr = [];
    for (let i = 0; arrOfUserInput[i] !== firstSign; i++) {
        arr[i] = arrOfUserInput[i];
        j = i + 1;
    }
    //arrOfUserInput[j] === firstSign   and  arrOfUserInput[j++] === number
    arr.push(firstSign);
    j++;

    for (let i = j; i < arrOfUserInput.length - 1; i++) {
        if (arrOfUserInput[i] === '.') {
            let temp2 = calculateFloatPart2(j, num1, arrOfUserInput.length - 1);
            num1 = temp2[0];
            j = temp2[1];
            break;
        }
        num1 = num1 * 10 + parseFloat(arrOfUserInput[i]);
        j = i + 1;
    }
    arrOfUserInput = [];
    arrOfUserInput = arr;
    return num1;
}
