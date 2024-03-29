const app = require('../../app');
const supertest = require('supertest');

describe('returns json data for all species', () => {
    it('returns an object with all species', async () => {

        await supertest(app).get("/species")
        .expect(200)
        .then((response)=>{
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(25);
        })
    })

    it('returns an object with a number of students equal to or less than a limit', async () =>{

        await supertest(app).get("/species?limit=10")
            .expect(200)
            .then(response => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(10);
            })

        await supertest(app).get("/species?limit=35")
            .expect(200)
            .then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(25);
            })


    })
})


//modify this api so tha it takes a min and max id and returns all students by id in that

// /species?min=3&max=10 => all students with ids >= 3 and <= 10