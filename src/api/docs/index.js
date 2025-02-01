const fs = require("fs")
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const router = require('express').Router();
const YAML = require('yaml')

const file = fs.readFileSync(path.join(__dirname, '..', '..', '..', 'documentation.yaml'), 'utf8');
const swaggerDocument = YAML.parse(file);

router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;