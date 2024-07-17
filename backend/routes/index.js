var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var projectModel = require('../models/userProjects');

let secret = "secret";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signUp", async (req, res) => {
  let { username, name, email, password } = req.body;

  let emailCon = await userModel.findOne({ email });

  if (emailCon) {
    return res.json({
      success: false,
      message: "Email already exists"
    });
  }
  else {

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {

        let user = await userModel.create({
          username,
          name,
          email,
          password: hash
        });

        var token = jwt.sign({ email: user.email, userID: user._id }, secret);

        res.json({
          success: true,
          userID: user._id,
          message: "User created successfully",
          token: token
        });

      });
    });

  }

});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ email: user.email, userID: user._id }, secret);
        res.json({
          success: true,
          userID: user._id,
          message: "User logged in successfully",
          token: token
        });
      }
      else {
        res.json({
          success: false,
          message: "Password is incorrect"
        });
      }

    }
    )
  }
  else {
    return res.json({
      success: false,
      message: "Email Id Not Exist !"
    })
  }

});

router.post("/createProject",async (req,res)=>{
  let {title,desc,isPublic,template,createdBy} = req.body;
  let createdProject = await projectModel.create({title,desc,isPublic,template,createdBy});
  res.json({success:true,projectID:createdProject._id});
})

// Route to create a folder
router.post("/createFolder", async (req, res) => {
  try {
    const { name, isIn, projectID } = req.body;

    // Find the project by ID
    let project = await projectModel.findById(projectID);

    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Push the new folder into the project's folders array
    project.folders.push({
      name,
      isIn,
      date: new Date() // Automatically add the current date
    });

    // Save the updated project
    await project.save();

    // Return the updated project
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Route to create a file
router.post("/createFile", async (req, res) => {
  try {
    const { name, isIn, content, projectID } = req.body;

    // Find the project by ID
    let project = await projectModel.findById(projectID);

    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Push the new file into the project's files array
    project.files.push({
      name,
      isIn,
      content,
      date: new Date() // Automatically add the current date
    });

    // Save the updated project
    await project.save();

    // Return the updated project
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
