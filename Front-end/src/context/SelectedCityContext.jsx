import React, { createContext, useContext } from 'react'

const SelectedCityContext = createContext(null)

export const SelectedCitiesProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = React.useState('vilnius')

    return (
        <SelectedCityContext.Provider value={{ selectedCity, setSelectedCity }}>
            {children}
        </SelectedCityContext.Provider>
    )
}

export const useSelectedCityContext = () => useContext(SelectedCityContext)
