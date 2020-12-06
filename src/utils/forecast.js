const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=acdb8cb5a42cc086ccf69d43ed728430&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather service !!', undefined);
        } else if (body.error) {
            callback(body.error.info, undefined);
        } else {
            callback(undefined, 'The Weather is ' + body.current.weather_descriptions[0] + ' throughout the day. It is currently '
                + body.current.temperature + ' degrees and feels like ' + body.current.feelslike + ' degrees.'
            );
        }
    })
}

module.exports = forecast;