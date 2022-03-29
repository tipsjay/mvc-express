const router = require('express').Router();
const UserModel = require('../models/user');

router.get('/',async (req,res) => {
    const users = await UserModel.getAll();
    return res.send(users);
}).get('/:id', async (req,res) => {
    const user = await UserModel.getById(req.params.id);
    return res.send(user);
}).post('/', async (req,res) => {
    const { inserted } = await UserModel.createUser(req.body);
    return res.send({ created: !!inserted })
});



module.exports = router;