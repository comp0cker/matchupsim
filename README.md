# matchupsim
Simulates theoretical matchups for the Pokemon TCG.

The sliders modify frequency of the listed deck. The switches on the top toggle whether or not consistency and speed are implemented into the calculations.

## Calculating a deck's overall matchup ratio (OMR)

The OMR is calculated simply by combining all of a particular deck's matchups, converted into a numerical value, against the other decks listed in the metagame. 

The matchup algorithm to calculate deck A's OMR against decks B, C and D is as follows:

```
OMR(A) = ( freq(B) * matchup(A, B) + freq(C) * matchup(A, C) + freq(D) * matchup(A, D) )
         / ( freq(B) + freq(C) + freq(D) )
```

where freq(X) is the corresponding slider value inputted by the user for deck X, and matchup(A, X) represents the calculated matchup ratio between decks A and X.

## Calculating a pair of decks' calculated matchup ratio

Matchup ratios are provided in `matchups.js` in the decks variable. The convert function in `matchup_algs.js` converts the listed ratio property into a number. Conversions are used as follows:

```
even -  Even - 50%
sfave - Slightly Favorable - 62.5%
fave - Favorable - 75%
vfave - Very Favorable - 87.5%
null - Unfavorable - ~~%
```

If a deck has a null matchup ratio, the other deck's matchup against the currect deck will be listed as one of the positives. Even matchups are listed on both.
