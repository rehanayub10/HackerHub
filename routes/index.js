const express = require('express')
const router = express.Router()
const Project = require('../models/Project');

router.get('/', (req,res) => {
    res.send('Nothing for now')
});

router.get('/projects', async(req, res) => {
    try {
        const projects = await Project.find();
        return res.json(projects);
    } catch {
        res.redirect('/');
    }
});

router.post('/projects', async (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        description: req.body.description,
        maxCapacity: req.body.maxCapacity,
        members: req.body.members,
        tags: req.body.tags,
    })
    try {
        await newProject.save();
        res.send("Project successfully saved");
    } catch(err) {
        console.log(err);
    }
 })

module.exports = router;