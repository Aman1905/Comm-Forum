const express = require('express')
const router = express.Router()

const questionDB = require('../models/question')

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl
        }).then(() => {
            res.status(201).send({
                status: true,
                message: "Question Added Successfully"
            }).catch((err) => {
                res.status(400).send({
                    status: false,
                    message: "Bad Request"
                })
            })
        })
    } catch (e) {
        res.status(500).send({
            status: false,
            message: "Error while adding Question"
        })
    }
})

router.get('/', (req, res) => {
    // using mongodb aggregation to join two tables
})

module.exports = router