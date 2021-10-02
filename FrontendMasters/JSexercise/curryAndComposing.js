const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2)
        }
    }
};

const abc = (a, b) => {
    return [a, b];
};

const curried = _.curry(abc);

curried(1)(2);


const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg)
        return fn(result);
    }
}

const consider = (name) => {
    return 'I think it could be... ${name}';
}

const exclaim = (statement) => {
    return '${statement.toUpperCase()}!';
};

const blame = _.compose(consider, exclaim);

blame('you');