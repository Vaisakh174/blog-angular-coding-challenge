
const express = require("express");
const router = express.Router();
const DATA = require("../models/blogdata")

//student all list (get)
router.get('/comments', async (req, res) => {

    try {
        let list = await DATA.find();
        res.send(list.comments);
        console.log(`from get method ${list.comments}`);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});


// fetch single student (get)
router.get('/article/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singlestudent = await DATA.findById(id);
        console.log(`from get with id method ${singlestudent}`);
        res.send(singlestudent)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



// //add student (post)
// router.post('/student', async (req, res) => {

//     try {
//         let item = {
//             name: req.body.name,
//             age: req.body.age
//         }
//         const newstudent = new DATA(item);
//         const savestudent = await newstudent.save();
//         console.log(`from post method ${savestudent}`);
//         res.send(savestudent);

//     } catch (error) {
//         console.log(`error from get method ${error}`);
//     }

// });


// // delete student
// router.delete('/student/:id', async (req, res) => {

//     try {
//         let id = req.params.id;
//         let deletestudent = await DATA.findByIdAndDelete(id);
//         console.log(`from delete method ${deletestudent}`);
//         res.send(deletestudent);

//     } catch (error) {
//         console.log(`error from get method ${error}`);
//     }

// });


// // update student
// router.put('/student', async (req, res) => {

//     try {
//         let id = req.body._id;
//         let item = {
//             "name": req.body.name,
//             "age": req.body.age
//         }
//         let updatestudent = await DATA.findByIdAndUpdate(
//             { "_id": id },
//             { $set: item }
//         );
//         res.send(updatestudent);
//         console.log(`from put method old data ${updatestudent}`);
//     } catch (error) {
//         console.log(`error from get method ${error}`);
//     }

// });



module.exports = router;