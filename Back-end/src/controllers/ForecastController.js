export const getForecast = async (req, res) => {
    const { city } = req.params

    try {
        const response = await fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`)

        if (!response.ok) {
            return res.status(500).json({ error: `Failed to fetch forecast for ${city}` })
        }

        const forecast = await response.json()
        
        res.json(forecast)
    } catch (error) {
        res.status(500).json({ error: `An error occured while fetching forecast for ${city}` })
    }
}
