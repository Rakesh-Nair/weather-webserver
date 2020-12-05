const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rakesh'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Rakesh'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Rakesh',
        message: 'How can i help you'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'snowing',
        location: 'Mumbai'
    });
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Rakesh',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Rakesh',
        message: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up at port 3000');
})