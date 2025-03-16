import { Button } from '@carbon/react'
import { useCitiesContext } from "../context/CitiesContext"
import React, { useEffect } from 'react'
import { useSelectedCityContext } from "../context/SelectedCityContext"


const MostViewedCities = ({ handleCityChange }) => {
    const { cities } = useCitiesContext()
    const { selectedCity } = useSelectedCityContext()
    const [viewedCities, setViewedCities] = React.useState(JSON.parse(localStorage.getItem('viewedCities')) || [])

    useEffect(() => {
        setViewedCities(JSON.parse(localStorage.getItem('viewedCities')) || [])
    }, [selectedCity])

    const getMostViewedCities = () => {
        const mergedCities = [
            ...viewedCities,
            ...cities.filter(city => !viewedCities.some(viewedCity => viewedCity.value === city.value))
        ]

        return mergedCities.slice(0, 3)
    }

    return (
        <>
            {cities && cities.length > 0 &&
                <div className='most-viewed-cities'>
                    {
                        getMostViewedCities().map((city) => (
                            <Button key={city.value} onClick={() => handleCityChange(city)}>{city.label}</Button>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default MostViewedCities
