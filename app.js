// /src/app.js
const express = require('express');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const proprietarioRoutes = require('./routes/proprietario_routes');
const clienteRoutes = require('./routes/cliente_routes');
const imovelRoutes = require('./routes/imovel_routes');
const pagamentoRoutes = require('./routes/pagamento_routes');
const contratoRoutes = require('./routes/contrato_routes');

app.use(express.json());

// Definição do Swagger
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API da Minha Imobiliária',
        description: 'Documentação da API para gerenciar imóveis, clientes, contratos e pagamentos',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor local',
        },
      ],
    },
    apis: ['./routes/*.js'], // Adicione aqui o caminho para os arquivos de rota
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/proprietarios', proprietarioRoutes);
app.use('/clientes', clienteRoutes);
app.use('/imovel', imovelRoutes )
app.use('/pagamentos', pagamentoRoutes);
app.use('/contratos', contratoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
