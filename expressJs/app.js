
const fs = require('fs');
const path = './test.json'
let jsonFile = null;
fs.readFile(path, 'utf8', (err, data) => {

    if (err) {
        console.error('Error while reading the file:', err)
        return
      }
      try {
        jsonFile = JSON.parse(data);
        // output the parsed data
        //console.log(data);
      } catch (err) {
        console.error('Error while parsing JSON data:', err);
      }
    
})

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000;





app.get('/test', (req, res) => {

    //console.log(JSON.stringify(jsonFile));
  
    res.send(jsonFile)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})