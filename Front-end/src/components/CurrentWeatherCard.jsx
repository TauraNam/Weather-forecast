import React, { useEffect } from "react"
import { useForecastContext } from "../context/ForecastContext"
import { conditionToImageMap, formatDate, roundTemperature } from '../helpers/helper.js'

const CurrentWeatherCard = () => {

    const { forecast } = useForecastContext()
    const [currentForecast, setCurrentForecast] = React.useState()

    const getCurrentForecast = () => {
        if (!forecast) return
        const now = new Date()

        const current = forecast.forecastTimestamps.filter(item => {
            const forecastTime = new Date(item.forecastTimeUtc)
            const hours = forecastTime.getHours()
            const day = forecastTime.getDate()

            return (day === now.getDate()) && (hours === now.getHours())
        })

        setCurrentForecast(current[0])
    }

    useEffect(() => {
        getCurrentForecast()
    }, [forecast])

    return (
        <>
            <h2 className="header">Current Weather</h2>
            <div className="current-weather-container">
                {currentForecast && (
                    <div className="current-weather-card">
                        <div>
                            <p className="place-name">{forecast.place.name}</p>
                            <p>{formatDate(currentForecast.forecastTimeUtc)}</p>
                            <p>Feels like: {roundTemperature(currentForecast.feelsLikeTemperature)}°C</p>
                            <p>Wind speed (gusts): {currentForecast.windSpeed} ({currentForecast.windGust}) m/s</p>
                        </div>
                        <div>
                            <div className="current-temperature-container">
                                <img src={`https://www.meteo.lt/app/mu-plugins/Meteo/assets/img/icons/day/${conditionToImageMap[currentForecast.conditionCode]}`} alt={currentForecast.conditionCode} className="forecast-condition-image" />
                                <p className="current-temperature">{roundTemperature(currentForecast.airTemperature)}°C </p>
                            </div>
                            <p>Relative humidity: {currentForecast.relativeHumidity} %</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CurrentWeatherCard
