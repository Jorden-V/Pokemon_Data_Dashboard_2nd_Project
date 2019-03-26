queue()
    .defer(d3.csv, "data/mildata.csv")
    .await(makeGraphs);

function makeGraphs(error, mildata) {
    country_selector(ndx);
    var ndx = crossfilter(mildata);
    soldiers_by_country(ndx);

    dc.renderAll();
}


function country_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('country'));
    var group = dim.group();
    
    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}



function soldiers_by_country(ndx) {
    var continent_dim = ndx.dimension(dc.pluck('continent'));
    var total_Soldiers_Per_Continent = continent_dim.group().reduceSum(dc.pluck('Total'));
    dc.barChart("#soldiers-by-country")
        .width(900)
        .height(150)
        .margins({ top: 10, right: 50, bottom: 30, left: 70 })
        .dimension(continent_dim)
        .group(total_Soldiers_Per_Continent)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Continents")
        .yAxis().ticks(4);
}
