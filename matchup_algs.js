$(document).ready(function() {

    var ctx = document.getElementById("chart");
    var graph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Overall Win Percentage',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


    for (var i = 0; i < decks.length; i++) // loops through every deck
    {
        var num = 0;

        for (var j = 1; j < decks[i].length; j++) // loops through each matchup of the given deck decks[i]
            num += ratio_calc(decks[i], j);

        num /= (decks[i].length - 1); // the deck general win percentage is the average of the overall win percentages

        var str = '<div class="cont" id="' + decks[i][0].name + '"><p>' + decks[i][0].name + '<p class="num">' + num + '</p></p>' + '<form action="#"> <p class="range-field"> <input type="range" class="slide" min="0" max="100" /> </p> </form><p class="inp">50</p></div>';

        graph.data.labels.push(decks[i][0].name);
        graph.data.datasets[0].data.push(num);

        if (i % 2 == 0)
            $("#col1").append(str);
        else if (i % 2 == 1)
            $("#col2").append(str);
    }

    graph.update();

    $(document).on('input', '.slide', function() {
        $(this).parent().parent().parent().children('.inp').html( $(this).val() )

        graph.data.datasets[0].data = [];

        for (var i = 0; i < decks.length; i++) // loops through every deck
        {
            var ratios = [];
            var freqs = [];
            var totalFreq = 0

            for (var j = 1; j < decks[i].length; j++) { // loops through each matchup of the given deck decks[i]
                var freq = parseInt($('#' + decks[i][j].deck).children('.inp').text());
                ratios.push(ratio_calc(decks[i], j));
                freqs.push(freq);
                totalFreq += freq;
            }

            var currentFreq = parseInt($('#' + decks[i][0].name).children('.inp').text()); // this block of code puts in the mirror for calculation
            ratios.push(0.5);
            freqs.push(currentFreq);
            totalFreq += currentFreq;

            var num = 0;

            for (var m = 0; m < ratios.length; m++)
                num += (ratios[m] * freqs[m]);

            num /= totalFreq;

            $('#' + decks[i][0].name).children('.num').text(num);
            graph.data.datasets[0].data.push(num);
        }

        graph.update();
    });
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