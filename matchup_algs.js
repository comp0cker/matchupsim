$(document).ready(function() {

    $(".consis").prop('checked', true);
    $(".speed").prop('checked', true);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#cont").append('<div class="col s6" id = "col3"> <canvas id="chart" width="100" height="100"></canvas> </div> <div class="col s3" id = "col1"></div> <div class="col s3" id = "col2"></div> ')
    }
    else {
        $("#cont").append('<div class="row"> <div class="col s3" id = "col1"></div> <div class="col s3" id = "col2"></div> <div class="col s6" id = "col3"> <canvas id="chart" width="100" height="100"></canvas> </div> </div>')
    }

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
                    'rgba(255, 159, 64, 0.2)',
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
                    'rgba(255, 159, 64, 1)',
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
                xAxes: [{
                    ticks: {
                        autoSkip: false
                    }
                }],
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
        var sliderRange = 100;
        var ratios = [];

        for (var j = 1; j < decks[i].length; j++) // loops through each matchup of the given deck decks[i]
        {
            ratios.push(ratio_calc(decks[i], j));
            $("#matchupcont").append("<div>" + decks[i][0].name + " vs. " + decks[i][j].deck + ": " + converttxt(ratio_calc(decks[i], j)) + "</div>")
        }

        var totalFreq = decks[i].length * (sliderRange / 2);
        ratios.push(0.5);

        var num = 0;

        for (var m = 0; m < ratios.length; m++)
            num += (ratios[m] * (sliderRange / 2));

        num /= totalFreq;

        num = num * .80 + convert(decks[i][0].consistency) * .10 + convert(decks[i][0].speed) * .10;

        var str = '<div class="cont" id="' + decks[i][0].name + '"><h5>' + decks[i][0].name + '</h5><p class="cons">' + decks[i][0].consistency + '</p><p class="num">' + num.toPrecision(4) + '</p><p> - frequency: </p><p class="inp">50</p>' + '<form action="#"> <p class="range-field"> <input type="range" class="slide" min="0" max="' + sliderRange + '" /> </p> </form></div>';

        graph.data.labels.push(decks[i][0].name);
        graph.data.datasets[0].data.push(num);

        if (i % 2 == 0)
            $("#col1").append(str);
        else if (i % 2 == 1)
            $("#col2").append(str);
    }

    $(".cons").hide();
    graph.update();

    $('.consis').change(function() {
        $(this).parent().parent().parent().children('.inp').html( $(this).val() ); // the input class is now equal to the value of the slider
        graph.data.datasets[0].data = [];
        for (var i = 0; i < decks.length; i++)
            calc(i);
        graph.update();
    });

    $('.speed').change(function() {
        $(this).parent().parent().parent().children('.inp').html( $(this).val() ); // the input class is now equal to the value of the slider
        graph.data.datasets[0].data = [];
        for (var i = 0; i < decks.length; i++)
            calc(i);
        graph.update();
    });

    $(document).on('input', '.slide', function() {
        $(this).parent().parent().parent().children('.inp').html( $(this).val() ); // the input class is now equal to the value of the slider
        graph.data.datasets[0].data = [];
        for (var i = 0; i < decks.length; i++)
            calc(i);
        graph.update();
    });

    function calc(i){
            var ratios = [];
            var freqs = [];
            var totalFreq = 0;

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

            if ($(".consis").prop('checked') && $(".speed").prop('checked')) // if the consistency switch is flipped
                num = num *.80 + convert(decks[i][0].consistency) * .10 + convert(decks[i][0].speed) * .10;
            else if ($(".consis").prop('checked'))
                num = num *.80 + convert(decks[i][0].consistency) * .10;
            else if ($(".speed").prop('checked'))
                num = num *.80 + convert(decks[i][0].speed) * .10;

            convert(decks[i][0].consistency) * .10

            $('#' + decks[i][0].name).children('.num').text(num.toPrecision(4));
            graph.data.datasets[0].data.push(num);
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
    else if (text == "trash")
        return 0.125;
    else if (text == "bad")
        return 0.25;
    else if (text == "decent")
        return 0.50;
    else if (text == "good")
        return 0.75;
    else if (text == "great")
        return 0.875;
}

function converttxt (text){
    if (text == 0.5)
        return "Even";
    else if (text == 0.625)
        return "Slightly Favorable";
    else if (text == 0.75)
        return "Favorable";
    else if (text == 0.875)
        return "Very Favorable";
    else if (text == 0.375)
        return "Slightly Unfavorable";
    else if (text == 0.25)
        return "Unfavorable";
    else if (text == 0.125)
        return "Very Unfavorable";

    else if (text == "trash")
        return "Trash";
    else if (text == "bad")
        return "Bad";
    else if (text == "decent")
        return "Decent";
    else if (text == "good")
        return "Good";
    else if (text == "great")
        return "Great";
}