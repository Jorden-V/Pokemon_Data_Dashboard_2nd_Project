queue()
    .defer(d3.csv, "data/Pokemon.csv")
    .await(makeGraphs);

function makeGraphs(error, pokedata) {

    var ndx = crossfilter(pokedata);
    show_pokemon_type(ndx);
    dc.renderAll();
}

function show_pokemon_type(ndx) {
    var typeDim = ndx.dimension(dc.pluck('type1'));
    var typeGroup = typeDim.group();
    dc.rowChart('#pokemon-type')
        .width(900)
        .height(400)
        .margins({ top: 10, right: 20, bottom: 40, left: 20 })
        .dimension(typeDim)
        .group(typeGroup)
        .transitionDuration(500)
        .transitionDuration(500);
}

