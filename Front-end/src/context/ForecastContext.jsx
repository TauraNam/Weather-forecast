import React, { createContext, useContext, useEffect } from 'react'
import { useSelectedCityContext } from './SelectedCityContext'

const ForecastContext = createContext(null)

export const ForecastProvider = ({ children }) => {
    const [forecast, setForecast] = React.useState()
    const { selectedCity } = useSelectedCityContext()

    const getForecast = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/forecast/' + selectedCity)

            if (!response.ok) {
                throw new Error('Network response error.')
            }

            const data = await response.json()


            setForecast(data)
        } catch (err) {
            console.error('Error during fetch:', err)
        }
    }

    useEffect(() => {
        getForecast()
    }, [selectedCity])

    return (
        <ForecastContext.Provider value={{ forecast }}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useForecastContext = () => useContext(ForecastContext)
