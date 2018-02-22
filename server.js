import register from 'ignore-styles';
register(['.sass', '.scss'])

import express from 'express';

import React from'React';
import ReactDOMServer from "react-dom/server"
import bodyParser from "body-parser"
import {Twitter} from 'twitter-js-client'; 

import Home from './src/components/Home';

const app = express();

var config = {
    "consumerKey": "uKcZc5mV2bEsvYE6lDjD0d0Y3",
    "consumerSecret": "Wlpbg2M6dreS5Coq10ITy3B8EJqs9UHIrV500HtOYEATMjUehw",
    "accessToken": "966289510471557121-Tod3pf2hYXUYigswpMH2m6KiJHA24wm",
    "accessTokenSecret": "HNhLI0FExehlkzlTQRUX0Cjr4xhN4584X17H1bCCv8NFu",
    "callBackUrl": "http://api.me"
}

var twitter = new Twitter(config);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.post('/user', (req,res) => {
    let user = req.body.user;

    twitter.getUserTimeline({ screen_name: user, count: '10'}, (err) =>{
        res.send({err: err})
    }, (data) => {
        res.json(data)
    });
})

app.get('*', (req,res) => {

    const content = ReactDOMServer.renderToString(
       <Home/>
    )

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link rel="stylesheet" href="styles.css">
            <title>Twitter Time Line</title>
        </head>
        <body>
            <div id="app">${content}</div>
            <script src="bundle.js"></script>
        </body>
        </html>
        `)
        res.end()
})

app.listen(3300, function(){
    console.log("app listening on port localhost:3300")
});


