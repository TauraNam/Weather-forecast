import { format } from 'date-fns'

export const conditionToImageMap = {
    "clear": "giedra.png",
    "partly-cloudy": "mazai-debesuota.png",
    "cloudy-with-sunny-intervals": "debesuota-su-pragiedruliais.png",
    "cloudy": "debesuota.png",
    "light-rain": "nedidelis-lietus.png",
    "rain": "lietus.png",
    "heavy-rain": "smarkus-lietus.png",
    "thunder": "perkunija.png",
    "isolated-thunderstorms": "trumpas-lietus-su-perkunija.png",
    "thunderstorms": "lietus-su-perkunija.png",
    "heavy-rain-with-thunderstorms": "smarkus-lietus-su-perkunija.png",
    "light-sleet": "nedidele-slapdriba.png",
    "sleet": "slapdriba.png",
    "freezing": "rain-lijundra.png",
    "hail": "krusa.png",
    "light-snow": "nedidelis-sniegas.png",
    "snow": "sniegas.png",
    "heavy-snow": "smarkus-sniegas.png",
    "fog": "rukas.png"
}

export const formatDate = (date) => {
    return date
        ? format(new Date(date), 'EEEE, MMMM dd')
        : 'No date available'
}

export const roundTemperature = (temp) => {
    return temp !== null && temp !== undefined
        ? Math.round(temp)
        : 'No temperature available'
}
