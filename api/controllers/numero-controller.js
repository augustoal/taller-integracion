/**
 * NumeroController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function retornarNumero(req, res) {

  var numero = req.param('numero');
  res.status(200);
  res.send({resultado_por_2: numero*2});

};
