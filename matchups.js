/*
Matchup ratios:
even -  Even - 50%
sfave - Slightly Favorable - 62.5%
fave - Favorable - 75%
vfave - Very Favorable - 87.5%

Consistency/Speed ratios:
trash - 12.5%
bad - 25%
decent - 50%
good - 75%
great - 87.5%

Matchups - 80%
Consistency - 10%
Speed - 10%
 */

var decks = [
    [
        {
            name: "gardevoir",
            consistency: "good",
            speed: "good"
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
            ratio: "vfave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: "even"
        }
    ]
    ,
    [
        {
            name: "metagross",
            consistency: "decent",
            speed: "bad"
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
        },
        {
            deck: "pikachu_magnezone",
            ratio: "fave"
        }
        ]
        ,
    [
        {
            name: "hooh_salazzle",
            consistency: "great",
            speed: "great"
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
        },
        {
            deck: "pikachu_magnezone",
            ratio: null
        }
        ]
        ,
    [
        {
            name: "golisopod_garb",
            consistency: "good",
            speed: "decent"
        },
        {
            deck: "gardevoir",
            ratio: "sfave"
        },
        {
            deck: "metagross",
            ratio: "sfave"
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
            ratio: "sfave"
        },
        {
            deck: "rainbow_road",
            ratio: "sfave"
        },
        {
            deck: "pikachu_magnezone",
            ratio: "fave"
        }
        ]
        ,
    [
        {
            name: "greninja",
            consistency: "good",
            speed: "bad"
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
        },
        {
            deck: "pikachu_magnezone",
            ratio: null
        }
    ]
    ,
    [
        {
            name: "espeon_garb",
            consistency: "good",
            speed: "good"
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
            ratio: "sfave"
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        }
    ],
    [
        {
            name: "rainbow_road",
            consistency: "decent",
            speed: "good"
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
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        }

    ],
    [
        {
            name: "pikachu_magnezone",
            consistency: "good",
            speed: "great"
        },
        {
            deck: "gardevoir",
            ratio: "even"
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
            ratio: "fave"
        },
        {
            deck: "espeon_garb",
            ratio: null
        },
        {
            deck: "rainbow_road",
            ratio: null
        }
    ]
    ];