const express = require('express');
const router = express.Router();

//student dummy data
const studentData = require('../studentData.json');

router.get('/', (_, response) => {
    response.send(studentData);
})

router.get('/:id', (request, response) => {
    try{
        const studentId = request.params.id;

        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number');
        }

        const singleStudent = studentData.students.find(student => {
            return student.id === studentId;
        });

        console.log(singleStudent);
        if(singleStudent){
            response.json(singleStudent);
        } else {
            response.send('Student not found');
        }
    } catch(err){
        response.status(500).send("An error occurred");
    }
})

module.exports = router;