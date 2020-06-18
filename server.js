const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({limit: '10mb', extended: true}));

/* API responsible for logging in the user */
app.post('/api/loginUser', (req,res) => {
  /* reading data file */
  fs.readFile('./data/loginData.json' , (err, data) => {
    let dataArray = JSON.parse(data);
    let userExist = false
    /* linear search on the whole array to find the user to log in */
    for(let i = 0; i < dataArray.length; i++){
      if(dataArray[i].username === req.body.username && dataArray[i].password === req.body.password){
        userExist = true;
        break;
      }
    }
    /* sends a response true if all credentials match, else with false */
      res.send({userExist: userExist});
  });
});

/* API responsible for checking if the username entered has been use before or not */
app.post('/api/checkUserName' , (req, res) => {
  fs.readFile('./data/loginData.json' , (err,data) => {
    let dataArray = JSON.parse(data);
    let userNameAvailable = true;
    for(let i = 0; i < dataArray.length; i++){
      if(dataArray[i].username === req.body.username){
        userNameAvailable = false;
        break;
      }
    }
    res.send({userNameAvailable: userNameAvailable})
  });
});

/* API responsible for registering / signing up a new user */
app.post('/api/signUpUser', (req, res) => {
  let newUser = {
    username: req.body.username,
    password: req.body.password
  }
  fs.readFile('./data/loginData.json', (err, data) => {
    let dataArray = JSON.parse(data);
    dataArray.push(newUser);
    fs.writeFile("./data/loginData.json", JSON.stringify(dataArray), function(err){
      if (err) throw err;
      console.log('The user was sucessfully registered ');
      res.send({userRegistered: true})
    });
  });
});

/* API called when user wants to change it's password */
app.post('/api/changePassword', (req, res) => {
  fs.readFile('./data/loginData.json', (err, data) => {
    let status = false;
    let dataArray = JSON.parse(data);

    for(let i = 0; i < dataArray.length; i++){
      if(dataArray[i].username === req.body.username && dataArray[i].password === req.body.oldPassword){
        dataArray[i].password = req.body.newPassword;
        status = true;
        break;
      }
    }
    if(status){
      fs.writeFile("./data/loginData.json", JSON.stringify(dataArray), function(err){
        if (err) throw err;
        console.log('The password was successfully changed');
        res.send({passwordChange: status})
      });
    }
    else{
      res.send({passwordChange: status})
    }
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));