const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service')
const Localizacao = require('../model/localizacao.model')


router.get('/', function (req, res, next) {
    LocalizacaoService
        .consultar()
        .then((lista) => {
            res.status(200).json(lista);
        }, (err) => {
            res.status(500).json(err);
        })
});


router.get('/', function (req, res, next) {
    LocalizacaoService
        .consultarPorId()
        .then((lista) => {
            res.status(200).json(lista);
        }, (err) => {
            res.status(500).json(err);
        })
});


router.post('/', function (req, res, next) {
    console.log(req.body);
    let entidade = new Localizacao(req.body);
    LocalizacaoService
        .salvar(entidade)
        .then((entidade) => {
            res.status(201).json(entidade);
        }, (err) => {
            res.status(500).json(err);
        })
});


router.put('/', function (req, res, next) {
    let entidade = new Localizacao(req.body);
    LocalizacaoService
        .atualizar(entidade)
        .then((entidade) => {
            res.status(200).json(entidade);
        }, (err) => {
            res.status(500).json(err);
        })
});

/* EXCLUIR. */
router.delete('/', function (req, res, next) {
    let id = req.param(['_id']);
    if (id) {
        LocalizacaoService
            .excluir(id)
            .then((entidade) => {
                res.status(200).json(entidade);
            }, (err) => {
                res.status(500).json(err);
            })
    } else {
        res.status(500).json('Id não encontrado.');
    }

});

module.exports = router;