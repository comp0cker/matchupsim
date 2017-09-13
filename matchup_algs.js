$(document).ready(function() {
    for (var i = 0; i < decks.length; i++) // loops through every deck
    {
        var num = 0;
        //alert(decks[0].length);
        for (var j = 1; j < decks[i].length; j++) // loops through each matchup of the given deck decks[i]
            num += ratio_calc(decks[i], j);

        num /= (decks[i].length - 1); // the deck general win percentage is the average of the overall win percentages

        var str = '<div class="cont" id="' + decks[i][0].name + '"><p>' + decks[i][0].name + '<p class="num">' + num + '</p></p>' + '<form action="#"> <p class="range-field"> <input type="range" class="slide" min="0" max="10" /> </p> </form><p class="inp">5</p></div>';

        if (i % 2)
            $("#col1").append(str);
        else
            $("#col2").append(str);
    }

    //$(".gardevoir").append(.5 * parse(gardevoir, metagross) * );
});

$(document).on('input', '.slide', function() {
    $(this).parent().parent().parent().children('.inp').html( $(this).val() )

    for (var i = 0; i < decks.length; i++) // loops through every deck
    {
        var num = 0;
        var count = 0;
        var counts = [];
        //alert(decks[0].length);
        for (var j = 1; j < decks[i].length; j++) { // loops through each matchup of the given deck decks[i]
            //alert(decks[i].length);

            var inputInt = parseInt($('#' + decks[i][j].deck).children('.inp').text());

            for (var k = 0; k < inputInt; k++) {
                num += ratio_calc(decks[i], j);
                count++;
            }

            counts.push(inputInt);

        }

        // FIX THISSS IT ONLY NEEDS TO RUN ONCE

        var totalCounts = 0;
        for (var k = 0; k < counts.length; counts++) // finding the total number of counts (weights)
            totalCounts += counts[k];

        for (var l = 0; l < counts.length; counts++) // making the counts array contain weighted percents of each value
            counts[l] /= totalCounts;

        var totalDivCounts = 0;

        for (var m = 0; m < counts.length; counts++) // finding the total win percentage
            totalDivCounts += counts[m];

        num /= count; // the deck general win percentage is the average of the overall win percentages


        $('#' + decks[i][0].name).children('.num').text(num);
     }
});

function ratio_calc (obj, pos){
    if (obj[pos].ratio)
        return convert(obj[pos].ratio);
    else { // if the obj deck has an unfavorable matchup
        for (var i = 0; i < decks.length; i++)
            if (decks[i][0].name == obj[pos].deck) // find the favorable matchup deck in the decks array
            {
                //alert(obj[pos].deck);
                for (var j = 1; j < decks[i].length; j++)
                    if (decks[i][j].deck == obj[0].name) // find the unfavorable matchup deck in the favorable deck's subarray
                        return (1 - convert(decks[i][j].ratio));
            }
    }
}

function convert (text){
    if (text == "even")
        return 0.5;
    else if (text == "sfave")
        return 0.625;
    else if (text == "fave")
        return 0.75;
    else if (text == "vfave")
        return 0.875;
}