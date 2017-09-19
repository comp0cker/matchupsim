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
            ratio: "sfave"
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
            deck: "drampa_garb",
            ratio: "vfave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: "even"
        },
        {
            deck: "ninetales",
            ratio: "even"
        },
        {
            deck: "bulu_vikavolt",
            ratio: null
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
            ratio: "even"
        },
        {
            deck: "greninja",
            ratio: "even"
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        },
        {
            deck: "drampa_garb",
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: null
        },
        {
            deck: "ninetales",
            ratio: "fave"
        },
        {
            deck: "bulu_vikavolt",
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
            ratio: "fave"
        },
        {
            deck: "greninja",
            ratio: "fave" // with giratina promo
        },
        {
            deck: "espeon_garb",
            ratio: "fave"
        },
        {
            deck: "drampa_garb",
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: null
        },
        {
            deck: "ninetales",
            ratio: null
        },
        {
            deck: "bulu_vikavolt",
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
            ratio: "even"
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
            ratio: "vfave"
        },
        {
            deck: "drampa_garb",
            ratio: "vfave"
        },
        {
            deck: "rainbow_road",
            ratio: "fave"
        },
        {
            deck: "pikachu_magnezone",
            ratio: "fave"
        },
        {
            deck: "ninetales",
            ratio: "sfave"
        },
        {
            deck: "bulu_vikavolt",
            ratio: "even"
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
            ratio: null
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
            deck: "drampa_garb",
            ratio: null
        },
        {
            deck: "rainbow_road",
            ratio: "fave"
        },
        {
            deck: "pikachu_magnezone",
            ratio: null
        },
        {
            deck: "ninetales",
            ratio: "even"
        },
        {
            deck: "bulu_vikavolt",
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
            deck: "drampa_garb",
            ratio: "fave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        },
        {
            deck: "ninetales",
            ratio: null
        },
        {
            deck: "bulu_vikavolt",
            ratio: null
        }
    ],
    [
        {
            name: "drampa_garb",
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
            ratio: "sfave"
        },
        {
            deck: "espeon_garb",
            ratio: null
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        },
        {
            deck: "ninetales",
            ratio: null
        },
        {
            deck: "bulu_vikavolt",
            ratio: "even"
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
            ratio: "sfave"
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
            ratio: "sfave"
        },
        {
            deck: "drampa_garb",
            ratio: "sfave"
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        },
        {
            deck: "ninetales",
            ratio: "vfave"
        },
        {
            deck: "bulu_vikavolt",
            ratio: "even"
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
            ratio: "fave"
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
            deck: "drampa_garb",
            ratio: "sfave"
        },
        {
            deck: "rainbow_road",
            ratio: null
        },
        {
            deck: "ninetales",
            ratio: null
        },
        {
            deck: "bulu_vikavolt",
            ratio: "even"
        }
    ],

        [
        {
            name: "ninetales",
            consistency: "good",
            speed: "good"
        },
        {
            deck: "gardevoir",
            ratio: "even"
        },
        {
            deck: "metagross",
            ratio: null // unfavorable
        },
        {
            deck: "hooh_salazzle",
            ratio: "vfave"
        },
        {
            deck: "golisopod_garb",
            ratio: null // slightly unfavorable
        },
        {
            deck: "greninja",
            ratio: "even"
        },
        {
            deck: "espeon_garb",
            ratio: "sfave"
        },
        {
            deck: "drampa_garb",
            ratio: "sfave"
        },
        {
            deck: "rainbow_road",
            ratio: null // very unfavorable
        },
        {
            deck: "pikachu_magnezone",
            ratio: "sfave"
        },
        {
            deck: "bulu_vikavolt",
            ratio: "even"
        }
        ],

        [
        {
            name: "bulu_vikavolt",
            consistency: "great",
            speed: "good"
        },
        {
            deck: "gardevoir",
            ratio: "sfave"
        },
        {
            deck: "metagross",
            ratio: null // unfavorable
        },
        {
            deck: "hooh_salazzle",
            ratio: "fave"
        },
        {
            deck: "golisopod_garb",
            ratio: "even"
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
            deck: "drampa_garb",
            ratio: "even"
        },
        {
            deck: "rainbow_road",
            ratio: null // very unfavorable
        },
        {
            deck: "pikachu_magnezone",
            ratio: "even"
        },
        {
            deck: "ninetales",
            ratio: "even"
        }
        ]
    ];