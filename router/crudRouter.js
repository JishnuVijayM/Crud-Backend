const express = require('express')
const router = express.Router()

const crudController = require('../controller/crudController')

router.route("/get").get(crudController.fetchData)

router.route('/post').post(crudController.postData)

router.route('/update/:id').put(crudController.editData)

router.route('/delete/:id').delete(crudController.deleteData)

module.exports = router