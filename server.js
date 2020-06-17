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
    if(userExist){
      res.send({userExist: userExist})
    }
    else{
      res.send({userExist: false})
    }
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));