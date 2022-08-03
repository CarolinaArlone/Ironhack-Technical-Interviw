const phones = require('./../data/phones.json')
const router = require("express").Router();

router.get('/', (req, res) => {

    res.json(phones)

})

router.get('/:id', (req, res) => {

    const { id } = req.params

    const result = phones.find(phone => phone.id == id)

    res.json(result)

})


module.exports = router