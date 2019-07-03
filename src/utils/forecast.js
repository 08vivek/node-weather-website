const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/29793c3139d5a02362c08410465ff567/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 'f farenheit out. There is a ' + body.currently.precipProbability + '% chance of rain. Temperature-High : '+body.daily.data[0].temperatureHigh+'f farenheit. Temperature-Low : '+body.daily.data[0].temperatureLow+'f farenheit.')        }
    })
}

module.exports = forecast