const Temperature = {};

let a2a = (d)=>{return {
    CF: d +'°C = '+(d * 9/5 + 32)+'°F',
    CK: d +'°C = '+(d + 273.15)+'K',
    FC: d +'°F = '+((d - 32) * 5/9)+'°C',
    FK: d +'°F = '+((d + 459.67) * 5/9)+'°K',
    KC: d +'K = '+(d - 273.15)+'°C',
    KF: d +'K = '+(d* 9/5 - 459.67)+'°F'
}};

let c2f = (d)=>{return {CF: d +'°C = '+(d * 9/5 + 32)+'°F'}};

let c2k = (d)=>{return {CK: d +'°C = '+(d + 273.15)+'K'}};

let c2a = (d)=>{return {
    CF= d +'°C = '+(d * 9/5 + 32)+'°F',
    CK: d +'°C = '+(d + 273.15)+'K'
}};

let f2c = (d)=>{return {FC: d +'°F = '+((d - 32) * 5/9)+'°C'}};

let f2k = (d)=>{return {FK: d +'°F = '+((d + 459.67) * 5/9)+'°K'}};

let f2a = (d)=>{return {
    FC: d +'°F = '+((d - 32) * 5/9)+'°C',
    FK: d +'°F = '+((d + 459.67) * 5/9)+'°K'
}};

let k2c = (d)=>{return {KC: d +'K = '+(d - 273.15)+'°C'}};

let k2f = (d)=>{return {KF: d +'K = '+(d* 9/5 - 459.67)+'°F'}};

let k2a = (d)=>{return {
    KC: d +'K = '+(d - 273.15)+'°C',
    KF: d +'K = '+(d* 9/5 - 459.67)+'°F'
}};

let calculate = (input)=>{
    
    let option = input.toString().toLowerCase();
    let output;
    switch (option) {
        case 'a2a':
            output = a2a(t);
            break;
            
        case 'c2f':
            output = c2f(t);
            break;
            
        case 'c2k':
            output = c2k(t);
            break;
            
        case 'c2a':
            output = c2a(t);
            break;

        case 'f2c':
            output = f2c(t);
            break;
            
        case 'f2k':
            output = f2k(t);
            break;
            
        case 'f2a':
            output = f2a(t);
            break;
            
        case 'k2c':
            output = k2c(t);
            break;
            
        case 'k2f':
            output = k2f(t);
            break;
            
        case 'k2a':
            output = k2a(t);
            break;

        default:
            output = a2a(t);
            break;
    }
    return output;
};

Temperature.calculate = calculate;

module.exports = Temperature;