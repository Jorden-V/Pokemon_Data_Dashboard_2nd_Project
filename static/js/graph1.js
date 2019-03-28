queue()
    .defer(d3.csv, "data/Pokemon.csv")
    .await(makeGraphs);

function makeGraphs(error, pokedata) {

    var ndx = crossfilter(pokedata);
    show_pokemon_type(ndx);
    show_pokemon_gen(ndx);
    show_legendary_pokemon(ndx);
    show_total_pokemon_volume(ndx);
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

function show_pokemon_gen(ndx) {
    var genDim = ndx.dimension(dc.pluck('generation'));
    var genGroup = genDim.group();
    dc.pieChart('#pokemon-gen-type')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(genDim)
        .group(genGroup);
}

function show_legendary_pokemon(ndx) {
    var legendaryDim = ndx.dimension(dc.pluck('legendary'));
    var legendaryGroup = legendaryDim.group();
    dc.pieChart('#legendary-pokemon')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(legendaryDim)
        .group(legendaryGroup);
}

function show_total_pokemon_volume(ndx) {
    var totalPokemonGroup = ndx.groupAll('#');
    dc.numberDisplay("#pokemon-volume")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(totalPokemonGroup);
}
