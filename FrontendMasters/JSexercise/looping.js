const game = {
    'suspects': [{
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}


function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

foo()

var gameloop = function() {
    for (var i = 0; i < game.suspects.length; i++) {
        for (var key in game.suspects[i]) {
            if (game.suspects[i][key] === "Rusty") {
                console.log('Found \'em !');
            } else {
                console.log('next time!');
            }
        }
    }
}

const suspects = [{
        name: "Rusty",
        color: "orange"
    },
    {
        name: "Miss Scarlet",
        color: "red"
    }
]

const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

const [color, color2] = [suspects[0].color, suspects[1].color];
const [{ color: firstColor }, { color: secondColor }] = suspects;