
// initialize votes from dom structure
// NOTE: probably shouldn't do this. it's brittle. DOM must match survey
// responses exactly. What could possibly go wrong?
//
// votes[q][response] = count
var votes = {};
$("select").each(function (i) {
    var q = $(this).attr("name");
    votes[q] = {};
    $(this).find("option").each(function (j) {
        var a = $(this).text();
        votes[q][a] = 0;
    });
})

// load responses using d3 parsing the csv from the proxy server
d3.csv("data.csv", function (d) {

    console.log("d", d);
    for (var k in d) {
        if (k !== "Timestamp") {
            var q = k.match(/Pick an? (.*)/)[1].replace(/ /g,"_")
            var a = d[k];
            votes[q][a] += 1;
        }
    }
});

// professionals make promises. prototypers setTimeout
setTimeout(function () {
    console.log("votes", votes);
    for (var q in votes) {
        var max_a = undefined;
        var max_votes = 0;
        for (var a in votes[q]) {
            if (votes[q][a] > max_votes) {
                max_a = a;
                max_votes = votes[q][a];
            }
        }
        console.log(q, max_a, votes[q]);
        $('select[name="'+q+'"]').val(max_a);
    }
}, 1000)
