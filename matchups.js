/*
Matchup ratios:
even -  Even - 50%
sfave - Slightly Favorable - 62.5%
fave - Favorable - 75%
vfave - Very Favorable - 87.5%

Consistency ratios:
trash - 12.5%
bad - 25%
decent - 50%
good - 75%
great - 87.5%
 */

var decks = [
    [
        {
            name: "gardevoir",
            consistency: "good"
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
        },
        {
            deck: "rainbow_road",
            ratio: null
        }
    ]
    ,
    [
        {
            name: "metagross",
            consistency: "decent"
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
        },
        {
            deck: "rainbow_road",
            ratio: null
        }
        ]
        ,
    [
        {
            name: "hooh_salazzle",
            consistency: "great"
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
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        }
        ]
        ,
    [
        {
            name: "golisopod_garb",
            consistency: "good"
        },
        {
            deck: "gardevoir",
            ratio: "sfave"
        },
        {
            deck: "metagross",
            ratio: "fave"
        },
        {
            deck: "hooh_salazzle",
            ratio: null // very unfavorable
        },
        {
            deck: "greninja",
            ratio: "vfave"
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: "sfave"
        }
        ]
        ,
    [
        {
            name: "greninja",
            consistency: "bad"
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
            ratio: "sfave"
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "espeon_garb",
            ratio: null
        },
        {
            deck: "rainbow_road",
            ratio: "sfave"
        }
    ]
    ,
    [
        {
            name: "espeon_garb",
            consistency: "good"
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
            ratio: null
        },
        {
            deck: "golisopod_garb",
            ratio: null
        },
        {
            deck: "greninja",
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        }
    ]
    ,
    [
        {
            name: "rainbow_road",
            consistency: "decent"
        },
        {
            deck: "gardevoir",
            ratio: "fave"
        },
        {
            deck: "metagross",
            ratio: "sfave"
        },
        {
            deck: "hooh_salazzle",
            ratio: "sfave"
        },
        {
            deck: "golisopod_garb",
            ratio: null //sfave their favor
        },
        {
            deck: "greninja",
            ratio: null //sfave their favor
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        }
    ]
    ];