const Mru = {};

//function: x = x0 + v * t || x - x0 = v * t -> d = v * t
//x: position
//x0: initial position
//v: constant velocity, a = 0
//t: time

//To know position x = x0 + v * t
let case1 = (x0, v, t) => {
    return {x : x0 + v * t};
};

//To know initial position x = x0 + v * t
//  x - (v * t) = x0
//  x0 = x - v * t
let case2 = (x, v, t) => {
    return {x0 : x - v * t}; 
};

//To know velocity v = (x - x0) / t
//  x = x0 + v * t
//  x - x0 = v * t
//  v = (x - x0) / t
let case3 = (x, x0, t) => {
    return {v : (x - x0) / t}; 
};

let case3_2 = (d, t) => {
    return {v : d / t}; 
};

//To know time x = x0 + v * t
//  x - x0 = v * t
//  (x - x0) / v = t
let case4 = (x, x0, v) => {
    return  {t : (x - x0) / v}; 
};

let case4_2 = (d, v) => {
    return {t : d / v};
};

let calculate = (caseOption, v, t, x, x0, d) =>{
    let output;
    switch (caseOption) {
        case 0:
            output = isFinite(x0) && isFinite(v) && isFinite(t) ? case1(x0,v,t) : "";
            break;
        case 1:
            output = case2(x,v,t);
            break;
        case 2:
            output = case3(x,x0,t);
            break;
        case 3:
            output = case3_2(d,t);
            break;
        case 4:
            output = case4(x,x0,v);
            break;
        case 5:
            output = case4_2(d,v);
            break;
        default:
            output = "No has seleccionado una";
            break;
    }
}