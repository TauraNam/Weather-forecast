import { format, parse } from 'date-fns'
import { conditionToImageMap, roundTemperature } from '../helpers/helper'

const ForecastCard = ({ forecastItem }) => {
    const forecastDate = parse(forecastItem[0].forecastTimeUtc, 'yyyy-MM-dd HH:mm:ss', new Date())

    const night = forecastItem[0]
    const day = forecastItem[2] ? forecastItem[2] : forecastItem[1]

    return (
        <div className="forecast-card">
            <div className='forecast-card-date'>
                <h3>{format(forecastDate, 'eeee')}</h3>
                <h3>{format(forecastDate, 'MM-dd')}</h3>
            </div>
            <div className="forecast-card-temperature-data">
                <p>Night</p>
                <img src={`https://www.meteo.lt/app/mu-plugins/Meteo/assets/img/icons/night/${conditionToImageMap[night.conditionCode]}`} alt={night.conditionCode} className="forecast-condition-image" />
                <p className='temperature'>{roundTemperature(night.airTemperature)}°C</p>
            </div>
            <div className="forecast-card-temperature-data">
                <p>Day</p>
                <img src={`https://www.meteo.lt/app/mu-plugins/Meteo/assets/img/icons/day/${conditionToImageMap[day.conditionCode]}`} alt={day.conditionCode} className="forecast-condition-image" />
                <p className='temperature'>{roundTemperature(day.airTemperature)}°C </p>
            </div>
        </div>
    )
}

export default ForecastCard
