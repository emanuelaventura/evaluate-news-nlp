projectData = {};

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
// Dependencies
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/sendUrlOrText', function (req,res){
    console.log("receving post")
    /*newEntry = {
      temperature: req.body.temp,
      date: req.body.date,
      user_response: req.body.feel
    }*/
    //projectData["urlOrText"]=req.body.urlOrText
    //console.log(req)
  
    //console.log(req.body)


    const formData = new FormData()
    formData.append('key', process.env.API_ID)
    formData.append('txt', req.body.urlOrText)
    formData.append('url', req.body.urlOrText)

    fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        body: formData
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        res.send(data)
    })
})

app.get('/test', function (req, res) {
    //üres.send(mockAPIResponse)
    
    const formData = new FormData()
    formData.append('key', process.env.API_ID)
    formData.append('txt', 'ciao')

    fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        body: formData
    })
.then(r => r.json())
.then(data => {
  console.log(data)
  res.send(data)
})


})
