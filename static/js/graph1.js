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

    function raceByGender(dimension, race) {
        return dimension.group().reduce(
            function(p, v) {
                p.total++;
                if (v.race == race) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.race == race) {
                    p.match--;
                }
                return p;
            },
            function() {
                return { total: 0, match: 0 };
            }
        );
    }

    var dim = ndx.dimension(dc.pluck("gender"));
    var groupAByGender = raceByGender(dim, "group A");
    var groupBByGender = raceByGender(dim, "group B");
    var groupCByGender = raceByGender(dim, "group C");
    var groupDByGender = raceByGender(dim, "group D");

    dc.barChart("#race-participation")
        .width(400)
        .height(300)
        .dimension(dim)
        .group(groupAByGender, "Group A")
        .stack(groupBByGender, "Group B")
        .stack(groupCByGender, "Group C")
        .stack(groupDByGender, "Group D")
        .valueAccessor(function(d) {
            if (d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            }
            else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 30, left: 30 });
}

