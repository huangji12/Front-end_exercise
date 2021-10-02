const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item) {
    return 'broken ${item}';
};

const brokenWeapons = _.map(weapons, makeBroken);

brokenWeapons;




const _ = {};

_.each = function(list, callback) {
    // 
    if (Array.isArray(list)) { // loop through array
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else { //object
        for (var key in list) {
            callback(list[key], key, list);
        }
    }
}

_.map = function(list, callback) {
    // create an empty array to store
    var storage = [];
    // loopin'
    // for (var i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list))
    // }
    _.each(list, function(v, i, list) {
            storage.push(callback(v, i, list))
        })
        // callback(element)
        // push it to array
        //return []
    return storage;
}

_.map([1, 2, 3], function(val) { return val + 1; })