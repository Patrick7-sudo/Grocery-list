import app from './app.js'
import request from "supertest"


    test(`when click the item will display`, async()=>{
        await request(app)
        //make a get request to /
            .get("/what/what")
        //expect http status code of 200
            .expect(200)
        //Do we get backa correctly shaped body?
            //{success:true,payload:'server is up}
          .expect(function(res){
            const actual =res.body;
            //console.log(actual)
            const expected ={ success: true,
                 "payload": expect.arrayContaining([{ id: expect.any(Number), item: expect.any(String), store: expect.any(String),weight: expect.any(String),price: expect.any(String)}])
            }
            expect(actual).toEqual(expected)
        })
    })


// test("Has the structure { success: true }", function () {
//   const apiResponse = {
//     success: true,
//   };
//   const expected = {
//     success: true,
//   };

//   expect(apiResponse).toStrictEqual(expected)
// });