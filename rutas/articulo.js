const express = require("express");
const router = express.Router();

const ArticuloControlador = require("../controladores/articulo");

//rutas de pruebas
router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.get("/curso", ArticuloControlador.curso);

// Rutas Utiles
router.post("/crear", ArticuloControlador.crear);

module.exports = router;
