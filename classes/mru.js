const Mru = {};

//function: x = x0 + v * t || x - x0 = v * t -> d = v * t
//x: position
//x0: initial position
//v: constant velocity, a = 0
//t: time

//To know position x = x0 + v * t
let case1 = (x0, v, t) => {
    return {
        x : x0 + v * t,
        x0 : x0,
        d : (( x0 + v * t) - x0),
        v : v,
        t : t
    };
};

//To know initial position x = x0 + v * t
//  x - (v * t) = x0
//  x0 = x - v * t
let case2 = (x, v, t) => {
    return {
        x0 : x - v * t,
        x : x,
        d : (x - (x - v * t)),
        v : v,
        t : t
    };
};

//To know velocity v = (x - x0) / t
//  x = x0 + v * t
//  x - x0 = v * t
//  v = (x - x0) / t
let case3 = (x, x0, t) => {
    return {
        v : (x - x0) / t,
        d : (x - x0),
        x : x,
        x0 : x0,
        t : t
    }; 
};

let case3_2 = (d, t) => {
    return {
        v : d / t,
        d : d,
        t : t
    }; 
};

//To know time x = x0 + v * t
//  x - x0 = v * t
//  (x - x0) / v = t
let case4 = (x, x0, v) => {
    return  {
        t : (x - x0) / v,
        d : (x - x0),
        x : x,
        x0 : x0,
        v : v
    }; 
};

let case4_2 = (d, v) => {
    return {
        t : d / v,
        d : d,
        v : v
    };
};

let calculate = (option, v, t, x, x0, d) =>{
    let error = "Solo se admiten números";
    let result = {};
    let op = option +'';
    switch (op.toLocaleLowerCase()) {
        case 'case1':
            result = isFinite(x0) && isFinite(v) && isFinite(t) ? case1(x0,v,t) : error;
            break;
        case 'case2':
            result = isFinite(x) && isFinite(v) && isFinite(t) ? case2(x,v,t) : error;
            break;
        case 'case3':
            result = isFinite(x0) && isFinite(x) && isFinite(t) ? case3(x,x0,t) : error;
            break;
        case 'case3_2':
            result = isFinite(d) && isFinite(t) ? case3_2(d,t) : error;
            break;
        case 'case4':
            result = isFinite(x0) && isFinite(v) && isFinite(x) ? case4(x,x0,v) : error;
            break;
        case 'case4_2':
            result = isFinite(d) && isFinite(v) ? case4_2(d,v) : error;
            break;
        default:
            result.error = "No has seleccionado una opción válida.";
            break;
    }
    return result;
}
Mru.calculate = calculate;
module.exports = Mru;