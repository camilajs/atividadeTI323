// ponto de declaração das API´s

const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// fazemos uma entrada para ver se o servidor está no AR
app.get('/health', (req, res) => { 
    res.json(
        { 
            status: 'ok',
            timestamp: new Date().toISOString(),
            By: 'Camila'
        }
    );
});

app.post('/api/calcular', (req, res) => {
    try {
      const { calcularIMC } = require('./funcao');
      const dados = req.body;

      if (!dados || typeof dados !== 'object'){
        return res.status(400).json({error: 'Corpo da requisicao errado'});
      }

      const {peso = 0, altura = 0} = dados;
      const resultado = calcularIMC(peso, altura);
      return res.status(200).json({ success: true, data: resultado });
    } catch(err){
        return res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = app;
