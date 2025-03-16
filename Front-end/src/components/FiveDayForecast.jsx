import React, { useEffect } from 'react'
import { useSelectedCityContext } from '../context/SelectedCityContext'
import { useForecastContext } from '../context/ForecastContext'
import { addDays } from 'date-fns'
import ForecastCard from './ForecastCard'

const FiveDayForecast = () => {
    const { selectedCity } = useSelectedCityContext()
    const { forecast } = useForecastContext()
    const [filteredForecasts, setFilteredForecasts] = React.useState([])

    function filterForecasts() {
        const now = new Date()

        const days = [
            new Date(addDays(now, 1)),
            new Date(addDays(now, 2)),
            new Date(addDays(now, 3)),
            new Date(addDays(now, 4)),
            new Date(addDays(now, 5)),
        ]

        let forecasts = []

        for (const day of days) {
            forecasts.push(
                forecast && forecast.forecastTimestamps.filter(item => {
                    const forecastTime = new Date(item.forecastTimeUtc)
                    const hours = forecastTime.getHours()
                    const forcastDay = forecastTime.getDate()

                    return (forcastDay === day.getDate()) && (hours === 3 || hours === 15 || hours === 12)
                })
            )
        }

        setFilteredForecasts(forecasts)
    }

    useEffect(() => {
        filterForecasts()
    }, [forecast, selectedCity])

    return (
        <>
            <h2 className='header'>5-Day Forecast</h2>
            <div className='five-day-forecast-container'>
                {filteredForecasts.length > 0 && (filteredForecasts.map((forecastItem, index) => {
                    if (!forecastItem) return
                    return <ForecastCard forecastItem={forecastItem} key={index} />
                }))
                }
            </div>
        </>
    )
}

export default FiveDayForecast
