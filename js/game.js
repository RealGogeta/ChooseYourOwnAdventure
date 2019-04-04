// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up in bed.",
            choices: [
                {
                    text: "Sleep in more",
                    nextLevel: "cave",
                },

                {
                    text: "Get up",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "You got up now and have 30 mins to go to school",
            choices: [
                {
                    text: "Change into your uniform",
                    nextLevel: "livingroom",
                },
                
                {
                    
                    text: "Use your phone",
                    nextLevel: "regret"
                },
            ]
        },
        livingroom: {
            message: "You changed, brushed your teeth and became the hero of the Hidden Leaf vilage",
            choices: [
                {
            text:"Go back to the start",
            nextLevel: "start"
                }
        ]
            
        },

    }
};
