var reduce = function(list, cb, initial) {
    let memo = initial;
    for (var i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
            i++
        } else {
            memo = cb(list[i], memo)
        }

    }

    return memo; //6

}

reduce([1, 2, 3], (v, sum) => v + sum);