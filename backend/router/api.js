
const express = require("express");
const router = express.Router();
const DATA = require("../models/blogdata")

//student all list (get)
router.get('/getall', async (req, res) => {

    try {
        let list = await DATA.find();
        
        console.log(`from get method ${list}`);
        res.send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});


// fetch single student (get)
router.get('/getsingle', async (req, res) => {

    try {
        let id = req.params.id;
        const singlestudent = await DATA.findById(id);
        console.log(`from get with id method ${singlestudent}`);
        res.send(singlestudent)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//add student (post)
router.post('/post', async (req, res) => {

    try {
        let item = {
            blogerName: req.body.blogerName,
            blogerImg: req.body.blogerImg,
            followCount: req.body.followCount,
            articleTitle: req.body.articleTitle,
            articleDate: req.body.articleDate,
            comments: req.body.comments,
            content: req.body.content
        }
        const newdata = new DATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


// delete student
router.delete('/delete/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletestudent = await DATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletestudent}`);
        res.send(deletestudent);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


// update student
router.put('/update', async (req, res) => {

    try {
        let id = req.body._id;
        let item = {
            "name": req.body.name,
            "age": req.body.age
        }
        let updatestudent = await DATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        res.send(updatestudent);
        console.log(`from put method old data ${updatestudent}`);
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



module.exports = router;