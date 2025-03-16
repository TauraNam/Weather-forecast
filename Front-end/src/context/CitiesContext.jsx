import React, { createContext, useContext, useEffect } from 'react'

const CitiesContext = createContext(null)

export const CitiesProvider = ({ children }) => {
    const [cities, setCities] = React.useState([])

    const getCities = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cities')

            if (!response.ok) {
                throw new Error('Network response error.')
            }

            const data = await response.json()


            setCities(data.map((item) => (
                { value: item.code, label: item.name }
            )))
        } catch (err) {
            console.error('Error during fetch:', err)
        }
    }

    useEffect(() => {
        getCities()
    }, [])

    return (
        <CitiesContext.Provider value={{ cities }}>
            {children}
        </CitiesContext.Provider>
    );
}

export const useCitiesContext = () => useContext(CitiesContext)
