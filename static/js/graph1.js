queue()
    .defer(d3.csv, "data/Pokemon.csv")
    .await(makeGraphs);

function makeGraphs(error, pokedata) {

    var ndx = crossfilter(pokedata);

    dc.renderAll();
}

