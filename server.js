const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '10mb', extended: true}));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/loginUser', (req,res) => {
  fs.readFile('./data/loginData.json' , (err, data) => {
    let dataArray = JSON.parse(data);
    let userExist = false
    for(let i = 0; i < dataArray.length; i++){
      if(dataArray[i].username === req.body.username && dataArray[i].password === req.body.password){
        userExist = true;
        break;
      }
    }
      res.send({userExist: userExist});
  });
});

app.post('/api/checkUserName' , (req, res) => {
  fs.readFile('./data/loginData.json' , (err,data) => {
    let dataArray = JSON.parse(data);
    console.log(dataArray)
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


app.listen(port, () => console.log(`Listening on port ${port}`));