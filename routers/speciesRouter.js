const express = require('express');
const router = express.Router();

//student dummy data
const studentData = require('../studentData.json');

router.get('/', (request, response) => {

    let { limit=25, min=0, max } = request.query;

    limit = Number(limit);

    let studentDataForDelivery = {...studentData};

    studentDataForDelivery.students = studentDataForDelivery.students.slice(0, limit)

    response.send(studentDataForDelivery);

    // //SELECT * FROM species
    // if(!min && !max){
    //     //SELECT * FROM species LIMIT $1, [limit]
    // } else {
    // //SELECT * FROM species WHERE id >= $1 AND id <= $2 LIMIT $3, [min, max, limit] 
    // }
})

//write a route to get a student by their full name

//implement min an max ids for get students

//write a route to get the grade average of a student by their id

//get all students sorted by their last name






router.get('/:id', (request, response) => {
    try{
        const studentId = request.params.id;

        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number');
        }

        const singleStudent = studentData.students.find(student => {
            return student.id === studentId;
        });
        
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