/* --- Levels data tunis version --- */

const levels = [
    // level 1
    {
        id: 1,
        imgsujet : 'images/Sujet/Sujet1+2.png',
        // the blocks to show in the toolbox
        blocks: [
            'move',
            'turn',
            'repeat_until',
            'if_else_path',
            'if_path'
        ],
        maxBlocks: 6,
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
                x: 4,
                y: 3
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
                [2, 2],
                [3, 2],
                [4, 2],
                [4, 3],
                [1, 2],
                [0, 2],
                [0, 3],
            ]
        }
    },
    //level 2
    {
        id: 2,
        imgsujet : 'images/Sujet/Sujet1+2.png',
        // maximum blocks allowed
        maxBlocks: 10,
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
                x: 4,
                y: 3
            },
            // game path
            path: [
                // [x, y]
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
                [2, 2],
                [2, 3],
                [3, 2],
                [4, 2],
                [4, 3],
                [1, 2],
                [0, 2],
                [0, 3],
            ]
        }
    },
     //level 3
     {
        id: 3,
        // maximum blocks allowed
        maxBlocks: 10,
        textsujet : 'أكمل بالمقطع المناسب : بـ - ـب - ـبـ',
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 1
            },
            // marker data
            marker: {
                x: 2,
                y: 1
            },
            // game path
            path: [
                // [x, y]
                [0, 1],
                [1, 1],
                [2, 1],
                [1, 0],
                [1, 2]
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
        
        textsujet : 'أكمل بالمقطع المناسب : بـ - ـب - ـبـ',
        // maximum blocks allowed
        maxBlocks: 5,
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 0,
                y: 1
            },
            // marker data
            marker: {
                x: 2,
                y: 2
            },
            // game path
            path: [
                // [x, y]
                [0, 1],
                [1, 1],
                [2, 1],
                [1, 0],
                [2, 0],
                [1, 2],
                [2, 2]
                
            ]
        }
    },
    //level 5
    {
        id: 5,
        imgsujet : 'images/Sujet/Sujet5.png',
        // maximum blocks allowed
        maxBlocks: 10,
        //game data
        game: {
            // pegman data
            pegman: {
                direction: 1,
                x: 1,
                y: 0
            },
            // marker data
            marker: {
                x: 6,
                y: 4
            },
            // game path
            path: [
                // [x, y]
                [2, 0],
                [3, 0],
                [3, 1],
                [3, 3],
                [4, 3],
                [2, 3],
                [0, 3],
                [6, 3],
                [6, 5],
                [3, 4],
                [0, 4],
                [6, 4]
            ]
        }
    },

]