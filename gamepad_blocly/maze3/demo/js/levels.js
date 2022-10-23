/* --- Levels data tunis version --- */

const levels = [
    // level 1
    {
        id: 1,
        textsujet : 'حرك القطعة خطوة الى الامام ثم اضغط تحميل ثم البدء',
        // the blocks to show in the toolbox
        blocks: [
            'move'
        ],
        maxBlocks: 1,
        // game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 1,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0]
            ]
        }
    },
    //level 2
    {
        id: 2,
        textsujet : 'حرك القطعة خطوتين الى الامام ثم اضغط تحميل ثم البدء',
        // maximum blocks allowed
        maxBlocks: 2,
        blocks: [
            'move'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 0
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
            ]
        }
    },
     //level 3
     {
        id: 3,
        // maximum blocks allowed
        maxBlocks: 5,
        textsujet : 'حرك القطعة الى الصورة المطابقة لكلمة منزل ',
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: 1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [0, 1],
                [2, 1]
            ]
        }
    },
    //level 4
    {
        id: 4,
        blocks: [
            'move',
            'turn'
        ],
        
        textsujet : 'حرك القطعة الى الصورة المطابقة لكلمة قط ',
        // maximum blocks allowed
        maxBlocks: 6,
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 2,
                y: 2
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [1, 2],
                [2, 2],
                [0, 2],
                [0, 2]
                
            ]
        }
    },
    //level 5
    {
        id: 5,
        textsujet : 'حرك القطعة الى الصورة المطابقة لكلمة الفيل ',
        // maximum blocks allowed
        maxBlocks: 6,
        blocks: [
            'move',
            'turn'
        ],
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 0
            },
            // marker data
            marker: {
                x: 0,
                y: 1
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [1, 1],
                [0, 1],
                [2, 1]
                [1, 2],
                [2, 2]
            ]
        }
    },

]