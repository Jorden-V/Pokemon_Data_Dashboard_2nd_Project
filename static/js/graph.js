queue()
    .defer(d3.csv, "data/performance.csv")
    .await(makeGraphs);

function makeGraphs(error, performance) {
    var ndx = crossfilter(performance);

    show_discipline_selector(ndx);
    gender_volume(ndx);
    race_participation(ndx);
    dc.renderAll();
}

function show_discipline_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group();

    dc.selectMenu("#discipline-selector")
        .dimension(dim)
        .group(group);
}

function gender_volume(ndx) {
    var dim = ndx.dimension(dc.pluck('gender'));
    var group = dim.group();

    dc.barChart("#gender-volume")
        .width(350)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}

function race_participation(ndx) {
    var name_dim = ndx.dimension(dc.pluck('gender'));

    var raceGroupA = name_dim.group(function(d) {
        if (d.race === 'group A') {
            return +d.gender;
        }
        else {
            return 0;
        }

    });

    var raceGroupB = name_dim.group(function(d) {
        if (d.race === 'group B') {
            return +d.gender;
        }
        else {
            return 0;
        }
    });

    var raceGroupC = name_dim.group(function(d) {
        if (d.race === 'group C') {
            return +d.gender;
        }
        else {
            return 0;
        }
    });

    var raceGroupD = name_dim.group(function(d) {
        if (d.race === 'group D') {
            return +d.gender;
        }
        else {
            return 0;
        }
    });

    var stackedChart = dc.barChart("#race-participation");
    stackedChart
        .width(500)
        .height(500)
        .dimension(name_dim)
        .group(raceGroupA, "Group A")
        .stack(raceGroupB, "Group B")
        .stack(raceGroupC, "Group C")
        .stack(raceGroupD, "Group D")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

    stackedChart.margins().right = 100;

}
