// let x = 34;
// console.log(x.toString(2));

// let y = x.toString(2);

// console.log(y.toString(10));

function convert(number, base) {
    if (base === 2) {
        console.log(number.toString(2));
    } else if (base === 10) {
        console.log(number.toString(10));
    } else {
        console.log('Numero o base incorrecto');
    }
}

convert(55, 2);
