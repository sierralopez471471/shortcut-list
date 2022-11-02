//Handy Express App Checklist

//Navigate to my 'code' folder
//Make a new folder (named for the project)
//Inside folder create a file called 'index.js'
//Open my terminal and navigate to the project folder
//Run the command "npm init -y"
//Run the command "npm install express"
//Open up 'index.js'
//8. Require express at the top of the file
//9. Initialize the app variable
//10. Create the home page route
    //a. Call app.get()
    //b. Set '/' as the path (first arg)
    //c. Write callback function with req, res
    //d. Call res.send('hello world')
//11. Call app.listen(3000) to keep server open

const express = require('express') //8

const app = express() //9

app.get('/', function (req, res) { //10
    //This gets sent to the client
    //(your web browser most likely)
    res.send('Hello World')
})

app.listen(3000, function() {
    console.log('I am awake')
})