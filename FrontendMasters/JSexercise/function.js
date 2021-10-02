const videoData = [{
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

const _ = {};

_.filter = function(arr, callback) {
    // create a new arr
    const storage = [];
    // loop through arr
    for (let i = 0; i < arr.length; i++) {
        // check if callback returns true
        if (callback(arr[i], i, arr) === true) {
            // if returns trun, push into array
            storage.push(arr[i]);
        }
    }
    // return arr
    return storage;
}

const suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});

const suspectsName = _.map(suspects, suspect => {
    return suspects.name;
})

const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
}
constructArr('was', 'it', 'in');

const constructArr2 = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};
constructArr2('was', 'it', 'in');

const from = arr => {
    return Array.prototype.slice.call(arr);
}