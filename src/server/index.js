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
// Note: I use here 8081 to be different to the express port that is 8080
app.listen(8081, function () {
    console.log('TextAnalyzer Server listening on port 8081!')
})


// receiving with a post from the client an url or txt used after to do a fetch post to the meaningcloud API
app.post('/sendUrlOrText', function (req,res){
    console.log("receving post")

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
        usefulData = extractUsefulData(data)
        res.send(usefulData)
    })
})

// To decouple the API and our client, I elaborate here in the server what I get from the API 
// and I return to the client an other object filled only with the useful data for our case
function extractUsefulData(data){
    console.log("in extractUsefulData")
    //console.log(data)
    //console.log(data["confidence"])
    //console.log(data["irony"])
    console.log(data["score_tag"])
    //console.log(data["sentence_list"][0]["text"])
    usefulData = {}
    usefulData["confidence"]= data["confidence"]
    usefulData["irony"]= data["irony"]
    usefulData["subjectivity"]= data["subjectivity"]
    usefulData["global_polarity"]= polarityToString(data["score_tag"])
    //usefulData["text"]= data["sentence_list"][0]["text"]
    return usefulData
}

function polarityToString(polarity) {
    switch (polarity) {
        case 'P+':
          return "strong positive"    
        case 'NEU':
            return "neutral"      
        case 'N':
            return "negative"      
        case 'N+':
            return "strong negative"
        case 'NONE':
            return "without polarity"      
        default:
          return "without polarity"
      }
}


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
.then(r => r.json())
.then(data => {
  console.log(data)
  res.send(data)
})


})
