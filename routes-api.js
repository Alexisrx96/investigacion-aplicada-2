const express = require('express');
const temperature = require('./classes/temperature');
const mru = require('./classes/mru');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        current_version : '0.01v',
        lastest_version : '0.01v'
    });
});
routes.get('/random', (req, res) => {

    let max = req.query.max === null || !isFinite(req.query.max) ? 1 : +req.query.max;
    let min = req.query.min === null || !isFinite(req.query.min) ? 0 : +req.query.min;
    min = min < max ? min : max - 1;
    let random = Math.random() * (max - min) + min;
    res.json({
        numeroRandom: random,
        numeroMaximo: max,
        numeroMinimo: min
    });
});

routes.get('/nthroot', (req, res) => {
    let b = req.query.b === null || !isFinite(req.query.b) ? 0 : +req.query.b;
    let e = req.query.e === null || !isFinite(req.query.e) ? 2 : +req.query.e;
    let sign = b === 0 ? 0 : b > 0 ? 1 : -1;
    let answer =
        e == 0 ? "No puedes dividir entre cero (0)" : 
        e % 2 == 0 && b < 0 ?
        "No pudes sacar raíz par de un número negativo" :
        sign * Math.pow(Math.abs(b), 1 / e);
    res.json({
        base: b,
        exponente: (1 / e) + ` (1 / ${e})`,
        resultado: answer
    });
});

routes.get('/temperature', (req, res) => {
    let t = req.query.t === null || !isFinite(req.query.t) ? 0 : +req.query.t;
    let option = req.query.option + '';
    let answer = temperature.calculate(option,t)
    res.json({
        temperatura: answer
    });
});

routes.get('/mru', (req, res) => {
    let x = req.query.x;
    let x0 = req.query.x0;
    let v = req.query.v;
    let t = req.query.t;
    let d = req.query.d;
    let option = req.query.option === null ? "error" : req.query.option;
    let answer = mru.calculate(option,v,t,x,x0,d);
    res.json(answer);
});

routes.get('/p', (req, res) => {
    res.json({
        test: "test",
    })
})

module.exports = routes;