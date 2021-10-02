const increment = n => { return n + 1 };

const square = n => { return n * n; };

const doMathSoIDontHaveTo = (n, func) => { return func(n); };

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);


const ifElse = (condition, isTrue, isFalse, p) => { // ..args replace p
    return condition ? isTrue(p) : isFalse(p);
}
ifElse(true, fn1, fn2, 'HI');