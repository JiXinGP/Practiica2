const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

app.get('/misitio', (req, res) => {
    res.send('Bienvenido a mi sitio web');
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
})

app.get('/misitio/about', (req, res) => {
    res.send('<h1>Acerca de nosotros</h1>');
});

app.get('/misitio/gastos', (req, res) => {
    res.json(
        {
            id: 435,
            gasto: 'Vivienda',
            monto: 141414.60,
            informacion: 'Corresponde a gastos Alimenticios servicios basicos'
        }
    )
});

app.post('/misitio/calculo', (req, res) => {
    console.log(req.body)
    res.send('Cálculo impuesto a la renta');
});

app.post('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
})

app.put('/misitio/usuario/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Datos del usuario actualizados');
})

app.delete('/misitio/usuario/:id', (req, res) => {
    res.send('Usuario ' + (req.params.id) + ' borrado');
});

app.put('/misitio/gastos/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Gastos de vivienda actualizados');
})

app.delete('/misitio/gastos/:id', (req, res) => {
    res.send('Gasto ' + (req.params.id) + ' borrado');
});

app.get('/misitio/usuario', (req, res) => {
    res.json(
    );
});
