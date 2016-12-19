var visualFieldsCount = {
    small : {x : 5,y : 5},
    normal : {x : 5,y : 5},
    big : {x : 7,y : 7}
};

var water = 0;
var meadow = 1;
var forest = 2;
var mountain = 3;
var desert = 4;

var mapLevel = {
    0: [water, water, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, meadow, forest, forest, forest, mountain, desert],
    1: [water, water, water, water, water, water, water, water, water, water, meadow, meadow, meadow, meadow, meadow, forest, forest, forest, mountain, desert],
    2: [water, water, meadow, meadow, meadow, meadow, meadow, forest, forest, forest, forest, forest, forest, forest, forest, forest, forest, forest, mountain, desert],
    3: [water, water, meadow, meadow, meadow, forest, forest, forest, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, desert],
    4: [water, water, meadow, meadow, forest, forest, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, mountain, desert, desert, desert, desert]
};

var waterBorder = 4;
