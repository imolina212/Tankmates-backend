const express = require('express');
const { response } = require('../app');
const router = express.Router();

//student dummy data
const studentData = require('../studentData.json');

router.get('/', (request, response) => {
    response.send(studentData)
})

router.get('/:id', (request, response) => {
    const studentId = request.params.id;

    if(!/[0-9]/.test(studentId)){
        response.send('Student id must be a number')
    }

    const singleStudent = studentData.students.find(student => {
        return student.id === studentId;
    });

    console.log(singleStudent);
    if(singleStudent){
        response.json(singleStudent);
    } else {
        response.send('Student not found')
    }
})

module.exports = router;