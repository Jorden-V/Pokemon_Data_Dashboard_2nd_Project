queue()
    .defer(d3.csv, "data/mildata.csv")
    .await(makeGraphs);

function makeGraphs(error, mildata) {

    var ndx = crossfilter(mildata);
    soldiers_by_country(ndx);
    country_selector(ndx);
    show_total_troops(ndx);
    show_total_regular_troops(ndx);
    show_total_reserve_troops(ndx);
    show_total_paramilitary(ndx);
    soldier_by_class(ndx);
    dc.renderAll();
}

function show_total_troops(ndx) {
    var show_total_troops = ndx.groupAll().reduceSum(dc.pluck('Total'));
    dc.numberDisplay("#total-troops")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(show_total_troops);
}

function show_total_regular_troops(ndx) {
    var show_total_troops = ndx.groupAll().reduceSum(dc.pluck('Active military'));
    dc.numberDisplay("#regular-troops")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(show_total_troops);
}

function show_total_reserve_troops(ndx) {
    var show_total_troops = ndx.groupAll().reduceSum(dc.pluck('Reserve military'));
    dc.numberDisplay("#reserve-troops")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(show_total_troops);
}

function show_total_paramilitary(ndx) {
    var show_total_troops = ndx.groupAll().reduceSum(dc.pluck('Paramilitary'));
    dc.numberDisplay("#paramilitary")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(show_total_troops);
}


function country_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('country'));
    var group = dim.group();

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}

function soldier_by_class(ndx) {
    var class_dim = ndx.dimension(dc.pluck('country'));
    var total_soldier_by_class = class_dim.group().reduceSum(dc.pluck('Active military'));
    dc.pieChart('#class-of-soldier')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(class_dim)
        .group(total_soldier_by_class);

}

function soldiers_by_country(ndx) {
    var continent_dim = ndx.dimension(dc.pluck('continent'));
    var total_Soldiers_Per_Continent = continent_dim.group().reduceSum(dc.pluck('Total'));
    dc.barChart("#soldiers-by-country")
        .width(600)
        .height(600)
        .margins({ top: 10, right: 50, bottom: 30, left: 70 })
        .dimension(continent_dim)
        .group(total_Soldiers_Per_Continent)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Continents")
        .yAxis().ticks(4);
}
