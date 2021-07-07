const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
// router.get("/comments", (req, res) => res.json(comments));

router.get('/', userController.list)
//contacts/:id
router.get('/:id',userController.show)
//Create new contact Post
router.post('/',userController.create)
//UPDATE user
router.put('/:id',userController.update)
//DELETE user
router.delete('/:id',userController.deleteUser)
module.exports = router;