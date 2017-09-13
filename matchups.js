/*
Matchup ratios:
even: Even - 50%
sfave - Slightly Favorable - 62.5%
fave - Favorable - 75%
vfave - Very Favorable - 87.5%
 */

var decks = [
    [
        {
            name: "gardevoir"
        },
        {
            deck: "metagross",
            ratio: null
        },
        {
            deck: "hooh_salazzle",
            ratio: "fave"
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "greninja",
            ratio: null
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        }
    ]
    ,
    [
        {
            name: "metagross"
        },
        {
            deck: "gardevoir",
            ratio: "vfave"
        },
        {
            deck: "hooh_salazzle",
            ratio: null
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "greninja",
            ratio: "even"
        },
        {
            deck: "espeon_garb",
            ratio: "vfave"
        }
        ]
        ,
    [
        {
            name: "hooh_salazzle"
        },
        {
            deck: "metagross",
            ratio: "vfave"
        },
        {
            deck: "gardevoir",
            ratio: null
        },
        {
            deck: "golisopod_garb",
            ratio: "vfave"
        },
        {
            deck: "greninja",
            ratio: null
        },
        {
            deck: "espeon_garb",
            ratio: null
        }
        ]
        ,
    [
        {
            name: "golisopod_garb"
        },
        {
            deck: "gardevoir",
            ratio: "fave"
        },
        {
            deck: "metagross",
            ratio: "fave"
        },
        {
            deck: "hooh_salazzle",
            ratio: null
        },
        {
            deck: "greninja",
            ratio: "vfave"
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        }
        ]
        ,
    [
        {
            name: "greninja"
        },
        {
            deck: "gardevoir",
            ratio: "fave"
        },
        {
            deck: "metagross",
            ratio: "even"
        },
        {
            deck: "hooh_salazzle",
            ratio: "fave"
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "espeon_garb",
            ratio: null
        }
    ]
    ,
    [
        {
            name: "espeon_garb"
        },
        {
            deck: "gardevoir",
            ratio: null
        },
        {
            deck: "metagross",
            ratio: null
        },
        {
            deck: "hooh_salazzle",
            ratio: "sfave"
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "greninja",
            ratio: "fave"
        }
    ]
    ];